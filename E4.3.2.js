function hasProperty(propertyName, obj) {
    return obj.hasOwnProperty(propertyName);
}
const Object = {
    name: "Ivans",
    age: 20,
    city: "Riga"
};

console.log(hasProperty("name", Object)); // true
console.log(hasProperty("country", Object)); // false
