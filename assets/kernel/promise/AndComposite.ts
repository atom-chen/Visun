import Composite from "./Composite";

// 复合节点基类
export default class AndComposite extends Composite {

	public constructor() {
		super();
	}

	//@overrided
	public resolve_succ(): void {
		throw new Error("Method not implemented.");
	}

	//@overrided
	public resolve_fail(): void {
		throw new Error("Method not implemented.");
	}

}
