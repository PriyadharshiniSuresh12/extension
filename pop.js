// Get HTML elements

// let title = document.getElementById("title");
// let message = document.getElementById("message");
// let nameInput = document.getElementById("nameInput");
// let button = document.getElementById("btn");


// // Button click event

// button.addEventListener("click", function() {

//     let name = nameInput.value;

//     if (name === "") {
//         message.innerText = "Please enter your name";
//     } 
//     else {
//         title.innerText = "Hello " + name + "!";
//         message.innerText = "Welcome to JavaScript";
//     }

// });
// button.addEventListener("mouseover", function() {
//     button.style.backgroundColor = "lightblue";
// });
 let seconds = 0;
        let timer;

        let time = document.getElementById("time");
        let start = document.getElementById("start");
        let stop = document.getElementById("stop");
        let reset = document.getElementById("reset");

        start.addEventListener("click", function() {

            timer = setInterval(function() {

                seconds++;
                let minutes = Math.floor(seconds / 60);
                let remainingSeconds = seconds % 60;

                time.innerText =
                    String(minutes).padStart(2, "0") +
                    ":" +
                    String(remainingSeconds).padStart(2, "0");

            }, 1000);

        });

        stop.addEventListener("click", function() {
            clearInterval(timer);
        });

        reset.addEventListener("click", function() {

            clearInterval(timer);

            seconds = 0;

            time.innerText = "00:00";

        });