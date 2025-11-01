// OpenMOSS Lab 校友数据
// 所有校友信息集中管理，方便维护和更新

const alumniData = {
    // 博士后校友
    postdocs: [
        // 暂无数据
    ],

    // 博士生校友
    phd: [
        { name: { zh: '陈新驰', en: 'Xinchi Chen' }, destination: { zh: '爱丁堡大学博后', en: 'Postdoc, University of Edinburgh' } },
        { name: { zh: '龚经经', en: 'Jingjing Gong' }, destination: { zh: '腾讯', en: 'Tencent' } },
        { name: { zh: '郭琦鹏', en: 'Qipeng Guo' }, destination: { zh: 'AWS', en: 'AWS' } },
        { name: { zh: '李林阳', en: 'Linyang Li' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' } },
        { name: { zh: '李孝男', en: 'Xiaonan Li' }, destination: { zh: 'USA Startup', en: 'USA Startup' } },
        { name: { zh: '李世民', en: 'Shimin Li' }, destination: { zh: '模思', en: 'OpenMOSS' } },
        { name: { zh: '刘鹏飞', en: 'Pengfei Liu' }, destination: { zh: 'CMU博后', en: 'Postdoc, CMU' } },
        { name: { zh: '刘向阳', en: 'Xiangyang Liu' }, destination: { zh: '创业', en: 'Startup' } },
        { name: { zh: '孙天祥', en: 'Tianxiang Sun' }, destination: { zh: '创业', en: 'Startup' } },
        { name: { zh: '颜航', en: 'Hang Yan' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' } },
        { name: { zh: '郑逸宁', en: 'Yining Zheng' }, destination: { zh: '', en: '' } },
        { name: { zh: '周云华', en: 'Yunhua Zhou' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' } }
    ],

    // 硕士生校友
    masters: [
        { name: { zh: '安晨鑫', en: 'Chenxin An' }, destination: { zh: '香港大学，PHD', en: 'PhD, The University of Hong Kong' } },
        { name: { zh: '曹零', en: 'Ling Cao' }, destination: { zh: '阿里', en: 'Alibaba' } },
        { name: { zh: '常成', en: 'Cheng Chang' }, destination: { zh: '模思', en: 'OpenMOSS' } },
        { name: { zh: '陈科宇', en: 'Keyu Chen' }, destination: { zh: '', en: '' } },
        { name: { zh: '陈俊坤', en: 'Junkun Chen' }, destination: { zh: 'Oregon State University, PHD', en: 'PhD, Oregon State University' } },
        { name: { zh: '陈怡然', en: 'Yiran Chen' }, destination: { zh: '字节', en: 'ByteDance' } },
        { name: { zh: '陈云涛', en: 'Yuntao Chen' }, destination: { zh: '上海电网', en: 'Shanghai Electric Grid' } },
        { name: { zh: '陈丹露', en: 'Danlu Chen' }, destination: { zh: 'UCSD, PHD', en: 'PhD, UCSD' } },
        { name: { zh: '陈楷予', en: 'Kaiyu Chen' }, destination: { zh: 'UC Berkeley, MS', en: 'MS, UC Berkeley' } },
        { name: { zh: '戴宁', en: 'Ning Dai' }, destination: { zh: 'OSU, PHD', en: 'PhD, OSU' } },
        { name: { zh: '范子越', en: 'Ziyue Fan' }, destination: { zh: '字节', en: 'ByteDance' } },
        { name: { zh: '傅健', en: 'Jian Fu' }, destination: { zh: '', en: '' } },
        { name: { zh: '耿志超', en: 'Zhichao Geng' }, destination: { zh: 'AWS', en: 'AWS' } },
        { name: { zh: '何俊亮', en: 'Junliang He' }, destination: { zh: '字节', en: 'ByteDance' } },
        { name: { zh: '洪嘉伟', en: 'Jiawei Hong' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' } },
        { name: { zh: '胡先念', en: 'Xiannian Hu' }, destination: { zh: '阿里', en: 'Alibaba' } },
        { name: { zh: '胡志峰', en: 'Zhifeng Hu' }, destination: { zh: '', en: '' } },
        { name: { zh: '黄超超', en: 'Chaochao Huang' }, destination: { zh: '上汽', en: 'SAIC Motor' } },
        { name: { zh: '黄璐瑶', en: 'Luyao Huang' }, destination: { zh: '拼多多', en: 'Pinduoduo' } },
        { name: { zh: '籍佗', en: 'Tuo Ji' }, destination: { zh: '', en: '' } },
        { name: { zh: '姜经翔', en: 'Jingxiang Jiang' }, destination: { zh: '华为', en: 'Huawei' } },
        { name: { zh: '蒋昊', en: 'Hao Jiang' }, destination: { zh: '', en: '' } },
        { name: { zh: '蒋子恒', en: 'Ziheng Jiang' }, destination: { zh: 'University of Washington, PHD', en: 'PhD, University of Washington' } },
        { name: { zh: '柯震', en: 'Zhen Ke' }, destination: { zh: '小米', en: 'Xiaomi' } },
        { name: { zh: '李鹏', en: 'Peng Li' }, destination: { zh: '', en: '' } },
        { name: { zh: '梁建泽', en: 'Jianze Liang' }, destination: { zh: '微软', en: 'Microsoft' } },
        { name: { zh: '林泽辉', en: 'Zehui Lin' }, destination: { zh: '字节', en: 'ByteDance' } },
        { name: { zh: '林天扬', en: 'Tianyang Lin' }, destination: { zh: '阿里', en: 'Alibaba' } },
        { name: { zh: '刘腾霄', en: 'Tengxiao Liu' }, destination: { zh: 'UCSB，PHD', en: 'PhD, UCSB' } },
        { name: { zh: '刘毅韬', en: 'Yitao Liu' }, destination: { zh: 'Optiver', en: 'Optiver' } },
        { name: { zh: '刘枭雄', en: 'Xiaoxiong Liu' }, destination: { zh: '京东', en: 'JD.com' } },
        { name: { zh: '钱鹏', en: 'Peng Qian' }, destination: { zh: 'MIT, PHD', en: 'PhD, MIT' } },
        { name: { zh: '权国风', en: 'Guofeng Quan' }, destination: { zh: '阿里', en: 'Alibaba' } },
        { name: { zh: '任可', en: 'Ke Ren' }, destination: { zh: '字节', en: 'ByteDance' } },
        { name: { zh: '施展', en: 'Zhan Shi' }, destination: { zh: 'Queen University, PHD', en: 'PhD, Queen University' } },
        { name: { zh: '宋德敏', en: 'Demin Song' }, destination: { zh: '字节', en: 'ByteDance' } },
        { name: { zh: '苏津岳', en: 'Jinyue Su' }, destination: { zh: '', en: '' } },
        { name: { zh: '孙付', en: 'Fu Sun' }, destination: { zh: '阿里', en: 'Alibaba' } },
        { name: { zh: '孙驰', en: 'Chi Sun' }, destination: { zh: '腾讯', en: 'Tencent' } },
        { name: { zh: '孙瑜', en: 'Yu Sun' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' } },
        { name: { zh: '汤琼', en: 'Qiong Tang' }, destination: { zh: '日行迹', en: 'Riji' } },
        { name: { zh: '田乐', en: 'Le Tian' }, destination: { zh: '微软', en: 'Microsoft' } },
        { name: { zh: '王丹青', en: 'Danqing Wang' }, destination: { zh: '字节', en: 'ByteDance' } },
        { name: { zh: '王少敬', en: 'Shaojing Wang' }, destination: { zh: '拼多多', en: 'Pinduoduo' } },
        { name: { zh: '王阳刚', en: 'Yanggang Wang' }, destination: { zh: '循环智能', en: 'Recurrent AI' } },
        { name: { zh: '吴嘉文', en: 'Jiawen Wu' }, destination: { zh: '世纪前沿资产', en: 'Century Capital' } },
        { name: { zh: '吴玲玲', en: 'Lingling Wu' }, destination: { zh: 'Optiver', en: 'Optiver' } },
        { name: { zh: '吴世宇', en: 'Shiyu Wu' }, destination: { zh: '百度', en: 'Baidu' } },
        { name: { zh: '徐嘉诚', en: 'Jiacheng Xu' }, destination: { zh: 'UT Austin, PHD', en: 'PhD, UT Austin' } },
        { name: { zh: '许一格', en: 'Yige Xu' }, destination: { zh: 'NTU Singapore, PHD', en: 'PhD, NTU Singapore' } },
        { name: { zh: '杨建强', en: 'Jianqiang Yang' }, destination: { zh: '阿里', en: 'Alibaba' } },
        { name: { zh: '杨小珪', en: 'Xiaogui Yang' }, destination: { zh: '上海人工智能实验室', en: 'Shanghai AI Laboratory' } },
        { name: { zh: '杨永祎', en: 'Yongyi Yang' }, destination: { zh: 'University of Michigan, PHD', en: 'PhD, University of Michigan' } },
        { name: { zh: '杨雨晴', en: 'Yuqing Yang' }, destination: { zh: 'USC，PHD', en: 'PhD, USC' } },
        { name: { zh: '尹留松', en: 'Liusong Yin' }, destination: { zh: '华为', en: 'Huawei' } },
        { name: { zh: '张栋', en: 'Dong Zhang' }, destination: { zh: '小米', en: 'Xiaomi' } },
        { name: { zh: '张墨执', en: 'Mozhi Zhang' }, destination: { zh: '字节', en: 'ByteDance' } },
        { name: { zh: '张硕', en: 'Shuo Zhang' }, destination: { zh: '创业', en: 'Startup' } },
        { name: { zh: '张硕闻', en: 'Shuowen Zhang' }, destination: { zh: '蚂蚁', en: 'Ant Group' } },
        { name: { zh: '张啸天', en: 'Xiaotian Zhang' }, destination: { zh: '创业', en: 'Startup' } },
        { name: { zh: '张鑫', en: 'Xin Zhang' }, destination: { zh: '小米', en: 'Xiaomi' } },
        { name: { zh: '赵嘉亿', en: 'Jiayi Zhao' }, destination: { zh: 'Google', en: 'Google' } },
        { name: { zh: '郑彦俊', en: 'Yanjun Zheng' }, destination: { zh: '蚂蚁', en: 'Ant Group' } },
        { name: { zh: '钟鸣', en: 'Ming Zhong' }, destination: { zh: 'UIUC，PHD', en: 'PhD, UIUC' } },
        { name: { zh: '朱秦', en: 'Qin Zhu' }, destination: { zh: '阿里', en: 'Alibaba' } },
        { name: { zh: '竺晨曦', en: 'Chenxi Zhu' }, destination: { zh: '百度', en: 'Baidu' } },
        { name: { zh: '宗一', en: 'Yi Zong' }, destination: { zh: '蚂蚁', en: 'Ant Group' } }
    ],

    // 本科生校友
    undergrad: [
        { name: { zh: '曹澍扬', en: 'Shuyang Cao' }, destination: { zh: 'Northeastern University, PHD', en: 'PhD, Northeastern University' } },
        { name: { zh: '常帅晨', en: 'Shuaichen Chang' }, destination: { zh: 'Ohio State University, PHD', en: 'PhD, Ohio State University' } },
        { name: { zh: '陈丹露', en: 'Danlu Chen' }, destination: { zh: 'UCSD, PHD', en: 'PhD, UCSD' } },
        { name: { zh: '陈楷予', en: 'Kaiyu Chen' }, destination: { zh: 'UC Berkeley, MS', en: 'MS, UC Berkeley' } },
        { name: { zh: '戴宁', en: 'Ning Dai' }, destination: { zh: 'OSU, PHD', en: 'PhD, OSU' } },
        { name: { zh: '胡志峰', en: 'Zhifeng Hu' }, destination: { zh: '', en: '' } },
        { name: { zh: '蒋子恒', en: 'Ziheng Jiang' }, destination: { zh: 'University of Washington, PHD', en: 'PhD, University of Washington' } },
        { name: { zh: '裴恒志', en: 'Hengzhi Pei' }, destination: { zh: '', en: '' } },
        { name: { zh: '苏津岳', en: 'Jinyue Su' }, destination: { zh: '', en: '' } },
        { name: { zh: '徐嘉诚', en: 'Jiacheng Xu' }, destination: { zh: 'UT Austin, PHD', en: 'PhD, UT Austin' } },
        { name: { zh: '杨永祎', en: 'Yongyi Yang' }, destination: { zh: 'University of Michigan, PHD', en: 'PhD, University of Michigan' } }
    ],

    // 访问学生校友
    visiting: [
        { name: { zh: '胡明昊', en: 'Minghao Hu' }, destination: { zh: '国防科技大学', en: 'National University of Defense Technology' } },
        { name: { zh: '阚志刚', en: 'Zhigang Kan' }, destination: { zh: '国防科技大学', en: 'National University of Defense Technology' } },
        { name: { zh: '王永', en: 'Yong Wang' }, destination: { zh: '香港大学', en: 'The University of Hong Kong' } },
        { name: { zh: '郑人杰', en: 'Renjie Zheng' }, destination: { zh: '同济大学', en: 'Tongji University' } }
    ]
};

// 导出数据（用于其他JS文件访问）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { alumniData };
}

