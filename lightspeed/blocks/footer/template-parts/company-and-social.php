<?php 
if ( empty( $justify_content ) ) $justify_content = 'center';
if ( $include_social || $include_company ) : ?>

	<div class="offcanvas-body text-<?php echo $justify_content ?> flex-grow-0 overflow-hidden">
		
		<?php if ( $include_social ) : ?>
			<div class="mb-3 d-flex justify-content-<?php echo $justify_content ?>">
				<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/social-media.php' ) ) ?>
			</div>
		<?php endif; ?>

		<?php if ( $include_company ) : ?>
			<?php if ( $company_address ) : ?>	
				<div class="mb-3 d-flex align-items-center justify-content-<?php echo $justify_content ?>">
					<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/company-details-address.php' ) ) ?>
				</div>
			<?php endif; ?>
			
			<?php if ( $company_email || $company_phone ) : ?>
				<div class="d-flex justify-content-<?php echo $justify_content ?>">
			
					<?php if ( $company_email ) : ?>
						<a href="mailto:<?php echo $company_email ?>" class="d-flex align-items-center me-2">
							<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/company-details-email.php' ) ) ?>
						</a>
					<?php endif; ?>
					
					<?php if ( $company_phone ) : ?>
						<a href="tel:<?php echo $company_phone ?>" class="d-flex align-items-center ms-2 me-2">
							<?php include( lightspeed_get_template_directory( 'footer', 'template-parts/company-details-phone.php' ) ) ?>
						</a>
					<?php endif; ?>
				</div>
			<?php endif; ?>
		<?php endif; ?>

	</div>

<?php endif; ?>