
<?php
/**
 * The template used for displaying project details.
 *
 * @package _s
 */

$desc = get_field( 'project-description');
$building = get_field( 'project-building');
$architect = get_field( 'project-architect');
$size = get_field( 'project-size');
?>

<div class="container">
	<div class="projects-details__header">
		<h2><?php the_title(); ?></h2>
		<!-- <?php
			$terms = get_the_terms( get_the_ID(), 'market' );
			foreach ( $terms as $term ) {
			echo '<p>' .$term->name . '</p>';
		} ?> -->
	</div>
	<?php if ( $desc ) { ?>
		<?php echo $desc; ?>
	<?php } ?>
</div>

<?php if ( $building || $architect || $size ) { ?>
<div class="projects-details-container">
	<div class="projects-details">
	<h4>Project Details</h4>
	<?php if ( $building ) { ?>
		<div class="projects-details-item">
			<div><p>Building:</p></div>
			<div><p><?php echo $building; ?></p></div>
		</div>
	<?php } ?>
	<?php if ( $architect ) { ?>
		<div class="projects-details-item">
			<div><p>Architect:</p></div>
			<div><p><?php echo $architect; ?></p></div>
		</div>
	<?php } ?>
	<?php if ( $size ) { ?>
		<div class="projects-details-item">
			<div><p>Size:</p></div>
			<div><p><?php echo $size; ?></p></div>
		</div>
	<?php } ?>
	</div>
</div>
<?php } ?>