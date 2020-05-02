//---------------------------------
// 采用组件式编程方式
// ecs: e指entity  c指component  s指system
//---------------------------------
import EcsComponent from "./EcsComponent";

export default class EcsEntity {
	private entityId:number = 0;
	private components:Array<EcsComponent> = [];

	constructor(id:number) {
		this.entityId = id;
	}

	public getEntityId() : number {
		return this.entityId;
	}

	public addComponent(comp:EcsComponent) {
		var old = comp.getEntity();
		if(old && old !== this) {
			old.delComponent(comp);
		}
		if(this.components.indexOf(comp) < 0) {
			this.components.push(comp);
			comp.onBindToEntity(this);
		}
	}

	public delComponent(comp:EcsComponent) {
		var idx = this.components.indexOf(comp);
		if(idx >= 0) {
			comp.onBindToEntity(null);
			this.components.splice(idx, 1);
		}
	}

	public getComponents() : Array<EcsComponent> {
		return this.components;
	}

	public frameUpdate(dt:number) {
		for(var i in this.components) {
			this.components[i].frameUpdate(dt);
		}
	}

}