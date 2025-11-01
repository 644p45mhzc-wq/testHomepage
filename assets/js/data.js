// OpenMOSS Lab 团队成员数据
// 所有成员信息集中管理，方便维护和更新


const teamData = {
    // 核心成员（教师）
    coreMembers: [
        {
            id: 'xipeng-qiu',
            name: {
                zh: '邱锡鹏',
                en: 'Xipeng Qiu'
            },
            title: {
                zh: '教授，实验室主任',
                en: 'Professor, Lab Director'
            },
            photo: 'assets/img/Xipeng Qiu.jpg',
            email: 'xpqiu@fudan.edu.cn',
            homepage: 'https://xpqiu.github.io/',
            scholar: 'https://scholar.google.com/citations?user=Pq4Yp_kAAAAJ'
        },
        {
            id: 'xinchi-chen',
            name: {
                zh: '陈新驰',
                en: 'Xinchi Chen'
            },
            title: {
                zh: '青年研究员',
                en: 'Young Researcher'
            },
            photo: 'assets/img/Xinchi Chen.jpg',
            email: 'chenxinchi@fudan.edu.cn',
            homepage: 'https://dalstonchen.github.io/'
        },
        {
            id: 'jinlan-fu',
            name: {
                zh: '傅金兰',
                en: 'Jinlan Fu'
            },
            title: {
                zh: '助理教授',
                en: 'Assistant Professor'
            },
            photo: 'assets/img/Jinlan Fu.jpg'
        },
        {
            id: 'tao-ji',
            name: {
                zh: '纪焘',
                en: 'Tao Ji'
            },
            title: {
                zh: '助理教授',
                en: 'Assistant Professor'
            },
            photo: 'assets/img/Tao Ji.jpeg',
            homepage: 'https://taoji.eth.link/'
        },
        {
            id: 'jingjing-gong',
            name: {
                zh: '龚经经',
                en: 'Jingjing Gong'
            },
            title: {
                zh: '研究助理教授',
                en: 'Research Assistant Professor'
            },
            photo: 'assets/img/Jingjing Gong.jpg'
        },
        {
            id: 'ziwei-he',
            name: {
                zh: '何子薇',
                en: 'Ziwei He'
            },
            title: {
                zh: '研究助理教授',
                en: 'Research Assistant Professor'
            },
            photo: 'assets/img/Ziwei He.jpg'
        },
        {
            id: 'shuang-chen',
            name: {
                zh: '陈爽',
                en: 'Shuang Chen'
            },
            title: {
                zh: '专任副研究员',
                en: 'Associate Research Fellow'
            },
            photo: 'assets/img/Shuang Chen.jpg'
        },
        {
            id: 'yining-zheng',
            name: {
                zh: '郑逸宁',
                en: 'Yining Zheng'
            },
            title: {
                zh: '专任副研究员',
                en: 'Associate Research Fellow'
            },
            photo: 'assets/img/Yining Zheng.jpeg',
            homepage: 'https://github.com/WillQvQ'
        }
    ],

    // 团队成员（工程师和科研助理）
    teamMembers: [
        // 暂无数据
    ],

    // 博士后
    postdocs: [
        // 暂无数据
    ],

    // 博士研究生
    phdStudents: [
        { id: 'chen-jia', name: { zh: '陈嘉', en: 'Chen Jia' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'ke-chen', name: { zh: '陈可', en: 'Ke Chen' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/jingyijun' },
        { id: 'qian-chen', name: { zh: '陈千', en: 'Qian Chen' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://qq31415926.github.io/cq.github.io/' },
        { id: 'jijun-cheng', name: { zh: '程纪钧', en: 'Jijun Cheng' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'qinyuan-cheng', name: { zh: '程沁源', en: 'Qinyuan Cheng' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://xiami2019.github.io/' },
        { id: 'shicheng-fang', name: { zh: '方世成', en: 'Shicheng Fang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'senyu-fei', name: { zh: '费森俞', en: 'Senyu Fei' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'zhaoye-fei', name: { zh: '费朝烨', en: 'Zhaoye Fei' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://ngc7292.github.io/' },
        { id: 'zhaoyang-fu', name: { zh: '付兆洋', en: 'Zhaoyang Fu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'siyang-he', name: { zh: '何思洋', en: 'Siyang He' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'xingyang-he', name: { zh: '何星阳', en: 'Xingyang He' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'tianyu-huai', name: { zh: '怀天宇', en: 'Tianyu Huai' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://yutinh.github.io/' },
        { id: 'zezheng-huai', name: { zh: '淮泽正', en: 'Zezheng Huai' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/Huaizz-shawen' },
        { id: 'botian-jiang', name: { zh: '姜博天', en: 'Botian Jiang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'ruixiao-li', name: { zh: '李睿潇', en: 'Ruixiao Li' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/Li-dongyang' },
        { id: 'yukang-lin', name: { zh: '林煜康', en: 'Yukang Lin' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yang-liu', name: { zh: '刘玚', en: 'Yang Liu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'fan-liu', name: { zh: '刘帆', en: 'Fan Liu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'zhigeng-liu', name: { zh: '刘智耿', en: 'Zhigeng Liu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'xiaoran-liu', name: { zh: '柳潇然', en: 'Xiaoran Liu' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/lxr-tech' },
        { id: 'jiahao-lu', name: { zh: '陆嘉昊', en: 'Lu Jiahao' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'luo-qi', name: { zh: '罗琪', en: 'Luo Qi' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'kai-lv', name: { zh: '吕凯', en: 'Kai Lv' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://kailv69.github.io/' },
        { id: 'pengfang-qian', name: { zh: '钱鹏方', en: 'Pengfang Qian' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/oowsxq' },
        { id: 'yuerong-song', name: { zh: '宋悦荣', en: 'Yuerong Song' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'jingqi-tong', name: { zh: '仝竞奇', en: 'Jingqi Tong' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/tongjingqi' },
        { id: 'junxuan-wang', name: { zh: '汪俊轩', en: 'Junxuan Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'pengyu-wang', name: { zh: '王鹏宇', en: 'Pengyu Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'siyin-wang', name: { zh: '王思尹', en: 'Siyin Wang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://sinwang20.github.io/' },
        { id: 'xinyuan-wang', name: { zh: '王新元', en: 'Xinyuan Wang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://dirtycomputer.github.io/' },
        { id: 'jinhao-wu', name: { zh: '吴锦皓', en: 'Wu Jinhao' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'guangjun-xu', name: { zh: '徐光君', en: 'Guangjun Xu' }, photo: 'assets/img/default-avatar.svg', homepage: 'http://www.linkedin.com/in/guangjun327' },
        { id: 'ningyu-xu', name: { zh: '徐凝雨', en: 'Ningyu Xu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'chenchen-yang', name: { zh: '杨晨晨', en: 'Chenchen Yang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://cr-fish.github.io/' },
        { id: 'linqi-yin', name: { zh: '殷林琪', en: 'Linqi Yin' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'zhangyue-yin', name: { zh: '印张悦', en: 'Zhangyue Yin' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'jun-zhan', name: { zh: '詹俊', en: 'Jun Zhan' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://junzhan2000.github.io' },
        { id: 'haowei-zhang', name: { zh: '张浩威', en: 'Haowei Zhang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://haowei-freesky.github.io/' },
        { id: 'haozhe-zhang', name: { zh: '张浩哲', en: 'Haozhe Zhang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'wenbo-zhang', name: { zh: '张文擘', en: 'Wenbo Zhang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/ppolariss' },
        { id: 'yiyang-zhang', name: { zh: '张奕洋', en: 'Zhang Yiyang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/CloudRipple' }
    ],

    // 硕士研究生
    masterStudents: [
        { id: 'hanfu-chen', name: { zh: '陈汉夫', en: 'Hanfu Chen' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'jingqi-chen', name: { zh: '陈敬麒', en: 'Jingqi Chen' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'liwei-fan', name: { zh: '范力玮', en: 'Liwei Fan' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yufei-gao', name: { zh: '高宇菲', en: 'Yufei Gao' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'xuyang-ge', name: { zh: '葛煦旸', en: 'Xuyang Ge' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yitian-gong', name: { zh: '龚奕天', en: 'Yitian Gong' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/gyt1145028706' },
        { id: 'kexin-huang', name: { zh: '黄可欣', en: 'Kexin Huang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://kexinhuang19.github.io/' },
        { id: 'ji-li', name: { zh: '纪力', en: 'Jili' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yaozhou-jiang', name: { zh: '蒋燿州', en: 'Yaozhou Jiang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'bowen-li', name: { zh: '李博文', en: 'Bowen Li' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'bufan-li', name: { zh: '李不凡', en: 'Li Bufan' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yuan-li', name: { zh: '李源', en: 'Li Yuan' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'zhiyuan-li', name: { zh: '厉致远', en: 'Zhiyuan Li' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'feihong-liu', name: { zh: '刘飞鸿', en: 'Feihong Liu' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://openreview.net/profile?id=%7EFeihong_Liu4' },
        { id: 'xingyu-lu', name: { zh: '陆星宇', en: 'Lu Xingyu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'wentao-shu', name: { zh: '舒文韬', en: 'Wentao Shu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'enxi-wang', name: { zh: '王恩曦', en: 'Enxi Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'jin-wang', name: { zh: '王瑾', en: 'Jin Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'qifeng-wu', name: { zh: '吴奇峰', en: 'Wu Qifeng' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'zhe-xu', name: { zh: '徐哲', en: 'Zhe Xu' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://phospheneser.github.io/' },
        { id: 'xiaopeng-yu', name: { zh: '余晓鹏', en: 'Xiaopeng Yu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'zhen-yu', name: { zh: '余镇', en: 'Zhen Yu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'fengye-yuan', name: { zh: '袁枫烨', en: 'Yuan Fengye' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yuqian-zhang', name: { zh: '张羽乾', en: 'Yuqian Zhang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'xingjian-zhao', name: { zh: '赵行健', en: 'Xingjian Zhao' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/singularity-s0' },
        { id: 'yiwei-zhao', name: { zh: '赵奕伟', en: 'Yiwei Zhao' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'jiazheng-zhou', name: { zh: '周家正', en: 'Jiazheng Zhou' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'maosen-zhou', name: { zh: '周卯森', en: 'Maosen Zhou' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'jie-zhu', name: { zh: '祝杰', en: 'Jie Zhu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'huaxiang-zhuang', name: { zh: '庄华翔', en: 'Huaxiang Zhuang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://brekoji.github.io/' }
    ],

    // 本科生
    undergraduates: [
        { id: 'jikun-cai', name: { zh: '蔡纪坤', en: 'Jikun Cai' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'kuangwei-chen', name: { zh: '陈匡巍', en: 'Chen Kuangwei' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'zihao-dai', name: { zh: '戴子皓', en: 'Zihao Dai' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'tingshuo-fan', name: { zh: '范庭朔', en: 'Tingshuo Fan' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://survivor613.github.io/' },
        { id: 'ching-wing-kwok', name: { zh: '郭政颍', en: 'Ching Wing Kwok' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://academic.seleixi.site/' },
        { id: 'chen-hu', name: { zh: '胡宸', en: 'Chen Hu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'luozhijie-jin', name: { zh: '金罗智杰', en: 'Jin Luozhijie' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'changsong-li', name: { zh: '李畅松', en: 'Changsong Li' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'hangcheng-li', name: { zh: '李航成', en: 'Hangcheng Li' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/lkdhy' },
        { id: 'jiaxi-li', name: { zh: '李佳羲', en: 'Li Jiaxi' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://jecci-cmd.github.io/' },
        { id: 'mingzhe-li', name: { zh: '李明哲', en: 'Mingzhe Li' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://www.mubuky.com/' },
        { id: 'yinze-luo', name: { zh: '罗尹泽', en: 'Yinze Luo' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://fudan-nlp.feishu.cn/wiki/H1GMwJjiuiN5j6kMXAGcRo13nxc?from=from_copylink' },
        { id: 'haochen-ma', name: { zh: '马颢宸', en: 'Haochen Ma' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'xiaomeng-qian', name: { zh: '钱晓萌', en: 'Xiaomeng Qian' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://xmqian03.github.io' },
        { id: 'shenling-qiu', name: { zh: '邱深凌', en: 'Shenling Qiu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'hengmian-shi', name: { zh: '史恒勉', en: 'Hengmian Shi' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'jinyu-tian', name: { zh: '田晋宇', en: 'Jinyu Tian' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yihai-tian', name: { zh: '田亦海', en: 'Yihai Tian' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'hongkai-wang', name: { zh: '王鸿凯', en: 'Hongkai Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'qiqi-wang', name: { zh: '王琪琦', en: 'Wang Qiqi' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'ruiming-wang', name: { zh: '王瑞明', en: 'Ruiming Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'wenxuan-wang', name: { zh: '王文煊', en: 'Wenxuan Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yang-wang-1', name: { zh: '王扬', en: 'Yang Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yang-wang-2', name: { zh: '王洋', en: 'Yang Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yubang-wang', name: { zh: '王昱邦', en: 'Yubang Wang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'huangxuan-wu', name: { zh: '吴黄璇', en: 'Wu Huangxuan' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/OddFunction0205' },
        { id: 'jiaxing-wu', name: { zh: '吴家兴', en: 'Jiaxing Wu' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'ruixi-wu', name: { zh: '吴睿曦', en: 'Wu Ruixi' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'chen-yang', name: { zh: '杨晨', en: 'Chen Yang' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'shudong-yang', name: { zh: '杨枢栋', en: 'Shudong Yang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/luppppy' },
        { id: 'huazheng-zeng', name: { zh: '曾华正', en: 'Huazheng Zeng' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://huazzeng.github.io/' },
        { id: 'junpeng-zhang', name: { zh: '张俊鹏', en: 'Junpeng Zhang' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/JunpengZZhang' },
        { id: 'chengyang-zhu', name: { zh: '朱程炀', en: 'Chengyang Zhu' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://github.com/Zecyel' }
    ],

    // 访问学生
    visitingStudents: [
        { id: 'hongnan-ma', name: { zh: '马红楠', en: 'Hongnan Ma' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'jiaxing-miao', name: { zh: '苗嘉兴', en: 'Jiaxing Miao' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://scholar.google.com/citations?user=LU4PAJUAAAAJ&hl=en' },
        { id: 'yiwei-shi', name: { zh: '史一苇', en: 'Yiwei Shi' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'yiran-suo', name: { zh: '锁祎然', en: 'Yiran Suo' }, photo: 'assets/img/default-avatar.svg' },
        { id: 'kang-yu', name: { zh: '于康', en: 'Kang Yu' }, photo: 'assets/img/default-avatar.svg', homepage: 'https://kaysonyu.github.io' }
    ],

    // 校友（已毕业）
    alumni: [
        {
            id: 'alumni-001',
            name: {
                zh: '周八',
                en: 'Ba Zhou'
            },
            degree: {
                zh: '博士',
                en: 'PhD'
            },
            year: 2020, // 毕业年份
            current: {
                zh: 'MIT 助理教授',
                en: 'Assistant Professor, MIT'
            },
            photo: 'assets/img/default-avatar.svg'
        }
        // ... 添加更多校友
    ]
};

// 工具函数：根据当前语言获取成员信息
function getMemberInfo(member, lang = 'zh') {
    const langKey = lang === 'zh-CN' ? 'zh' : 'en';
    return {
        id: member.id,
        name: member.name[langKey] || member.name.zh,
        title: member.title ? (member.title[langKey] || member.title.zh) : null,
        photo: member.photo || 'assets/img/default-avatar.svg',
        email: member.email,
        homepage: member.homepage,
        scholar: member.scholar,
        research: member.research ? (member.research[langKey] || member.research.zh) : null,
        affiliation: member.affiliation ? (member.affiliation[langKey] || member.affiliation.zh) : null,
        school: member.school ? (member.school[langKey] || member.school.zh) : null,
        degree: member.degree ? (member.degree[langKey] || member.degree.zh) : null,
        current: member.current ? (member.current[langKey] || member.current.zh) : null,
        year: member.year
    };
}

// 导出数据（用于其他JS文件访问）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { teamData, getMemberInfo };
}
