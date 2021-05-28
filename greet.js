var btns = document.querySelector(".button");
var reset = document.querySelector(".reset");
var map = {}
var arg = []
var counter;
var counterElement = document.querySelector(".num");
///default things

if(localStorage.getItem("names")!== null){
    counterElement.innerHTML = localStorage.getItem("names").split(",").length
}

function makeChanges(){
    //defaults 
    document.querySelector("#namees").innerHTML= ""
    document.querySelector(".errspan").innerHTML= ""
// logic to loop over the fruits
var name = document.querySelector("#name").value.toLowerCase();
var lang = document.querySelector("input[name='Group']:checked");
///local storage value


//validate data

    //reference the elements first
    var span = document.querySelector(".errspan");
    ///regex that check num
    var hasNum = /\d/;
    if(hasNum.test(name)){
        //print out an error message
        span.innerHTML = "Please enter alphabetic values only not numbers"
    } else{
        /// check if first value does not have space
        var text = name.charAt(0);
        if(text == " " || text == ""){
            //print out name cannot contain space.
            span.innerHTML = "Please enter alphabetic values only not space"
        } else{
            function trying(){
                //the logic  
                //data that will be called once data is validated
                var local = localStorage.getItem("names");
                localStorage.setItem("lang", lang.value)
                //local
                if(null == local){
                arg.push(name)
                localStorage.setItem("names", arg);
                } else if(localStorage.getItem("names").indexOf(name) !== -1){
                    console.log("exist")
                }else{
                    var df = [localStorage.getItem("names")];
                    df.push(name)
                    localStorage.setItem("names", df);
                }
                counter = localStorage.getItem("names").split(',').length;
                
                ////elements
                var counterElem = document.querySelector(".num");
                var resultElem = document.querySelector("#namees");
                counterElem.innerHTML = counter;
                var upper = name.charAt(0).toUpperCase()+ name.slice(1);
                if(localStorage.getItem("lang")== "Isizulu"){
                    resultElem.innerHTML = "Saw'bona" + " " + upper;
                } else if(localStorage.getItem("lang") == "English"){
                    resultElem.innerHTML = "Hello" + " " + upper;
                } else{
                    resultElem.innerHTML = "Dumela" + " " + upper;
                }
               //reset everything
               document.querySelector("#name").value = "";
                document.querySelector(".errspan").innerHTML= " ";
                document.querySelector(".errR").innerHTML = "";
            }
            try {
                if(lang.value == null){
                    
                }else {
                    trying()
                }
            } catch (e) {
                document.querySelector(".errR").innerHTML = "Please select language";
            }
        }
            
           }     
             //radio button check  
             document.querySelector(".aler").innerHTML = "";
///validate data
}
function backToDefault(){
    localStorage.clear()
   
    document.querySelector(".aler").innerHTML = "you just deleted all data";
    document.querySelector(".num").innerHTML = 0;
    document.querySelector("#namees").value = ""
}
btns.addEventListener("click", makeChanges);
reset.addEventListener("click", backToDefault);