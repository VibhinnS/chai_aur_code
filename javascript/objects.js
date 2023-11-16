// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)
// const obj4 = {obj1, obj2, obj3}
// const obj5 = {...obj3, ...obj2}

// console.log(obj5)


// OBJECTS AND JSON


const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Singhal"
}

const {courseInstructor: ins} = course
console.log(ins)

const addTwoNums = (num1, num2) => {
    return num1 + num2
}

console.log()