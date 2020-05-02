import EcsEntity from "./EcsEntity";

export default class EcsComponent {
	private entity:EcsEntity = null;

	public getEntity() : EcsEntity {
		return this.entity;
	}

	public onBindToEntity(entity:EcsEntity) {
		this.entity = entity;
	}

	public bindToEntity(entity:EcsEntity) {
		if(this.entity) {
			if(this.entity === entity) {
				return;
			} else {
				this.entity.delComponent(this);
			}
		}
		entity.addComponent(this);
	}

	public removeFromEntity() {
		if(this.entity) {
			this.entity.delComponent(this);
		}
	}

	public frameUpdate(dt:number) {

	}
}