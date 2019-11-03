import EventCenter from "../basic/event/EventCenter";
import TimerManager from "../basic/timer/TimerManager";

export default abstract class ModelBase{
	clear(): void {
		EventCenter.getInstance().removeByTarget(this);
		TimerManager.removeByTarget(this);
		this.on_clear();
	}
	abstract on_clear() : void;
}