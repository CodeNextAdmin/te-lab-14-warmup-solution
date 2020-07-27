/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

let colors = [
        "#2478af",
        "#21242f",
        "#86868c",
        "#d5456d",
        "#0f217a",
        "#b78665"
      ];

      function showAlert() {
        alert("I'm touched!!! 😊 ");
      }

      function changeColor() {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        document.querySelector("body").style.backgroundColor = randomColor;
      }

      function appendEmoji() {
        let text = document.querySelector("#emoji").innerHTML;
        text += " 🤡 ";
        document.querySelector("#emoji").innerHTML = text;
      }

      function changeAll() {
        const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
        const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
        var allMatches = []; /* querySelectorAll returns an array */

        allMatches = document.querySelectorAll("button");

        for (let i = 0; i < allMatches.length; i++) {
          allMatches[i].style.backgroundColor = randomColor1;
          allMatches[i].style.color = randomColor2;
        }
      }