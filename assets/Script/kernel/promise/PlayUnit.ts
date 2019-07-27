import Procedure from "./Procedure";

export default abstract class PlayUnit {
	public abstract play(procedure:Procedure) : void;
	public stop(procedure:Procedure){}
}
