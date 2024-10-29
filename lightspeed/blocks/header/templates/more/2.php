<?php  
$styles = '
	#' . lightspeed_get_block_id() . ' .areoi-more-menu-2 .areoi-more-menu-main ul .offcanvas-body {
		align-items: flex-start;
	}
	#' . lightspeed_get_block_id() . ' .areoi-more-menu-2 .areoi-more-menu-main,
	#' . lightspeed_get_block_id() . ' .areoi-more-menu-2 .areoi-more-menu-main ul .offcanvas-body ul {
		width: 100%;
		margin: 0 auto;
	}
	#' . lightspeed_get_block_id() . ' .areoi-more-menu-2 .areoi-more-menu-main ul li {
		margin-left: -20px;
		text-align: left;
	}
	#' . lightspeed_get_block_id() . ' .areoi-more-menu-2.show .areoi-more-menu-main > div > ul > li,
	#' . lightspeed_get_block_id() . ' .areoi-more-menu-2 .areoi-more-menu-main ul .offcanvas-body.active > ul > li {
		margin-left: 0;
	}
	#' . lightspeed_get_block_id() . ' .areoi-more-menu-2 .areoi-more-menu-main ul li > button {
		float: right;
	}
	#' . lightspeed_get_block_id() . ' .areoi-more-menu-2 .areoi-offcanvas-back {
		left: -14px;
		position: relative;
	}
';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>
<div class="<?php echo $include_more ? 'd-block' : 'd-block d-lg-none' ?>">
	<div class="offcanvas offcanvas-end areoi-more-menu areoi-more-menu-2" tabindex="-1" id="offcanvas-more<?php echo $block_id ? '-' . $block_id : '' ?>" aria-labelledby="offcanvas-more-title">

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

		<?php $justify_content = 'start'; include( lightspeed_get_template_directory( 'header', 'template-parts/company-and-social.php' ) ) ?>

		<?php if ( file_exists( $feature_filename ) && $include_feature ) include( $feature_filename ); ?>
	</div>
</div>