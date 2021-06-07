var btn = document.querySelector(".button");
if (localStorage.getItem("names") !== null) {
    document.querySelector(".num").innerHTML = localStorage.getItem("names").split(",").length;
}

function play(obj) {
    console.log(obj)
    var data = obj;

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
        //store value to localStorage
        var local = localStorage.getItem("names");
        var lb = []
            //local
        if (null == local) {
            lb.push(actualN)
            localStorage.setItem("names", lb);
        } else if (localStorage.getItem("names").indexOf(actualN) !== -1) {
            console.log("exist")
        } else {
            var df = [localStorage.getItem("names")];
            df.push(actualN)
            localStorage.setItem("names", df);
        }
        //store value to localstorage
        greetMeElem.innerHTML = actualL + " " + convertFirstCase
    } else {
        console.log("print errors");
        nameErr.innerHTML = nameerror;
        langErr.innerHTML = langerror;
    }
    var counter = localStorage.getItem("names");
    var count;
    if (counter !== null) {
        count = localStorage.getItem("names").split(",").length
    } else {
        count = 0
    }
    numElement.innerHTML = count;

    function setDefault() {
        document.querySelector("#name").value = ""
        document.querySelector("#zulu").checked = false;
        document.querySelector("#Dumela").checked = false;
        document.querySelector("#eng").checked = false
    }
    setDefault()
    setTimeout(function() {
        document.querySelector(".aler").innerHTML = "";
        document.querySelector(".errR").innerHTML = "";
        document.querySelector(".errspan").innerHTML = "";
    }, 2000);
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
        document.querySelector(".errR").innerHTML = "";
        document.querySelector(".errspan").innerHTML = "";
    }, 2000);

}
resetBtn.addEventListener("click", reset)
    ///connect to bussiness logic
function setEverything() {
    var name = document.querySelector("#name").value.toLowerCase();
    var lang = document.querySelector("input[name='Group']:checked");
    console.log(lang)
    businessLogic(name, lang)
}
btn.addEventListener("click", setEverything);