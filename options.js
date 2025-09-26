// 加载用户的主题设置
chrome.storage.sync.get('theme', function(data) {
    if (data.theme) {
      document.getElementById('theme').value = data.theme;
    }
  });
  
  // 保存设置
  document.getElementById('saveButton').addEventListener('click', function() {
    const theme = document.getElementById('theme').value;
    chrome.storage.sync.set({ theme: theme }, function() {
      alert('设置已保存!');
    });
  });
  