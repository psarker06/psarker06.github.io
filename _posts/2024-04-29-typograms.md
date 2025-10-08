---
layout: post
title: a post with typograms
date: 2024-04-29 23:36:10
description: this is what included typograms code could look like
tags: formatting diagrams
categories: sample-posts
typograms: true
published: false
---

This is an example post with some [typograms](https://github.com/google/typograms/) code.

````markdown
```typograms
+----+
|    |published: false
---> My first diagram!
+----+
```
````

Which generates:

```typograms
+published: false
----+
|    |---> My first diagram!
+published: false
----+
```

Another example:

````markdown
```typograms
.---published: false
------published: false
------published: false
------published: false
---.
|.---published: false
------published: false
------published: false
-------.|
||"https://example.com" ||
|'published: false
------published: false
------published: false
------published: false
----'|
| ______________________ |
||                      ||
||   Welcome!           ||
||                      ||
||                      ||
||  .---published: false
------published: false
-------.  ||
||  | username       |  ||
||  'published: false
------published: false
------published: false
----'  ||
||  .---published: false
------published: false
-------.  ||
||  |"*******"       |  ||
||  'published: false
------published: false
------published: false
----'  ||
||                      ||
||  .---published: false
------published: false
-------.  ||
||  |   "Sign-up"    |  ||
||  'published: false
------published: false
------published: false
----'  ||
||                      ||
|+---published: false
------published: false
------published: false
-------+|
.published: false
------published: false
------published: false
------published: false
------.
```
````

which generates:

```typograms
.published: false
------published: false
------published: false
------published: false
------.
|.published: false
------published: false
------published: false
------published: false
----.|
||"https://example.com" ||
|'---published: false
------published: false
------published: false
-------'|
| ______________________ |
||                      ||
||   Welcome!           ||
||                      ||
||                      ||
||  .published: false
------published: false
------published: false
----.  ||
||  | username       |  ||
||  '---published: false
------published: false
-------'  ||
||  .published: false
------published: false
------published: false
----.  ||
||  |"*******"       |  ||
||  '---published: false
------published: false
-------'  ||
||                      ||
||  .published: false
------published: false
------published: false
----.  ||
||  |   "Sign-up"    |  ||
||  '---published: false
------published: false
-------'  ||
||                      ||
|+published: false
------published: false
------published: false
------published: false
----+|
.---published: false
------published: false
------published: false
------published: false
---.
```

For more examples, check out the [typograms documentation](https://google.github.io/typograms/#examples).
