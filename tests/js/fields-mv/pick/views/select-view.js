/*global assert */
import {SelectView} from '~/ui/fields-mv/_src/pick/views/select-view';
import {PodsMVFieldModel} from '~/ui/fields-mv/_src/core/pods-field-model';
import {RelationshipCollection} from '~/ui/fields-mv/_src/pick/relationship-model';

let pickFormatTypes = [
	{ type: 'single', isMultiple: false },
	{ type: 'multi', isMultiple: true }
];

/**
 * SelectView tests
 */
describe( 'SelectView', function () {
	let view;
	let fieldModel = new PodsMVFieldModel();
	let collection = new RelationshipCollection();

	/**
	 * Post-test clean-up, after every it()
	 */
	afterEach( function () {
		jQuery( document.body ).empty();

		if ( view instanceof Backbone.View ) {
			view.destroy();
		}
	} );

	/**
	 * Test single/multi select
	 */
	pickFormatTypes.forEach( function ( thisFormatType ) {
		let multiple;

		it( 'respects ' + thisFormatType.type + ' select', function () {
			fieldModel.set( 'fieldConfig', { pick_format_type: thisFormatType.type } );

			view = new SelectView( {
				fieldModel: fieldModel
			} );
			view.render();
			jQuery( document.body ).append( view.$el );

			multiple = jQuery( 'select' ).prop( 'multiple' );
			assert.equal( multiple, thisFormatType.isMultiple );
		} );
	} );

} );

