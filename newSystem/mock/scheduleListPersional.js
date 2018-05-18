const data = {
    "userInfo": { // 用户信息
        "basicInfo": { // 基础信息
            "sex": "女",
            "age": "18",
            "level": "金牌",
            "familyProperty": "单身",
            "province": "广东省",
            "group": "90后丽人"
        },
        "brandAndClassPreference": ["NIKE", "Adidas"], // 品牌&品类偏好
        "goodsPreference": ["欧时力印花连衣裙", "Belle牛津鞋"] // 商品偏好
    },
    "flowInfo": { // 分流信息
        "pageId": "19900000",
        "page": "19900010",
        "configParams": [{
            "name": "L1A",
            "value": {
                "scoring": "11",
                "demote": "1000",
                "filter": "11"
            }

        }, {
            "name": "L2A",
            "value": {
                "scoring": "22",
                "demote": "2000",
                "filter": "22"
            }

        }, ]
    },
    "defaultSort": [ // 个性化排序
        {
            "brandId": 1232,
            "brandName": "brandName",
            "location": "location",
            "picUrl": "https://c.vpimg1.com/upcb/2017/12/15/105/PC_wstl.jpg",
            "recommendedReason": "推荐理由", // 推荐理由
        }, {
            "brandId": 1232,
            "brandName": "brandName",
            "location": "location",
            "picUrl": "https://c.vpimg1.com/upcb/2017/12/15/105/PC_wstl.jpg",
            "recommendedReason": "推荐理由", // 推荐理由
        }
    ],
    "personalSort": [ // 个性化排序
        {
            "brandId": 1232,
            "brandName": "brandName",
            "location": "location",
            "picUrl": "https://c.vpimg1.com/upcb/2017/12/15/105/PC_wstl.jpg",
            "recommendedReason": "推荐理由", // 推荐理由
            "wholeData": { // 全局数据
                "wholeAveRank": "2000", //全局平均排名
                "exposureUV": "", // 曝光UV
                "clickUV": "", // 点击UV
                "clickUserNum": "", // 点击用户数
                "purchaseUserNum": "", // 购买用户数
                "salesAmount": "", // 销售金额
                "conversionPer": "", // 转化率
                "perCustomerTran": "", // 客单价
                "UVExposureValue": "", // UV曝光价值
                "VPM": ""
            },
            "rules": [{
                "ruleName": "固定规则（优先级）",
                "ruleInfo": [{
                    "name": "商务扶持",
                    "value": "2个",
                }, {
                    "name": "直发扶持",
                    "value": "2个",
                }]
            }]
        }, {
            "brandId": 1232,
            "brandName": "brandName",
            "location": "location",
            "picUrl": "https://c.vpimg1.com/upcb/2017/12/15/105/PC_wstl.jpg",
            "recommendedReason": "推荐理由", // 推荐理由
            "wholeData": { // 全局数据
                "wholeAveRank": "2000", //全局平均排名
                "exposureUV": "", // 曝光UV
                "clickUV": "", // 点击UV
                "clickUserNum": "", // 点击用户数
                "purchaseUserNum": "", // 购买用户数
                "salesAmount": "", // 销售金额
                "conversionPer": "", // 转化率
                "perCustomerTran": "", // 客单价
                "UVExposureValue": "", // UV曝光价值
                "VPM": ""
            },
            "rules": [{
                "ruleName": "固定规则（优先级）",
                "ruleInfo": [{
                    "name": "商务扶持",
                    "value": "2个",
                }, {
                    "name": "直发扶持",
                    "value": "2个",
                }]
            }]
        }
    ]

}
export default data