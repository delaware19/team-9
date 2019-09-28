$(window).load(function () {
    changeStarImages();
    copyText();
    moveSource();
});

$(window).resize(function () {
    changeStarImages();
});



function changeStarImages() {

        $(".px-star-images img").attr({
            src: "/Content/CustomViewsContent/_Shared/images/stars-stroke2.png"
        });

}


function getViewport() {
    var e = window, a = 'inner';

    // if the window has a scrollbar then use the clientWidth for the document body
    // which is more accurate
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width: e[a + 'Width'], height: e[a + 'Height'] };
}

// This function is meant to copy the comment and ratings counts and add them 
// to the heading displays on the Ratings and Reviews tab
function copyText() {
    $(document).ready(function () {
        var ratings = $('span[itemprop="ratingCount"]').text();
        var comments = $('span[itemprop="reviewCount"]').text();
        $(".cments").append(" (" + comments + ")");
        $(".rtings").append(" (" + ratings + ")");
    });
}

// This funstion moves the comment source over into the element with the date in order
// to meet the client's design specifications
function moveSource() {
    $('.px-comment-wrapper').each(function () {
        var $destination = $(this).find(' .px-comment-stars-date-wrapper ');
        $(this).find(' .px-source ').prependTo($destination);
    });

    // Setting this to run with a slight delay 
    // each time someone clicks to load more comments on the page
    $('.px-moreCommentsLink a').click(setTimeout(function () { moveSource(); }, 200));

}

// Setting a delay for the copy and move functions so that 
// the transparency data has enough time to render on the page
//setTimeout(function () { copyText(); moveSource(); }, 1000);