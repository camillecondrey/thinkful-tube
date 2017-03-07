$(document).ready(function () { 

var youtube_base_url = 'https://www.googleapis.com/youtube/v3/search';

var nextPageToken; 

var prevPageToken; 

function getDataFromApi(searchTerm, token) {	
	var query = 
	{
		'part': 'snippet',
		'key': 'AIzaSyDI0Hu0knTBdaZF6IbrJPKEq-Fk-2mf2lQ',
		'q': searchTerm, 
		'pageToken': token
	};
	$.getJSON(youtube_base_url, query, function (data){	
			nextPageToken = data.nextPageToken
			prevPageToken = data.prevPageToken

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
		console.log(item);
		console.log(item.snippet.thumbnails.medium.url);
		// html += '<p class="item">' + item.snippet.title + 
		// '</p><a href="https://www.youtube.com/watch?v=">' + ' <img src='" + item.snippet.thumbnails.medium.url 
		// + "'/></a>";
		html += `<div class="result-container"<p class="item">${item.snippet.title}</p>
		<a href="https://www.youtube.com/watch?v=${item.id.videoId}">
		<img src="${item.snippet.thumbnails.medium.url}"/></a></div>` 
		// console.log(x);
	});
	

	
	$('.js-search-results').html(html);
};

$('#Next').click(function(event){
	getDataFromApi($('.js-query').val(), nextPageToken);
});

$("#Previous").click(function(event){
	getDataFromApi($('.js-query').val(), prevPageToken);
});

$('#submit').click(function(event){
	$('#Next').removeClass('hidden');
	$('#Previous').removeClass('hidden');
});


$('.js-search-form').submit(function(event){
	event.preventDefault();
	getDataFromApi($('.js-query').val(), null);
});
});


