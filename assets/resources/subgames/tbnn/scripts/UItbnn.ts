import BaseComponent from "../../../../kernel/view/BaseComponent";
import CommonUtil from "../../../../kernel/utils/CommonUtil";
import GameManager from "../../../../common/script/model/GameManager";
import EventCenter from "../../../../kernel/basic/event/EventCenter";
import { tbcowcow_msgs } from "../../../../common/script/proto/net_tbcowcow";
import { tbcowcow } from "../../../../../declares/tbcowcow";
import TbnnMgr from "./TbnnMgr";
import ProcessorMgr from "../../../../kernel/net/processor/ProcessorMgr";
import ChannelDefine from "../../../../common/script/definer/ChannelDefine";
import CpnPlayer1 from "../../../appqp/script/comps/CpnPlayer1";
import CpnHandcard2 from "../../../appqp/script/comps/CpnHandcard2";
import CpnCircleCD from "../../../appqp/script/comps/CpnCircleCD";
import CpnGameState from "../../../appqp/script/comps/CpnGameState";
import { GameKindEnum } from "../../../../common/script/definer/ConstDefine";
import ViewDefine from "../../../../common/script/definer/ViewDefine";
import UIManager from "../../../../kernel/view/UIManager";
import { isNil } from "../../../../kernel/utils/GlobalFuncs";
import LoginUser from "../../../../common/script/model/LoginUser";
import { gamecomm } from "../../../../../declares/gamecomm";


const MAX_SOLDIER = 5;
const CARD_CNT = 5;


const {ccclass, property} = cc._decorator;

@ccclass
export default class UItbnn extends BaseComponent {
    @property(cc.Prefab)
    cardTypeTemplate: cc.Prefab = null;
    
    private _pnodes:Array<cc.Node> = [];
    private _playerCpns:Array<CpnPlayer1> = [];
    private _handors:Array<CpnHandcard2> = [];
    private _cdCpns:Array<CpnCircleCD> = [];

    start () {
        CommonUtil.traverseNodes(this.node, this.m_ui);

        for(var i = 0; i <= 4; i++) {
            var nd = this.m_ui["p"+i];
            this._pnodes.push(nd);
            this._playerCpns.push(nd.getChildByName("CpnPlayer1").getComponent(CpnPlayer1));
            this._handors.push(nd.getChildByName("CpnHandcard2").getComponent(CpnHandcard2));
            this._cdCpns.push(nd.getChildByName("CpnCircleCD").getComponent(CpnCircleCD));
        }

		this.initUIEvent();
        this.initNetEvent();
        
        this.TbcowcowSceneResp(TbnnMgr.getInstance().getEnterData());
        ProcessorMgr.getInstance().getProcessor(ChannelDefine.game).setPaused(false);
    }

    //玩家的UI位置
    private playerIndex(player:tbcowcow.ITbcowcowPlayer) : number {
		if(isNil(player)){ return -1; }
        var hero = TbnnMgr.getInstance().getPlayer(LoginUser.getInstance().UserId);
        if(isNil((player.MyInfo as gamecomm.IPlayerInfo).ChairID)) { return -1; }
        if(isNil(hero)) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		if((hero.MyInfo as gamecomm.IPlayerInfo).ChairID===0) { return (player.MyInfo as gamecomm.IPlayerInfo).ChairID; }
		return ((player.MyInfo as gamecomm.IPlayerInfo).ChairID-(hero.MyInfo as gamecomm.IPlayerInfo).ChairID+MAX_SOLDIER) % MAX_SOLDIER;
    }

    private playerIdx(uid:number) : number {
        var p = TbnnMgr.getInstance().getPlayer(uid);
        return this.playerIndex(p);
    }

    private playFapaiAni() {
        var nn = 0;
        for(var i=0; i<MAX_SOLDIER; i++){
            if(this.getPlayerByIndex(i)) {
                this._handors[i].resetCards([0,0,0,0,0]);
                var fromPos = CommonUtil.convertSpaceAR(this.m_ui.cpzhuang, this._handors[i].node);
                for(var j=0; j<CARD_CNT; j++) {
                    nn++;
                    CommonUtil.bezierTo3(this._handors[i].node.children[j], fromPos, this._handors[i].getComponent(CpnHandcard2).getPosByIndex(j), 0.4, nn*0.06);
                }
            }
        }
    }

    getPlayerByIndex(idx:number) : tbcowcow.ITbcowcowPlayer {
        if(idx < 0) { return null; }
        var mans = TbnnMgr.getInstance().getPlayerList();
        if(mans) {
            for(var uid in mans) {
                if(this.playerIndex(mans[uid]) == idx) {
                    return mans[uid];
                }
            }
        }
        return null;
    }

    private refreshFighter(uid) {
        var man = TbnnMgr.getInstance().getPlayer(uid);
        var idx = this.playerIdx(uid);
        if(idx >= 0) {
            this._pnodes[idx].active = true;
            this._playerCpns[idx].setName((man.MyInfo as gamecomm.IPlayerInfo).Name);
            this._playerCpns[idx].setMoneyStr(CommonUtil.formRealMoney((man.MyInfo as gamecomm.IPlayerInfo).Gold));
            this._playerCpns[idx].setHeadImg((man.MyInfo as gamecomm.IPlayerInfo).FaceID);
            this._handors[idx].resetCards(man.Cards.Cards);
            this._handors[idx].playOpen(false);
        }
    }

    refreshPlayerByIndex(idx:number, flag:boolean = true) {
        if(idx < 0) { return; }
        var man = this.getPlayerByIndex(idx);
        if(isNil(man)) {
            this._pnodes[idx].active = false;
            return;
        }
        if(flag) {
            this.refreshFighter((man.MyInfo as gamecomm.IPlayerInfo).UserID);
        }
    }

    private TbcowcowSceneResp(param:tbcowcow.ITbcowcowSceneResp) {
        if(isNil(param)) { return; }

        TbnnMgr.delInstance();
        TbnnMgr.getInstance();
        if(param.AllPlayers) {
            for(var ii in param.AllPlayers) {
                TbnnMgr.getInstance().addPlayer(param.AllPlayers[ii]);
            }
        }

        this.m_ui.labgameuuid.getComponent(cc.Label).string = "牌局号：" + param.Inning;
        for(var n=0; n<MAX_SOLDIER; n++) {
            this.refreshPlayerByIndex(n);
        }
    }

    private TbcowcowStateFreeResp(data:tbcowcow.ITbcowcowSceneResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setZhunbei(true);
	}

	private TbcowcowStateDealResp(data:tbcowcow.ITbcowcowSceneResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setFapai(true);
		this.playFapaiAni();
	}

	private TbcowcowStatePlayingResp(data:tbcowcow.ITbcowcowSceneResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setXiazhu(true);
	}

	private TbcowcowStateOpenResp(data:tbcowcow.ITbcowcowSceneResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setKaipai(true);
	}

	private TbcowcowStateOverResp(data:tbcowcow.ITbcowcowSceneResp) {
		this.m_ui.CpnGameState2d.getComponent(CpnGameState).setPaijiang(true);
	}

    initNetEvent() {
        EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowSceneResp, this.TbcowcowSceneResp, this);
        EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStateFreeResp, this.TbcowcowStateFreeResp, this);
		EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStateDealResp, this.TbcowcowStateDealResp, this);
		EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStatePlayingResp, this.TbcowcowStatePlayingResp, this);
		EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStateOpenResp, this.TbcowcowStateOpenResp, this);
		EventCenter.getInstance().listen(tbcowcow_msgs.TbcowcowStateOverResp, this.TbcowcowStateOverResp, this);
	}

	initUIEvent() {
		CommonUtil.addClickEvent(this.m_ui.btn_close, function(){ 
            GameManager.getInstance().quitGame();
		}, this);
		CommonUtil.addClickEvent(this.m_ui.btn_help, function(){ 
            UIManager.openPopwnd(ViewDefine.UIHelpdoc, true, {kindId:GameKindEnum.TbCowcow});
		}, this);
	}

}
