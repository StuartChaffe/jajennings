<?php

/**
 * Display Post Blocks 
 */

function origin_display_post_blocks() {
	global $post;
	origin_pp( esc_html( $post->post_content ) );
}
// add_action( 'wp_footer', 'origin_display_post_blocks' );


/**
 * Handy function for seeing if a page is parent of child
 * Usage:
 * if ( is_tree(2) ) {
 *   // stuff
 * }
 * via http://css-tricks.com/snippets/wordpress/if-page-is-parent-or-child/
 */

function is_tree($pid){
	global $post;

	$ancestors = get_post_ancestors($post->$pid);
	$root = count($ancestors) - 1;
	$parent = $ancestors[$root];

	if(is_page() && (is_page($pid) || $post->post_parent == $pid || in_array($pid, $ancestors)))
	{
		return true;
	}
	else
	{
		return false;
	}
}



/**
 * SVG helper icon
 * Usage:
 */

function get_icon($icon) {
	return '<svg class="icon icon-' . $icon . '"><use xlink:href="#' . $icon . '"></use></svg>';
}



/**
 * Pretty Printing
 *
 * @since 1.0.0
 * @author Chris Bratlien
 * @param mixed $obj
 * @param string $label
 * @return null
 */

function origin_pp( $obj, $label = '' ) {
	$data = json_encode( print_r( $obj,true ) );
	?>
	<style type="text/css">
		#bsdLogger {
		position: absolute;
		top: 30px;
		right: 0px;
		border-left: 4px solid #bbb;
		padding: 6px;
		background: white;
		color: #444;
		z-index: 999;
		font-size: 0.6em;
		width: 400px;
		height: 800px;
		overflow: scroll;
		}
	</style>
	<script type="text/javascript">
		var doStuff = function(){
			var obj = <?php echo $data; ?>;
			var logger = document.getElementById('bsdLogger');
			if (!logger) {
				logger = document.createElement('div');
				logger.id = 'bsdLogger';
				document.body.appendChild(logger);
			}
			////console.log(obj);
			var pre = document.createElement('pre');
			var h2 = document.createElement('h2');
			pre.innerHTML = obj;
			h2.innerHTML = '<?php echo addslashes($label); ?>';
			logger.appendChild(h2);
			logger.appendChild(pre);
		};
		window.addEventListener ("DOMContentLoaded", doStuff, false);
	</script>
	<?php
}

