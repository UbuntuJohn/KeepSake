$('#regAcc').on('click', function() {
		var username = $('#username').val(),
		password = $('#password').val(),
		email = $('#email').val(),
		console.log('Testing registration');

		$.ajax({
			url:"xhr/register.php",
			type: "post",
			dataType: "json",
			data:  {
				username: username,
				password: password,
				email: email
			},
			success: function(response) {
				console.log("test registration");

				if(response.error) {
					alert(response.error);
				} else {
					window.location.assign("dashboard.html");
				};
			}
		});
	});