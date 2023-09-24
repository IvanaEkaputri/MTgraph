var namefield=document.getElementById("name")
var emailfield=document.getElementById("email")
var phonefield=document.getElementById ("phone")
var countryselect=document.getElementById("country")
var agreement=document.getElementById("check")

function submitdata(){
    let nameval =namefield.value
    if(nameval.length<5){
        alert("Username must have 5 characters at least!")
        return false;
    }
    let valid=/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    if(valid.text(emailfield)){
        alert("Your email is not valid!")
        return false;
    }
    let chosencountry = countryselect.options
    [countryselect.selectedindex].value
    if(chosencountry==""||chosencountry==undefined||
    chosencountry==null){
        alert("Choose a country !")
        return false;
    }
    let phonenumber = phonefield.value
    if(phonefield(0)!=0||phonenumber.length<11){
        alert("Your phone number is not valid!")
        return false;
    }
    return true;
}