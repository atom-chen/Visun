const {ccclass, property} = cc._decorator;

@ccclass
export default class HotUpdator extends cc.Component {

	@property(cc.Label)
	label: cc.Label = null;

	@property
	text: string = 'hello';

	// LIFE-CYCLE CALLBACKS:

	onLoad () {

	}
}
