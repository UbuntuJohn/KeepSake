/*  
	Keepsake Project Management
	Author: John Keenan
*/

(function($){
	
	/*
	===============================================
	=========================== APPLICATION GLOBALS	
	*/
	
	var win = $(window),
		body = $(document.body),
		container = $('#container'),	// the only element in index.html
		currentUser = {}
	;

	/* Login */

	$('#submit').on("click", function() {
		var user = $('#username').val();
		var pass = $('#password').val();
		console.log("This notifies you if the password is working.");
		
		$.ajax({
			url:"xhr/login.php",
			type: "post",
			dataType: "json",
			data:  {
				username: user,
				password: pass
			},
			success: function(response) {
				console.log("test user");

				if(response.error) {
					alert(response.error);
				} else {
					window.location.assign("dashboard.html");
				};
			}
		});
	});

	
	
	/* user registration */

	$('#regAcc').on('click', function(e) {
		e.preventDefault();
		var username = $('#username').val(),
		password = $('#password').val(),
		email = $('#email').val();
		console.log('Account Registration Complete!');

		/*$('#regNotify').toggle(); */

		$.ajax({
			url: "xhr/register.php",
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
					//This line is not working and I don't know why
					window.location.assign('dashboard.html');
				};
			}
		});
	});

	/* new project */

	$('#newProj').on('click', function(e) {
		e.preventDefault();
		var projectName = $('#projName').val(),
		projectDescription = $('#projDesc').val(), 
		dueDate = $('#projDue').val(), 
		status = $('#status').val();
		console.log('Variables are set!');

		$.ajax({
			url: "xhr/new_project.php",
			type: "post",
			dataType: "json",
			data: {
				projectName: projectName,
				projectDescription: projectDescription,
				dueDate: dueDate,
				status: status
			},
			success: function(response) {
				console.log('Testing for success');

				if(response.error) {
					alert(response.error);
				} else {
					window.location.assign("projects.html");
				};

			}

		});
	});

	/* new task */

	$('#newTask').on('click', function(e) {
		e.preventDefault();
		var taskName = $('#taskName').val(),
		taskDesc = $('#taskDesc').val(),
		taskDue = $('#taskDue').val(),
		status = $('#status').val(),
		projId = 1;
		console.log('Variables are set!');

			$.ajax({
			url: "xhr/new_task.php",
			type: "post",
			dataType: "json",
			data: {
				taskName: taskName,
				taskDescription: taskDesc,
				dueDate: taskDue,
				status: status,
				projectID: projId
			},
			success: function(response) {
				console.log('Testing for success');

				if(response.error) {
					alert(response.error);
				} else {
					window.location.assign("tasks.html");
				};
			}
		});
	});



/* Log out */

	$('#logOut').on("click", function(e) {
		e.preventDefault();
		$.get('xhr/logout.php', function() {
			window.location.assign('logout.html');
		});
	});

	// delete projects is found in script.js

	
	/*
	===============================================
	========================= APPLICATION FUNCTIONS	
	*/
	
	var loadApp = function(){};
	
	
	var loadLanding = function(){
		$.get('templates/landing.html', function(html){
			var h = $(html);
			var landingCode = h.find('#template_landing').html();
			$.template('landing', landingCode);		// compile template
			$.render(currentUser, 'landing');		// use template
			container.html(landingCode);
		});
	};
	
	
	var checkLoginState = function(){
		$.ajax({
			url: 'xhr/check_login.php',
			type: 'get',
			dataType: 'json',
			success: function(response){
				// if user, loadApp()
				// if error, loadLanding()
			}
		});
	};
	
	

	// 	============================================
	//	SETUP FOR INIT
		
	var init = function(){
	
		checkLoginState();
	};
	
	
	init();
	
		
	/*
	===============================================
	======================================== EVENTS	
	*/
	
	win.on('submit', '#user-reg-form', function(){
		
		return false;
	});
	
	/*	
	==================================== END EVENTS 
	===============================================
	*/
		
		

	
})(jQuery); // end private scope




