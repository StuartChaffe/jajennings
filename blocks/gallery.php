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
		<p>Filter:<p>
		<button data-filter="*">All</button>
		<button data-filter=".image">Gallery</button>
		<button data-filter=".project">Case Study</button>

		<p>Markets</p>
		<button data-filter="*">All</button>
		<button data-filter=".health">Health</button>
		<button data-filter=".finance">Finance</button>
	</div>

	<div class="gallery">
		<div class="gallery-item gallery-item--tall health image"><a href="http://jajennings.local:8000/wp-content/uploads/2021/03/project-banner.png" class="gallery-item__link modal"><img src="http://jajennings.local:8000/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Northwell Cohen’s Children’s Hospital</p></div></a></div>
		<div class="gallery-item health image"><a href="http://jajennings.local:8000/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="http://jajennings.local:8000/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
		<div class="gallery-item gallery-item--tall health project"><a href="" class="gallery-item__project"><img src="http://jajennings.local:8000/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__project-title"><h3>Project title</h3> <p>Market</p> <svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg></div></a></div>
		<div class="gallery-item finance image"><a href="http://jajennings.local:8000/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="http://jajennings.local:8000/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
		<div class="gallery-item finance image"><a href="http://jajennings.local:8000/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="http://jajennings.local:8000/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
		<div class="gallery-item finance image"><a href="http://jajennings.local:8000/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="http://jajennings.local:8000/wp-content/uploads/2021/03/project-banner.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
		<div class="gallery-item image"><a href="http://jajennings.local:8000/wp-content/uploads/2021/03/service-banner-image.png" class="gallery-item__link modal"><img src="http://jajennings.local:8000/wp-content/uploads/2021/03/service-banner-image.png" alt=""><div class="gallery-item__link-title"><p>Columbia Data Center</p></div></a></div>
	</div>
</div>