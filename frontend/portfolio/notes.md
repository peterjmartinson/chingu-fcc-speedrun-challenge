Standard file structure:

-  public/
-   +- assets
-       `- <images>
-   +- css
-       `- standard.css
-       `- style.css
-   +- documentation
-       `- blog.md
-   +- js
-       `- app.js
-       `- app-specific.js
-   +- test
-       `- test.js
-  package.json
-  server.js


@media queries
1. You need to include the <meta name="viewport"...> in the HTML!!!


CSS directory
=============

standard
--------

html
body
h1
h2
h3
main
main h1
main h2
section
section h2
section p
section li
figure
figure img
@media: main

footer
------

footer
footer div
footer a
footer a:hover
footer #social
footer #social a
footer #social a:hover
@media footer

header
------

header
header hr
header a:hover
header a
header #icon-container
header #icon
header #name
header #subtitle
header #menu
nav
nav .mobile-nav
@media: header
@media: header #icon-container
@media: header #icon
@media: header #name
@media: header #subtitle
@media: header #menu

layout
------
header > a#icon-container > div#icon
header > div#name > h1 > a
header > div#subtitle > h2
header > div#menu > h3 > a
                  > h3 > a
                  > h3 > a
                  > h3 > a
nav > div.mobile-nav > h3 > a
nav > div.mobile-nav > h3 > a
nav > div.mobile-nav > h3 > a
nav > div.mobile-nav > h3 > a
main
footer > h2
footer > div#social > a*5
footer > div#email > h1 > a
footer > a > div#copyright

