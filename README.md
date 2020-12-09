**PAGE**

This website was designed for a users who are looking for a club/Bar to go to in Stockholm. The site allows accessibility to the locations of those clubs around stockholm and other clubs and bars. It allows a user to compare locations and basic information of the bars and night clubs all in one page rather than opening several pages.

**UX**

I designed this project as a one page based site. This would allow for easy navigation due to its simplicity and being mobile friendly considering users of the site would most likely be people on the move looking for the next club to go to quickly. As such, it was imperative that I created a site that was also mobile-friendly and simple, as a priority.

**Target Audience:**

 - The website is aimed at but not limited to:
   
 - clubbers
 - tourists
 - young professionals

**FEATURES:**

 1. Map: The map allows users to be able to make comparisons in relation
    to distances and locations between clubs and identify general
    information about each one.
    
   2. Buttons: made by replacing HTML with Jquery to produce a button that
    provides extra information on each featured clubs.
    
    3. Cards made with bootstrap to highlight 8 featured clubs.
    
    4. Search box on map: Google Places and Google Places ID provides
    in-map searching with full basic information and address each club
    searched within a restricted radius(set out in the javascript)
    
    5. HTML: Provided the content and structure for the website.
    
    6. Javascript: used to create establish API usage for a Google Map,
    Google places with markers. And create an accordion as a page
    feature to show the recommended night clubs
    
    7. Jquery: used to produce the interactive buttons for each card
    
    8. Bootstrap: The framework was used to create the layout for the page.
    Used to create the accordion collapsing interaction for the
    highlighted clubs.
    
    9. CSS: Provides the styling.
    
    10. Coolors: used to create the page colour scheme.

**PAGE PURPOSE:**

- to check the location of a night club and the surrounding bars and the basic information of the night clubs.

- to present the locations shown on a map of these clubs

- to provide highlights of the most common bars

- tour guide for nightclub-goers

**TESTING:**

Testing was carried out using the developer tools in Google Chrome and also while in preview from Gitpod. I used Google chrome developer mode to check responsiveness and the extent to which users could view the page via mobile. Back-and-forth alterations of code occurred in order to achieve appropriate responsiveness of the the google APis’ used as well as the accordion bootstrap feature. I used lighthouse to debug and retest features and remove errors and bugs and increase performance. 

Google maps does not seem to allow me to add the information box details for other nearby locations I had identified within the radius set. As such, they remain unable to provide that extra information. However, the user can click around it and find the same bar club or restaurant and click on that marker to provide that information.




**USER TEST STORY:**

- See Lighthouse Reports [Desktop](https://github.com/aoshenye/clubbing/blob/master/desktop_lighthouse%20report.JPG) & [Mobile](https://github.com/aoshenye/clubbing/blob/master/mobile_lighthouse%20report.JPG)

- Maps displayed correctly- map does not render when first opening the site.- issue fixed - map now renders at the opening of site. Ensured API keys were restricted appropriately for map to render.

- Added font face on font load times to improve performance. all features remain functioning. Font loads faster.

- removed unused CSS and Javascript to improve performance: all features remain functioning.

- adding media query for map api in css in order to maintain functionality of map and display accordingly on tablet and mobiles.

- All tests performed and no errors found.

- The modal was difficult to enable and align with the HTML as I was not able to have it function appropriately. Identifying what code was needed for the javascript to enable to modal i struggled with. The html for the modal was easy to set up so the problems came from the javascript. identification of code that would align with the modal was difficult to identify and enable and thus i removed that function and replaced it.

- In terms of the map itself. I wanted to combine the Maps API and the Places for the map to produce more interactive functioning and results for the places searched for. For example, enabling the map to produce basic information box with complete details of each Club as well as a picture of it. Google did not provide the code for that to occur and thus went for that information to be displayed below the map using HTML and Jquery, which allows more information than the address and opening hours. The interactive nature of the page would be highlighted by the JQuery instead to replace the HTML and hide that extra information until it is clicked on - The button.

- The website was tested on the following browsers using a Microsoft Surface Laptop on Windows 10.

- Google Chrome - Version 86.0.4240.183 (Official Build) (64-bit)

- Microsoft Edge - Version 86.0.622.63 (Official build) (64-bit)

- Firefox - 75.0 (64 bit)

- The website worked efficiently on all browsers and mobile phones above. All navigation links, required elements, APIs’ all functioned correctly. The hovering animations still worked on all browsers.

- The site was also tested on the following Devices:

- Google pixel 3a using Google Chrome on Android 10 iphone xr using Safari on IOS 13.4.1

**DEPLOYMENT**

The webpage is hosted on GitHub Pages, to access the site, following next steps.

1. Log into GitHub Pages from your repository
2. Select [Clubbing](aoshenye%20/%20clubbing)
3. Select Setting at the top right hand of the page. 
4. Scroll down to GitHub Pages section
5. Under source click drop-down menu labelled None and select Master Branch
6. The page will automatically refresh and now the webpage has been deployed. 


***To clone this project in Gitpod, you will need:***
1. A Github account 
2. Use the Chrome browser

```

Then follow these steps:

1. Install the Gitpod Browser Extensions for Chrome

2. After Installation, restart the browser

 3. Log into Gitpod with your git pod account

 4. Navigate to the Project GitHub repository

5. Click the green "Gitpod" button in the top right corner of the repository

6. This will then trigger a new gitpod workspace created from the code in github to work locally. 

```

**CREDITS:**

Content:

The button was created with [\[Bootstrap 4.4:\]](https://getbootstrap.com/docs/4.4/components/buttons/)

[Google MAPS API] - to render map (https://developers.google.com/])


The background theme colours used on the page were chosen from Coolors:  [https://coolors.co/555b6e-89b0ae-bee3db-faf9f9-ffd6ba](https://coolors.co/555b6e-89b0ae-bee3db-faf9f9-ffd6ba).

The font style was take from Font Awesome:  [https://fonts.google.com/?query=lat&selection.family=Lato|Oswald](https://fonts.google.com/?query=lat&selection.family=Lato%7COswald)

The hover was taken from:  [https://ianlunn.github.io/Hover/](https://ianlunn.github.io/Hover/)

The script was taken from:  [https://cdnjs.com/](https://cdnjs.com/)

The Bootstrap was taken from:  [https://stackpath.bootstrapcdn.com/](https://stackpath.bootstrapcdn.com/)


[The wireframes were created with Adobe XD -](https://github.com/aoshenye/clubbing/blob/master/wireframe_clubbing_.pdf)

#MEDIA:

All images were taken from my personal photo collection

#ACKNOWLEDGMENTS:

To my mentor Reuben Ferrante for patiently helping me through the process and providing advice and guidance.

The inspiration for the site was taken from  [https://startbootstrap.com/previews/stylish-portfolio](https://startbootstrap.com/previews/stylish-portfolio)  and  [https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQGIAgGoAgO4Aoaom_4FwAIB0gIkZWE1OTQyZWQtOWY2NC00NzlhLTgwZjItZDM4OTU5ZDZiZTY42AIF4AIB;sid=568806c28f3b3025dbc2ad6e52c02e37;keep_landing=1&sb_price_type=total&](https://www.booking.com/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaFCIAQGYAQm4ARfIAQzYAQHoAQGIAgGoAgO4Aoaom_4FwAIB0gIkZWE1OTQyZWQtOWY2NC00NzlhLTgwZjItZDM4OTU5ZDZiZTY42AIF4AIB;sid=568806c28f3b3025dbc2ad6e52c02e37;keep_landing=1&sb_price_type=total&)
