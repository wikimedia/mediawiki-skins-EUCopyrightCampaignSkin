(function( mw, $, OO ) {
	$(function() {
		//Smooth scrolling "Take actions"
		$( '.take-action-button a' ).on( 'click', function( e ) {
			if ( this.hash !== "" ) {
				e.preventDefault();
				var hash = this.hash;
				$( 'html, body' ).animate({
					scrollTop: $( hash ).offset().top
					}, 800, function() {
					window.location.hash = hash;
				});
			}
		} );

		var languageCodeWhitelist = ['bg', 'hr', 'cs', 'da', 'nl', 'en',
			'et', 'fi', 'fr', 'de', 'el', 'hu', 'ga', 'it', 'lv', 'lt', 'mt',
			'pl', 'pt', 'ro', 'sk', 'sl', 'es', 'sv' ];

		var languageSelectorBtn = OO.ui.infuse( 'language-select-button' );
		languageSelectorBtn.on( 'change', function( value ) {
			if( languageCodeWhitelist.indexOf( value ) === -1 ) {
				return;
			}

			window.location.search = 'uselang=' + value; //Reloads the page
		} );

		var country = 'unknown';
		if( window.Geo && window.Geo.country ) {
			country = window.Geo.country;
		}
		var trackData = {
			country: country,
			language: mw.config.get( 'wgUserLanguage' )
		};

		mw.track( 'event.EUCCVisit', trackData );
	});

})( mediaWiki, jQuery, OO );