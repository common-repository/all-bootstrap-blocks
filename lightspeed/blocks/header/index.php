<?php
require_once( lightspeed_get_template_directory( 'header', 'classes/class.areoi.walker-nav-primary.php' ) );
require_once( lightspeed_get_template_directory( 'header', 'classes/class.areoi.walker-nav-logo-center.php' ) );
require_once( lightspeed_get_template_directory( 'header', 'classes/class.areoi.walker-nav-more.php' ) );
require_once( lightspeed_get_template_directory( 'header', 'classes/class.areoi.walker-nav-feature.php' ) );
require_once( lightspeed_get_template_directory( 'header', 'classes/class.areoi.walker-nav-feature-carousel.php' ) );

function lightspeed_render_block_header( $attributes, $content ) 
{
	global $lightspeed_attributes;
	$lightspeed_attributes 	= $attributes;

	$block_id 				= lightspeed_get_block_id_append();
	$logo  					= lightspeed_get_attribute( 'logo', null );
	$container  			= !empty( $attributes['container'] ) ? $attributes['container'] : 'container';
	$include_top_bar  		= !empty( $attributes['include_top_bar'] ) ? $attributes['include_top_bar'] : false;
	$include_search  		= !empty( $attributes['include_search'] ) ? $attributes['include_search'] : false;
	$include_more  			= !empty( $attributes['include_more'] ) ? $attributes['include_more'] : false;
	$include_feature  		= !empty( $attributes['include_feature'] ) ? $attributes['include_feature'] : false;
	$include_btns  			= $include_search || $include_more ? true : false;

	$company_name 		= lightspeed_get_attribute( 'company_name', get_option( 'areoi-lightspeed-company-name', null ) );
	$company_address 	= lightspeed_get_attribute( 'company_address', get_option( 'areoi-lightspeed-company-address', null ) );
	$company_phone 		= lightspeed_get_attribute( 'company_phone', get_option( 'areoi-lightspeed-company-phone', null ) );
	$company_email 		= lightspeed_get_attribute( 'company_email', get_option( 'areoi-lightspeed-company-email', null ) );

	$social_facebook 	= lightspeed_get_attribute( 'social_facebook', get_option( 'areoi-lightspeed-company-facebook', null ) );
	$social_twitter 	= lightspeed_get_attribute( 'social_twitter', get_option( 'areoi-lightspeed-company-twitter', null ) );
	$social_instagram 	= lightspeed_get_attribute( 'social_instagram', get_option( 'areoi-lightspeed-company-instagram', null ) );
	$social_linkedin 	= lightspeed_get_attribute( 'social_linkedin', get_option( 'areoi-lightspeed-company-linkedin', null ) );
	$social_tiktok 		= lightspeed_get_attribute( 'social_tiktok', get_option( 'areoi-lightspeed-company-tiktok', null ) );
	$social_pinterest 	= lightspeed_get_attribute( 'social_pinterest', get_option( 'areoi-lightspeed-company-pinterest', null ) );
	$social_youtube 	= lightspeed_get_attribute( 'social_youtube', get_option( 'areoi-lightspeed-company-youtube', null ) );

	// Load main template
	$main_template_filename = !empty( $attributes['main_template_filename'] ) ? $attributes['main_template_filename'] : '1.php';
	$main_position 			= !empty( $attributes['main_position'] ) ? $attributes['main_position'] : null;
	$main_include_menu 		= !empty( $attributes['main_include_menu'] ) ? true : false;
	$main_menu_id 			= !empty( $attributes['main_menu_id'] ) ? $attributes['main_menu_id'] : null;
	$main_filename 			= lightspeed_get_template_directory( 'header', 'templates/main/' . $main_template_filename );
	
	// Load top_bar template
	$top_bar_template_filename = !empty( $attributes['top_bar_template_filename'] ) ? $attributes['top_bar_template_filename'] : '1.php';
	$top_bar_placement 		= !empty( $attributes['top_bar_placement'] ) ? $attributes['top_bar_placement'] : 1;
	$top_bar_include_menu 	= !empty( $attributes['top_bar_include_menu'] ) ? true : false;
	$top_bar_include_company = !empty( $attributes['top_bar_include_company'] ) ? true : false;
	$top_bar_include_social = !empty( $attributes['top_bar_include_social'] ) ? true : false;
	$top_bar_menu_id 		= !empty( $attributes['top_bar_menu_id'] ) ? $attributes['top_bar_menu_id'] : null;
	$top_bar_filename 		= lightspeed_get_template_directory( 'header', 'templates/top_bar/' . $top_bar_template_filename );

	// Load more template
	$more_template_filename = !empty( $attributes['more_template_filename'] ) ? $attributes['more_template_filename'] : '1.php';
	$more_menu_id 			= !empty( $attributes['more_menu_id'] ) ? $attributes['more_menu_id'] : null;
	$more_include_company 	= !empty( $attributes['more_include_company'] ) ? true : false;
	$more_include_social 	= !empty( $attributes['more_include_social'] ) ? true : false;
	$more_filename 			= lightspeed_get_template_directory( 'header', 'templates/more/' . $more_template_filename );

	// Load feature template
	$feature_template_filename 	= !empty( $attributes['feature_template_filename'] ) ? $attributes['feature_template_filename'] : '1.php';
	$feature_menu_id 		= !empty( $attributes['feature_menu_id'] ) ? $attributes['feature_menu_id'] : null;
	$feature_filename 		= lightspeed_get_template_directory( 'header', 'templates/feature/' . $feature_template_filename );

	// Load search template
	$search_template_filename = !empty( $attributes['search_template_filename'] ) ? $attributes['search_template_filename'] : '1.php';
	$search_filename 		= lightspeed_get_template_directory( 'header', 'templates/search/' . $search_template_filename );

	$styles = '';
	
	$block = array(
		'attrs' => $attributes
	);
	ob_start(); include( AREOI__PLUGIN_LIGHTSPEED_DIR . 'blocks/header/styles/customisations.php' );
	$styles .= ob_get_clean();

	ob_start();

	echo '<div id="' . ( $block_id ? 'block-' . $block_id : '' ) . '" class="areoi-lightspeed-block w-100 areoi-header-container ' . ( in_array( $main_position, array( 'fixed', 'absolute' ) ) ? 'areoi-header-positioned' : '' ) . '">';

		echo '<style>';
			echo areoi_minify_css( $styles );
		echo '</style>';

		if ( file_exists( $top_bar_filename ) && $include_top_bar && $top_bar_placement == 1 ) include( $top_bar_filename );

		if ( file_exists( $main_filename ) ) include( $main_filename );

		if ( file_exists( $top_bar_filename ) && $include_top_bar && $top_bar_placement == 2 ) include( $top_bar_filename );

		if ( file_exists( $more_filename ) ) include( $more_filename );
		
		if ( file_exists( $search_filename ) && $include_search ) include( $search_filename );

	echo '</div>';

	$content = ob_get_clean();

	return $content;
}