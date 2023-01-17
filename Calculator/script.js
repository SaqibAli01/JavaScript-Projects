function addnum(num){
    // console.log(num)  //ye console me value dy raha ha
    // alert(num)
    let result = document.getElementById('result');
    result.value += num; // ab ye result screen me show ho ga
}
//on btn 
function on()
{
    let result = document.getElementById('result');
    result.value ="0";
}
//clear btn 
function clearResult()
{
    let result = document.getElementById('result');
    result.value ="";
}
//off btn 
function off()
{
    let result = document.getElementById('result');
    result.value ="";
}
//ab sub btn pr coding ki ha 12345789
function getresult()
{
    let result = document.getElementById('result');
    console.log(result.value); // is sy pata chal jata ha value sahi ja rahi h k ni
    result.value = eval(result.value);
}
// back button coddng
function back()
{
    let result = document.getElementById('result');

    result.value = result.value.slice(0,-1)
    
}