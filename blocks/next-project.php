<?php
/**
 * The template used for displaying next project.
 *
 * @package _s
 */
$projects = get_field( 'next-project' );
$nexttitle = get_field( 'next-project-title' );
?>

<div class="container">
	<div class="next-project-container">
		<?php if ( $nexttitle ) { ?>
			<h2><?php echo $nexttitle; ?></h2>
		<?php } ?>
		<div class="next-project">
		<?php if( $projects ) { ?>
			<?php foreach( $projects as $project):
				setup_postdata( $project );
			?>
			<a class="next-project-item" href="<?php the_permalink($project); ?>">
			<?php
				$title = get_the_title($project);
				$image = get_field( 'project-image', $project);
				$terms = get_the_terms(($project), 'market' );
			?>
				<div class="next-project-item__image">
					<img loading="lazy" <?php if( $image['project-image-mobile'] ) { ?><?php echo 'class="hidemobile"' ?><?php } ?> src="<?php echo $image['project-image-featured']['url']; ?>" alt="<?php echo $image['project-image-featured']['alt']; ?>" />
					<?php if ( $image['project-image-mobile'] ) { ?><img class="hidedesktop" src="<?php echo$image['project-image-mobile']['url']; ?>" alt="<?php echo $image['project-image-mobile']['alt']; ?>" /><?php } ?>
				</div>

				<div class="next-project-item__content">
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

			<a href="/our-projects" class="next-project__all-projects">
				<div class="next-project__all-projects--link">
					<h4>Our Projects</h4> <svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg>
				</div>
			</a>
		</div>
	</div>
</div>