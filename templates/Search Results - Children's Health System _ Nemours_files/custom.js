$(function () {
    $('#fontResize').fontResize();

    // ga tracking for appointment and phone number buttons
    $(".pc").click(function () {
        var providerName = $(this).attr("data-trackevent-value");
        var contactLabel = $(this).attr("data-contact-label");
        var locName = $(this).attr("data-addr").toLowerCase();
        if (contactLabel == 'Appointments') {
            ga('Tracker1.send', 'event', 'appointment', locName, providerName, 10);
            ga('sgTracker1.send', 'event', 'appointment', locName, providerName, 10);
            ga('sgTracker1.send', 'event', 'phone call', locName, providerName, 10);
        } else {
            ga('sgTracker1.send', 'event', 'phone call', locName, providerName, 10);
        } 
    });

    $(".pc_r").click(function () {
        var providerName = $(this).attr("data-trackevent-value");
        var contactLabel = $(this).attr("data-contact-label");
        if (contactLabel == 'Appointments') {
            ga('Tracker1.send', 'event', 'appointment', 'phone call | results', providerName, 10);
            ga('sgTracker1.send', 'event', 'appointment', 'phone call | results', providerName, 10);
            ga('sgTracker1.send', 'event', 'phone call', 'appointment | results', providerName, 10);
        } else {
            ga('sgTracker1.send', 'event', 'phone call', 'information | results', providerName, 10);
        }
        
    });


    $(".ap_r").click(function () {
        var providerName = $(this).attr("data-trackevent-value");
        ga('sgTracker1.send', 'event', 'appointment', 'form link | results', providerName, 10);
    });


    $(".ap_l").click(function () {
        var providerName = $(this).attr("data-trackevent-value");
            ga('sgTracker1.send', 'event', 'appointment', 'form link | left side bar', providerName, 10);
    });

    $(".ap_lt").click(function () {
        var providerName = $(this).attr("data-trackevent-value");
        var locName = $(this).attr("data-addr");
        ga('sgTracker1.send', 'event', 'appointment', 'form link | location tab' + locName, providerName, 10);
    });

	// scroll to ratings tab when link is clicked.
	$('#ratingsLink').click(function () {
		var ratingsHeader = $('.patientRatingsHeader').parent('h3.ui-accordion-header');

		if (!(ratingsHeader.length && ratingsHeader.hasClass('ui-state-active'))) {
			$('a[href="#tabs-6"]').click();
		}
	});

	// Make the 'Accepting New Patients' widget behave like other widgets after
	// being selected.
	var acceptingNewPatientsLink = $('.customAccptNewPatients .removesearchlink ');
	if (acceptingNewPatientsLink.length) {
		acceptingNewPatientsLink.wrap('<ul><li class="selectedSearchLI"></li></ul>')
	}

    // Make the Custom Location Boolean widgets behave like other widgets after
    // being selected.
	var customLocationSearchBools = $('.customLocationBool .removesearchlink ');
	if (customLocationSearchBools.length) {
	    customLocationSearchBools.wrap('<ul><li class="selectedSearchLI"></li></ul>')
	}

	OffCanvasInit('#mobileRefineSearch');
});


function updateUI() {
    if ($('#mobileIndicator').is(':visible')) {
        // mobile view instructions
        tabsToAccordions();
    } else {
        accordionsToTabs();
    }
}

// reference: http://www.markadrake.com/blog/2013/09/06/responsive-design-turning-tabs-into-accordions-and-back-again/
// changes tabs to accordions (jquery ui)
function tabsToAccordions() {
    $('.tabs').each(function () {
        var a = $('<div class="accordion">');
        var b = new Array();
        $(this).find('>ul>li').each(function () {
            var id = $(this).attr('id');
            b.push('<h3 ' + (id != null ? 'id=' + id : '') + '>' + $(this).html() + '</h3>');
        });
        var c = new Array();
        $(this).find('>div').each(function () {
            c.push('<div>' + $(this).html() + '</div>');
        });
        for (var i = 0; i < b.length; i++) {
            a.append(b[i]).append(c[i]);
        }
        $(this).before(a);
        $(this).remove();
    })
    $('.accordion').accordion({collapsible:true, animate: false, heightStyle: "content", icons: { 'header': 'glyphicon glyphicon-triangle-bottom', 'activeHeader': 'glyphicon glyphicon-triangle-top' } });
}

// changes accordions to tabs (jquery ui)
function accordionsToTabs() {
    $('.accordion').each(function () {
        var a = $('<div id="tabsProfile" class="tabs">');
        var count = 0;
        var b = $('<ul>').addClass('tabs-nav');
        $(this).find('>h3').each(function () {
            var id = $(this).attr('id');
            count++;
            b.append('<li ' + (id != null ? 'id=' + id : '') + '><a href="#tabs-' + count + '">' + $(this).text() + '</a></li>');
        });
        var count = 0;
        var c = $('');
        $(this).find('>div').each(function () {
            count++;
            c = c.add('<div id="tabs-' + count + '" class="profileTab cf">' + $(this).html() + '</div>');
        });
        a.append(b).append(c);
        $(this).before(a);
        $(this).remove();
    });
    $('.tabs').tabs();
}

$(function() {
    $(window).resize(function (e) {
        updateUI();
    });
    updateUI();
});

$(function () {

	$("[class^=locationImages-]").accordion({
		active: false,
		collapsible: true,
		heightStyle: "content",
		activate: function (event, ui) {
			var arrow = $(this).find('.view-images span');
			if ($(this).accordion("option", "active") !== 0) {
				arrow.removeClass('glyphicon-triangle-top');
				arrow.addClass('glyphicon-triangle-bottom');
			}
			else {
				arrow.removeClass('glyphicon-triangle-bottom');
				arrow.addClass('glyphicon-triangle-top');
			}
		}
	});

	$(".locationImages-1").first().accordion("option", "active", 0);

});

function OffCanvasInit(element) {
    var element = $(element);
    var refinePersitenceCookie = $.cookie("showRefineSearch");
    var showRefineSearch = false;

    if (refinePersitenceCookie) {
        showRefineSearch = true;
        $(element).addClass('in canvas-slid');
        $('html, body').addClass('noScroll');
    }

    $(element).offcanvas({
        toggle: false,
        modal: true,
		disableScrolling: false,
        showByDefault: showRefineSearch
    });

    // Set persitence cookie when user opens refine search on mobile.
    $(element).on('show.bs.offcanvas', function () {
    	$.cookie("showRefineSearch", true);
    	$('html, body').addClass('noScroll');
    });

    // Remove persitence cookie when refine searchs closes.
    $(element).on('hide.bs.offcanvas', function () {
    	$.removeCookie("showRefineSearch");
    	$('html, body').removeClass('noScroll');
    });

    // Show off canvas refine search when user clicks button.
    $('.mobile-refine-show').on('click', function () {
        $(element).offcanvas('show');
    });

    // Hide off canvas refine search when user clicks 'done'.
    $('.mobile-refine-close').on('click', function () {
        $(element).offcanvas('hide');
    });
}