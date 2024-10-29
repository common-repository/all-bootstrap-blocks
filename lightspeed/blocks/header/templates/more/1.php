<?php  
$styles = '
	
';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>
<div class="<?php echo $include_more ? 'd-block' : 'd-block d-lg-none' ?>">
	<div class="offcanvas offcanvas-end areoi-more-menu areoi-more-menu-1" tabindex="-1" id="offcanvas-more<?php echo $block_id ? '-' . $block_id : '' ?>" aria-labelledby="offcanvas-more-title">

		<div class="offcanvas-header d-flex justify-content-end">
			<?php include( lightspeed_get_template_directory( 'header', 'template-parts/offcanvas-close.php' ) ) ?>
		</div>

		<div class="offcanvas-body offcanvas-body-main align-items-center justify-content-center d-flex">
			<div class="areoi-more-menu-main">
				<div class="d-block d-lg-none areoi-more-menu-container">
					<?php wp_nav_menu( [ 
						'menu' => $main_menu_id, 
						'container' => false,
						'walker' => new AREOI_HAF_Walker_Nav_Menu_More,
						'link_before' => '<span class="menu-item-label h5">',
						'link_after' => '</span>'
					] ); ?>
				</div>
				<?php wp_nav_menu( [ 
					'menu' => $more_menu_id, 
					'container_class' => 'areoi-more-menu-container',
					'walker' => new AREOI_HAF_Walker_Nav_Menu_More,
					'link_before' => '<span class="menu-item-label h5">',
					'link_after' => '</span>'
				] ); ?>
			</div>
		</div>

		<?php if ( file_exists( $feature_filename ) && $include_feature ) include( $feature_filename ); ?>

		<?php $justify_content = 'center'; include( lightspeed_get_template_directory( 'header', 'template-parts/company-and-social.php' ) ) ?>

	</div>
</div>