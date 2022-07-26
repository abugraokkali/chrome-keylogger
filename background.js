chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    sendResponse(request);
  }
);