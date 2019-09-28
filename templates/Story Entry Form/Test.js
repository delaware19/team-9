var SocialStories = window.sessionStorage;
var stories = [];

function submit() {
    var t = {"image":document.getElementById("image").value, "text":document.getElementById("text").value};

    stories.push(t);
    console.log(stories);
    var story = {"id": 0,
                "pages": stories,
                "age": document.getElementById("age").value,
                "title": document.getElementById("title").value,
                "isFavorited": false,
                "gender": document.getElementById("gender").value,
                "ethnicity": document.getElementById("ethnicity").value
    };
    SocialStories.setItem('Story', JSON.stringify(story));
}
function doSomething() {
    var t = {"image":document.getElementById("image").value, "text":document.getElementById("text").value};
    stories.push(t);
    console.log(stories);
}

var newstory = document.getElementById("NewStory");
newstory.addEventListener("submit", submit);
