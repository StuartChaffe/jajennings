<?php
/**
 * The template used for displaying a text with image block.
 *
 * @package _s
 */
$content = get_field( 'textimage-content');
$code = get_field( 'textimage-code');
$size = get_field( 'textimage-size');
$id = get_field( 'textimage-id');
$position = get_field('textimage-position');
$contain = get_field('textimage-contain');
$hide = get_field( 'textimage-image-hide');
?>
<?php if ( $contain  == '1' ) { ?><div class="is-contained"><?php } ?>
<div class="text-image" <?php if ( $id ) { ?>id="<?php echo $id ?>"<?php } ?>>
<?php if( have_rows('images') ): $i = 0; ?>
	<?php while( have_rows('images') ): $i++; the_row();
		$image = get_sub_field('textimage-image');
		$imagetitle = get_sub_field('textimage-title', false, false);
	?>
	<div class="text-image__image image-<?php echo $i; ?> <?php if ( $i == '1' ) { echo 'is-visible'; } ?> <?php echo $position ?> <?php if($hide == 'Yes'){ echo 'hidemobile'; } ?>">
		<img loading="lazy" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
		<?php if ( $imagetitle ) { ?>
			<div class="text-image__title">
				<p class="h4"><?php echo $imagetitle ?></p>
			</div>
		<?php } ?>
	</div>
	<?php endwhile; ?>
<?php endif; ?>

	<div class="text-image__content">
	<?php if( have_rows('textimage-content') ): ?>
	<?php while( have_rows('textimage-content') ): the_row();
		$text = get_sub_field('textimage-content-text');
		$link = get_sub_field('textimage-content-links');
		$dropdown = get_sub_field('textimage-content-dropdown');
	?>

		<?php if ( $text ) { ?>
			<?php echo $text ?>
		<?php } ?>
			
		<?php if( have_rows('textimage-content-links') ): $i = 0; ?>
			<?php while( have_rows('textimage-content-links') ): $i++; the_row();
				$title = get_sub_field('link-title');
				$text = get_sub_field('link-text');
				$link = get_sub_field('link-link');
			?>
				<a href="<?php echo $link ?>" class="text-image__content-link" data-image=".image-<?php echo $i; ?>">
				<?php if ( $title ) { ?>
					<p><strong><?php echo $title ?></strong></p> <svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg>
				<?php } ?>
				<?php if ( $text ) { ?>
					<p><?php echo $text ?></p>
				<?php } ?>
				</a>
			<?php endwhile; ?>
		<?php endif; ?>

		<?php if( have_rows('textimage-content-dropdown') ): ?>
			<ul class="accordion">
			<?php while( have_rows('textimage-content-dropdown') ): the_row();
				$title = get_sub_field('dropdown-title', false, false);
				$content = get_sub_field('dropdown-content');
			?>
				<li>
					<button class="accordion__title" aria-expanded="false"><?php echo $title ?> <svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg></button>
					<div class="accordion__content">
						<?php echo $content ?>
					</div>
				</li>
			<?php endwhile; ?>
			</ul>
		<?php endif; ?>
	
	<?php endwhile; ?>
	<?php endif; ?>

	</div>
</div>
<?php if ( $contain  == '1' ) { ?></div><?php } ?>