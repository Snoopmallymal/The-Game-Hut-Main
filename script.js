function login() {
    let truepass = "password"
    let permauth = localStorage.getItem("auth");
    let tempauth = sessionStorage.getItem("auth")
    if (tempauth == 1) {
        window.open("launcher.html", "_top", "", "true");
    }
    else if (permauth == 1) {
        window.open("launcher.html", "_top", "", "true");
    }
    else {
        let entpasss = window.prompt("Enter password")
        if  (entpasss == truepass) {
            sessionStorage.setItem("auth", 1);
            window.open("launcher.html", "_top", "", "true");
        }
    }

} 