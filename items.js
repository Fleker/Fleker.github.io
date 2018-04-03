/* My data 
 * 
 * This will be a JSON object so I can easily populate different fields.
 * Eventually this will move to a separate file.
 * It may be useful to develop certain types of schema.
 */

/* Some Constants */
const LEARN_MORE = "Learn More";
const READ_FULL_TEXT = "Read Full Text";
const VIEW_DEVPOST = "View DevPost Submission";
const READ_ARTICLE = "Read Article";
const WATCH_VIDEO = "Watch the Video";

me = [
    {
        type: "Books",
        name: "The Forgotten Hero",
        series: "The Legion of Supervillans",
        seriesNo: "2",
        bookCover: "",
        link: "https://www.amazon.com/Forgotten-Hero-Memorial-Mordred-Supervillains-ebook/dp/B07BPW5YS1/ref=sr_1_2?ie=UTF8&qid=1522729623&sr=8-2&keywords=nick+felker",
        linkText: "Purchase eBook for $3",
        date: "March 2018"
    },
    {
        type: "Books",
        name: "The Lost Hunter",
        series: "The Legion of Supervillans",
        seriesNo: "1",
        bookCover: "",
        link: "https://www.amazon.com/Lost-Hunter-Journal-Legion-Supervillains-ebook/dp/B06XMX9LNW/ref=sr_1_1?ie=UTF8&qid=1489109101&sr=8-1&keywords=nick+felker",
        linkText: "Purchase eBook for $3",
        date: "February 2017"
    }, {
        type: "Articles",
        name: "Adding TV Channels to Your App With the TIF Companion Library",
        link: "https://android-developers.googleblog.com/2016/11/adding-tv-channels-to-your-app-with-the-tif-companion-library.html",
        linkText: "Read at Android Developers Blog",
        date: "November 2016"
    }, {
        type: "Articles",
        name: "Started writing for Android TV News",
        link: "http://androidtv.news",
        linkText: "Read at Android TV News",
        date: "September 2015"
    }, {
        type: "Hacks",
        name: "Personal Sound Beam",
        purpose: "Dragon Hacks 2017",
        acolades: "Third Place",
        link: "https://devpost.com/software/personal-sound-beam",
        linkText: VIEW_DEVPOST,
        date: "April 2017"
    }, {
        type: "Hacks",
        name: "Smart Tattoos",
        purpose: "PennApps XV",
        acolades: "Grand Prize, Best Hardware Hack, Best Use of Rapid Prototyping",
        link: "https://devpost.com/software/smart-tattoos",
        linkText: VIEW_DEVPOST,
        date: "January 2017"
    }, {
        type: "Hacks",
        name: "RedSi",
        purpose: "PennApps XIV",
        acolades: "Best Education Hack",
        link: "https://devpost.com/software/redsi",
        linkText: VIEW_DEVPOST,
        date: "September 2016"
    }, {
        type: "Hacks",
        name: "Cogni Journal",
        purpose: "PennApps XIII",
        link: "https://devpost.com/software/cogni-journal",
        linkText: VIEW_DEVPOST,
        date: "January 2016"
    }, {
        type: "Hacks",
        name: "Pyed Piper",
        purpose: "DragonHacks 2016",
        acolades: "Best Design, Best Domain Name",
        link: "https://devpost.com/software/pyed-piper",
        linkText: VIEW_DEVPOST,
        date: "January 2016"
    }, {
        type: "Hacks",
        name: "PetApps",
        purpose: "PennApps XII",
        link: "https://devpost.com/software/petapps",
        linkText: VIEW_DEVPOST,
        date: "September 2015"
    }, {
        type: "Hacks",
        name: "Munch",
        purpose: "IEEEMADC 2015",
        acolades: "Best Mobile App Design",
        link: "https://devpost.com/software/munch-nod0rf",
        linkText: VIEW_DEVPOST,
        date: "May 2015"
    }, {
        type: "Hacks",
        name: "nVader",
        purpose: "Philly Codefest 2015",
        link: "https://devpost.com/software/nvader-qaopxi",
        linkText: VIEW_DEVPOST,
        date: "March 2015"
    }, {
        type: "Hacks",
        name: "The Light Painter's Palette",
        purpose: "Dragon Hacks 2015",
        link: "https://devpost.com/software/the-light-painter-s-palette-q5zrh",
        acolades: "2nd Place",
        linkText: VIEW_DEVPOST,
        date: "January 2015"
    }, {
        type: "Education",
        name: "Graduated Rowan University, BS Electrical & Computer Engineering, Minor Computer Science, Honors Concentration",
        gpa: "3.5",
        date: "May 2017"
    }, {
        type: "Education",
        name: "Graduated Glassboro High School",
        gpa: "4.0",
        date: "June 2013"
    }, {
        type: "Employment",
        name: "Google",
        position: "Developer Programs Engineer - IoT & Assistant",
        ended: "Present",
        date: "June 19 2017"
    },{
        type: "Employment",
        name: "Google",
        position: "Developer Relations Intern, Android TV & IoT",
        ended: "August 2016",
        date: "May 20 2016"
    }, {
        type: "Employment",
        name: "Rowan University",
        position: "Web Development for College of Science and Math & College of Engineering",
        ended: "May 2017",
        date: "August 2015"
    }, {
        type: "Employment",
        name: "The Chef's Kitchen",
        position: "Web Developer",
        ended: "September 2015",
        date: "June 2015"
    }, {
        type: "Awards",
        name: "Rowan Idea Pitch Competition - Smart Tattoos",
        award: "2nd Place",
        date: "March 31 2017"
    }, {
        type: "Awards",
        name: "IEEE Sumo Robotics Kit Competition",
        award: "2nd Place",
        date: "September 2014"
    }, {
        type: "Awards",
        name: "Troop 123",
        award: "Eagle Scout",
        date: "June 2013"
    }, {
        type: "Events",
        name: "International Women's Day",
        location: "Sunnyvale, California",
        date: "March 3 2018",
        specificDate: "March 3",
        contribution: "Led workshop at"
    }, {
        type: "Events",
        name: "DroidKaigi",
        location: "Tokyo, Japan",
        date: "February 9 2018",
        specificDate: "February 8-9",
        contribution: "Hosted workshop at"
    }, {
        type: "Events",
        name: "U of T Hacks",
        location: "Toronto, Canada",
        date: "January 19 2018",
        specificDate: "January 19-21",
        contribution: "Judged At"
    }, {
        type: "Events",
        name: "Felker Week",
        location: "Rowan University",
        date: "November 17 2017",
        specificDate: 'November 17-23',
        contribution: "Hosted"
    }, {
        type: "Events",
        name: "Intuit Quickbooks Small Business Hackathon",
        location: "Intuit HQ Mountain View",
        link: "https://www.smallbizhack.com/",
        linkText: LEARN_MORE,
        date: "November 11 2017",
        specificDate: 'November 11-12',
        contribution: "Judged at"
    }, {
        type: "Events",
        name: "Dashbot Hackathon",
        location: "San Francisco",
        link: "https://www.meetup.com/Dashbot-Bot-Meetup-San-Francisco-New-Technology/events/243582992/",
        linkText: LEARN_MORE,
        date: "November 4 2017",
        specificDate: 'November 4',
        contribution: "Judged at"
    }, {
        type: "Events",
        name: "PennApps XVI",
        location: "Philadelphia",
        link: "http://2017f.pennapps.com/",
        linkText: LEARN_MORE,
        date: "September 8 2017",
        specificDate: "September 8-10",
        contribution: "Judged at"
    }, {
        type: "Events",
        name: "GDE Europe 2017",
        location: "Krakow, Poland",
        date: "September 5 2017",
        specificDate: 'September 5-6',
        contribution: "Helped at"
    }, {
        type: "Events",
        name: "Student Activities Conference, 2017",
        location: "Rowan University",
        specificDate: "April 7-9",
        date: "April 2017"
    }, {
        type: "Events",
        name: "Student Activities Conference, 2014",
        location: "Rowan University",
        specificDate: "April 4-6",
        date: "April 2014"
    }, {
        type: "Events",
        name: "ProfHacks 2K16",
        location: "Rowan University",
        specificDate: "March 12-13",
        date: "March 2016"
    }, {
        type: "News",
        name: "What makes Glassboro High School a great start for future greatness",
        publication: "Boro Briefs",
        link: "https://www.yumpu.com/en/document/view/59470697/boro-briefs-fall-2017/share/x/0/y/0/w/495/h/640/page/4",
        linkText: READ_ARTICLE,
        date: "October 23 2017"
    }, /*{
        type: "News",
        name: "Here's How Twitter Users Reacted To Android Oreo Launch",
        publication: "TechTree",
        link: "http://www.techtree.com/content/features/13174/s-how-twitter-users-reacted-android-oreo-launch.html",
        linkText: READ_ARTICLE,
        date: "August 22 2017"
    }, */{
        type: "News",
        name: "Bowe School students explore hands-on engineering",
        publication: "NJ.com",
        link: "http://www.nj.com/south-jersey-towns/index.ssf/2017/03/bowe_school_students_explore_h.html",
        linkText: READ_ARTICLE,
        date: "March 2017"
    }, {
        type: "News",
        name: "LIVE BLOG: PROFHacks 2017 pits students against each other in &#39;hackathon&#39;",
        publication: "The Whit",
        link: "http://thewhitonline.com/2017/02/news/live-blog-profhacks-2017-pits-students-against-each-other-in-hackathon/",
        linkText: READ_ARTICLE,
        date: "February 2017"
    }, {
        type: "News",
        name: "Rowan University&#39;s first hackathon is focused on the physical web",
        publication: "Technically Philly",
        link: "http://technical.ly/philly/2016/03/10/rowan-university-hackathon/",
        linkText: READ_ARTICLE,
        date: "March 2016"
    }, {
        type: "News",
        name: "Students create technological tools at Rowan hackathon",
        publication: "Courier Post",
        link: "http://www.courierpostonline.com/story/news/2016/03/13/rowan-engages-in-first-ever-hackathon/81581144/",
        linkText: READ_ARTICLE,
        date: "March 2016"
    }, {
        type: "News",
        name: "Student computer whizzes compete at PennApps Hackathon",
        publication: "The Philadelphia Inquirer",
        link: "http://www.philly.com/philly/news/20150906_Student_computer_whizzes_compete_at_PennApps_Hackathon.html",
        linkText: READ_ARTICLE,
        date: "September 2015"
    }, {
        type: "News",
        name: "Glassboro High School to present &#39;Beauty and the Beast&#39;",
        publication: "NJ.com",
        link: "http://www.nj.com/gloucester-county/index.ssf/2012/02/glassboro_high_school_to_prese_1.html",
        linkText: READ_ARTICLE,
        date: "February 2012"
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "December 12 2017",
        name: "Fitness Program for User-Defined Goals",
        link: "http://www.tdcommons.org/dpubs_series/944/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "December 12 2017",
        name: "Providing Reader Assistance Based on Reader Interaction",
        link: "http://www.tdcommons.org/dpubs_series/942/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "December 12 2017",
        name: "Correcting Image Anomalies Using Machine Learning",
        link: "http://www.tdcommons.org/dpubs_series/945/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "December 8 2017",
        name: "System Volume Compensating for Environmental Noise",
        link: "http://www.tdcommons.org/dpubs_series/903/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "December 8 2017",
        name: "Using Music to Affect Mood Based on Sentiment Analysis",
        link: "http://www.tdcommons.org/dpubs_series/902/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "December 8 2017",
        name: "Planning Group Meals Based on Preferences of Attendees",
        link: "http://www.tdcommons.org/dpubs_series/901/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "December 8 2017",
        name: "Font Optimization Based on User Reading Habits",
        link: "http://www.tdcommons.org/dpubs_series/900/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "December 8 2017",
        name: "Providing Relevant Advertisements Based on Item-Specific Purchase History",
        link: "http://www.tdcommons.org/dpubs_series/897/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "December 8 2017",
        name: "Configuring Alarm System Based on Time to Arrive at Appointment",
        link: "http://www.tdcommons.org/dpubs_series/890/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Patents",
        subtype: "Defensive Publication",
        date: "November 19 2017",
        name: "Automatic polls in group chat conversations",
        link: "http://www.tdcommons.org/dpubs_series/822/",
        linkText: READ_FULL_TEXT
    }, {
        type: "Projects",
        name: "MemSat",
        description: "Acted as project manager for Command & Data Handling subsystem",
        link: "http://memsat.space",
        linkText: LEARN_MORE,
        date: "September 2016"
    }, {
        type: "Projects",
        name: "Laser Harp",
        description: "Designed a MIDI instrument that communicates over BLE",
        date: "May 1 2016"
    }, {
        type: "Projects",
        name: "Inverted Pendulum",
        description: "Developed an inverted pendulum through an embedded PID controller",
        link: "https://www.researchgate.net/publication/311493383_Implementation_of_an_Inverted_Pendulum_PID_Control_System_Using_a_Stepper_Motor?_iepl%5BviewId%5D=tdZGktk04GBOqR714ovQah2n&_iepl%5BprofilePublicationItemVariant%5D=default&_iepl%5Bcontexts%5D%5B0%5D=prfpi&_iepl%5BinteractionType%5D=publicationTitle",
        linkText: READ_FULL_TEXT,
        date: "May 1 2016"
    }, {
        type: "Projects",
        name: "CultureCloud",
        description: "Issued software updates to start-up Android app",
        link: "http://culturecloudapp.com/",
        linkText: "Visit App",
        date: "January 2016"
    }, {
        type: "Projects",
        name: "Automatic Pothole Detection",
        description: "Develops software to allow for DoT detection of potholes",
        date: "September 2015"
    }, {
        type: "Projects",
        name: "Google Glass Medical Application",
        description: "Worked on a Glass app for use in the medical industry",
        date: "January 2014"
    }, {
        type: "Publications",
        name: "Using Wearable Sensors to Collect User Data at an Event as a Live API and for Logistical Planning",
        publishedAt: "Sensor Applications Symposium 2017, Rowan University",
        link: "https://www.researchgate.net/publication/312670816_Using_Wearable_Sensors_to_Collect_User_Data_at_an_Event_as_a_Live_API_and_for_Logistical_Planning",
        linkText: READ_FULL_TEXT,
        date: "March 15 2017"
    }, {
        type: "Publications",
        name: "Building MemSat: A CubeSat for Testing Resistive Memory",
        publishedAt: "Sensor Applications Symposium 2017, Rowan University",
        linkText: READ_FULL_TEXT,
        link: "https://www.researchgate.net/publication/315063307_Building_MemSat_A_CubeSat_for_Testing_Resistive_Memory",
        date: "March 15 2017",
    }, {
        type: "Videos",
        name: "Integrating Smart Home Devices with the Google Assistant",
        date: "February 7 2018",
        link: "https://youtu.be/XdZXpFBvTP8",
        linkText: WATCH_VIDEO 
    }, {
        type: "Videos",
        name: "Integrating Live Data into Hackathons - MLH Hackcon V",
        date: "August 6 2017",
        link: "https://www.youtube.com/watch?v=vFyOAY8bNk4",
        linkText: WATCH_VIDEO
    }
];
