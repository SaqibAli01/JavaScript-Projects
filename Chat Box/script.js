function sendL(){
    // message jo type kia ha
    let message1 =document.getElementById("message1").value;
    //sms table ki id ha
    let sms= document.getElementById("sms");
    sms.innerHTML += '<tr><td class="smsL_td">'+message1+'</td></tr>'
    rightTable.innerHTML += '<tr><td class="smsR_td">'+message1+'</td></tr>'
    document.getElementById("message1").value='';


}
function sendR(){

    let message2 =document.getElementById("message2").value;
    let smsR= document.getElementById("smsR");
    smsR.innerHTML += '<tr><td class="smsL_td">'+message2+'</td></tr>'
    leftTable.innerHTML += '<tr><td class="smsR_td">'+message2+'</td></tr>'
    
    document.getElementById("message2").value='';
    
}