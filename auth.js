function checkauth() {
    let perm = localStorage.getItem("auth");
    let temp = sessionStorage.getItem("auth")
    if (temp == 1) {
        console.log("logged in temp")
    }
    else if (perm == 1) {
        console.log("logged in perm")
    }
    else {
        window.open("/index.html", "_self", "", "true")
    }
}
function exit() {
    window.open("/index.html", "_self", "", "true")
}