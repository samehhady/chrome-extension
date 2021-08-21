chrome.tabs.onUpdated.addListener(function() {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    if (tabs[0] && tabs[0].status === 'complete' && tabs[0].url.includes('1password.com')) {
      chrome.tabs.sendMessage(tabs[0].id, null);
    }
  })
});
