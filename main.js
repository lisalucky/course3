function login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if(!username) {
		alert('���������û�����');
		return;
	}
	if(!password) {
		alert('�����������룡');
		return;
	}
	
	if(username != "1" || password != "1111") {
		alert("�û���������������������룡");	
		return;
	}
	
	if(username === "1" && password === "1111"){
		window.location = "home.html";
		return;
	}
	
}
