import Procedure from "./Procedure";

const {ccclass, property} = cc._decorator;

@ccclass
export default abstract class PlayUnit {
	public abstract play(procedure:Procedure) : void;
	public stop(procedure:Procedure){}
}
