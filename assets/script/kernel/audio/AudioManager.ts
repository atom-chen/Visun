import LoadCenter from "../load/LoadCenter";

//---------------------------------
// 音频管理
//---------------------------------
export default class AudioManager {
    static singleInstance: AudioManager = null;
    static instance(): AudioManager {
        if (AudioManager.singleInstance == null) {
            AudioManager.singleInstance = new AudioManager();
        }
        return AudioManager.singleInstance;
    }
    
    effects: Array<cc.AudioClip> = null;

    _currentMusicId: number = -1;
    _currentMusicCacheUrl: string = null;

    _currentEffectId: number = -1;
    _currentEffectCacheUrl: string = null;

    constructor() {
        this.effects = [];
    }

    public setEffectsVolume(volume: number) {
        cc.audioEngine.setEffectsVolume(volume);
        if (volume <= 0.001) {
            this.stopEffect()
        }
    }

    public setMusicVolume(volume: number) {
        cc.audioEngine.setMusicVolume(volume);
        if (volume <= 0.001) {
            this.stopMusic();
        }
    }

    public stopMusic() {
        cc.audioEngine.stopMusic();
    }

    public stopEffect() {
        if (this._currentEffectId < 0) {
            return;
        }
        cc.audioEngine.stopEffect(this._currentEffectId);
        this._currentEffectId = -1;
    }
    
    public playMusic(audioclip: cc.AudioClip, loop: boolean) {
        this._currentMusicCacheUrl = audioclip.nativeUrl;
        LoadCenter.instance().retatinRes(this._currentMusicCacheUrl);
        this._currentMusicId = cc.audioEngine.playMusic(audioclip, loop);
        cc.audioEngine.setFinishCallback(this._currentMusicId , () =>{
            LoadCenter.instance().releaseMusicRes(this._currentMusicCacheUrl);
            this._currentMusicCacheUrl = null;
            this._currentMusicId = -1;
        });
    }

    public playMusicSync(path: string, loop: boolean) {
        LoadCenter.instance().loadAudioClip(path, function(audioclip) {
            this.playMusic(audioclip, loop, true)
        }.bind(this));
    }
    

    public playEffect(audioclip: cc.AudioClip, immediately: boolean, sync: boolean) {
        if (immediately) {
            this._playEffect(audioclip, sync);
            return;
        }
        this.effects.push(audioclip);
        this._playEffect();
    }

    public playEffectSync(path: string, immediately: boolean) {
        LoadCenter.instance().loadAudioClip(path, function(audioclip) {
            this.playEffect(audioclip, immediately, true);
        }.bind(this));
    }

    private _playEffect(audioclip: cc.AudioClip = null, sync: boolean = false) {
        if (audioclip) {
            this._play(audioclip);
            return;
        }
        let audioclipObject = this.effects.shift();
        if (!audioclipObject) {
            return;
        }
        this._play(audioclipObject);
    }

    private _play(audioclip: cc.AudioClip) {
        this._currentEffectCacheUrl = audioclip.nativeUrl;
        LoadCenter.instance().retatinRes(this._currentEffectCacheUrl);
        this._currentEffectId = cc.audioEngine.playEffect(audioclip, false);
        cc.audioEngine.setFinishCallback(this._currentEffectId, () =>{
            LoadCenter.instance().releaseMusicRes(this._currentEffectCacheUrl);
            this._currentEffectId = -1;
            this._currentEffectCacheUrl = null;
            this._playEffect();
        });
    }

}