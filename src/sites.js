import image1 from "../images/deltadentalins.jpg";
import image2 from "../images/appHazard.jpg";
import image3 from "../images/business_tivo.jpg";
import image4 from "../images/forward_faster.jpg";
import image5 from "../images/fps.jpg";
import image6 from "../images/ajn.jpg";
import image7 from "../images/jobbybit.jpg";
import image8 from "../images/github.jpg";
import quote from "../images/quote.png";
import logo from "../images/logo2.jpg";
import line from "../images/line2.jpg";
import location from "../images/location.png";
import avatar from "../images/avatar.jpg";

const SITES = [
  {
    id: 0,
    path: '/deltadentalins',
    title: 'Delta Dental Insurance',
    image: image1,
    link: 'https://www.deltadentalins.com/',
    description: `My team was responsible for the redesign of the Delta Dental Insurance enrollment site. As the sole
    front-end developer at the beginning of the project, I created new HTML components based on Atomic Design. These
    components could be used as building blocks, one on top of the other, to create new components. Also, each
    individual component can be re-skinned so that they can be set with different colors and sizes to be
    used with different brands (such as AARP, Costco, etc). I also worked extensively with the front-end
    JavaScript code that is used for the interactivity of the site.<br /><br /> NOTE: To access the enrollment site,
    click on the purple "Get a Quote" button located on the left-hand side of the site.<br />`
  },
  {
    id: 1,
    path: '/business_tivo',
    title: 'TiVo Business Site',
    image: image3,
    link:'https://business.tivo.com',
    description: `This is a site that I worked on with the web team over at TiVo. It is a site that describes different
    products content providers can use to better tailor and customize selections of shows and movies for different customers
    based on preference and individual tastes.<br /><br />Our team made heavy use of HTML5, CSS3, and JavaScript as well as
    preprocessors such as LESS. Front-end developers such as myself and my team lead modified and created the new HTML5, CSS3,
    JavaScript content according to marketing specs and back-end developers implemented our static code in Adobe Experience
    Manager.<br /><br />I had worked on the navigation menu, especially the anchor menu, and set scroll
    values to stop at appropriate places on the page. I also worked on adding a cookie consent plugin to foreign sites that
    implement the new EU cookie law which requires businesses to give users the opportunity to turn cookies on and off. The plugin
    I added was the Cookie Consent Plugin which I tailored to our web code at TiVo. I used the official CSS styles and
    standard HTML code at TiVo to create a cookie consent popup that has the same look and feel as the main TiVo website.
    The plugin can be viewed on foreign sites such as the French site <a href="https://business.tivo.com/fr/">here</a>. Make sure to
    clear your cookies first in order to see the cookie consent plugin.`
  },
  {
    id: 2,
    path: '/forward_faster',
    title: 'TiVo Forward Faster',
    image: image4,
    link: 'https://forward.tivo.com/',
    description:`The Forward Faster site is a bit different from the other TiVo sites in the sense that the site flows
    from left to right instead of up and down. It is a site that my team lead and I inherited from a third party
    contractor TiVo used to initially build the site. We were given the task of modularizing the code so that each
    component of the site could be easily implemented in Adobe Experience Manager by other web content developers.<br /><br />My
    team lead and I wrote JavaScript classes to remove redundant functions that were being used over and over again in
    various places. For example, my team lead created a common timeline class that keeps track of where the user is in
    the website based on scroll bar location. In certain parts of the site, the site pauses scrolling left to right
    and displays images that scroll from top to bottom. I wrote a class to control the scrolling of these pillar
    images based on number of images and when a new image should appear based on where the user scroll bar is located.
    HTML and CSS code was also modularized to avoid repetitive use of styles.`
  },
  {
    id: 5,
    path: '/augmentedjs',
    title: 'Augmented.js',
    image: image6,
    link: 'http://www.augmentedjs.com/',
    description: `This is a JavaScript framework I am helping to build. It is on its second iteration. Unlike the first iteration, it
    supports ES6 and better and focuses heavily on component design and ES6 modules. I have helped to build a few of the components as
    well as used the framework in some of my projects.`
  },
  {
    id: 4,
    path: '/appHazard',
    title: 'appHazard',
    image: image2,
    link: 'https://github.com/Augmentedjs/appHazard',
    description: `My team and I created this application for AngelHack Silicon Valley. It takes the values of properties for a given
    address in the US and creates a risk factor based on disaster data for the area over a period of thirty years. Disaster data was gathered
    from FEMA's APIs and property data was gathered from <a href="https://www.attomdata.com/solutions/property-data-api/">ATTOM Data Solutions APIs</a>.<br /><br />
    I worked on the back-end side of things for this project focusing time on building out RESTful APIs and microservices in Node.js and Express.js. Front-End
    was built in Augmented.js with help from me as well as creating a responsive design for this project.<br /><br />NOTE: The link to the original application is not available since the
    ATTOM API key used expired shortly after the hackathon ended. Instead, code for the application is available on Github and is linked above.`
  },
  {
    id: 5,
    path: '/jobbybit',
    title: 'JobbyBit',
    image: image7,
    link: 'https://itunes.apple.com/us/app/jobbybit/id1438027012?mt=8',
    description: `JobbyBit is an iOS application I helped to build utilizing the Augmented.js JavaScript framework I contribute to.
    It is an application that calculates a user\'s job satisfaction via bitcode. I worked mostly on the front-end of the components as
    well as the logo and mascot graphic.`
  },
  {
    id: 6,
    path: '/fps',
    title: 'First Person Shooters',
    image: image5,
    link: 'http://fpshooters.draconicscales.com/',
    description:`This was a website I did for National Podcasting System. This was for their First Person Shooters
    podcasts which featured two guys, Will and Sandy, who gave their humorous reviews on first person shooter
    video games. This site was originally done using mostly Flash, but I found that it slowed down the load time
    for the site. The old site has long since been taken down. I took the files from the old site and re-created
    it using WordPress and designed the header graphic in Photoshop.<br /><br />The images were created using photos
    and images manipulated in Photoshop. I originally used a video lightbox library called Videobox and some light
    JavaScript to create a lightbox for each active video. Since Videobox is no longer supported, I again recreated
    the whole site in WordPress and used a WordPress video plugin to display the YouTube videos on the site. Feel free
    to explore the site and blog. There is not much activity that happens in the blog, but I moderate what is written there.`
  },
  {
    id: 7,
    path: '/github',
    title: 'Karen\'s GitHub Page',
    image: image8,
    link: 'https://github.com/karencalpo',
    description: `This is my personal GitHub page. It contains the code for projects I have worked on in the past as
    well as the present. It also contains code solutions for algorithm problems I solved (all written in JavaScript).<br /><br />I am
    also a member of a collection of ongoing projects started by some very enterprising organizations and individuals.`
  }
];

const BANNER = `My love for things computer-related combined with my love for things artistic led
me to where I am now. Here is a collection of web projects I have done over time. While not an
exhaustive collection of everything I have done, it gives an idea of what I am capable of
and what I have done in the past. Currently, I am working as a developer doing projects for
businesses, friends, and family in different industries and areas such as healthcare, multimedia,
government, and consumer electronics.`

const BANNER_IMG = {
  logo: logo,
  quote: quote,
  line: line,
  location: location,
  avatar: avatar
};

export { SITES, BANNER, BANNER_IMG };
