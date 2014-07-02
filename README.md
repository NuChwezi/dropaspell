Drop-A-Spell!
=============

Drop-A-Spell is an experimental chrome extension that allows a user to modify content on websites they visit using voice commands called "spells".

Currently Supported Spells:
---------------------------

The following spells are currently supported:

- **Off** : this spell tells the browser to hide the body of the current website
- **On** : this spell tells the browser to show the body of the current website (reverses the **Off** spell).
- **Hide [INSERT-CLASS-OR-TAG]** : this spell tells the browser to hide any elements on the page with the CSS class or HTML tag specified. 
- **Show [INSERT-CLASS-OR-TAG]** : this spell tells the browser to show any elements on the page with the CSS class or HTML tag specified. 
- **Hide tag [INSERT-TAG]** : this spell tells the browser to hide any elements on the page in the HTML tag specified. 
- **Show tag [INSERT-TAG]** : this spell tells the browser to hide any elements on the page in the HTML tag specified. 
- **Hide class [INSERT-CLASS]** : this spell tells the browser to hide any elements on the page with the CSS class specified. 
- **Show class [INSERT-CLASS]** : this spell tells the browser to show any elements on the page with the CSS class specified. 
- **Shake [INSERT-CLASS-OR-TAG]** : this spell tells the browser to shake any elements on the page with the CSS class or HTML tag specified. 
- **Freeze [INSERT-CLASS-OR-TAG]** : this spell tells the browser to freeze (make still) any elements on the page with the CSS class or HTML tag specified. 
- **Am a Ninja** : this special spell tells the browser to hide any elements on the page with the special CSS class **help**. 
- **Help** : this special spell tells the browser to show any elements on the page with the special CSS class **help**. 


Well, because Speech Recognition features (and generally the Web Speech APIs) are still very experimental and unreliable,
this extension will best work in latest versions of Chrome, and in my tests, a good microphone is a critical element of success to.

Otherwise, that's all the magic power we can promise to give you for now :-)

If you can think of more awesome generic spells we can add to the extension, send a pull-request or fork and share...

Cool! I want to Try this!
-------------------------

Well, you can clone this repo and build the Chrome extension on your machine, then head over to any webpage and try it out.

Or, you can just dash to [Drop-A-Spell demo page](http://nuchwezi.github.io/dropaspell) and follow the instructions given to get started.


Future Direction (TODO):
========================

Just imagine the present and the future of being able to communicate with, control and live alongside software and machines naturally! Well, human-computer interfaces like those incorporating speech recognition are just one of the steps towards this amazing future, and this current project is meant to exploit and demostrate part of the awesomeness that's already been made possible with current advancements in Speech Recognition _on the web_.

More work remains to be done, but in particular, for **Drop-A-Spell**, the following are part of what remains to be manifested eventually:

- The ability to leverage offline/native speech recognition engines
- Extend the range of control possible with _spells_
    - Ability to move elements around the webpage, just like a mouse/joystick would.
    - Ability to transform elements in size or shape
    - Ability to transform elements in appearance
    - Ability to click or select particular elements just like a mouse would.
    - Ability to fill forms and post them
    - Ability to animate elements on the webpage


The good thing is, with CSS3 and many other current and emerging web technologies, almost all the above TODOs are currently feasible (or soon will be). Just imagine the possibilities!


I don't do magick, can I help?
------------------------------

Well, you probably do some, you just don't know it yet. Anyways, if you'd like to hack this extension or contribute more spells, 
refine stuff, etc, just clone the repo and try the alchemy yourself, thereafter, you could make a pull-request and contribute to the cause. 

Spread the word!


Beware!
=======

Remember: every time you run this extension on a given domain/webpage, you give it permission to access/use your microphone, so if you are paranoid, just ensure that once you are done hexing their webpage, ensure the permission has been reversed. For Chrome, find more info on this [here](https://support.google.com/chrome/answer/2693767?p=ib_access_cam_mic&rd=1)

If you don't trust this extension, well, just don't install it! It's magic after all...
But you could easily look under-the-hood, the only thing you should worry about is the "system" getting access to your speech... but you also keep asking for freedom of speech, right? Now, put that to good use here...


Credits
========

Much Credit goes to the author of [annyang](https://github.com/TalAter/annyang), for that awesome Speech Recognition interface lib.

Licence
=======

Licensed under [MIT](https://github.com/NuChwezi/dropaspell/blob/master/LICENSE).
