module behavior {
	export class TargetLogic {
		public forBuddy:FOR_BUDDY;				//作用对象描述
		public priorityType:PRIORITY_TYPE;		//如果作用对象是多个中选一个，优先作用于哪一个对象
		public count:number;					//作用对象个数 -1表示全体
		public destRace:number = -1;			//目标职业 -1表示全体
		public destAttr:number = -1;			//目标属性 -1表示全体
		//
		private _filterType:number = 1;			// 1:活着的，2:死亡的，0：全部

		public constructor(targetType:FOR_BUDDY = FOR_BUDDY.ENEMY, priorityType:PRIORITY_TYPE = PRIORITY_TYPE.RANDOM, count:number = 1, destRace:number = 7, destAttr:number = 7) {
			this.forBuddy = targetType;
			this.priorityType = priorityType;
			this.count = count;
			this.destRace = destRace;
			this.destAttr = destAttr;
		}

		public clone() : TargetLogic {
			return new behavior.TargetLogic(this.forBuddy, this.priorityType, this.count, this.destRace, this.destAttr);
		}

		public set filterType(v:number) { this._filterType = v; }

		public static testAttrAndRace(card:fight.CardDataObject, dstAttr:number, dstRace:number) : boolean{
			if(dstAttr>0 && dstRace>0){
				return system.Util.hitTest(card.attr, dstAttr) && system.Util.hitTest(card.race, dstRace);
			} 
			else if(dstAttr>0) {
				return system.Util.hitTest(card.attr, dstAttr);
			}
			else if(dstRace>0) {
				return system.Util.hitTest(card.race, dstRace);
			}
			else {
				return true;
			}
		}

		public static sortByHpLest(a:fight.CardDataObject, b:fight.CardDataObject): number{            
            return a.hp - b.hp;
        }

		public static filterByPriority(theCaster:fight.CardDataObject, priType:PRIORITY_TYPE, pool:Array<fight.CardDataObject>) : Array<fight.CardDataObject>{
			if(priType===PRIORITY_TYPE.RANDOM){
				system.Util.shuffle(pool);
			}
			else if(priType===PRIORITY_TYPE.LESS_HP){
				pool.sort(this.sortByHpLest);
			}
			else if(priType===PRIORITY_TYPE.ATTR_BEST){
				pool.sort((function(fromAttr:number){
					return function(a:fight.CardDataObject, b:fight.CardDataObject):number{
							var ma:number= a.getMutexSettingValue(fromAttr, a.attr);
							var mb:number= a.getMutexSettingValue(fromAttr, b.attr);
							if(ma==mb){
								return a.hp-b.hp;
							}
							return mb - ma;
						};
					}
				)(theCaster.attr));
			}
			return pool;
		}

		public findTargets(theCaster:fight.CardDataObject) : Array<fight.CardDataObject> {
			var targets:Array<fight.CardDataObject> = new Array<fight.CardDataObject>();
			var totalCnt:number = this.count;
			if (totalCnt <= 0)  totalCnt = 9999;  //-1表示全体

			switch(this.forBuddy){
				case behavior.FOR_BUDDY.SELF:
					targets.push(theCaster);
					break;
				case behavior.FOR_BUDDY.TEAMMATE:
					var teammates:Array<fight.CardDataObject> = fight.fightServiceInstance().getTeammates(theCaster, this._filterType);
					teammates = TargetLogic.filterByPriority(theCaster, this.priorityType, teammates);
					for(var i=0; i<teammates.length; i++){
						if(teammates[i] && teammates[i].isAlive()){
							if(targets.length >= totalCnt){
								break;
							}
							if(TargetLogic.testAttrAndRace(teammates[i], this.destAttr, this.destRace)){
								targets.push(teammates[i]);
							}
						}
					}
					break;
				case behavior.FOR_BUDDY.SELF_TEAMMATE:
					targets.push(theCaster);
					
					var objlist:Array<fight.CardDataObject> = fight.fightServiceInstance().getTeammates(theCaster, this._filterType);
					objlist = TargetLogic.filterByPriority(theCaster, this.priorityType, objlist);
					for(var i=0; i<objlist.length; i++){
						if(objlist[i] && objlist[i].isAlive()){
							if(targets.length >= totalCnt){
								break;
							}
							if(TargetLogic.testAttrAndRace(objlist[i], this.destAttr, this.destRace)){
								targets.push(objlist[i]);
							}
						}
					}
					break;
				case behavior.FOR_BUDDY.ENEMY:
					var enemys:Array<fight.CardDataObject> = fight.fightServiceInstance().getEnemys(theCaster, this._filterType);
					//优先攻击仇恨对象：比如嘲讽
					var focusList:Array<fight.CardDataObject> = theCaster.getForcusedEnemys(enemys, totalCnt);
					for(var i=0; i<focusList.length; i++){
						if(focusList[i] && focusList[i].isAlive()){
							if(targets.length >= totalCnt){
								break;
							}
							if(TargetLogic.testAttrAndRace(focusList[i], this.destAttr, this.destRace)){
								targets.push(focusList[i]);
							}
						}
					}
					//再攻击其他人
					enemys = TargetLogic.filterByPriority(theCaster, this.priorityType, enemys);
					for(var i=0; i<enemys.length; i++){
						if(enemys[i] && enemys[i].isAlive()){
							if(targets.length >= totalCnt){
								break;
							}
							if(TargetLogic.testAttrAndRace(enemys[i], this.destAttr, this.destRace)){
								if(targets.indexOf(enemys[i]) < 0){
									targets.push(enemys[i]);
								}
							}
						}
					}
					break;
				case behavior.FOR_BUDDY.QUESTIONCOLOR:
				case behavior.FOR_BUDDY.ANSWER:
					targets.push(fight.fightServiceInstance().getQuesAgent());
					break;
			}

			return targets;
		}
	}
}