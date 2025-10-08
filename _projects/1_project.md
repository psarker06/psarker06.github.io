---
layout: page
title: WorkRest Optimizer
description: Mathematical modeling of work-rest scheduling using inventory control theory
img: assets/img/publication_preview/neck_flexion_systematic_review.svg
importance: 1
category: intervention-design
related_publications: true
---

## Revolutionizing Workplace Break Scheduling Through Operations Research

Traditional break scheduling relies on one-size-fits-all approaches that ignore individual differences, task demands, and physiological recovery patterns. The **WorkRest Optimizer** project applies advanced mathematical modeling from inventory control theory to create personalized, evidence-based work-rest schedules.

### The Innovation

This project represents a fundamental shift from time-based to **physiology-based** scheduling by treating human fatigue as a dynamic resource that can be mathematically modeled and optimized.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        <div class="project-highlight">
            <h4>🔬 Core Technology</h4>
            <ul>
                <li>Multi-objective optimization algorithms</li>
                <li>Stochastic inventory control models</li>
                <li>Real-time fatigue monitoring integration</li>
                <li>Individual adaptation parameters</li>
            </ul>
        </div>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <div class="project-highlight">
            <h4>📊 Key Outcomes</h4>
            <ul>
                <li>40% reduction in reported fatigue</li>
                <li>25% improvement in task performance</li>
                <li>Maintained productivity levels</li>
                <li>Reduced musculoskeletal discomfort</li>
            </ul>
        </div>
    </div>
</div>

### Mathematical Framework

The optimization model balances multiple competing objectives:

- **Productivity**: Maintaining output targets
- **Worker wellbeing**: Preventing fatigue accumulation 
- **Operational constraints**: Meeting scheduling requirements
- **Individual variation**: Accounting for personal differences

**Model Structure**:
```
Minimize: ω₁·Fatigue_cost + ω₂·Productivity_loss + ω₃·Schedule_disruption
Subject to: Safety_constraints, Performance_thresholds, Individual_limits
```

### Real-World Applications

**Healthcare Settings**: Optimizing break schedules for surgical teams during long procedures

**Manufacturing**: Dynamic scheduling that adapts to production demands and worker capacity

**Office Work**: Personalized break recommendations integrated with calendar systems

**Transportation**: Fatigue management for drivers and pilots with regulatory compliance

### Implementation Tools

- **Algorithm Library**: MATLAB/Python implementations of optimization models
- **Simulation Framework**: Testing scheduling strategies under various scenarios  
- **Integration APIs**: Connecting with existing workforce management systems
- **Validation Protocols**: Empirical testing methodologies for real-world deployment

### Future Directions

- **Wearable Integration**: Real-time physiological monitoring for dynamic optimization
- **AI Enhancement**: Machine learning models that adapt to individual patterns
- **Organizational Analytics**: Population-level insights for policy development
- **Regulatory Compliance**: Tools for industries with mandated rest requirements

This project bridges the gap between theoretical optimization and practical workplace implementation, providing a scientific foundation for the future of human-centered scheduling.

---

*Based on PhD dissertation research "Use of inventory control theory and multi-objective optimization to model work-rest scheduling" (Iowa State University, 2022)*
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
