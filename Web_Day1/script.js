// API URL
let trumpURL = "https://api.tronalddump.io/random/quote"
let trumpMeme = "https://api.tronalddump.io/random/meme"
let instructorsURL = "http://ec2-52-221-202-67.ap-southeast-1.compute.amazonaws.com/instructors"

// Fetch is an Asynchronous function, it may not return a result
    // in the time that you would expect

    // ONE SHOULD NOT CODE LIKE THIS
// let getDatafromServer = ()=>{
//     let response = fetch(trumpURL)
//     console.log(response)
//     }

// When coding with asynchronous functions, you need async and await:
let getDatafromServer = async ()=>{
    let response = await fetch(trumpURL)
    // When getting data from website/apis use the .json() method to
    // obtain the data you are interested in.
    let data = await response.json()
    
    let quotetag = await document.getElementById("quote")
    quotetag.innerHTML = data.value
    
    }  

let getPNGfromServer = async ()=>{
    let response = await fetch(trumpMeme)
    let imgtag = await document.getElementById("img")
    let picture = await response.blob()
    imgtag.src=URL.createObreateObjectUjectURL(picture)
    console.log(URL.cRL(picture))
}

let getInstructorData = async ()=>{
    let response = await fetch(instructorsURL)
    let instructortag = await document.getElementById("instructors")
    let data = await response.json()
    for(let i=0; i<data.length;i++){
        instructortag.innerHTML += ("<div>" + data[i]["name"] + " : " + data[i]["age"] + "<img src=" + data[i]["picURL"] + ">" + "</div>")

    }
    console.log(instructortag)
}
// Note you still need async in the CALLBACK function
document.addEventListener("DOMContentLoaded",async ()=>{

    // You need await when you want to run your code in order
    // IN an async function

    // getDatafromServer()
    // getPNGfromServer()
    getInstructorData()
})
