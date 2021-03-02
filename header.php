<?php
	// Doctype and <head>
	get_template_part( 'partials/head' );
?>

<div class="global-container">

<?php if(get_field('alert', 'options')): ?>
<div class="global-alert">
	<?php the_field('alert_text', 'options'); ?>
</div>
<?php endif; ?>

<header class="global-header">
	<h1 class="global-header__logo"><a href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a></h1>
	<nav class="global-header__nav"><?php wp_nav_menu( array('theme_location' => 'primary') ); ?></nav>
</header>