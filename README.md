# Time based Website-Banner (Modal) Customizer (GUI)

### Create and add a customized and smart website banner in minutes to your website.

This project emerged through a conversation about the global climatestrike on the 23.09.2022. The **idea** is simple:

> Bring the strike for climate change also to the **web**

## General infos

Since this idea came up only 2 weeks before the actual climatestrike, it was built very rapidly. For that reason, there is a lot of space for optimization and further development. The project is build with **SvelteKit**.

## Main functionality

Apart from all the inputs field what the webapp basically does is the following:

- create and show your css and text customizations in the banner preview
- use the `exportableFunction` function to generate the needed script tag to add the banner to your website
- incl. in the script tag the outer html of the customized banner element as well as the needed css styling (either from a external script or typed into a string)

## Getting started

Fork the project and run `npm install`

DEVELOPMENT
Create your localhost server for development: `npm run dev`

PRODUCTION TEST
Create the production-ready build and test it:

```
npm run build
npm run preview
```

## You want to contribute

### Here are some suggestions

- add a two date input fields to add the functionality for the user to choose the time the banner appears by him or herself
- add a regex to be able to the getScript function which extracts comments from the exportableFunction. Currently you can not add any comment to the exportableFunction since the browser would not be able to read the compressed script with comments.
- creating feature-components instead for example of writing all the input functionally in the +page file directly
- Write a clean and mobile-optimized css-code to replace the currently needed bulma script for the banner. Test it and inject the styling into the `bannerCss.js`.
- refactor the code in general like: fix typos, add comments for better code-reading/understanding or simplify parts of the code.

ONCE YOU ARE DONE: **Create a pull-request for the development-branch**

### Use the webapp yourself or spread the word

[Climatestrike Editor](https://climatestrike.happyinbox.io) for your target environment.
