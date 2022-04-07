var isMin = (value, length=2) => value.length < length;

function validateEmail(form) {
    var x=form.email.value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
        form.email.style.marginBottom = "5px";
        document.getElementById("emailloc").innerHTML="Please enter a valid e-mail address";
        return false;  
    } else{
        document.getElementById("emailloc").innerHTML="";
        form.email.style.marginBottom = "22px";
        return true;
    }
}
function validateName(){
    var name=document.myform.name.value;
    document.myform.name.style.marginBottom = "5px";
    if(name==null || isMin(name,1)){  
        document.getElementById("nameloc").innerHTML="Name can't be blank!!";    
        return false;  
    }else if(isMin(name,3)){  
        document.getElementById("nameloc").innerHTML="Name must be at least 3 characters";    
        return false;  
    }else{
        document.getElementById("nameloc").innerHTML=""; 
        document.myform.name.style.marginBottom = "22px";
        return true; 
    }
} 
var telCodeCheck = (tel) => !(/^\+\d{2}$/).test(tel);
var telCheck = (tel) => !(/^\d{10}$/).test(tel);

function validateTel(myform) {
    var telCode=myform.telCode.value;
    var tel = myform.tel.value;  
    if (telCode == null || isMin(telCode,1) || telCodeCheck(telCode)){  
        document.getElementById("telloc").innerHTML="Please enter a valid Country Code";
        return false;  
    }else if (tel == null || isMin(tel,1) || telCheck(tel)){  
        document.getElementById("telloc").innerHTML="Please enter a valid Mobile Number";
        return false;  
    } else{
        document.getElementById("telloc").innerHTML="";
        return true;
    }
}
function validateFullName(myform) {
    var fname=myform.fname.value;
    var lname = myform.lname.value;  
    if (fname == null || isMin(fname,3)){  
        document.getElementById("nameloc").innerHTML="Enter valid First Name with minimum 3 characters";
        return false;  
    }else if (lname == null || isMin(lname,3)){  
        document.getElementById("nameloc").innerHTML="Enter valid Last Name with minimum 3 characters";
        return false;  
    } else{
        document.getElementById("nameloc").innerHTML="";
        return true;
    }
}

function validateContact(){
    myform = document.myform;
    return validateName() && validateEmail(myform);
}

function validateRegist(){
    form1 = document.form1;
    return validateFullName(form1) && validateEmail(form1) && validateTel(form1);
}
