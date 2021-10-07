var objPeople = [
	{
		username: 'whoistheboss',
		password: 'imtheboss'
	},
	{
		username: 'whoisnottheboss',
		password: 'imnottheboss'
	}

]

// login functionality
function login() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert(username + ' is logged in!!!')
			break
		} else {
			alert('incorrect username or password')
		}
	}
}
