function login() {
	var username = document.getElementById('username').value;
	var password = document.getElementById('password').value;
	if(!username) {
		alert('必须输入用户名！');
		return;
	}
	if(!password) {
		alert('必须输入密码！');
		return;
	}
	
	if(username != "1" || password != "1111") {
		alert("用户名或密码错误，请重新输入！");	
		return;
	}
	
	if(username === "1" && password === "1111"){
		window.location = "home.html";
		return;
	}
	
}
