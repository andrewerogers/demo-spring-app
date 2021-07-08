// event bindings
document.getElementById("btn-message").addEventListener("click", getCurrentDate);

function getCurrentDate() {
    alert(Date.now());
}