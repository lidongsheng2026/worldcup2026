/* ============================================
   2026 FIFA World Cup - 交互脚本
   数据来源: FIFA官方 + CCTV5节目表
   全部时间为北京时间 (UTC+8)
   ============================================ */

// ====== 小组赛分组 (FIFA官方48队) ======
const GROUPS = [
    { name:'A',label:'A 组',teams:[
        {flag:'🇲🇽',name:'墨西哥(东道主)',rank:'FIFA 14'},
        {flag:'🇿🇦',name:'南非',rank:'FIFA 58'},
        {flag:'🇰🇷',name:'韩国',rank:'FIFA 22'},
        {flag:'🇨🇿',name:'捷克',rank:'FIFA 38'}
    ]},
    { name:'B',label:'B 组',teams:[
        {flag:'🇨🇦',name:'加拿大(东道主)',rank:'FIFA 49'},
        {flag:'🇧🇦',name:'波黑',rank:'FIFA 42'},
        {flag:'🇶🇦',name:'卡塔尔',rank:'FIFA 43'},
        {flag:'🇨🇭',name:'瑞士',rank:'FIFA 21'}
    ]},
    { name:'C',label:'C 组',teams:[
        {flag:'🇧🇷',name:'巴西',rank:'FIFA 2'},
        {flag:'🇲🇦',name:'摩洛哥',rank:'FIFA 12'},
        {flag:'🇭🇹',name:'海地',rank:'FIFA 88'},
        {flag:'🏴󠁧󠁢󠁳󠁣󠁴󠁿',name:'苏格兰',rank:'FIFA 36'}
    ]},
    { name:'D',label:'D 组',teams:[
        {flag:'🇺🇸',name:'美国(东道主)',rank:'FIFA 20'},
        {flag:'🇵🇾',name:'巴拉圭',rank:'FIFA 50'},
        {flag:'🇦🇺',name:'澳大利亚',rank:'FIFA 24'},
        {flag:'🇹🇷',name:'土耳其',rank:'FIFA 35'}
    ]},
    { name:'E',label:'E 组',teams:[
        {flag:'🇩🇪',name:'德国',rank:'FIFA 10'},
        {flag:'🇨🇼',name:'库拉索',rank:'FIFA 90'},
        {flag:'🇨🇮',name:'科特迪瓦',rank:'FIFA 40'},
        {flag:'🇪🇨',name:'厄瓜多尔',rank:'FIFA 25'}
    ]},
    { name:'F',label:'F 组',teams:[
        {flag:'🇳🇱',name:'荷兰',rank:'FIFA 7'},
        {flag:'🇯🇵',name:'日本',rank:'FIFA 15'},
        {flag:'🇸🇪',name:'瑞典',rank:'FIFA 26'},
        {flag:'🇹🇳',name:'突尼斯',rank:'FIFA 37'}
    ]},
    { name:'G',label:'G 组',teams:[
        {flag:'🇧🇪',name:'比利时',rank:'FIFA 8'},
        {flag:'🇪🇬',name:'埃及',rank:'FIFA 33'},
        {flag:'🇮🇷',name:'伊朗',rank:'FIFA 19'},
        {flag:'🇳🇿',name:'新西兰',rank:'FIFA 89'}
    ]},
    { name:'H',label:'H 组',teams:[
        {flag:'🇪🇸',name:'西班牙',rank:'FIFA 4'},
        {flag:'🇨🇻',name:'佛得角',rank:'FIFA 65'},
        {flag:'🇸🇦',name:'沙特阿拉伯',rank:'FIFA 53'},
        {flag:'🇺🇾',name:'乌拉圭',rank:'FIFA 13'}
    ]},
    { name:'I',label:'I 组',teams:[
        {flag:'🇫🇷',name:'法国',rank:'FIFA 3'},
        {flag:'🇸🇳',name:'塞内加尔',rank:'FIFA 17'},
        {flag:'🇮🇶',name:'伊拉克',rank:'FIFA 64'},
        {flag:'🇳🇴',name:'挪威',rank:'FIFA 45'}
    ]},
    { name:'J',label:'J 组',teams:[
        {flag:'🇦🇷',name:'阿根廷',rank:'FIFA 1'},
        {flag:'🇩🇿',name:'阿尔及利亚',rank:'FIFA 34'},
        {flag:'🇦🇹',name:'奥地利',rank:'FIFA 23'},
        {flag:'🇯🇴',name:'约旦',rank:'FIFA 55'}
    ]},
    { name:'K',label:'K 组',teams:[
        {flag:'🇵🇹',name:'葡萄牙',rank:'FIFA 5'},
        {flag:'🇨🇩',name:'刚果(金)',rank:'FIFA 64'},
        {flag:'🇺🇿',name:'乌兹别克斯坦',rank:'FIFA 61'},
        {flag:'🇨🇴',name:'哥伦比亚',rank:'FIFA 11'}
    ]},
    { name:'L',label:'L 组',teams:[
        {flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',name:'英格兰',rank:'FIFA 6'},
        {flag:'🇭🇷',name:'克罗地亚',rank:'FIFA 16'},
        {flag:'🇬🇭',name:'加纳',rank:'FIFA 47'},
        {flag:'🇵🇦',name:'巴拿马',rank:'FIFA 70'}
    ]}
];

// ====== CCTV比赛链接映射 (从CCTV API自动匹配) ======
const CCTV_MATCH_IDS = {
    1:22920296,2:23510405,3:23510406,4:22920302,5:22920299,6:22920306,7:22920305,8:23510407,
    9:22920309,10:22920314,11:22920317,12:23510408,13:22920327,14:22920326,15:22920325,16:22920324,
    17:22920336,18:23510452,19:22920331,20:22920330,21:23510453,22:22920346,23:22920345,24:22920344,
    25:23510409,26:23510410,27:22920298,28:22920295,29:22920301,30:22920303,31:22920304,32:23510411,
    33:23510412,34:22920316,35:22920315,36:22920312,37:22920323,38:22920322,39:22920321,40:22920320,
    41:22920338,42:23510454,43:22920334,44:22920337,45:22920342,46:22920343,47:22920341,48:23510455,
    49:22920297,50:23510413,51:22920308,52:22920307,53:23510414,54:22920294,55:22920313,56:22920311,
    57:23510415,58:22920310,59:23510416,60:22920300,61:22920332,62:23510456,63:22920329,64:22920319,
    65:22920328,66:22920318,67:22920339,68:22920347,69:22920340,70:23510457,71:22920333,72:22920335,
    // 73-104: 淘汰赛，央视页面赛前陆续上线
};
function getCCTVUrl(matchId) {
    const cctvId = CCTV_MATCH_IDS[matchId];
    if (cctvId) return 'https://worldcup.cctv.com/2026/match/' + cctvId + '/index.shtml';
    return 'https://worldcup.cctv.com/2026/'; // 淘汰赛未上线时跳转首页
}

// ====== 完整赛程 — 104场 (北京时间) ======
// match: id, dateBJ, timeBJ, group, stage, home/away, stadium, city, capacity, status, note, timeLocal
const M = (id,dateBJ,timeBJ,group,stage,hf,hn,af,an,stadium,city,cap,status,note,timeLocal) => ({
    id,dateBJ,timeBJ,group,stage,
    home:{flag:hf,name:hn},away:{flag:af,name:an},
    stadium,city,capacity:cap,status,timeLocal,note
});

const MATCHES = [
    // ══════════════ 第1轮 ══════════════
    // === 6月12日 (周五) ===
    M(1,'6月12日(周五)','03:00','A组','小组赛第1轮','🇲🇽','墨西哥','🇿🇦','南非','阿兹特克体育场','墨西哥城','87,523','live','🔥 揭幕战！CCTV5直播','6/11 13:00'),
    M(2,'6月12日(周五)','10:00','A组','小组赛第1轮','🇰🇷','韩国','🇨🇿','捷克','阿克伦体育场','瓜达拉哈拉','48,071','live','孙兴慜领衔','6/11 20:00'),

    // === 6月13日 (周六) ===
    M(3,'6月13日(周六)','03:00','B组','小组赛第1轮','🇨🇦','加拿大','🇧🇦','波黑','BMO体育场','多伦多','45,500','upcoming','🇨🇦 东道主首秀','6/12 15:00'),
    M(4,'6月13日(周六)','09:00','D组','小组赛第1轮','🇺🇸','美国','🇵🇾','巴拉圭','SoFi体育场','洛杉矶','70,240','upcoming','🇺🇸 东道主首秀','6/12 18:00'),

    // === 6月14日 (周日) ===
    M(5,'6月14日(周日)','03:00','B组','小组赛第1轮','🇶🇦','卡塔尔','🇨🇭','瑞士','李维斯体育场','圣克拉拉','68,500','upcoming','','6/13 12:00'),
    M(6,'6月14日(周日)','06:00','C组','小组赛第1轮','🇧🇷','巴西','🇲🇦','摩洛哥','大都会人寿体育场','新泽西','82,500','upcoming','🇧🇷 五星巴西首秀！CCTV5直播','6/13 18:00'),
    M(7,'6月14日(周日)','09:00','C组','小组赛第1轮','🇭🇹','海地','🏴󠁧󠁢󠁳󠁣󠁴󠁿','苏格兰','吉列体育场','福克斯堡','65,878','upcoming','','6/13 21:00'),
    M(8,'6月14日(周日)','12:00','D组','小组赛第1轮','🇦🇺','澳大利亚','🇹🇷','土耳其','BC Place','温哥华','54,500','upcoming','','6/13 21:00'),

    // === 6月15日 (周一) ===
    M(9,'6月15日(周一)','01:00','E组','小组赛第1轮','🇩🇪','德国','🇨🇼','库拉索','NRG体育场','休斯顿','72,220','upcoming','🇩🇪 德国战车登场','6/14 12:00'),
    M(10,'6月15日(周一)','04:00','F组','小组赛第1轮','🇳🇱','荷兰','🇯🇵','日本','AT&T体育场','达拉斯','80,000','upcoming','💥 日本挑战荷兰！CCTV5直播','6/14 16:00'),
    M(11,'6月15日(周一)','07:00','E组','小组赛第1轮','🇨🇮','科特迪瓦','🇪🇨','厄瓜多尔','林肯金融体育场','费城','67,594','upcoming','','6/14 19:00'),
    M(12,'6月15日(周一)','10:00','F组','小组赛第1轮','🇸🇪','瑞典','🇹🇳','突尼斯','BBVA体育场','蒙特雷','53,500','upcoming','','6/14 20:00'),

    // === 6月16日 (周二) ===
    M(13,'6月16日(周二)','00:00','H组','小组赛第1轮','🇪🇸','西班牙','🇨🇻','佛得角','梅赛德斯-奔驰体育场','亚特兰大','71,000','upcoming','','6/15 12:00'),
    M(14,'6月16日(周二)','03:00','G组','小组赛第1轮','🇧🇪','比利时','🇪🇬','埃及','Lumen体育场','西雅图','68,740','upcoming','','6/15 12:00'),
    M(15,'6月16日(周二)','06:00','H组','小组赛第1轮','🇸🇦','沙特阿拉伯','🇺🇾','乌拉圭','Hard Rock体育场','迈阿密','64,767','upcoming','','6/15 18:00'),
    M(16,'6月16日(周二)','09:00','G组','小组赛第1轮','🇮🇷','伊朗','🇳🇿','新西兰','SoFi体育场','洛杉矶','70,240','upcoming','','6/15 18:00'),

    // === 6月17日 (周三) ===
    M(17,'6月17日(周三)','03:00','I组','小组赛第1轮','🇫🇷','法国','🇸🇳','塞内加尔','大都会人寿体育场','新泽西','82,500','upcoming','🇫🇷 法国首秀','6/16 15:00'),
    M(18,'6月17日(周三)','06:00','I组','小组赛第1轮','🇮🇶','伊拉克','🇳🇴','挪威','吉列体育场','福克斯堡','65,878','upcoming','🌟 哈兰德世界杯首秀','6/16 18:00'),
    M(19,'6月17日(周三)','09:00','J组','小组赛第1轮','🇦🇷','阿根廷','🇩🇿','阿尔及利亚','阿罗黑德体育场','堪萨斯城','76,416','upcoming','⭐ 梅西首秀！CCTV5直播','6/16 20:00'),
    M(20,'6月17日(周三)','12:00','J组','小组赛第1轮','🇦🇹','奥地利','🇯🇴','约旦','李维斯体育场','圣克拉拉','68,500','upcoming','','6/16 21:00'),

    // === 6月18日 (周四) ===
    M(21,'6月18日(周四)','01:00','K组','小组赛第1轮','🇵🇹','葡萄牙','🇨🇩','刚果(金)','NRG体育场','休斯顿','72,220','upcoming','⭐ C罗首秀！CCTV5直播','6/17 12:00'),
    M(22,'6月18日(周四)','04:00','L组','小组赛第1轮','🏴󠁧󠁢󠁥󠁮󠁧󠁿','英格兰','🇭🇷','克罗地亚','AT&T体育场','达拉斯','80,000','upcoming','💥 英克大战！CCTV5直播','6/17 16:00'),
    M(23,'6月18日(周四)','07:00','L组','小组赛第1轮','🇬🇭','加纳','🇵🇦','巴拿马','BMO体育场','多伦多','45,500','upcoming','','6/17 19:00'),
    M(24,'6月18日(周四)','10:00','K组','小组赛第1轮','🇺🇿','乌兹别克斯坦','🇨🇴','哥伦比亚','阿兹特克体育场','墨西哥城','87,523','upcoming','','6/17 20:00'),

    // ══════════════ 第2轮 ══════════════
    // === 6月19日 (周五) ===
    M(25,'6月19日(周五)','00:00','A组','小组赛第2轮','🇨🇿','捷克','🇿🇦','南非','梅赛德斯-奔驰体育场','亚特兰大','71,000','upcoming','','6/18 12:00'),
    M(26,'6月19日(周五)','03:00','B组','小组赛第2轮','🇨🇭','瑞士','🇧🇦','波黑','SoFi体育场','洛杉矶','70,240','upcoming','','6/18 12:00'),
    M(27,'6月19日(周五)','06:00','B组','小组赛第2轮','🇨🇦','加拿大','🇶🇦','卡塔尔','BC Place','温哥华','54,500','upcoming','','6/18 18:00'),
    M(28,'6月19日(周五)','09:00','A组','小组赛第2轮','🇲🇽','墨西哥','🇰🇷','韩国','阿克伦体育场','瓜达拉哈拉','48,071','upcoming','💥 墨韩大战','6/18 19:00'),

    // === 6月20日 (周六) ===
    M(29,'6月20日(周六)','03:00','D组','小组赛第2轮','🇺🇸','美国','🇦🇺','澳大利亚','Lumen体育场','西雅图','68,740','upcoming','🇺🇸 东道主关键战','6/19 12:00'),
    M(30,'6月20日(周六)','06:00','C组','小组赛第2轮','🏴󠁧󠁢󠁳󠁣󠁴󠁿','苏格兰','🇲🇦','摩洛哥','吉列体育场','福克斯堡','65,878','upcoming','','6/19 18:00'),
    M(31,'6月20日(周六)','08:30','C组','小组赛第2轮','🇧🇷','巴西','🇭🇹','海地','林肯金融体育场','费城','67,594','upcoming','🇧🇷 桑巴军团','6/19 20:30'),
    M(32,'6月20日(周六)','11:00','D组','小组赛第2轮','🇹🇷','土耳其','🇵🇾','巴拉圭','李维斯体育场','圣克拉拉','68,500','upcoming','','6/19 20:00'),

    // === 6月21日 (周日) ===
    M(33,'6月21日(周日)','01:00','F组','小组赛第2轮','🇳🇱','荷兰','🇸🇪','瑞典','NRG体育场','休斯顿','72,220','upcoming','','6/20 12:00'),
    M(34,'6月21日(周日)','04:00','E组','小组赛第2轮','🇩🇪','德国','🇨🇮','科特迪瓦','BMO体育场','多伦多','45,500','upcoming','','6/20 16:00'),
    M(35,'6月21日(周日)','08:00','E组','小组赛第2轮','🇪🇨','厄瓜多尔','🇨🇼','库拉索','阿罗黑德体育场','堪萨斯城','76,416','upcoming','','6/20 19:00'),
    M(36,'6月21日(周日)','12:00','F组','小组赛第2轮','🇹🇳','突尼斯','🇯🇵','日本','BBVA体育场','蒙特雷','53,500','upcoming','🇯🇵 日本关键战','6/20 22:00'),

    // === 6月22日 (周一) ===
    M(37,'6月22日(周一)','00:00','H组','小组赛第2轮','🇪🇸','西班牙','🇸🇦','沙特阿拉伯','梅赛德斯-奔驰体育场','亚特兰大','71,000','upcoming','','6/21 12:00'),
    M(38,'6月22日(周一)','03:00','G组','小组赛第2轮','🇧🇪','比利时','🇮🇷','伊朗','SoFi体育场','洛杉矶','70,240','upcoming','','6/21 12:00'),
    M(39,'6月22日(周一)','06:00','H组','小组赛第2轮','🇺🇾','乌拉圭','🇨🇻','佛得角','Hard Rock体育场','迈阿密','64,767','upcoming','','6/21 18:00'),
    M(40,'6月22日(周一)','09:00','G组','小组赛第2轮','🇳🇿','新西兰','🇪🇬','埃及','BC Place','温哥华','54,500','upcoming','','6/21 18:00'),

    // === 6月23日 (周二) ===
    M(41,'6月23日(周二)','01:00','J组','小组赛第2轮','🇦🇷','阿根廷','🇦🇹','奥地利','AT&T体育场','达拉斯','80,000','upcoming','⭐ 梅西第2场','6/22 12:00'),
    M(42,'6月23日(周二)','05:00','I组','小组赛第2轮','🇫🇷','法国','🇮🇶','伊拉克','林肯金融体育场','费城','67,594','upcoming','','6/22 17:00'),
    M(43,'6月23日(周二)','08:00','I组','小组赛第2轮','🇳🇴','挪威','🇸🇳','塞内加尔','大都会人寿体育场','新泽西','82,500','upcoming','🌟 哈兰德第2场','6/22 20:00'),
    M(44,'6月23日(周二)','11:00','J组','小组赛第2轮','🇯🇴','约旦','🇩🇿','阿尔及利亚','李维斯体育场','圣克拉拉','68,500','upcoming','','6/22 20:00'),

    // === 6月24日 (周三) ===
    M(45,'6月24日(周三)','01:00','K组','小组赛第2轮','🇵🇹','葡萄牙','🇺🇿','乌兹别克斯坦','NRG体育场','休斯顿','72,220','upcoming','⭐ C罗第2场','6/23 12:00'),
    M(46,'6月24日(周三)','04:00','L组','小组赛第2轮','🏴󠁧󠁢󠁥󠁮󠁧󠁿','英格兰','🇬🇭','加纳','吉列体育场','福克斯堡','65,878','upcoming','','6/23 16:00'),
    M(47,'6月24日(周三)','07:00','L组','小组赛第2轮','🇵🇦','巴拿马','🇭🇷','克罗地亚','BMO体育场','多伦多','45,500','upcoming','','6/23 19:00'),
    M(48,'6月24日(周三)','10:00','K组','小组赛第2轮','🇨🇴','哥伦比亚','🇨🇩','刚果(金)','阿克伦体育场','瓜达拉哈拉','48,071','upcoming','','6/23 20:00'),

    // ══════════════ 第3轮 (同组同时开球) ══════════════
    // === 6月25日 (周四) ===
    M(49,'6月25日(周四)','03:00','B组','小组赛第3轮','🇨🇭','瑞士','🇨🇦','加拿大','BC Place','温哥华','54,500','upcoming','末轮同时开球','6/24 12:00'),
    M(50,'6月25日(周四)','03:00','B组','小组赛第3轮','🇧🇦','波黑','🇶🇦','卡塔尔','Lumen体育场','西雅图','68,740','upcoming','末轮同时开球','6/24 12:00'),
    M(51,'6月25日(周四)','06:00','C组','小组赛第3轮','🏴󠁧󠁢󠁳󠁣󠁴󠁿','苏格兰','🇧🇷','巴西','Hard Rock体育场','迈阿密','64,767','upcoming','末轮同时开球','6/24 18:00'),
    M(52,'6月25日(周四)','06:00','C组','小组赛第3轮','🇲🇦','摩洛哥','🇭🇹','海地','梅赛德斯-奔驰体育场','亚特兰大','71,000','upcoming','末轮同时开球','6/24 18:00'),
    M(53,'6月25日(周四)','09:00','A组','小组赛第3轮','🇨🇿','捷克','🇲🇽','墨西哥','阿兹特克体育场','墨西哥城','87,523','upcoming','末轮同时开球','6/24 19:00'),
    M(54,'6月25日(周四)','09:00','A组','小组赛第3轮','🇿🇦','南非','🇰🇷','韩国','BBVA体育场','蒙特雷','53,500','upcoming','末轮同时开球','6/24 19:00'),

    // === 6月26日 (周五) ===
    M(55,'6月26日(周五)','04:00','E组','小组赛第3轮','🇪🇨','厄瓜多尔','🇩🇪','德国','大都会人寿体育场','新泽西','82,500','upcoming','末轮同时开球','6/25 16:00'),
    M(56,'6月26日(周五)','04:00','E组','小组赛第3轮','🇨🇼','库拉索','🇨🇮','科特迪瓦','林肯金融体育场','费城','67,594','upcoming','末轮同时开球','6/25 16:00'),
    M(57,'6月26日(周五)','07:00','F组','小组赛第3轮','🇯🇵','日本','🇸🇪','瑞典','AT&T体育场','达拉斯','80,000','upcoming','🇯🇵 出线关键战','6/25 18:00'),
    M(58,'6月26日(周五)','07:00','F组','小组赛第3轮','🇹🇳','突尼斯','🇳🇱','荷兰','阿罗黑德体育场','堪萨斯城','76,416','upcoming','末轮同时开球','6/25 18:00'),
    M(59,'6月26日(周五)','10:00','D组','小组赛第3轮','🇹🇷','土耳其','🇺🇸','美国','SoFi体育场','洛杉矶','70,240','upcoming','🇺🇸 东道主出线战','6/25 19:00'),
    M(60,'6月26日(周五)','10:00','D组','小组赛第3轮','🇵🇾','巴拉圭','🇦🇺','澳大利亚','李维斯体育场','圣克拉拉','68,500','upcoming','末轮同时开球','6/25 19:00'),

    // === 6月27日 (周六) ===
    M(61,'6月27日(周六)','03:00','I组','小组赛第3轮','🇳🇴','挪威','🇫🇷','法国','吉列体育场','福克斯堡','65,878','upcoming','🌟 哈兰德vs法国','6/26 15:00'),
    M(62,'6月27日(周六)','03:00','I组','小组赛第3轮','🇸🇳','塞内加尔','🇮🇶','伊拉克','BMO体育场','多伦多','45,500','upcoming','末轮同时开球','6/26 15:00'),
    M(63,'6月27日(周六)','08:00','H组','小组赛第3轮','🇨🇻','佛得角','🇸🇦','沙特阿拉伯','NRG体育场','休斯顿','72,220','upcoming','末轮同时开球','6/26 19:00'),
    M(64,'6月27日(周六)','08:00','H组','小组赛第3轮','🇺🇾','乌拉圭','🇪🇸','西班牙','阿克伦体育场','瓜达拉哈拉','48,071','upcoming','末轮同时开球','6/26 18:00'),
    M(65,'6月27日(周六)','11:00','G组','小组赛第3轮','🇪🇬','埃及','🇮🇷','伊朗','Lumen体育场','西雅图','68,740','upcoming','末轮同时开球','6/26 20:00'),
    M(66,'6月27日(周六)','11:00','G组','小组赛第3轮','🇳🇿','新西兰','🇧🇪','比利时','BC Place','温哥华','54,500','upcoming','末轮同时开球','6/26 20:00'),

    // === 6月28日 (周日) ===
    M(67,'6月28日(周日)','05:00','L组','小组赛第3轮','🇵🇦','巴拿马','🏴󠁧󠁢󠁥󠁮󠁧󠁿','英格兰','大都会人寿体育场','新泽西','82,500','upcoming','末轮同时开球','6/27 17:00'),
    M(68,'6月28日(周日)','05:00','L组','小组赛第3轮','🇭🇷','克罗地亚','🇬🇭','加纳','林肯金融体育场','费城','67,594','upcoming','末轮同时开球','6/27 17:00'),
    M(69,'6月28日(周日)','07:30','K组','小组赛第3轮','🇨🇴','哥伦比亚','🇵🇹','葡萄牙','Hard Rock体育场','迈阿密','64,767','upcoming','⭐ C罗小组收官','6/27 19:30'),
    M(70,'6月28日(周日)','07:30','K组','小组赛第3轮','🇨🇩','刚果(金)','🇺🇿','乌兹别克斯坦','梅赛德斯-奔驰体育场','亚特兰大','71,000','upcoming','末轮同时开球','6/27 19:30'),
    M(71,'6月28日(周日)','10:00','J组','小组赛第3轮','🇩🇿','阿尔及利亚','🇦🇹','奥地利','阿罗黑德体育场','堪萨斯城','76,416','upcoming','末轮同时开球','6/27 21:00'),
    M(72,'6月28日(周日)','10:00','J组','小组赛第3轮','🇯🇴','约旦','🇦🇷','阿根廷','AT&T体育场','达拉斯','80,000','upcoming','⭐ 梅西小组收官','6/27 21:00'),

    // ══════════════ 1/16决赛 (32进16) ══════════════
    M(73,'6月29日(周日)','03:00','—','1/16决赛','❓','A组第2','❓','B组第2','SoFi体育场','洛杉矶','70,240','upcoming','32强淘汰赛！CCTV5直播','6/28 12:00'),
    M(74,'6月30日(周一)','01:00','—','1/16决赛','❓','C组第1','❓','F组第2','NRG体育场','休斯顿','72,220','upcoming','CCTV5直播','6/29 12:00'),
    M(75,'6月30日(周一)','04:30','—','1/16决赛','❓','E组第1','❓','最佳第3','吉列体育场','福克斯堡','65,878','upcoming','CCTV5直播','6/29 16:30'),
    M(76,'6月30日(周一)','09:00','—','1/16决赛','❓','F组第1','❓','C组第2','BBVA体育场','蒙特雷','53,500','upcoming','CCTV5直播','6/29 19:00'),
    M(77,'7月1日(周二)','01:00','—','1/16决赛','❓','E组第2','❓','I组第2','AT&T体育场','达拉斯','80,000','upcoming','CCTV5直播','6/30 12:00'),
    M(78,'7月1日(周二)','05:00','—','1/16决赛','❓','I组第1','❓','最佳第3','大都会人寿体育场','新泽西','82,500','upcoming','CCTV5直播','6/30 17:00'),
    M(79,'7月1日(周二)','09:00','—','1/16决赛','❓','A组第1','❓','最佳第3','阿兹特克体育场','墨西哥城','87,523','upcoming','CCTV5直播','6/30 19:00'),
    M(80,'7月2日(周三)','00:00','—','1/16决赛','❓','L组第1','❓','最佳第3','梅赛德斯-奔驰体育场','亚特兰大','71,000','upcoming','CCTV5直播','7/1 12:00'),
    M(81,'7月2日(周三)','04:00','—','1/16决赛','❓','G组第1','❓','最佳第3','Lumen体育场','西雅图','68,740','upcoming','CCTV5直播','7/1 13:00'),
    M(82,'7月2日(周三)','08:00','—','1/16决赛','❓','D组第1','❓','最佳第3','李维斯体育场','圣克拉拉','68,500','upcoming','CCTV5直播','7/1 17:00'),
    M(83,'7月3日(周四)','03:00','—','1/16决赛','❓','H组第1','❓','J组第2','SoFi体育场','洛杉矶','70,240','upcoming','CCTV5直播','7/2 12:00'),
    M(84,'7月3日(周四)','07:00','—','1/16决赛','❓','K组第2','❓','L组第2','BMO体育场','多伦多','45,500','upcoming','CCTV5直播','7/2 19:00'),
    M(85,'7月3日(周四)','11:00','—','1/16决赛','❓','B组第1','❓','最佳第3','BC Place','温哥华','54,500','upcoming','CCTV5直播','7/2 20:00'),
    M(86,'7月4日(周五)','02:00','—','1/16决赛','❓','D组第2','❓','G组第2','AT&T体育场','达拉斯','80,000','upcoming','CCTV5直播','7/3 13:00'),
    M(87,'7月4日(周五)','06:00','—','1/16决赛','❓','J组第1','❓','H组第2','Hard Rock体育场','迈阿密','64,767','upcoming','CCTV5直播','7/3 18:00'),
    M(88,'7月4日(周五)','09:30','—','1/16决赛','❓','K组第1','❓','最佳第3','阿罗黑德体育场','堪萨斯城','76,416','upcoming','CCTV5直播','7/3 20:30'),

    // ══════════════ 1/8决赛 ══════════════
    M(89,'7月5日(周六)','01:00','—','1/8决赛','❓','待定','❓','待定','NRG体育场','休斯顿','72,220','upcoming','16强战！CCTV5直播','7/4 12:00'),
    M(90,'7月5日(周六)','05:00','—','1/8决赛','❓','待定','❓','待定','林肯金融体育场','费城','67,594','upcoming','CCTV5直播','7/4 17:00'),
    M(91,'7月6日(周日)','04:00','—','1/8决赛','❓','待定','❓','待定','大都会人寿体育场','新泽西','82,500','upcoming','CCTV5直播','7/5 16:00'),
    M(92,'7月6日(周日)','08:00','—','1/8决赛','❓','待定','❓','待定','阿兹特克体育场','墨西哥城','87,523','upcoming','CCTV5直播','7/5 18:00'),
    M(93,'7月7日(周一)','03:00','—','1/8决赛','❓','待定','❓','待定','AT&T体育场','达拉斯','80,000','upcoming','CCTV5直播','7/6 14:00'),
    M(94,'7月7日(周一)','08:00','—','1/8决赛','❓','待定','❓','待定','Lumen体育场','西雅图','68,740','upcoming','CCTV5直播','7/6 17:00'),
    M(95,'7月8日(周二)','00:00','—','1/8决赛','❓','待定','❓','待定','梅赛德斯-奔驰体育场','亚特兰大','71,000','upcoming','CCTV5直播','7/7 12:00'),
    M(96,'7月8日(周二)','04:00','—','1/8决赛','❓','待定','❓','待定','BC Place','温哥华','54,500','upcoming','CCTV5直播','7/7 13:00'),

    // ══════════════ 1/4决赛 ══════════════
    M(97,'7月10日(周四)','04:00','—','1/4决赛','❓','待定','❓','待定','吉列体育场','福克斯堡','65,878','upcoming','🔥 8强战！CCTV5直播','7/9 16:00'),
    M(98,'7月11日(周五)','03:00','—','1/4决赛','❓','待定','❓','待定','SoFi体育场','洛杉矶','70,240','upcoming','CCTV5直播','7/10 12:00'),
    M(99,'7月12日(周六)','05:00','—','1/4决赛','❓','待定','❓','待定','Hard Rock体育场','迈阿密','64,767','upcoming','CCTV5直播','7/11 17:00'),
    M(100,'7月12日(周六)','09:00','—','1/4决赛','❓','待定','❓','待定','阿罗黑德体育场','堪萨斯城','76,416','upcoming','CCTV5直播','7/11 20:00'),

    // ══════════════ 半决赛 ══════════════
    M(101,'7月15日(周三)','03:00','—','半决赛','❓','待定','❓','待定','AT&T体育场','达拉斯','80,000','upcoming','🌟 半决赛！CCTV5直播','7/14 14:00'),
    M(102,'7月16日(周四)','03:00','—','半决赛','❓','待定','❓','待定','梅赛德斯-奔驰体育场','亚特兰大','71,000','upcoming','🌟 半决赛！CCTV5直播','7/15 15:00'),

    // ══════════════ 决赛 ══════════════
    M(103,'7月19日(周日)','05:00','—','🥉三四名决赛','❓','待定','❓','待定','Hard Rock体育场','迈阿密','64,767','upcoming','季军战！CCTV5直播','7/18 17:00'),
    M(104,'7月20日(周一)','03:00','—','🏆 决赛','❓','待定','❓','待定','大都会人寿体育场','新泽西','82,500','upcoming','👑 世界杯决赛！CCTV5全程直播','7/19 15:00'),
];

// ====== 球场数据 ======
const STADIUMS = [
    { name:'大都会人寿体育场', city:'🇺🇸 新泽西', cap:'82,500', icon:'🏟️', note:'决赛场地' },
    { name:'AT&T 体育场', city:'🇺🇸 达拉斯', cap:'80,000', icon:'🏟️', note:'' },
    { name:'SoFi 体育场', city:'🇺🇸 洛杉矶', cap:'70,240', icon:'🏟️', note:'' },
    { name:'阿兹特克体育场', city:'🇲🇽 墨西哥城', cap:'87,523', icon:'🏛️', note:'揭幕战场地' },
    { name:'梅赛德斯-奔驰体育场', city:'🇺🇸 亚特兰大', cap:'71,000', icon:'🏟️', note:'' },
    { name:'Hard Rock 体育场', city:'🇺🇸 迈阿密', cap:'64,767', icon:'🏟️', note:'季军赛场地' },
    { name:'李维斯体育场', city:'🇺🇸 圣克拉拉', cap:'68,500', icon:'🏟️', note:'' },
    { name:'NRG 体育场', city:'🇺🇸 休斯顿', cap:'72,220', icon:'🏟️', note:'' },
    { name:'BMO 体育场', city:'🇨🇦 多伦多', cap:'45,500', icon:'🏟️', note:'' },
    { name:'BC Place', city:'🇨🇦 温哥华', cap:'54,500', icon:'🏟️', note:'' },
    { name:'吉列体育场', city:'🇺🇸 福克斯堡', cap:'65,878', icon:'🏟️', note:'' },
    { name:'林肯金融体育场', city:'🇺🇸 费城', cap:'67,594', icon:'🏟️', note:'' },
    { name:'BBVA 体育场', city:'🇲🇽 蒙特雷', cap:'53,500', icon:'🏟️', note:'' },
    { name:'Lumen 体育场', city:'🇺🇸 西雅图', cap:'68,740', icon:'🏟️', note:'' },
    { name:'阿罗黑德体育场', city:'🇺🇸 堪萨斯城', cap:'76,416', icon:'🏟️', note:'' },
    { name:'阿克伦体育场', city:'🇲🇽 瓜达拉哈拉', cap:'48,071', icon:'🏟️', note:'' },
];

// ====== 焦点球队 ======
const FOCUS_TEAMS = [
    { flag:'🇦🇷',name:'阿根廷',fifa:'FIFA #1',star:true },
    { flag:'🇧🇷',name:'巴西',fifa:'FIFA #2',star:true },
    { flag:'🇫🇷',name:'法国',fifa:'FIFA #3',star:true },
    { flag:'🇪🇸',name:'西班牙',fifa:'FIFA #4',star:true },
    { flag:'🇵🇹',name:'葡萄牙',fifa:'FIFA #5',star:true },
    { flag:'🏴󠁧󠁢󠁥󠁮󠁧󠁿',name:'英格兰',fifa:'FIFA #6',star:true },
    { flag:'🇳🇱',name:'荷兰',fifa:'FIFA #7',star:true },
    { flag:'🇧🇪',name:'比利时',fifa:'FIFA #8',star:true },
    { flag:'🇩🇪',name:'德国',fifa:'FIFA #10',star:true },
    { flag:'🇲🇽',name:'墨西哥',fifa:'东道主',star:false },
    { flag:'🇺🇸',name:'美国',fifa:'东道主',star:false },
    { flag:'🇨🇦',name:'加拿大',fifa:'东道主',star:false },
    { flag:'🇯🇵',name:'日本',fifa:'FIFA #15',star:false },
    { flag:'🇰🇷',name:'韩国',fifa:'FIFA #22',star:false },
    { flag:'🇭🇷',name:'克罗地亚',fifa:'FIFA #16',star:false },
    { flag:'🇺🇾',name:'乌拉圭',fifa:'FIFA #13',star:false },
    { flag:'🇨🇴',name:'哥伦比亚',fifa:'FIFA #11',star:false },
    { flag:'🇲🇦',name:'摩洛哥',fifa:'FIFA #12',star:false },
    { flag:'🇳🇴',name:'挪威',fifa:'哈兰德',star:false },
    { flag:'🇪🇬',name:'埃及',fifa:'萨拉赫',star:false },
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
    const grouped = {};
    MATCHES.forEach(m => {
        if (!grouped[m.dateBJ]) grouped[m.dateBJ] = [];
        grouped[m.dateBJ].push(m);
    });
    let html = '';
    Object.entries(grouped).forEach(([dateBJ, matches]) => {
        html += `<div class="schedule-date-header">📅 ${dateBJ} 北京时间</div>`;
        matches.forEach(m => {
            const sc = m.status==='live'?'live':m.status==='done'?'done':'upcoming';
            const st = m.status==='live'?'🔴 进行中':m.status==='done'?'✓ 已结束':'⏳ 即将开始';
            html += `
                <div class="timeline-item">
                    <div class="timeline-dot ${sc}"></div>
                    <div class="timeline-date">🕐 ${m.timeBJ} 北京时间 · ${m.stage} · ${m.group}</div>
                    <div class="timeline-card" onclick="openMatchDetail(${m.id})">
                        <span class="match-time-badge">${st}</span>
                        <h4>${m.home.flag} ${m.home.name} vs ${m.away.name} ${m.away.flag}</h4>
                        <p>${m.stadium} · ${m.city} · ${m.capacity}人</p>
                        <p style="color:var(--text-muted);font-size:0.7rem;">当地时间: ${m.timeLocal||'—'}</p>
                        ${m.note?`<p style="color:var(--gold);font-size:0.8rem;margin-top:2px;">${m.note}</p>`:''}
                        <div class="card-actions">
                            <span class="click-hint">点击查看详情 ›</span>
                            <a href="${getCCTVUrl(m.id)}" target="_blank" class="cctv5-btn" onclick="event.stopPropagation()">📺 央视直播</a>
                        </div>
                    </div>
                </div>`;
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
                ${s.note?`<div style="color:var(--gold);font-size:0.72rem;margin-top:4px;">⭐ ${s.note}</div>`:''}
            </div>
        </div>
    `).join('');
}

function renderTeams() {
    const grid = document.getElementById('teams-grid');
    grid.innerHTML = FOCUS_TEAMS.map(t => `
        <div class="team-card${t.star?' star':''}">
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
    const sc = match.status==='live'?'live':match.status==='done'?'done':'upcoming';
    const st = match.status==='live'?'🔴 比赛进行中':match.status==='done'?'✓ 比赛已结束':'⏳ 即将开始';
    content.innerHTML = `
        <div class="modal-match-teams">
            <div class="vs-line">
                <div class="modal-team"><span class="modal-flag">${match.home.flag}</span><span class="modal-team-name">${match.home.name}</span></div>
                <div class="modal-vs">VS</div>
                <div class="modal-team"><span class="modal-flag">${match.away.flag}</span><span class="modal-team-name">${match.away.name}</span></div>
            </div>
        </div>
        <div class="modal-match-info">
            <div class="modal-info-item"><div class="info-label">📅 日期 (北京)</div><div class="info-value">${match.dateBJ}</div></div>
            <div class="modal-info-item"><div class="info-label">⏰ 开球 (北京时间)</div><div class="info-value" style="color:var(--gold);font-size:1.2rem;font-weight:800;">${match.timeBJ}</div></div>
            <div class="modal-info-item"><div class="info-label">🏆 阶段</div><div class="info-value">${match.stage}</div></div>
            <div class="modal-info-item"><div class="info-label">📋 组别</div><div class="info-value">${match.group}</div></div>
            <div class="modal-info-item full-width"><div class="info-label">🏟️ 比赛场地</div><div class="info-value">${match.stadium}</div></div>
            <div class="modal-info-item"><div class="info-label">📍 城市</div><div class="info-value">${match.city}</div></div>
            <div class="modal-info-item"><div class="info-label">👥 容量</div><div class="info-value">${match.capacity} 人</div></div>
            ${match.timeLocal?`<div class="modal-info-item full-width"><div class="info-label">🕐 当地时间</div><div class="info-value">${match.timeLocal}</div></div>`:''}
        </div>
        <div class="modal-status ${sc}">${st}</div>
        ${match.note?`<p style="text-align:center;color:var(--gold);margin-top:8px;">${match.note}</p>`:''}
        <a href="${getCCTVUrl(match.id)}" target="_blank" class="modal-cctv5-btn">📺 在央视观看本场比赛 →</a>
    `;
    overlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('show');
    document.body.style.overflow = '';
}

// ==========================================
// 倒计时
// ==========================================
function updateCountdown() {
    const worldCupStart = new Date('2026-06-11T13:00:00-06:00');
    const worldCupEnd = new Date('2026-07-20T03:00:00+08:00');
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
        document.getElementById('countdown').innerHTML = '<p style="color:var(--gold);font-size:1.2rem;">2026世界杯已圆满结束！期待2030！</p>';
        statusEl.textContent = '';
        return;
    }
    const diff = target - now;
    if (diff <= 0) { updateCountdown(); return; }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = String(days).padStart(2,'0');
    document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
    document.getElementById('cd-mins').textContent = String(mins).padStart(2,'0');
    document.getElementById('cd-secs').textContent = String(secs).padStart(2,'0');
}

// ==========================================
// 导航栏交互
// ==========================================
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
        const sections = document.querySelectorAll('section[id]');
        let current = '';
        sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id'); });
        document.querySelectorAll('.nav-links a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href') === '#' + current) a.classList.add('active');
        });
    });
    hamburger.addEventListener('click', () => navLinks.classList.toggle('show'));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('show')));
}

// ==========================================
// 滚动动画
// ==========================================
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)'; }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.group-card, .stadium-card, .team-card, .timeline-item, .hl-card').forEach(el => {
        el.style.opacity = '0'; el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==========================================
// 初始化
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderGroups(); renderSchedule(); renderStadiums(); renderTeams();
    updateCountdown(); setInterval(updateCountdown, 1000);
    setupNavbar(); setupScrollAnimations();
    document.getElementById('modal-close').addEventListener('click', closeModal);
    document.getElementById('modal-overlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
});
