<?php
/**
 * The template used for displaying a filter.
 *
 * @package _s
 */

$title = get_field('form-title');
$content = get_field('form-content');
$form = get_field('form');
?>

<div class="container">
	<div class="filter__buttons">
		<p>Filter:<p>
		<button data-filter="*">All</button>
		<button data-filter=".gallery">Gallery</button>
		<button data-filter=".project">Case Study</button>

		<p>Markets</p>
		<button data-filter="*">All</button>
		<button data-filter=".health">Health</button>
		<button data-filter=".finance">Finance</button>
	</div>

	<div class="filter">
		<div class="filter-item filter-item--tall health project">2</div>
		<div class="filter-item health gallery">1</div>
		<div class="filter-item filter-item--tall health project">3</div>
		<div class="filter-item finance project">4</div>
		<div class="filter-item finance gallery">5</div>
		<div class="filter-item finance project">6</div>
		<div class="filter-item gallery">7</div>
	</div>
</div>