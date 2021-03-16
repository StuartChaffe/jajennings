<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>

<?php
	$image = get_field( 'project-image');
?>
	<?php the_content(); ?>
	
<?php endwhile; ?>

<?php get_footer(); ?>