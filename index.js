function restoreOptions() {
    chrome.storage.sync.get(
      {
        value: false,
      },
      function (items) {
        document.getElementsByClassName('toggler')[0].checked = items.value;
      }
    );
  } // toggle value is false by default
  
  let alarmClock = {
    onHandler: function (e) {
      chrome.alarms.create('eyeAlarm', {
        delayInMinutes: 20,
        periodInMinutes: 20,
      });
      setTimeout(()=>{
        window.close();
      },600)
      
    },
    offHandler: function (e) {
      chrome.alarms.clear('eyeAlarm');
      setTimeout(()=>{
        window.close();
      },600)
    
    },
  
    setup: function () {
      var toggler = document.getElementsByClassName('toggler');
      toggler[0].addEventListener('change', () => {
        if (toggler[0].checked == true) {
          chrome.storage.sync.set(
            {
              value: true,
            },
            function () {
              console.log('Switch Saved as true');
               alarmClock.onHandler();
            }
          );
        } else {
          chrome.storage.sync.set(
            {
              value: false,
            },
            function () {
              console.log('Switch Saved as false');
               alarmClock.offHandler();
            }
          );
        }
      });
    },
  };
  
  document.addEventListener('DOMContentLoaded', function () {
    restoreOptions();
    alarmClock.setup();
  });  