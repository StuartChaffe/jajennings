<?php

/**
 * Remove unnecessary meta/link tags
 */
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wp_generator');
remove_action('wp_head', 'feed_links', 2 );
remove_action('wp_head', 'feed_links_extra', 3);
remove_action('wp_head', 'index_rel_link');
remove_action('wp_head', 'wlwmanifest_link');	
remove_action('wp_head', 'start_post_rel_link', 10, 0);
remove_action('wp_head', 'parent_post_rel_link', 10, 0);
remove_action('wp_head', 'adjacent_posts_rel_link', 10, 0);
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('wp_head', 'rest_output_link_wp_head', 10);
remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);

/**
 * Add featured image support
 */
add_theme_support('post-thumbnails');

/**
 * Full-width support
 */
add_theme_support( 'align-wide' );

// Disable custom font sizes
add_theme_support( 'disable-custom-font-sizes' );

/**
 * Editor color palette
 */
add_theme_support( 'disable-custom-colors' );
add_theme_support( 'editor-color-palette', array(
	array(
		'name'  => __( 'Purple', 'origin-colors' ),
		'slug'  => 'theme-purple',
		'color'	=> '#5E4078',
	),
	array(
		'name'  => __( 'Blue', 'origin-colors' ),
		'slug'  => 'theme-blue',
		'color' => '#4882AC',
	),
	array(
		'name'  => __( 'Orange', 'origin-colors' ),
		'slug'  => 'theme-orange',
		'color' => '#B93C32',
	),
	array(
		'name'  => __( 'Yellow', 'origin-colors' ),
		'slug'  => 'theme-yellow',
		'color' => '#FAC828',
	),
) );

/**
 * Editor styles
 */
add_theme_support( 'editor-styles' );
add_editor_style( 'dist/editor-style.css' );

/**
 * Removes P tags from around images and iframes
 * Original source: https://interconnectit.com/blog/2011/06/16/how-to-remove-p-tags-from-images-in-wordpress/
 * @param  [type] $pee [description]
 * @return [type]      [description]
 */
function img_unautop($pee) {
    // commented out example shows how you can wrap your IMG tag in a div if you like
     /* $pee = preg_replace('/<p>\\s*?(<a .*?><img.*?><\\/a>|<img.*?>)?\\s*<\\/p>/s', '<div class="figure">$1</div>', $pee); */
     //strip P tag and just return the image
     $pee = preg_replace('/<p>\\s*?(<a .*?><img.*?><\\/a>|<img.*?>)?\\s*<\\/p>/s', '$1', $pee);
     //strip P tag and just return the iFrame
     $pee = preg_replace('/<p>\s*(<iframe .*>*.<\/iframe>)\s*<\/p>/iU', '\1', $pee);
     return $pee;
 }
 add_filter( 'acf_the_content', 'img_unautop', 30 ); //only use this one if you have ACF content
 add_filter( 'the_content', 'img_unautop', 30 ); //regular content for POSTS and PAGES

/**
 * Add theme colour to body from ACF
*/
// function jennings_body_class($class) {
// 	if (get_field('theme_colour')) {
// 		$value = get_field('theme_colour');
// 		$class[] = $value;
// 	}
// 	return $class;
// }
// add_filter('body_class', 'jennings_body_class');

// function origin_add_acf_editor_body_class($classes) {
// 	global $post;
// 	if (get_field('theme_colour', $post->ID)) {
// 		$value = get_field('theme_colour', $post->ID);
// 		$class[] = $value;
// 	}
// 	return $classes;
// }
// add_filter('admin_body_class', 'origin_add_acf_editor_body_class');


function origin_add_acf_body_class($class) {
	if (get_field('theme_colour')) {
		$value = get_field('theme_colour');
		$class[] = $value;
	}
	return $class;
}
add_filter('body_class', 'origin_add_acf_body_class');
function origin_add_acf_editor_body_class($classes) {
	global $post;
	// var_dump(get_field('theme_colour', $post->ID));
	// var_dump($post);
	// die();
	if (get_field('theme_colour', $post->ID)) {
		$value = get_field('theme_colour', $post->ID);
		$classes .= ' ' . $value;
	}
	return $classes;
}
add_filter('admin_body_class', 'origin_add_acf_editor_body_class');