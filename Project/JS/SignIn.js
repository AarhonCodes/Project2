function Validate(){
    var Username = document.getElementById("Username").value
    var Password = document.getElementById("Password").value

    if(Username == '' && Password != ''){
        alert("Please Enter a Username!")
    }

    if(Username != '' && Password == ''){
        alert("Please Enter a Password!")
    }
    
    if(Username == '' && Password == ''){
        alert("Please Enter all fields")
    }

    if(Username != '' && Password != ''){
        alert("Succesfully Logged in!")
    }
}

