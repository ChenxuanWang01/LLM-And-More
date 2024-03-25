/**
 * @Time: 2023/8/9 18:11
 * @Author: varluffy
 */

package util

var languageMap = map[string]string{
	"ab": "阿布哈兹语",
	"aa": "阿法尔语",
	"af": "南非语",
	"ak": "阿坎语",
	"sq": "阿尔巴尼亚语",
	"am": "阿姆哈拉语",
	"ar": "阿拉伯语",
	"an": "阿拉贡语",
	"hy": "亚美尼亚语",
	"as": "阿萨姆语",
	"av": "阿瓦尔语",
	"ae": "阿维斯陀语",
	"ay": "艾马拉语巴斯克语",
	"az": "阿塞拜疆语",
	"bm": "班巴拉语",
	"ba": "巴什基尔语",
	"eu": "巴斯克语",
	"be": "白俄罗斯语",
	"bn": "孟加拉语",
	"bh": "比哈尔语",
	"bi": "比斯拉马语",
	"bs": "波斯尼亚语",
	"br": "布列塔尼语",
	"bg": "保加利亚语",
	"my": "缅甸语",
	"ca": "加泰罗尼亚语",
	"ch": "查莫罗语",
	"ce": "车臣语",
	"ny": "齐切瓦语",
	"zh": "汉语",
	"cv": "楚瓦什语",
	"kw": "康瓦尔语",
	"co": "科西嘉语",
	"cr": "克里语",
	"hr": "克罗地亚语",
	"cs": "捷克语",
	"da": "丹麦语",
	"dv": "迪维希语",
	"nl": "荷兰语",
	"dz": "宗喀语",
	"en": "英语",
	"eo": "世界语",
	"et": "爱沙尼亚语",
	"ee": "埃维语",
	"fo": "法罗语",
	"fj": "斐济语",
	"fi": "芬兰语",
	"fr": "法语",
	"ff": "富拉语",
	"gl": "加利西亚语",
	"ka": "格鲁吉亚语",
	"de": "德语",
	"el": "希腊语",
	"gn": "瓜拉尼语",
	"gu": "古吉拉特语",
	"ht": "海地克里奥尔语",
	"ha": "豪萨语",
	"he": "希伯来语",
	"hz": "赫雷罗语",
	"hi": "印地语",
	"ho": "希里摩图语",
	"hu": "匈牙利语",
	"ia": "国际语",
	"id": "印度尼西亚语",
	"ie": "西方国际语",
	"ga": "爱尔兰语",
	"ig": "伊博语",
	"ik": "因纽皮雅特语",
	"io": "伊多语",
	"is": "冰岛语",
	"it": "意大利语",
	"iu": "伊努克提图特语",
	"ja": "日语",
	"jv": "爪哇语",
	"kl": "格陵兰语",
	"kn": "卡纳达语",
	"kr": "卡努里语",
	"ks": "克什米尔语",
	"kk": "哈萨克语",
	"km": "高棉语",
	"ki": "基库尤语",
	"rw": "卢干达语",
	"ky": "柯尔克孜语",
	"kv": "科米语",
	"kg": "刚果语",
	"ko": "朝鲜语",
	"ku": "库尔德语",
	"kj": "卢巴语",
	"la": "拉丁语",
	"lb": "卢森堡语",
	"lg": "甘达语",
	"li": "林堡语",
	"ln": "林加拉语",
	"lo": "老挝语",
	"lt": "立陶宛语",
	"lu": "卢巴加丹加语",
	"lv": "拉脱维亚语",
	"gv": "曼岛语",
	"mk": "马其顿语",
	"mg": "马拉加什语",
	"ms": "马来语",
	"ml": "马拉雅拉姆语",
	"mt": "马耳他语",
	"mi": "毛利语",
	"mr": "马拉地语",
	"mh": "马绍尔语",
	"mn": "蒙古语",
	"na": "瑙鲁语",
	"nv": "纳瓦霍语",
	"nd": "北恩德贝勒语",
	"ne": "尼泊尔语",
	"ng": "恩东加语",
	"nb": "挪威博克马尔语",
	"nn": "挪威尼诺斯克语",
	"no": "挪威语",
	"ii": "四川彝语",
	"nr": "南恩德贝勒语",
	"oc": "奥克语",
	"oj": "奥吉布瓦语",
	"cu": "教会斯拉夫语",
	"om": "奥罗莫语",
	"or": "奥里亚语",
	"os": "奥塞梯语",
	"pa": "旁遮普语",
	"pi": "巴利语",
	"fa": "波斯语",
	"pl": "波兰语",
	"ps": "普什图语",
	"pt": "葡萄牙语",
	"qu": "克丘亚语",
	"rm": "罗曼什语",
	"rn": "隆迪语",
	"ro": "罗马尼亚语",
	"ru": "俄语",
	"sa": "梵语",
	"sc": "萨丁尼亚语",
	"sd": "信德语",
	"se": "北萨米语",
	"sm": "萨摩亚语",
	"sg": "桑戈语",
	"sr": "塞尔维亚语",
	"gd": "苏格兰盖尔语",
	"sn": "修纳语",
	"si": "僧伽罗语",
	"sk": "斯洛伐克语",
	"sl": "斯洛文尼亚语",
	"so": "索马里语",
	"st": "南索托语",
	"es": "西班牙语",
	"su": "巽他语",
	"sw": "斯瓦希里语",
	"ss": "斯瓦特语",
	"sv": "瑞典语",
	"ta": "泰米尔语",
	"te": "泰卢固语",
	"tg": "塔吉克语",
	"th": "泰语",
	"ti": "提格利尼亚语",
	"bo": "藏语",
	"tk": "土库曼语",
	"tl": "塔加洛语",
	"tn": "茨瓦纳语",
	"to": "汤加语",
	"tr": "土耳其语",
	"ts": "宗加语",
	"tt": "鞑靼语",
	"tw": "特威语",
	"ty": "大溪地语",
	"ug": "维吾尔语",
	"uk": "乌克兰语",
	"ur": "乌尔都语",
	"uz": "乌兹别克语",
	"ve": "文达语",
	"vi": "越南语",
	"vo": "沃拉普克语",
	"wa": "瓦隆语",
	"cy": "威尔士语",
	"wo": "沃洛夫语",
	"fy": "西弗里斯语",
	"xh": "科萨语",
	"yi": "意第绪语",
	"yo": "约鲁巴语",
	"za": "壮语",
	"zu": "祖鲁语",
}

// GetLanguageByCode 根据编码返回语言名称的函数 如果不存在默认返回汉语
func GetLanguageByCode(code string) string {
	language, exists := languageMap[code]
	if exists {
		return language
	} else {
		return "汉语"
	}
}
