$(document).ready(function($) {
	
	$('.lightbox_trigger').click(function(e) {
		
		//prevent default action (hyperlink)
		e.preventDefault();
		
		//Get clicked link href
		var image_href = $(this).attr("href");
		
		/* 	
		If the lightbox window HTML already exists in document, 
		change the img src to match the href of whatever link was clicked
		
		If the lightbox window HTML doesn't exists, create it and insert it.
		(This will only happen the first time around)
		*/
		
		if ($('#lightbox').length > 0) { // #lightbox exists
			alert(lightbox.length);
			//place href as img src value
			$('#content').html('<img src="' + image_href + '" />');
			//show lightbox window - you could use .show('fast') for a transition
			$('#lightbox').show();
		}
		
		else { //#lightbox does not exist - create and insert (runs 1st time only)
			//create HTML markup for lightbox window
			var lightbox = 
			'<div id="lightbox">' +
				'<p>Click to close</p>' +
				'<div id="content">' + //insert clicked link's href into img src
					'<img src="' + image_href +'" />' +
				'</div>' +	
			'</div>';	
			//insert lightbox HTML into page
			$('body').append(lightbox);
		}
		
	});
	
	//Click anywhere on the page to get rid of lightbox window
	$('body').on('click', function() { 
		$('#lightbox').hide();
	});

});


//  When clicked, the image should open with an opaque background
//  so the user can see it large on top of all existing content. 
//  It should also be centered vertically and horizontally.



// When the user clicks on the image or its border, 
// the lightbox should close.



