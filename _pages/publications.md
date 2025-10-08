---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed articles, conference proceedings, theses, and other scholarly outputs.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

### Journal Articles
{% bibliography --query @article %}

### Conference Proceedings
{% bibliography --query @inproceedings %}

### Theses
{% bibliography --query @phdthesis or @mastersthesis %}

### Other / Preprints
{% bibliography --query @misc %}

</div>

<hr/>
<p><em>Auto-generated from BibTeX. Edit <code>_bibliography/papers.bib</code> to update this page.</em></p>
