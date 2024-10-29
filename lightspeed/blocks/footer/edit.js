/**
 * External dependencies
 */
import classnames from 'classnames';

import meta from './block.json';

import * as areoi from '../../../blocks/_components/Core.js';

import ServerSideRender from '@wordpress/server-side-render';
import { useBlockProps } from '@wordpress/block-editor';

let loaded = 1;

export default function edit( {
	attributes,
	setAttributes,
	context,
	clientId
} ) {
	
	const blockProps = useBlockProps();

	const props = {
		attributes: attributes,
		setAttributes: setAttributes
	}

	const { block_id } = attributes;
    if ( ( !block_id || ( block_id != clientId ) ) && loaded == 1 ) {
        setAttributes( { block_id: clientId } );
        loaded++;
    }

    function onChange( key, value ) {
        setAttributes( { [key]: value } );
    }

	return (
		<>
			{ areoi.DisplayPreview( areoi, attributes, onChange, 'footer' ) }

			{ !attributes.preview &&
                <div { ...blockProps }>
                    <areoi.editor.InspectorControls key="setting">

                        <areoi.components.PanelBody title={ 'Company' } initialOpen={ false }>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.SelectControl
                                    label="Logo"
                                    labelPosition="top"
                                    help="Choose between displaying a logo or an icon. Logos and icons can be added in the plugin settings area."
                                    value={ attributes.logo }
                                    options={ [
                                        { label: 'Default', value: '' },
                                        { label: 'Logo', value: 'logo' },
                                        { label: 'Icon', value: 'icon' },
                                    ] }
                                    onChange={ ( value ) => onChange( 'logo', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.SelectControl
                                    label="Logo Color"
                                    labelPosition="top"
                                    help="Choose between the light or dark variation of your logo / icon."
                                    value={ attributes.logo_color }
                                    options={ [
                                        { label: 'Default', value: '' },
                                        { label: 'Dark', value: 'dark' },
                                        { label: 'Light', value: 'light' },
                                    ] }
                                    onChange={ ( value ) => onChange( 'logo_color', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <label className="areoi-panel-row__label">Logo Height</label>
                                <table>
                                    <tr>
                                        <td>
                                            <areoi.components.TextControl
                                                label=""
                                                value={ attributes.logo_height }
                                                onChange={ ( value ) => onChange( 'logo_height', value ) }
                                            />
                                        </td>
                                        <td>px</td>
                                    </tr>
                                </table>
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.TextControl
                                    label="Company Address"
                                    value={ attributes.company_address }
                                    onChange={ ( value ) => onChange( 'company_address', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.TextControl
                                    label="Company Phone"
                                    value={ attributes.company_phone }
                                    onChange={ ( value ) => onChange( 'company_phone', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
                                <areoi.components.TextControl
                                    label="Company Email"
                                    value={ attributes.company_email }
                                    onChange={ ( value ) => onChange( 'company_email', value ) }
                                />
                            </areoi.components.PanelRow>

                        </areoi.components.PanelBody>

                        <areoi.components.PanelBody title={ 'Social' } initialOpen={ false }>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.TextControl
                                    label="Facebook"
                                    value={ attributes.social_facebook }
                                    onChange={ ( value ) => onChange( 'social_facebook', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.TextControl
                                    label="Twitter"
                                    value={ attributes.social_twitter }
                                    onChange={ ( value ) => onChange( 'social_twitter', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.TextControl
                                    label="Instagram"
                                    value={ attributes.social_instagram }
                                    onChange={ ( value ) => onChange( 'social_instagram', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.TextControl
                                    label="YouTube"
                                    value={ attributes.social_youtube }
                                    onChange={ ( value ) => onChange( 'social_youtube', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.TextControl
                                    label="LinkedIn"
                                    value={ attributes.social_linkedin }
                                    onChange={ ( value ) => onChange( 'social_linkedin', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.TextControl
                                    label="Tik Tok"
                                    value={ attributes.social_tiktok }
                                    onChange={ ( value ) => onChange( 'social_tiktok', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
                                <areoi.components.TextControl
                                    label="Pinterest"
                                    value={ attributes.social_pinterest }
                                    onChange={ ( value ) => onChange( 'social_pinterest', value ) }
                                />
                            </areoi.components.PanelRow>

                        </areoi.components.PanelBody>

                        <areoi.components.PanelBody title={ 'Settings' } initialOpen={ false }>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.SelectControl
                                    label="Container"
                                    labelPosition="top"
                                    help="Bootstrap has 3 container types: .container, which sets a max-width at each responsive breakpoint; .container-fluid, which is width: 100% at all breakpoints; and .container-{breakpoint}, which is width: 100% until the specified breakpoint."
                                    value={ attributes.container }
                                    options={ [
                                        { label: '.container', value: 'container' },
                                        { label: '.container-sm', value: 'container-sm' },
                                        { label: '.container-md', value: 'container-md' },
                                        { label: '.container-lg', value: 'container-lg' },
                                        { label: '.container-xl', value: 'container-xl' },
                                        { label: '.container-xxl', value: 'container-xxl' },
                                        { label: '.container-fluid', value: 'container-fluid' },
                                    ] }
                                    onChange={ ( value ) => onChange( 'container', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.SelectControl
                                    label="Template"
                                    labelPosition="top"
                                    help="All templates include the same content, but display them in different ways."
                                    value={ attributes.template_filename }
                                    options={ areoi_lightspeed_vars.templates.footer }
                                    onChange={ ( value ) => onChange( 'template_filename', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Display Logo' }
                                    help="If checked your company logo will be included in the footer."
                                    checked={ attributes.include_logo }
                                    onChange={ ( value ) => onChange( 'include_logo', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Display Social' }
                                    help="If checked your social media links will be included in the footer."
                                    checked={ attributes.include_social }
                                    onChange={ ( value ) => onChange( 'include_social', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Display Company' }
                                    help="If checked your company details (address, email and phone if available) will be included in the footer."
                                    checked={ attributes.include_company }
                                    onChange={ ( value ) => onChange( 'include_company', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Display Main Menu' }
                                    help="If checked a menu of your chossing will be included in the footer."
                                    checked={ attributes.include_main_menu }
                                    onChange={ ( value ) => onChange( 'include_main_menu', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Display Bottom Bar' }
                                    help="If checked a bar will be added to the bottom of the footer to hold text and an additional menu."
                                    checked={ attributes.include_bottom_bar }
                                    onChange={ ( value ) => onChange( 'include_bottom_bar', value ) }
                                />
                            </areoi.components.PanelRow>

                            {
                                attributes.include_bottom_bar &&
                                <>
                                    <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                        <areoi.components.ToggleControl 
                                            label={ 'Display Bottom Bar Menu' }
                                            help="If checked a menu of your choice will be dispalyed in the bottom bar."
                                            checked={ attributes.include_bottom_bar_menu }
                                            onChange={ ( value ) => onChange( 'include_bottom_bar_menu', value ) }
                                        />
                                    </areoi.components.PanelRow>

                                    <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                        <areoi.components.ToggleControl 
                                            label={ 'Display Bottom Bar Text' }
                                            help="If checked you can add custom text in to the bottom bar of your footer."
                                            checked={ attributes.include_bottom_bar_text }
                                            onChange={ ( value ) => onChange( 'include_bottom_bar_text', value ) }
                                        />
                                    </areoi.components.PanelRow>

                                </>
                            }
                            
                        </areoi.components.PanelBody>

                        <areoi.components.PanelBody title={ 'Main' } initialOpen={ false }>

                            { areoi.ColorPicker( areoi, attributes, onChange, 'main_background_color', 'Background Color' ) }

                            { areoi.ColorPicker( areoi, attributes, onChange, 'main_text_color', 'Text Color' ) }

                            <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Include Border' }
                                    checked={ attributes.main_include_border }
                                    onChange={ ( value ) => onChange( 'main_include_border', value ) }
                                />
                            </areoi.components.PanelRow>

                            {
                                attributes.main_include_border &&
                                <>
                                    { areoi.ColorPicker( areoi, attributes, onChange, 'main_border_color', 'Border Color' ) }

                                    <areoi.components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
                                        <label className="areoi-panel-row__label">Border Width</label>
                                        <table>
                                            <tr>
                                                <td>
                                                    <areoi.components.TextControl
                                                        label=""
                                                        value={ attributes.main_border_width }
                                                        onChange={ ( value ) => onChange( 'main_border_width', value ) }
                                                    />
                                                </td>
                                                <td>px</td>
                                            </tr>
                                        </table>
                                    </areoi.components.PanelRow>
                                </>
                            }

                        </areoi.components.PanelBody>

                        {
                            attributes.include_main_menu && 
                            <areoi.components.PanelBody title={ 'Main Menu' } initialOpen={ false }>
                                
                                <areoi.components.PanelRow className="areoi-panel-row">
                                    <areoi.components.SelectControl
                                        label="Menu"
                                        labelPosition="top"
                                        help="Select from your available menus. Menus can be edited under WP > Appearanece > Menus"
                                        value={ attributes.main_menu_id }
                                        options={ areoi_vars.menus }
                                        onChange={ ( value ) => onChange( 'main_menu_id', value ) }
                                    />
                                </areoi.components.PanelRow>

                                <areoi.components.PanelRow className="areoi-panel-row">
                                    <areoi.components.SelectControl
                                        label="Columns"
                                        labelPosition="top"
                                        help="Specify how many columns you would like the layout of your footer to include."
                                        value={ attributes.main_menu_columns }
                                        options={ [
                                            { label: '1', value: '1' },
                                            { label: '2', value: '2' },
                                            { label: '3', value: '3' },
                                            { label: '4', value: '4' },
                                            { label: '6', value: '6' },
                                        ] }
                                        onChange={ ( value ) => onChange( 'main_menu_columns', value ) }
                                    />
                                </areoi.components.PanelRow>

                            </areoi.components.PanelBody>
                        }

                        {
                            attributes.include_bottom_bar &&
                            <areoi.components.PanelBody title={ 'Bottom Bar' } initialOpen={ false }>

                                {
                                    attributes.include_bottom_bar_menu && 
                                    <areoi.components.PanelRow className="areoi-panel-row">
                                        <areoi.components.SelectControl
                                            label="Menu"
                                            labelPosition="top"
                                            help="Select from your available menus. Menus can be edited under WP > Appearanece > Menus"
                                            value={ attributes.bottom_bar_menu_id }
                                            options={ areoi_vars.menus }
                                            onChange={ ( value ) => onChange( 'bottom_bar_menu_id', value ) }
                                        />
                                    </areoi.components.PanelRow>
                                }

                                {
                                    attributes.include_bottom_bar_text &&
                                    <areoi.components.PanelRow className="areoi-panel-row">
                                        <areoi.components.TextareaControl
                                            label="Text"
                                            labelPosition="top"
                                            help="Add custom text to your footer. If left blank a copyright notice will be displayed."
                                            value={ attributes.bottom_bar_text }
                                            onChange={ ( value ) => onChange( 'bottom_bar_text', value ) }
                                        />
                                    </areoi.components.PanelRow>
                                }

                                { areoi.ColorPicker( areoi, attributes, onChange, 'bottom_bar_background_color', 'Background Color' ) }

                                { areoi.ColorPicker( areoi, attributes, onChange, 'bottom_bar_text_color', 'Text Color' ) }

                                <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
                                    <areoi.components.ToggleControl 
                                        label={ 'Include Border' }
                                        checked={ attributes.bottom_bar_include_border }
                                        onChange={ ( value ) => onChange( 'bottom_bar_include_border', value ) }
                                    />
                                </areoi.components.PanelRow>

                                {
                                    attributes.bottom_bar_include_border &&
                                    <>
                                        { areoi.ColorPicker( areoi, attributes, onChange, 'bottom_bar_border_color', 'Border Color' ) }

                                        <areoi.components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
                                            <label className="areoi-panel-row__label">Border Width</label>
                                            <table>
                                                <tr>
                                                    <td>
                                                        <areoi.components.TextControl
                                                            label=""
                                                            value={ attributes.bottom_bar_border_width }
                                                            onChange={ ( value ) => onChange( 'bottom_bar_border_width', value ) }
                                                        />
                                                    </td>
                                                    <td>px</td>
                                                </tr>
                                            </table>
                                        </areoi.components.PanelRow>
                                    </>
                                }

                            </areoi.components.PanelBody>
                        }
                            
                    </areoi.editor.InspectorControls>

                    <ServerSideRender
		                block="areoi-lightspeed/footer"
                        attributes={ attributes }
                        httpMethod="POST"
		            />
                </div>
            }
        </>
	);
}
