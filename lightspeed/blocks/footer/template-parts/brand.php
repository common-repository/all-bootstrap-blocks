<div class="areoi-header-brand h-100">
	<p class="mb-0 h-100">
		<a class="h-100" href="<?php echo home_url() ?>" title="<?php echo get_bloginfo( 'name' ) ?>">
			
			<?php if ( !empty( lightspeed_get_logo( lightspeed_get_attribute( 'logo', null ), lightspeed_get_attribute( 'logo_color', 'light' ) ) ) ) : ?>
				<?php echo lightspeed_get_logo( lightspeed_get_attribute( 'logo', null ), lightspeed_get_attribute( 'logo_color', 'light' ) ) ?>
			<?php else : ?>
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 51.4 53.3" style="enable-background:new 0 0 51.4 53.3;" xml:space="preserve">
					<path xmlns="http://www.w3.org/2000/svg" d="M23.6,2.9L2.8,50.4l0,0c6.7,0,12.8-4,15.5-10.1L34.8,2.9H23.6z"/>
					<path xmlns="http://www.w3.org/2000/svg" d="M37.1,39.7c4.3,0,8.4,1.7,11.5,4.7l-11.5-26L25.7,44.3C28.8,41.5,32.9,39.8,37.1,39.7z"/>
				</svg>
			<?php endif; ?>
		</a>
	</p>	
</div>