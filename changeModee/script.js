let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        
        // OLD WAY: body.classList.add("dark");
        // NEW WAY (Direct JS):
        body.style.backgroundColor = "black";  
        body.style.color = "white";  // Changing text color so you can read it!

    } else {
        currMode = "light";
        
        // OLD WAY: body.classList.add("light");
        // NEW WAY (Direct JS):
        body.style.backgroundColor = "white";
        body.style.color = "black"; // Changing text color back
    }

    console.log(currMode);
});
