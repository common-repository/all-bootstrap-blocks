<?php  
$styles = '
	
';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>
<div class="areoi-feature-menu areoi-feature-menu-3">
	<?php wp_nav_menu( [ 
		'menu' => $feature_menu_id, 
		'container_class' => 'areoi-drag-container h-100',
		'walker' => new AREOI_HAF_Walker_Nav_Menu_Feature,
		'link_before' => '<span class="areoi-menu-item-label h5">',
		'link_after' => '</span>'
	] ); ?>
</div>