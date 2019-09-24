import LoadCenter from "../load/LoadCenter";

//---------------------------------
// 音频管理
//---------------------------------
export default class AudioManager {
	private static singleInstance: AudioManager = null;
	public static getInstance(): AudioManager {
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
	private _mute: boolean = true;

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
		if(this._mute) { return; }
		this._currentMusicCacheUrl = audioclip.nativeUrl;
		LoadCenter.getInstance().retatinRes(this._currentMusicCacheUrl);
		this._currentMusicId = cc.audioEngine.playMusic(audioclip, loop);
		cc.audioEngine.setFinishCallback(this._currentMusicId , () =>{
			LoadCenter.getInstance().releaseRes(this._currentMusicCacheUrl);
			this._currentMusicCacheUrl = null;
			this._currentMusicId = -1;
		});
	}

	public playMusicSync(path: string, loop: boolean) {
		if(this._mute) { return; }
		LoadCenter.getInstance().loadAudioClip(path, function(audioclip:cc.AudioClip) {
			this.playMusic(audioclip, loop, true)
		}.bind(this));
	}
	

	public playEffect(audioclip: cc.AudioClip, immediately: boolean, sync: boolean) {
		if(this._mute) { return; }
		if (immediately) {
			this._playEffect(audioclip, sync);
			return;
		}
		this.effects.push(audioclip);
		this._playEffect();
	}

	public playEffectSync(path: string, immediately: boolean) {
		if(this._mute) { return; }
		LoadCenter.getInstance().loadAudioClip(path, function(audioclip:cc.AudioClip) {
			this.playEffect(audioclip, immediately, true);
		}.bind(this));
	}

	private _playEffect(audioclip: cc.AudioClip = null, sync: boolean = false) {
		if(this._mute) { return; }
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
		if(this._mute) { return; }
		this._currentEffectCacheUrl = audioclip.nativeUrl;
		LoadCenter.getInstance().retatinRes(this._currentEffectCacheUrl);
		this._currentEffectId = cc.audioEngine.playEffect(audioclip, false);
		cc.audioEngine.setFinishCallback(this._currentEffectId, () =>{
			LoadCenter.getInstance().releaseRes(this._currentEffectCacheUrl);
			this._currentEffectId = -1;
			this._currentEffectCacheUrl = null;
			this._playEffect();
		});
	}

}