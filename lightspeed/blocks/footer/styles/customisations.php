<?php 
global $areoi_theme_colors;

$logo_height  			= !empty( $attributes['logo_height'] ) ? $attributes['logo_height'] : '40';

$main_position 			= !empty( $block['attrs']['main_position'] ) ? $block['attrs']['main_position'] : 'relative';
$main_background_color  = !empty( $block['attrs']['main_background_color']['hex'] ) ? $block['attrs']['main_background_color']['hex'] : $areoi_theme_colors['dark'];
$main_text_color  		= !empty( $block['attrs']['main_text_color']['hex'] ) ? $block['attrs']['main_text_color']['hex'] : $areoi_theme_colors['light'];
$main_include_border 	= !empty( $block['attrs']['main_include_border'] ) ? $block['attrs']['main_include_border'] : false;
$main_border_color  	= !empty( $block['attrs']['main_border_color']['hex'] ) ? $block['attrs']['main_border_color']['hex'] : $areoi_theme_colors['light'];
$main_border_width 		= !empty( $block['attrs']['main_border_width'] ) ? $block['attrs']['main_border_width'] : 1;

$bottom_bar_background_color = !empty( $block['attrs']['bottom_bar_background_color']['hex'] ) ? $block['attrs']['bottom_bar_background_color']['hex'] : $areoi_theme_colors['light'];
$bottom_bar_text_color  	= !empty( $block['attrs']['bottom_bar_text_color']['hex'] ) ? $block['attrs']['bottom_bar_text_color']['hex'] : $areoi_theme_colors['dark'];
$bottom_bar_include_border 	= !empty( $block['attrs']['bottom_bar_include_border'] ) ? $block['attrs']['bottom_bar_include_border'] : false;
$bottom_bar_border_color  	= !empty( $block['attrs']['bottom_bar_border_color']['hex'] ) ? $block['attrs']['bottom_bar_border_color']['hex'] : 'rgba( 0, 0, 0, 0 )';
$bottom_bar_border_width 	= !empty( $block['attrs']['bottom_bar_border_width'] ) ? $block['attrs']['bottom_bar_border_width'] : 1;

if ( $block_id ) {

	$style_start = '#block-' . $block_id;

	$styles .= '
		' . $style_start . ' .areoi-footer-strip {
			background: ' . $main_background_color . ';
			color: ' . $main_text_color . ';
			' . ( $main_include_border ? 'border-top: ' . $main_border_width . 'px solid ' . $main_border_color . ';' : '' ) . '
		}
		' . $style_start . ' .areoi-footer-strip .areoi-header-brand svg path {
			fill: ' . $main_text_color . ';
		}
		' . $style_start . ' .areoi-footer-strip a,
		' . $style_start . ' .areoi-footer-strip p {
			color: ' . $main_text_color . ';
			text-decoration: none;
		}

		' . $style_start . ' .areoi-footer-bottom-bar {
			background: ' . $bottom_bar_background_color . ';
			color: ' . $bottom_bar_text_color . ';
			' . ( $bottom_bar_include_border ? 'border-top: ' . $bottom_bar_border_width . 'px solid ' . $bottom_bar_border_color . ';' : '' ) . '
		}
		' . $style_start . ' .areoi-footer-bottom-bar a,
		' . $style_start . ' .areoi-footer-bottom-bar p {
			color: ' . $bottom_bar_text_color . ';
		}
		' . $style_start . ' .areoi-header-brand img,
		' . $style_start . ' .areoi-header-brand svg {
			width: auto;
			height: ' . $logo_height . 'px;
			display: inline-block;
		}
	';
}
echo $styles;