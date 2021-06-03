var btn = document.querySelector(".button");
var data;

function businessLogic() {
    ///default
    //inputs
    var name = document.querySelector("#name").value.toLowerCase();
    var lang = document.querySelector("input[name='Group']:checked");
    //inputs
    //updated user values
    var userName;
    var userLang;
    //updated user values

    function setUserNameAndLang() {
        userName = name;
        try {
            if (lang.value == undefined) {

            } else {
                userLang = lang.value;
            }
        } catch (e) {
            userLang = null
        }

    }
    setUserNameAndLang()

    function validateInfo() {
        function checkUserName() {
            if (userName == "" || userName == " " || userName.startsWith(" ")) {
                return "Please input value not spaces"
            } else if (/\d/.test(userName)) {
                return "Please don't put numbers"
            } else {
                //also store data to local storage
                var local = localStorage.getItem("names");
                lb = []
                    //local
                if (null == local) {
                    lb.push(userName)
                    localStorage.setItem("names", lb);
                } else if (localStorage.getItem("names").indexOf(userName) !== -1) {
                    console.log("exist")
                } else {
                    var df = [localStorage.getItem("names")];
                    df.push(userName)
                    localStorage.setItem("names", df);
                }
                return userName;
            }
        }

        function checkUserLang() {
            if (userLang == null) {
                return "Please select Language"
            } else if (userLang !== null) {
                localStorage.setItem("lang", userLang)
                return userLang
            }
        }
        var arg = [checkUserName(), checkUserLang()];
        return arg

    }
    validateInfo()
        //store the info to local storage
    function finalize() {
        var data = validateInfo();
        var map = {
            "NameError": "",
            "LangError": "",
            "name": "",
            "lang": ""
        }
        data.forEach((val) => {
            if (val.includes("Please")) {

                if (val == "Please input value not spaces") {
                    //error message
                    map.NameError = val
                } else if (val == "Please don't put numbers") {
                    //error message
                    map.NameError = val
                } else if (val == "Please select Language") {
                    //error message
                    map.LangError = val
                } // error messages
            } else {
                if (val == "Isizulu") {
                    map.lang = "Saw'bona"
                } else if (val == "Sesotho") {
                    map.lang = "Dumela"
                } else if (val == "English") {
                    map.lang = "Hello"
                } else {
                    map["name"] = val
                }
            }
        })
        return map
    }
    //store the info to local storage
    data = finalize()
    play(data);

    function setDefault() {
        document.querySelector("#name").value = ""
        document.querySelector("#zulu").checked = false;
        document.querySelector("#Dumela").checked = false;
        document.querySelector("#eng").checked = false
    }
    setDefault()
    return {
        setUserNameAndLang,
        validateInfo,
        finalize
    }
}
btn.addEventListener("click", businessLogic);

btn.addEventListener("click", businessLogic);