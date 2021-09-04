function Check() {
    var UserInput = document.getElementById("Enter").value

    if (UserInput == '') {
        alert("Please enter something before submitting!")
    } else {
        alert("Error! no results found!")
    }
}



function Validate() {

    // Variables wich value is defined by an id.

    //Normal input Variables
    var FirstName = document.getElementById("FirstName").value;
    var LastName = document.getElementById("LastName").value;
    var Email = document.getElementById("Email").value;
    var Pass = document.getElementById("Password").value;
    var ConfirmPass = document.getElementById("Confirm_Password").value;

    //DropDown Variables
    var selectedValue = document.getElementById("DropDown").value;




    // Form Validation Part 1
    if (FirstName == '' && LastName == '' && Email == '' && Pass == '' && ConfirmPass == '') {
        alert("Please Fill in all fields!")
    }



    if (FirstName == '' && LastName != '' && Email != '' && Pass != '' && ConfirmPass != '') {
        alert("Please fill in your first name!")
    }



    if (LastName == '' && FirstName != '' && Email != '' && Pass != '' && ConfirmPass != '') {
        alert("Please fill in your last name!")
    }



    if (Email == '' && LastName != '' && FirstName != '' && Pass != '' && ConfirmPass != '') {
        alert("Please fill in your email!")
    }

    //Radio Button Validation

    if (document.getElementById("Male").checked == false && document.getElementById("Female").checked == false &&
        document.getElementById("Other").checked == false &&
        Pass != '' && LastName != '' && FirstName != '' && Email != '' && ConfirmPass != '') {
        alert("Please Select your gender!")
    }



    //DropDown Validation

    if (selectedValue == "" && FirstName != '' && LastName != '' && Email != '' && Pass != '' && ConfirmPass != '') {
        alert("Please Select a Nationality")
    }



    if (Pass == '' && LastName != '' && FirstName != '' && Email != '' && ConfirmPass != '') {
        alert("Please fill in your Password!")
    }



    if (Pass != '' && LastName != '' && FirstName != '' && Email != '' && ConfirmPass == '') {
        alert("Please Confirm Password!")
    }







    // Form Validation Part 2

    if (FirstName != '' && LastName == '' && Email == '' && Pass == '' && ConfirmPass == '') {
        alert("Please fill in all other fields!")
    }



    if (LastName != '' && FirstName == '' && Email == '' && Pass == '' && ConfirmPass == '') {
        alert("Please fill in all other fields!")
    }



    if (Email != '' && LastName == '' && FirstName == '' && Pass == '' && ConfirmPass == '') {
        alert("Please fill in all other fields!")
    }



    if (Pass != '' && LastName == '' && FirstName == '' && Email == '' && ConfirmPass == '') {
        alert("Please fill in all other fields!")
    }




    // Password Confirmation

    if (Pass != ConfirmPass && FirstName != '' && LastName != '' && Email != '' && Pass != '' && ConfirmPass != '') {
        alert("Please confirm your Password!")
    }



    //Succesfully Signed Up alert

    if (FirstName != '' && LastName != '' && Email != '' && Pass != '' && ConfirmPass != ''
        && document.getElementById("Male").checked == true
        && selectedValue != ''
    ) {
        alert("Succesfully Signed Up!")
    }



    if (FirstName != '' && LastName != '' && Email != '' && Pass != '' && ConfirmPass != ''
        && document.getElementById("Female").checked == true
        && selectedValue != ''
    ) {
        alert("Succesfully Signed Up!")
    }



    if (FirstName != '' && LastName != '' && Email != '' && Pass != '' && ConfirmPass != ''
        && document.getElementById("Other").checked == true
        && selectedValue != ''
    ) {
        alert("Succesfully Signed Up!")
    }




}