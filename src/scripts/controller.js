function rehide() {
    const duration = 200
    $('#cd-timeline').fadeOut(0);
    setTimeout(function() {
        $('#cd-timeline').fadeIn(duration);
        $('.cd-timeline-block').each(function(){
            ( $(this).offset().top > $(window).scrollTop() + window.innerHeight ) &&
                $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
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
    return `${m[new Date(date).getMonth()]} ${(new Date(date).getYear() + 1900)}`;
}

function populateMenu(categories, dataset = 'me') {
    var output = `<li class='filter' onclick='populateTimeline(undefined, \"${dataset}\")'>
        All
    </li>`;
    // console.log(categories);
    var keys = alphaSort(categories);
    // console.log(keys);
    for (i in keys) {
        output += `<li class='filter' onclick='populateTimeline(\"${keys[i]}\", \"${dataset}\")'>
            ${keys[i]}
        </li>`;
    }
    output += "<li class='filter' onclick='contactDialog()'>Contact</li>";
    // output += "<li class='filter' onclick='charityDialog()'>Charities</li>";
    document.getElementById('links').innerHTML = output;
}

function okr(score) {
    if (score >= 0.7) {
        return `<span style="color: #4CAF50">${score}</span>`
    } else if (score >= 0.5) {
        return `<span style="color: #FF5722">${score}</span>`
    } else {
        return `<span style="color: #f44336">${score}</span>`
    }
}

const iconMap = {
    Apps: "icons/code-tags.svg",
    Articles: "icons/pencil.svg",
    Awards: "icons/ribbon.svg",
    Books: "icons/library.svg",
    Culture: "icons/palette.svg",
    Economic: "icons/currency-usd.svg",
    Education: "icons/school.svg",
    Employment: "icons/briefcase.svg",
    Environment: "icons/bee-flower.svg",
    Events: "icons/calendar.svg",
    Hacks: "icons/code-tags.svg",
    Medical: "icons/heart-pulse.svg",
    News: "icons/newspaper.svg",
    OKR: "icons/chart-pie.svg",
    Patents: "icons/bank.svg",
    Projects: "icons/memory.svg",
    Publications: "icons/book.svg",
    Social: "icons/human-male-female.svg",
    Standards: "icons/ballot.svg",
    Technology: "icons/monitor-cellphone.svg",
    Videos: "icons/video.svg"
}

function useImage(type) {
    const icon = iconMap[type] || "icons/checkbox-blank-circle.svg"
    const color = "#4CAF50"
    const output = `<div class='cd-timeline-img cd-picture' style='background-color: ${color}'>
        <img src='${icon}' alt='${type}'></div>`
    return output
}

function getUrl(url, text) {
    return `<a href='${url}' target='_blank' class='cd-read-more' rel='noopener'>${text}</a>`
}

function filterTimeline(filter) {
    // This feature is broken. Do not use.
    $(`.cd-timeline-block+:not(.type-${filter})`).fadeOut(100)
    $(`.cd-timeline-block+.type-${filter}`).fadeIn(100)
    rehide()
}
window.filterTimeline = filterTimeline

/* Load all of the user data the first time */
const me = []
me.push(...require('../items/articles.json'))
me.push(...require('../items/awards.json'))
me.push(...require('../items/books.json'))
me.push(...require('../items/education.json'))
me.push(...require('../items/employment.json'))
me.push(...require('../items/events.json'))
me.push(...require('../items/hacks.json'))
me.push(...require('../items/news.json'))
me.push(...require('../items/patents.json'))
me.push(...require('../items/projects.json'))
me.push(...require('../items/publications.json'))
// me.push(...require('../items/standards.json'))
me.push(...require('../items/videos.json'))

// Sort by date
me.sort(dateSort);
let baseHtml = ''

const charities = require('../items/charities.json')
charities.sort(dateSort)

const okrs = require('../items/okrs.json')
okrs.sort(dateSort)

function populateTimeline(filter, dataset = me) {
    if (dataset === "me") {
        dataset = me
    } else if (dataset === "charities") {
        dataset = charities
    } else if (dataset === "okrs") {
        dataset = okrs
    }
    // Reset
    let count = 0;

    if (!filter && baseHtml) {
        $('#cd-timeline').fadeOut(200);
        setTimeout(function() {
            document.getElementById('cd-timeline').innerHTML = baseHtml
            $('.cd-timeline-block').each(function(){
                ( $(this).offset().top > $(window).scrollTop() + window.innerHeight ) &&
                    $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
            });
            $('#cd-timeline').fadeIn(200);
            
            count = dataset.length
            document.getElementById('view_x_items').innerHTML = count + ((count == 1) ? " Item" : " Items")
        }, 200);
        return
    }

    rehide();
    // Current date
    currDate = "";
    // Query categories
    categories = [];
    let output = ''
    for (var index = 0; index < dataset.length; index++) {
        var item = dataset[index];
        categories[item.type] = item.type;
        
        if ((filter !== undefined && item.type == filter) || filter === undefined) {
            // Check type
            output += `<div class='cd-timeline-block type-${item.type}'>`;
            output += useImage(item.type);
            output += "<div class='cd-timeline-content'><p>";
            if (item.type == "Books") {
                output += `<h2>${item.name}</h2>`;
                if (item.series !== undefined) {
                    output += `<h3>${item.series} #${item.seriesNo}</h3>`; 
                }
            } else if (item.type == "Publications") {
                output += `<h2>${item.name}</h2>`;
                output += `<h3>${item.publishedAt}</h3>`;
            } else if (item.type == "Hacks") {
                output += `<h2>${item.name}</h2>`;
                if (item.purpose !== undefined) {
                    output += `<h3>Built at ${item.purpose}</h3>`;
                }
                if (item.acolades !== undefined) {
                    output += `<h4>${item.acolades}</h4>`;   
                }
            } else if (item.type == "Articles") {
                output += `<h2>${item.name}</h2>`;
            } else if (item.type == "Education") {
                output += `<h2>${item.name}</h2>`;
                if (item.gpa !== undefined) {
                    output += `<h3>${item.gpa} GPA</h3>`;
                }
            } else if (item.type == "Employment") {
                output += `<h2>Started Job at ${item.name}</h2>`;
                output += `<h3>${item.position}</h3>`;
                output += `<h4>${item.date} - ${item.ended}</h4>`;
            } else if (item.type == "Awards") {
                output += `<h2>${item.award}</h2>`;
                output += `<h3>${item.name}</h3>`;
            } else if (item.type == "Events") {
                output += `<h2>${item.contribution || "Hosted"} ${item.name}</h2>`;
                output += `<h3>${item.specificDate}</h3>`;
                output += `<h4>${item.location}</h4>`;
            } else if (item.type == "News") {
                output += `<h2>${item.name}</h2>`;
                output += `<h3>${item.publication}</h3>`;
            } else if (item.type == "Projects") {
                output += `<h2>${item.name}</h2>`;
                output += `<h3>${item.description}</h3>`;
            } else if (item.type == "Patents") {
                output += `<h2>${item.name}</h2>`;
                output += `<h3>${item.subtype}</h3>`;
            } else if (item.type === "Standards") {
                output += `<h2>${item.name}</h2>`;
                output += `<h3>${item.id}</h3>`;
            } else if (item.type === "OKR") {
                output += `<h2>Overall ${okr(item.overall)}</h2>`
                Object.entries(item.scores).forEach(([label, score]) => {
                    output += `<h3>${label}: ${okr(score)}</h3>`
                })
            } else {
                output += `<h2>${item.name}</h2>`;
            }
            output += "</p>";
            if (item.link !== undefined) {
                output += getUrl(item.link, item.linkText);
            }
            if (getDisplayDate(currDate) != getDisplayDate(item.date)) {
                output += `<span class='cd-date'>${getDisplayDate(item.date)}</span>`;
                currDate = item.date;
            }
            output += "</div></div>";
            count++;
        }
    }

    document.getElementById('cd-timeline').innerHTML = output;
    if (!filter && dataset === 'me') {
        baseHtml = output
    }
    document.getElementById('view_x_items').innerHTML = count + ((count == 1) ? " Item" : " Items");
    
    rehide();
    $('#contact-me').fadeOut(400);
    $('#cd-timeline').fadeIn(400);
    return categories;
}
window.populateTimeline = populateTimeline

function itemDialog() {
    categories = populateTimeline();
    console.log(categories)
    populateMenu(categories);
}
window.itemDialog = itemDialog

function contactDialog() {
    // Generate things
    const contact = require('../items/contact.json')
    var output = "<ul>";
    for (var i = 0; i < contact.length; i++) {
        var item = contact[i];
        if (item.icon !== undefined) {
            output += `<li><a target='_blank' href='${item.link}'><img src='${item.icon}' alt='${item.type}' /></a></li>`;
        } else {
            output += `<li><a target='_blank' href='${item.link}'>${item.type}</a></li>`;
        }
    }
    output += "</ul>";
    document.getElementById('contact-list').innerHTML = output;

    var count = contact.length; 
    document.getElementById('view_x_items').innerHTML = count + ((count == 1) ? " Item" : " Items");
    $('#cd-timeline').fadeOut(200);
    setTimeout(function() {
        $('#contact-me').fadeIn(200);
    }, 200);
}
window.contactDialog = contactDialog

function charityDialog() {
    const categories = populateTimeline(undefined, charities)
    populateMenu(categories, 'charities')
}
window.charityDialog = charityDialog

function okrDialog() {
    const categories = populateTimeline(undefined, okrs)
    populateMenu(categories, 'okrs')
}
window.okrDialog = okrDialog

window.onload = function() {
    itemDialog()
};

/* Extra jQuery stuff */
jQuery(document).ready(function($){
    var timelineBlocks = $('.cd-timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scolling, show/animate timeline blocks when enter the viewport
    $(window).on('scroll', function(){
        (!window.requestAnimationFrame) 
            ? setTimeout(function(){ showBlocks($('.cd-timeline-block'), offset); }, 100)
            : window.requestAnimationFrame(function(){ showBlocks($('.cd-timeline-block'), offset); });
    });

    function hideBlocks(blocks, offset) {
        blocks.each(function(){
            ( $(this).offset().top > $(window).scrollTop()+window.innerHeight*offset ) && $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        });
    }

    function showBlocks(blocks, offset) {
        blocks.each(function(){
            // console.log($(this).offset().top, $(window).scrollTop()+window.innerHeight*offset);
            ( $(this).offset().top <= $(window).scrollTop()+window.innerHeight*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) && $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
        });
    }

    $('#contact-me').css('display', 'block');
});
