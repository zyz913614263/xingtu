const gameConfig = {
    // 游戏界面宽度
    GameWidth: 414 * window.devicePixelRatio,
    
    // 游戏界面高度
    GameHeight: 736 * window.devicePixelRatio,
    
    // 网格行数
    ROWS: 20,
    
    // 网格列数
    COLOUMS: 10,
    
    // 游戏模式
    model: 'vertical',
    
    // 开始定时器间隔
    startTimerInterval: 1000,
    
    // 起始X坐标
    startX: 414 / 2 * window.devicePixelRatio,
    
    // 起始Y坐标
    startY: -80 * window.devicePixelRatio,
    
    // 星球数据
    planets: planetData,
    
    // 星球大小缩放
    planetSizeScale: 2,
    
    // 资源URL前缀
    PREFIX_URL: 'https://wxamusic.wx.qq.com/wxag/xingji/'
};

export default gameConfig;