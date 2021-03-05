<?php

/**
 * Enable ACF options page
 */

function origin_acf_op_init() {
	if( function_exists('acf_add_options_page') ) {

		$parent = acf_add_options_page(array(
			'page_title'  => __('Theme General Settings'),
			'menu_title'  => __('Theme Settings'),
			'redirect'    => false,
		));

		$child = acf_add_options_page(array(
			'page_title'  => __('Company Settings'),
			'menu_title'  => __('Company'),
			'parent_slug' => $parent['menu_slug'],
		));
	}
}

add_action('acf/init', 'origin_acf_op_init');



/**
 * Enable ACF jSon
 */

function origin_acf_json( $path ) {
	$path = get_stylesheet_directory() . '/acf-json';
	return $path;
}

add_filter('acf/settings/save_json', 'origin_acf_json');



/**
 * Change Gravity Forms validation message
 */

function origin_gf_validation_message( $message, $form ) {
	return '<div class="alert alert--error">Your submission had errors, please try again.</div>';
}

add_filter( 'gform_validation_message', 'origin_gf_validation_message', 10, 2 );



/**
 * Move Gravity Forms JS to footer
 */
add_filter('gform_init_scripts_footer', '__return_true');

function origin_gf_cdata_open( $content = '' ) {
	$content = 'document.addEventListener( "DOMContentLoaded", function() { ';
	return $content;
}

add_filter( 'gform_cdata_open', 'origin_gf_cdata_open' );

function origin_gf_cdata_close( $content = '' ) {
	$content = ' }, false );';
	return $content;
}

add_filter( 'gform_cdata_close', 'origin_gf_cdata_close' );



/**
 * Remove h1 from TinyMCE editor
 */

function origin_tinymce_formats($init) {
	$init['block_formats'] = 'Paragraph=p;Heading 2=h2;Heading 3=h3;Heading 4=h4;';
	return $init;
}

add_filter('tiny_mce_before_init', 'origin_tinymce_formats' );



/**
 * Add styles to TinyMCE editor
 */

//add_editor_style('css/editor.css');
