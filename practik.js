const users = [
    {
        name: "Artem",
        age: 25,
        email: "jfhs@l.com ",
    },
    {
        name: "Katy",
        age: 27,
        email: " khl@fg.com",
    },
    {
        name: "Anton",
        age: 20,
        email: "qwerylh@k.com",
    },
    {
        name: "Gala",
        age: 23,
        email: "lfjdjjg@md.com "
    }
];

users.forEach(function(user) {
    if(user.age > 24) {
        console.log(`User ${user.name} is adult`);
    }else {
        console.log(`User ${user.name} is tennagir`);
    }
    
})