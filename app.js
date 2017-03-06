$(document).ready(function () { 

var youtube_base_url = 'https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm) {	
	var query = 
	{
		'part': 'snippet',
		'key': 'AIzaSyDI0Hu0knTBdaZF6IbrJPKEq-Fk-2mf2lQ',
		'q': searchTerm 
	};
	$.getJSON(youtube_base_url, query, function (data){	
			if (data.pageInfo.totalResults > 0){
				displayYoutubeSearchData(data.items);
		}
		else {
			// displayYoutubeSearchData(data.items);
			alert('No Results!');
		}
		});
};


function displayYoutubeSearchData(items) {
	var html = "";
	$.each(items, function (index, item){
	// var html = '';	
		console.log(item.snippet.title);
		console.log(item.snippet.thumbnails.medium.url);
		html += '<p class="item">' + item.snippet.title + 
		"</p><img src='" + item.snippet.thumbnails.medium.url 
		+ "'/>";
	});
	

	
	$('.js-search-results').html(html);
};


$('.js-search-form').submit(function(event){
	event.preventDefault();
	getDataFromApi($('.js-query').val());
});
});


// 	if (data.Search) {
// 		data.Search.forEach(function(item){
// 			resultElement += '<p>' + item.Title + '</p>';
// 		});
// 	}
// 	else {
// 		resultElement += '<p>No results</p>';
// 	}
// 	$('.js-search-results').html(resultElement);
// }

// function watchSubmit() {
// 	$('js-search-form').submit(function(event){
// 		event.preventDefault();
// 		var query = $(this).find('.js-query').val();
// 		getDataFromApi(query, displayYoutubeSearchData);
// 	});
// }

// $(function(){watchSubmit();});
