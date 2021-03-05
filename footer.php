<footer class="global-footer">
	<?php if(get_field('company_tel', 'options')): ?>
		<p>Tel</p>
		<p><?php the_field('company_tel', 'options'); ?></p>
	<?php endif; ?>
	<?php if(get_field('company_fax', 'options')): ?>
		<p>Fax</p>
		<p><?php the_field('company_fax', 'options'); ?></p>
	<?php endif; ?>
	<?php if(get_field('company_email', 'options')): ?>
		<p>Email</p>
		<p><?php the_field('company_email', 'options'); ?></p>
	<?php endif; ?>
	<?php if(get_field('company_address', 'options')): ?>
		<?php the_field('company_address', 'options'); ?>
	<?php endif; ?>

	<?php wp_nav_menu( array('theme_location' => 'footer') ); ?>

	<p>&copy; <?php echo date('Y'); ?>J.A. Jennings, Inc. All rights reserved.</p>
	<?php wp_nav_menu( array('theme_location' => 'policy') ); ?>
</footer>

</div>

<?php wp_footer(); ?>

</body>
</html>