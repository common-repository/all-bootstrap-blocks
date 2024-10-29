<?php  
$styles = '
	#' . lightspeed_get_block_id() . ' .areoi-footer-3 .areoi-footer-phone a {
	    margin-left: 0 !important;
	}
';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>

<?php  
$row_columns = $include_company || $include_social ? $main_menu_columns - 1 : $main_menu_columns;
if ( $row_columns < 1 ) $row_columns = 1;
$company_columns = 12 / $main_menu_columns;
?>

<div class="areoi-footer-strip">
	<div class="<?php echo $container ?>">

		<div class="row pt-5 areoi-footer-main-menu">
			<div class="col">

				<?php if ( $include_logo ) : ?>
					<div class="mb-4">
						<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/brand.php' ) ) ?>
						<div class="mb-4 d-md-none"></div>
					</div>
				<?php endif; ?>

			</div>
		</div>

		<div class="row pb-5 areoi-footer-main-menu">
			
			<?php if ( $include_company || $include_social ) : ?>
				<div class="col-12 col-lg-<?php echo $company_columns ?>">

					<?php if ( $include_company ) : ?>
						<p class="h5"><?php _e( 'Get in Touch', AREOI__TEXT_DOMAIN ); ?></p>
						<?php if ( $company_address ) : ?>	
							<div class="mb-3 d-flex align-items-center">
								<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/company-details-address.php' ) ) ?>
							</div>
						<?php endif; ?>
					
						<?php if ( $company_email ) : ?>
							<div class="mb-3 d-flex align-items-center">
								<a href="mailto:<?php echo $company_email ?>" class="d-flex align-items-center me-2">
									<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/company-details-email.php' ) ) ?>
								</a>
							</div>
						<?php endif; ?>
						
						<?php if ( $company_phone ) : ?>
							<div class="mb-3 d-flex align-items-center areoi-footer-phone">
								<a href="tel:<?php echo $company_phone ?>" class="d-flex align-items-center ms-2 me-2">
									<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/company-details-phone.php' ) ) ?>
								</a>
							</div>
						<?php endif; ?>
					<?php endif; ?>

					<?php if ( $include_social ) : ?>
						<div class="mb-4">
							<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/social-media.php' ) ) ?>
						</div>
					<?php endif; ?>
					
				</div>
			<?php endif; ?>

			<?php if ( $include_main_menu ) : ?>
				<div class="col">
					<?php wp_nav_menu( array( 
						'menu' 			=> $main_menu_id, 
						'container' 	=> false,
						'menu_class' 	=> 'row row-cols-1 row-cols-sm-2 row-cols-lg-' . $row_columns,
						'walker' 		=> new AREOI_HAF_Walker_Nav_Menu_Footer_Primary
					) ); ?>
				</div>
			<?php endif; ?>
			
		</div>
	</div>
</div>

<?php if ( $include_bottom_bar ) : ?>
	<div class="areoi-footer-strip areoi-footer-bottom-bar">
		<div class="<?php echo $container ?>">
			<div class="row pt-4 pb-4">
				
				<?php if ( $include_bottom_bar_text ) : ?>
					<div class="col-12 col-md-6">
						<p class="m-0 text-center text-md-start"><?php echo $bottom_bar_text ?></p>
						<?php if ( $include_bottom_bar_menu ) : ?>
							<div class="mb-4 d-md-none"></div>
						<?php endif; ?>
					</div>
				<?php endif; ?>

				<?php if ( $include_bottom_bar_menu ) : ?>
					<div class="col-12 col-md-6">
						<?php wp_nav_menu( [ 
							'menu' => $bottom_bar_menu_id, 
							'menu_class' => 'justify-content-center ' . ( $include_bottom_bar_text ? 'justify-content-md-end' : 'justify-content-md-start' ),
							'container' => false
						] ); ?>
					</div>
				<?php endif; ?>
			</div>
		</div>
	</div>
<?php endif; ?>