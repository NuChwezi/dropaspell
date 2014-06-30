/*
 * This is where the drop-a-spell magick actually takes place ;-)
 * -------------------------------------------------------------
 *  Beware: 
 *      this is a work in progress, so I make no guarantees on quality or behavior!
 *      use at own risk that is... after all, magick, like fire, can cook a meal or burn a crib!
 */

function status(msg){
    console.log(msg);
}

function initMagick (){
    status('starting...');
    if (annyang) {
        annyang.debug(true);
        status("Looks like we can cast spells here...");
        // our spells will get specified here...
        var spells = {
            'hide': function() {
                status("Hiding the body...");
                $('body').animate({opacity: '0'});
            },
            'show': function() {
                status("Showing the body...");
                $('body').animate({opacity: '1'});
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
