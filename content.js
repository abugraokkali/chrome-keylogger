window.onkeydown = function (e) {
    data = {
        key: e.key,
        page: window.location.href
    };
    chrome.runtime.sendMessage(data, function (response) {
        console.log(response);
    });
}
