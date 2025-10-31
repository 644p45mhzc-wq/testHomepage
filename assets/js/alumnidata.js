// OpenMOSS Lab 校友数据
// 校友信息按类别分类管理，方便维护和更新

const alumniData = {
    // 博士后校友
    postdocs: [
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
    phd: [
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
    masters: [
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
    undergrad: [
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
    visiting: [
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
    ]
};

// 导出数据（用于其他JS文件访问）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { alumniData };
}

