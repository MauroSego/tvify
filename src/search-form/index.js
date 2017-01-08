/**
* Module dependencies
**/

import $ from 'jquery'
import $tvShowsContainer from 'src/tv-shows-container'
import { searchShows } from 'src/tvmaze-api-client'
import renderShows from 'src/render'
import page from 'page'

$('#app-body')
	.find('form')
	.submit(function onsubmit (ev){
		ev.preventDefault();


		var busqueda = $(this)
		.find('input[type="text"]')
		.val();

		page(`/search?q=${busqueda}`)
})