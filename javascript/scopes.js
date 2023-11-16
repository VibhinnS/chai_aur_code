// // function one() {
// //     const username = "vibhinn"
// //     function two() {
// //         const website = "google"
// //         console.log(username)
// //     }
// //     console.log(website)
// //     two()
// // }
// // one()



// const user = {
//     username: "xyz",
//     price: 999,
//     welcomeMsg: function() {
//         console.log(`${this.username}, welcome!`)
//     }
// }
// user.welcomeMsg()


// const fxn = () => {
//     let username = "vibhinn"
// }
// fxn()


(function vibhinn() {
    console.log('DB ONLINE')
})();

//global scope ke pollution se bt hoti h - isliye we use IIFE

(  (params) => {
    console.log(`DB CONNECTED TO ${params}`)
}  )('dalla')



//beth stack