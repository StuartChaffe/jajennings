<?php
/**
 * The template used for displaying a simple content block.
 *
 * @package _s
 */

$content = get_field('content');
$label = get_field('content-label');
?>

<div class="container">
	<div class="content-block">
	<?php if ( $label ) { ?>
		<p class="content-block__label"><?php echo $label; ?></p>
	<?php } ?>
		<?php echo $content; ?>
	</div>
</div>