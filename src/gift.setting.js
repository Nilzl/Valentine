
export const GLOBAL_KEYS = {
  EXIST_KEY: 'HAS_GIFT',
  NAME_KEY: 'GIFT_NAME',
  IMAGE_KEY: 'GIFT_IMAGE_URL',
};

// 是否允许对方在抽奖结束后重新抽奖
export const IS_SHOW_RESTART = true;

// 首页配置
export const homeConfig = {
  // 标题
  title: '情人节快乐！！！',
  // 留言，数组的每一项代表一行
  messages: [
    { key: 'q', wording: '我送你三百六十五个日出，每天给你一句甜蜜滴早安问候~', },
    { key: 'w', wording: '我送你三百六十五个祝福，每天一句贴心情话和彩虹屁夸夸！', },
    { key: 'e', wording: '练习不对恋爱时长两年半的...', },
    { key: 'r', wording: '有所为有所不为而后可为之为所欲为', },
    { key: 't', wording: '吃喝玩乐样样全，甜甜蜜蜜到永远！', },
    { key: 'y', wording: '身无彩凤双飞翼，心有灵犀一点通', },
    { key: 'i', wording: '海内存知己，天涯若比邻，但愿人长久，千里共婵娟', },
    { key: 'o', wording: '说了这么多最后的大奖当然是...', },
  ],
  // 最终解释权归属人
  owner: '宇宙无敌超级大大大大帅哥lzl',
  // 抽奖转盘的动画时间，单位毫秒
  timeout: 5000,
  // 指定赠送的礼物的索引（第几个礼物中奖），取值范围 0-8
  targetGiftIndex: 8,
};

// 礼物清单
// 字段 key 不用改，只要保证每个礼物的 key 字段是不同的即可
// 图片放在 public/images 中，建议是正方形，否则影响视觉体验
// name 是礼物的全称；alias 是礼物的简称（用来显示在抽奖方格里）
export const gifts = [
  { key: 'q', name: '三百六十五个日出', alias: '甜蜜问候', image: '/images/1.png',  description: '世上无难事，只怕起的早' },
  { key: 'w', name: '三百六十五个祝福', alias: '彩虹屁夸夸', image: '/images/2.png',  description: '爱笑的女孩子不但运气不会差，还会有很多夸夸' },
  { key: 'e', name: '只因哥', alias: '小鸡公仔', image: '/images/3.png',  description: '只因你太美baby' },
  { key: 'r', name: '为所欲为券', alias: 'do券*9', image: '/images/4.png',  description: '这是沸羊羊的感觉，这是自由的感觉~' },
  { key: 't', name: '吃点好的', alias: '9顿大餐', image: '/images/5.png',  description: '吃一堑，长一智，吃一顿，瘦一斤！' },
  { key: 'y', name: '穿美美的', alias: '购物基金999', image: '/images/6.png',  description: '买买买！' },
  { key: 'i', name: '月是天上月', alias: '月亮', image: '/images/7.png',  description: '月色真美啊' },
  { key: 'o', name: '我全都要！', alias: '我全都要', image: '/images/8.png',  description: '小孩才做选择，成年人当然是全都要' },
];
