---
title: CSS Variables
date: '2021-06-20T12:00:00.00Z'
description: 'A Guide to CSS Variables'
---

## Introduction to CSS Variables

CSS Variables are also refered as CSS custom Properties. They are useful for reducing repetition in CSS and theme switching like day and night toggle. Custom properties are prefixed with -- a custom notion for example will look like --example-name. Lets set a CSS Variable:

```
:root {
    --main-color: white;
}
```

### Usage of CSS Variables

CSS Variables are accessed with var function, which allows to use the custom properties.

```
h1 {
    color: var(--main-color);
}
```

## References

1. [CSS Variables - why you should care](https://developers.google.com/web/updates/2016/02/css-variables-why-should-you-care)
2. [CSS custom properties - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)