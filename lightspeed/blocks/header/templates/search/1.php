<?php  
$styles = '
	#' . lightspeed_get_block_id() . ' .areoi-search-menu-1 .areoi-feature-menu {
		padding: 1rem 1rem 0 1rem;
	}
	#' . lightspeed_get_block_id() . ' .areoi-search-menu-1 .areoi-feature-menu a {
		height: 33.33vh;
	}
	#' . lightspeed_get_block_id() . ' .areoi-search-menu-1 .areoi-feature-menu .card {
		margin-bottom: 1rem;
	}
';

if ( trim( $styles ) ) echo '<style>' . areoi_minify_css( $styles ) . '</style>';
?>

<?php $justify_content = $more_template_filename == '1.php' ? 'center' : 'start'; ?>
<div class="offcanvas offcanvas-end areoi-search-menu areoi-search-menu-1 areoi-more-menu" tabindex="-1" id="offcanvas-search<?php echo $block_id ? '-' . $block_id : '' ?>" aria-labelledby="offcanvas-search-title">

	<div class="offcanvas-header d-flex justify-content-end">
		<?php include( lightspeed_get_template_directory( 'header', 'template-parts/offcanvas-close.php' ) ) ?>
	</div>

	<div class="offcanvas-body d-flex align-items-center text-<?php echo $justify_content ?>">
		<form role="search" method="get" class="areoi-search-menu-form flex-grow-1" action="<?php echo esc_url( home_url( '/' ) ); ?>">
			<p class="h2"><?php _e( 'Search site.', AREOI__TEXT_DOMAIN) ?></p>
			<p><?php _e( 'Enter a keyword or phrase below.', AREOI__TEXT_DOMAIN) ?></p>
			<input type="text" class="form-control form-control-lg" placeholder="<?php _e( 'Enter search term...', AREOI__TEXT_DOMAIN) ?>" value="<?php echo get_search_query(); ?>" name="s" />

			
		</form>
	</div>

	<div class="areoi-feature-menu areoi-search-menu-container">

		<ul class="areoi-search-menu-results"></ul>

		<div class="areoi-search-menu-loader text-<?php echo $justify_content ?>">
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
		</div>
	</div>

	<?php include( lightspeed_get_template_directory( 'header', 'template-parts/company-and-social.php' ) ) ?>
</div>