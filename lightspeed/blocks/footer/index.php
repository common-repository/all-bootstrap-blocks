<?php
require_once( lightspeed_get_template_directory( 'footer', 'classes/class.areoi.walker-nav-primary.php' ) );

function lightspeed_render_block_footer( $attributes, $content ) 
{
	global $lightspeed_attributes;
	$lightspeed_attributes 	= $attributes;
	
	$block_id 				= lightspeed_get_block_id_append();
	$template_id 			= !empty( $attributes['template_id'] ) ? $attributes['template_id'] : 1;
	$logo  					= lightspeed_get_attribute( 'logo', 'logo' );
	$container  			= !empty( $attributes['container'] ) ? $attributes['container'] : 'container';
	
	$include_logo  			= !empty( $attributes['include_logo'] ) ? $attributes['include_logo'] : false;
	$include_social  		= !empty( $attributes['include_social'] ) ? $attributes['include_social'] : false;
	$include_company  		= !empty( $attributes['include_company'] ) ? $attributes['include_company'] : false;
	$include_main_menu  	= !empty( $attributes['include_main_menu'] ) ? $attributes['include_main_menu'] : false;
	$include_bottom_bar  	= !empty( $attributes['include_bottom_bar'] ) ? $attributes['include_bottom_bar'] : false;
	$include_bottom_bar_menu= !empty( $attributes['include_bottom_bar_menu'] ) ? $attributes['include_bottom_bar_menu'] : false;
	$include_bottom_bar_text= !empty( $attributes['include_bottom_bar_text'] ) ? $attributes['include_bottom_bar_text'] : false;

	$company_name 			= lightspeed_get_attribute( 'company_name', get_option( 'areoi-lightspeed-company-name', null ) );
	$company_address 		= lightspeed_get_attribute( 'company_address', get_option( 'areoi-lightspeed-company-address', null ) );
	$company_phone 			= lightspeed_get_attribute( 'company_phone', get_option( 'areoi-lightspeed-company-phone', null ) );
	$company_email 			= lightspeed_get_attribute( 'company_email', get_option( 'areoi-lightspeed-company-email', null ) );

	$social_facebook 		= lightspeed_get_attribute( 'social_facebook', get_option( 'areoi-lightspeed-company-facebook', null ) );
	$social_twitter 		= lightspeed_get_attribute( 'social_twitter', get_option( 'areoi-lightspeed-company-twitter', null ) );
	$social_instagram 		= lightspeed_get_attribute( 'social_instagram', get_option( 'areoi-lightspeed-company-instagram', null ) );
	$social_linkedin 		= lightspeed_get_attribute( 'social_linkedin', get_option( 'areoi-lightspeed-company-linkedin', null ) );
	$social_tiktok 			= lightspeed_get_attribute( 'social_tiktok', get_option( 'areoi-lightspeed-company-tiktok', null ) );
	$social_pinterest 		= lightspeed_get_attribute( 'social_pinterest', get_option( 'areoi-lightspeed-company-pinterest', null ) );
	$social_youtube 		= lightspeed_get_attribute( 'social_youtube', get_option( 'areoi-lightspeed-company-youtube', null ) );

	$template_filename 		= !empty( $attributes['template_filename'] ) ? $attributes['template_filename'] : '1.php';
	$main_menu_id 			= !empty( $attributes['main_menu_id'] ) ? $attributes['main_menu_id'] : null;
	$main_menu_columns 		= !empty( $attributes['main_menu_columns'] ) ? $attributes['main_menu_columns'] : 4;
	$bottom_bar_menu_id 		= !empty( $attributes['bottom_bar_menu_id'] ) ? $attributes['bottom_bar_menu_id'] : null;
	$bottom_bar_text 		= !empty( $attributes['bottom_bar_text'] ) ? $attributes['bottom_bar_text'] : 'All rights reserved. &copy; Copyright ' . get_bloginfo( 'name' ) . ' ' . date( 'Y' ) . '.';
	
	$filename 				= lightspeed_get_template_directory( 'footer', 'templates/' . $template_filename );

	$template = sanitize_title( str_replace( '.php', '', $template_filename ) );

	$styles = '';

	$block = array(
		'attrs' => $attributes
	);
	ob_start(); include( AREOI__PLUGIN_LIGHTSPEED_DIR . 'blocks/footer/styles/customisations.php' );
	$styles .= ob_get_clean();

	ob_start();

	echo '<style>';
		echo areoi_minify_css( $styles );
	echo '</style>';

	echo '<div id="' . ( $block_id ? 'block-' . $block_id : '' ) . '" class="areoi-lightspeed-block areoi-footer-' . $template . ' areoi-footer">';
		include( $filename );
	echo '</div>';

	$content = ob_get_clean();

	return $content;
}