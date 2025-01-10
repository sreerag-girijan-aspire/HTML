function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    document.cookie = cname + "=" + cvalue + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(cname) {
    const name = cname + "=";
    const cookies = decodeURIComponent(document.cookie).split(';');
    for (let c of cookies) {
        if (c.trim().startsWith(name)) {
            return c.substring(name.length);
        }
    }
    return "";
}

function checkCookie() {
    let user = getCookie("username");
    const displayElement = document.getElementById("cookieDisplay");

    if (user) {
        displayElement.textContent = "Stored Username Cookie: " + user;
    } else {
        user = prompt("Please enter your name:");
        if (user) {
            setCookie("username", user, 30);
            displayElement.textContent = "Stored Username Cookie: " + user;
        }
    }
}

checkCookie();