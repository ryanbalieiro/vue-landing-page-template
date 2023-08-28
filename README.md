# [Agency Foxy Template](https://ryanbalieiro.github.io/foxy-template/) by Ryan Balieiro

This agency portfolio theme was created using Vue 3.0 and Bootstrap 5, all condensed into a sleek one-page layout. The theme boasts a variety of content sections, such as a portfolio gallery, testimonials, a showcase of services, contact information, and more. 

It's designed to be fully customizable, allowing you to integrate or adapt it into your business with ease.

## Preview
![alt tag1](screenshots/preview.png)

**[View Live Preview](https://ryanbalieiro.github.io/foxy-template/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/StartBootstrap/startbootstrap-agency/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-agency.svg)](https://www.npmjs.com/package/startbootstrap-agency)

## Getting Started

1. Clone the repo:
```
git clone https://github.com/ryanbalieiro/foxy-template
```

2. Go to the project's root folder and use npm to install all required components:
```
npm install
```

3. Launch the project in developer mode:
```
npm run dev
```

4. To temporarily deactivate the preload animation during theme adjustments, navigate to `public/data/general.json` and modify the following field:

```
 "preloaderEnabled": false
```

5. For a production build, go to `vite.config.js` and configure the base directory for your application. This setting establishes the primary path under which your website will be hosted.

```js
export default defineConfig({
  base: '/',
  plugins: [vue()],
})
```

6. Run the following command to compile the project into `dist`:

```
npm run build
```

7. If your deployment is targeted at GitHub Pages, ensure to run the following command post the build process:

```
npm run deploy
```

This command will make a copy of `index.html` named `404.html` inside the dist folder, serving as a workaround to the problem discussed in detail at https://stackoverflow.com/questions/48521177/404-when-reloading-a-vue-website-published-to-github-pages.

## Quick Customization

### 1. Content Customization
The content of the application, encompassing text and images, is conveniently located within the `public/` directory. Inside the `public/` folder, you'll find:

- `/data/general.json` ➔ A JSON file that contains the core information about the application.
- `/data/sections.json` ➔ A JSON file that holds the content for each individual section.
- `/data/pages.json` ➔ A JSON file that holds the content for secondary pages, such as the Privacy Policy and the legal sections.
- `/images/(...)` ➔ Icons and photos used in the application.

### 2. Quickly customizing the colors

Customizing the theme colors is a straightforward process. Simply access `src/scss/_variables.scss` and make adjustments to the color variables. For example, you can alter the primary color from orange to blue just by changing this line:

```scss
$primary: #07c5ee; /** making the primary color blue! **/
$dark: #212529;
```

### 3. Adding, removing and reordering sections

Inside the `sections.json` file, you have the ability to include or exclude items in the sections array. Keep in mind that the arrangement of sections within the array will determine how they appear in the display order. 

```
{
    "id": "about",
    "component": "AboutSection",
    "class": "agency-section",
    "navbar": {
        "label": "About",
        "faIcon": "fa-solid fa-file"
    },

    "headline": {
        (...)
    },

    "items": [
        (...)
    ],

    "footer": {
        (...)
    }
},

{
    "id": "services",
    "component": "ServicesSection",
    "class": "agency-section-primary",
    "navbar": {
        "label": "Services",
        "faIcon": "fa-solid fa-wrench"
    },

    "headline": {
        (...)
    },

    "items": [
        (...)
    ],

    "footer": {
        (...)
    }
},
```

### 4. Adding functionality to the contact form

Enabling the functionality of the contact form requires you developing your own server-side implementation within the `ContactSection.vue` file. It's important to mention that the existing template solely contains the client-side implementation, along with a simulated delay using a placeholder timeout:

```js
const _sendMessage = (values) => {
    const feedbackView = layout.getFeedbackView()
    feedbackView.showActivitySpinner("Sending Message...")
    submitAttempts++

    /** The message sending logic goes here... **/
    // setTimeout(() => {
    //     if(submitAttempts % 2 !== 0) {
    //         _onMessageSent()
    //     }
    //     else {
    //         _onMessageError()
    //     }
    // }, 1000)
    /** ************************************** **/
}
```

## About

This template was created by and is maintained by **[Ryan Balieiro](https://ryanbalieiro.com/)**.

The template is based on the [Bootstrap](https://getbootstrap.com/) framework created by Mark Otto and Jacob Thorton; and the [Vue](https://vuejs.org/) framework created by Evan You.


## Copyright and License

Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE) license.