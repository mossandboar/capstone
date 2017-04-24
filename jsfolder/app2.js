


function getApi(query){
	var url = 'http://itunes.apple.com/search?term='+query+'&limit=5&offset=0&callback=?';
    
    


  $.getJSON(
       url,
      function (data) {
         console.log(data);
         displayResults(data);

     });

 }


function displayResults(results){
	for (var i = 0; i < results.results.length; i++) {
         var html = '<li><a href="' + results.results[i].artistViewUrl + '">' + results.results[i].artistName + '</a>';
         html += '<section>' + results.results[i].longDescription +' </section>';
         html += '<img src="' + results.results[i].artworkUrl100 + '"></li>';
	     
	 $('#search-results ul').append(html);
	}
}


$(document).ready(function(){
	$( '#search-form').submit(function(event){
	event.preventDefault();
	var query = $('#query').val();
	getApi(query);
	
	});

$('.result-list').on('click' , 'li', function(event){
	console.log( 'hello' );
    $( this ) .find( 'section').css( 'display' , 'block');





});




});





