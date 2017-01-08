/**
* Module dependencies
**/

import $ from 'jquery'
import $tvShowsContainer from 'src/tv-shows-container'

var template = `<article class="tv-show">  
		<div class="left img-container"> 
			<img src=:img: alt=":img alt:">
		</div>
		<div class="left info">
			<h1>:name:</h1>
			<p>:summary:</p>
      <button class="like">Like</button>
		</div>
	</article>`;

export default function renderShows(shows){
$tvShowsContainer.find('.loader').remove();
	shows.forEach(function (show) {
		var article = template
			.replace(':name:', show.name)
			.replace(':img:', show.image ? show.image.medium : '')
			.replace(':summary:', show.summary)
			.replace(':img alt:', show.name + " Logo")
	
		var $article = $(article)
		$article.hide();
		$tvShowsContainer.append($article.fadeIn('1500'))
	})
}