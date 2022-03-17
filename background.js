chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    console.log('Scrollhole extension installed')
})



//High Level Timer Strategy
    //if user goes to any of the pages listed on manifest, invoke the start of timer
    //timer should run in the background to prevent the timer from stopping when switching between youtube videos, different twitter links etc...
        //this may mean we need 2 .js files (a background js file and main)
    //When specified time is up (30s for demo, 15m for full deployment) invoke QUOTE MODAL
    //if quote is entered and continue is selected then restart timer for (duration)

// Timer TODO:
    //permissions in manifest
    //chrome.runtime API
    //need to link background.js to main.js

    function timer () {
        console.log("timer has started")
        setTimeout(modalPopUp, 5000)
    }
    
    function modalPopUp () {
        console.log('Time is up')
    }

