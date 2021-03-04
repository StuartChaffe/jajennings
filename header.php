<?php
	// Doctype and <head>
	get_template_part( 'partials/head' );
?>

<div class="global-container">

<header class="global-header">
	<h1 class="global-header--logo"><a href="<?php echo home_url(); ?>"><img src="<?php echo get_template_directory_uri(); ?>/src/images/logo.svg" alt="JA Jennings Logo" /></a></h1>

	<nav class="global-header--nav"><?php wp_nav_menu( array('theme_location' => 'primary') ); ?></nav>

	<button class="global-header--nav-btn" type="button">
		<span class="global-header--nav-box">
			<span class="global-header--nav-inner"><span>Show menu</span></span>
		</span>
	</button>
	<nav class="global-header--nav global-header--nav__mobile"><?php wp_nav_menu( array('theme_location' => 'primary') ); ?></nav>
</header>

<?php if(get_field('alert', 'options')): ?>
<div class="global-alert">
	<?php the_field('alert_text', 'options'); ?>  <svg class="icon icon--arrow"><use xlink:href="#arrow"></use></svg>
</div>
<?php endif; ?>