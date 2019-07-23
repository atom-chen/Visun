const {ccclass, property} = cc._decorator;

@ccclass
export default class ProtobufCodec extends cc.Component {

	@property
	text: string = 'hello';

}
