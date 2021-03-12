<?php
/**
 * The template used for displaying a form.
 *
 * @package _s
 */

$title = get_field('form-title');
$content = get_field('form-content');
$form = get_field('form');
?>
<div class="container">
	<div class="form-block<?php if( $content ) { ?> <?php echo 'form-block-has-content' ?><?php } ?>">
		<div class="form-block__content">
		<?php if ( $content ) { ?>
			<?php echo $content; ?>
		<?php } ?>
		</div>
		<div class="form-block__form">
		<?php if ( $title ) { ?>
			<?php echo $title; ?>
		<?php } ?>
		<?php if ( $form ) { ?>
			<?php echo $form; ?>
		<?php } ?>
		</div>
	</div>
</div>