<?php
/**
 * The template used for displaying a gallery.
 *
 * @package _s
 */

$content = get_field('gallery-content');
?>

<?php
$filter_terms = array();
$gallery_items = get_field('gallery-items');

// return an array of taxonomy names
if( $gallery_items ) {
	foreach( $gallery_items as $gallery_item ) {
		
		$type = $gallery_item['is_image'];
		
		if ( $type == 'image' ) {
			$term_ids = $gallery_item['gallery-image-market'];
			foreach ( $term_ids as $term_id ) {
				$term = get_term( $term_id, 'market' );
				$filter_terms[] = $term->name;
			}
		} else {
			$terms = get_the_terms( $gallery_item['project'], 'market' );
			foreach ($terms as $term) {
				$filter_terms[] = $term->name;
			}
		}	
		
	}
}
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
		<select class="filters-select">
			<option value="*">All</option>
			<?php
			$filter_terms = array_unique($filter_terms); 
			foreach ( $filter_terms as $filter_term ) {
				echo '<option value=".' . sanitize_title($filter_term) . '">' . $filter_term . '</option>';
			}
			?>
		</select>
	</div>
	
	<div class="gallery">
		
	<?php
	if( $gallery_items ) { 
		foreach( $gallery_items as $gallery_item ) {
		$type = $gallery_item['is_image'];
			if ( $type == 'image' ) {
	?>
	
	<?php 		
		$image = $gallery_item['gallery-image'];
		$title = $gallery_item['gallery-image-title'];
		$size = $gallery_item['gallery-image-size'];
		$term_ids = $gallery_item['gallery-image-market'];
		$markets = array();
		foreach ( $term_ids as $term_id ) {
			$term = get_term( $term_id, 'market' );
			$markets[] = sanitize_title($term->name);
		}
	?>

		<div class="gallery-item <?php echo $size; ?> <?php foreach ( $markets as $market ) { echo $market . ' '; } ?> image">
			<a href="<?php echo $image['url']; ?>" class="gallery-item__link modal">
				<img src="<?php echo $image['url']; ?>" alt="">
				<?php if ( $title ) { ?>
				<div class="gallery-item__link-title">
					<p><?php echo $title ?></p>
				</div>
				<?php } ?>
			</a>
		</div>

	<?php } else { ?>
	
	<?php		
		$markets = array();
		$project_id = $gallery_item['project'];
		$terms = get_the_terms( $project_id, 'market' );
		$image = get_field('project-image', $project_id);
		$featured_image = $image['project-image-featured']['url'];
		
		foreach ($terms as $term) {
			$markets[] = $term->name;
		}
	?>
		<div class="gallery-item gallery-item--tall <?php foreach ( $markets as $market ) { echo sanitize_title($market) . ' '; } ?> project">
			<a href="<?php the_permalink($project_id); ?>" class="gallery-item__project">
				<img src="<?php echo $featured_image; ?>" alt="">
				<div class="gallery-item__project-title">
					<h3><?php echo get_the_title($project_id); ?></h3> 
					<?php foreach ( $markets as $market ) { echo '<p>' . $market . '</p>'; } ?>
					<svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg>
				</div>
			</a>
		</div>
		
	<?php 
			}
		}
	}
	?>
		
	</div>
	
</div>