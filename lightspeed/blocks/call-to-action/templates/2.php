<?php  
$styles = '
#' . lightspeed_get_block_id() . '.areoi-lightspeed-block .btn {
	width: 100%;
}
';
?>
<?php if ( $styles ) : ?>
	<style><?php echo areoi_minify_css( $styles ) ?></style>
<?php endif; ?>

<div class="container h-100 position-relative">
	<div class="row h-100 align-items-center text-center text-md-start">
		<div class="col">

			<div class="row justify-content-between">
				<div class="col-md-10 col-lg-8 col-xl-6 col-xxl-5">
					<?php lightspeed_heading( 2 ) ?>

					<?php lightspeed_introduction() ?>
				</div>

				<div class="col-md-3 text-center text-md-end">
					<?php lightspeed_cta() ?>
				</div>
			</div>
			
		</div>
	
	</div>
</div>

<?php //lightspeed_stretched_link() ?>