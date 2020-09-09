export const CLIENT_VERSION = "1.0.0";

export enum GameKindEnum {
	//百人
	Baccarat	= 2001,			//百家乐
	Toubao		= 2002,			//骰宝
	BrCowCow 	= 2003,			//百人牛牛
	Longhu 		= 2004,			//龙虎
	Brttz		= 2005,			//百人推筒子
	//对战
	QzCowcow	= 1001,			//抢庄牛牛
	Texas		= 1002,			//德州(港式五张)
	Zhajinhua	= 1003,			//炸金花
	TbCowcow	= 1005,			//通比牛牛
	Sangong		= 2006,			//三公
	//
	Landlord	= 3001,			//斗地主
	Ermj		= 3002,			//麻将
	Buyu		= 3003,			//捕鱼

	//
	Paijiu		= 10900,		//牌九
	Redpacket	= 10500,		//抢红包
	BirdBeast	= 10600,		//飞禽走兽
	Redblack	= 10700,		//红黑
	BrJinhua 	= 10200,		//百人金花
	
	//
	Blackjack	= 20400,		//21点（黑杰克）
	Water13		= 20600,		//13水
	Qzpaijiu	= 20700,		//抢庄牌九
	Suoha		= 20800,		//梭哈
	Paodekuai	= 20900,		//跑得快
	Erba		= 21200,		//二八杠
	//街机电玩
	Jskb		= 30200,		//极速狂飙
	//
	RPG = 99999, 				//（回合制+即时制+格斗）
}