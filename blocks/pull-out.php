<?php
/**
 * The template used for displaying a pull-out.
 *
 * @package _s
 */

$pullout = get_field('pull-out');
?>

<div class="pull-out-container">
	<div class="pull-out">
	<?php if ( $pullout ) { ?>
		<h2><?php echo $pullout; ?></h2>
	<?php } ?>
	</div>
</div>