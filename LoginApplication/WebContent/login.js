function validate(){
	var email = document.getElementById("email").value;
	var pass = document.getElementById("pass").value;
	if(email=="" || pass==""){
		alert("*field must not be empty.. ");
	}
}