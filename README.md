# [Agency Foxy Template](https://ryanbalieiro.github.io/foxy-template/) by Ryan Balieiro

This agency portfolio theme was created using Vue 3.0 and Bootstrap 5, all condensed into a sleek one-page layout. The theme boasts a variety of content sections, such as a portfolio gallery, testimonials, and contact information. It's designed to be fully customizable, allowing you to integrate or adapt it into your business with ease.
## Preview
![alt tag1](readme/screenshot.png)

**[View Live Preview](https://ryanbalieiro.github.io/foxy-template/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/StartBootstrap/startbootstrap-agency/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-agency.svg)](https://www.npmjs.com/package/startbootstrap-agency)

## Usage

To begin, clone the source files of the theme and navigate to the main directory. Then, execute the command `npm install`, and subsequently, `npm run dev`. This action will initiate a preview of the template within your default web browser. It will also monitor modifications made to the core template files and refresh the browser automatically upon saving any edits. For a comprehensive compilation of available commands, please refer to the `package.json` file.

If you intend to compile the entire project, encompassing assets, HTML, JS, and CSS, into the `dist` folder, run the command `npm run build`.

Prior to utilizing this build environment, make sure npm is installed on your system

## Quick Customization

### 1. Content Customization
All the application's data is stored in the `public` folder. Within this directory, you'll come across the data folder, which contains a JSON file holding the application's texts and information. Additionally, there's an `images` folder that contains the app's icons and photos. You have the flexibility to personalize the app's content by making edits to the `agency.json` file and substituting images as per your preferences.

### 2. Adding, removing and reordering sections

Inside the `agency.json` file, you have the ability to include or exclude items in the sections array. Keep in mind that the arrangement of sections within the array will determine how they appear in the display order.

```json
{
  "sections": [
    {
        "id": "about", /** the section's unique id **/
        "component": "AboutSection", /** the component that will render the section **/
        "class": "agency-section", /** the section's class (agency-section: white bg) **/
        "navbar": { /** navbar info **/
          "label": "About",
          "icon": "fa-solid fa-file"
        },
        "sectionHeader": (...),
        "sectionContent": (...),
        "sectionFooter": (...),
    },
    {
      "id": "services", /** the section's unique id **/
      "component": "ServicesSection", /** the component that will render the section **/
      "class": "agency-section-primary", /** the section's class (agency-section-primary:orange bg) **/
      "navbar": { /** navbar info **/
        "label": "About",
        "icon": "fa-solid fa-file"
      },
      "sectionHeader": (...),
      "sectionContent": (...),
      "sectionFooter": (...),
    },
    (...)
  ]
}
```

### 3. Theme Colors

Go to `src/scss/_variables.scss` and modify the color scheme as you prefer. For example, you can alter the primary color from orange to blue:

```scss
$primary: #07c5ee; /** making the primary color blue! **/
$dark: #212529;
```

## About

This template was created by and is maintained by **[Ryan Balieiro](https://ryanbalieiro.com/)**.

The template is based on the [Bootstrap](https://getbootstrap.com/) framework created by Mark Otto and Jacob Thorton; and the [Vue](https://vuejs.org/) framework created by Evan You.


## Copyright and License

Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE) license.