// 

console.log("Background script running")

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log(tab)
}