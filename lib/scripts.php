<?php

/**
 * Load in scripts
 */

function origin_scripts() {
	wp_enqueue_style( 'styles', get_template_directory_uri() . '/dist/styles.css', array(), null );

	wp_register_script( 'featherlight', get_template_directory_uri().'/js/featherlight.js', array( 'jquery' ), null, true );
	wp_enqueue_script( 'featherlight' );
	wp_register_script( 'featherlightgallery', get_template_directory_uri().'/js/featherlight.gallery.js', array( 'jquery' ), null, true );
	wp_enqueue_script( 'featherlightgallery' );
	
	wp_register_script( 'isotape', get_template_directory_uri().'/js/isotope.js', array( 'jquery' ), null, true );
	wp_enqueue_script( 'isotape' );
	
	wp_register_script( 'scripts', get_template_directory_uri().'/dist/main.js', array( 'jquery' ), null, true );
	wp_enqueue_script( 'scripts' );
}

if( !is_admin() ) { add_action( 'wp_enqueue_scripts', 'origin_scripts', 11 ); }