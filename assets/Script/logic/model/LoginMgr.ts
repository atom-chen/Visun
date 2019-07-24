import { LoginState } from "../../looker/Consts";

const {ccclass, property} = cc._decorator;

@ccclass
export default class LoginMgr extends cc.Component {

	@property
	curState:LoginState = LoginState.unlogin;
	
}
