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
			'icon'				=> 'text-page',
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
			'keywords'			=> array( 'project, featured projects' )
		));
		acf_register_block(array(
			'name'				=> 'test',
			'title'				=> __('Test'),
			'description'		=> __('Add featured projects'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'screenoptions',
			'keywords'			=> array( 'test, featured test' )
		));
		acf_register_block(array(
			'name'				=> 'gallery',
			'title'				=> __('Gallery with projects'),
			'description'		=> __('Add a gallery block'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'layout',
			'keywords'			=> array( 'gallery, project gallery' )
		));
		acf_register_block(array(
			'name'				=> 'images',
			'title'				=> __('Images'),
			'description'		=> __('Add an image block'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'format-gallery',
			'keywords'			=> array( 'images, image' )
		));
		acf_register_block(array(
			'name'				=> 'project-details',
			'title'				=> __('Project details'),
			'description'		=> __('Add project details'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'format-aside',
			'keywords'			=> array( 'project, project details' )
		));
		acf_register_block(array(
			'name'				=> 'pull-out',
			'title'				=> __('Pull out'),
			'description'		=> __('Add pull out'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'admin-comments',
			'keywords'			=> array( 'pull out' )
		));
		acf_register_block(array(
			'name'				=> 'next-project',
			'title'				=> __('Next project'),
			'description'		=> __('Add next project link'),
			'render_callback'	=> 'jajennings_acf_block_render_callback',
			'category'			=> 'jajennings-blocks',
			'icon'				=> 'category',
			'keywords'			=> array( 'project, next project' )
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
		'acf/content',
		'acf/cta',
		'acf/featured-projects',
		'acf/gallery',
		'acf/images',
		'acf/next-project',
		'acf/project-details',
		'acf/pull-out',
		'acf/text-image',
		'acf/test',
	);
 
}
