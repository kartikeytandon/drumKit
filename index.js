// working on clicks
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimtions(buttonInnerHTML);
    })
}

// working on key presses
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimtions(event.key);
})

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var tom5 = new Audio('sounds/tom-5.mp3');
            tom5.play();
            break;
        case "k":
            var tom6 = new Audio('sounds/tom-6.mp3');
            tom6.play();
            break;
        case "l":
            var tom7 = new Audio('sounds/tom-7.mp3');
            tom7.play();
            break;
        default: alert("Invalid");
    }
}

// adding animations to buttons
function buttonAnimtions(currentKey) {
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    // timeout 
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}