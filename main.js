// Defining text characters for the empty and full hearts for you to use later.

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "orange" : "",
  "": "orange"
};

let articleHearts = document.querySelectorAll(".like");

function likeCallback(e) {
  let heart = e.target;
  mimicServerCall("bogusUrl")
   //OR: mimicServerCall("bogusUrl", {forceFailure: true})
    .then(function(serverMessage){
       heart.innerText = glyphStates[heart.innerText];
       heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      // Basic
      // alert("Something went wrong!");
      // or....
      document.getElementById("modal").className = "";
    });
}

for (let glyph of articleHearts) {
  glyph.addEventListener("click", likeCallback);
}


