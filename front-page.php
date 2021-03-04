<?php get_header(); ?>

<?php while ( have_posts() ) : the_post(); ?>
	<?php the_content(); ?>

	<div class="container">

	<h1>Better Buildings. Better<br />
	Environments. Better Experiences</h1>

	<h2>J.A. Jennings, Inc. (JAJ): a staple of the greater New York City<br />
	construction industry since 1917 and through four generations.</h2>

	<h3>J.A. Jennings, Inc. (JAJ): a staple of the greater New York City<br />
	construction industry since 1917 and through four generations.</h3>

	<h4>J.A. Jennings, Inc. (JAJ): a staple of the greater New York City<br />
	construction industry since 1917 and through four generations.</h4>

	<p class="lead">We create a superior experience, a healthier atmosphere, and enduring relationships for some of the most sophisticated companies in the built environment. Whether building from the ground up or re-imagining existing spaces, our full-service construction firm is your partner every step of the way.</p>
	<p>We create a superior experience, a healthier atmosphere, and enduring relationships for some of the most sophisticated companies in the built environment. Whether building from the ground up or re-imagining existing spaces, our full-service construction firm is your partner every step of the way.</p>

	</div>
<?php endwhile; ?>

<?php get_footer(); ?>