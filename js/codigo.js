'use strict'

$(function() {

	$('[data-role=navbar] a').on('click', function() {
		$.mobile.changePage($(this).attr('data-href'))
	})

	$('#grito').on('pageshow', function() {
		alert('Ay!')
	})

	$('#botonbuscar').click(function() {
		let buscar = $('#cajatexto').val()
		$('#mensajes').html('Buscando ' + buscar + ' en Internet')

		setTimeout(function() {
			$('[data-role=listview]').html('')
			let resultados = [
				'Aprendiendo Javascript',
				'Javascript: The Good Parts',
				'Closures',
				'Qué es Mixin?',
				'JQuery Mobile'
			]
			$('#mensajes').html('Se encontraron ' + resultados.length + ' resultados')

			$.each(resultados, function(index, resultado) {
				$('[data-role=listview]').append('<li><a href="#">' + resultado + '</a></li>')
			})
			$('[data-role=listview]').listview('refresh')
		}, 2000)
	})

})