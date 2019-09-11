import Composite from "./Composite";

// 复合节点基类
export default class AndComposite extends Composite {
	public resolve_succ(): void {
		throw new Error("Method not implemented.");
	}
	public resolve_fail(): void {
		throw new Error("Method not implemented.");
	}

	public constructor() {
		super();
	}

}
