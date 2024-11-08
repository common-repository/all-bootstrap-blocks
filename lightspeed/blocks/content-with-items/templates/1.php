<?php 
$styles = '
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .accordion-item {
	background: none;
}
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .accordion-button {
	background: none;
}
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .accordion-button:not(.collapsed,:focus) {
	box-shadow: none;
	border-bottom-style: solid;
	border-bottom-width: 1px;
}
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .accordion-body :last-of-type {
	margin-bottom: 0;
}
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .accordion-button:after {
	display: none;
}
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .accordion-button .bi-chevron-down {
	flex-shrink: 0;
    font-size: 22px;
    margin-left: auto !important;
    transition: transform 0.2s ease-in-out;
}
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .accordion-button:not(.collapsed) .bi-chevron-down {
	transform: rotate( 180deg );
}
';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100 position-relative">
	<div class="row h-100 align-items-center justify-content-between">
		
		<div class="col-lg-6 col-xxl-5 <?php echo lightspeed_get_attribute( 'alignment', 'start' ) == 'end' ? 'order-lg-1' : '' ?>">
			
			<?php lightspeed_heading( 2 ) ?>

			<div class="row justify-content-center justify-content-lg-start">
				<div class="col col-md-10">

					<?php lightspeed_introduction() ?>

					<?php lightspeed_cta() ?>
				</div>
			</div>
		</div>

		<?php if ( lightspeed_get_attribute( 'items', array() ) ) : ?>
			<div class="col-lg-6">
				<div class="h1 d-lg-none"></div>

				<?php lightspeed_accordion( lightspeed_get_attribute( 'items', array() ) ) ?>

			</div>
		<?php endif; ?>
	
	</div>
</div>