

$(document).ready(function() {
    // Select all elements with the class 'perso'
    $('.perso').on('click', function() {
        // Check if the clicked character already has a cross
        if (!$(this).find('.cross').length) {
            // Create a cross div and append it to the character
            $(this).append('<div class="cross">X</div>');
        } else {
            // Remove the cross if it already exists (toggle)
            $(this).find('.cross').remove();
        }
    });
});


