// WOW

(function() {
	new WOW({
		mobile: false
	}).init();
})();

// Menu
(function (window, document) {
var menu = document.getElementById('menu'),
		WINDOW_CHANGE_EVENT = ('onorientationchange' in window) ? 'orientationchange':'resize';

function toggleHorizontal() {
		[].forEach.call(
				document.getElementById('menu').querySelectorAll('.custom-can-transform'),
				function(el){
						el.classList.toggle('pure-menu-horizontal');
				}
		);
};

function toggleMenu() {
		// set timeout so that the panel has a chance to roll up
		// before the menu switches states
		if (menu.classList.contains('open')) {
				setTimeout(toggleHorizontal, 500);
		}
		else {
				toggleHorizontal();
		}
		menu.classList.toggle('open');
		document.getElementById('toggle').classList.toggle('x');
};

function closeMenu() {
		if (menu.classList.contains('open')) {
				toggleMenu();
		}
}

document.getElementById('toggle').addEventListener('click', function (e) {
		toggleMenu();
		e.preventDefault();
});

window.addEventListener(WINDOW_CHANGE_EVENT, closeMenu);
})(this, this.document);

// Scroll Nav Bar
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            header = document.querySelector("nav");
        if (distanceY > shrinkOn) {
            classie.add(header,"active");
        } else {
            if (classie.has(header,"active")) {
                classie.remove(header,"active");
            }
        }
    });
}
window.onload = init();

$("#mc-embedded-subscribe-form").submit(function(event) {

      /* stop form from submitting normally */
      event.preventDefault();

      /* get the action attribute from the <form action=""> element */
      var $form = $( this ),
          url = $form.attr( 'action' ),
					email = $('#mce-EMAIL').val();

      /* Send the data using post with element id name and name2*/
      var posting = $.post( url, {
				email: email,
				csrfmiddlewaretoken: window.CSRF_TOKEN
			} );

      /* Alerts the results */
      posting.done(function( data ) {
				if (data['status'] === "success") {
					$form.hide();
					$('#mce-success').show();
					$('#mce-failure').hide();
				} else {
					$('#mce-failure').show();
				}
      });

			fbq('track', 'CompleteRegistration', {
				email: email
			});
    });
