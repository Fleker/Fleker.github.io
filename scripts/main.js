jQuery(document).ready(function($){
	var timelineBlocks = $('.cd-timeline-block'),
		offset = 0.8;

	//hide timeline blocks which are outside the viewport
	hideBlocks(timelineBlocks, offset);

	//on scolling, show/animate timeline blocks when enter the viewport
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) 
			? setTimeout(function(){ showBlocks($('.cd-timeline-block'), offset); }, 100)
			: window.requestAnimationFrame(function(){ showBlocks($('.cd-timeline-block'), offset); });
	});

	function hideBlocks(blocks, offset) {
		blocks.each(function(){
			( $(this).offset().top > $(window).scrollTop()+window.innerHeight*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
		});
	}

	function showBlocks(blocks, offset) {
		blocks.each(function(){
            // console.log($(this).offset().top, $(window).scrollTop()+window.innerHeight*offset);
			( $(this).offset().top <= $(window).scrollTop()+window.innerHeight*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
		});
	}

	$('#contact-me').style.display = 'block';
});

function rehide() {
    $('.cd-timeline-block').each(function(){
        ( $(this).offset().top > $(window).scrollTop()+window.innerHeight*0.8 ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
}