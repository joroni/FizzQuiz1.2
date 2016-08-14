
	//Test the short hand notation 
	// as well as the direct reference via this
    var movies = [
    	{ "id": "1", "username": "Admin", "password": "e52e7ce4ac2458867d05eaad577560db", "name": "Site Admin", "joining_date": "aug-1-2016" },
		{ "id": "2", "username": "Admin2", "password": "e52e7ce4ac2458867d05eaad577560db", "name": "Site Admin2", "joining_date": "aug-2-2016" }
	];
	
	

	var transforms = {
		"shorthand":{"<>": "li", "children": [
				{"<>":"span", "html":"${id}"},
				{"<>":"b", "html":"${username}"},
				{"<>":"span", "html":"${name}"},
				{"<>":"span", "html":"${joining_date}"}
				
			]},

		"longhand":{"<>": "li", children: [
				{"<>": "b", "html": function(){return(this.name);}},
				{"<>": "span", "html": function(){return(this.year);}}
			]}
	};
        
    var html1 = json2html.transform(movies,transforms.shorthand);
    
    var html2 = json2html.transform(movies,transforms.longhand);
    
	document.write('<h1>Shorthand Test</h1>'+ html1 + '<br><br>' + html2);
