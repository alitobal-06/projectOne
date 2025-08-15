let dispContent = "";
const buttons = document.querySelectorAll([".button", ".operation"]);
buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.id == " = ") {
            dispContent = eval(dispContent);
        } else if (button.id == "clear") {
            dispContent = "";
        } else {
            dispContent += button.id;
        }
        document.getElementById("display").textContent = dispContent;
    })
});

