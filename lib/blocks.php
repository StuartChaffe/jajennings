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
			'name'				=> 'cta',
			'title'				=> __('Call to Action Block'),
			'description'		=> __('Add a CTA block'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'megaphone',
			'keywords'			=> array( 'events' )
		));
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

	}
}

function jajennings_acf_block_render_callback( $block ) {
	$slug = str_replace('acf/', '', $block['name']);

	if( file_exists( get_theme_file_path("/blocks/{$slug}.php") ) ) {
		include( get_theme_file_path("/blocks/{$slug}.php") );
	}
}
