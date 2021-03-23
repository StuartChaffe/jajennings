<footer class="global-footer">
	<div class="container">
		<div class="global-footer__content">
			<div class="global-footer__content-top">
				<div class="global-footer__content-top--contact">
				<?php if(get_field('company_tel', 'options')) { ?>
					<p>Telephone:<br />
					<?php the_field('company_tel', 'options') ?></p>
				<?php } ?>
				<?php if(get_field('company_fax', 'options')) { ?>
					<p>Fax:<br />
					<?php the_field('company_fax', 'options') ?></p>
				<?php } ?>
				<?php if(get_field('company_email', 'options')) { ?>
					<p>Email:<br />
					<a href="mailto:<?php the_field('company_email', 'options') ?>"><?php the_field('company_email', 'options') ?></a></p>
				<?php } ?>
				</div>
				<div class="global-footer__content-top--address">
				<?php if(get_field('company_address', 'options')) { ?>
					<?php the_field('company_address', 'options'); ?>
				<?php } ?>
				</div>

				<div class="global-footer__content-top--nav">
					<?php wp_nav_menu( array('theme_location' => 'footer') ); ?>
				</div>

				<div class="global-footer__content-top--images">
					images
				</div>
			</div>
			<div class="global-footer__content-bottom">
				<div class="global-footer__content-bottom--copy">
					<p>&copy; Copyright <?php echo date('Y'); ?> J.A. Jennings, Inc. All rights reserved.</p>
				</div>
				<div class="global-footer__content-bottom--nav">
					<?php wp_nav_menu( array('theme_location' => 'policy') ); ?>
				</div>
			</div>
		</div>
	</div>
</footer>

</div>

<?php wp_footer(); ?>

</body>
</html>