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
        'name'  => __( 'Blue', 'origin-colors' ),
        'slug'  => 'blue',
        'color'	=> '#59BACC',
    ),
    array(
        'name'  => __( 'Green', 'origin-colors' ),
        'slug'  => 'green',
        'color' => '#58AD69',
    ),
    array(
        'name'  => __( 'Orange', 'origin-colors' ),
        'slug'  => 'orange',
        'color' => '#FFBC49',
    ),
    array(
        'name'  => __( 'Red', 'origin-colors' ),
        'slug'  => 'red',
        'color' => '#E2574C',
    ),
) );

/**
 * Editor styles
 */
add_theme_support( 'editor-styles' );
add_editor_style( 'dist/editor-style.css' );

