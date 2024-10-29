<button 
	class="<?php echo $include_more ? 'd-inline-block' : 'd-inline-block d-lg-none' ?>" 
	data-bs-target="#offcanvas-more<?php echo $block_id ? '-' . $block_id : '' ?>" 
	data-bs-toggle="offcanvas"
	aria-label="Open Full Menu"
>
	<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="currentColor"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>
</button>