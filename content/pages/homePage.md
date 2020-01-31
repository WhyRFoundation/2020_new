---
pageTemplate: 'homePageTemplate'
pagePrefixPath: ''
title: Home page
date: '2019-01-05T22:12:03.284Z'
description: 'example description for this page'
---

## Gatsby minimal boilerplate for quick start

### Preface

When I wanted start my new gatsby project, lost a lot of time searching a matching template for my needs.

[On gatsby starters page](https://www.gatsbyjs.org/starters/?v=2) are amazing templates with much features.
Unfortunately did't find what I need it means:

- Typescript;
- cms (netlify, strapi etc.);
- styled-components;
- pagination;
- searcher;
- **No UI Library!!!**;

My search inspired me to create my own Gatsby starter with all above features.
My primary goal was as little as possible redundant styles which most users will be removing.

### General feature:

- Typescript with auto generate types with ([gatsby-plugin-graphql-codegen](https://www.gatsbyjs.org/packages/gatsby-plugin-graphql-codegen/)) helps;
- [Netlify CMS](https://www.netlifycms.org/) support. I plan add other cms handling;
- [styled-components](https://www.styled-components.com/);
- [pagination](https://www.gatsbyjs.org/packages/gatsby-paginate/);
- [searcher with elasticlunr](https://www.gatsbyjs.org/packages/@gatsby-contrib/gatsby-plugin-elasticlunr-search/);
