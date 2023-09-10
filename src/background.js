console.log("hello from background.js")

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab)=>{
    // console.log({tabId, changeInfo, tab})
    if (changeInfo.status === 'complete') {
        chrome.scripting.executeScript({
            target: {tabId},
            files: ['./src/foreground.js']
        }).then(()=>{
            console.log('forground.js injected!')
        })
    }
})