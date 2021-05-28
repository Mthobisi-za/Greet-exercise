
var btns = document.querySelector(".button");
var reset = document.querySelector(".reset");
if(localStorage.getItem("names")!== null){
    document.querySelector(".num").innerHTML = localStorage.getItem("names").split(',').length;
}

var arg = []
var name;
var lang;
function makeChanges(){
    ///global values
    var nameS = document.querySelector("#name").value.toLowerCase();
    var langS = document.querySelector("input[name='Group']:checked");
//    var arg = []
//    var name;
//    var lang;
    //global values
    ///collect user input
    //collect value from inputs
    function setUserLang(str){
        try{
            if(str.value == null){
                ///it will fail n run catch
        }
        else if(str.value == "Isizulu" || str.value == "isizulu"){
            localStorage.setItem("lang", str.value)
            return lang = "Saw'bona"
        } else if(str.value == "English" || str.value == "english"){
            localStorage.setItem("lang", str.value)
            return lang = "Hello"
        } else{
            localStorage.setItem("lang", str.value)
            return lang = "Dumela"
        }
        }catch (e){
            document.querySelector(".errR").innerHTML = "Please select language";
        }
        
    }  
    //collect user inputs
    //store the values to local storage
    function storeNames(){
        var checkNum = /\d/;
        var local = localStorage.getItem("names");
        //reference local storage
        if(local == null){
            //does not exist and local storage is not declared
            arg.push(name)
             localStorage.setItem("names", arg)
            return localStorage.getItem("names")
        }  else if(localStorage.getItem("names").indexOf(name) !== -1){
            ///already exist
            return "already exist"
        }else{
            
            //add the arrays and assign new values
            var df = [localStorage.getItem("names")];
            df.push(name)
             localStorage.setItem("names", df);
             return localStorage.getItem("names") 
            
        }
    } 

    function updateElem(){
        if( localStorage.getItem("lang") !== null){
             var resultElem = document.querySelector("#namees");
           resultElem.style.color = "gray";
           var langj = localStorage.getItem("lang")
           var upper = name.charAt(0).toUpperCase()+ name.slice(1);
           if(localStorage.getItem("lang")== "Isizulu"){
               resultElem.innerHTML = "Saw'bona" + " " + upper;
           } else if(localStorage.getItem("lang") == "English"){
               resultElem.innerHTML = "Hello" + " " + upper;
           } else{
               resultElem.innerHTML = "Dumela" + " " + upper;
           }
        }else{
           
        }
    
   } 

    function setUserName(str){
        var checkNum = /\d/;
        if(checkNum.test(str) || str == ""){
            document.querySelector(".errspan").innerHTML = 'Please input text that has alphabetic values only'
            return "Please input text that has alphabetic values only."
        } else{
            name = str.toLowerCase();
            setUserLang(langS);
            storeNames();
            updateElem();
            return str.toLowerCase()
            }
    } setUserName(nameS) 


    
    
    //store the values to local storage
    var counterElem = document.querySelector(".num");
    ///get the counter
    function getCounter(){
        counterElem.innerHTML = localStorage.getItem("names").split(',').length;
        return localStorage.getItem("names").split(',').length;
    } getCounter()
    ///get the counter
     ////elements
    
    //input the result
    ////return an objects factory functions
    if(lang == undefined){
        console.log("im playing")
    }else{
        console.log("nahh")
    }
    //empty every value
    document.querySelector("#name").value = ""
    document.getElementById("zulu").checked = false;
    document.getElementById("eng").checked = false;
    document.getElementById("Dumela").checked = false;
    return{
        setUserName,
        setUserLang,
        storeNames,
        getCounter,
        updateElem
    }

}
function backToDefault(){
    document.querySelector(".errspan").innerHTML =""
    document.querySelector("#name").value = ""
    document.getElementById("zulu").checked = false;
    document.getElementById("eng").checked = false;
    document.getElementById("Dumela").checked = false;
    localStorage.clear()
    arg.length = 0;
    document.querySelector(".aler").innerHTML = "you just deleted all data";
    document.querySelector(".num").innerHTML = 0;
    document.querySelector("#namees").innerHTML = "";
    document.querySelector(".aler").style.color = "Orange"

    
}
///event listeners
btns.addEventListener("click", makeChanges);
reset.addEventListener("click", backToDefault);