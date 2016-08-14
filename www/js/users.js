$(document).ready (function(){

	var username = $('#username').val();
	var password = $('#password').val();

	$('#info').click (function (){
		$.ajax({

			//url:"http://maong.local/afizzquizapp/json_api.php",
			url: "https://104.238.96.209/~newsimtms/test/FizzServer",
		//	url: "http://104.238.96.209/~newsimtms/test/qu/afizzquizapp",
			type:"GET",
			dataType: "json",
		//	data: {type:"login", username: "admin", password:"e52e7ce4ac2458867d05eaad577560db"},
			data: {type:"login", username: username, password: password },
			ContentType:"application/json",
			success: function (response)
				{
					alert(JSON.stringify(response));
					//	$('#message').append(JSON.stringify(response));
				},
				error: function(err)
				{
					alert(JSON.stringify(err));
				}
			})
		});
	});
