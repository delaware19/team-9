var SocialStories = window.localStorage;
var stories = [];
function submit() {
    var temp = {};
    temp = {"image":document.getElementById("image").value, "text":document.getElementById("text").value};
    stories.push(temp);

    var c = {};
    c = stories;
    var story = {"id": 0,
                "pages": c,
                "age": document.getElementById("age").value,
                "title": document.getElementById("title").value,
                "isFavorited": false,
                "gender": document.getElementById("gender").value,
                "ethnicity": document.getElementById("ethnicity").value
    };
    SocialStories.setItem('Story', JSON.stringify(story));
}
function doSomething() {
    var temp = {};
    temp = {"image":document.getElementById("image").value, "text":document.getElementById("text").value};
    stories.push(temp);
}
var newstory = document.getElementById("NewStory");
newstory.addEventListener("submit", submit);
