---
layout: page
permalink: /publications/
title: Publications
description: Representative academic portfolio in occupational ergonomics, biomechanics, and human factors engineering.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<div class="publications">

<div class="publication-intro">
  <p>This portfolio represents research contributions in occupational ergonomics, electromyography-based fatigue assessment, work-rest optimization, and human factors in industrial settings. The publications showcase expertise in experimental design, biomechanical analysis, and optimization methodologies.</p>
  
  <div class="publication-stats">
    <div class="stat-item">
      <strong>9</strong> Publications
    </div>
    <div class="stat-item">
      <strong>84+</strong> Citations
    </div>
    <div class="stat-item">
      <strong>1,275+</strong> Reads
    </div>
  </div>
</div>

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<h3><i class="fa-solid fa-file-lines"></i> Journal Articles</h3>
<div class="publications-section">
{% bibliography --query @article %}
</div>

<h3><i class="fa-solid fa-users"></i> Conference Proceedings</h3>
<div class="publications-section">
{% bibliography --query @inproceedings %}
</div>

<h3><i class="fa-solid fa-graduation-cap"></i> Theses</h3>
<div class="publications-section">
{% bibliography --query @phdthesis or @mastersthesis %}
</div>

<h3><i class="fa-solid fa-file-text"></i> Preprints & Other Publications</h3>
<div class="publications-section">
{% bibliography --query @misc %}
</div>

</div>

<style>
.publication-intro {
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: var(--global-bg-color);
  border-left: 4px solid var(--global-theme-color);
  border-radius: 0.5rem;
}

.publication-stats {
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}

.stat-item {
  text-align: center;
  padding: 0.5rem 1rem;
  background: var(--global-theme-color);
  color: white;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

.publications-section {
  margin-bottom: 2rem;
}

.publications h3 {
  color: var(--global-theme-color);
  border-bottom: 2px solid var(--global-theme-color);
  padding-bottom: 0.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.publications h3 i {
  margin-right: 0.5rem;
}
</style>

<hr/>
<p><em>Publications automatically generated from BibTeX database. For the most up-to-date list, see my <a href="https://scholar.google.com/citations?user=AmtF1MwAAAAJ" target="_blank">Google Scholar profile</a> or <a href="https://www.researchgate.net/profile/Pramiti-Sarker" target="_blank">ResearchGate page</a>.</em></p>
