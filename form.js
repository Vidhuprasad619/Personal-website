
const nameValidation = () =>{
    let text = document.getElementById('inputName').value;
    let regex = /^([A-Za-z\.]+)$/;
    if(regex.test(text)){
        document.getElementById('error-name').innerHTML="";
        return true;
    }else{
        document.getElementById('error-name').innerHTML="Eneter correct name";
        document.getElementById('error-name').style.color="red";
        return false;
    }
}

const mobileValidation = () =>{
    let text = document.getElementById('inputMobile').value;
    let regex = /^([0-9]{10})$/;
    if(regex.test(text)){
        document.getElementById('error-mobile').innerHTML="";
        return true;
    }else{
        document.getElementById('error-mobile').innerHTML="Eneter correct mob number";
        document.getElementById('error-mobile').style.color="red";
        return false;
    }
}

const emailValidation = () =>{
    let text = document.getElementById('inputEmail1').value;
    let regex = /^([A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,})$/;
    if(regex.test(text)){
        document.getElementById('error-email').innerHTML="";
        return true;
    }else{
        document.getElementById('error-email').innerHTML="Eneter correct email";
        document.getElementById('error-email').style.color="red";
        return false;
    }
}

const formValidation = () =>{
    nameValidation();
    mobileValidation();
    emailValidation();
    if(nameValidation() && mobileValidation() && emailValidation()){
        return true;
    }else{
        return false;
    }
}