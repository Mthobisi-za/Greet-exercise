var data;

function businessLogic(strName, strLang) {
    ///default
    console.log(strName)
    console.log(strLang)
        //inputs
        //inputs
        //updated user values
    var userName;
    var userLang;
    //updated user values

    function setUserNameAndLang() {
        userName = strName;
        try {
            if (strLang.value == undefined) {

            } else {
                userLang = strLang.value;
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
                return userName;
            }
        }

        function checkUserLang() {
            if (userLang == null) {
                return "Please select Language"
            } else if (userLang !== null) {
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


    return {
        setUserNameAndLang,
        validateInfo,
        finalize
    }
}