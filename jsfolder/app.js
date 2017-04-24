function getApi(query){
var url = 'http://itunes.apple.com/search?term='+query+'+&limit=25&callback=?';
  
  $.getJSON(
       url,
      function (data) {
         console.log(data)
     });

 };

function displayResults(results){
	for (var i = 0; i < results.items.length; i++) {
		var html = "";
        html += ""
	$('#search-results ul').append('<li>' + results.items[i].artistname + '</li>' + '<img src="'+results.items[i].artistArtwork+'"></li>');
	};
});
}
}

$(document).ready(function(){
	$( '#search-form').submit(function(event){
	event.preventDefault();
	var query = $('#query').val();
	getApi(query);
	}
	)

	;
});
