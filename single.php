<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

<?php
	$image = get_field( 'project-image');
?>

	<article>
		<?php the_content(); ?>
	</article>
	
<?php endwhile; ?>

<?php get_footer(); ?>