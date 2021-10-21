
# UI-for-a-Microbial-Genomics-Database
A Web-based User Interface for a Microbial Genomics Database / Undergraduate Honours Project Supervised by Dr. Olivier Tremblay-Savard

## Motivation
Aaron Petkau, a Master’s Student in the Bioinformatics Lab at the University of Manitoba, is currently focused on building a framework to pre-process microbial genomes at different levels of resolution and store these processed genomes within a database for later comparisons. The framework provides support for searching for closely related microbial genomes or genomes containing specific genomic features (mutations or genes). This will provide an all-in-one tool for biologists, epidemiologists, and other researchers who are interested in using genomics for infectious disease investigations.

However, this framework is primarily being developed with a command-line interface, which limits the user base to those particularly skilled with command-line tools.

## Background

The use of microbial whole-genome sequencing is now routinely used to study and track infectious diseases worldwide. A topical example would be the use of sequenced genomes of the SARS-CoV-2 virus to track the spread of COVID-19 [1], but genome sequencing is also used to investigate outbreaks of food-borne illnesses caused by bacteria such as Salmonella enterica or Escherechi coli [2]. Microbial whole-genome sequencing is a process where the genetic code of a microorganism (e.g., a bacteria or virus) is read by a specialized machine and stored as data on a computer. Collections of microbial genomes can provide a wealth of information to aid in infectious disease investigations. A common analysis method is to compare collections of genomes at differing levels of resolution (e.g., mutations or genes) to infer how diseases are transmitted across a population or for tracking more severe forms of the disease based on differences in the underlying genetic code [3].

## Problem statement

Since the framework is being developed with a command-line interface so far, having a web interface could broaden its user base. A web interface could be used for summarizing data within this system and provide the capability for users to search for information of interest and review or download relevant results. We propose as an Honours Project to build such a web interface. We believe this will increase the exposure of the database software to a much wider audience.

## Facilities
In this project, the help and guidance of Dr. Tremblay-Savard, Aaron Petkau, and members of the Bioinformatics Lab at the University of Manitoba who are well-informed about different topics in computer science will enhance our overall experience and the quality of our deliverables. We will be using the Bioinformatics Discord channel for communication with other members of the lab.

## Deliverables
Our deliverable is the web interface for Aaron Petkau’s Master’s project. This includes the following:
a.	Support for searching for closely related microbial genomes.
b.	Support for searching for genomes containing particular features (mutations genes) of interest.
c.	A display of summary or statistics of data stored within the database and other interesting visualizations.

## Methodology and Discussion
### User Experience (UX) Design
The first step I took in the process of developing a web-based user interface, was going through a UX design cycle. The cycle I chose and tweaked to follow comes from the combination of my previous experience in UX design, the mentoring I received from the senior designers I interacted with over the years, and the following references: [4], [5], [6]. Furthermore, throughout this project, I carried the mindset of The Lean Startup which I had adapted from the book, The Lean Startup by Eric Ries [7].

#### UX Cycle

1. Research

In this stage, I educated myself on the problem. I learned the importance of data visualization and examples of the best practices of user experience in Bioinformatics from the following papers suggested to me by professor Tremblay-Savard: [8], [9], [10]. The Nextstrain  website that Aaron Petkau suggested also inspired me to create a minimal and straightforward design.

2. Design

In this stage, I used the traditional method of sketching with a pen and paper. Figure 1 shows my final sketch of the home page and the theme I carried throughout my design. I presented the placement of the top navigation bar, the buttons, the search bar, and how our user interface could look at the first glance. I aimed for a minimal, straightforward, and clear design for our home page.

 
 ![figure 1](https://user-images.githubusercontent.com/60762302/138332795-ddcd9224-5b87-4e83-aa77-49ca18ec6460.jpg)
Figure 1 - The Final Sketch of the Home Page

3. Prototype

Prototyping is an important step as it lets us put our design to test and see the flaws as well as its strengths. A simple prototype in our case would be a web page with minimum viable requirements where a user can interact with and search for samples with a specific mutation. This is the stage where I took into account the color theory, the colors psychology, the combination of the color of the texts on the background’s color, the size of different elements, the fonts, and the font sizes. 

The color theory and colors psychology are concepts that I have always been fond of. In my experience, I have always used the colors psychology first to choose a primary color, then based on the needs of the application, I would use the color theory to choose more colors. Basically, colors psychology in UX refers to the effects of colors on a user’s interaction with the design [11]. Knowing the importance of colors in design is critical due to its high impact on user’s actions [12]. Blue is the color that generates a trusting feeling for users [11]. Users need to feel they can trust our database when performing a query and the data visualization that we present to them. Based on the standards of Material Design [13], I have come up with one primary color and two different shades of it which leaves us with 3 colors  that I generated using Color Tool  from Material Design. Our primary color is used most frequently in our application and is our brand color (you can see it in the background of the top navigation bar). I also included surface, background, and error colors in my design. These are used for showing an error message or displaying an action button. At this point, I set aside the alternative colors which are usually used for applications with dark and light themes [13]. Furthermore, I used Color Tool3 again to make sure the text color would be visible and accessible on our three chosen colors.

I created our action button for searching on our home page, using the guidelines in Material Design regarding buttons. I chose the contained button to express the importance of our search button and made sure the size of it was relative to its text font size. So that the text was visible and in one line. I also placed it right next to the input box to create a sense of relativity [14]. 

Choosing two main fonts was the next step. I used one for the header (top navigation bar) and footer and one for the main content and text on our page. To stay coherent with the minimalistic features of my design, I chose two minimal and well-known fonts: WorkSans  and Lato . I have to say further usability and accessibility tests are required to determine whether the font sizes I have suggested are useful or whether they need to be improved.


For prototyping my design, I used the tool Figma  as the first component in this step. Figma is a simple, yet very effective prototyping tool that has become the new industry standard in the design community [15]. Figure 2 shows the design I created in Figma, for the home page. Due to lack of time, I continued with building the user interface after the first prototype using HTML, CSS, and Bootstrap  to create a minimum viable product so that I could move on to the next steps.

![figure 2](https://user-images.githubusercontent.com/60762302/138332923-6911fc48-7660-42c8-a157-254a9ce5ef1a.png)
Figure 2 - The final design of the home page using Figma

4. Build

After installing Aaron Petkau’s application on my local windows, I proceeded with building our user interface. This is the stage where I used HTML (The HyperText Markup Language), CSS (Cascading Style Sheets), and Bootstrap version 4.67 to build our minimum viable user interface and have it ready for tests and reviews from Aaron Petkau and Dr. Tremblay-Savard and our future usability test. I will elaborate more on each in the next sections.

5.	Test

Testing our prototype is a crucial step in improving our design functionality and usability. Usability testing is a common and well-known procedure in a UX design cycle. The main four steps include creating a plan, carrying out the test, analyzing the results, and writing a report for future improvements [16]. However, this step needs time as well as gathering participants. In my project, I chose to leave this for future work and it can definitely improve the usability of the design I present. 
With that being said, I chose to opt for ad-hock tests. If I had more time, I would definitely document each ad-hock test in detail and that is something we could tackle again in the future as well. I have briefly pointed out some of the improvements I have made to the design due to ad-hock tests:

- Top navigation in small devices
After creating the top navigation bar, I realized it does not transition from the collapsed version to its full-width version in smaller devices. I went over multiple examples of collapsed navigation bars and finally got the collapsed version to fully function.
- Responsiveness of the web pages
This means our web pages can be viewed on any device with any resolution and still function effectively.
- Visibility for labels on the y-axis in our graphs
Once I finished the development of our histogram for visualization, Aaron found out that the labels on the y-axis were not easy to read since I had reduced the font size to show the complete label length. We then decided to cut the labels from the right end and show the full labels of both the x-axis and y-axis in the tooltip window that shows up once the user hovers over the histogram.


6. Repeat
To ensure quality and to stay updated with current trends and most recent discoveries in the UX design industry, repeating these steps and refactoring our design is of great importance. It is vital to the improvement of our users’ experience with our application 

## Development
In this section, I will go over the technologies and programming/markup languages I used to develop our user interface. I will present them in chronological order of their usage.

- Atom IDE  and Git
I used the Atom IDE (Integrated Development Environment) to write my codes and used its Git and GitHub pre-installed packages to control the different versions of our application and update it on GitHub .
- Flask  and Jinja 
For my web development framework, I chose Flask which is packaged with Jinja. Jinja is a templating engine that enables us to use placeholders to be able to pass data between Python and HTML [17]. Considering the time constraint, I opted for a framework that would reduce my learning time while meeting our needs. This was a crucial step for making sure I could use the framework’s built-in functionalities to connect the back-end to the front-end and handle the HTTP requests.
- HTML
HTML (HyperText Markup Language) is the standard markup language that is used for constructing various web pages [18]. You can also learn more at https://www.w3schools.com/html/.
- CSS
CSS (Cascading Style Sheets) is used to style and present the web pages and elements written in a markup language like HTML [19]. You can also learn more at https://www.w3schools.com/css/. 
- Bootstrap version 4.6 
For responsiveness purposes, I chose Bootstrap version 4.6 as a framework for my CSS codes. You can find out more at https://getbootstrap.com/docs/4.6/getting-started/introduction/. 
- Python
Using the Flask framework and Jinja, I wrote the code to render our templates (web pages) written in HTML and CSS. Aaron Petkau also helped me in writing the function in Python that helped us handle HTTP requests, call the corresponding Python APIs from Aaron’s application, get the results and process them for sending them back to our HTML templates.
- JavaScript and D3.js
Once I had the results in form of a list of JSON (JavaScript Object Notation) objects sent to our templates, I used the D3.js library to write a function that visualizes the results.
For now, the only visualization we have considered is presenting the different mutations and their count in the samples that come back as a result of having a specific mutation (that the user has searched for). We have opted for a horizontal histogram for two reasons. First, the histogram is commonly used for showing an amount such as count for a specific feature among others [20]  . I also opted for the horizontal view to have more space to present the labels (mutation variants).
Between Charts.js and D3.js I chose D3.js since it would give me more creative freedom and is a very useful library to learn. Basically, D3.js enabled me to manipulate the document elements written in HTML according to the data I received from Python [21].
Filing System
In this section, I will go over my files and folders and explain briefly what each one presents.
- static: In the Flask framework, this folder includes every file that has a static state. Meaning all the CSS files, font files, images, and all the JavaScript files. 
  - css: Includes all the CSS files. 
    - base.css: The CSS file that is used for the base.html. base.css includes the definition of the fonts we used and styles the top navigation bar and the footer.
    - index.css: The CSS file for index.html. It includes the CSS code for the main container (including our search box), the search box, and information appearing on our home page.
    - result.css: The CSS file for result.html. It includes the CSS code for the main container (including the smaller search box) and the additional information. The CSS code for our SVG object (histogram) is generated in vis.js.
    - aboutus.css: The CSS file for aboutus.html. It includes the CSS code for the main container, including the card boxes for our team members.
    - contactus.css: The CSS file for contactus.html. It includes the CSS code for the main container, including the contact information.
- Fonts
  - Lato: The file downloaded from https://fonts.google.com/specimen/Lato#about.
  - WorkSans: The font file downloaded from https://fonts.google.com/specimen/Work+Sans#about. 
- img
  - Aaron Petka.jpg
  - Kimia Shadkami.jpg
  - logo.jpg: This logo was created using Canva  pre-made icons and templates.
- js
  - vis.js: This file includes the function that is called upon receiving data from Python in result.html. The corresponding function would then process the data that is in JSON format and uses the D3.js library to create an SVG object (the histogram) and its x-axis and y-axis labels.
- templates: This folder includes all the HTML files.
  - base.html: The base template includes the link to the Bootstrap’s CSS file, some metadata, the header of the website, the top navigation bar, the footer, and the link to the JavaScript file of Bootstrap. Using Jinja, I defined coding blocks for additional HTML codes in the main container so that I include base.html in other HTML files and avoid repeating the code.
  - index.html: This is the first page a user views when they first visit our UI. Includes the HTML code for the search box on our home page, sends the POST HTTP request to Python, and includes the HTML code for additional information on our home page.
  - result.html: It is shown once the user inputs their first query. It includes the HTML code for the smaller search box, the additional information below that, and the placement of the histogram (SVG object). It also includes the link to the the JavaScript file of D3.js. It can send another POST HTTP request to Python if the user inputs a new query and it receives the data from Python in JSON format and calls the corresponding JavaScript function.
  - aboutus.html: It includes the HTML code for the information relative to our team members.
  - contactus.html: It includes the HTML code for our contact information.
  - app.py: This file includes all our Python codes. The two most important parts are the query() and the returnJSONResult() functions. The first one receives the query from either index.html or result.html and renders the result.html page. The second one receives the same query from result.html, processes it, calls the corresponding Python APIs to carry out the query string, and sends the result back in JSON format. 
- .gitignore: This file contains the list of files that I do not intend to commit to my project. 

## Developing the Project
In this section, I will walk you through a set of steps to clone my project and be able to develop it further.

### Requirements:
The following steps will work on Linux, for other operating systems, I suggest installing WSL (Windows Subsysftem for Linux) from https://ubuntu.com/wsl and installing Ubuntu.
1. Clone my project using the command:
git clone https://github.com/kimiashadkami/UI-for-a-Microbial-Genomics-Database.git
2. Install the dependencies using the command:
conda env create --name gdi-ui --file environment.yaml
If you are not familiar with conda, please check out https://bioconda.github.io/user/install.html to learn about it and install it.
3. Activate the environment using the command: conda activate gdi-ui.
4. Download the data being used for this project using the command:
wget -O salmonella-project.zip https://ndownloader.figshare.com/files/29078733?private_link=0405199820a13aedca42
5. Unzip the data using the command: unzip -n salmonella-project.zip
6. Run the project using the command: python app.py

If the above steps do not work, please do the following:
1. Follow the instructions on https://github.com/apetkau/genomics-data-index#3-installation.
2. Install the extra dependencies needed for our UI development using the command:
pip install flask flask_sqlalchmey
3. Follow steps 3-6 above.

## Demo
Please check out here for a short and effective demo of the UI.

## Conclusion and Future Work
Microbial whole-genome sequencing is now frequently used to study and track infectious diseases around the world. One common analysis method is to compare collections of genomes at differing levels of resolution. This can be used to figure out how diseases are transmitted across a population or track more severe forms of the disease based on differences in the underlying genetic code [3]. In this project, we present a web-based user interface to Aaron Petkau’s current framework for pre-processing microbial genomes at different levels of resolution and storing these processed genomes within a database for later comparisons. Our user interface focuses on the functionality of searching for closely related microbial genomes or genomes containing specific genomic features (mutations or genes). We developed the user interface utilizing the user experience design cycle, various programming and markup languages, and web development frameworks.

For future work, we suggest the following directions:
- Implementing usability tests and documenting them.
- Giving our users the option to choose ascending or descending order for the mutation variants’ counts in the histogram.
- Presenting phylogenetic tree visualization.
- Improving our search box so that users can input their query from a set of options (e.g. drop-down menu selections) and combine as many queries as they wish.
- Improving the security of our web application. 

## Bibliography

[1] E. Griffiths, R. Timme, A. Page, N. Alikhan, D. Fornika, F. Maguire, C. Mendes, S. Tausch, A. Black, T. Connor, G. Tyson, D. Aanensen, B. Alcock, J. Campos, A. Christoffels, A. Gonçalves da Silva, E. Hodcroft and W. Hsiao, "The PHA4GE SARS-CoV-2 Contextual Data Specification for Open Genomic Epidemiology," Preprints, 2020. 

[2] B. Tolar, L. A. Joseph, M. N. Schroeder, S. Stroika, E. M. Ribot, K. B. Hise and P. and Gerner-Smidt, "An Overview of PulseNet USA Databases," Foodborne Pathogens and Disease, vol. 16, no. 07, pp. 457-462, 2019. 

[3] 	J. G. M. B. J. A. H. K. J. C. D. S. H. T. &. B. M. Laura Uelze, "Typing methods based on whole genome sequencing data," One Health Outlook volume 2, vol. 3, 2020. 

[4] 	R. Allabarton, "What Is the UX Design Process? A Complete, Actionable Guide," CareerFoundry, 13 August 2021. [Online]. Available: https://careerfoundry.com/en/blog/ux-design/the-ux-design-process-an-actionable-guide-to-your-first-job-in-ux/. [Accessed 23 August 2021].

[5] 	T. H. Tran, "The UX design process in 6 stages," InVisionApp Inc., 30 September 2019. [Online]. Available: https://www.invisionapp.com/inside-design/6-stages-ux-process/. [Accessed 23 August 2021].

[6] 	S. Minhas, "User Experience Design Process," UX Planet, 23 April 2018. [Online]. Available: https://uxplanet.org/user-experience-design-process-d91df1a45916. [Accessed 23 August 2021].

[7] 	E. Reis, The Learn Startup, Crown Business (USA), 2011. 

[8] 	S. Duvaud, C. Gabella, F. Lisacek, H. Stockinger, V. Ioannidis and C. Durinx, "Expasy, the Swiss Bioinformatics Resource Portal, as designed by its users," Nucleic Acids Research, vol. 49, no. W1, p. W216–W227, 2021. 

[9] 	M. Goldman and N. Gehlenborg, "User-Centered Design in Computational Biology Research," in Pacific Symposium on Biocomputing, 2021. 

[10] 	N. W. Paton, "Managing and sharing experimental data: standards, tools and pitfalls," Biochemical Society Transactions, vol. 36, pp. 33-6, 2008. 

[11] 	A. Arhipova, "Color in Design: Influence on Users' Actions," Tubik Studio, 20 February 2017. [Online]. Available: https://blog.tubikstudio.com/color-in-design-influence-on-users-actions/. [Accessed 24 August 2021].

[12] 	J. Mortan, "Why Colors Matters," Colorcom, [Online]. Available: https://www.colorcom.com/research/why-color-matters. [Accessed 24 August 2021].

[13] 	M. Design, "The color system," Google, [Online]. Available: https://material.io/design/color/the-color-system.html#color-usage-and-palettes. [Accessed 24 August 2021].

[14] 	M. Design, "Buttons," Google, [Online]. Available: https://material.io/components/buttons. [Accessed 24 August 2021].

[15] 	D. Rimer, "Figma: Setting the New Standard for Collaborative Design Software," Index Ventures, 14 Feb 2019. [Online]. Available: https://www.indexventures.com/perspectives/figma-setting-the-new-standard-for-collaborative-design-tools/. [Accessed 23 August 2021].

[16] 	L. Foggia, "Usability testing: what is it and how to do it?," UX Collective, 14 November 2018. [Online]. Available: https://uxdesign.cc/usability-testing-what-is-it-how-to-do-it-51356e5de5d. [Accessed 25 August 2021].

[17] 	"Jinja," Jinja, [Online]. Available: https://jinja.palletsprojects.com/en/3.0.x/. [Accessed 25 August 2021].

[18] 	W3Schools, "HTML Tutorial," W3Schools, [Online]. Available: https://www.w3schools.com/html/. [Accessed 25 August 2021].

[19] 	W3Schools, "CSS Tutorial," W3Schools, [Online]. Available: https://www.w3schools.com/css/. [Accessed 25 August 2021].

[20] 	C. O. Wilke, Fundamentals of Data Visualization, 2019. 

[21] 	"D3.js," [Online]. Available: https://d3js.org/. [Accessed 25 August 2021].


## Tutorials and Helpful Links
### Inspiration 

#### Data visualization: 
https://covidcg.org/?tab=group 
https://virusseq-dataportal.ca/explorer 
https://nextstrain.org/ 
https://colorbrewer2.org/#type=sequential&scheme=Greens&n=3 

### Digital resources 
Aaron Petkau’s presentation:
https://docs.google.com/presentation/d/1jK-EY8OhF3DX22CCbhz70pez-__WSwnNoQn7XHyqrB8/edit#slide=id.p

### Development
Flask and Python:

Ubuntu:
https://ubuntu.com/tutorials/ubuntu-on-windows#1-overview  

Jinja:
https://jinja.palletsprojects.com/en/latest/ 

Flask:
https://flask.palletsprojects.com/en/1.1.x/ 

Learn Flask for Python - Full Tutorial:
https://www.youtube.com/watch?v=Z1RJmh_OqeA&t=1165s 

Web Programming with Flask - Intro to Computer Science - Harvard's CS50 (2018)
https://www.youtube.com/watch?v=zdgYw-3tzfI 

Talking to Python from JavaScript (and Back Again!):
https://healeycodes.com/javascript/python/beginners/webdev/2019/04/11/talking-between-languages.html 

Talking to Python from Javascript: Flask and the fetch API:
https://towardsdatascience.com/talking-to-python-from-javascript-flask-and-the-fetch-api-e0ef3573c451 

Fetch API:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API 

Python Website: 
https://www.python.org/ 

Combining HTML with Python:
https://www.youtube.com/watch?v=YziPKikI_gM 

Run External Python script from HTML | Combining HTML with Python:
https://www.youtube.com/watch?v=8LEWb-eF8TE  

Python to JavaScript/HTML and JavaScript to Python using Eel (vice versa) Tutorial 1
https://www.youtube.com/watch?v=ySNJac9XlWI 

### UI:

A quest for the ideal Navbar Height:
https://blog.prototypr.io/a-quest-for-the-ideal-navbar-height-4d3898a41f2 

Color Tool:
https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=6002ee 

Google Fonts:
https://fonts.google.com/ 

Bootstrap:
https://getbootstrap.com/docs/4.6/getting-started/introduction/ 

### JavaScript:

Callbacks in JavaScript Explained!
https://www.youtube.com/watch?v=cNjIUSDnb9k&t=4s 

Data visualization:

Matplotlib (demonstrates how to plot histograms with matplotlib): 
https://matplotlib.org/stable/gallery/statistics/hist.html#sphx-glr-gallery-statistics-hist-py 

A Python framework for the analysis and visualization of trees:
http://etetoolkit.org/ 

The Programmable Tree Drawing Engine:
http://etetoolkit.org/docs/latest/tutorial/tutorial_drawing.html 

D3.js:
https://d3js.org/ 

How to Choose Between a Bar Chart and Pie Chart:
https://chartio.com/learn/charts/how-to-choose-pie-chart-vs-bar-chart/ 

D3.js - A Practical Introduction:
https://www.youtube.com/watch?v=TOJ9yjvlapY 

d3/d3-scale:
https://github.com/d3/d3-scale 

Combining python and d3.js to create dynamic visualization applications:
https://towardsdatascience.com/combining-python-and-d3-js-to-create-dynamic-visualization-applications-73c87a494396 

Starting with Data: Using Python and D3 to Visualize JSON from the Donors Choose REST API:
https://www.youtube.com/watch?v=bzl4hCH2CdY 

D3 Fetch Data from Python Function:
https://stackoverflow.com/questions/30406901/d3-fetch-data-from-python-function 

### Stackoverflow:

“'python3' is not recognized as an internal or external command, operable program or batch file”:
https://stackoverflow.com/questions/39910730/python3-is-not-recognized-as-an-internal-or-external-command-operable-program/41492852 

“How to connect Javascript to Python sharing data with JSON format in both ways?”:
https://stackoverflow.com/questions/11747527/how-to-connect-javascript-to-python-sharing-data-with-json-format-in-both-ways

“How can I get form data with JavaScript/jQuery?”:
https://stackoverflow.com/questions/2276463/how-can-i-get-form-data-with-javascript-jquery 

“Call Python function from JavaScript code”:
https://stackoverflow.com/questions/13175510/call-python-function-from-javascript-code 

“Send data from Python to Javascript (JSON)”:
https://stackoverflow.com/questions/11959895/send-data-from-python-to-javascript-json/11959958 
