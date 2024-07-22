function createNullObject() {
    return Object.create(null);
}
const obj = createNullObject();
console.log(obj); // {}
console.log(Object.getPrototypeOf(obj));