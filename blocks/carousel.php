<?php
/**
 * The template used for displaying a carousel.
 *
 * @package _s
 */
// Set up fields.
$title = get_field( 'carousel-title');
$projects = get_field( 'carousel' );
?>
<?php if ( $title ) { ?>
	<div class="carousel__title">
		<h2><?php echo $title; ?></h2>
	</div>
<?php } ?>

<div class="carousel">
	<div class="carousel-slider slick-slider">
	<?php if( $projects ) { ?>
		<?php foreach( $projects as $project):
			setup_postdata( $project );
		?>
		<?php
			$title = get_the_title($project);
			$image = get_field( 'project-image', $project);
			$terms = get_the_terms(($project), 'market' );
		?>
		<div class="carousel-slider-item">
			<div class="carousel-slider-item__title"><p><?php echo $title ?>
			<br />
			<span><?php
				foreach ( $terms as $term ) {
				echo $term->name;
			} ?></span></p></div>
			<img src="<?php echo $image['project-image-featured']['url']; ?>" alt="<?php echo $image['project-image-featured']['alt']; ?>" />
		</div>
		<?php endforeach; ?>
		<?php wp_reset_postdata(); ?>
	<?php } ?>
	</div>
</div>