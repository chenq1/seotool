chrome.contextMenus.create({
    "id": "SEO辅助工具",
    "title": "SEO辅助工具",
    "type": "normal",
    "contexts": ["all"]
});

chrome.contextMenus.create({
    "parentId": "SEO辅助工具",
    "title": "百度搜索查询",
    "type": "normal",
    "contexts": ["all"],
    "onclick": function (info, tab) {
        debugger;
        var sw = info.selectionText;
        if (typeof (sw) != "undefined") {
            var url = "https://www.baidu.com/s?ie=utf-8&wd=" + sw;
            window.open(url);
        }

    }
});

//百度联想词
chrome.contextMenus.create({
    "parentId": "SEO辅助工具",
    "title": "百度联想词",
    "type": "normal",
    "contexts": ["all"],
    "onclick": function (info, tab) {
        debugger;
        var sw = info.selectionText;
        if (typeof (sw) != "undefined") {
            var url = "http://www.tool90.com/seo/longwords/?sw=" + sw;
            window.open(url);
        }

    }
});

chrome.contextMenus.create({
    "parentId": "SEO辅助工具",
    "title": "百度指数查询",
    "type": "normal",
    "contexts": ["all"],
    "onclick": function (info, tab) {
        debugger;
        var sw = info.selectionText;
        if (typeof (sw) != "undefined") {
            var url = "http://index.baidu.com/v2/main/index.html#/trend/" + sw + "?words=" + sw;
            window.open(url);
        }
    }
});


chrome.contextMenus.create({
    "parentId": "SEO辅助工具",
    "title": "站长工具-SEO收录查询",
    "type": "normal",
    "contexts": ["all"],
    "onclick": function (info, tab) {
        debugger;
        var url = tab.url; //https://www.fy65.com/
        window.open("http://seo.chinaz.com/" + getHost(url));

    }
});

chrome.contextMenus.create({
    "parentId": "SEO辅助工具",
    "title": "5118-SEO收录查询",
    "type": "normal",
    "contexts": ["all"],
    "onclick": function (info, tab) {
        debugger;
        var url = tab.url; //https://www.fy65.com/
        window.open("https://seo.5118.com/" + getHost(url));
    }
});

chrome.contextMenus.create({
    "parentId": "SEO辅助工具",
    "title": "爱站网-SEO收录查询",
    "type": "normal",
    "contexts": ["all"],
    "onclick": function (info, tab) {
        debugger;
        var url = tab.url; //https://www.fy65.com/
        window.open("https://www.aizhan.com/seo/" + getHost(url));
    }
});

function getHost(url) {

    var reg = /^http(s)?:\/\/(.*?)\//
    var host = reg.exec(url)[2];
    return host;
}

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    //debugger;
    //var submittedURL = tab && tab.url;
    //if (info["menuItemId"] == "TDK查看器") {
    //    console.log("右键菜单"); 
    //}
});