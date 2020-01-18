//-------------------------------------
//-- 音频播放
//-------------------------------------
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

    private _currentMusicId: number = -1;
    private _currentMusicCacheUrl: string = null;

    private _currentEffectId: number = -1;
    private _currentEffectCacheUrl: string = null;

    private _musicEnable = true;
    private _effectEnable = true;

    private _musicVolume = 0.3;
    private _effectVolume = 0.7;


    loadAudioClip(path:string, bFlag:boolean, callfun:Function) {
        var rsc = cc.loader.getRes(path, cc.AudioClip);
        if(rsc) {
            callfun(rsc);
            return;
        }
        if(bFlag) {
            cc.loader.loadRes(path, cc.AudioClip, (err, audioclip) => {
                if (err) {
                    cc.log(err);
                    return;
                }
                callfun(audioclip);
            });
        } else {
            cc.loader.loadRes(path, cc.AudioClip);
        }
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
        if(this._currentMusicCacheUrl===audioclip.nativeUrl) { return; }
        this._currentMusicCacheUrl = audioclip.nativeUrl;
        this._currentMusicId = cc.audioEngine.playMusic(audioclip, loop);
        cc.audioEngine.setFinishCallback(this._currentMusicId, () => {
            this._currentMusicCacheUrl = null;
            this._currentMusicId = -1;
        });
    }

    playMusicAsync(path: string, loop: boolean) {
        if(!this._musicEnable || this._musicVolume<=0) { cc.log("music skip as disable or volume == 0"); return; }
        if(!path || path===""){ cc.log("invalid path", path); return; }
    //    cc.log("play music", path, loop);
        this.loadAudioClip(path, true, function (audioclip) {
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

    playEffectAsync(path: string, loop:boolean = false) {
        if(!this._effectEnable || this._effectVolume<=0) { cc.log("effect skip as disable or volume == 0"); return; }
        if(!path || path===""){ cc.log("invalid path", path); return; }
    //    cc.log("play effect", path);
        this.loadAudioClip(path, true, function (audioclip) {
            this.playEffect(audioclip, loop);
        }.bind(this));
    }

}