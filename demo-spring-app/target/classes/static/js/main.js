// event bindings
document.getElementById("btn-message").addEventListener("click", getCurrentDate);

function getCurrentDate() {
    let count = 0;

    while (count < 10) {
        alert(Date.now());
    }
}