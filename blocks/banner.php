<?php
/**
 * The template used for displaying a banner block.
 *
 * @package _s
 */

$image = get_field( 'banner-image');
$title = get_field('banner-title');
$text = get_sub_field('banner-title-text');
$position = get_field('banner-logo-position');

?>
<div class="banner">
	<div class="banner-outer">
	<?php if ( $image ) { ?>
		<div class="banner__image">
			<img <?php if( $image['banner-image-mobile'] ) { ?><?php echo 'class="hidemobile"' ?><?php } ?> src="<?php echo $image['banner-image-large']['url']; ?>" alt="<?php echo $image['banner-image-large']['alt']; ?>" />
			<?php if ( $image['banner-image-mobile'] ) { ?><img class="hidedesktop" src="<?php echo $image['banner-image-mobile']['url']; ?>" alt="<?php echo $image['banner-image-mobile']['alt']; ?>" /><?php } ?>
		</div>
	<?php } ?>
		<svg class="banner__overlay <?php echo $position; ?>" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 464 618">
			<defs>
				<linearGradient class="banner-logo" id="linear-gradient" x1="0.243" y1="0.648" x2="0.742" y2="0.022" gradientUnits="objectBoundingBox">
					<stop class="stop-1" offset="0" stop-color="currentColor"/>
					<stop class="stop-2" offset="1" stop-color="currentColor"/>
				</linearGradient>
			</defs>
			<path data-name="Union 1" d="M154,618,309,463V618ZM309,309H464L309,464ZM0,464V309H154L309,154V309H155V464ZM0,155V0H155V155Z" fill="url(#linear-gradient)"/>
		</svg>
	</div>
	<?php if ( $title['banner-title-text'] ) { ?>
		<?php if ( $title['banner-title-link'] ) { ?>
		<a class="banner__content banner__content-link" href="<?php echo $title['banner-title-link']; ?>">
		<?php } else { ?>
		<div class="banner__content">
		<?php } ?>
			<h1><?php echo $title['banner-title-text']; ?></h1>
		<?php if ( $title['banner-title-link'] ) { ?> <svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg>
			</a>
			<?php } else { ?>
		</div>
		<?php } ?>
	<?php } ?>
</div>