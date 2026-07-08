var newestUrls = [
    "https://dashijian1.com",
    "http://dashijian2.com"
];

var otherUrls = [
    "https://github.com/dnynews",
    "https://gitlab.com/dnynews"
];

var emails = ["dnynews2026@gmail.com"];

var tgChannel = "https://t.me/dnynew2026";

var businessLink = "https://r6t1y.8kn5u2-t1t1.icu";

var foreverUrls = [
    "https://dnynews.com"
];

function createFieldElem(option) {
    var title = option.title;
    var items = option.items || [];
    var plainText = option.plainText;
    var classStr = option.classStr || '';
    var text = option.text;

    var fieldElem = document.createElement('div');
    fieldElem.setAttribute('class', 'field ' + classStr);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = '';

    for (var i = 0; i < items.length; i++) {
        htmlStr += '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
    }

    if (text) htmlStr += '<li class="text">' + text + '</li>';

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');

    // Logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.innerHTML = `
        <img src="logo.png" style="margin-bottom: 15px;"/>
        <h1>🎉 东南亚大事件 🎉</h1>
        <p>官方导航站</p>
    `;
    mainElem.appendChild(logoElem);

    var welcomeElem = createFieldElem({
        title: '🔥 欢迎来到东南亚大事件<br><font color="#ffcc00"><b>Ctrl + D</b></font> 收藏此页，永不迷路！'
    });
    mainElem.appendChild(welcomeElem);

    var newestFieldElem = createFieldElem({
        title: '🔥 国内直连地址（优先推荐）',
        items: newestUrls
    });
    mainElem.appendChild(newestFieldElem);

    var tipElem = createFieldElem({
        title: '微信/QQ打不开？',
        text: '直接复制地址，用浏览器打开（推荐 Chrome、夸克、Edge、UC、Safari）',
        classStr: 'desc'
    });
    mainElem.appendChild(tipElem);

    var otherFieldElem = createFieldElem({
        title: '📍 永久地址发布页（强烈建议全部收藏）',
        items: otherUrls
    });
    mainElem.appendChild(otherFieldElem);

    var mailFieldElem = createFieldElem({
        title: '📧 一键获取最新地址',
        items: emails,
        plainText: true,
        text: '发送任意邮件，1分钟内自动回复最新地址'
    });
    mainElem.appendChild(mailFieldElem);

    // 官方Telegram交流群（干净版）
    var tgFieldElem = createFieldElem({
        title: '💬 官方Telegram交流群',
        items: [tgChannel]
    });
    mainElem.appendChild(tgFieldElem);

    // 商务合作 - 单独一个卡片，可点击
    var businessFieldElem = createFieldElem({
        title: '🤝 商务合作',
        items: [businessLink]
    });
    mainElem.appendChild(businessFieldElem);

    var foreverFieldElem = createFieldElem({
        title: '🔒 海外永久地址（需翻墙）',
        items: foreverUrls,
        text: '大陆用户建议开启VPN访问，速度更稳！'
    });
    mainElem.appendChild(foreverFieldElem);

    var browserFieldElem = createFieldElem({
        title: '⚡️ 推荐浏览器',
        text: 'PC / Android：Chrome　　iPhone：Safari 自带浏览器',
        classStr: 'desc'
    });
    mainElem.appendChild(browserFieldElem);

    var shareFieldElem = createFieldElem({
        title: '💖 分享就是力量！',
        text: '把这个页面发给朋友，每一次分享都是我们更新的最大动力～<br>感谢您的支持，祝您浏览愉快！ 🌟',
        classStr: 'desc'
    });
    mainElem.appendChild(shareFieldElem);
}