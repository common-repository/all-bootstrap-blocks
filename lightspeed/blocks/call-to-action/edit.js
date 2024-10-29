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
	return( Edit( meta, 'call_to_action', attributes, setAttributes, context, clientId ) )
}
