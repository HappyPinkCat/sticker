// 背景脚本示例  
chrome.runtime.onInstalled.addListener(() => {  
    console.log('插件已安装');  
});  

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {  
    // 处理来自内容脚本或弹出窗口的消息  
    console.log('收到消息:', request);  
    sendResponse({status: 'success'});  
});
