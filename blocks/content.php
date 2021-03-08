<?php
/**
 * The template used for displaying a simple content block.
 *
 * @package _s
 */

$content = get_field('content');
?>

<div class="container">
	<div class="content-block">
		<?php echo $content; ?>
	</div>
</div>