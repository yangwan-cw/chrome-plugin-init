console.log("hello world")

  // 添加事件监听器，点击按钮时打开 options 页面
  document.getElementById('openOptionsButton').addEventListener('click', function() {
    console.log("打开配置");
    chrome.runtime.openOptionsPage();
});