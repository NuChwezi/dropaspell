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
            'hide': function() {
                status("Hiding the body...");
                $('body').animate({opacity: '0'});
            },
		// Show body of document
            'show': function() {
                status("Showing the body...");
                $('body').animate({opacity: '1'});
            },
		// Hide all elements with given CSS class name
            'hide *class': function(class_name) {
                status("Hiding all elements with css class: " + class_name + "");
                $('.'+class_name).hide();
            },
		// Show all elements with given CSS class name
            'show *class': function(class_name) {
                status("Showing all elements with css class: " + class_name + "");
                $('.'+class_name).show();
            },
		// SPECIAL : hide any element with class "help"
            'Am a Ninja': function() {
                status("Hiding all elements with css class 'help'");
                $('.help').hide();
            },
		// SPECIAL : show any element with class "help"
            'Help': function() {
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
