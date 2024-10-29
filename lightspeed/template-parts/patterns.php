<?php 
$has_pattern 			= get_option( 'areoi-lightspeed-styles-strip-pattern', false );
$pattern_container 		= get_option( 'areoi-lightspeed-styles-strip-pattern-container', 'container' );
$pattern_columns 		= get_option( 'areoi-lightspeed-styles-grid-columns', 4 );
$background_pattern = '';

if ( $has_pattern && !empty( $allow_pattern ) && empty( $attributes['exclude_pattern'] ) ) {

	$background_color = !empty( $attributes['background_utility'] ) ? $attributes['background_utility'] : 'body-bg';
	if ( empty( $attributes['background_utility'] ) && !empty( $attributes['background_color']['rgb'] ) ) $background_color = $attributes['background_color']['rgb'];
	$contrast = lightspeed_get_contrast_color( $background_color );
	
	$pattern_color = 'rgba( 0, 0, 0, 0.1 )';
	if ( $contrast == '#FFFFFF' ) {
		$pattern_color = 'rgba( 255, 255, 255, 0.2 )';
	}

	if ( !empty( $attributes['change_pattern_color'] ) && !empty( $attributes['pattern_color']['hex'] ) ) $pattern_color = $attributes['pattern_color']['hex'];
	
	switch ( $has_pattern ) {
		case 'grid':
			
			$background_pattern .= '
			<div class="areoi-background-pattern areoi-background-pattern-' . $has_pattern . '">
				<div class="' . $pattern_container . ' h-100">
					<div class="row h-100">
			';
				for ( $i = 1; $i <= $pattern_columns; $i++ ) {

					$style = 'border-left: 1px solid ' . $pattern_color . ';';
					if ( $i == $pattern_columns ) $style .= 'border-right: 1px solid ' . $pattern_color . ';';

					$background_pattern .= '
					<div 
						class="col h-100"
						style="' . $style . '"
					>
					</div>
					';
				}
				
			$background_pattern .= '
					</div>
				</div>
			</div>
			';

		break;
	case 'angle':
			
			$background_pattern .= '
			<div class="areoi-background-pattern areoi-background-pattern-' . $has_pattern . '">
				<div class="' . $pattern_container . ' h-100">
					<div class="row h-100">
						<div class="col">
						<div style="width: 50%; height: 400px; position: absolute; bottom: 0%; left: -20%; transform: skew(-32deg, 0deg); border: 1px solid ' . $pattern_color . ';">
							<div style="width: 100%; height: 400px; position: absolute; bottom: -50%; left: -30%; border: 1px solid ' . $pattern_color . ';"></div>
						</div>
						<div style="width: 50%; height: 400px; position: absolute; top: -20%; right: -30%; transform: skew(-32deg, 0deg); border: 1px solid ' . $pattern_color . ';">
							<div style="width: 100%; height: 400px; position: absolute; bottom: -50%; left: -30%; border: 1px solid ' . $pattern_color . ';"></div>
						</div>
						</div>
					</div>
				</div>
			</div>
			';

		break;
	}
}

return $background_pattern;