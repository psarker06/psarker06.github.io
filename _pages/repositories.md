---
layout: page
permalink: /repositories/
title: Repositories
description: Selected code, data utilities, and tools supporting ergonomics & human performance research
nav: true
nav_order: 4
---

This page pulls live metadata from GitHub (stars, descriptions, language) for configured users and individual repositories. To customize:

1. Edit `_data/repositories.yml`.
2. Replace `github_users` with your GitHub username (and collaborators if desired).
3. List any specific repositories (including private ones you want to showcase manually) under `github_repos`.
4. (Optional) Enable trophies in `_config.yml` if you want a contributions summary badge section.

Research tooling here typically includes:
- Signal processing / EMG analysis scripts.
- Workload modeling or optimization prototypes.
- Data preprocessing utilities for posture or sensor fusion.
- Reproducible study artifact repositories (when publishable).

---

{% if site.data.repositories.github_users %}

## GitHub Users

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}
{% endif %}

{% if site.data.repositories.github_repos %}

## Pinned Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>
{% endif %}
