<?php if ( $company_email || $company_phone ) : ?>
	<ul class="list-unstyled d-flex m-0 p-0">

		<?php if ( $company_email ) : ?>
			<li class="me-4">
				<a href="mailto:<?php echo $company_email ?>" class="d-flex align-items-center">
					<?php include( lightspeed_get_template_directory( 'header', 'template-parts/company-details-email.php' ) ) ?>
				</a>
			</li>
		<?php endif; ?>

		<?php if ( $company_phone ) : ?>
			<li>
				<a href="tel:<?php echo $company_phone ?>" class="d-flex align-items-center">
					<?php include( lightspeed_get_template_directory( 'header', 'template-parts/company-details-phone.php' ) ) ?>
				</a>
			</li>
		<?php endif; ?>
		
	</ul>
<?php endif; ?>