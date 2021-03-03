<?php
/**
 * The template used for displaying a banner block.
 *
 * @package _s
 */

$image = get_field( 'banner-image');
$title = get_field('banner-title');

$code = get_field('banner-code');
$background2 = get_field( 'banner-background');
$image = get_field( 'banner-image');
$imagemobile = get_field( 'banner-image-mobile');
$background= get_field( 'banner-background');
$alt = $background['alt'];
$size = 'Banner-large';
$thumb = $background['sizes'][ $size ];
$backgroundmobile = get_field( 'banner-background-mobile');
?>
<div class="block banner">
<?php if ( $image ) : ?>
	<div class="banner__image">
		<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
	</div>
<?php endif; ?>
	<svg class="banner__overlay" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 464 618">
		<defs>
			<linearGradient class="banner-logo" id="linear-gradient" x1="0.243" y1="0.648" x2="0.742" y2="0.022" gradientUnits="objectBoundingBox">
				<stop class="stop-1" offset="0" stop-color="currentColor"/>
				<stop class="stop-2" offset="1" stop-color="currentColor"/>
			</linearGradient>
		</defs>
		<path data-name="Union 1" d="M154,618,309,463V618ZM309,309H464L309,464ZM0,464V309H154L309,154V309H155V464ZM0,155V0H155V155Z" fill="url(#linear-gradient)"/>
	</svg>

<?php if ( $title ) : ?>
	<a class="banner__content" href="<?php echo $title['banner-title-link']; ?>">
		<?php echo $title['banner-title-text']; ?>
	</a>
<?php endif; ?>


</div>