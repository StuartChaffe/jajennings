<?php

add_filter( 'block_categories', 'origin_block_categories', 10, 2 );
function origin_block_categories( $categories, $post )
{
    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'origin-blocks',
                'title' => __( 'Origin Blocks', 'originblocks-master' ),
            ),
        )
    );
}

add_action('acf/init', 'origin_acf_blocks');
function origin_acf_blocks() {
	if( function_exists('acf_register_block') ) {

		acf_register_block(array(
			'name'				=> 'cta',
			'title'				=> __('Call to Action Block'),
			'description'		=> __('Add a CTA block'),
			'render_callback'	=> 'origin_acf_block_render_callback',
			'category'			=> 'origin-blocks',
			'icon'				=> 'megaphone',
            'keywords'			=> array( 'events' )
        ));

	}
}

function origin_acf_block_render_callback( $block ) {
	$slug = str_replace('acf/', '', $block['name']);

	if( file_exists( get_theme_file_path("/blocks/{$slug}.php") ) ) {
		include( get_theme_file_path("/blocks/{$slug}.php") );
	}
}
