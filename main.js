const invalidFname = document.getElementById("invalidfname");
const invalidLname = document.getElementById("invalidlname");
const invalidPhone = document.getElementById("invalidphone");
const invalidMail = document.getElementById("invalidmail");
const invalidPassword = document.getElementById("invalidpassword");
const invalidConfirmPassword = document.getElementById("invalidcomform");
const invalidImage = document.getElementById("invalidimage");


const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const phoneNum= document.getElementById("Phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const conformPassword = document.getElementById("conformPassword");
const image = document.getElementById("image");
const emailRegex=/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const phoneNumberRegex = /^01[0125][0-9]{8}$/;
const form = document.getElementById('form');
const formBtn = document.getElementById('formBtn');

const formInputValues = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
    file:null
}
let emailvalid,fnamevalid,lnamevalid,passvalid,confirmpassvalid,televalid,filevalid=false;


firstName.addEventListener('input',(event)=>{
    let fnvalue=event.target.value;
    if(fnvalue.length>10||fnvalue.trim().length==0){
        invalidFname.style.display='block';
        firstName.style.border="2px solid red";
        fnamevalid=false;
    }
    else{
        invalidFname.style.display='none';
        firstName.style.border='2px solid cornflowerblue';
        fnamevalid=true;
        formInputValues.firstName=fnvalue;
    }
})

lastName.addEventListener('input',(event)=>{
    let lnvalue=event.target.value;
    if(lnvalue.length>10||lnvalue.trim().length==0){
        invalidLname.style.display='block';
        lastName.style.border="2px solid red";
        lnamevalid=false;
    }
    else{
        invalidLname.style.display='none';
        lastName.style.border='2px solid cornflowerblue';
        lnamevalid=true;
        formInputValues.lastName=lnvalue;
    }
})

email.addEventListener('input',(event)=>{
    let emailvalue=event.target.value
    if(emailRegex.test(emailvalue)){
        invalidMail.style.display='none';
        email.style.border='2px solid cornflowerblue';
        emailvalid=true;
        formInputValues.email=emailvalue;
    }
    else{
        invalidMail.style.display='block';
        email.style.border='2px solid red';
        emailvalid=false;
    }
})

password.addEventListener('input',(event)=>{
    let passvalue=event.target.value
    if(passwordRegex.test(passvalue)){
        invalidPassword.style.display='none';
        pass.style.border='2px solid cornflowerblue';
        passvalid=true;
        formInputValues.password=passvalue;

    }
    else{
        invalidPassword.style.display='block';
        pass.style.border='2px solid red';
        passvalid=false;
    }
})
conformPassword.addEventListener('input',(event)=>{
    let confirmpassvalue=event.target.value
    if(confirmpassvalue==password.value){
        invalidConfirmPassword.style.display='none';
        conformPassword.style.border='2px solid cornflowerblue';
        confirmpassvalid=true;
        formInputValues.confirmPassword=confirmpassvalue;
    }
    else{
        invalidConfirmPassword.style.display='block';
        conformPassword.style.border='2px solid red';
        confirmpassvalid=false;
    }
})



phoneNum.addEventListener('input',(event)=>{
    let televalue=event.target.value;
    if(phoneNumberRegex.test(televalue)){
        invalidPhone.style.display='none'
        phoneNum.style.border='2px solid cornflowerblue'
        televalid=true
        formInputValues.phoneNumber=televalue
    }
    else{
        invalidPhone.style.display='block'
        phoneNum.style.border='2px solid red'
        televalid=false
    }
})

image.addEventListener('change',(event)=>{
   let filedata=event.target.files[0]
   console.log(filedata)
    if(filedata.type=='image/png'||filedata.type=='image/jpg'){
    filevalid=true;
    invalidImage.style.display='none';
    image.style.border='2px solid cornflowerblue';
    formInputValues.image=filedata;
}
else{
    filevalid=false;
    invalidImage.style.display='block';
    image.style.border='2px solid red';
}
})

formBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let isFormValid = true;

    const inputs = document.querySelectorAll('input');
    inputs.forEach((input) => {
        if (input.value.trim().length == 0 || input.style.borderColor === 'red') {
            input.style.border = '2px solid red';
            isFormValid = false;
        }
    })

    if (isFormValid) {
        alert("Registration successful");
        console.log(formInputValues);
    } else {
        alert("Please correct the errors in the form before submitting.");
    }
});

    