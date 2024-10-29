<?php  
$styles = '

';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>


<?php if ( $include_logo ) : ?>
	<div class="areoi-footer-strip">
		<div class="<?php echo $container ?>">
			<div class="row">
				<div class="col text-center pt-4 pb-4">
					<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/brand.php' ) ) ?>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>

<?php if ( $include_main_menu ) : ?>
	<div class="areoi-footer-strip areoi-footer-main-menu">
		<div class="<?php echo $container ?>">
			<div class="row">
				<div class="col text-center pt-4 pb-4">
					<?php wp_nav_menu( array( 
						'menu' 			=> $main_menu_id, 
						'container' 	=> false,
						'menu_class' 	=> 'row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-' . $main_menu_columns,
						'walker' 		=> new AREOI_HAF_Walker_Nav_Menu_Footer_Primary
					) ); ?>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>

<?php if ( $include_social || $include_company ) : ?>
	<div class="areoi-footer-strip">
		<div class="<?php echo $container ?>">
			<div class="row">
				<div class="col text-center pt-4 pb-4">
					<?php $justify_content = 'center'; include( lightspeed_get_template_directory( 'footer', 'template-parts/company-and-social.php' ) ) ?>
				</div>
			</div>
		</div>
	</div>
<?php endif; ?>

<?php if ( $include_bottom_bar ) : ?>
	<div class="areoi-footer-strip areoi-footer-bottom-bar">
		<div class="<?php echo $container ?>">
			<div class="row">
				<div class="col text-center pt-4 pb-4">

					<?php if ( $include_bottom_bar_menu ) : ?>
						<?php wp_nav_menu( [ 'menu' => $main_menu_id ] ); ?>
					<?php endif; ?>
					
					<?php if ( $include_bottom_bar_menu && $bottom_bar_text ) : ?>
						<div class="mb-4"></div>
					<?php endif; ?>

					<?php if ( $bottom_bar_text ) : ?>
						<p class="m-0"><?php echo $bottom_bar_text ?></p>
					<?php endif; ?>

				</div>
			</div>
		</div>
	</div>
<?php endif; ?>