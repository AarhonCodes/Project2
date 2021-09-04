//Search and submit button Validation

function Check() {
    var UserInput = document.getElementById("Input").value

    if (UserInput == '') {
        alert("Please enter something before submitting!")
    } else {
        alert("Error! no results found!")
    }
}
