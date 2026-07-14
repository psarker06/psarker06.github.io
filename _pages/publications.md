---
layout: page
permalink: /publications/
title: Publications
description: Peer-reviewed scholarly publications
nav: true
nav_order: 5
---

<div class="publications">

<p>
  This page includes peer-reviewed publications in occupational ergonomics, human factors, and related areas.
  For citation metrics and the most up-to-date publication record, please refer to
  <a href="https://scholar.google.com/citations?user=AmtF1MwAAAAJ" target="_blank" rel="noopener noreferrer">Google Scholar</a>.
</p>

<h3>Refereed Journal Articles</h3>
{% bibliography --query @article %}

<h3>Conference Proceedings</h3>
{% bibliography --query @inproceedings %}

</div>
