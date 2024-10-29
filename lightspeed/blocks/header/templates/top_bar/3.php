<div class="areoi-top-bar areoi-top-bar-3 d-none d-lg-block">
	<div class="<?php echo $container ?>">
		<div class="row">
			<div class="col d-flex justify-content-between">

				<?php if ( $top_bar_include_menu ) : ?>
					<?php wp_nav_menu( [ 
						'menu' 				=> $top_bar_menu_id, 
						'container_class' 	=> 'areoi-top-bar-menu justify-content-end',
						'walker' 			=> new AREOI_HAF_Walker_Nav_Menu_Primary
					] ); ?>
				<?php endif; ?>

				<?php if ( $top_bar_include_social ) include( lightspeed_get_template_directory( 'header', 'template-parts/social-media.php' ) ) ?>

				<?php if ( $top_bar_include_company ) include( lightspeed_get_template_directory( 'header', 'template-parts/company-details.php' ) ) ?>

			</div>
		</div>
	</div>
</div>