---
layout: page
title: Projects
permalink: /projects/
description: Research, methodological tooling, and intervention evaluation efforts
nav: true
nav_order: 3
display_categories: [workload-assessment, intervention-design, biomechanics-tools]
horizontal: false
---

This page highlights current and past efforts across three themes:

1. Workload Assessment – multi-modal characterization of physical & cognitive demands (EMG, posture, subjective, temporal exposure modeling).
2. Intervention Design – iterative development and evaluation of ergonomic solutions, workflow redesign, and work-rest scheduling strategies.
3. Biomechanics Tools – analytical or software utilities (signal processing scripts, posture analysis helpers, optimization prototypes) that support empirical studies.

Project cards are drawn from markdown files in the `_projects` collection. Each file exposes metadata like `category`, `importance` (for ordering), optional `img`, and `related_publications`.

Coming soon: curated “Spotlight” section and links to datasets / reproducible analysis notebooks.

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category | replace: '-', ' ' | capitalize }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
