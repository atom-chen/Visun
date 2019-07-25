const {ccclass, property} = cc._decorator;

@ccclass
export default abstract class PlayUnit {
	public abstract play() : void;
	public stop(){}
}
