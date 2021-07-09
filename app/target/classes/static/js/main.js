// event bindings
document.getElementById("btn-message").addEventListener("click", getSecretMessage);
document.getElementById("txt-message").addEventListener("input", setMessage);

// variables & setters
let message = "";

function setMessage(e) {
  message = e.target.value;
}

// getSecretMessage is a silly little method that reverses the message
// string and appends to the current datetime
function getSecretMessage() {
    var secretMessage = message.split("");
    var left = 0;
    var right = secretMessage.length - 1;

    while(left < right) {
        var temp = secretMessage[left];
        secretMessage[left] = secretMessage[right];
        secretMessage[right] = temp;

        left++;
        right--;
    }

    alert(Date.now() + secretMessage.join(""));
}
