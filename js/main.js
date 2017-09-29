
$(function() {
	$('.toggle').click(function() {
		e = $(this).attr('id');
		h2 = $(this).find('h2 span')
		str = h2.text();
		$('.' + e).slideToggle(400)
			if(str == '+') {
				h2.text('-');
			} else {
				h2.text('+');
			}
	});
})