import CommonUtil from "../utils/CommonUtil";
import LoadCenter from "../load/LoadCenter";


export default class AudioManager {
    private static singleInstance: AudioManager = null;
    static getInstance(): AudioManager {
        if (AudioManager.singleInstance == null) {
            AudioManager.singleInstance = new AudioManager();
        }
        return AudioManager.singleInstance;
    }

    private effects: Array<cc.AudioClip> = null;

    private _currentMusicId: number = -1;
    private _currentMusicCacheUrl: string = null;

    private _currentEffectId: number = -1;
    private _currentEffectCacheUrl: string = null;

    private _musicEnable = false;
    private _effectEnable = false;

    private _musicVolume = 0.7;
    private _effectVolume = 0.7;

    private constructor() {
        this.effects = [];
    }


    enableMusic(flag:boolean) {
        this._musicEnable = flag;
        if(!flag) {
            this.stopMusic();
        }
    }

    enableEffects(flag:boolean) {
        this._effectEnable = flag;
        if(!flag) {
            this.stopEffect();
        }
    }


    setMusicVolume(volume: number) {
        volume = CommonUtil.limitNum(volume, 0, 1);
        this._musicVolume = volume;
        cc.audioEngine.setMusicVolume(volume);
        if (volume === 0) {
            this.stopMusic();
        }
    }

    setEffectsVolume(volume: number) {
        volume = CommonUtil.limitNum(volume, 0, 1);
        this._effectVolume = volume;
        cc.audioEngine.setEffectsVolume(volume);
        if (volume === 0) {
            this.stopEffect()
        }
    }


    stopMusic() {
        cc.audioEngine.stopMusic();
    }

    stopEffect() {
        if (this._currentEffectId < 0) {
            return;
        }
        cc.audioEngine.stopEffect(this._currentEffectId);
        this._currentEffectId = -1;
    }


    playMusic(audioclip: cc.AudioClip, loop: boolean) {
        if(!this._musicEnable || this._musicVolume<=0) { cc.log("music skip as disable or volume == 0"); return; }
        if(!audioclip) { cc.log("invalid audioClip"); return; }
        this._currentMusicCacheUrl = audioclip.nativeUrl;
        this._currentMusicId = cc.audioEngine.playMusic(audioclip, loop);
        cc.audioEngine.setFinishCallback(this._currentMusicId, () => {
            this._currentMusicCacheUrl = null;
            this._currentMusicId = -1;
        });
    }

    playMusicSync(path: string, loop: boolean) {
        if(!this._musicEnable || this._musicVolume<=0) { cc.log("music skip as disable or volume == 0"); return; }
        if(!path || path===""){ cc.log("invalid path", path); return; }
        cc.log("play music", path, loop);
        LoadCenter.getInstance().loadAudioClip(path, function (audioclip) {
            this.playMusic(audioclip, loop);
        }.bind(this));
    }


    playEffect(audioclip: cc.AudioClip, loop:boolean = false) {
        if(!this._effectEnable || this._effectVolume<=0) { cc.log("effect skip as disable or volume == 0"); return; }
        if (!audioclip) { cc.log("invalid audioClip"); return; }
        this._currentEffectCacheUrl = audioclip.nativeUrl;
        this._currentEffectId = cc.audioEngine.playEffect(audioclip, loop);
        cc.audioEngine.setFinishCallback(this._currentEffectId, () => {
            this._currentEffectId = -1;
            this._currentEffectCacheUrl = null;
        });
    }

    playEffectSync(path: string, loop:boolean = false) {
        if(!this._effectEnable || this._effectVolume<=0) { cc.log("effect skip as disable or volume == 0"); return; }
        if(!path || path===""){ cc.log("invalid path", path); return; }
        cc.log("play effect", path);
        LoadCenter.getInstance().loadAudioClip(path, function (audioclip) {
            this.playEffect(audioclip, loop);
        }.bind(this));
    }

}