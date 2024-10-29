import classnames from 'classnames';
import * as areoi from '../../../blocks/_components/Core.js';
import { __ } from '@wordpress/i18n';
import ServerSideRender from '@wordpress/server-side-render';
import * as editor from '@wordpress/block-editor';
import * as components from '@wordpress/components';

let loaded = 1;
let ordered = false;

const Edit = ( meta, template, attributes, setAttributes, context, clientId ) => {
	const blockProps = editor.useBlockProps();

	const props = {
		attributes: attributes,
		setAttributes: setAttributes
	}

	const { block_id } = attributes;
    if ( ( !block_id || ( block_id != clientId ) ) && loaded == 1 ) {
        setAttributes( { block_id: clientId } );
        loaded++;
    }

    function get_block_order()
    {
    	var blocks = wp.data.select( 'core/block-editor' ).getBlockOrder();
    	var order = null;
    	
    	blocks.forEach( ( item, index ) => {
    		if ( clientId == item ) {
    			order = index;
    		}
    	});
    	
    	return order;
    }

    wp.data.subscribe( () => {    	
    	var has_changed = wp.data.select( 'core/editor' ).hasChangedContent();
    	if ( !ordered && has_changed && attributes.hasOwnProperty( 'block_order' ) ) {
	    	var order = get_block_order();
	    	if ( attributes.block_order != order ) {
	    		ordered = true;
		        setAttributes( { block_order: order } )
		        ordered = false;
		    }
	    }
    });

    function onChange( key, value ) {
        setAttributes( { [key]: value } );
    }


    	const PostTypesControl = areoi.compose.compose(
	        wp.data.withSelect( function( select, props ) {

	            return wp.data.select('core').getPostTypes({ 
	                per_page: -1
	            });

	        } ) )( function( post_types ) {
	            
	            var output = [{label: 'Loading...', value:''}];

	            if ( typeof post_types != 'undefined' ) {
	                
	                var output = [];

	                for (const [ key, post_type ] of Object.entries( post_types ) ) {
	                    if ( post_type.viewable && post_type.slug != 'attachment' ) {
	                        var new_output = { label: post_type.name, value: post_type.slug }
	                        output.push( new_output );
	                    }
	                }

	            }
	            
	            return (
	                <areoi.components.PanelRow>
	                    <areoi.components.SelectControl
	                        label="Post Type"
	                        labelPosition="top"
	                        help="Specify what posts you would like to display. Child {post type} will display all child posts for the selected post."
	                        value={ attributes.post_type }
	                        options={ output }
	                        onChange={ ( value ) => {
	                            setAttributes( { post_type: value } );
	                            setAttributes( { post_ids: [] } );
	                        } }
	                    />
	                </areoi.components.PanelRow>
	            );
	        }

	    );

	    const PostsDropdownControl = areoi.compose.compose(
	        wp.data.withSelect( function( select, props ) {
	            
	            return {
	                posts: select( 'core' ).getEntityRecords( 'postType', props.post_type, { 
	                    per_page: -1,
	                    orderby : 'title',
	                    order : 'asc',
	                } ),
	            }
	        } ) )( function( props ) {
	            
	            var output = [];
	            if( props.posts ) {

	                var key = 'post_ids';

	                var new_output = <areoi.components.CheckboxControl
	                    label={ 'Show all ' + props.post_type + ' posts' }
	                    labelPosition="top"
	                    value={ 'all' }
	                    checked={ typeof attributes[key] != 'undefined' ? ( attributes[key] ? attributes[key].includes( 'all' ) : false ) : false }
	                    onChange={ function( value ) {
	                        
	                        var newArr = [];
	                        if ( typeof attributes[key] != 'undefined' ) {
	                            var newArr = attributes[key].slice();
	                        }

	                        if ( value ) {
	                            newArr.push( 'all' );
	                        } else {
	                            const index = newArr.indexOf( 'all' );
	                            if ( index > -1 ) {
	                                newArr.splice( index, 1 );
	                            }
	                        }
	                        setAttributes({ [key] : newArr });
	                    }}
	                />;
	                output.push( new_output );

	                props.posts.forEach((post) => {

	                    var new_output = <areoi.components.CheckboxControl
	                        label={ post.title.rendered }
	                        labelPosition="top"
	                        value={ post.id }
	                        checked={ typeof attributes[key] != 'undefined' ? ( attributes[key] ? attributes[key].includes( post.id ) : false ) : false }
	                        onChange={ function( value ) {
	                            
	                            var newArr = [];
	                            if ( typeof attributes[key] != 'undefined' ) {
	                                var newArr = attributes[key].slice();
	                            }

	                            if ( value ) {
	                                newArr.push( post.id );
	                            } else {
	                                const index = newArr.indexOf( post.id );
	                                if ( index > -1 ) {
	                                    newArr.splice( index, 1 );
	                                }
	                            }
	                            setAttributes({ [key] : newArr });
	                        }}
	                    />;
	                    output.push( new_output );
	                });

	            } else {
	               output = <div>
	                    <p class="text-center mb-0">Loading posts.</p>
	               </div>; 
	            }
	            return (
	                <div class="areoi-panel-row">
	                    <div class="areoi-post-list">
	                        { output }
	                    </div>
	                </div>
	            );
	        }

	    );
    
    
	return (
		<>
            <div { ...blockProps }>
                <editor.InspectorControls key="setting">

            		{
		                ( areoi_lightspeed_vars.pattern || areoi_lightspeed_vars.divider || areoi_lightspeed_vars.transition || areoi_lightspeed_vars.parallax ) && 
		                <areoi.components.PanelBody title={ 'Lightspeed' } initialOpen={ false }>
		                    {
		                        areoi_lightspeed_vars.divider &&
		                        
		                        <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
		                            <areoi.components.ToggleControl 
		                                label={ 'Exclude divider' }
		                                help="If checked this block will not display a divider."
		                                checked={ attributes.exclude_divider }
		                                onChange={ ( value ) => onChange( 'exclude_divider', value ) }
		                            />
		                        </areoi.components.PanelRow>
		                    }

		                    {
		                        areoi_lightspeed_vars.pattern &&
		                        <>
		                            <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
		                                <areoi.components.ToggleControl 
		                                    label={ 'Exclude pattern' }
		                                    help="If checked this block will not display a pattern."
		                                    checked={ attributes.exclude_pattern }
		                                    onChange={ ( value ) => onChange( 'exclude_pattern', value ) }
		                                />
		                            </areoi.components.PanelRow>

		                            {
		                                !attributes.exclude_pattern &&
		                                <>
		                                    <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
		                                        <areoi.components.ToggleControl 
		                                            label={ 'Change pattern color' }
		                                            help="If checked the pattern will display in the selected color."
		                                            checked={ attributes.change_pattern_color }
		                                            onChange={ ( value ) => onChange( 'change_pattern_color', value ) }
		                                        />
		                                    </areoi.components.PanelRow>

		                                    {
		                                        attributes.change_pattern_color &&
		                                        <>
		                                        { areoi.ColorPicker( areoi, attributes, onChange, 'pattern_color', 'Pattern Color' ) }
		                                        </>
		                                    }
		                                </>
		                            }
		                            
		                        </>
		                    }

		                    {
		                        areoi_lightspeed_vars.transition &&
		                        <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
		                            <areoi.components.ToggleControl 
		                                label={ 'Exclude transition' }
		                                help="If checked this block will not implement transitions."
		                                checked={ attributes.exclude_transition }
		                                onChange={ ( value ) => onChange( 'exclude_transition', value ) }
		                            />
		                        </areoi.components.PanelRow>
		                    }

		                    {
		                        areoi_lightspeed_vars.parallax &&
		                        <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
		                            <areoi.components.ToggleControl 
		                                label={ 'Exclude parallax' }
		                                help="If checked this block will not implement parallax."
		                                checked={ attributes.exclude_parallax }
		                                onChange={ ( value ) => onChange( 'exclude_parallax', value ) }
		                            />
		                        </areoi.components.PanelRow>
		                    }
		                    
		                </areoi.components.PanelBody>
		            }

                	<components.PanelBody title={ __( 'Settings' ) } initialOpen={ false }>
	                    
	                    {
	                    	attributes.hasOwnProperty( 'filename' ) && 
	                    	<components.PanelRow className="areoi-panel-row">
		                        <components.SelectControl
		                            label="Template"
		                            labelPosition="top"
		                            help={ __( 'All templates include the same content, but display them in different ways.' ) }
		                            value={ attributes.filename }
		                            options={ areoi_lightspeed_vars.templates[template] }
		                            onChange={ ( value ) => onChange( 'filename', value ) }
		                        />
		                    </components.PanelRow>
	                    }

	                    {
	                    	attributes.hasOwnProperty( 'size' ) &&
	                    	<components.PanelRow className="areoi-panel-row">
		                        <components.SelectControl
		                            label="Size"
		                            labelPosition="top"
		                            help={ __( 'Changing the size of a block will set a fixed height. Auto = auto, Small = 33vh, Medium = 66vh and Large = 100vh.' ) }
		                            value={ attributes.size }
		                            options={ [
	                                    { label: 'Auto', value: 'auto' },
	                                    { label: 'Small', value: '33vh' },
	                                    { label: 'Medium', value: '66vh' },
	                                    { label: 'Large', value: '100vh' },
	                                ] }
		                            onChange={ ( value ) => onChange( 'size', value ) }
		                        />
		                    </components.PanelRow>

	                    }

	                    {
	                    	attributes.hasOwnProperty( 'padding' ) &&
	                    	<components.PanelRow className="areoi-panel-row">
		                        <components.SelectControl
		                            label="Padding"
		                            labelPosition="top"
		                            help={ __( 'Changing the padding of a block will set a different padding top and bottom. The default is set within your Lightspeed settings.' ) }
		                            value={ attributes.padding }
		                            options={ [
	                                    { label: 'Default', value: '' },
	                                    { label: 'None', value: 'none' },
	                                    { label: 'Small', value: 'sm' },
	                                    { label: 'Medium', value: 'md' },
	                                    { label: 'Large', value: 'lg' },
	                                ] }
		                            onChange={ ( value ) => onChange( 'padding', value ) }
		                        />
		                    </components.PanelRow>

	                    }

	                    {
	                    	attributes.hasOwnProperty( 'alignment' ) &&
	                    	<components.PanelRow className="areoi-panel-row">
		                        <components.SelectControl
		                            label="Alignment"
		                            labelPosition="top"
		                            help={ __( 'Changing the alignment of a block will position the content to the left or right of the strip.' ) }
		                            value={ attributes.alignment }
		                            options={ [
		                            	{ label: 'Default', value: '' },
	                                    { label: 'Content Left', value: 'start' },
	                                    { label: 'Content Right', value: 'end' },
	                                ] }
		                            onChange={ ( value ) => onChange( 'alignment', value ) }
		                        />
		                    </components.PanelRow>

	                    }
	                    
	                    {
	                    	attributes.hasOwnProperty( 'media_position' ) &&
	                    	<components.PanelRow className="areoi-panel-row">
		                        <components.SelectControl
		                            label="Media Position"
		                            labelPosition="top"
		                            help={ __( 'Changing the media position of a block will position the media inline or as a background.' ) }
		                            value={ attributes.media_position }
		                            options={ [
		                            	{ label: 'Default', value: '' },
	                                    { label: 'Inline', value: 'inline' },
	                                    { label: 'Background', value: 'background' },
	                                ] }
		                            onChange={ ( value ) => onChange( 'media_position', value ) }
		                        />
		                    </components.PanelRow>
	                    }

	                    {
	                    	attributes.hasOwnProperty( 'max_height' ) &&
		                    <components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
	                            <label className="areoi-panel-row__label">Max Height</label>
	                            <table>
	                                <tr>
	                                    <td>
	                                        <components.TextControl
	                                            label=""
	                                            value={ attributes['max_height'] }
	                                            onChange={ ( value ) => onChange( 'max_height', value ) }
	                                        />
	                                    </td>
	                                    <td>&nbsp;px</td>
	                                </tr>
	                            </table>
	                            <p className="components-base-control__help css-1gbp77-StyledHelp">Specify the maximum height to display all your logos. This will be applied to all of your items for consistency.</p>
	                        </components.PanelRow>
	                    }

	                    {
	                    	attributes.hasOwnProperty( 'max_width' ) &&
	                        <components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
	                            <label className="areoi-panel-row__label">Max Width</label>
	                            <table>
	                                <tr>
	                                    <td>
	                                        <components.TextControl
	                                            label=""
	                                            value={ attributes['max_width'] }
	                                            onChange={ ( value ) => onChange( 'max_width', value ) }
	                                        />
	                                    </td>
	                                    <td>&nbsp;%</td>
	                                </tr>
	                            </table>
	                            <p className="components-base-control__help css-1gbp77-StyledHelp">Specify the maximum width to display all your media. This will be applied to all of your items for consistency.</p>
	                        </components.PanelRow>
	                    }

	                    {
	                    	attributes.hasOwnProperty( 'exclude_company' ) &&
		                    <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
	                            <areoi.components.ToggleControl 
	                                label={ 'Exclude Company' }
	                                help="If checked this block will not display company contact details."
	                                checked={ attributes.exclude_company }
	                                onChange={ ( value ) => onChange( 'exclude_company', value ) }
	                            />
	                        </areoi.components.PanelRow>
	                    }

	                    {
	                    	attributes.hasOwnProperty( 'exclude_social' ) &&
		                    <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
	                            <areoi.components.ToggleControl 
	                                label={ 'Exclude social' }
	                                help="If checked this block will not display social contact details."
	                                checked={ attributes.exclude_social }
	                                onChange={ ( value ) => onChange( 'exclude_social', value ) }
	                            />
	                        </areoi.components.PanelRow>
	                    }
	                    
                    </components.PanelBody>

                    {
	                    attributes.hasOwnProperty( 'company_address' ) &&
	                    <components.PanelBody title={ 'Company' } initialOpen={ false }>

	                        <components.PanelRow className="areoi-panel-row">
	                            <components.TextControl
	                                label="Company Address"
	                                value={ attributes.company_address }
	                                onChange={ ( value ) => onChange( 'company_address', value ) }
	                            />
	                        </components.PanelRow>

	                        <components.PanelRow className="areoi-panel-row">
	                            <components.TextControl
	                                label="Company Phone"
	                                value={ attributes.company_phone }
	                                onChange={ ( value ) => onChange( 'company_phone', value ) }
	                            />
	                        </components.PanelRow>

	                        <components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
	                            <components.TextControl
	                                label="Company Email"
	                                value={ attributes.company_email }
	                                onChange={ ( value ) => onChange( 'company_email', value ) }
	                            />
	                        </components.PanelRow>

	                    </components.PanelBody>
	                }

	                {
	                    attributes.hasOwnProperty( 'social_facebook' ) &&
	                    <components.PanelBody title={ 'Social' } initialOpen={ false }>

	                        <components.PanelRow className="areoi-panel-row">
	                            <components.TextControl
	                                label="Facebook"
	                                value={ attributes.social_facebook }
	                                onChange={ ( value ) => onChange( 'social_facebook', value ) }
	                            />
	                        </components.PanelRow>

	                        <components.PanelRow className="areoi-panel-row">
	                            <components.TextControl
	                                label="Twitter"
	                                value={ attributes.social_twitter }
	                                onChange={ ( value ) => onChange( 'social_twitter', value ) }
	                            />
	                        </components.PanelRow>

	                        <components.PanelRow className="areoi-panel-row">
	                            <components.TextControl
	                                label="Instagram"
	                                value={ attributes.social_instagram }
	                                onChange={ ( value ) => onChange( 'social_instagram', value ) }
	                            />
	                        </components.PanelRow>

	                        <components.PanelRow className="areoi-panel-row">
	                            <components.TextControl
	                                label="YouTube"
	                                value={ attributes.social_youtube }
	                                onChange={ ( value ) => onChange( 'social_youtube', value ) }
	                            />
	                        </components.PanelRow>

	                        <components.PanelRow className="areoi-panel-row">
	                            <components.TextControl
	                                label="LinkedIn"
	                                value={ attributes.social_linkedin }
	                                onChange={ ( value ) => onChange( 'social_linkedin', value ) }
	                            />
	                        </components.PanelRow>

	                        <components.PanelRow className="areoi-panel-row">
	                            <components.TextControl
	                                label="Tik Tok"
	                                value={ attributes.social_tiktok }
	                                onChange={ ( value ) => onChange( 'social_tiktok', value ) }
	                            />
	                        </components.PanelRow>

	                        <components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
	                            <components.TextControl
	                                label="Pinterest"
	                                value={ attributes.social_pinterest }
	                                onChange={ ( value ) => onChange( 'social_pinterest', value ) }
	                            />
	                        </components.PanelRow>

	                    </components.PanelBody>
	                }

                    {
                    	attributes.hasOwnProperty( 'background_display' ) &&
                    	areoi.Background( areoi, attributes, onChange )
                    }

                    {
                    	attributes.hasOwnProperty( 'heading' ) &&
	                    <components.PanelBody title={ __( 'Content' ) } initialOpen={ false }>
		                    
		                    {
		                    	attributes.hasOwnProperty( 'heading' ) &&
		                    	<components.BaseControl label={ __( 'Heading' ) }>

							        <editor.RichText
				                        tagName={ 'h1' }
				                        inlineToolbar={ true }
				                        value={ attributes.heading }
				                        onChange={ ( value ) => onChange( 'heading', value ) }
				                        placeholder={ __( 'Enter heading...' ) }
				                    />
							    </components.BaseControl>
		                    }

		                    {
		                    	attributes.hasOwnProperty( 'sub_heading' ) &&
		                    	<components.BaseControl label={ __( 'Sub Heading' ) }>

							        <editor.RichText
				                        tagName={ 'p' }
				                        inlineToolbar={ true }
				                        value={ attributes.sub_heading }
				                        onChange={ ( value ) => onChange( 'sub_heading', value ) }
				                        placeholder={ __( 'Enter sub heading...' ) }
				                    />
							    </components.BaseControl>
		                    }

		                    {
		                    	attributes.hasOwnProperty( 'introduction' ) &&
		                    	<components.BaseControl label={ __( 'Introduction' ) }>
							        <editor.RichText
				                        tagName={ 'div' }
				                        multiline='p'
				                        inlineToolbar={ true }
				                        value={ attributes.introduction }
				                        onChange={ ( value ) => onChange( 'introduction', value ) }
				                        placeholder={ __( 'Add a short paragraph...' ) }
				                    />
							    </components.BaseControl> 
		                    }

		                    {
		                    	attributes.hasOwnProperty( 'include_cta' ) &&
		                    	<>
		                    		<components.PanelRow>
			                            <components.ToggleControl 
			                                label={ __( 'Include Call to Action' ) }
			                                checked={ attributes.include_cta }
			                                onChange={ ( value ) => onChange( 'include_cta', value ) }
			                            />
			                        </components.PanelRow>

								    {
								    	attributes.include_cta &&
								    	<>
									    	<components.BaseControl label={ __( 'Call to Action' ) }>
										        <editor.RichText
								                        tagName={ 'p' }
								                        inlineToolbar={ true }
								                        value={ attributes.cta }
								                        onChange={ ( value ) => onChange( 'cta', value ) }
								                        placeholder={ __( 'Add a CTA...' ) }
								                    />
										    </components.BaseControl> 

										    <components.PanelRow>
						                        <components.SelectControl
						                            label="Call to Action Size"
						                            labelPosition="top"
						                            help={ __( 'Use the Bootstrap button utilities to change the size of the cta.' ) }
						                            value={ attributes.cta_size }
						                            options={ [
					                                    { label: 'Small', value: 'btn-sm' },
					                                    { label: 'Medium', value: 'btn-md' },
					                                    { label: 'Large', value: 'btn-lg' },
					                                ] }
						                            onChange={ ( value ) => onChange( 'cta_size', value ) }
						                        />
						                    </components.PanelRow>

						                    <div className="areoi-link-control">
						                    	<label class="components-truncate components-text components-input-control__label">Call to Action URL</label>
							                    <editor.__experimentalLinkControl
													searchInputPlaceholder="Search here..."
													value={ {
														url: attributes.url,
														opensInNewTab: attributes.opensInNewTab
													} }
													onChange={ ( newUrl ) => {
														onChange( 'url', newUrl.url )
														onChange( 'opensInNewTab', newUrl.opensInNewTab )
													} }
													onRemove={ () => {
									                    onChange( 'url', '' )
														onChange( 'opensInNewTab', false )
									                } }
												>
												</editor.__experimentalLinkControl>
											</div>
					                    </>
								    }
		                    	</>
		                    }

		                    {
						    	attributes.hasOwnProperty( 'form_id' ) && areoi_lightspeed_vars.forms && areoi_lightspeed_vars.forms.length && 
						    	<components.PanelRow className="areoi-panel-row">
			                        <components.SelectControl
			                            label="Form"
			                            labelPosition="top"
			                            help={ __( 'Choose a form to display along with the content. These forms are pulled from the Ninja Forms plugin.' ) }
			                            value={ attributes.form_id }
			                            options={ areoi_lightspeed_vars.forms }
			                            onChange={ ( value ) => onChange( 'form_id', value ) }
			                        />
			                    </components.PanelRow>
						    }
						    
						</components.PanelBody>
					}

					{
						attributes.hasOwnProperty( 'heading_color' ) &&
						<components.PanelBody title={ __( 'Content Colors' ) } initialOpen={ false }>

	                    	{
	                    		attributes.hasOwnProperty( 'heading_color' ) && attributes.heading &&
	                    		<components.PanelRow>
					                <components.SelectControl
					                    label={ __( 'Heading Color' ) }
					                    labelPosition="top"
					                    help={ __( 'Use the Bootstrap text color utilities to change the heading color.' ) }
					                    value={ attributes.heading_color }
					                    options={ [
					                        { label: 'Default', value: null },
					                        { label: 'Primary', value: 'text-primary' },
					                        { label: 'Secondary', value: 'text-secondary' },
					                        { label: 'Success', value: 'text-success' },
					                        { label: 'Danger', value: 'text-danger' },
					                        { label: 'Warning', value: 'text-warning' },
					                        { label: 'Info', value: 'text-info' },
					                        { label: 'Light', value: 'text-light' },
					                        { label: 'Dark', value: 'text-dark' },
					                    ] }
					                    onChange={ ( value ) => onChange( 'heading_color', value ) }
					                />
					            </components.PanelRow>
	                    	}

	                    	{
	                    		attributes.hasOwnProperty( 'sub_heading_color' ) && attributes.heading &&
	                    		<components.PanelRow>
					                <components.SelectControl
					                    label={ __( 'Sub Heading Color' ) }
					                    labelPosition="top"
					                    help={ __( 'Use the Bootstrap text color utilities to change the sub heading color.' ) }
					                    value={ attributes.sub_heading_color }
					                    options={ [
					                        { label: 'Default', value: null },
					                        { label: 'Primary', value: 'text-primary' },
					                        { label: 'Secondary', value: 'text-secondary' },
					                        { label: 'Success', value: 'text-success' },
					                        { label: 'Danger', value: 'text-danger' },
					                        { label: 'Warning', value: 'text-warning' },
					                        { label: 'Info', value: 'text-info' },
					                        { label: 'Light', value: 'text-light' },
					                        { label: 'Dark', value: 'text-dark' },
					                    ] }
					                    onChange={ ( value ) => onChange( 'sub_heading_color', value ) }
					                />
					            </components.PanelRow>
	                    	}

	                    	{
	                    		attributes.hasOwnProperty( 'introduction_color' ) && attributes.introduction &&
	                    		<components.PanelRow>
					                <components.SelectControl
					                    label={ __( 'Introduction Color' ) }
					                    labelPosition="top"
					                    help={ __( 'Use the Bootstrap text color utilities to change the introduction color.' ) }
					                    value={ attributes.introduction_color }
					                    options={ [
					                        { label: 'Default', value: null },
					                        { label: 'Primary', value: 'text-primary' },
					                        { label: 'Secondary', value: 'text-secondary' },
					                        { label: 'Success', value: 'text-success' },
					                        { label: 'Danger', value: 'text-danger' },
					                        { label: 'Warning', value: 'text-warning' },
					                        { label: 'Info', value: 'text-info' },
					                        { label: 'Light', value: 'text-light' },
					                        { label: 'Dark', value: 'text-dark' },
					                    ] }
					                    onChange={ ( value ) => onChange( 'introduction_color', value ) }
					                />
					            </components.PanelRow>
	                    	}
	                    	{
	                    		attributes.hasOwnProperty( 'cta_color' ) && attributes.cta &&
	                    		<components.PanelRow>
					                <components.SelectControl
					                    label={ __( 'Call to Action Color' ) }
					                    labelPosition="top"
					                    help={ __( 'Use the Bootstrap text color utilities to change the cta color.' ) }
					                    value={ attributes.cta_color }
					                    options={ [
					                        { label: 'Default', value: null },
					                        { label: 'Primary', value: 'btn-primary' },
					                        { label: 'Secondary', value: 'btn-secondary' },
					                        { label: 'Success', value: 'btn-success' },
					                        { label: 'Danger', value: 'btn-danger' },
					                        { label: 'Warning', value: 'btn-warning' },
					                        { label: 'Info', value: 'btn-info' },
					                        { label: 'Light', value: 'btn-light' },
					                        { label: 'Dark', value: 'btn-dark' },
					                    ] }
					                    onChange={ ( value ) => onChange( 'cta_color', value ) }
					                />
					            </components.PanelRow>
	                    	}

	                    	{
	                    		attributes.hasOwnProperty( 'post_background_color' ) &&
		                    	<components.PanelRow>
					                <components.SelectControl
					                    label={ __( 'Post Background Color' ) }
					                    labelPosition="top"
					                    help={ __( 'Use the Bootstrap bg color utilities to change the post background color.' ) }
					                    value={ attributes.post_background_color }
					                    options={ [
					                        { label: 'Default', value: "" },
					                        { label: 'Primary', value: 'bg-primary' },
					                        { label: 'Secondary', value: 'bg-secondary' },
					                        { label: 'Success', value: 'bg-success' },
					                        { label: 'Danger', value: 'bg-danger' },
					                        { label: 'Warning', value: 'bg-warning' },
					                        { label: 'Info', value: 'bg-info' },
					                        { label: 'Light', value: 'bg-light' },
					                        { label: 'Dark', value: 'bg-dark' },
					                    ] }
					                    onChange={ ( value ) => onChange( 'post_background_color', value ) }
					                />
					            </components.PanelRow>
					        }

					        {
	                    		attributes.hasOwnProperty( 'post_title_color' ) &&
		                    	<components.PanelRow>
					                <components.SelectControl
					                    label={ __( 'Post Title Color' ) }
					                    labelPosition="top"
					                    help={ __( 'Use the Bootstrap text color utilities to change the post title color.' ) }
					                    value={ attributes.post_title_color }
					                    options={ [
					                        { label: 'Default', value: "" },
					                        { label: 'Primary', value: 'text-primary' },
					                        { label: 'Secondary', value: 'text-secondary' },
					                        { label: 'Success', value: 'text-success' },
					                        { label: 'Danger', value: 'text-danger' },
					                        { label: 'Warning', value: 'text-warning' },
					                        { label: 'Info', value: 'text-info' },
					                        { label: 'Light', value: 'text-light' },
					                        { label: 'Dark', value: 'text-dark' },
					                    ] }
					                    onChange={ ( value ) => onChange( 'post_title_color', value ) }
					                />
					            </components.PanelRow>
					        }

					        {
	                    		attributes.hasOwnProperty( 'post_excerpt_color' ) &&
					            <components.PanelRow>
					                <components.SelectControl
					                    label={ __( 'Post Excerpt Color' ) }
					                    labelPosition="top"
					                    help={ __( 'Use the Bootstrap text color utilities to change the post excerpt color.' ) }
					                    value={ attributes.post_excerpt_color }
					                    options={ [
					                        { label: 'Default', value: "" },
					                        { label: 'Primary', value: 'text-primary' },
					                        { label: 'Secondary', value: 'text-secondary' },
					                        { label: 'Success', value: 'text-success' },
					                        { label: 'Danger', value: 'text-danger' },
					                        { label: 'Warning', value: 'text-warning' },
					                        { label: 'Info', value: 'text-info' },
					                        { label: 'Light', value: 'text-light' },
					                        { label: 'Dark', value: 'text-dark' },
					                    ] }
					                    onChange={ ( value ) => onChange( 'post_excerpt_color', value ) }
					                />
					            </components.PanelRow>
					        }

	                    </components.PanelBody>
					}

					{
						attributes.hasOwnProperty( 'display_posts' ) &&
						<areoi.components.PanelBody title={ 'Posts' } initialOpen={ false }>
                        
	                        <PostTypesControl />

	                        <areoi.components.PanelRow className="areoi-panel-row">
	                            <areoi.components.SelectControl
	                                label="Display Posts"
	                                labelPosition="top"
	                                help="Choose whether to display the selected posts or children of the selected posts."
	                                value={ attributes.display_posts }
	                                options={ [
	                                    { label: 'Show selected posts', value: 'selected' },
	                                    { label: 'Show children of selected posts', value: 'children' },
	                                ] }
	                                 onChange={ ( value ) => onChange( 'display_posts', value ) }
	                            />
	                        </areoi.components.PanelRow>

	                        <PostsDropdownControl post_type={ attributes['post_type'] ? attributes['post_type'] : 'post' } />

	                        <areoi.components.PanelRow className="areoi-panel-row">
	                            <areoi.components.SelectControl
	                                label="Order By"
	                                labelPosition="top"
	                                help="Sort retrieved posts by parameter."
	                                value={ attributes.orderby }
	                                options={ [
	                                    { label: 'None', value: 'none' },
	                                    { label: 'Title', value: 'title' },
	                                    { label: 'Menu Order', value: 'menu_order' },
	                                    { label: 'Date', value: 'date' },
	                                    { label: 'Random', value: 'rand' },
	                                ] }
	                                 onChange={ ( value ) => onChange( 'orderby', value ) }
	                            />
	                        </areoi.components.PanelRow>

	                        <areoi.components.PanelRow className="areoi-panel-row">
	                            <areoi.components.SelectControl
	                                label="Order"
	                                labelPosition="top"
	                                help="Designates the ascending or descending order of the 'orderby' parameter."
	                                value={ attributes.order }
	                                options={ [
	                                    { label: 'ASC', value: 'asc' },
	                                    { label: 'DESC', value: 'desc' },
	                                ] }
	                                 onChange={ ( value ) => onChange( 'order', value ) }
	                            />
	                        </areoi.components.PanelRow>

	                        <areoi.components.PanelRow className="areoi-panel-row">
	                            <areoi.components.TextControl
	                                label="Posts Per Page"
	                                labelPosition="top"
	                                help="Specify the number of posts you would like to display."
	                                value={ attributes.posts_per_page }
	                                onChange={ ( value ) => onChange( 'posts_per_page', value ) }
	                            />
	                        </areoi.components.PanelRow>

	                        <areoi.components.PanelRow className={ attributes.include_pagination ? 'areoi-panel-row' : '' }>
	                            <areoi.components.ToggleControl 
	                                label={ 'Include Pagination' }
	                                help="Toggle on to display pagination at the bottom of the block."
	                                checked={ attributes.include_pagination }
	                                onChange={ ( value ) => onChange( 'include_pagination', value ) }
	                            />
	                        </areoi.components.PanelRow>

	                        { attributes.include_pagination &&
	                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
	                                <areoi.components.SelectControl
	                                    label="Pagination Color"
	                                    labelPosition="top"
	                                    help="Use the Bootstrap btn color utilities to change the button color for pagination."
	                                    value={ attributes.pagination_color }
	                                    options={ [
	                                        { label: 'Default', value: 'btn-primary' },
	                                        { label: 'Primary', value: 'btn-primary' },
	                                        { label: 'Primary (Outline)', value: 'btn-outline-primary' },
	                                        { label: 'Secondary', value: 'btn-secondary' },
	                                        { label: 'Secondary (Outline)', value: 'btn-outline-secondary' },
	                                        { label: 'Success', value: 'btn-success' },
	                                        { label: 'Success (Outline)', value: 'btn-outline-success' },
	                                        { label: 'Danger', value: 'btn-danger' },
	                                        { label: 'Danger (Outline)', value: 'btn-outline-danger' },
	                                        { label: 'Warning', value: 'btn-warning' },
	                                        { label: 'Warning (Outline)', value: 'btn-outline-warning' },
	                                        { label: 'Info', value: 'btn-info' },
	                                        { label: 'Info (Outline)', value: 'btn-outline-info' },
	                                        { label: 'Light', value: 'btn-light' },
	                                        { label: 'Light (Outline)', value: 'btn-outline-light' },
	                                        { label: 'Dark', value: 'btn-dark' },
	                                        { label: 'Dark (Outline)', value: 'btn-outline-dark' },
	                                    ] }
	                                    onChange={ ( value ) => onChange( 'pagination_color', value ) }
	                                />
	                            </areoi.components.PanelRow>
	                        }

	                        <areoi.components.PanelRow className={ 'areoi-panel-row' }>
	                            <areoi.components.ToggleControl 
	                                label={ 'Include Media' }
	                                help="Toggle on to display the featured image for each item."
	                                checked={ attributes.include_media }
	                                onChange={ ( value ) => onChange( 'include_media', value ) }
	                            />
	                        </areoi.components.PanelRow>

	                        <areoi.components.PanelRow className={ 'areoi-panel-row' }>
	                            <areoi.components.ToggleControl 
	                                label={ 'Include Title' }
	                                help="Toggle on to display the title for each item."
	                                checked={ attributes.include_title }
	                                onChange={ ( value ) => onChange( 'include_title', value ) }
	                            />
	                        </areoi.components.PanelRow>

	                        <areoi.components.PanelRow className={ 'areoi-panel-row' }>
	                            <areoi.components.ToggleControl 
	                                label={ 'Include Excerpt' }
	                                help="Toggle on to display the excerpt for each item."
	                                checked={ attributes.include_excerpt }
	                                onChange={ ( value ) => onChange( 'include_excerpt', value ) }
	                            />
	                        </areoi.components.PanelRow>

	                        <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
	                            <areoi.components.ToggleControl 
	                                label={ 'Include Permalink' }
	                                help="Toggle on to include a stretched link for each item."
	                                checked={ attributes.include_permalink }
	                                onChange={ ( value ) => onChange( 'include_permalink', value ) }
	                            />
	                        </areoi.components.PanelRow>

	                    </areoi.components.PanelBody>
					}

                    {
                    	attributes.hasOwnProperty( 'gallery' ) &&
                    	<components.PanelBody title={ __( 'Media' ) } initialOpen={ false }>

		                    { areoi.MediaGallery( areoi, attributes, onChange, 'Gallery', ['image', 'video'], 'gallery' ) }	

	                    </components.PanelBody>
                    }

                    {
                    	attributes.hasOwnProperty( 'image' ) &&
	                    <components.PanelBody title={ __( 'Media' ) } initialOpen={ false }>

		                    { areoi.MediaUpload( areoi, attributes, onChange, 'Image', 'image', 'image' ) }

	                        { areoi.MediaUpload( areoi, attributes, onChange, 'Video', 'video', 'video' ) }  	

	                    </components.PanelBody>
	                }

                    {
                    	attributes.hasOwnProperty( 'items' ) &&
                    	areoi.Items( areoi, attributes, onChange )
                    }
                        
                </editor.InspectorControls>

                <ServerSideRender
	                block={ meta.name }
	                attributes={ attributes }
	                httpMethod="POST"
	            />
            </div>
        </>
	);
}

export default Edit;