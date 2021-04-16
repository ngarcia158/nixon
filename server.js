



function handleEnter(e) {
    if(e.keyCode === 13){
        validate()
    }
  }
function validate(){

    if(username !== "" && password !== ""){
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        alert('Hello ' + username + " " + password + ' Are you ready to vote for the next presidential race. Press enter to continue');
        location.replace("pictures.html");
        return false;
        
    }else{
        alert("Username or password is incorrect, please try again.");
    }
}
