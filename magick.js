/*
 * This is where the drop-a-spell magick actually takes place ;-)
 * -------------------------------------------------------------
 *  Beware: 
 *      this is a work in progress, so I make no guarantees on quality or behaviour!
 *      use at own risk that is... after all, magick, like fire, can cook a meal or burn a crib!
 */

function status(msg){
    console.log(msg);
}

function initMagick (){

    status('starting...');
    if (annyang) {
        annyang.debug(true);// currently, we'll need to see what's going on in here...
        status("Looks like we can cast spells here...");
        // our spells will get specified here...
        var spells = {
		// Hide body of document
            'off': function() {
                status("Hiding the body...");
                $('body').animate({opacity: '0'});
            },
		// Show body of document
            'on': function() {
                status("Showing the body...");
                $('body').animate({opacity: '1'});
            },
		// Hide all elements with given HTML tag or CSS class name
            'hide *class_or_tag': function(class_or_tag) {
                status("Hiding all elements with tag or css class: " + class_or_tag + "");
                $('.' + class_or_tag + ',' + class_or_tag).hide();
            },
		// Show all elements with given HTML tag or CSS class name
            'show *class_or_tag': function(class_or_tag) {
                status("Showing all elements with tag or css class: " + class_or_tag + "");
                $('.' + class_or_tag + ',' + class_or_tag).show();
            },
		// Hide all elements with given CSS class name
            'hide class *class_name': function(class_name) {
                status("Hiding all elements with css class: " + class_name + "");
                $('.' + class_name).hide();
            },
		// Show all elements with given CSS class name
            'show class *class_name': function(class_name) {
                status("Showing all elements with css class: " + class_name + "");
                $('.' + class_name).show();
            },
		// Hide all elements with given HTML tag name
            'hide tag *tag_name': function(tag_name) {
                status("Hiding all elements with HTML tag: " + tag_name + "");
                $(tag_name).hide();
            },
		// Show all elements with given HTML tag name
            'show tag *tag_name': function(tag_name) {
                status("Showing all elements with HTML tag: " + tag_name + "");
                $(tag_name).show();
            },
		// Double Width of all elements with given CSS class name
            'grow *class_name': function(class_name) {
                status("Doubling the Width all elements with css class: " + class_name + "");
                $('.' + class_name).each(function(e){
                    $(this).css('width',Number.parseInt($(this).css('width'))*2)
                    // Or should we try something like: $(this).css({ '-webkit-transform': 'scale(2)', 'transform': 'scale(2)'})
                    // only prob with this, it wouldn't grow past the fast invocation - though using transforms would be more generic
                });
            },
		// Half Width of all elements with given CSS class name
            'shrink *class_name': function(class_name) {
                status("Halving the Width all elements with css class: " + class_name + "");
                $('.' + class_name).each(function(e){
                    $(this).css('width',Number.parseInt($(this).css('width'))*0.5)
                });
            },
		// Shake all elements with given HTML tag or CSS class name
            'shake *class_or_tag': function(class_or_tag) {
                status("Shaking all elements with tag or css class: " + class_or_tag + "");
                $('.' + class_or_tag + ',' + class_or_tag).addClass('shake');
            },
		// Free/Make-Still all elements with given HTML tag or CSS class name
            'freeze *class_or_tag': function(class_or_tag) {
                status("Freeze/Make-Still all elements with tag or css class: " + class_or_tag + "");
                $('.' + class_or_tag + ',' + class_or_tag).removeClass('shake');
            },
		// SPECIAL : hide any element with class "help"
            'i ninja': function() {
                status("Hiding all elements with css class 'help'");
                $('.help').hide();
            },
		// SPECIAL : show any element with class "help"
            'help': function() {
                status("Showing all elements with css class 'help'");
                $('.help').show();
            }
        };

        // Add our spells to annyang
        annyang.addCommands(spells);
        status("Done adding spells...");

        // Start listening. 
        // Alternatively, this could be delayed till the user explicitly chooses to active the magick - for example by clicking on the extension button.
        // for now though, we start annyang automatically once the extension script is injected into a page - no opt-in that is.
        annyang.start();
        status("Let the magick begin!");
    } else {
        status("Sorry! Casting spells not possible here!");
    }
}

initMagick();
