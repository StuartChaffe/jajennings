<?php

add_filter( 'block_categories', 'jajennings_block_categories', 10, 2 );
function jajennings_block_categories( $categories, $post )
{
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'jajennings-blocks',
                'title' => __( 'JA Jennings Blocks', 'jajenningsblocks-master' ),
            ),
        )
    );
}

add_action('acf/init', 'jajennings_acf_blocks');
function jajennings_acf_blocks() {
	if( function_exists('acf_register_block') ) {

		acf_register_block(array(
			'name'				=> 'banner',
			'title'				=> __('Banner'),
			'description'		=> __('Add a banner block'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'format-image',
			'align' 			=> 'full',
			'keywords'			=> array( 'banner' )
		));
		acf_register_block(array(
			'name'				=> 'cta',
			'title'				=> __('Call to action'),
			'description'		=> __('Add a CTA block'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'megaphone',
			'keywords'			=> array( 'cta, call to action' )
		));
		acf_register_block(array(
			'name'				=> 'content',
			'title'				=> __('Content block'),
			'description'		=> __('Add a standard content block'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'analytics',
			'keywords'			=> array( 'content' )
		));
		acf_register_block(array(
			'name'				=> 'text-image',
			'title'				=> __('Text with image'),
			'description'		=> __('Add a standard content block'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'id',
			'keywords'			=> array( 'text with image, text' )
		));

		acf_register_block(array(
			'name'				=> 'featured-projects',
			'title'				=> __('Featured projects'),
			'description'		=> __('Add featured projects'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'screenoptions',
			// 'align' 			=> 'full',
			'keywords'			=> array( 'project, featured projects' )
		));
	}
}

function jajennings_acf_block_render_callback( $block ) {
	$slug = str_replace('acf/', '', $block['name']);

	if( file_exists( get_theme_file_path("/blocks/{$slug}.php") ) ) {
		include( get_theme_file_path("/blocks/{$slug}.php") );
	}
}

add_filter( 'allowed_block_types', 'jajennings_allowed_block_types' );
 
function jajennings_allowed_block_types( $allowed_blocks ) {
 
	return array(
		'acf/banner',
		'acf/cta',
		'acf/content',
		'acf/text-image',
		'acf/featured-projects'
	);
 
}
