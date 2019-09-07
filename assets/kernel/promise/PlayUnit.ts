//---------------------------------
// 
//---------------------------------
import Procedure from "./Procedure";

export default abstract class PlayUnit {
	public abstract play(node:Procedure) : void;
	
	public stop(node:Procedure) : void 
	{

	}
}
