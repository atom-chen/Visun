import CommonUtil from "../../../../../kernel/utils/CommonUtil";

const {ccclass, property} = cc._decorator;

@ccclass
export default class game_btn extends cc.Component {
    @property(cc.Material)
    materl : cc.Material = null;

    onLoad () {
        this.getComponent(cc.Button)["_spriteMaterial"] = this.materl;
    }

    setGameInfo(cfg:any) {
        var m_ui:any = {};
        CommonUtil.traverseNodes(this.node, m_ui);

        cc.loader.loadRes(cfg.icon, cc.SpriteFrame, (err, rsc)=>{
            if(err) { cc.log("load fail", cfg.icon, err); return; }
            m_ui["Background"].getComponent(cc.Sprite).spriteFrame = rsc;
        //	m_ui["Background"].getComponent(cc.Sprite).sizeMode = cc.Sprite.SizeMode.RAW;
        });
    }
}
