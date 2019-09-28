var Story = window.localStorage;
var myimagearray = [];
var mytextarray = [];
var stories = [];
function submit() {
    for (var i; i < myimagearray.length; i++) {
        stories.push({"image":myimagearray[i], "text":mytextarray[i]});
    }
    var JSON = {"id": 0,
                "age": document.getElementById("age").value,
                "title": document.getElementById("title").value,
                "isfavorited": false,
                "gender": document.getElementById("gender").value,
                "ethnicity": document.getElementById("ethnicity").value,
                "pages": stories
    };
    Story.setItem('Story', JSON);         
}
function doSomething() {
    myimagearray.push(document.getElementById("image").value);
    mytextarray.push(document.getElementById("text").value);
    document.getElementById("text").value = "";
    document.getElementById("image").value = "";
}
var newstory = document.getElementById("NewStory");
newstory.addEventListener("submit", submit);
