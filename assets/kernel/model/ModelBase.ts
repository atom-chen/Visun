import EventCenter from "../event/EventCenter";
import TimerManager from "../timer/TimerManager";

export default abstract class ModelBase{
	clear(): void {
		EventCenter.instance().removeByTarget(this);
		TimerManager.instance().removeByTarget(this);
		this.on_clear();
	}
	abstract on_clear() : void;
}