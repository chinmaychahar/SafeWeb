chrome.alarms.onAlarm.addListener(function (alarm) {
    if (confirm('Ready to relax your eyes?')) {
      chrome.tabs.create({ url: 'background.html' });
    }
  });
  