<?php
/**
 * The template used for displaying a gallery.
 *
 * @package _s
 */

$title = get_field('gallery-title');
$text = get_field('gallery-text');
?>

<div class="container">
	<div class="gallery">
		<h2>Gallery/Other Case Studies</h2>
	<?php if ( $title ) { ?>
		<h2><?php echo $title; ?></h2>
	<?php } ?>
	<?php if ( $text ) { ?>
		<p><?php echo $text; ?></p>
	<?php } ?>
	</div>
</div>