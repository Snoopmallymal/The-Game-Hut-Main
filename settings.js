function changename() {
    let new_name = window.prompt("New Name")
    localStorage.setItem("title", new_name);
    document.title = new_name
}
function siteload() {
    let title = localStorage.getItem("title");
    if (title == null) {
        document.title = "Settings"
    }
    else {
        document.title = title
    }
    6
}
function requestGame() {
        window.open("https://form.jotform.com/231665035917055","blank","scrollbars=yes,toolbar=no,width=700,height=500")
}