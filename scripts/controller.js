// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"items/articles.json":[function(require,module,exports) {
module.exports = [{
  "type": "Articles",
  "name": "Using Cloud Storage for Firebase for hosting rich media in your Actions",
  "link": "https://medium.com/google-developers/using-cloud-storage-for-firebase-for-hosting-rich-media-in-your-actions-a838977eb758",
  "linkText": "Read on Medium",
  "date": "February 5 2019"
}, {
  "type": "Articles",
  "name": "Extending your smart home Actions with toggles and modes",
  "link": "https://medium.com/google-developers/extending-your-smart-home-actions-with-toggles-and-modes-4d096729f257",
  "linkText": "Read on Medium",
  "date": "November 27 2018"
}, {
  "type": "Articles",
  "name": "Implementing Report State for your smart home service",
  "link": "https://medium.com/google-developers/implementing-report-state-for-your-smart-home-service-d377ce9c1126",
  "linkText": "Read on Medium",
  "date": "October 2 2018"
}, {
  "type": "Articles",
  "name": "Creating immersive soundscapes with SSML and Actions on Google",
  "link": "https://medium.com/google-developers/creating-immersive-soundscapes-with-ssml-and-actions-on-google-8724376ee6a6",
  "linkText": "Read on Medium",
  "date": "August 14 2018"
}, {
  "type": "Articles",
  "name": "Smart Signs & Android Things: A case study",
  "link": "https://medium.com/@fleker/smart-signs-android-things-a-case-study-ba2bcfbc4d1b",
  "linkText": "Read on Medium",
  "date": "August 9 2018"
}, {
  "type": "Articles",
  "name": "Build a smart home service for the Actions on Google Client Library v2",
  "link": "https://medium.com/google-developers/build-a-smart-home-service-for-the-actions-on-google-client-library-v2-464517b90ad5",
  "linkText": "Read on Medium",
  "date": "June 21 2018"
}, {
  "type": "Articles",
  "name": "How to connect Stackdriver to your smart home server for error logging",
  "link": "https://medium.com/google-developers/how-to-connect-stackdriver-to-your-smart-home-server-for-error-logging-8a7a477241c2",
  "linkText": "Read on Medium",
  "date": "June 13 2018"
}, {
  "type": "Articles",
  "name": "Adding TV Channels to Your App With the TIF Companion Library",
  "link": "https://android-developers.googleblog.com/2016/11/adding-tv-channels-to-your-app-with-the-tif-companion-library.html",
  "linkText": "Read at Android Developers Blog",
  "date": "November 2016"
}, {
  "type": "Articles",
  "name": "Started writing for Android TV News",
  "link": "http://androidtv.news",
  "linkText": "Read at Android TV News",
  "date": "September 2015"
}];
},{}],"items/awards.json":[function(require,module,exports) {
module.exports = [{
  "type": "Awards",
  "name": "Troop 123",
  "award": "Eagle Scout",
  "date": "June 2013"
}, {
  "type": "Awards",
  "name": "IEEE Sumo Robotics Kit Competition",
  "award": "2nd Place",
  "date": "September 2014"
}, {
  "type": "Awards",
  "name": "Rowan Idea Pitch Competition - Smart Tattoos",
  "award": "2nd Place",
  "date": "March 31 2017"
}];
},{}],"items/books.json":[function(require,module,exports) {
module.exports = [{
  "type": "Books",
  "name": "The Lost Hunter",
  "series": "The Legion of Supervillains",
  "seriesNo": "1",
  "bookCover": "",
  "link": "https://www.amazon.com/Lost-Hunter-Journal-Legion-Supervillains-ebook/dp/B06XMX9LNW/ref=sr_1_1?ie=UTF8&qid=1489109101&sr=8-1&keywords=nick+felker",
  "linkText": "Purchase eBook",
  "date": "February 2017"
}, {
  "type": "Books",
  "name": "The Forgotten Hero",
  "series": "The Legion of Supervillains",
  "seriesNo": "2",
  "bookCover": "",
  "link": "https://www.amazon.com/Forgotten-Hero-Memorial-Mordred-Supervillains-ebook/dp/B07BPW5YS1/ref=sr_1_2?ie=UTF8&qid=1522729623&sr=8-2&keywords=nick+felker",
  "linkText": "Purchase eBook",
  "date": "March 2018"
}, {
  "type": "Books",
  "name": "The Isolated Vizier",
  "series": "The Legion of Supervillains",
  "seriesNo": "3",
  "bookCover": "",
  "link": "https://www.amazon.com/dp/B07MSFMRLW",
  "linkText": "Purchase eBook",
  "date": "January 2019"
}];
},{}],"items/education.json":[function(require,module,exports) {
module.exports = [{
  "type": "Education",
  "name": "Graduated Rowan University, BS Electrical & Computer Engineering, Minor Computer Science, Honors Concentration",
  "gpa": "3.5",
  "date": "May 2017"
}, {
  "type": "Education",
  "name": "Graduated Glassboro High School",
  "gpa": "4.0",
  "date": "June 2013"
}];
},{}],"items/employment.json":[function(require,module,exports) {
module.exports = [{
  "type": "Employment",
  "name": "Google",
  "position": "Developer Programs Engineer - IoT & Assistant",
  "ended": "Present",
  "date": "June 19 2017"
}, {
  "type": "Employment",
  "name": "Google",
  "position": "Developer Relations Intern - Android TV & IoT",
  "ended": "August 2016",
  "date": "May 20 2016"
}, {
  "type": "Employment",
  "name": "Rowan University",
  "position": "Web Developer - College of Science and Math & College of Engineering",
  "ended": "May 2017",
  "date": "August 2015"
}, {
  "type": "Employment",
  "name": "The Chef's Kitchen",
  "position": "Web Developer",
  "ended": "September 2015",
  "date": "June 2015"
}];
},{}],"items/events.json":[function(require,module,exports) {
module.exports = [{
  "type": "Events",
  "name": "Women Tech Makers",
  "location": "Atlanta, GA",
  "date": "March 14 2019",
  "contribution": "Volunteered for Actions on Google workshop at",
  "specificDate": "Mar 14",
  "link": "https://www.womentechmakers.com/iwd19",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "ProfHacks 2019",
  "location": "Glassboro, NJ",
  "date": "March 9 2019",
  "contribution": "Mentored and judged at",
  "specificDate": "Mar 9",
  "link": "https://profhacks2019.devpost.com/",
  "linkText": "View DevPost Submissions"
}, {
  "type": "Events",
  "name": "Rowan WIE",
  "location": "Glassboro, NJ",
  "date": "March 7 2019",
  "contribution": "Hosted workshop for",
  "specificDate": "Mar 7"
}, {
  "type": "Events",
  "name": "Women Tech Makers",
  "location": "New York City",
  "date": "March 2 2019",
  "contribution": "Volunteered for Actions on Google workshop at",
  "specificDate": "Mar 2",
  "link": "https://www.womentechmakers.com/iwd19",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "AndroidTO DevFest",
  "location": "Toronto, Canada",
  "date": "November 6 2018",
  "specificDate": "Nov 6",
  "contribution": "Spoke at",
  "link": "http://androidto.com/",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "Intuit SmallBizHack",
  "location": "Mountain View, California",
  "date": "November 3 2018",
  "specificDate": "Nov 3-4",
  "contribution": "Sponsored",
  "link": "https://www.smallbizhack.com/",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "PennApps",
  "location": "Philadelphia, Pennsylvania",
  "date": "September 9 2018",
  "specificDate": "Sept 7-9",
  "contribution": "Sponsored",
  "link": "http://2018f.pennapps.com/",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "Particle Spectra",
  "location": "San Francisco, California",
  "date": "October 3 2018",
  "specificDate": "Oct 3",
  "contribution": "Spoke at",
  "link": "https://spectra.particle.io/",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "Code for Philly & Actions on Google",
  "location": "Philadelphia, Pennsylvania",
  "date": "September 5 2018",
  "specificDate": "September 5",
  "contribution": "Hosted",
  "link": "https://www.meetup.com/Code-for-Philly/events/254207309/",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "Introduction to Android Things",
  "location": "Nashville, Tennessee",
  "date": "August 28 2018",
  "specificDate": "August 28",
  "contribution": "Hosted",
  "link": "https://www.meetup.com/NashvilleMDUG/events/dllflmyxlblc/",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "Build Actions For Your Community",
  "location": "San Francisco, California",
  "date": "August 23 2018",
  "specificDate": "August 23",
  "contribution": "Co-hosted",
  "link": "https://www.meetup.com/google-developer-group-san-francisco/events/253443785/",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "Voice Tech Toronto",
  "location": "Toronto, Ontario",
  "date": "July 12 2018",
  "specificDate": "July 12",
  "contribution": "Hosted workshop at"
}, {
  "type": "Events",
  "name": "Google Cloud Faculty Institute",
  "location": "Sunnyvale, California",
  "date": "June 20 2018",
  "specificDate": "June 20",
  "contribution": "Facilitated working group at"
}, {
  "type": "Events",
  "name": "Google I/O",
  "location": "Mountain View, California",
  "date": "May 9 2018",
  "specificDate": "May 9",
  "contribution": "Gave talk at"
}, {
  "type": "Events",
  "name": "GDG San Francisco",
  "location": "Mountain View, California",
  "date": "May 2 2018",
  "specificDate": "May 2",
  "contribution": "Gave talk at"
}, {
  "type": "Events",
  "name": "SJHacks",
  "location": "San Jose, California",
  "date": "April 28 2018",
  "specificDate": "April 28",
  "contribution": "Judged at"
}, {
  "type": "Events",
  "name": "International Women's Day",
  "location": "Sunnyvale, California",
  "date": "March 3 2018",
  "specificDate": "March 3",
  "contribution": "Led workshop at"
}, {
  "type": "Events",
  "name": "DroidKaigi",
  "location": "Tokyo, Japan",
  "date": "February 9 2018",
  "specificDate": "February 8-9",
  "contribution": "Hosted workshop at"
}, {
  "type": "Events",
  "name": "U of T Hacks",
  "location": "Toronto, Canada",
  "date": "January 19 2018",
  "specificDate": "January 19-21",
  "contribution": "Judged At"
}, {
  "type": "Events",
  "name": "Felker Week",
  "location": "Rowan University",
  "date": "November 17 2017",
  "specificDate": "November 17-23",
  "contribution": "Hosted"
}, {
  "type": "Events",
  "name": "Intuit Quickbooks Small Business Hackathon",
  "location": "Intuit HQ Mountain View",
  "link": "https://www.smallbizhack.com/",
  "linkText": "View Event Page",
  "date": "November 11 2017",
  "specificDate": "November 11-12",
  "contribution": "Judged at"
}, {
  "type": "Events",
  "name": "Dashbot Hackathon",
  "location": "San Francisco",
  "link": "https://www.meetup.com/Dashbot-Bot-Meetup-San-Francisco-New-Technology/events/243582992/",
  "linkText": "View Event Page",
  "date": "November 4 2017",
  "specificDate": "November 4",
  "contribution": "Judged at"
}, {
  "type": "Events",
  "name": "PennApps XVI",
  "location": "Philadelphia",
  "link": "http://2017f.pennapps.com/",
  "linkText": "View Event Page",
  "date": "September 8 2017",
  "specificDate": "September 8-10",
  "contribution": "Judged at"
}, {
  "type": "Events",
  "name": "GDE Europe 2017",
  "location": "Krakow, Poland",
  "date": "September 5 2017",
  "specificDate": "September 5-6",
  "contribution": "Helped at"
}, {
  "type": "Events",
  "name": "Student Activities Conference, 2017",
  "location": "Rowan University",
  "specificDate": "April 7-9",
  "date": "April 2017"
}, {
  "type": "Events",
  "name": "ProfHacks 2K17",
  "location": "Rowan University",
  "specificDate": "Feb 4 2017",
  "date": "February 2017",
  "link": "https://profhacks17.devpost.com/",
  "linkText": "View Event Page"
}, {
  "type": "Events",
  "name": "Student Activities Conference, 2014",
  "location": "Rowan University",
  "specificDate": "April 4-6",
  "date": "April 2014"
}, {
  "type": "Events",
  "name": "ProfHacks 2K16",
  "location": "Rowan University",
  "specificDate": "March 12-13",
  "date": "March 2016"
}];
},{}],"items/hacks.json":[function(require,module,exports) {
module.exports = [{
  "type": "Hacks",
  "name": "Personal Sound Beam",
  "purpose": "Dragon Hacks 2017",
  "acolades": "Third Place",
  "link": "https://devpost.com/software/personal-sound-beam",
  "linkText": "View DevPost Submission",
  "date": "April 2017"
}, {
  "type": "Hacks",
  "name": "Smart Tattoos",
  "purpose": "PennApps XV",
  "acolades": "Grand Prize, Best Hardware Hack, Best Use of Rapid Prototyping",
  "link": "https://devpost.com/software/smart-tattoos",
  "linkText": "View DevPost Submission",
  "date": "January 2017"
}, {
  "type": "Hacks",
  "name": "RedSi",
  "purpose": "PennApps XIV",
  "acolades": "Best Education Hack",
  "link": "https://devpost.com/software/redsi",
  "linkText": "View DevPost Submission",
  "date": "September 2016"
}, {
  "type": "Hacks",
  "name": "Cogni Journal",
  "purpose": "PennApps XIII",
  "link": "https://devpost.com/software/cogni-journal",
  "linkText": "View DevPost Submission",
  "date": "January 2016"
}, {
  "type": "Hacks",
  "name": "Pyed Piper",
  "purpose": "DragonHacks 2016",
  "acolades": "Best Design, Best Domain Name",
  "link": "https://devpost.com/software/pyed-piper",
  "linkText": "View DevPost Submission",
  "date": "January 2016"
}, {
  "type": "Hacks",
  "name": "PetApps",
  "purpose": "PennApps XII",
  "link": "https://devpost.com/software/petapps",
  "linkText": "View DevPost Submission",
  "date": "September 2015"
}, {
  "type": "Hacks",
  "name": "Munch",
  "purpose": "IEEEMADC 2015",
  "acolades": "Best Mobile App Design",
  "link": "https://devpost.com/software/munch-nod0rf",
  "linkText": "View DevPost Submission",
  "date": "May 2015"
}, {
  "type": "Hacks",
  "name": "nVader",
  "purpose": "Philly Codefest 2015",
  "link": "https://devpost.com/software/nvader-qaopxi",
  "linkText": "View DevPost Submission",
  "date": "March 2015"
}, {
  "type": "Hacks",
  "name": "The Light Painter's Palette",
  "purpose": "Dragon Hacks 2015",
  "link": "https://devpost.com/software/the-light-painter-s-palette-q5zrh",
  "acolades": "2nd Place",
  "linkText": "View DevPost Submission",
  "date": "January 2015"
}];
},{}],"items/news.json":[function(require,module,exports) {
module.exports = [{
  "type": "News",
  "name": "National Cereal Day: Pick your favorite and just add milk",
  "publication": "Trib Live",
  "link": "https://triblive.com/lifestyles/more-lifestyles/national-cereal-day-pick-your-favorite-and-just-add-milk/",
  "linkText": "Read Article",
  "date": "March 7 2019"
}, {
  "type": "News",
  "name": "AndroidTO 2018: Canada's Longest Running Android Conference",
  "publication": "XDA Developers",
  "link": "https://www.xda-developers.com/androidto-2018-conference/",
  "linkText": "Read Article",
  "date": "November 5 2018"
}, {
  "type": "News",
  "name": "EE Journal Editors' Choices for World Maker Faire 2018",
  "publication": "EE Journal",
  "link": "https://www.eejournal.com/article/ee-journal-editors-choices-for-world-maker-faire-2018/",
  "linkText": "Read Article",
  "date": "September 25 2018"
}, {
  "type": "News",
  "name": "Hands-on with TV App Repo: Create a shortcut for any non-Leanback app on your Android TV",
  "publication": "Android Police",
  "link": "https://www.androidpolice.com/2018/06/15/hands-tv-app-repo-create-shortcut-non-leanback-app-android-tv/",
  "linkText": "Read Article",
  "date": "June 15 2018"
}, {
  "type": "News",
  "name": "What makes Glassboro High School a great start for future greatness",
  "publication": "Boro Briefs",
  "link": "https://www.yumpu.com/en/document/view/59470697/boro-briefs-fall-2017/share/x/0/y/0/w/495/h/640/page/4",
  "linkText": "Read Article",
  "date": "October 23 2017"
}, {
  "type": "News",
  "name": "Here's How Twitter Users Reacted To Android Oreo Launch",
  "publication": "TechTree",
  "link": "http://www.techtree.com/content/features/13174/s-how-twitter-users-reacted-android-oreo-launch.html",
  "linkText": "Read Article",
  "date": "August 22 2017"
}, {
  "type": "News",
  "name": "Bowe School students explore hands-on engineering",
  "publication": "NJ.com",
  "link": "http://www.nj.com/south-jersey-towns/index.ssf/2017/03/bowe_school_students_explore_h.html",
  "linkText": "Read Article",
  "date": "March 2017"
}, {
  "type": "News",
  "name": "LIVE BLOG: PROFHacks 2017 pits students against each other in &#39;hackathon&#39;",
  "publication": "The Whit",
  "link": "http://thewhitonline.com/2017/02/news/live-blog-profhacks-2017-pits-students-against-each-other-in-hackathon/",
  "linkText": "Read Article",
  "date": "February 2017"
}, {
  "type": "News",
  "name": "Rowan University&#39;s first hackathon is focused on the physical web",
  "publication": "Technically Philly",
  "link": "http://technical.ly/philly/2016/03/10/rowan-university-hackathon/",
  "linkText": "Read Article",
  "date": "March 2016"
}, {
  "type": "News",
  "name": "Students create technological tools at Rowan hackathon",
  "publication": "Courier Post",
  "link": "http://www.courierpostonline.com/story/news/2016/03/13/rowan-engages-in-first-ever-hackathon/81581144/",
  "linkText": "Read Article",
  "date": "March 2016"
}, {
  "type": "News",
  "name": "Student computer whizzes compete at PennApps Hackathon",
  "publication": "The Philadelphia Inquirer",
  "link": "http://www.philly.com/philly/news/20150906_Student_computer_whizzes_compete_at_PennApps_Hackathon.html",
  "linkText": "Read Article",
  "date": "September 2015"
}, {
  "type": "News",
  "name": "Glassboro High School to present &#39;Beauty and the Beast&#39;",
  "publication": "NJ.com",
  "link": "http://www.nj.com/gloucester-county/index.ssf/2012/02/glassboro_high_school_to_prese_1.html",
  "linkText": "Read Article",
  "date": "February 2012"
}];
},{}],"items/patents.json":[function(require,module,exports) {
module.exports = [{
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "January 18 2019",
  "name": "Challenge keyword generation for voice-based authentication",
  "link": "https://www.tdcommons.org/dpubs_series/1891/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "April 5 2018",
  "name": "Voice input for authentication",
  "link": "https://www.tdcommons.org/dpubs_series/1128/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "December 12 2017",
  "name": "Fitness Program for User-Defined Goals",
  "link": "http://www.tdcommons.org/dpubs_series/944/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "December 12 2017",
  "name": "Providing Reader Assistance Based on Reader Interaction",
  "link": "http://www.tdcommons.org/dpubs_series/942/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "December 12 2017",
  "name": "Correcting Image Anomalies Using Machine Learning",
  "link": "http://www.tdcommons.org/dpubs_series/945/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "December 8 2017",
  "name": "System Volume Compensating for Environmental Noise",
  "link": "http://www.tdcommons.org/dpubs_series/903/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "December 8 2017",
  "name": "Using Music to Affect Mood Based on Sentiment Analysis",
  "link": "http://www.tdcommons.org/dpubs_series/902/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "December 8 2017",
  "name": "Planning Group Meals Based on Preferences of Attendees",
  "link": "http://www.tdcommons.org/dpubs_series/901/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "December 8 2017",
  "name": "Font Optimization Based on User Reading Habits",
  "link": "http://www.tdcommons.org/dpubs_series/900/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "December 8 2017",
  "name": "Providing Relevant Advertisements Based on Item-Specific Purchase History",
  "link": "http://www.tdcommons.org/dpubs_series/897/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "December 8 2017",
  "name": "Configuring Alarm System Based on Time to Arrive at Appointment",
  "link": "http://www.tdcommons.org/dpubs_series/890/",
  "linkText": "Read Full Text"
}, {
  "type": "Patents",
  "subtype": "Defensive Publication",
  "date": "November 19 2017",
  "name": "Automatic polls in group chat conversations",
  "link": "http://www.tdcommons.org/dpubs_series/822/",
  "linkText": "Read Full Text"
}];
},{}],"items/projects.json":[function(require,module,exports) {
module.exports = [{
  "type": "Projects",
  "name": "Cyanobyte",
  "description": "Codegen for hardware peripheral communication protocols",
  "link": "https://github.com/google/cyanobyte",
  "linkText": "View on GitHub",
  "date": "March 15 2019"
}, {
  "type": "Projects",
  "name": "Typedoc Neo Theme",
  "description": "An improved, customizable Typedoc theme",
  "link": "https://github.com/google/typedoc-neo-theme",
  "linkText": "View on GitHub",
  "date": "February 2019"
}, {
  "type": "Projects",
  "name": "Node.js Wiki",
  "description": "A wiki engine build on Firebase and Node.js",
  "link": "https://github.com/google/nodejs-wiki",
  "linkText": "View on GitHub",
  "date": "August 2018"
}, {
  "type": "Projects",
  "name": "Git Presubmit Linter",
  "description": "A set of shell scripts for continuous integration (CI)",
  "link": "https://github.com/google/git-presubmit-linter",
  "linkText": "View on GitHub",
  "date": "January 2018"
}, {
  "type": "Projects",
  "name": "Hackathon Wristbands",
  "description": "An easy way for hackathons to incorporate live data from attendees",
  "link": "https://github.com/Fleker/hackathon-wristbands-website",
  "linkText": "View on GitHub",
  "date": "July 2017"
}, {
  "type": "Projects",
  "name": "MemSat",
  "description": "Acted as project manager for Command & Data Handling subsystem",
  "link": "http://memsat.space",
  "linkText": "Visit website",
  "date": "September 2016"
}, {
  "type": "Projects",
  "name": "Laser Harp",
  "description": "Designed a MIDI instrument that communicates over BLE",
  "date": "May 1 2016"
}, {
  "type": "Projects",
  "name": "Inverted Pendulum",
  "description": "Developed an inverted pendulum through an embedded PID controller",
  "link": "https://www.researchgate.net/publication/311493383_Implementation_of_an_Inverted_Pendulum_PID_Control_System_Using_a_Stepper_Motor?_iepl%5BviewId%5D=tdZGktk04GBOqR714ovQah2n&_iepl%5BprofilePublicationItemVariant%5D=default&_iepl%5Bcontexts%5D%5B0%5D=prfpi&_iepl%5BinteractionType%5D=publicationTitle",
  "linkText": "Read full text",
  "date": "May 1 2016"
}, {
  "type": "Projects",
  "name": "CultureCloud",
  "description": "Issued software updates to start-up Android app",
  "link": "http://culturecloudapp.com/",
  "linkText": "Visit App",
  "date": "January 2016"
}, {
  "type": "Projects",
  "name": "Automatic Pothole Detection",
  "description": "Develops software to allow for DoT detection of potholes",
  "date": "September 2015"
}, {
  "type": "Projects",
  "name": "Google Glass Medical Application",
  "description": "Worked on a Glass app for use in the medical industry",
  "date": "January 2014"
}];
},{}],"items/publications.json":[function(require,module,exports) {
module.exports = [{
  "type": "Publications",
  "name": "MemOS for Performance Analysis of Future Memristive Memory-Based Computer Architecture and Simulation",
  "publishedAt": "Journal of Operating Systems Development & Trends",
  "link": "http://computers.stmjournals.com/index.php?journal=JoOSD&page=article&op=view&path%5B%5D=1765",
  "linkText": "Read full text",
  "date": "August 2018"
}, {
  "type": "Publications",
  "name": "Using Wearable Sensors to Collect User Data at an Event as a Live API and for Logistical Planning",
  "publishedAt": "Sensor Applications Symposium 2017, Rowan University",
  "link": "https://www.researchgate.net/publication/312670816_Using_Wearable_Sensors_to_Collect_User_Data_at_an_Event_as_a_Live_API_and_for_Logistical_Planning",
  "linkText": "Read full text",
  "date": "March 15 2017"
}, {
  "type": "Publications",
  "name": "Building MemSat: A CubeSat for Testing Resistive Memory",
  "publishedAt": "Sensor Applications Symposium 2017, Rowan University",
  "linkText": "Read full text",
  "link": "https://www.researchgate.net/publication/315063307_Building_MemSat_A_CubeSat_for_Testing_Resistive_Memory",
  "date": "March 15 2017"
}];
},{}],"items/videos.json":[function(require,module,exports) {
module.exports = [{
  "type": "Videos",
  "name": "YouTube Plays Smart Home",
  "date": "December 18 2018",
  "link": "https://youtu.be/ExTljyJWzGY",
  "linkText": "Watch Video"
}, {
  "type": "Videos",
  "name": "Building Conversational Experiences with Actions on Google",
  "date": "November 6 2018",
  "link": "https://youtu.be/AIjgAtwdmGU",
  "linkText": "Watch Video"
}, {
  "type": "Videos",
  "name": "Implementing Report State for Google Assistant Smart Home Devices",
  "date": "September 6 2018",
  "link": "https://youtu.be/wmSTPvdzHGU",
  "linkText": "Watch Video"
}, {
  "type": "Videos",
  "name": "Best Practices for Testing Your Actions",
  "date": "May 9 2018",
  "link": "https://youtu.be/eD4x4gj4u2Y",
  "linkText": "Watch Video"
}, {
  "type": "Videos",
  "name": "Introduction to Custom Device Actions for the Google Assistant SDK",
  "date": "April 6 2018",
  "link": "https://youtu.be/rKf6CNJsaPM",
  "linkText": "Watch Video"
}, {
  "type": "Videos",
  "name": "Integrating Smart Home Devices with the Google Assistant",
  "date": "February 7 2018",
  "link": "https://youtu.be/XdZXpFBvTP8",
  "linkText": "Watch Video"
}, {
  "type": "Videos",
  "name": "Integrating Live Data into Hackathons - MLH Hackcon V",
  "date": "August 6 2017",
  "link": "https://www.youtube.com/watch?v=vFyOAY8bNk4",
  "linkText": "Watch Video"
}];
},{}],"items/contact.json":[function(require,module,exports) {
module.exports = [{
  "link": "mailto:nickfelker+nickswebsite@gmail.com",
  "type": "E-Mail",
  "icon": "icons/email.svg"
}, {
  "link": "http://twitter.com/handnf",
  "type": "Twitter",
  "icon": "icons/twitter.svg"
}, {
  "link": "https://facebook.com/nicholasmfelker",
  "type": "Facebook",
  "icon": "icons/facebook.svg"
}, {
  "link": "https://instagram.com/fleker",
  "type": "Instagram",
  "icon": "icons/instagram.svg"
}, {
  "link": "https://www.linkedin.com/in/nickfelker",
  "type": "LinkedIn",
  "icon": "icons/linkedin.svg"
}, {
  "link": "https://androidtv.news/",
  "type": "WordPress",
  "icon": "icons/television-guide.svg"
}, {
  "link": "https://snapchat.com/add/fleker",
  "type": "Snapchat",
  "icon": "icons/snapchat.svg"
}, {
  "link": "https://soundcloud.com/nick-felker-1",
  "type": "Soundcloud",
  "icon": "icons/soundcloud.svg"
}, {
  "link": "https://medium.com/@fleker",
  "type": "Medium",
  "icon": "icons/medium.svg"
}, {
  "link": "https://plus.google.com/+NickFelker",
  "type": "Google+",
  "icon": "icons/google-plus.svg"
}, {
  "link": "https://github.com/fleker",
  "type": "GitHub",
  "icon": "icons/github-circle.svg"
}, {
  "link": "https://open.spotify.com/user/12495681",
  "type": "Spotify",
  "icon": "icons/spotify.svg"
}, {
  "link": "https://kickstarter.com/profile/186762105",
  "type": "KickStarter",
  "icon": "icons/kickstarter.svg"
}, {
  "link": "https://goodreads.com/user/show/5246265-nick",
  "type": "Goodreads",
  "icon": "icons/library.svg"
}, {
  "link": "https://www.youtube.com/channel/UCsqcEY-4h9tQQJuGlCLPLSA",
  "type": "YouTube",
  "icon": "icons/youtube-play.svg"
}];
},{}],"scripts/controller.js":[function(require,module,exports) {
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function rehide() {
  var duration = 200;
  $('#cd-timeline').fadeOut(0);
  setTimeout(function () {
    $('#cd-timeline').fadeIn(duration);
    $('.cd-timeline-block').each(function () {
      $(this).offset().top > $(window).scrollTop() + window.innerHeight && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }, duration);
}

function dateSort(a, b) {
  return new Date(b.date) - new Date(a.date);
}

function alphaSort(map) {
  keys = [];

  for (i in map) {
    keys.push(i);
  }

  return keys.sort();
}

function getDisplayDate(date) {
  if (date == undefined || date == '') {
    return '';
  }

  var m = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];
  return "".concat(m[new Date(date).getMonth()], " ").concat(new Date(date).getYear() + 1900);
}

function populateMenu(categories) {
  var output = "<li class='filter' onclick='populateTimeline()'>All</li>"; // console.log(categories);

  var keys = alphaSort(categories); // console.log(keys);

  for (i in keys) {
    output += "<li class='filter' onclick='populateTimeline(\"".concat(keys[i], "\")'>").concat(keys[i], "</li>");
  }

  output += "<li class='filter' onclick='contactDialog()'>Contact</li>";
  document.getElementById('links').innerHTML = output;
}

var iconMap = {
  Apps: "icons/code-tags.svg",
  Articles: "icons/pencil.svg",
  Awards: "icons/ribbon.svg",
  Books: "icons/library.svg",
  Education: "icons/school.svg",
  Employment: "icons/briefcase.svg",
  Events: "icons/calendar.svg",
  Hacks: "icons/code-tags.svg",
  News: "icons/newspaper.svg",
  Patents: "icons/bank.svg",
  Projects: "icons/memory.svg",
  Publications: "icons/book.svg",
  Videos: "icons/video.svg"
};

function useImage(type) {
  var icon = iconMap[type] || "icons/checkbox-blank-circle.svg";
  var color = "#4CAF50";
  var output = "<div class='cd-timeline-img cd-picture' style='background-color: ".concat(color, "'>\n        <img src='").concat(icon, "' alt='").concat(type, "'></div>");
  return output;
}

function getUrl(url, text) {
  return "<a href='".concat(url, "' target='_blank' class='cd-read-more' rel='noopener'>").concat(text, "</a>");
}

function filterTimeline(filter) {
  // This feature is broken. Do not use.
  $(".cd-timeline-block+:not(.type-".concat(filter, ")")).fadeOut(100);
  $(".cd-timeline-block+.type-".concat(filter)).fadeIn(100);
  rehide();
}

window.filterTimeline = filterTimeline;
/* Load all of the user data the first time */

var me = [];
me.push.apply(me, _toConsumableArray(require('../items/articles.json')));
me.push.apply(me, _toConsumableArray(require('../items/awards.json')));
me.push.apply(me, _toConsumableArray(require('../items/books.json')));
me.push.apply(me, _toConsumableArray(require('../items/education.json')));
me.push.apply(me, _toConsumableArray(require('../items/employment.json')));
me.push.apply(me, _toConsumableArray(require('../items/events.json')));
me.push.apply(me, _toConsumableArray(require('../items/hacks.json')));
me.push.apply(me, _toConsumableArray(require('../items/news.json')));
me.push.apply(me, _toConsumableArray(require('../items/patents.json')));
me.push.apply(me, _toConsumableArray(require('../items/projects.json')));
me.push.apply(me, _toConsumableArray(require('../items/publications.json')));
me.push.apply(me, _toConsumableArray(require('../items/videos.json'))); // Sort by date

me.sort(dateSort);
var baseHtml = '';

function populateTimeline(filter) {
  // Reset
  var count = 0;

  if (!filter && baseHtml) {
    $('#cd-timeline').fadeOut(200);
    setTimeout(function () {
      document.getElementById('cd-timeline').innerHTML = baseHtml;
      $('.cd-timeline-block').each(function () {
        $(this).offset().top > $(window).scrollTop() + window.innerHeight && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
      });
      $('#cd-timeline').fadeIn(200);
      count = me.length;
      document.getElementById('view_x_items').innerHTML = count + (count == 1 ? " Item" : " Items");
    }, 200);
    return;
  }

  rehide(); // Current date

  currDate = ""; // Query categories

  categories = [];
  var output = '';

  for (var index = 0; index < me.length; index++) {
    var item = me[index];
    categories[item.type] = item.type;

    if (filter !== undefined && item.type == filter || filter === undefined) {
      // Check type
      output += "<div class='cd-timeline-block type-".concat(item.type, "'>");
      output += useImage(item.type);
      output += "<div class='cd-timeline-content'><p>";

      if (item.type == "Books") {
        output += "<h2>".concat(item.name, "</h2>");

        if (item.series !== undefined) {
          output += "<h3>".concat(item.series, " #").concat(item.seriesNo, "</h3>");
        }
      } else if (item.type == "Publications") {
        output += "<h2>".concat(item.name, "</h2>");
        output += "<h3>".concat(item.publishedAt, "</h3>");
      } else if (item.type == "Hacks") {
        output += "<h2>".concat(item.name, "</h2>");

        if (item.purpose !== undefined) {
          output += "<h3>Built at ".concat(item.purpose, "</h3>");
        }

        if (item.acolades !== undefined) {
          output += "<h4>".concat(item.acolades, "</h4>");
        }
      } else if (item.type == "Articles") {
        output += "<h2>".concat(item.name, "</h2>");
      } else if (item.type == "Education") {
        output += "<h2>".concat(item.name, "</h2>");

        if (item.gpa !== undefined) {
          output += "<h3>".concat(item.gpa, " GPA</h3>");
        }
      } else if (item.type == "Employment") {
        output += "<h2>Started Job at ".concat(item.name, "</h2>");
        output += "<h3>".concat(item.position, "</h3>");
        output += "<h4>".concat(item.date, " - ").concat(item.ended, "</h4>");
      } else if (item.type == "Awards") {
        output += "<h2>".concat(item.award, "</h2>");
        output += "<h3>".concat(item.name, "</h3>");
      } else if (item.type == "Events") {
        output += "<h2>".concat(item.contribution || "Hosted", " ").concat(item.name, "</h2>");
        output += "<h3>".concat(item.specificDate, "</h3>");
        output += "<h4>".concat(item.location, "</h4>");
      } else if (item.type == "News") {
        output += "<h2>".concat(item.name, "</h2>");
        output += "<h3>".concat(item.publication, "</h3>");
      } else if (item.type == "Projects") {
        output += "<h2>".concat(item.name, "</h2>");
        output += "<h3>".concat(item.description, "</h3>");
      } else if (item.type == "Patents") {
        output += "<h2>".concat(item.name, "</h2>");
        output += "<h3>".concat(item.subtype, "</h3>");
      } else {
        output += "<h2>".concat(item.name, "</h2>");
      }

      output += "</p>";

      if (item.link !== undefined) {
        output += getUrl(item.link, item.linkText);
      }

      if (getDisplayDate(currDate) != getDisplayDate(item.date)) {
        output += "<span class='cd-date'>".concat(getDisplayDate(item.date), "</span>");
        currDate = item.date;
      }

      output += "</div></div>";
      count++;
    }
  }

  document.getElementById('cd-timeline').innerHTML = output;

  if (!filter) {
    baseHtml = output;
  }

  document.getElementById('view_x_items').innerHTML = count + (count == 1 ? " Item" : " Items");
  rehide();
  $('#contact-me').fadeOut(400);
  $('#cd-timeline').fadeIn(400);
  return categories;
}

window.populateTimeline = populateTimeline;

function contactDialog() {
  // Generate things
  var contact = require('../items/contact.json');

  var output = "<ul>";

  for (var i = 0; i < contact.length; i++) {
    var item = contact[i];

    if (item.icon !== undefined) {
      output += "<li><a target='_blank' href='".concat(item.link, "'><img src='").concat(item.icon, "' alt='").concat(item.type, "' /></a></li>");
    } else {
      output += "<li><a target='_blank' href='".concat(item.link, "'>").concat(item.type, "</a></li>");
    }
  }

  output += "</ul>";
  document.getElementById('contact-list').innerHTML = output;
  var count = contact.length;
  document.getElementById('view_x_items').innerHTML = count + (count == 1 ? " Item" : " Items");
  $('#cd-timeline').fadeOut(200);
  setTimeout(function () {
    $('#contact-me').fadeIn(200);
  }, 200);
}

window.contactDialog = contactDialog;

window.onload = function () {
  categories = populateTimeline();
  populateMenu(categories);
};
/* Extra jQuery stuff */


jQuery(document).ready(function ($) {
  var timelineBlocks = $('.cd-timeline-block'),
      offset = 0.8; //hide timeline blocks which are outside the viewport

  hideBlocks(timelineBlocks, offset); //on scolling, show/animate timeline blocks when enter the viewport

  $(window).on('scroll', function () {
    !window.requestAnimationFrame ? setTimeout(function () {
      showBlocks($('.cd-timeline-block'), offset);
    }, 100) : window.requestAnimationFrame(function () {
      showBlocks($('.cd-timeline-block'), offset);
    });
  });

  function hideBlocks(blocks, offset) {
    blocks.each(function () {
      $(this).offset().top > $(window).scrollTop() + window.innerHeight * offset && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
    });
  }

  function showBlocks(blocks, offset) {
    blocks.each(function () {
      // console.log($(this).offset().top, $(window).scrollTop()+window.innerHeight*offset);
      $(this).offset().top <= $(window).scrollTop() + window.innerHeight * offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
    });
  }

  $('#contact-me').css('display', 'block');
});
},{"../items/articles.json":"items/articles.json","../items/awards.json":"items/awards.json","../items/books.json":"items/books.json","../items/education.json":"items/education.json","../items/employment.json":"items/employment.json","../items/events.json":"items/events.json","../items/hacks.json":"items/hacks.json","../items/news.json":"items/news.json","../items/patents.json":"items/patents.json","../items/projects.json":"items/projects.json","../items/publications.json":"items/publications.json","../items/videos.json":"items/videos.json","../items/contact.json":"items/contact.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56243" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/controller.js"], null)
//# sourceMappingURL=scripts/controller.js.map