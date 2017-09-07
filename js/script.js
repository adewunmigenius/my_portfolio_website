var $overlay = $('<div id="overlay"></div>');
var $image = $('<img>');
var $caption = $('<p></p>');

//Add image to overlay
$overlay.append($image);
$overlay.append($caption);

//Add overlay to body of app
$('body').append($overlay);

$('#languages a, #gallery a').click(function(event){
	event.preventDefault();
	//get anchor link href
	var imglocation = $(this).attr('href');
	//update the overlay with image
	$image.attr('src', imglocation);
	//show overlay
	$overlay.show();
	//get caption from paragraph text
	var captionText= $(this).children('p').html();
	$caption.text(captionText);
});
$overlay.click(function(){
	$(this).hide();
});