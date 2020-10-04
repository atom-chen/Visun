export const CLIENT_VERSION = "1.0.0";

export enum GameModeEnum {
	qipaishi,
	ziyunying,
	guakao,
}

export enum GameTypeEnum {
	General = 0,
	Fight = 1,          //对战类(两个或两个以上玩家同桌博弈，如三公、诈金花、牛牛)
	Multiplayer = 2,    //百人类型
	RoomCard = 3,       //房卡类型
	Guess = 4,          //竞猜类型
	GamesCity = 5,      //电玩城类型
	DualMeet = 6,       //电竞类型
	Sport = 7,          //体育类型
	Smart = 8,          //益智休闲
	RPG = 9,            //RPG类型
}

export enum GameKindEnum {
	//百人
	Baccarat	= 2001,			//百家乐
	Toubao		= 2002,			//骰宝
	BrCowCow 	= 2003,			//百人牛牛
	Longhu 		= 2004,			//龙虎
	Brttz		= 2005,			//百人推筒子
	//对战
	Texas		= 1002,			//德州(港式五张)
	Zhajinhua	= 1003,			//炸金花
	QzCowcow	= 1004,			//抢庄牛牛
	TbCowcow	= 1005,			//通比牛牛
	Sangong		= 2006,			//三公
	//
	Landlord	= 3001,			//斗地主
	Ermj		= 3002,			//麻将
	Buyu		= 3003,			//捕鱼

	//
	Paijiu		= 10900,		//牌九
	Redpacket	= 10500,		//抢红包
	Redblack	= 10700,		//红黑
	BrJinhua 	= 10200,		//百人金花
	
	//
	Blackjack	= 20400,		//21点（黑杰克）
	Water13		= 20600,		//13水
	Qzpaijiu	= 20700,		//抢庄牌九
	Suoha		= 20800,		//梭哈
	Paodekuai	= 20900,		//跑得快
	Tuitongzi	= 21300,		//推筒子
	Jszjh		= 21400,		//极速炸金花
	K4zqznn		= 21500,		//看四张抢庄牛牛
	//街机电玩
	Jskb		= 30200,		//极速狂飙
	Slwh		= 30300,		//森林舞会
	Xlch		= 30400,		//血流成河
	//
	RPG = 99999, 				//（回合制+即时制+格斗）
}

export enum CardTypeEnum {
	danpai,
	duizi,
}
