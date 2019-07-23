const {ccclass, property} = cc._decorator;

enum LoginState {
	unlogin = 0,
	logining = 1,
	succ = 2
}

@ccclass
export default class LoginMgr extends cc.Component {

	@property
	curState:LoginState = LoginState.unlogin;
	
}
