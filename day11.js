var $ = function (Person) {
    return {
        breakTheIce: function (message) {
            console.log(message + " My name is " + Person.name);
            return this;
        },
        introduce: function () {
            console.log("I'm a " + Person.intro + " Do you want to program with me?");
            return this;
        }
    }
}

var Jim = {
    name: "Jim Hu",
    intro: "Programmer!"
}
$(Jim).breakTheIce("Hi").introduce();