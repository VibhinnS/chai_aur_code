const user = {
    username: "Name",
    price: 199
}

const handleObject = (anyObject) => {
    console.log(`Username - ${anyObject.username} needs to pay ${anyObject.price}`)
}

handleObject(user)