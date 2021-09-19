function switchToSignUp(){
    document.getElementById("signIn-box").style.display="none";
    document.getElementById("signUp-box").style.display="block";
}

function switchToSignIn(){
    document.getElementById("signUp-box").style.display="none";
    document.getElementById("signIn-box").style.display="block";
}






function signIn() {
    const email = document.getElementById("iemail").value;
    const password = document.getElementById("ipassword").value;
    console.log(email, password);

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signUp() {
    const email = document.getElementById("uemail").value;
    const password = document.getElementById("upassword").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}


////game\\\

let popped = 0;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon-red"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }    else if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "FAIL!";
                popped++;
                removeEvent(e);
                checkAllPopped();
            }
            else if (e.target.className === "balloonyellow"){
        
                        e.target.style.backgroundColor = "#ededed";
                        e.target.textContent = "FAIL!";
                        popped++;
                        removeEvent(e);
                        checkAllPopped();
                    }
                    else if (e.target.className === "balloongrey"){
        
                                e.target.style.backgroundColor = "#ededed";
                                e.target.textContent = "FAIL!";
                                popped++;
                                removeEvent(e);
                                checkAllPopped();
                            }
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};




/////another balloon app\\\\\





// let popped = 0;

// document.addEventListener('mouseover', function(e){
    
//     if (e.target.className === "balloonred"){
        
//                 e.target.style.backgroundColor = "#ededed";
//                 e.target.textContent = "POP!";
//                 popped++;
//                 removeEvent(e);
//                 checkAllPopped();
//     }   
//     else if (e.target.className === "balloonblue"){
        
//         e.target.style.backgroundColor = "#ededed";
//         e.target.textContent = "FAIL!";
//         popped++;
//         removeEvent(e);
//         checkAllPopped();
//     }
    
//     else if (e.target.className === "balloonyellow"){
        
//         e.target.style.backgroundColor = "#ededed";
//         e.target.textContent = "FAIL!";
//         popped++;
//         removeEvent(e);
//         checkAllPopped();
//     }  
//     else if (e.target.className === "balloongrey"){
        
//         e.target.style.backgroundColor = "#ededed";
//         e.target.textContent = "FAIL!";
//         popped++;
//         removeEvent(e);
//         checkAllPopped();
//     }
// });

// function removeEvent(e){
//     e.target.removeEventListener('mouseover', function(){
        
//     })
// };

// function checkAllPopped(){
//     if (popped === 24){
//         console.log('all popped!');
//         let gallery = document.querySelector('#balloon-gallery');
//         let message = document.querySelector('#yay-no-balloons');
//         gallery.innerHTML = '';
//         message.style.display = 'block';
//     }
// };

// var loginUsrObj = localStorage.getItem("loginObjD");
// loginUsrObj = JSON.parse(loginUsrObj)

// if (!loginUsrObj) {
//     swal({
//         title: "Not Allowed",
//         text: "You are not logged in, please login first",
//         icon: "warning",
//         button: "OK",
//     })
//         .then((value) => {
//             window.location.href = "index.html"

//         });
//     // document.body.innerHTML = `you are not logged in, please go to login page`

// } else {
//     // userName.innerHTML = `Name : ${loginUsrObj.userName}`
//     // userEmail.innerHTML = `Email : ${loginUsrObj.email}`
//     welcomeUser.innerHTML = `Welcome : ${loginUsrObj.userName}`;
//     userLogedIn.innerHTML = `You are now logged in`


//     // getting data from local storage
//     var userData = localStorage.getItem("userLocal1");
//     if (userData === null) {
//         var userData = []

//     } else {

//         userData = JSON.parse(userData)
//     }

//     let userTable = document.getElementById("userTable");

//     for (var i = 0; i < userData.length; i++) {
//         userTable.innerHTML += `
//          <tr>
//             <th scope="row">${i+1}</th>
//             <td>${userData[i].userName}</td>
//             <td>${userData[i].email}</td>
//          </tr>
//     `
//     }

// let popped = 0;

// document.addEventListener('mouseover', function(e){
    
//     if (e.target.className === "balloonred"){
        
//                 e.target.style.backgroundColor = "#ededed";
//                 e.target.textContent = "POP!";
//                 popped++;
//                 removeEvent(e);
//                 checkAllPopped();
//     }   
// });

// function removeEvent(e){
//     e.target.removeEventListener('mouseover', function(){
        
//     })
// };

// function checkAllPopped(){
//     if (popped === 24){
//         console.log('all popped!');
//         let gallery = document.querySelector('#balloon-gallery');
//         let message = document.querySelector('#yay-no-balloons');
//         gallery.innerHTML = '';
//         message.style.display = 'block';
//     }
// };


//     logOut.addEventListener('click', function () {
//         localStorage.removeItem('loginObjD')
//         window.location.href = "index.html"
//         console.log(loginUsrObj)
//     })




// }