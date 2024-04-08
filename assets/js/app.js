


const eventHandler = (number) =>{
    button = document.getElementById("button" + number);
    answer = document.getElementById("answer" + number);

    if (answer.style.display === "block") {
        answer.style.display = "none";
        button.src = "./assets/images/icon-plus.svg"
        button.alt = "icon plus";
    } else {
        answer.style.display = "block";
        button.src = "./assets/images/icon-minus.svg";
        button.alt = "icon minus";
    }
}