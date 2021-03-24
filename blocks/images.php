<?php
/**
 * The template used for displaying an image block.
 *
 * @package _s
 */
?>

<div class="images">
<?php if( have_rows('images') ): ?>
	<?php while( have_rows('images') ): the_row();
		$image = get_sub_field('image');
	?>	<div class="images-item" style="background-image: url('<?php echo $image['url']; ?>')";>
			<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
		</div>
	<?php endwhile; ?>
<?php endif; ?>
</div>