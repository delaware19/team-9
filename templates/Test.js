var SocialStories = window.localStorage;
var stories = [];
function submit() {
    var temp = {};
    temp = {"image":document.getElementById("image").value, "text":document.getElementById("text").value};
    stories.push(temp);

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
    var temp = {};
    temp = {"image":document.getElementById("image").value, "text":document.getElementById("text").value};
    stories.push(temp);
}

function drawToCanvas() {
    //document.getElementById("title").value = SocialStories.getItem("title")
    var obj = JSON.parse(SocialStories.getItem("Story"))
    document.getElementById("title").setAttribute("value", obj.title);
    document.getElementById("age").setAttribute("value", obj.age);
    document.getElementById("gender").setAttribute("value", obj.gender);
    document.getElementById("ethnicity").setAttribute("value", obj.ethnicity);
    //obj.pages[0].text, where 0 represents the page number and text is that page's text
    document.getElementById("text").setAttribute("value", obj.pages[0].text);

}
var newstory = document.getElementById("NewStory");
newstory.addEventListener("submit", submit);
