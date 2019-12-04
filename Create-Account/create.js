const c = document.getElementById("create");
const h = document.getElementById("home");
const s = document.getElementById("show");


const row2 = document.getElementById("form");
const row1 = document.getElementById("img");
const row3 = document.getElementById("tab");

c.addEventListener('click', function() {
    row2.style.display = "block"
    row1.style.display = "none"
    row3.style.display = "none"


})

s.addEventListener('click', function() {
    row3.style.display = "block"
    row1.style.display = "none"
    row2.style.display = "none"


})

h.addEventListener('click', function() {
    row3.style.display = "none"
    row2.style.display = "none"

    row1.style.display = "block"

})

//Show password
function myFunction() {
    var x = document.getElementById("i3");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}



var flag = 0;



const ip1 = document.getElementById('i1');
const ip2 = document.getElementById('i2');
const ip3 = document.getElementById('i3');





let user = document.forms['createFrm']['username']
let phn = document.forms['createFrm']['phone']
let pass = document.forms['createFrm']['password']
let emailID = document.forms['createFrm']['email']
let pass1 = document.forms['createFrm']['password1']





// function createAccount() {

//     if (user.value.trim().length == " " || user.value.trim().length < 3) {
//         let user1 = document.getElementById("item")
//         user1.style.display = "block"
//         flag = 1;
//         return flag

//     } else {
//         let user1 = document.getElementById("item")
//         user1.style.display = "none"
//         flag = 0;

//     }

//     var emailID = emailEle.value;
//     atpos = emailID.indexOf("@");
//     dotpos = emailID.lastIndexOf(".");


//     if (atpos < 1 || (dotpos - atpos < 2)) {
//         let eEle = document.getElementById("item3")
//         eEle.style.display = "block"
//         flag = 1;
//         return flag

//     } else {
//         let eEle = document.getElementById("item3")
//         eEle.style.display = "none"
//         flag = 0;

//     }

//     if (phn.value.trim().length !== 10) {
//         let phn1 = document.getElementById("item1")
//         phn1.style.display = "block"
//         flag = 1;
//         return flag
//     } else {
//         let phn1 = document.getElementById("item1")
//         phn1.style.display = "none"
//         flag = 0;

//     }

//     if (pass.value.trim() < 1 || pass.value.trim() > 10) {
//         let pass1 = document.getElementById("item2")
//         pass1.style.display = "block"
//         flag = 1;
//         return flag
//     } else {
//         let pass1 = document.getElementById("item2")
//         pass1.style.display = "none"
//         flag = 0;

//     }

//     if (pass1.value.trim() !== pass.value.trim() {
//             let pass1 = document.getElementById("item5")
//             pass1.style.display = "block"
//             flag = 1;
//             return flag
//         } else {
//             let pass1 = document.getElementById("item5")
//             pass1.style.display = "none"
//             flag = 0;

//         }



//         if (flag === 0) {
//             alert("Success submitted")

//         }





//     }