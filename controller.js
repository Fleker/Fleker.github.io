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

function populateMenu(categories) {
    var output = "<li class='filter' onclick='populateTimeline()'>All</li>";
    console.log(categories);
    var keys = alphaSort(categories);
    console.log(keys);
    for (i in keys) {
        output += `<li class='filter' onclick='populateTimeline(\"${keys[i]}\")'>${keys[i]}</li>`;
    }
    output += "<li class='filter' onclick='contactDialog()'>Contact</li>";
    document.getElementById('links').innerHTML = output;
}

function useImage(type) {
    var icon = "icons/checkbox-blank-circle.svg";
    var color = "#4CAF50";
    if (type == "Apps") {
        icon = "icons/code-tags.svg";
    } else if (type == "Articles") {
        icon = "icons/pencil.svg";
    } else if (type == "Awards") {
        icon = "icons/ribbon.svg";
    } else if (type == "Books") {
        icon = "icons/library.svg";
    } else if (type == "Education") {
        icon = "icons/school.svg";
    } else if (type == "Employment") {
        icon = "icons/briefcase.svg";
    } else if (type == "Events") {
        icon = "icons/calendar.svg";
    } else if (type == "Hacks") {
        icon = "icons/code-tags.svg";
    } else if (type == "News") {
        icon = "icons/newspaper.svg";
    } else if (type == "Patents") {
        icon = "icons/bank.svg";
    } else if (type == "Projects") {
        icon = "icons/memory.svg";
    } else if (type == "Publications") {
        icon = "icons/book.svg";
    } else if (type == "Videos") {
        icon = "icons/video.svg";
    }  
    var output = `<div class='cd-timeline-img cd-picture' style='background-color: ${color}'>
        <img src='${icon}' alt='${type}'></div>`;
    return output;
}

function getUrl(url, text) {
    return `<a href='${url}' target='_blank' class='cd-read-more'>${text}</a>`;
}

function populateTimeline(filter) {
    // Reset
    rehide();
    document.getElementById('cd-timeline').innerHTML = "";

    // Sort by date
    me.sort(dateSort);
    // Current date
    currDate = "";
    // Query categories
    categories = [];
    var count = 0;

    for (var index = 0; index < me.length; index++) {
        var item = me[index];
        categories[item.type] = item.type;

        if ((filter !== undefined && item.type == filter) 
                || filter === undefined) {
            // Check type
            var output = "<div class='cd-timeline-block'>";
            output += useImage(item.type);
            output += "<div class='cd-timeline-content'><p>";
            if (item.type == "Books") {
                output += `<h2>${item.name}</h2>`;
                if (item.series !== undefined) {
                    output += `<h3>${item.series} #${item.seriesNo}</h3>`; 
                }
            } else if (item.type == "Publications") {
                output += `<h2>${item.name}</h2>`;
                output += `<em>${item.publishedAt}</em>`;
            } else if (item.type == "Hacks") {
                output += `<h2>${item.name}</h2>`;
                if (item.purpose !== undefined) {
                    output += `<h3>Built at ${item.purpose}</h3>`;
                }
                if (item.acolades !== undefined) {
                    output += `<em>${item.acolades}</em>`;   
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
                output += `<h3>${item.location}</h3>`;
            } else if (item.type == "News") {
                output += `<h2>${item.name}</h2>`;
                output += `<h3>${item.publication}</h3>`;
            } else if (item.type == "Projects") {
                output += `<h2>${item.name}</h2>`;
                output += `<h3>${item.description}</h3>`;            
            } else if (item.type == "Patents") {
                output += `<h2>${item.name}</h2>`;
                output += `<h3>${item.subtype}</h3>`;            
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
            document.getElementById('cd-timeline').innerHTML += output;
            count++;
            document.getElementById('view_x_items').innerHTML = count + ((count == 1) ? " Item" : " Items");
        }
    }
    rehide();
    $('#contact-me').fadeOut(400);
    $('#cd-timeline').fadeIn(400);
    return categories;
}

function contactDialog() {       
    // Generate things
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

window.onload = function() {
    categories = populateTimeline();
    populateMenu(categories);
};