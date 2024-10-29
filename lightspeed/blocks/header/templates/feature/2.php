<?php  
$_walker 			= new AREOI_HAF_Walker_Nav_Menu_LogoCenter();
$full_menu          = wp_get_nav_menu_items( $feature_menu_id );
$menu_total_count 	= 0;
if ( is_array( $full_menu ) ) {
	$full_menu          = array_values( array_filter( $full_menu, array( $_walker, 'parent_items' ) ) );
	$menu_total_count   = count( $full_menu );
}

$styles = '
	#' . lightspeed_get_block_id() . ' .areoi-feature-menu-2 .card {
		border-radius: 0;
	}
	#' . lightspeed_get_block_id() . ' .areoi-feature-menu-2 .areoi-menu-item-label {
		align-items: center;
		justify-content: center;
	}
';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>
<div class="areoi-feature-menu areoi-feature-menu-2">

	<div id="block-<?php echo $block_id ?>-feature" class="carousel slide h-100" data-bs-ride="carousel" data-bs-ride="carousel" data-bs-interval="2000">

		<?php if ( $menu_total_count > 0 ) : ?>
			<div class="carousel-indicators">
				<?php for ( $i = 0; $i < $menu_total_count; $i++ ) : ?>
					<button 
					type="button" 
					data-bs-target="#block-<?php echo $block_id ?>-feature" 
					data-bs-slide-to="<?php echo $i ?>" 
					<?php echo $i == 0 ? 'class="active"' : '' ?> 
					aria-current="true" 
					aria-label="Slide <?php echo $i+1 ?>"
					></button>
				<?php endfor; ?>
			</div>
		<?php endif; ?>

		<?php wp_nav_menu( [ 
			'menu' => $feature_menu_id, 
			'container' => false,
			'menu_class' => 'carousel-inner h-100',
			'walker' => new AREOI_HAF_Walker_Nav_Menu_Feature_Carousel,
			'link_before' => '<span class="areoi-menu-item-label h5">',
			'link_after' => '</span>'
		] ); ?>
		
		<button class="carousel-control-prev" type="button" data-bs-target="#block-<?php echo $block_id ?>-feature" data-bs-slide="prev">
			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Previous</span>
		</button>
		<button class="carousel-control-next" type="button" data-bs-target="#block-<?php echo $block_id ?>-feature" data-bs-slide="next">
			<span class="carousel-control-next-icon" aria-hidden="true"></span>
			<span class="visually-hidden">Next</span>
		</button>
	</div>

</div>