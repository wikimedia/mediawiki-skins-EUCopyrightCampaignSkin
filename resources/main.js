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

		var languageCodeWhitelist = mw.config.get( 'euccLanguageCodes' );
		var languageSelectorBtn = OO.ui.infuse( 'language-select-button' );
		languageSelectorBtn.on( 'change', function( value ) {
			if( languageCodeWhitelist.indexOf( value ) === -1 ) {
				return;
			}

			window.location.search = 'uselang=' + value; //Reloads the page
		} );
	});

})( mediaWiki, jQuery, OO );