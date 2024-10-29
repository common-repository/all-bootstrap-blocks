<?php  
$styles = '

';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>

<div class="areoi-main-menu areoi-main-menu-1 w-100">

	<div class="<?php echo $container ?> h-100">
		<div class="row h-100">
			<div class="col d-flex align-items-center justify-content-between h-100">

				<?php include( lightspeed_get_template_directory( 'header', 'template-parts/header-brand.php' ) ) ?>

				<?php if ( $main_include_menu ) : ?>
					<?php wp_nav_menu( [ 
						'menu' 				=> $main_menu_id,
						'menu_class'    	=> 'm-0', 
						'container_class' 	=> 'areoi-header-menu flex-grow-1 d-none d-lg-flex justify-content-center',
						'walker' 			=> new AREOI_HAF_Walker_Nav_Menu_Primary
					] ); ?>
				<?php endif; ?>

				<?php if ( $include_btns ) : ?>
					<div class="areoi-header-btns justify-content-end">
						<?php if ( $include_search ) : ?>
							<?php include( lightspeed_get_template_directory( 'header', 'template-parts/header-search-btn.php' ) ) ?>
						<?php endif; ?>

						<?php include( lightspeed_get_template_directory( 'header', 'template-parts/header-more-btn.php' ) ) ?>
					</div>
				<?php endif; ?>

			</div>
		</div>
	</div>
</div>