/* ============================================
   2026 FIFA World Cup - 交互脚本
   ============================================ */

// ====== 小组赛数据 ======
const GROUPS = [
    {
        name: 'A', label: 'A 组',
        teams: [
            { flag: '🇲🇽', name: '墨西哥 (东道主)', rank: 'FIFA 14' },
            { flag: '🇳🇱', name: '荷兰', rank: 'FIFA 7' },
            { flag: '🇸🇳', name: '塞内加尔', rank: 'FIFA 17' },
            { flag: '🇦🇪', name: '阿联酋', rank: 'FIFA 67' },
        ]
    },
    {
        name: 'B', label: 'B 组',
        teams: [
            { flag: '🇨🇦', name: '加拿大 (东道主)', rank: 'FIFA 49' },
            { flag: '🇩🇪', name: '德国', rank: 'FIFA 10' },
            { flag: '🇯🇵', name: '日本', rank: 'FIFA 15' },
            { flag: '🇲🇦', name: '摩洛哥', rank: 'FIFA 12' },
        ]
    },
    {
        name: 'C', label: 'C 组',
        teams: [
            { flag: '🇦🇷', name: '阿根廷 (卫冕冠军)', rank: 'FIFA 1' },
            { flag: '🇵🇹', name: '葡萄牙', rank: 'FIFA 5' },
            { flag: '🇪🇬', name: '埃及', rank: 'FIFA 33' },
            { flag: '🇯🇲', name: '牙买加', rank: 'FIFA 61' },
        ]
    },
    {
        name: 'D', label: 'D 组',
        teams: [
            { flag: '🇺🇸', name: '美国 (东道主)', rank: 'FIFA 20' },
            { flag: '🇧🇷', name: '巴西', rank: 'FIFA 2' },
            { flag: '🇰🇷', name: '韩国', rank: 'FIFA 22' },
            { flag: '🇳🇬', name: '尼日利亚', rank: 'FIFA 30' },
        ]
    },
    {
        name: 'E', label: 'E 组',
        teams: [
            { flag: '🇫🇷', name: '法国', rank: 'FIFA 3' },
            { flag: '🇪🇸', name: '西班牙', rank: 'FIFA 4' },
            { flag: '🇦🇺', name: '澳大利亚', rank: 'FIFA 24' },
            { flag: '🇨🇷', name: '哥斯达黎加', rank: 'FIFA 52' },
        ]
    },
    {
        name: 'F', label: 'F 组',
        teams: [
            { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: '英格兰', rank: 'FIFA 6' },
            { flag: '🇮🇹', name: '意大利', rank: 'FIFA 9' },
            { flag: '🇨🇴', name: '哥伦比亚', rank: 'FIFA 11' },
            { flag: '🇶🇦', name: '卡塔尔', rank: 'FIFA 43' },
        ]
    },
    {
        name: 'G', label: 'G 组',
        teams: [
            { flag: '🇧🇪', name: '比利时', rank: 'FIFA 8' },
            { flag: '🇺🇾', name: '乌拉圭', rank: 'FIFA 13' },
            { flag: '🇭🇷', name: '克罗地亚', rank: 'FIFA 16' },
            { flag: '🇮🇷', name: '伊朗', rank: 'FIFA 19' },
        ]
    },
    {
        name: 'H', label: 'H 组',
        teams: [
            { flag: '🇩🇰', name: '丹麦', rank: 'FIFA 18' },
            { flag: '🇨🇱', name: '智利', rank: 'FIFA 31' },
            { flag: '🇵🇱', name: '波兰', rank: 'FIFA 27' },
            { flag: '🇿🇦', name: '南非', rank: 'FIFA 58' },
        ]
    },
    {
        name: 'I', label: 'I 组',
        teams: [
            { flag: '🇳🇴', name: '挪威', rank: 'FIFA 45' },
            { flag: '🇪🇨', name: '厄瓜多尔', rank: 'FIFA 25' },
            { flag: '🇨🇲', name: '喀麦隆', rank: 'FIFA 40' },
            { flag: '🇸🇦', name: '沙特阿拉伯', rank: 'FIFA 53' },
        ]
    },
    {
        name: 'J', label: 'J 组',
        teams: [
            { flag: '🇷🇸', name: '塞尔维亚', rank: 'FIFA 32' },
            { flag: '🇵🇪', name: '秘鲁', rank: 'FIFA 28' },
            { flag: '🇹🇳', name: '突尼斯', rank: 'FIFA 36' },
            { flag: '🇵🇦', name: '巴拿马', rank: 'FIFA 70' },
        ]
    },
    {
        name: 'K', label: 'K 组',
        teams: [
            { flag: '🇸🇪', name: '瑞典', rank: 'FIFA 26' },
            { flag: '🇨🇭', name: '瑞士', rank: 'FIFA 21' },
            { flag: '🇬🇭', name: '加纳', rank: 'FIFA 47' },
            { flag: '🇳🇿', name: '新西兰', rank: 'FIFA 89' },
        ]
    },
    {
        name: 'L', label: 'L 组',
        teams: [
            { flag: '🇦🇹', name: '奥地利', rank: 'FIFA 23' },
            { flag: '🇹🇷', name: '土耳其', rank: 'FIFA 35' },
            { flag: '🇩🇿', name: '阿尔及利亚', rank: 'FIFA 38' },
            { flag: '🇨🇳', name: '中国', rank: 'FIFA 78' },
        ]
    },
];

// ====== 时区换算表 ======
// 美国东部 EDT (UTC-4): 本地+12h=北京 | 美国中部 CDT (UTC-5): +13h
// 美国太平洋 PDT (UTC-7): +15h | 墨西哥 CST (UTC-6): +14h
// 所有比赛本地时间→北京时间均跨日(+1天)

// ====== 完整赛程 (时间均为北京时间，可点击查看详情) ======
const MATCHES = [
    // ════ 6月12日 (周四) 北京时间 ════
    {
        id: 1, dateBJ: '6月12日 (周四)', timeBJ: '02:00', group: 'A组', stage: '小组赛 第1轮',
        home: { flag: '🇲🇽', name: '墨西哥' }, away: { flag: '🇳🇱', name: '荷兰' },
        stadium: '阿兹特克体育场', city: '墨西哥城', capacity: '87,523',
        tz: 'UTC-6', timeLocal: '6/11 12:00', status: 'live', note: '🔥 揭幕战'
    },
    {
        id: 2, dateBJ: '6月12日 (周四)', timeBJ: '06:00', group: 'A组', stage: '小组赛 第1轮',
        home: { flag: '🇸🇳', name: '塞内加尔' }, away: { flag: '🇦🇪', name: '阿联酋' },
        stadium: 'BBVA体育场', city: '蒙特雷', capacity: '53,500',
        tz: 'UTC-6', timeLocal: '6/11 16:00', status: 'live', note: ''
    },
    {
        id: 3, dateBJ: '6月12日 (周四)', timeBJ: '08:00', group: 'B组', stage: '小组赛 第1轮',
        home: { flag: '🇨🇦', name: '加拿大' }, away: { flag: '🇲🇦', name: '摩洛哥' },
        stadium: 'BMO体育场', city: '多伦多', capacity: '45,500',
        tz: 'UTC-4', timeLocal: '6/11 20:00', status: 'live', note: '🇨🇦 东道主首秀'
    },

    // ════ 6月13日 (周五) 北京时间 ════
    {
        id: 4, dateBJ: '6月13日 (周五)', timeBJ: '00:00', group: 'C组', stage: '小组赛 第1轮',
        home: { flag: '🇦🇷', name: '阿根廷' }, away: { flag: '🇪🇬', name: '埃及' },
        stadium: '大都会人寿体育场', city: '新泽西', capacity: '82,500',
        tz: 'UTC-4', timeLocal: '6/12 12:00', status: 'live', note: '⭐ 卫冕冠军首秀'
    },
    {
        id: 5, dateBJ: '6月13日 (周五)', timeBJ: '04:00', group: 'C组', stage: '小组赛 第1轮',
        home: { flag: '🇵🇹', name: '葡萄牙' }, away: { flag: '🇯🇲', name: '牙买加' },
        stadium: '吉列体育场', city: '福克斯堡', capacity: '65,878',
        tz: 'UTC-4', timeLocal: '6/12 16:00', status: 'live', note: ''
    },
    {
        id: 6, dateBJ: '6月13日 (周五)', timeBJ: '11:00', group: 'D组', stage: '小组赛 第1轮',
        home: { flag: '🇺🇸', name: '美国' }, away: { flag: '🇰🇷', name: '韩国' },
        stadium: 'SoFi体育场', city: '洛杉矶', capacity: '70,240',
        tz: 'UTC-7', timeLocal: '6/12 20:00', status: 'upcoming', note: '🇺🇸 东道主首秀'
    },

    // ════ 6月14日 (周六) 北京时间 ════
    {
        id: 7, dateBJ: '6月14日 (周六)', timeBJ: '01:00', group: 'D组', stage: '小组赛 第1轮',
        home: { flag: '🇧🇷', name: '巴西' }, away: { flag: '🇳🇬', name: '尼日利亚' },
        stadium: 'AT&T体育场', city: '达拉斯', capacity: '80,000',
        tz: 'UTC-5', timeLocal: '6/13 12:00', status: 'upcoming', note: '🇧🇷 桑巴军团登场'
    },
    {
        id: 8, dateBJ: '6月14日 (周六)', timeBJ: '04:00', group: 'E组', stage: '小组赛 第1轮',
        home: { flag: '🇫🇷', name: '法国' }, away: { flag: '🇦🇺', name: '澳大利亚' },
        stadium: '梅赛德斯-奔驰体育场', city: '亚特兰大', capacity: '71,000',
        tz: 'UTC-4', timeLocal: '6/13 16:00', status: 'upcoming', note: ''
    },
    {
        id: 9, dateBJ: '6月14日 (周六)', timeBJ: '08:00', group: 'E组', stage: '小组赛 第1轮',
        home: { flag: '🇪🇸', name: '西班牙' }, away: { flag: '🇨🇷', name: '哥斯达黎加' },
        stadium: 'Hard Rock体育场', city: '迈阿密', capacity: '64,767',
        tz: 'UTC-4', timeLocal: '6/13 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月15日 (周日) 北京时间 ════
    {
        id: 10, dateBJ: '6月15日 (周日)', timeBJ: '03:00', group: 'F组', stage: '小组赛 第1轮',
        home: { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: '英格兰' }, away: { flag: '🇶🇦', name: '卡塔尔' },
        stadium: '李维斯体育场', city: '圣克拉拉', capacity: '68,500',
        tz: 'UTC-7', timeLocal: '6/14 12:00', status: 'upcoming', note: ''
    },
    {
        id: 11, dateBJ: '6月15日 (周日)', timeBJ: '04:00', group: 'F组', stage: '小组赛 第1轮',
        home: { flag: '🇮🇹', name: '意大利' }, away: { flag: '🇨🇴', name: '哥伦比亚' },
        stadium: '林肯金融体育场', city: '费城', capacity: '67,594',
        tz: 'UTC-4', timeLocal: '6/14 16:00', status: 'upcoming', note: '💥 焦点对决'
    },
    {
        id: 12, dateBJ: '6月15日 (周日)', timeBJ: '11:00', group: 'B组', stage: '小组赛 第1轮',
        home: { flag: '🇩🇪', name: '德国' }, away: { flag: '🇯🇵', name: '日本' },
        stadium: 'BC Place', city: '温哥华', capacity: '54,500',
        tz: 'UTC-7', timeLocal: '6/14 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月16日 (周一) 北京时间 ════
    {
        id: 13, dateBJ: '6月16日 (周一)', timeBJ: '01:00', group: 'G组', stage: '小组赛 第1轮',
        home: { flag: '🇧🇪', name: '比利时' }, away: { flag: '🇮🇷', name: '伊朗' },
        stadium: '阿罗黑德体育场', city: '堪萨斯城', capacity: '76,416',
        tz: 'UTC-5', timeLocal: '6/15 12:00', status: 'upcoming', note: ''
    },
    {
        id: 14, dateBJ: '6月16日 (周一)', timeBJ: '05:00', group: 'G组', stage: '小组赛 第1轮',
        home: { flag: '🇺🇾', name: '乌拉圭' }, away: { flag: '🇭🇷', name: '克罗地亚' },
        stadium: 'NRG体育场', city: '休斯顿', capacity: '72,220',
        tz: 'UTC-5', timeLocal: '6/15 16:00', status: 'upcoming', note: ''
    },
    {
        id: 15, dateBJ: '6月16日 (周一)', timeBJ: '11:00', group: 'H组', stage: '小组赛 第1轮',
        home: { flag: '🇩🇰', name: '丹麦' }, away: { flag: '🇵🇱', name: '波兰' },
        stadium: 'Lumen体育场', city: '西雅图', capacity: '68,740',
        tz: 'UTC-7', timeLocal: '6/15 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月17日 (周二) 北京时间 ════
    {
        id: 16, dateBJ: '6月17日 (周二)', timeBJ: '00:00', group: 'H组', stage: '小组赛 第1轮',
        home: { flag: '🇨🇱', name: '智利' }, away: { flag: '🇿🇦', name: '南非' },
        stadium: '联邦快递体育场', city: '兰多弗', capacity: '62,000',
        tz: 'UTC-4', timeLocal: '6/16 12:00', status: 'upcoming', note: ''
    },
    {
        id: 17, dateBJ: '6月17日 (周二)', timeBJ: '04:00', group: 'I组', stage: '小组赛 第1轮',
        home: { flag: '🇳🇴', name: '挪威' }, away: { flag: '🇸🇦', name: '沙特阿拉伯' },
        stadium: '吉列体育场', city: '福克斯堡', capacity: '65,878',
        tz: 'UTC-4', timeLocal: '6/16 16:00', status: 'upcoming', note: ''
    },
    {
        id: 18, dateBJ: '6月17日 (周二)', timeBJ: '08:00', group: 'I组', stage: '小组赛 第1轮',
        home: { flag: '🇪🇨', name: '厄瓜多尔' }, away: { flag: '🇨🇲', name: '喀麦隆' },
        stadium: '大都会人寿体育场', city: '新泽西', capacity: '82,500',
        tz: 'UTC-4', timeLocal: '6/16 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月18日 (周三) 北京时间 ════
    {
        id: 19, dateBJ: '6月18日 (周三)', timeBJ: '01:00', group: 'J组', stage: '小组赛 第1轮',
        home: { flag: '🇷🇸', name: '塞尔维亚' }, away: { flag: '🇵🇦', name: '巴拿马' },
        stadium: 'AT&T体育场', city: '达拉斯', capacity: '80,000',
        tz: 'UTC-5', timeLocal: '6/17 12:00', status: 'upcoming', note: ''
    },
    {
        id: 20, dateBJ: '6月18日 (周三)', timeBJ: '07:00', group: 'J组', stage: '小组赛 第1轮',
        home: { flag: '🇵🇪', name: '秘鲁' }, away: { flag: '🇹🇳', name: '突尼斯' },
        stadium: 'SoFi体育场', city: '洛杉矶', capacity: '70,240',
        tz: 'UTC-7', timeLocal: '6/17 16:00', status: 'upcoming', note: ''
    },
    {
        id: 21, dateBJ: '6月18日 (周三)', timeBJ: '11:00', group: 'K组', stage: '小组赛 第1轮',
        home: { flag: '🇸🇪', name: '瑞典' }, away: { flag: '🇳🇿', name: '新西兰' },
        stadium: 'Lumen体育场', city: '西雅图', capacity: '68,740',
        tz: 'UTC-7', timeLocal: '6/17 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月19日 (周四) 北京时间 ════
    {
        id: 22, dateBJ: '6月19日 (周四)', timeBJ: '00:00', group: 'K组', stage: '小组赛 第1轮',
        home: { flag: '🇨🇭', name: '瑞士' }, away: { flag: '🇬🇭', name: '加纳' },
        stadium: '梅赛德斯-奔驰体育场', city: '亚特兰大', capacity: '71,000',
        tz: 'UTC-4', timeLocal: '6/18 12:00', status: 'upcoming', note: ''
    },
    {
        id: 23, dateBJ: '6月19日 (周四)', timeBJ: '04:00', group: 'L组', stage: '小组赛 第1轮',
        home: { flag: '🇦🇹', name: '奥地利' }, away: { flag: '🇨🇳', name: '中国' },
        stadium: 'BMO体育场', city: '多伦多', capacity: '45,500',
        tz: 'UTC-4', timeLocal: '6/18 16:00', status: 'upcoming', note: '🇨🇳 中国队首战！6月19日凌晨4点'
    },
    {
        id: 24, dateBJ: '6月19日 (周四)', timeBJ: '10:00', group: 'L组', stage: '小组赛 第1轮',
        home: { flag: '🇹🇷', name: '土耳其' }, away: { flag: '🇩🇿', name: '阿尔及利亚' },
        stadium: 'BBVA体育场', city: '蒙特雷', capacity: '53,500',
        tz: 'UTC-6', timeLocal: '6/18 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月20日 (周五) 北京时间 ════
    {
        id: 25, dateBJ: '6月20日 (周五)', timeBJ: '02:00', group: 'A组', stage: '小组赛 第2轮',
        home: { flag: '🇲🇽', name: '墨西哥' }, away: { flag: '🇸🇳', name: '塞内加尔' },
        stadium: '阿兹特克体育场', city: '墨西哥城', capacity: '87,523',
        tz: 'UTC-6', timeLocal: '6/19 12:00', status: 'upcoming', note: ''
    },
    {
        id: 26, dateBJ: '6月20日 (周五)', timeBJ: '04:00', group: 'A组', stage: '小组赛 第2轮',
        home: { flag: '🇳🇱', name: '荷兰' }, away: { flag: '🇦🇪', name: '阿联酋' },
        stadium: '联邦快递体育场', city: '兰多弗', capacity: '62,000',
        tz: 'UTC-4', timeLocal: '6/19 16:00', status: 'upcoming', note: ''
    },
    {
        id: 27, dateBJ: '6月20日 (周五)', timeBJ: '08:00', group: 'C组', stage: '小组赛 第2轮',
        home: { flag: '🇦🇷', name: '阿根廷' }, away: { flag: '🇵🇹', name: '葡萄牙' },
        stadium: '大都会人寿体育场', city: '新泽西', capacity: '82,500',
        tz: 'UTC-4', timeLocal: '6/19 20:00', status: 'upcoming', note: '💥 梅西 vs C罗！世纪对决'
    },

    // ════ 6月21日 (周六) 北京时间 ════
    {
        id: 28, dateBJ: '6月21日 (周六)', timeBJ: '00:00', group: 'C组', stage: '小组赛 第2轮',
        home: { flag: '🇪🇬', name: '埃及' }, away: { flag: '🇯🇲', name: '牙买加' },
        stadium: 'Hard Rock体育场', city: '迈阿密', capacity: '64,767',
        tz: 'UTC-4', timeLocal: '6/20 12:00', status: 'upcoming', note: ''
    },
    {
        id: 29, dateBJ: '6月21日 (周六)', timeBJ: '07:00', group: 'D组', stage: '小组赛 第2轮',
        home: { flag: '🇺🇸', name: '美国' }, away: { flag: '🇧🇷', name: '巴西' },
        stadium: 'SoFi体育场', city: '洛杉矶', capacity: '70,240',
        tz: 'UTC-7', timeLocal: '6/20 16:00', status: 'upcoming', note: '💥 美洲德比'
    },
    {
        id: 30, dateBJ: '6月21日 (周六)', timeBJ: '11:00', group: 'B组', stage: '小组赛 第2轮',
        home: { flag: '🇨🇦', name: '加拿大' }, away: { flag: '🇩🇪', name: '德国' },
        stadium: 'BC Place', city: '温哥华', capacity: '54,500',
        tz: 'UTC-7', timeLocal: '6/20 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月22日 (周日) 北京时间 ════
    {
        id: 31, dateBJ: '6月22日 (周日)', timeBJ: '01:00', group: 'E组', stage: '小组赛 第2轮',
        home: { flag: '🇫🇷', name: '法国' }, away: { flag: '🇪🇸', name: '西班牙' },
        stadium: 'AT&T体育场', city: '达拉斯', capacity: '80,000',
        tz: 'UTC-5', timeLocal: '6/21 12:00', status: 'upcoming', note: '🔥 欧洲杯级对决'
    },
    {
        id: 32, dateBJ: '6月22日 (周日)', timeBJ: '04:00', group: 'F组', stage: '小组赛 第2轮',
        home: { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: '英格兰' }, away: { flag: '🇮🇹', name: '意大利' },
        stadium: '梅赛德斯-奔驰体育场', city: '亚特兰大', capacity: '71,000',
        tz: 'UTC-4', timeLocal: '6/21 16:00', status: 'upcoming', note: '💥 欧洲豪门对决'
    },
    {
        id: 33, dateBJ: '6月22日 (周日)', timeBJ: '11:00', group: 'D组', stage: '小组赛 第2轮',
        home: { flag: '🇰🇷', name: '韩国' }, away: { flag: '🇳🇬', name: '尼日利亚' },
        stadium: '李维斯体育场', city: '圣克拉拉', capacity: '68,500',
        tz: 'UTC-7', timeLocal: '6/21 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月23日 (周一) 北京时间 ════
    {
        id: 34, dateBJ: '6月23日 (周一)', timeBJ: '01:00', group: 'G组', stage: '小组赛 第2轮',
        home: { flag: '🇧🇪', name: '比利时' }, away: { flag: '🇺🇾', name: '乌拉圭' },
        stadium: 'NRG体育场', city: '休斯顿', capacity: '72,220',
        tz: 'UTC-5', timeLocal: '6/22 12:00', status: 'upcoming', note: ''
    },
    {
        id: 35, dateBJ: '6月23日 (周一)', timeBJ: '04:00', group: 'L组', stage: '小组赛 第2轮',
        home: { flag: '🇨🇳', name: '中国' }, away: { flag: '🇹🇷', name: '土耳其' },
        stadium: 'BMO体育场', city: '多伦多', capacity: '45,500',
        tz: 'UTC-4', timeLocal: '6/22 16:00', status: 'upcoming', note: '🇨🇳 中国队第2场'
    },
    {
        id: 36, dateBJ: '6月23日 (周一)', timeBJ: '09:00', group: 'H组', stage: '小组赛 第2轮',
        home: { flag: '🇩🇰', name: '丹麦' }, away: { flag: '🇨🇱', name: '智利' },
        stadium: '阿罗黑德体育场', city: '堪萨斯城', capacity: '76,416',
        tz: 'UTC-5', timeLocal: '6/22 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月24日 (周二) 北京时间 ════
    {
        id: 37, dateBJ: '6月24日 (周二)', timeBJ: '00:00', group: 'I组', stage: '小组赛 第2轮',
        home: { flag: '🇳🇴', name: '挪威' }, away: { flag: '🇪🇨', name: '厄瓜多尔' },
        stadium: '林肯金融体育场', city: '费城', capacity: '67,594',
        tz: 'UTC-4', timeLocal: '6/23 12:00', status: 'upcoming', note: ''
    },
    {
        id: 38, dateBJ: '6月24日 (周二)', timeBJ: '04:00', group: 'J组', stage: '小组赛 第2轮',
        home: { flag: '🇷🇸', name: '塞尔维亚' }, away: { flag: '🇵🇪', name: '秘鲁' },
        stadium: '吉列体育场', city: '福克斯堡', capacity: '65,878',
        tz: 'UTC-4', timeLocal: '6/23 16:00', status: 'upcoming', note: ''
    },
    {
        id: 39, dateBJ: '6月24日 (周二)', timeBJ: '11:00', group: 'K组', stage: '小组赛 第2轮',
        home: { flag: '🇸🇪', name: '瑞典' }, away: { flag: '🇨🇭', name: '瑞士' },
        stadium: 'BC Place', city: '温哥华', capacity: '54,500',
        tz: 'UTC-7', timeLocal: '6/23 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月25日 (周三) 北京时间 — 小组赛第3轮开始 ════
    {
        id: 40, dateBJ: '6月25日 (周三)', timeBJ: '06:00', group: 'A组', stage: '小组赛 第3轮',
        home: { flag: '🇲🇽', name: '墨西哥' }, away: { flag: '🇦🇪', name: '阿联酋' },
        stadium: '阿兹特克体育场', city: '墨西哥城', capacity: '87,523',
        tz: 'UTC-6', timeLocal: '6/24 16:00', status: 'upcoming', note: '小组赛末轮'
    },
    {
        id: 41, dateBJ: '6月25日 (周三)', timeBJ: '04:00', group: 'A组', stage: '小组赛 第3轮',
        home: { flag: '🇳🇱', name: '荷兰' }, away: { flag: '🇸🇳', name: '塞内加尔' },
        stadium: '联邦快递体育场', city: '兰多弗', capacity: '62,000',
        tz: 'UTC-4', timeLocal: '6/24 16:00', status: 'upcoming', note: '小组赛末轮（同时开球）'
    },
    {
        id: 42, dateBJ: '6月25日 (周三)', timeBJ: '08:00', group: 'C组', stage: '小组赛 第3轮',
        home: { flag: '🇦🇷', name: '阿根廷' }, away: { flag: '🇯🇲', name: '牙买加' },
        stadium: '大都会人寿体育场', city: '新泽西', capacity: '82,500',
        tz: 'UTC-4', timeLocal: '6/24 20:00', status: 'upcoming', note: ''
    },
    {
        id: 43, dateBJ: '6月25日 (周三)', timeBJ: '09:00', group: 'C组', stage: '小组赛 第3轮',
        home: { flag: '🇵🇹', name: '葡萄牙' }, away: { flag: '🇪🇬', name: '埃及' },
        stadium: 'AT&T体育场', city: '达拉斯', capacity: '80,000',
        tz: 'UTC-5', timeLocal: '6/24 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月26日 (周四) 北京时间 ════
    {
        id: 44, dateBJ: '6月26日 (周四)', timeBJ: '04:00', group: 'B组', stage: '小组赛 第3轮',
        home: { flag: '🇨🇦', name: '加拿大' }, away: { flag: '🇯🇵', name: '日本' },
        stadium: 'BMO体育场', city: '多伦多', capacity: '45,500',
        tz: 'UTC-4', timeLocal: '6/25 16:00', status: 'upcoming', note: ''
    },
    {
        id: 45, dateBJ: '6月26日 (周四)', timeBJ: '07:00', group: 'B组', stage: '小组赛 第3轮',
        home: { flag: '🇩🇪', name: '德国' }, away: { flag: '🇲🇦', name: '摩洛哥' },
        stadium: 'BC Place', city: '温哥华', capacity: '54,500',
        tz: 'UTC-7', timeLocal: '6/25 16:00', status: 'upcoming', note: ''
    },
    {
        id: 46, dateBJ: '6月26日 (周四)', timeBJ: '11:00', group: 'D组', stage: '小组赛 第3轮',
        home: { flag: '🇺🇸', name: '美国' }, away: { flag: '🇳🇬', name: '尼日利亚' },
        stadium: 'SoFi体育场', city: '洛杉矶', capacity: '70,240',
        tz: 'UTC-7', timeLocal: '6/25 20:00', status: 'upcoming', note: ''
    },
    {
        id: 47, dateBJ: '6月26日 (周四)', timeBJ: '11:00', group: 'D组', stage: '小组赛 第3轮',
        home: { flag: '🇧🇷', name: '巴西' }, away: { flag: '🇰🇷', name: '韩国' },
        stadium: '李维斯体育场', city: '圣克拉拉', capacity: '68,500',
        tz: 'UTC-7', timeLocal: '6/25 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月27日 (周五) 北京时间 ════
    {
        id: 48, dateBJ: '6月27日 (周五)', timeBJ: '04:00', group: 'E组', stage: '小组赛 第3轮',
        home: { flag: '🇫🇷', name: '法国' }, away: { flag: '🇨🇷', name: '哥斯达黎加' },
        stadium: '梅赛德斯-奔驰体育场', city: '亚特兰大', capacity: '71,000',
        tz: 'UTC-4', timeLocal: '6/26 16:00', status: 'upcoming', note: ''
    },
    {
        id: 49, dateBJ: '6月27日 (周五)', timeBJ: '04:00', group: 'E组', stage: '小组赛 第3轮',
        home: { flag: '🇪🇸', name: '西班牙' }, away: { flag: '🇦🇺', name: '澳大利亚' },
        stadium: 'Hard Rock体育场', city: '迈阿密', capacity: '64,767',
        tz: 'UTC-4', timeLocal: '6/26 16:00', status: 'upcoming', note: ''
    },
    {
        id: 50, dateBJ: '6月27日 (周五)', timeBJ: '08:00', group: 'F组', stage: '小组赛 第3轮',
        home: { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: '英格兰' }, away: { flag: '🇨🇴', name: '哥伦比亚' },
        stadium: '大都会人寿体育场', city: '新泽西', capacity: '82,500',
        tz: 'UTC-4', timeLocal: '6/26 20:00', status: 'upcoming', note: ''
    },
    {
        id: 51, dateBJ: '6月27日 (周五)', timeBJ: '08:00', group: 'F组', stage: '小组赛 第3轮',
        home: { flag: '🇮🇹', name: '意大利' }, away: { flag: '🇶🇦', name: '卡塔尔' },
        stadium: '林肯金融体育场', city: '费城', capacity: '67,594',
        tz: 'UTC-4', timeLocal: '6/26 20:00', status: 'upcoming', note: ''
    },

    // ════ 6月28日 (周六) 北京时间 — 小组赛收官 ════
    {
        id: 52, dateBJ: '6月28日 (周六)', timeBJ: '04:00', group: 'L组', stage: '小组赛 第3轮',
        home: { flag: '🇨🇳', name: '中国' }, away: { flag: '🇦🇹', name: '奥地利' },
        stadium: 'BMO体育场', city: '多伦多', capacity: '45,500',
        tz: 'UTC-4', timeLocal: '6/27 16:00', status: 'upcoming', note: '🇨🇳 中国队出线关键战！'
    },
    {
        id: 53, dateBJ: '6月28日 (周六)', timeBJ: '09:00', group: 'G组', stage: '小组赛 第3轮',
        home: { flag: '🇧🇪', name: '比利时' }, away: { flag: '🇭🇷', name: '克罗地亚' },
        stadium: '阿罗黑德体育场', city: '堪萨斯城', capacity: '76,416',
        tz: 'UTC-5', timeLocal: '6/27 20:00', status: 'upcoming', note: ''
    },

    // ════ 淘汰赛阶段 ════
    {
        id: 60, dateBJ: '6月30日 (周一)', timeBJ: '00:00', group: '—', stage: '1/16决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: '大都会人寿体育场', city: '新泽西', capacity: '82,500',
        tz: 'UTC-4', timeLocal: '6/29 12:00', status: 'upcoming', note: '32强淘汰赛开始'
    },
    {
        id: 61, dateBJ: '6月30日 (周一)', timeBJ: '05:00', group: '—', stage: '1/16决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: 'AT&T体育场', city: '达拉斯', capacity: '80,000',
        tz: 'UTC-5', timeLocal: '6/29 16:00', status: 'upcoming', note: ''
    },
    {
        id: 62, dateBJ: '6月30日 (周一)', timeBJ: '11:00', group: '—', stage: '1/16决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: 'SoFi体育场', city: '洛杉矶', capacity: '70,240',
        tz: 'UTC-7', timeLocal: '6/29 20:00', status: 'upcoming', note: ''
    },
    {
        id: 70, dateBJ: '7月6日 (周日)', timeBJ: '00:00', group: '—', stage: '1/8决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: '梅赛德斯-奔驰体育场', city: '亚特兰大', capacity: '71,000',
        tz: 'UTC-4', timeLocal: '7/5 12:00', status: 'upcoming', note: '16强淘汰赛'
    },
    {
        id: 71, dateBJ: '7月6日 (周日)', timeBJ: '07:00', group: '—', stage: '1/8决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: '李维斯体育场', city: '圣克拉拉', capacity: '68,500',
        tz: 'UTC-7', timeLocal: '7/5 16:00', status: 'upcoming', note: ''
    },
    {
        id: 72, dateBJ: '7月6日 (周日)', timeBJ: '09:00', group: '—', stage: '1/8决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: 'NRG体育场', city: '休斯顿', capacity: '72,220',
        tz: 'UTC-5', timeLocal: '7/5 20:00', status: 'upcoming', note: ''
    },
    {
        id: 80, dateBJ: '7月12日 (周六)', timeBJ: '04:00', group: '—', stage: '1/4决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: '大都会人寿体育场', city: '新泽西', capacity: '82,500',
        tz: 'UTC-4', timeLocal: '7/11 16:00', status: 'upcoming', note: '8强战'
    },
    {
        id: 81, dateBJ: '7月12日 (周六)', timeBJ: '09:00', group: '—', stage: '1/4决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: 'AT&T体育场', city: '达拉斯', capacity: '80,000',
        tz: 'UTC-5', timeLocal: '7/11 20:00', status: 'upcoming', note: ''
    },
    {
        id: 90, dateBJ: '7月16日 (周三)', timeBJ: '08:00', group: '—', stage: '半决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: '梅赛德斯-奔驰体育场', city: '亚特兰大', capacity: '71,000',
        tz: 'UTC-4', timeLocal: '7/15 20:00', status: 'upcoming', note: '🌟 半决赛'
    },
    {
        id: 91, dateBJ: '7月17日 (周四)', timeBJ: '11:00', group: '—', stage: '半决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: 'SoFi体育场', city: '洛杉矶', capacity: '70,240',
        tz: 'UTC-7', timeLocal: '7/16 20:00', status: 'upcoming', note: '🌟 半决赛'
    },
    {
        id: 95, dateBJ: '7月19日 (周六)', timeBJ: '08:00', group: '—', stage: '三四名决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: 'Hard Rock体育场', city: '迈阿密', capacity: '64,767',
        tz: 'UTC-4', timeLocal: '7/18 20:00', status: 'upcoming', note: '🥉 季军战'
    },
    {
        id: 99, dateBJ: '7月20日 (周日)', timeBJ: '04:00', group: '—', stage: '🏆 决赛',
        home: { flag: '❓', name: '待定' }, away: { flag: '❓', name: '待定' },
        stadium: '大都会人寿体育场', city: '新泽西', capacity: '82,500',
        tz: 'UTC-4', timeLocal: '7/19 16:00', status: 'upcoming', note: '👑 世界之巅！第23届世界杯冠军诞生'
    },
];

// ====== 球场数据 ======
const STADIUMS = [
    { name: '大都会人寿体育场', city: '🇺🇸 新泽西 · 东卢瑟福', cap: '82,500', icon: '🏟️', note: '决赛场地' },
    { name: 'AT&T 体育场', city: '🇺🇸 德克萨斯 · 阿灵顿', cap: '80,000', icon: '🏟️', note: '' },
    { name: 'SoFi 体育场', city: '🇺🇸 加利福尼亚 · 洛杉矶', cap: '70,240', icon: '🏟️', note: '' },
    { name: '阿兹特克体育场', city: '🇲🇽 墨西哥城', cap: '87,523', icon: '🏛️', note: '三次举办世界杯' },
    { name: '梅赛德斯-奔驰体育场', city: '🇺🇸 佐治亚 · 亚特兰大', cap: '71,000', icon: '🏟️', note: '' },
    { name: 'Hard Rock 体育场', city: '🇺🇸 佛罗里达 · 迈阿密', cap: '64,767', icon: '🏟️', note: '' },
    { name: '李维斯体育场', city: '🇺🇸 加利福尼亚 · 圣克拉拉', cap: '68,500', icon: '🏟️', note: '' },
    { name: 'NRG 体育场', city: '🇺🇸 德克萨斯 · 休斯顿', cap: '72,220', icon: '🏟️', note: '' },
    { name: 'BMO 体育场', city: '🇨🇦 安大略 · 多伦多', cap: '45,500', icon: '🏟️', note: '' },
    { name: 'BC Place', city: '🇨🇦 不列颠哥伦比亚 · 温哥华', cap: '54,500', icon: '🏟️', note: '' },
    { name: '吉列体育场', city: '🇺🇸 马萨诸塞 · 福克斯堡', cap: '65,878', icon: '🏟️', note: '' },
    { name: '林肯金融体育场', city: '🇺🇸 宾夕法尼亚 · 费城', cap: '67,594', icon: '🏟️', note: '' },
    { name: 'BBVA 体育场', city: '🇲🇽 新莱昂 · 蒙特雷', cap: '53,500', icon: '🏟️', note: '' },
    { name: 'Lumen 体育场', city: '🇺🇸 华盛顿 · 西雅图', cap: '68,740', icon: '🏟️', note: '' },
    { name: '阿罗黑德体育场', city: '🇺🇸 密苏里 · 堪萨斯城', cap: '76,416', icon: '🏟️', note: '' },
    { name: '联邦快递体育场', city: '🇺🇸 马里兰 · 兰多弗', cap: '62,000', icon: '🏟️', note: '' },
];

// ====== 焦点球队 ======
const FOCUS_TEAMS = [
    { flag: '🇦🇷', name: '阿根廷', fifa: 'FIFA #1', star: true },
    { flag: '🇧🇷', name: '巴西', fifa: 'FIFA #2', star: true },
    { flag: '🇫🇷', name: '法国', fifa: 'FIFA #3', star: true },
    { flag: '🇪🇸', name: '西班牙', fifa: 'FIFA #4', star: true },
    { flag: '🇵🇹', name: '葡萄牙', fifa: 'FIFA #5', star: true },
    { flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', name: '英格兰', fifa: 'FIFA #6', star: true },
    { flag: '🇩🇪', name: '德国', fifa: 'FIFA #10', star: true },
    { flag: '🇲🇽', name: '墨西哥', fifa: '东道主', star: false },
    { flag: '🇺🇸', name: '美国', fifa: '东道主', star: false },
    { flag: '🇨🇦', name: '加拿大', fifa: '东道主', star: false },
    { flag: '🇮🇹', name: '意大利', fifa: 'FIFA #9', star: true },
    { flag: '🇳🇱', name: '荷兰', fifa: 'FIFA #7', star: false },
    { flag: '🇧🇪', name: '比利时', fifa: 'FIFA #8', star: false },
    { flag: '🇨🇴', name: '哥伦比亚', fifa: 'FIFA #11', star: false },
    { flag: '🇺🇾', name: '乌拉圭', fifa: 'FIFA #13', star: false },
    { flag: '🇭🇷', name: '克罗地亚', fifa: 'FIFA #16', star: false },
    { flag: '🇯🇵', name: '日本', fifa: 'FIFA #15', star: false },
    { flag: '🇰🇷', name: '韩国', fifa: 'FIFA #22', star: false },
];

// ==========================================
// 页面渲染
// ==========================================
function renderGroups() {
    const grid = document.getElementById('groups-grid');
    grid.innerHTML = GROUPS.map(g => `
        <div class="group-card">
            <div class="group-card-header">
                <div class="group-name">${g.name}</div>
                <div class="group-label">${g.label}</div>
            </div>
            ${g.teams.map(t => `
                <div class="group-team">
                    <span class="team-flag">${t.flag}</span>
                    <span class="team-name">${t.name}</span>
                    <span class="team-rank">${t.rank}</span>
                </div>
            `).join('')}
        </div>
    `).join('');
}

function renderSchedule() {
    const timeline = document.getElementById('schedule-timeline');

    // 按北京日期分组
    const grouped = {};
    MATCHES.forEach(m => {
        if (!grouped[m.dateBJ]) grouped[m.dateBJ] = [];
        grouped[m.dateBJ].push(m);
    });

    let html = '';
    Object.entries(grouped).forEach(([dateBJ, matches]) => {
        html += `<div class="schedule-date-header">📅 ${dateBJ} 北京时间</div>`;
        matches.forEach(m => {
            const statusClass = m.status === 'live' ? 'live' : m.status === 'done' ? 'done' : 'upcoming';
            const statusText = m.status === 'live' ? '🔴 进行中' : m.status === 'done' ? '✓ 已结束' : '⏳ 即将开始';
            html += `
                <div class="timeline-item" data-match-id="${m.id}">
                    <div class="timeline-dot ${statusClass}"></div>
                    <div class="timeline-date">🕐 ${m.timeBJ} 北京时间 · ${m.stage} · ${m.group}</div>
                    <div class="timeline-card" onclick="openMatchDetail(${m.id})">
                        <span class="match-time-badge">${statusText}</span>
                        <h4>${m.home.flag} ${m.home.name} vs ${m.away.name} ${m.away.flag}</h4>
                        <p>${m.stadium}，${m.city} · 容量 ${m.capacity}</p>
                        <p style="color:var(--text-muted);font-size:0.72rem;margin-top:2px;">当地时间: ${m.timeLocal} (${m.tz})</p>
                        ${m.note ? `<p style="color:var(--gold);font-size:0.8rem;margin-top:4px;">${m.note}</p>` : ''}
                        <div class="card-actions">
                            <span class="click-hint">点击查看详情 ›</span>
                            <a href="https://tv.cctv.com/live/cctv5/" target="_blank" class="cctv5-btn" onclick="event.stopPropagation()" title="CCTV5 体育频道直播">📺 CCTV5 直播</a>
                        </div>
                    </div>
                </div>
            `;
        });
    });

    timeline.innerHTML = html;
}

function renderStadiums() {
    const grid = document.getElementById('stadiums-grid');
    grid.innerHTML = STADIUMS.map(s => `
        <div class="stadium-card">
            <div class="stadium-card-img">${s.icon}</div>
            <div class="stadium-card-info">
                <h3>${s.name}</h3>
                <div class="stadium-city">${s.city}</div>
                <div class="stadium-cap">容量：${s.cap}</div>
                ${s.note ? `<div style="color:var(--gold);font-size:0.72rem;margin-top:4px;">⭐ ${s.note}</div>` : ''}
            </div>
        </div>
    `).join('');
}

function renderTeams() {
    const grid = document.getElementById('teams-grid');
    grid.innerHTML = FOCUS_TEAMS.map(t => `
        <div class="team-card${t.star ? ' star' : ''}">
            <span class="team-flag-lg">${t.flag}</span>
            <span class="team-name-lg">${t.name}</span>
            <span class="team-fifa">${t.fifa}</span>
        </div>
    `).join('');
}

// ==========================================
// 比赛详情弹窗
// ==========================================
function openMatchDetail(matchId) {
    const match = MATCHES.find(m => m.id === matchId);
    if (!match) return;

    const overlay = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-content');
    const statusClass = match.status === 'live' ? 'live' : match.status === 'done' ? 'done' : 'upcoming';
    const statusText = match.status === 'live' ? '🔴 比赛进行中' : match.status === 'done' ? '✓ 比赛已结束' : '⏳ 即将开始';

    content.innerHTML = `
        <div class="modal-match-teams">
            <div class="vs-line">
                <div class="modal-team">
                    <span class="modal-flag">${match.home.flag}</span>
                    <span class="modal-team-name">${match.home.name}</span>
                </div>
                <div class="modal-vs">VS</div>
                <div class="modal-team">
                    <span class="modal-flag">${match.away.flag}</span>
                    <span class="modal-team-name">${match.away.name}</span>
                </div>
            </div>
        </div>
        <div class="modal-match-info">
            <div class="modal-info-item">
                <div class="info-label">📅 日期 (北京)</div>
                <div class="info-value">${match.dateBJ}</div>
            </div>
            <div class="modal-info-item">
                <div class="info-label">⏰ 开球 (北京时间)</div>
                <div class="info-value" style="color:var(--gold);font-size:1.2rem;font-weight:800;">${match.timeBJ}</div>
            </div>
            <div class="modal-info-item">
                <div class="info-label">🏆 阶段</div>
                <div class="info-value">${match.stage}</div>
            </div>
            <div class="modal-info-item">
                <div class="info-label">📋 组别</div>
                <div class="info-value">${match.group}</div>
            </div>
            <div class="modal-info-item full-width">
                <div class="info-label">🏟️ 比赛场地</div>
                <div class="info-value">${match.stadium}</div>
            </div>
            <div class="modal-info-item">
                <div class="info-label">📍 城市</div>
                <div class="info-value">${match.city}</div>
            </div>
            <div class="modal-info-item">
                <div class="info-label">👥 容量</div>
                <div class="info-value">${match.capacity} 人</div>
            </div>
            <div class="modal-info-item full-width">
                <div class="info-label">🕐 当地时间</div>
                <div class="info-value">${match.timeLocal} (${match.tz})</div>
            </div>
        </div>
        <div class="modal-status ${statusClass}">${statusText}</div>
        ${match.note ? `<p style="text-align:center;color:var(--gold);margin-top:12px;font-size:0.9rem;">${match.note}</p>` : ''}
        <a href="https://tv.cctv.com/live/cctv5/" target="_blank" class="modal-cctv5-btn">
            📺 在 CCTV5 观看直播 →
        </a>
    `;

    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    overlay.classList.remove('show');
    document.body.style.overflow = '';
}

// ==========================================
// 倒计时
// ==========================================
function updateCountdown() {
    const worldCupStart = new Date('2026-06-11T12:00:00-06:00');
    const worldCupEnd = new Date('2026-07-19T20:00:00-04:00');
    const now = new Date();
    const statusEl = document.getElementById('hero-status');

    let target;
    if (now < worldCupStart) {
        target = worldCupStart;
        statusEl.textContent = '距离世界杯开幕还有...';
    } else if (now < worldCupEnd) {
        target = worldCupEnd;
        statusEl.textContent = '🔥 世界杯正在进行中！';
    } else {
        document.getElementById('countdown').innerHTML =
            '<p style="color:var(--gold);font-size:1.2rem;">2026世界杯已圆满结束！期待2030！</p>';
        statusEl.textContent = '';
        return;
    }

    const diff = target - now;
    if (diff <= 0) {
        updateCountdown();
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('cd-days').textContent = String(days).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2, '0');
}

// ==========================================
// 导航栏交互
// ==========================================
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(s => {
            const top = s.offsetTop - 100;
            if (window.scrollY >= top) current = s.getAttribute('id');
        });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === '#' + current) a.classList.add('active');
        });
    });

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => navLinks.classList.remove('show'));
    });
}

// ==========================================
// 滚动动画
// ==========================================
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.group-card, .stadium-card, .team-card, .timeline-item, .hl-card')
        .forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(24px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
}

// ==========================================
// 初始化
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderGroups();
    renderSchedule();
    renderStadiums();
    renderTeams();
    updateCountdown();
    setInterval(updateCountdown, 1000);
    setupNavbar();
    setupScrollAnimations();

    // 弹窗关闭事件
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});
