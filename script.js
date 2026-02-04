

let screen = document.querySelector(".calculator-screen");
let keys = document.querySelector(".calculator-keys");

keys.addEventListener("click", (e) => {
    if (e.target.matches("button")) {
        let val = e.target.value;

        if (val === "=") {
            screen.value = eval(screen.value);
        } 
        else if (val === "all-clear") {
            screen.value = "0";
        } 
        else if (val === "delete") {
            if (screen.value.length > 1 && screen.value !== "0") {
                screen.value = screen.value.slice(0, -1);
            } else {
                screen.value = "0";
            }
        }
        else if (val === "square") {
            screen.value = screen.value * screen.value;
        }
        else if (val === "sqrt") {
            screen.value = Math.sqrt(screen.value);
        }
        else if (val === "%") {
            screen.value = screen.value / 100;
        }
        else {
            if (screen.value === "0" && val !== ".") {
                screen.value = val;
            } else {
                screen.value = screen.value + val;
            }
        }
    }
});