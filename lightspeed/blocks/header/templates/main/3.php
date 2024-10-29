<?php  
$styles = '
	#' . lightspeed_get_block_id() . ' .areoi-main-menu-3 .areoi-header-menu > ul > li .areoi-header-brand img {
		margin: 0 auto;
	}
';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>
<div class="areoi-main-menu areoi-main-menu-3 w-100">
	<div class="<?php echo $container ?> h-100">
		<div class="row h-100">
			<div class="col d-flex align-items-center justify-content-between h-100">

				<?php if ( $include_search ) : ?>
					<?php include( lightspeed_get_template_directory( 'header', 'template-parts/header-search-btn.php' ) ) ?>
				<?php endif; ?>

				<?php if ( $main_include_menu ) : ?>
					<?php wp_nav_menu( [ 
						'menu' 				=> $main_menu_id, 
						'menu_class'    	=> 'm-0 d-flex align-items-center', 
						'container_class' 	=> 'areoi-header-menu flex-grow-1 d-none d-lg-flex justify-content-center',
						'walker' 			=> new AREOI_HAF_Walker_Nav_Menu_LogoCenter,
						'logo' 				=> $logo,
						'logo_height'		=> $logo_height
					] ); ?>
				<?php endif; ?>

				<div class="<?php echo $main_include_menu ? 'd-block d-lg-none' : '' ?>">
					<?php include( lightspeed_get_template_directory( 'header', 'template-parts/header-brand.php' ) ) ?>	
				</div>

				<?php include( lightspeed_get_template_directory( 'header', 'template-parts/header-more-btn.php' ) ) ?>

			</div>
		</div>
	</div>
</div>