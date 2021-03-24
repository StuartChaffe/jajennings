<?php
/**
 * The template used for displaying a cta block.
 *
 * @package _s
 */

$title = get_field('cta-title');
$text = get_field('cta-text');
$border = get_field('cta-border');
?>

<div class="container">
	<div class="cta <?php if( $border == 'Yes' ) { ?><?php echo 'cta--border' ?><?php } ?>">
	<?php if ( $title ) { ?>
		<h2><?php echo $title; ?></h2>
	<?php } ?>
		<div class="cta__content"> 
		<?php if ( $text ) { ?>
			<?php echo $text; ?>
		<?php } ?>
		</div>
	</div>
</div>