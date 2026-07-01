---
layout: page
permalink: /team/
title: team
description: Meet our research team
nav: true
nav_order: 2
---

<div class="team-page">

  <!-- Director Section -->
  {% if site.data.team.director %}
    <section class="team-section">
      <h2 class="section-title">DIRECTOR</h2>
      {% for member in site.data.team.director %}
        <div class="director-profile">
          <div class="row">
            <div class="col-md-4 text-center">
              {% if member.image %}
                {% assign profile_image_path = member.image | prepend: 'assets/img/' %}
                <img src="{{ profile_image_path | relative_url }}" class="img-fluid rounded-circle director-image" alt="{{ member.name }}">
              {% endif %}
            </div>
            <div class="col-md-8">
              <h3 class="member-name">
                {% if member.website %}
                  <a href="{{ member.website }}" target="_blank">{{ member.name }}</a>
                {% else %}
                  {{ member.name }}
                {% endif %}
              </h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-title">{{ member.title }}</p>
              <p class="member-affiliation">
                {% if member.department %}
                  <a href="https://imse.statler.wvu.edu/" target="_blank">{{ member.department }}</a><br>
                {% endif %}
                {% if member.university %}
                  <a href="https://www.wvu.edu/" target="_blank">{{ member.university }}</a>
                {% endif %}
              </p>
              {% if member.bio %}
                <p class="member-bio">{{ member.bio }}</p>
              {% endif %}
            </div>
          </div>
        </div>
      {% endfor %}
    </section>
  {% endif %}

  <!-- Ph.D. Students Section -->
  {% if site.data.team.phd_students %}
    <section class="team-section">
      <h2 class="section-title">PH.D. STUDENTS</h2>
      <div class="row team-grid">
        {% for member in site.data.team.phd_students %}
          <div class="col-md-6 mb-4">
            <div class="team-member-card">
              <div class="row">
                <div class="col-4">
                  {% if member.image %}
                    {% assign profile_image_path = member.image | prepend: 'assets/img/team/' %}
                    <img src="{{ profile_image_path | relative_url }}" class="img-fluid rounded-circle member-image" alt="{{ member.name }}">
                  {% else %}
                    <img src="{{ 'assets/img/team/placeholder.jpg' | relative_url }}" class="img-fluid rounded-circle member-image" alt="{{ member.name }}">
                  {% endif %}
                </div>
                <div class="col-8">
                  <h4 class="member-name">
                    {% if member.website %}
                      <a href="{{ member.website }}" target="_blank">{{ member.name }}</a>
                    {% else %}
                      {{ member.name }}
                    {% endif %}
                  </h4>
                  <p class="member-role">{{ member.role }}</p>
                  {% if member.research %}
                    <div class="member-research">
                      <strong>Research Interests:</strong>
                      <ul style="margin-bottom:0;">
                        {% for line in member.research %}
                          {% if line != '' %}
                            <li>{{ line | remove: '·' | strip }}</li>
                          {% endif %}
                        {% endfor %}
                      </ul>
                    </div>
                  {% endif %}
                  {% if member.bio %}
                    <p class="member-bio">{{ member.bio }}</p>
                  {% endif %}
                  {% if member.certifications_awards %}
                    <div class="member-certifications-awards">
                      <strong>Certifications & Awards:</strong>
                      <ul style="margin-bottom:0;">
                        {% for item in member.certifications_awards %}
                          <li>{{ item }}</li>
                        {% endfor %}
                      </ul>
                    </div>
                  {% endif %}
                  <div class="member-links">
                    {% if member.email %}
                      <a href="mailto:{{ member.email }}" title="Email"><i class="fas fa-envelope"></i></a>
                    {% endif %}
                    {% if member.linkedin %}
                      <a href="{{ member.linkedin }}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    {% endif %}
                    {% if member.website %}
                      <a href="{{ member.website }}" target="_blank" title="Website"><i class="fas fa-globe"></i></a>
                    {% endif %}
                  </div>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  <!-- Master's Students Section -->
  {% if site.data.team.masters_students %}
    <section class="team-section">
      <h2 class="section-title">MASTER'S STUDENTS</h2>
      <div class="row team-grid">
        {% for member in site.data.team.masters_students %}
          <div class="col-md-6 mb-4">
            <div class="team-member-card">
              <div class="row">
                <div class="col-4">
                  {% if member.image %}
                    {% assign profile_image_path = member.image | prepend: 'assets/img/team/' %}
                    <img src="{{ profile_image_path | relative_url }}" class="img-fluid rounded-circle member-image" alt="{{ member.name }}">
                  {% else %}
                    <img src="{{ 'assets/img/team/placeholder.jpg' | relative_url }}" class="img-fluid rounded-circle member-image" alt="{{ member.name }}">
                  {% endif %}
                </div>
                <div class="col-8">
                  <h4 class="member-name">
                    {% if member.website %}
                      <a href="{{ member.website }}" target="_blank">{{ member.name }}</a>
                    {% else %}
                      {{ member.name }}
                    {% endif %}
                  </h4>
                  <p class="member-role">{{ member.role }}</p>
                  {% if member.research %}
                    <p class="member-research"><small>{{ member.research }}</small></p>
                  {% endif %}
                  {% if member.bio %}
                    <p class="member-bio">{{ member.bio }}</p>
                  {% endif %}
                  <div class="member-links">
                    {% if member.email %}
                      <a href="mailto:{{ member.email }}" title="Email"><i class="fas fa-envelope"></i></a>
                    {% endif %}
                    {% if member.linkedin %}
                      <a href="{{ member.linkedin }}" target="_blank" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
                    {% endif %}
                    {% if member.website %}
                      <a href="{{ member.website }}" target="_blank" title="Website"><i class="fas fa-globe"></i></a>
                    {% endif %}
                  </div>
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  <!-- Undergraduate Students Section -->
  {% if site.data.team.undergraduate_students %}
    <section class="team-section">
      <h2 class="section-title">UNDERGRADUATE RESEARCH ASSISTANTS</h2>
      <div class="row team-grid">
        {% for member in site.data.team.undergraduate_students %}
          <div class="col-md-6 mb-4">
            <div class="team-member-card">
              <div class="row">
                <div class="col-4">
                  {% if member.image %}
                    {% assign profile_image_path = member.image | prepend: 'assets/img/team/' %}
                    <img src="{{ profile_image_path | relative_url }}" class="img-fluid rounded-circle member-image" alt="{{ member.name }}">
                  {% else %}
                    <img src="{{ 'assets/img/team/placeholder.jpg' | relative_url }}" class="img-fluid rounded-circle member-image" alt="{{ member.name }}">
                  {% endif %}
                </div>
                <div class="col-8">
                  <h4 class="member-name">{{ member.name }}</h4>
                  <p class="member-role">{{ member.role }}</p>
                  {% if member.research %}
                    <p class="member-research"><small>{{ member.research }}</small></p>
                  {% endif %}
                  {% if member.bio %}
                    <p class="member-bio">{{ member.bio }}</p>
                  {% endif %}
                </div>
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  <!-- Alumni Section -->
  {% if site.data.team.alumni %}
    <section class="team-section">
      <h2 class="section-title">ALUMNI</h2>
      <div class="alumni-list">
        {% for member in site.data.team.alumni %}
          <div class="alumni-item">
            <div class="row align-items-center">
              <div class="col-md-2">
                {% if member.image %}
                  {% assign profile_image_path = member.image | prepend: 'assets/img/team/' %}
                  <img src="{{ profile_image_path | relative_url }}" class="img-fluid rounded-circle alumni-image" alt="{{ member.name }}">
                {% endif %}
              </div>
              <div class="col-md-10">
                <h5 class="alumni-name">{{ member.name }}</h5>
                <p class="alumni-info">
                  {{ member.role }}
                  {% if member.graduation_year %}
                    ({{ member.graduation_year }})
                  {% endif %}
                </p>
                {% if member.current_position %}
                  <p class="alumni-position"><em>Current: {{ member.current_position }}</em></p>
                {% endif %}
              </div>
            </div>
          </div>
        {% endfor %}
      </div>
    </section>
  {% endif %}

  <!-- Join Us Section -->
  <section class="team-section join-section">
    <h2 class="section-title">JOIN US</h2>
    <div class="join-content">
      <p>
        We are always looking for motivated students interested in occupational ergonomics, 
        human factors, and biomechanics research. If you are passionate about improving 
        worker well-being and workplace safety, please reach out!
      </p>
      <p>
        <strong>Prospective Ph.D. Students:</strong> Please email Dr. Sarker with your CV, 
        research interests, and transcripts.
      </p>
      <p>
        <strong>WVU Students:</strong> Undergraduate and graduate students interested in 
        research assistantships are encouraged to contact Dr. Sarker.
      </p>
      <div class="text-center mt-4">
        <a href="mailto:ps0035@mail.wvu.edu" class="btn btn-primary">Contact Dr. Sarker</a>
      </div>
    </div>
  </section>

</div>
