var arr = document.querySelectorAll("input");
var txt = document.querySelectorAll(".error-text");
var btn = document.querySelectorAll("button")[0];

btn.addEventListener("click", function(){
    btn.classList.add("clicked-btn");
    var i = 0;
    while (i <= 3) {
        if (arr[i].value == ""){
            arr[i].style.borderColor = "hsl(0, 100%, 74%)";
            arr[i].classList.add("clicked");
            arr[i].attributes["placeholder"].value = ""
            arr[i].classList.add("error");
            txt[i].classList.remove("hidden")
        };
        i++;
    };
    if (arr[2].value == ""){
        arr[2].attributes["placeholder"].value = "email@example/com"
    }

});