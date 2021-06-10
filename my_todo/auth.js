console.log("v.2.2");

// const submitInput = document.querySelector('#btn');
// document.querySelector('#username').value;

const container = document.querySelector('.container'),
 form = container.querySelectorAll('.form'),
 formButton = form[0].querySelector('input[type="submit"]');


function getInput(e){
    e.preventDefault();
    var formData = new FormData(form[0]);

    console.log("Username:" + " " + formData.get('username') +" "+ 'password:' +  " "+ formData.get('password') + 
    " " + "EmailAddress:" + " " + formData.get('email') + " " + "comfirmPassword:" + " " + formData.get('comfirmPassword'));
}




document.addEventListener('DOMContentLoaded', function(){
    formButton .addEventListener('click', getInput,false);
}, false);

//  document.addEventListener('DOMContentLoaded', ()=>{
//      formButton.add('click', getInput, false);
//  }, false);

//  function getInput(e){
//     e.preventDefault();
//      const inputData = Array.from(document.querySelectorAll(formContent)).reduce((acc, input) =>({
//         ...acc,[input.id]: input.value
//     }), {})
//     console.log(
//         inputData
//     );
// }

// document.querySelectorAll('#login input');

// Array.from(document.querySelectorAll('#login input')).reduce((acc, input) =>({
//     ...acc,[input.id]: input.value
// }), {});




