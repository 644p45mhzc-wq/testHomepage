// OpenMOSS Lab 校友页面渲染逻辑
// 负责将校友数据渲染到页面上

(function () {
    'use strict';

    // 获取当前语言设置
    function getCurrentLang() {
        return localStorage.getItem('lang') || 'zh-CN';
    }

    // 渲染单个校友列表
    function renderAlumniList(category, containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container || !alumniData[category]) return;

        const alumniList = alumniData[category];
        const currentLang = getCurrentLang();
        const langKey = currentLang === 'zh-CN' ? 'zh' : 'en';

        // 按年份排序（降序）
        const sortedAlumni = [...alumniList].sort((a, b) => (b.year || 0) - (a.year || 0));

        // 按年份分组
        const groupedByYear = {};
        sortedAlumni.forEach(alumni => {
            const year = alumni.year || '未知';
            if (!groupedByYear[year]) {
                groupedByYear[year] = [];
            }
            groupedByYear[year].push(alumni);
        });

        // 生成 HTML
        const years = Object.keys(groupedByYear).sort((a, b) => {
            if (a === '未知') return 1;
            if (b === '未知') return -1;
            return b - a;
        });

        let html = '';
        years.forEach(year => {
            const alumniInYear = groupedByYear[year];
            html += '<div style="margin-bottom: 16px;">';
            html += `<h3 class="year-badge" style="margin-bottom: 8px;">${year}</h3>`;
            alumniInYear.forEach(alumni => {
                const name = alumni.name[langKey] || alumni.name.zh;
                const destination = alumni.destination ? (alumni.destination[langKey] || alumni.destination.zh) : '';
                html += '<div class="alumni-row">';
                html += `<span class="name">${name}</span>`;
                html += `<span class="destination">${destination}</span>`;
                html += '</div>';
            });
            html += '</div>';
        });

        container.innerHTML = html;
    }

    // 渲染所有校友列表
    function renderAllAlumniLists() {
        renderAlumniList('postdocs', '#postdocs + .alumni-list');
        renderAlumniList('phd', '#phd + .alumni-list');
        renderAlumniList('masters', '#masters + .alumni-list');
        renderAlumniList('undergrad', '#undergrad + .alumni-list');
        renderAlumniList('visiting', '#visiting + .alumni-list');
    }

    // 监听语言切换事件
    function setupLanguageListener() {
        // 监听 localStorage 变化事件（当其他标签页或窗口修改时）
        window.addEventListener('storage', function(e) {
            if (e.key === 'lang') {
                renderAllAlumniLists();
            }
        });

        // 轮询检查语言是否变化（用于检测当前窗口内的语言切换）
        let lastLang = getCurrentLang();
        setInterval(function() {
            const currentLang = getCurrentLang();
            if (currentLang !== lastLang) {
                lastLang = currentLang;
                renderAllAlumniLists();
            }
        }, 500);
    }

    // 初始化
    function init() {
        // 等待 DOM 加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                renderAllAlumniLists();
                setupLanguageListener();
            });
        } else {
            renderAllAlumniLists();
            setupLanguageListener();
        }
    }

    // 启动初始化
    init();
})();

