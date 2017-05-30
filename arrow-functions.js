var names = ['AJ', 'A-aron', 'Ricky', 'TimOthy'];

names.forEach(function (name) {
    console.log(name);
});

// One way with curly braces
names.forEach((name) => {
    console.log('Arrow function', name);
});

// Another way to write arrow function
names.forEach((name) => console.log(name));

// Whatever you define automatically gets returned.
// Annonymous function have THIS binding
// Arrow functions take on their parents THIS binding.


var addStatement = (a, b) => {
    return a + b;
}

console.log(addStatement(1, 1));


var addExpression = (a, b) => console.log(a + b);


addExpression(2, 2);