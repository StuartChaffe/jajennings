<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

<?php
	$building = get_field( 'project-building');
	$architect = get_field( 'project-architect');
	$size = get_field( 'project-size');
	$image = get_field( 'project-image');
?>

	<article>
		<?php the_content(); ?>
		<?php
			$terms = get_the_terms( get_the_ID(), 'market' );
			foreach ( $terms as $term ) {
			echo '<p>' .$term->name . '</p>';
		} ?>
		<h2><?php the_title(); ?></h2>
		<?php the_excerpt(); ?>

		<?php if ( $building || $architect || $size ) { ?>
		<div class="project-details">
		<h3>Project Details</h3>
		<?php if ( $building ) { ?>
			<div class="project-details-item">
				<p>Building:</p>
				<p><?php echo $building; ?></p>
			</div>
		<?php } ?>
		<?php if ( $architect ) { ?>
			<div class="project-details-item">
				<p>Architect:</p>
				<p><?php echo $architect; ?></p>
			</div>
		<?php } ?>
		<?php if ( $size ) { ?>
			<div class="project-details-item">
				<p>Size:</p>
				<p><?php echo $size; ?></p>
			</div>
		<?php } ?>
		</div>
		<?php } ?>
	</article>
	
<?php endwhile; ?>

<?php get_footer(); ?>