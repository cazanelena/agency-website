# ReadmeFile: agency-website

## Installation

To install and run this project, clone the project files and open `index.html` in a browser.

## Overview

In this project we built a Software Development agency website using HTML, CSS, and JavaScript. The website should give potential clients:

    - An introduction to our agency
    - Information about each member of our team
    - A way to get in touch if they are interested in working with us

## Planning

Before starting the project we were given the following User stories with acceptance criteria.

    - Navigation menu
    - ‘About us’ section
    - Contact form
    - A user cannot submit a form without filling out all of the mandatory fields (name, company name, email address)
    - Information from the form doesn’t get submitted until the user clicks a button
  
    
 We used Figma to create an initial wire frame and decided how we wanted to layout the site.
 
  <img width="600" alt="Agency website2" src="https://github.com/cazanelena/agency-website/assets/74066857/e2a033f3-036b-415e-918e-7967b18d1eae">

## Building 

We broke the project down into it's main parts and worked on them individually.

- Navigation section: Includes a navigation bar and a burger menu for smaller screens.
- Agency description section: Describes the services offered by the agency with corresponding images and text.
- Team section: Introduces the team members with their images, names, and descriptions.
- Contact section: Provides a form to leave contact details.
- Footer section: Includes social media links and project links.
- Form: Submitted data saves to local storage.

## Debugging

When the burger menu was opened on smaller screens such as a mobile or tablet, we experienced a problem where the horizontal width of the page would increase to accomodate some hidden styling on the burger menu. Normally the css property `overflow:hidden` should stop this behaviour, but it was being overruled by the devices viewport. 
We fixed this by adding an attribute to the meta tag defining the viewport properties. The addition of `minimum-scale=1` specifies that the user should not be able to zoom out beyond the initial scale level.
