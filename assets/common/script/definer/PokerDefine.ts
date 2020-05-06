//54张扑克牌编码
export enum PokerCode {
	KING = 0x0F,
	QUEEN = 0x0E,
	HT_K = 0x3D,
	HX_K = 0x2D,
	MH_K = 0x1D,
	FK_K = 0x0D,
	HT_Q = 0x3C,
	HX_Q = 0x2C,
	MH_Q = 0x1C,
	FK_Q = 0x0C,
	HT_J = 0x3B,
	HX_J = 0x2B,
	MH_J = 0x1B,
	FK_J = 0x0B,
	HT_10 = 0x3A,
	HX_10 = 0x2A,
	MH_10 = 0x1A,
	FK_10 = 0x0A,
	HT_9 = 0x39,
	HX_9 = 0x29,
	MH_9 = 0x19,
	FK_9 = 0x09,
	HT_8 = 0x38,
	HX_8 = 0x28,
	MH_8 = 0x18,
	FK_8 = 0x08,
	HT_7 = 0x37,
	HX_7 = 0x27,
	MH_7 = 0x17,
	FK_7 = 0x07,
	HT_6 = 0x36,
	HX_6 = 0x26,
	MH_6 = 0x16,
	FK_6 = 0x06,
	HT_5 = 0x35,
	HX_5 = 0x25,
	MH_5 = 0x15,
	FK_5 = 0x05,
	HT_4 = 0x34,
	HX_4 = 0x24,
	MH_4 = 0x14,
	FK_4 = 0x04,
	HT_3 = 0x33,
	HX_3 = 0x23,
	MH_3 = 0x13,
	FK_3 = 0x03,
	HT_2 = 0x32,
	HX_2 = 0x22,
	MH_2 = 0x12,
	FK_2 = 0x02,
	HT_A = 0x31,
	HX_A = 0x21,
	MH_A = 0x11,
	FK_A = 0x01
}

//花色
export enum PokerColor {
	HT = 3,
	HX = 2,
	MH = 1,
	FK = 0
}

//花色
export function getPokerColor(value:PokerCode) : PokerColor {
	return Math.floor(value / 16);
}

//牌面
export function getPokerValue(v:PokerCode) : number {
	return v & 0x0F
}

//
export function pokerColorName(code:PokerCode) : string
{
	var name:string = "";
	var color = getPokerColor(code);
	if(code == PokerCode.KING) {
		name = "大王";
	}
	else if(code == PokerCode.QUEEN) {
		name = "小王";
	}
	else if(color==PokerColor.HT) {
		name = "黑桃";
	}
	else if(color==PokerColor.HX) {
		name = "红心";
	}
	else if(color==PokerColor.MH) {
		name = "梅花";
	}
	else if(color==PokerColor.FK) {
		name = "方块";
	}
	return name;
}

export function pokerValueName(code:PokerCode) : string
{
	var value = getPokerValue(code);
	var vStr = "";
	if(value == PokerCode.KING) {
		vStr = "大王";
	}
	else if(value == PokerCode.QUEEN) {
		vStr = "小王";
	}
	else if(value==1) {
		vStr = "A"
	}
	else if(value <= 10) {
		vStr = value.toString();
	}
	else if(value == 11) {
		vStr = "J";
	}
	else if(value == 12) {
		vStr = "Q";
	}
	else if(value == 13) {
		vStr = "K";
	}
	return vStr;
}

export function pokerName(code:PokerCode) : string
{
	var strColor:string = pokerColorName(code);
	var strValue:string = pokerValueName(code);
	return strColor + strValue;
}
