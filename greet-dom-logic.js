if (localStorage.getItem("names") !== null) {
    document.querySelector(".num").innerHTML = localStorage.getItem("names").split(",").length;
}

function play(obj) {
    console.log(obj)
    var data = obj;
    var counter = localStorage.getItem("names");
    if (counter !== null) {
        counter = localStorage.getItem("names").split(",").length
    } else {
        counter = 0
    }
    //grab all elements
    var nameErr = document.querySelector(".errspan");
    var langErr = document.querySelector(".errR");
    var greetMeElem = document.querySelector("#namees");
    var numElement = document.querySelector(".num");
    document.querySelector(".aler").innerHTML = ""

    ///default values
    document.querySelector("#namees").innerHTML = "";
    document.querySelector(".errspan").innerHTML = ""
        //some useful code;
    var nameerror = data["NameError"];
    var langerror = data["LangError"];
    var convertFirstCase = data["name"].charAt(0).toUpperCase() + data["name"].slice(1)
    var actualN = data["name"];
    var actualL = data["lang"];

    ///input values

    if (actualN !== "" && actualL !== "") {
        greetMeElem.innerHTML = actualL + " " + convertFirstCase
    } else {
        console.log("print errors");
        nameErr.innerHTML = nameerror;
        langErr.innerHTML = langerror;
    }

    numElement.innerHTML = counter

}
////reset everything
var resetBtn = document.querySelector(".reset")

function reset() {
    document.querySelector(".errspan").innerHTML = "";
    document.querySelector(".errR").innerHTML = "";
    document.querySelector("#namees").innerHTML = "";
    document.querySelector(".num").innerHTML = 0;
    document.querySelector(".aler").innerHTML = "";

    document.querySelector("#name").value = ""
    document.querySelector("#zulu").checked = false;
    document.querySelector("#Dumela").checked = false;
    document.querySelector("#eng").checked = false

    localStorage.removeItem("names");

    document.querySelector(".aler").innerHTML = "You just deleted everything";
    setTimeout(function() {
        document.querySelector(".aler").innerHTML = "";
    }, 3000)
}
resetBtn.addEventListener("click", reset)