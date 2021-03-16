<?php
/**
 * The template used for displaying a gallery.
 *
 * @package _s
 */

$content = get_field('gallery-content');
?>

<div class="container">
	<?php if ( $content ) { ?>
	<div class="gallery__content">
		<?php echo $content; ?>
	</div>
	<?php } ?>
	<div class="gallery__buttons">
		<p>Filter:</p>
		<button data-filter="*">All</button>
		<button data-filter=".image">Gallery</button>
		<button data-filter=".project">Case Study</button>

		<p>Markets:</p>
		<button data-filter="*">All</button>
		<button data-filter=".health">Health</button>
		<button data-filter=".finance">Finance</button>
	</div>
	<div class="gallery">
	<?php if( have_rows('gallery-items') ) { ?>
		<?php while( have_rows('gallery-items') ) { the_row();
			$type = get_sub_field('is_image');
			$image = get_sub_field('image');
			$projects = get_sub_field('project');
		?>
		<?php if( $type == 'image' ) { ?>
			<?php if( have_rows('image') ) { ?>
				<?php while( have_rows('image') ) { the_row();
					$image = get_sub_field('gallery-image');
					$title = get_sub_field('gallery-image-title');
					$size = get_sub_field('gallery-image-size');
					$market = get_sub_field('gallery-image-market', 'market');
				?>
				<div class="gallery-item <?php echo $size ?> <?php echo $marlet ?> image">
					<a href="<?php echo $image['url']; ?>" class="gallery-item__link modal"><img src="<?php echo $image['url']; ?>" alt="">
						<?php if ( $title ) { ?>
						<div class="gallery-item__link-title">
							<p><?php echo $title ?></p>
						</div>
						<?php } ?>
					</a>
				</div>
				<?php } ?>
			<?php } ?>
			<?php } else { ?>
			<?php if( $projects ) { ?>
				<?php foreach( $projects as $project):
					setup_postdata( $project );
				?>
				<?php
					$title = get_the_title($project);
					$image = get_field( 'project-image', $project);
					$terms = get_the_terms(($project), 'market' );
				?>
				<div class="gallery-item gallery-item--tall project">
					<a href="<?php the_permalink($project); ?>" class="gallery-item__project">
						<img src="<?php echo $image['project-image-featured']['url']; ?>" alt="<?php echo $image['project-image-featured']['alt']; ?>">
						<div class="gallery-item__project-title">
							<h3><?php echo $title ?></h3>
							<?php
								foreach ( $terms as $term ) {
								echo '<p>' .$term->name . '</p>';
							} ?>
							<svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg>
						</div>
					</a>
				</div>

				<?php endforeach; ?>
				<?php wp_reset_postdata(); ?>
			<?php } ?>
		<?php } ?>
		<?php }?>
	<?php } ?>
	</div>


	<div class="gallery">
		<div class="gallery-item gallery-item--tall health image"><a href="/wp-content/uploads/2021/03/project-banner.png" class="gallery-item__link modal"><img src="/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Northwell Cohen’s Children’s Hospital</p></div></a></div>
		<div class="gallery-item health image"><a href="/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
		<div class="gallery-item gallery-item--tall health project"><a href="" class="gallery-item__project"><img src="/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__project-title"><h3>Project title</h3> <p>Market</p> <svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg></div></a></div>
		<div class="gallery-item finance image"><a href="/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
		<div class="gallery-item finance image"><a href="/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
		<div class="gallery-item finance image"><a href="/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
		<div class="gallery-item image"><a href="/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="/wp-content/uploads/2021/03/service-banner-image.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
	</div>
</div>