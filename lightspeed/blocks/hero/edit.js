/**
 * External dependencies
 */

import meta from './block.json';

import Edit from '../../assets/js/edit.js'

export default function edit( {
	attributes,
	setAttributes,
	context,
	clientId
} ) {
	return( Edit( meta, 'hero', attributes, setAttributes, context, clientId ) )
}
