---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 5
---

<div class="publications">

<h3>Refereed Journal Papers</h3>
{% bibliography --query @article %}

<h3>Conference Proceedings</h3>
{% bibliography --query @inproceedings %}

</div>
