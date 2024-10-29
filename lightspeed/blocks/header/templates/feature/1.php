<?php  
$styles = '
	#' . lightspeed_get_block_id() . ' .areoi-feature-menu-1 {
		padding: 1rem 1rem 0 1rem;
	}
	#' . lightspeed_get_block_id() . ' .areoi-feature-menu-1 a {
		height: 33.33vh;
	}
	#' . lightspeed_get_block_id() . ' .areoi-feature-menu-1 .card {
		margin-bottom: 1rem;
	}
';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>
<div class="areoi-feature-menu areoi-feature-menu-1">
	<?php wp_nav_menu( [ 
		'menu' => $feature_menu_id,
		'walker' => new AREOI_HAF_Walker_Nav_Menu_Feature,
		'link_before' => '<span class="areoi-menu-item-label h5">',
		'link_after' => '</span>'
	] ); ?>
</div>