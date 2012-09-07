$(function() {
	var winHeight = $(window).height();
	var tocHeight = $('#toc').outerHeight() + $('#toc').position().top;
	if (winHeight > tocHeight + 200) {
		$('#toc ul.nav').affix();
	}

	// go to correct class members tab
	var activeTab = $('a[href="' + location.hash + '"]');
	activeTab && activeTab.tab('show');

	// class members
	$('table.table-members').on('click', 'a[data-tab]', function() {
		var tab = $(this).data('tab');
		var tabMember = $(this).data('tab-member');
		$('#classTabs [href="' + tab + '"]').tab('show');
		var offset = $(tab + '-' + tabMember).offset();
		$('html, body').animate({scrollTop:offset.top - 75});
	});

	// view options
	$('#viewOptions input')
		.each(function(i, e) {
			$('#main').toggleClass('hide-' + $(e).val(), !$(e).is(':checked'));
		})
		.on('click', function() {
			$('#main').toggleClass('hide-' + $(this).val(), !$(this).is(':checked'));
		});
		
});