import gameConfig from './config.js';

class Music {
    constructor() {
        // 单例模式逻辑
        if (Music.instance) {
            return Music.instance;
        }
        
        this.currIsMute = false;
        Music.instance = this;
        
        // 初始化音量和音乐音量
        Laya.SoundManager.setSoundVolume(1);
        Laya.SoundManager.setMusicVolume(1);
    }
    
    /**
     * 切换音效和音乐静音状态
     * @returns {boolean} 当前音乐静音状态
     */
    tmp3leMute() {
        Laya.SoundManager.musicMuted = !Laya.SoundManager.musicMuted;
        Laya.SoundManager.soundMuted = !Laya.SoundManager.soundMuted;
        
        return Laya.SoundManager.musicMuted;
    }
    
    /**
     * 音乐和音效静音
     */
    mute() {
        Laya.SoundManager.musicMuted = true;
        Laya.SoundManager.soundMuted = true;
        this.currIsMute = true;
    }
    
    /**
     * 取消静音
     */
    noMute() {
        Laya.SoundManager.musicMuted = false;
        Laya.SoundManager.soundMuted = false;
        this.currIsMute = false;
    }
    
    /**
     * 播放背景音乐（开始）
     */
    playBg() {
        Laya.SoundManager.playMusic(
            gameConfig.PREFIX_URL + 'music/start-32.mp3',
            0
        );
    }
    
    /**
     * 播放背景音乐（游戏进行中）
     */
    playBg2() {
        Laya.SoundManager.playMusic(
            gameConfig.PREFIX_URL + 'music/bg1.mp3',
            0
        );
        
        // 销毁开始音乐，释放内存
        Laya.SoundManager.destroySound(gameConfig.PREFIX_URL + 'music/start-32.mp3');
        
        // 触发垃圾回收（微信小游戏）
        if (wx.triggerGC) {
            wx.triggerGC();
        }
    }
    
    /**
     * 播放成功音效
     */
    playSuccess() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/jump-32.mp3',
            1
        );
    }
    
    /**
     * 播放能量音效
     */
    playEnergy() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/energy.mp3',
            1
        );
    }
    
    /**
     * 播放连击音效
     */
    playCombo() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/combo-32.mp3',
            1
        );
    }
    
    /**
     * 播放爆炸音效
     */
    playDead2() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/dead-32.mp3',
            1
        );
    }
    
    /**
     * 播放按钮音效
     */
    playBtn() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/btn.mp3',
            1
        );
    }
    
    /**
     * 播放飞行音效
     */
    playFly() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/fly.mp3',
            1
        );
    }
    
    /**
     * 播放死亡音效
     */
    playDead() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/dead-32.mp3',
            1
        );
    }
    
    /**
     * 播放羁绊音效
     */
    playBond() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/dead-32.mp3',
            1
        );
    }
    
    /**
     * 播放好友音效
     */
    playFriend() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/friend.mp3',
            1
        );
    }
    
    /**
     * 播放时间音效
     */
    playTime() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/time1.mp3',
            1
        );
    }
    
    /**
     * 播放结果音效
     */
    playResult() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/score1.mp3',
            1
        );
    }
    
    /**
     * 播放转场音效（进入）
     */
    playZhuan() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/in1.mp3',
            1
        );
    }
    
    /**
     * 播放转场音效（退出）
     */
    playZhuan1() {
        Laya.SoundManager.playSound(
            gameConfig.PREFIX_URL + 'music/out1.mp3',
            1
        );
    }
}

// 创建单例实例
const musicInstance = new Music();

export default musicInstance;