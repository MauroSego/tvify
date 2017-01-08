/**
* Module dependencies
**/

import $ from 'jquery'
import page from 'page'
import getShows from  'src/tvmaze-api-client' 
import renderShows from 'src/render'
import $tvShowsContainer from 'src/tv-shows-container'

page('/', function(ctx, next){
  if(!localStorage.shows){
  		getShows(function (shows){
        $tvShowsContainer.find('.loader').remove();
        localStorage.shows = JSON.stringify(shows);
        renderShows(shows)
  		})
    } else {
    renderShows(JSON.parse(localStorage.shows));
  }
});

page();