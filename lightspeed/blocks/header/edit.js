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
			{ areoi.DisplayPreview( areoi, attributes, onChange, 'header' ) }

			{ !attributes.preview &&
                <div { ...blockProps }>
                    <areoi.editor.InspectorControls key="setting">

                        <areoi.components.PanelBody title={ 'Company' } initialOpen={ false }>

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
                                    label="Position"
                                    labelPosition="top"
                                    help="Choose how to display your header. Relative will scroll up as you move down the page, Fixed will stay in view at all times and overlay the content and Absolute will overlay the content and scroll up as you move down the page."
                                    value={ attributes.main_position }
                                    options={ [
                                        { label: 'Default', value: null },
                                        { label: 'Relative', value: 'relative' },
                                        { label: 'Fixed', value: 'fixed' },
                                        { label: 'Absolute', value: 'absolute' },
                                    ] }
                                    onChange={ ( value ) => onChange( 'main_position', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Display Top Bar' }
                                    help="Include a bar above or below the main menu to display company details, social media links and additional menus."
                                    checked={ attributes.include_top_bar }
                                    onChange={ ( value ) => onChange( 'include_top_bar', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Display Search' }
                                    help="Include a search button in the main menu and allow users to do fast, ajax searches."
                                    checked={ attributes.include_search }
                                    onChange={ ( value ) => onChange( 'include_search', value ) }
                                />
                            </areoi.components.PanelRow>

                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Display More Menu' }
                                    help="Include a menu button in the main menu to display a full menu. The more menu can go as many levels deep as you like."
                                    checked={ attributes.include_more }
                                    onChange={ ( value ) => onChange( 'include_more', value ) }
                                />
                            </areoi.components.PanelRow>

                            {
                                attributes.include_more && 
                                <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
                                    <areoi.components.ToggleControl 
                                        label={ 'Display Feature Menu' }
                                        help="Show featured pages along with there title and featured image. This can only be included if you also display the More Menu."
                                        checked={ attributes.include_feature }
                                        onChange={ ( value ) => onChange( 'include_feature', value ) }
                                    />
                                </areoi.components.PanelRow>
                            }

                        </areoi.components.PanelBody>

                        <areoi.components.PanelBody title={ 'Templates' } initialOpen={ false }>
                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.SelectControl
                                    label="Main Menu Template"
                                    labelPosition="top"
                                    help="All templates include the same content, but display them in different ways. Includes logo, menu, search and more menu."
                                    value={ attributes.main_template_filename }
                                    options={ areoi_lightspeed_vars.templates.header_main }
                                    onChange={ ( value ) => onChange( 'main_template_filename', value ) }
                                />
                            </areoi.components.PanelRow>

                            {
                                attributes.include_top_bar &&
                                <areoi.components.PanelRow className="areoi-panel-row">
                                    <areoi.components.SelectControl
                                        label="Top Bar Template"
                                        labelPosition="top"
                                        help="All templates include the same content, but display them in different ways. Includes company details, menu and social media."
                                        value={ attributes.top_bar_template_filename }
                                        options={ areoi_lightspeed_vars.templates.header_top_bar }
                                        onChange={ ( value ) => onChange( 'top_bar_template_filename', value ) }
                                    />
                                </areoi.components.PanelRow>
                            }

                            { 
                                attributes.include_search &&
                                <areoi.components.PanelRow className="areoi-panel-row">
                                    <areoi.components.SelectControl
                                        label="Search Template"
                                        labelPosition="top"
                                        help="All templates include the same content, but display them in different ways. Includes search and results."
                                        value={ attributes.search_template_filename }
                                        options={ areoi_lightspeed_vars.templates.header_search }
                                        onChange={ ( value ) => onChange( 'search_template_filename', value ) }
                                    />
                                </areoi.components.PanelRow>
                            }

                            {
                                attributes.include_more &&
                                <areoi.components.PanelRow className="areoi-panel-row">
                                    <areoi.components.SelectControl
                                        label="More Menu Template"
                                        labelPosition="top"
                                        help="All templates include the same content, but display them in different ways. Includes company details, menu and social media."
                                        value={ attributes.more_template_filename }
                                        options={ areoi_lightspeed_vars.templates.header_more }
                                        onChange={ ( value ) => onChange( 'more_template_filename', value ) }
                                    />
                                </areoi.components.PanelRow>
                            }

                            { 
                                attributes.include_more && attributes.include_feature &&
                                <areoi.components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
                                    <areoi.components.SelectControl
                                        label="Feature Menu Template"
                                        labelPosition="top"
                                        help="All templates include the same content, but display them in different ways. Includes menu."
                                        value={ attributes.feature_template_filename }
                                        options={ areoi_lightspeed_vars.templates.header_feature }
                                        onChange={ ( value ) => onChange( 'feature_template_filename', value ) }
                                    />
                                </areoi.components.PanelRow>
                            }

                        </areoi.components.PanelBody>

                        {
                            attributes.include_top_bar &&
                            <>
                                <areoi.components.PanelBody title={ 'Top Bar' } initialOpen={ false }>

                                    <areoi.components.PanelRow className="areoi-panel-row">
                                        <areoi.components.SelectControl
                                            label="Placement"
                                            labelPosition="top"
                                            help="Position the top bar above or below the main menu bar."
                                            value={ attributes.top_bar_placement }
                                            options={ [
                                                { label: 'Default', value: null },
                                                { label: 'Above Main', value: '1' },
                                                { label: 'Below Main', value: '2' },
                                            ] }
                                            onChange={ ( value ) => onChange( 'top_bar_placement', value ) }
                                        />
                                    </areoi.components.PanelRow>

                                    <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                        <areoi.components.ToggleControl 
                                            label={ 'Include Company Details' }
                                            help="When chekced will include email and phone (if available)."
                                            checked={ attributes.top_bar_include_company }
                                            onChange={ ( value ) => onChange( 'top_bar_include_company', value ) }
                                        />
                                    </areoi.components.PanelRow>

                                    <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                        <areoi.components.ToggleControl 
                                            label={ 'Include Social' }
                                            help="When checked will display all social media links (if available)."
                                            checked={ attributes.top_bar_include_social }
                                            onChange={ ( value ) => onChange( 'top_bar_include_social', value ) }
                                        />
                                    </areoi.components.PanelRow>

                                    <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                        <areoi.components.ToggleControl 
                                            label={ 'Include Menu' }
                                            help="When checked will include a menu of your choosing."
                                            checked={ attributes.top_bar_include_menu }
                                            onChange={ ( value ) => onChange( 'top_bar_include_menu', value ) }
                                        />
                                    </areoi.components.PanelRow>

                                    {
                                        attributes.top_bar_include_menu && 
                                        <areoi.components.PanelRow className="areoi-panel-row">
                                            <areoi.components.SelectControl
                                                label="Menu"
                                                labelPosition="top"
                                                help="Select from your available menus. Menus can be edited under WP > Appearanece > Menus"
                                                value={ attributes.top_bar_menu_id }
                                                options={ areoi_vars.menus }
                                                onChange={ ( value ) => onChange( 'top_bar_menu_id', value ) }
                                            />
                                        </areoi.components.PanelRow>
                                    }

                                    { areoi.ColorPicker( areoi, attributes, onChange, 'top_bar_background_color', 'Background Color' ) }

                                    { areoi.ColorPicker( areoi, attributes, onChange, 'top_bar_text_color', 'Text Color' ) }

                                    <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
                                        <areoi.components.ToggleControl 
                                            label={ 'Include Border' }
                                            checked={ attributes.top_bar_include_border }
                                            onChange={ ( value ) => onChange( 'top_bar_include_border', value ) }
                                        />
                                    </areoi.components.PanelRow>

                                    {
                                        attributes.top_bar_include_border &&
                                        <>
                                            { areoi.ColorPicker( areoi, attributes, onChange, 'top_bar_border_color', 'Border Color' ) }

                                            <areoi.components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
                                                <label className="areoi-panel-row__label">Border Width</label>
                                                <table>
                                                    <tr>
                                                        <td>
                                                            <areoi.components.TextControl
                                                                label=""
                                                                value={ attributes.top_bar_border_width }
                                                                onChange={ ( value ) => onChange( 'top_bar_border_width', value ) }
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
                                    attributes.top_bar_include_menu &&
                                    <areoi.components.PanelBody title={ 'Top Bar (Dropdowns)' } initialOpen={ false }>

                                        { areoi.ColorPicker( areoi, attributes, onChange, 'top_bar_dropdown_background_color', 'Background Color' ) }

                                        { areoi.ColorPicker( areoi, attributes, onChange, 'top_bar_dropdown_text_color', 'Text Color' ) }

                                    </areoi.components.PanelBody>
                                }
                            </>
                        }

                        <areoi.components.PanelBody title={ 'Main Menu' } initialOpen={ false }>

                            <areoi.components.PanelRow className="areoi-panel-row">
                                <areoi.components.SelectControl
                                    label="Padding"
                                    labelPosition="top"
                                    help="Choose how much padding to apply top and bottom to the main header bar."
                                    value={ attributes.padding }
                                    options={ [
                                        { label: 'Default', value: '' },
                                        { label: 'Small', value: 'sm' },
                                        { label: 'Medium', value: 'md' },
                                        { label: 'Large', value: 'lg' },
                                    ] }
                                    onChange={ ( value ) => onChange( 'padding', value ) }
                                />
                            </areoi.components.PanelRow>

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

                            <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                <areoi.components.ToggleControl 
                                    label={ 'Include Main Menu' }
                                    help="When checked a menu of your choosing will be included within the main menu bar."
                                    checked={ attributes.main_include_menu }
                                    onChange={ ( value ) => onChange( 'main_include_menu', value ) }
                                />
                            </areoi.components.PanelRow>

                            {
                                attributes.main_include_menu && 
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
                            }

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
                                <areoi.components.SelectControl
                                    label="Logo Color (Scroll)"
                                    labelPosition="top"
                                    help="Choose between the light or dark variation of your logo / icon when a user scrolls."
                                    value={ attributes.logo_color_scroll }
                                    options={ [
                                        { label: 'Default', value: '' },
                                        { label: 'Dark', value: 'dark' },
                                        { label: 'Light', value: 'light' },
                                    ] }
                                    onChange={ ( value ) => onChange( 'logo_color_scroll', value ) }
                                />
                            </areoi.components.PanelRow>

                            { areoi.ColorPicker( areoi, attributes, onChange, 'main_background_color', 'Background Color' ) }

                            { areoi.ColorPicker( areoi, attributes, onChange, 'main_background_color_scroll', 'Background Color (On Scroll)' ) }

                            { areoi.ColorPicker( areoi, attributes, onChange, 'main_text_color', 'Text Color' ) }

                            { areoi.ColorPicker( areoi, attributes, onChange, 'main_text_color_scroll', 'Text Color (On Scroll)' ) }

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

                                    { areoi.ColorPicker( areoi, attributes, onChange, 'main_border_color_scroll', 'Border Color (On Scroll)' ) }

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
                            attributes.main_include_menu &&
                            <areoi.components.PanelBody title={ 'Main Menu (Dropdowns)' } initialOpen={ false }>

                                { areoi.ColorPicker( areoi, attributes, onChange, 'main_dropdown_background_color', 'Background Color' ) }

                                { areoi.ColorPicker( areoi, attributes, onChange, 'main_dropdown_text_color', 'Text Color' ) }

                            </areoi.components.PanelBody>
                        }
                        
                        { 
                            ( attributes.include_more || attributes.include_search ) &&
                            <areoi.components.PanelBody title={ 'More Menu & Search' } initialOpen={ false }>

                                <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                    <areoi.components.ToggleControl 
                                        label={ 'Display Company Details' }
                                        help="When chekced will include address, email and phone (if available)."
                                        checked={ attributes.more_include_company }
                                        onChange={ ( value ) => onChange( 'more_include_company', value ) }
                                    />
                                </areoi.components.PanelRow>

                                <areoi.components.PanelRow className={ 'areoi-panel-row' }>
                                    <areoi.components.ToggleControl 
                                        label={ 'Display Social Media' }
                                        help="When checked will display all social media links (if available)."
                                        checked={ attributes.more_include_social }
                                        onChange={ ( value ) => onChange( 'more_include_social', value ) }
                                    />
                                </areoi.components.PanelRow>

                                <areoi.components.PanelRow className="areoi-panel-row">
                                    <areoi.components.SelectControl
                                        label="Menu"
                                        labelPosition="top"
                                        help="Select from your available menus. Menus can be edited under WP > Appearanece > Menus"
                                        value={ attributes.more_menu_id }
                                        options={ areoi_vars.menus }
                                        onChange={ ( value ) => onChange( 'more_menu_id', value ) }
                                    />
                                </areoi.components.PanelRow>

                                { areoi.ColorPicker( areoi, attributes, onChange, 'more_background_color', 'Background Color' ) }

                                { areoi.ColorPicker( areoi, attributes, onChange, 'more_text_color', 'Text Color' ) }

                                <areoi.components.PanelRow className={ 'areoi-panel-row areoi-panel-row-no-border' }>
                                    <areoi.components.ToggleControl 
                                        label={ 'Include Border' }
                                        checked={ attributes.more_include_border }
                                        onChange={ ( value ) => onChange( 'more_include_border', value ) }
                                    />
                                </areoi.components.PanelRow>

                                {
                                    attributes.more_include_border &&
                                    <>
                                        { areoi.ColorPicker( areoi, attributes, onChange, 'more_border_color', 'Border Color' ) }

                                        <areoi.components.PanelRow className="areoi-panel-row areoi-panel-row-no-border">
                                            <label className="areoi-panel-row__label">Border Width</label>
                                            <table>
                                                <tr>
                                                    <td>
                                                        <areoi.components.TextControl
                                                            label=""
                                                            value={ attributes.more_border_width }
                                                            onChange={ ( value ) => onChange( 'more_border_width', value ) }
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

                        { 
                            ( ( attributes.include_more && attributes.include_feature ) || attributes.include_search ) &&
                            <areoi.components.PanelBody title={ 'Feature Menu & Search Results' } initialOpen={ false }>

                                <areoi.components.PanelRow className="areoi-panel-row">
                                    <areoi.components.SelectControl
                                        label="Menu"
                                        labelPosition="top"
                                        help="Select from your available menus. Menus can be edited under WP > Appearanece > Menus"
                                        value={ attributes.feature_menu_id }
                                        options={ areoi_vars.menus }
                                        onChange={ ( value ) => onChange( 'feature_menu_id', value ) }
                                    />
                                </areoi.components.PanelRow>

                                { areoi.ColorPicker( areoi, attributes, onChange, 'feature_background_color', 'Background Color' ) }

                                { areoi.ColorPicker( areoi, attributes, onChange, 'feature_text_color', 'Text Color' ) }

                            </areoi.components.PanelBody>
                        }
                            
                    </areoi.editor.InspectorControls>

                    <ServerSideRender
		                block="areoi-lightspeed/header"
		                attributes={ attributes }
                        httpMethod="POST"
		            />
                </div>
            }
        </>
	);
}
