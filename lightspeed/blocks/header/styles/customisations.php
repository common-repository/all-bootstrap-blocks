<?php 
global $areoi_theme_colors;

$main_position 			= !empty( $block['attrs']['main_position'] ) ? $block['attrs']['main_position'] : 'relative';

$logo_height  			= !empty( $attributes['logo_height'] ) ? $attributes['logo_height'] : '40';


switch ( lightspeed_get_attribute( 'padding', null ) ) {
	case 'sm':
		$padding = 7.5;
		break;
	case 'lg':
		$padding = 30;
		break;
	default:
		$padding = 15;
		break;
}

$main_background_color  = !empty( $block['attrs']['main_background_color']['hex'] ) ? $block['attrs']['main_background_color']['hex'] : $areoi_theme_colors['light'];
$main_background_color_scroll  = !empty( $block['attrs']['main_background_color_scroll']['hex'] ) ? $block['attrs']['main_background_color_scroll']['hex'] : $areoi_theme_colors['light'];
$main_text_color  		= !empty( $block['attrs']['main_text_color']['hex'] ) ? $block['attrs']['main_text_color']['hex'] : $areoi_theme_colors['dark'];
$main_text_color_scroll = !empty( $block['attrs']['main_text_color_scroll']['hex'] ) ? $block['attrs']['main_text_color_scroll']['hex'] : $areoi_theme_colors['dark'];
$main_include_border 	= !empty( $block['attrs']['main_include_border'] ) ? $block['attrs']['main_include_border'] : false;
$main_border_color  	= !empty( $block['attrs']['main_border_color']['hex'] ) ? $block['attrs']['main_border_color']['hex'] : 'rgba( 0, 0, 0, 0 )';
$main_border_color_scroll = !empty( $block['attrs']['main_border_color_scroll']['hex'] ) ? $block['attrs']['main_border_color_scroll']['hex'] : 'rgba( 0, 0, 0, 0 )';
$main_border_width 		= !empty( $block['attrs']['main_border_width'] ) ? $block['attrs']['main_border_width'] : 1;

$main_dropdown_background_color = !empty( $block['attrs']['main_dropdown_background_color']['hex'] ) ? $block['attrs']['main_dropdown_background_color']['hex'] : $areoi_theme_colors['dark'];
$main_dropdown_text_color = !empty( $block['attrs']['main_dropdown_text_color']['hex'] ) ? $block['attrs']['main_dropdown_text_color']['hex'] : $areoi_theme_colors['light'];

$top_bar_background_color  	= !empty( $block['attrs']['top_bar_background_color']['hex'] ) ? $block['attrs']['top_bar_background_color']['hex'] : $areoi_theme_colors['dark'];
$top_bar_text_color  		= !empty( $block['attrs']['top_bar_text_color']['hex'] ) ? $block['attrs']['top_bar_text_color']['hex'] : $areoi_theme_colors['light'];
$top_bar_include_border 	= !empty( $block['attrs']['top_bar_include_border'] ) ? $block['attrs']['top_bar_include_border'] : false;
$top_bar_border_color  		= !empty( $block['attrs']['top_bar_border_color']['hex'] ) ? $block['attrs']['top_bar_border_color']['hex'] : 'rgba( 0, 0, 0, 0 )';
$top_bar_border_width 		= !empty( $block['attrs']['top_bar_border_width'] ) ? $block['attrs']['top_bar_border_width'] : 1;
$top_bar_dropdown_background_color = !empty( $block['attrs']['top_bar_dropdown_background_color']['hex'] ) ? $block['attrs']['top_bar_dropdown_background_color']['hex'] : $areoi_theme_colors['light'];
$top_bar_dropdown_text_color = !empty( $block['attrs']['top_bar_dropdown_text_color']['hex'] ) ? $block['attrs']['top_bar_dropdown_text_color']['hex'] : $areoi_theme_colors['dark'];

$more_background_color 	= !empty( $block['attrs']['more_background_color']['hex'] ) ? $block['attrs']['more_background_color']['hex'] : $areoi_theme_colors['light'];
$more_text_color  		= !empty( $block['attrs']['more_text_color']['hex'] ) ? $block['attrs']['more_text_color']['hex'] : $areoi_theme_colors['dark'];
$more_include_border 	= !empty( $block['attrs']['more_include_border'] ) ? $block['attrs']['more_include_border'] : false;
$more_border_color  	= !empty( $block['attrs']['more_border_color']['hex'] ) ? $block['attrs']['more_border_color']['hex'] : 'rgba( 0, 0, 0, 0 )';
$more_border_width 		= !empty( $block['attrs']['more_border_width'] ) ? $block['attrs']['more_border_width'] : 1;

$feature_background_color = !empty( $block['attrs']['feature_background_color']['hex'] ) ? $block['attrs']['feature_background_color']['hex'] : $areoi_theme_colors['dark'];
$feature_text_color  	= !empty( $block['attrs']['feature_text_color']['hex'] ) ? $block['attrs']['feature_text_color']['hex'] : $areoi_theme_colors['light'];

if ( $block_id ) {

	$style_start = '#block-' . $block_id;

	$styles .= '
		' . $style_start . ' {
			position: ' . $main_position . ';
			top: 0;
			z-index: 10;
		}
		' . $style_start . ' .areoi-header-brand img,
		' . $style_start . ' .areoi-header-brand svg {
			width: auto;
			height: ' . $logo_height . 'px;
			display: inline-block;
		}
		' . $style_start . ' .areoi-main-menu .areoi-header-brand svg path {
			fill: ' . $main_text_color . ';
		}
		' . $style_start . '.scrolled .areoi-main-menu .areoi-header-brand svg path {
			fill: ' . $main_text_color_scroll . ';
		}
		' . $style_start . ' .areoi-main-menu {
			background: ' . $main_background_color . ';
			padding: ' . $padding . 'px 0;
			' . ( $main_include_border ? 'border-bottom: ' . $main_border_width . 'px solid ' . $main_border_color . ';' : '' ) . '
		}
		' . $style_start . '.scrolled .areoi-main-menu {
			padding: 15px;
		}
		' . $style_start . '.scrolled .areoi-main-menu {
			background: ' . $main_background_color_scroll . ';
			border-color: ' . $main_border_color_scroll . ';' . '
		}

		' . $style_start . ' .areoi-main-menu .areoi-header-btns {
			border-color: ' . $main_text_color . ';
		}
		' . $style_start . '.scrolled .areoi-main-menu .areoi-header-btns {
			border-color: ' . $main_text_color_scroll . ';
		}

		' . $style_start . ' .areoi-main-menu,
		' . $style_start . ' .areoi-main-menu a,
		' . $style_start . ' .areoi-main-menu button {
			color: ' . $main_text_color . ';
			text-decoration: none;
		}
		' . $style_start . '.scrolled .areoi-main-menu,
		' . $style_start . '.scrolled .areoi-main-menu a,
		' . $style_start . '.scrolled .areoi-main-menu button {
			color: ' . $main_text_color_scroll . ';
		}

		' . $style_start . ' .areoi-main-menu .dropdown-menu {
			background: ' . $main_dropdown_background_color . ';
		}
		' . $style_start . ' .areoi-main-menu .dropdown-menu li {
			background: rgba( 0, 0, 0, 0 );
			color: ' . $main_dropdown_text_color . ';
		}
		' . $style_start . ' .areoi-main-menu .dropdown-menu li:hover {
			background: rgba( 0, 0, 0, 0.1 );
		}
		' . $style_start . ' .areoi-main-menu .dropdown-menu a {
			color: ' . $main_dropdown_text_color . ';
		}


		' . $style_start . ' .areoi-top-bar {
			background: ' . $top_bar_background_color . ';
			' . ( $top_bar_include_border ? 'border-bottom: ' . $top_bar_border_width . 'px solid ' . $top_bar_border_color . ';' : '' ) . '
			color: ' . $top_bar_text_color . ';
		}
		' . $style_start . ' .areoi-top-bar a,
		' . $style_start . ' .areoi-top-bar button {
			color: ' . $top_bar_text_color . ';
			text-decoration: none;
		}
		' . $style_start . ' .areoi-top-bar .dropdown-menu {
			background: ' . $top_bar_dropdown_background_color . ';
		}
		' . $style_start . ' .areoi-top-bar .dropdown-menu li {
			background: rgba( 0, 0, 0, 0 );
			color: ' . $top_bar_dropdown_text_color . ';
		}
		' . $style_start . ' .areoi-top-bar .dropdown-menu li:hover {
			background: rgba( 0, 0, 0, 0.1 );
		}
		' . $style_start . ' .areoi-top-bar .dropdown-menu a {
			color: ' . $top_bar_dropdown_text_color . ';
		}

		' . $style_start . ' .areoi-more-menu,
		' . $style_start . ' .areoi-more-menu .offcanvas-body {
			background: ' . $more_background_color . ';
			color: ' . $more_text_color . ';
		}
		' . $style_start . ' .areoi-more-menu {
			' . ( $more_include_border ? 'border-color: ' .  $more_border_color . ';' : '' ) . '
		}
		' . $style_start . ' .areoi-more-menu .offcanvas-body {
			' . ( $more_include_border ? 'border-top: ' . $more_border_width . 'px solid ' . $more_border_color . ';' : '' ) . '
		}
		' . $style_start . ' .areoi-more-menu p,
		' . $style_start . ' .areoi-more-menu a,
		' . $style_start . ' .areoi-more-menu button,
		' . $style_start . ' .areoi-more-menu .offcanvas-body a,
		' . $style_start . ' .areoi-more-menu .offcanvas-body button,
		' . $style_start . ' .areoi-more-menu a *,
		' . $style_start . ' .areoi-more-menu button *,
		' . $style_start . ' .areoi-more-menu .offcanvas-body a *,
		' . $style_start . ' .areoi-more-menu .offcanvas-body button * {
			color: ' . $more_text_color . ';
		}


		' . $style_start . ' .areoi-feature-menu {
			background: ' . $feature_background_color . ';
			color: ' . $feature_text_color . ';
		}
		' . $style_start . ' .areoi-feature-menu a,
		' . $style_start . ' .areoi-feature-menu button,
		' . $style_start . ' .areoi-feature-menu a *,
		' . $style_start . ' .areoi-feature-menu button * {
			color: ' . $feature_text_color . ';
			text-shadow: 0px 0px 10px ' . $feature_background_color . ';
		}
	';
}
echo $styles;