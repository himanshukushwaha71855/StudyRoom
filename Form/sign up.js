let signupbtn = document.querySelector('.signupbtn');
let signinbtn = document.querySelector('.disable signinbtn');
let namefield = document.querySelector('.namefield');
let title = document.querySelector('.title');
let underline = document.querySelector('.underline');

signinbtn.addEventListener('click',()=>{
    namefield.computedStyleMap.maxHeight = 0;
})
function namefield