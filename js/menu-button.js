var addEvent = function( object, type, callback ) {

    if ( object == null || typeof( object ) == 'undefined' ) return;

    if ( object.addEventListener ) {
        object.addEventListener( type, callback, false );
    } else if ( object.attachEvent ) {
        object.attachEvent( "on" + type, callback );
    } else {
        object[ "on" + type ] = callback;
    }

};

/* Functionality for the menu button */
function showSidebar() {
	var sidebar = document.getElementById( 'sidebar' );
	sidebar.style.display = 'block';
	sidebar.style.width = '100%';
	document.getElementById( 'menu-icon' ).onclick = closeSidebar;
}

function closeSidebar() {
	var sidebar = document.getElementById( 'sidebar' );
	sidebar.style.display = 'none';
	document.getElementById( 'menu-icon' ).onclick = showSidebar;
}

function responsive() { 
	var sidebar = document.getElementById( 'sidebar' );
	var menu = document.getElementById( 'menu-section' );
	var content = document.getElementById( 'content' );
	var menu_section = document.getElementById( 'menu-section' );
	

	if ( window.innerWidth > 1050 ) {
		sidebar.style.display = 'block';
		sidebar.style.width = '25%';
		content.style.width = '75%';
		menu_section.style.display = 'none';
	}
	else {
		sidebar.style.display = 'none';
		content.style.width = '100%';
		menu_section.style.display = 'block';
	}
}

addEvent(window, "resize", responsive);

$(document).ready( function() {
	
	$('#up-action').click( function() {
		$('body, html').animate({
			scrollTop: '0px'
		}, 300);
	});

	$(window).scroll( function() {
		if ( $(this).scrollTop() > 0 )
			$('#up-action').slideDown(300);
		else
			$('#up-action').slideUp(300);
	})
});