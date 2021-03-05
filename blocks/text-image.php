<?php
/**
 * The template used for displaying a text with image block.
 *
 * @package _s
 */
$title = get_field( 'textimage-title');
$content = get_field( 'textimage-content');
$code = get_field( 'textimage-code');
$size = get_field( 'textimage-size');
?>
<div class="text-image">
<?php if( have_rows('image') ): ?>
	<?php while( have_rows('image') ): the_row();
		$image = get_sub_field('textimage-image');
		$position = get_sub_field('textimage-position');
		$imagetitle = get_sub_field('textimage-title');
	?>
	<div class="text-image__image <?php echo $position ?>">
		<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
		<?php if ( $imagetitle ) { ?>
			<?php echo $imagetitle ?>
		<?php } ?>
	</div>

	<div class="text-image__content">


	<?php if ( $title ) { ?>
		<h3><?php echo $title ?></h3>
	<?php } ?>

	<?php if( have_rows('textimage-content') ): ?>
	<?php while( have_rows('textimage-content') ): the_row();
		$text = get_sub_field('textimage-content-text');
		$link = get_sub_field('textimage-content-links');
		$dropdown = get_sub_field('textimage-content-dropdown');
	?>

	<?php if ( $text ) { ?>
		<?php echo $text ?>
	<?php } ?>
	
		<?php if( have_rows('textimage-content-links') ): ?>
		<?php while( have_rows('textimage-content-links') ): the_row();
			$title = get_sub_field('link-title');
			$text = get_sub_field('link-text');
			$link = get_sub_field('link-link');
		?>
			<a href="<?php echo $link ?>" class="text-image__content-link">
			<?php if ( $title ) { ?>
				<p><?php echo $title ?></p> <svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg>
			<?php } ?>
			<?php if ( $text ) { ?>
				<p><?php echo $text ?></p>
			<?php } ?>
			</a>
		<?php endwhile; ?>
		<?php endif; ?>

		<?php if( have_rows('textimage-content-dropdown') ): ?>
		<?php while( have_rows('textimage-content-dropdown') ): the_row();
			$title = get_sub_field('dropdown-title');
			$content = get_sub_field('dropdown-content');
		?>
			<?php if ( $title ) { ?>
				<?php echo $title ?>
			<?php } ?>
			<?php if ( $content ) { ?>
				<?php echo $content ?>
			<?php } ?>
		<?php endwhile; ?>
		<?php endif; ?>


	<?php endwhile; ?>
	<?php endif; ?>

	</div>
<?php endwhile; ?>
<?php endif; ?>
</div>