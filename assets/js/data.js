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
            email: 'chenxinchi@fudan.edu.cn'
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
            photo: 'assets/img/Tao Ji.jpeg'
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
            photo: 'assets/img/Yining Zheng.jpeg'
        }
    ],

    // 团队成员（工程师和科研助理）
    teamMembers: [
        // 示例数据
        {
            id: 'engineer-001',
            name: {
                zh: '张工',
                en: 'Engineer Zhang'
            },
            title: {
                zh: '具身工程师',
                en: 'Embodied Engineer'
            },
            photo: 'assets/img/default-avatar.svg',
            homepage: 'https://example.com'
        }
        // ... 添加更多工程师和科研助理
    ],

    // 博士后
    postdocs: [
        {
            id: 'postdoc-001',
            name: {
                zh: '李博士',
                en: 'Dr. Li'
            },
            title: {
                zh: '博士后研究员',
                en: 'Postdoctoral Researcher'
            },
            photo: 'assets/img/default-avatar.svg'
        }
        // ... 添加更多博士后
    ],

    // 博士研究生
    phdStudents: [
        // 示例数据，请根据实际情况填充
        {
            id: 'student-phd-001',
            name: {
                zh: '张三',
                en: 'San Zhang'
            },
            title: {
                zh: '博士研究生',
                en: 'PhD Student'
            },
            year: 2021, // 入学年份
            research: {
                zh: '大语言模型、多模态学习',
                en: 'Large Language Models, Multimodal Learning'
            },
            photo: 'assets/img/default-avatar.svg', // 如果没有照片使用默认头像
            email: 'zhangsan@example.com',
            homepage: 'https://example.com'
        },
        {
            id: 'student-phd-002',
            name: {
                zh: '李四',
                en: 'Si Li'
            },
            title: {
                zh: '博士研究生',
                en: 'PhD Student'
            },
            year: 2022,
            research: {
                zh: '具身智能、强化学习',
                en: 'Embodied AI, Reinforcement Learning'
            },
            photo: 'assets/img/default-avatar.svg'
        }
        // ... 添加更多博士生
    ],

    // 硕士研究生
    masterStudents: [
        {
            id: 'student-master-001',
            name: {
                zh: '王五',
                en: 'Wu Wang'
            },
            photo: 'assets/img/default-avatar.svg'
        }
        // ... 添加更多硕士生
    ],

    // 本科生
    undergraduates: [
        {
            id: 'student-undergrad-001',
            name: {
                zh: '赵六',
                en: 'Liu Zhao'
            },
            photo: 'assets/img/default-avatar.svg'
        }
        // ... 添加更多本科生
    ],

    // 访问学生
    visitingStudents: [
        {
            id: 'visiting-student-001',
            name: {
                zh: '孙七',
                en: 'Qi Sun'
            },
            photo: 'assets/img/default-avatar.svg'
        }
        // ... 添加更多访问学生
    ],

    // 校友（已毕业）- 按类别分类
    // 博士后校友
    alumniPostdocs: [
        {
            id: 'alumni-postdoc-001',
            name: {
                zh: '示例博士后',
                en: 'Example Postdoc'
            },
            year: 2023, // 毕业年份
            destination: {
                zh: '某大学助理教授',
                en: 'Assistant Professor, University'
            }
        }
        // ... 添加更多博士后校友
    ],
    // 博士生校友
    alumniPhd: [
        {
            id: 'alumni-phd-001',
            name: {
                zh: '示例博士生',
                en: 'Example PhD'
            },
            year: 2022,
            destination: {
                zh: '某公司研究科学家',
                en: 'Research Scientist, Company'
            }
        }
        // ... 添加更多博士生校友
    ],
    // 硕士生校友
    alumniMasters: [
        {
            id: 'alumni-master-001',
            name: {
                zh: '示例硕士生',
                en: 'Example Master'
            },
            year: 2023,
            destination: {
                zh: '某公司算法工程师',
                en: 'Algorithm Engineer, Company'
            }
        }
        // ... 添加更多硕士生校友
    ],
    // 本科生校友
    alumniUndergrad: [
        {
            id: 'alumni-undergrad-001',
            name: {
                zh: '示例本科生',
                en: 'Example Undergrad'
            },
            year: 2024,
            destination: {
                zh: '继续深造',
                en: 'Further Study'
            }
        }
        // ... 添加更多本科生校友
    ],
    // 访问学生校友
    alumniVisiting: [
        {
            id: 'alumni-visiting-001',
            name: {
                zh: '示例访问学生',
                en: 'Example Visiting Student'
            },
            year: 2023,
            destination: {
                zh: '返回原学校',
                en: 'Returned to Original School'
            }
        }
        // ... 添加更多访问学生校友
    ],
    // 校友（已毕业）- 通用格式（保留以兼容旧代码）
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

