$(document).ready (function(){


	var domain =  'http://104.238.96.209/~newsimtms/test/FizzServer';
var id = id;


	$('#profileBtn').click (function (){
		$.ajax({
			url: "http://104.238.96.209/~newsimtms/test/FizzServer/user_data.php?type=user_data&id=" + id + "",
			//url:"http://104.238.96.209/~newsimtms/test/FizzServer/user_data.php?type=user_data&id=1",
			type:"GET",
			dataType: "json",
			ContentType:"application/json",
			success: function (response)
				{
					//alert(JSON.stringify(response));
					//$('#message').append(JSON.stringify(response));
					//var jsons = (JSON.stringify(response));
					var movies = [(JSON.stringify(response))];

					var transforms = {
					"shorthand":{"<>": "li", "children": [
							{"<>":"b", "html":"${id}"},
							{"<>":"b", "html":"${username}"},
							{"<>":"b", "html":"${password}"},
							{"<>":"b", "html":"${name}"},
							{"<>":"b", "html":"${email}"},

							{"<>":"span", "html":"${joining_date}"}
						]},

					"longhand":{"<>": "li", children: [
							{"<>": "b", "html": function(){return(this.id);}},
							{"<>": "span", "html": function(){return(this.username);}}
						]}
				};

				var html1 = json2html.transform(movies,transforms.shorthand);

				//var html2 = json2html.transform(movies,transforms.longhand);

				//document.write('<h1>Shorthand Test</h1>'+ html1 + '<br><br>' + html2);

				document.write('<h1>Shorthand Test</h1>'+ html1 );
alert(transforms);

				},
				error: function(err)
				{
					alert(JSON.stringify(err));
				}
			})
		});
	});
