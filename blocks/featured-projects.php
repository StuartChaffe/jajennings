<?php
/**
 * The template used for displaying featured projects.
 *
 * @package _s
 */
$projects = get_field( 'featured-projects' );
$title = get_field( 'featured-projects-title' );
?>

<div class="container">
<?php if ( $title ) { ?>
	<h2><?php echo $title; ?></h2>
<?php } ?>
	<div class="projects">
	<?php if( $projects ) { ?>
		<?php foreach( $projects as $project):
			setup_postdata( $project );
		?>
		<a class="projects-item" href="<?php the_permalink($project); ?>">
		<?php
			$title = get_the_title($project);
			$image = get_field( 'project-image', $project);
			$terms = get_the_terms(($project), 'market' );
		?>
			<div class="projects-item__image">
				<img class="hidemobile" src="<?php echo $image['project-image-featured']['url']; ?>" alt="<?php echo $image['project-image-featured']['alt']; ?>" />
				<img class="hidedesktop" src="<?php echo $image['project-image-mobile']['url']; ?>" alt="<?php echo $image['project-image-mobile']['alt']; ?>" />
			</div>
		</a>
		<a class="projects-item__link" href="<?php the_permalink($project); ?>">

			<div class="projects-item__content">
			<h3><?php echo $title ?></h3>
			<?php
				foreach ( $terms as $term ) {
				echo '<p>' .$term->name . '</p>';
			} ?>
			<svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg>
			</div>
		</a>
		<?php endforeach; ?>
	<?php wp_reset_postdata(); ?>
	<?php } ?>
	</div>
</div>