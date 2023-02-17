chrome.alarms.onAlarm.addListener(function (alarm) {
  chrome.notifications.create("confirm", {
    message: "Select an option", //can be replaced
    type: "basic",
    title: "Ready to relax your eyes?",
    iconUrl: "./icons/logo.png",
    buttons: [{ title: "Yes" }, { title: "No" }],
    requireInteraction: true,
  });

  chrome.notifications.onButtonClicked.addListener((_, buttonIndex) => {
    if (buttonIndex === 0) chrome.tabs.create({ url: "background.html" });
    chrome.notifications.clear("confirm");
  });
});
