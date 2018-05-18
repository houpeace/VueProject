
const CONSTANT = {
	wikiLink:{
		personal:'',
	},
	config:{
		groupTypeList:[
			{name:'新客',id:0},
			{name:'老客',id:1},
		],
		actionList:[
			{name:'打开链接',id:0},
			{name:'下载应用',id:1},
			{name:'打开文本',id:2},
		],
		groupList:[
			{name:'标签用户',id:1},
			{name:'特定用户',id:2},
			{name:'用户分组',id:3},
		],
		recommendList:[
			{name:'即时',id:1},
			{name:'定时',id:2},
		],
		isLongtermList:[
			{name:'是',id:1},
			{name:'否',id:2},
		],
	}
}
if (window && !window.CONSTANT) {
    window.CONSTANT = CONSTANT;
}

export default CONSTANT