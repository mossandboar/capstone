function getApi(query){
	var url = 'http://itunes.apple.com/search?term='+query+'+&callback=?';
  
  $.getJSON(
       url,
      function (data) {
         console.log(data);
         displayResults(data);
     });

 }


function displayResults(results){
	for (var i = 0; i < results.results.length; i++) {
         var html = '<li>' + results.results[i].artistname + '</li>';
         html += '<img src="'+results.results[i].artistArtwork+'"></li>';
	 $('#search-results ul').append(html);
	}
}

$(document).ready(function(){
	$( '#search-form').submit(function(event){
	event.preventDefault();
	var query = $('#query').val();
	getApi(query);
	});
});





