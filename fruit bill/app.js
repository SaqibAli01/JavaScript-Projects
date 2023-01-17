function getBill()
{
    let dishes = document.querySelectorAll('.dish');
    
    console.log(dishes);
    
    //ye function her ak dish ko utha k ly k ay
    
    let total = 0;
    dishes.forEach((dish)=>
    {
    let dishname = dish.parentNode.previousElementSibling.previousElementSibling.innerText;
    if (dish.checked) {
        // background color 
        dish.parentNode.parentNode.style.backgroundColor = "limegreen";



        //riata select krny k lia ye auto select ho jy ga
        if ((dishname  == 'Biryani')  || (dishname == 'Chicken Kebab')) {
            riata.checked = true;
            salad.checked = true;
            //////// ye biryani k shat us ki  qty k matbiq ly gy salad or raita 
            let biryaniQuantity =+biryani.parentNode.nextElementSibling.children[0].value;
            let chickenQuantity =+chicken.parentNode.nextElementSibling.children[0].value;
            let totalQuantity=biryaniQuantity+chickenQuantity;
            riata.parentNode.nextElementSibling.children[0].value = totalQuantity;
            salad.parentNode.nextElementSibling.children[0].value = totalQuantity;

        }
        

        //qty k    lia + number me lny k lia 

        let qty = +dish.parentNode.nextElementSibling.children[0].value;

        //agr qty empty ha to 
        if (!qty) {
            dish.parentNode.nextElementSibling.children[0].value = 1;
            qty = 1;
        }
    // dish ko total kr dy ga
    // total +=  +dish.parentNode.previousElementSibling.innerText;
    total +=  qty * dish.parentNode.previousElementSibling.innerText;
    
}



})

   totalBill.innerText =  NetBills.innerText =  total;

if (total > 1000) {
    //total bill agr 1000 sy zada ha to 10% discount ho ga
    NetBills.innerText = total * 0.9
}

}

function report1() {
    let dishes = document.querySelectorAll('.dish');

    dishes.forEach((dish)=>{
        let dishname = dish.parentNode.previousElementSibling.previousElementSibling.innerText;
        let totals = +dish.parentNode.previousElementSibling.innerText;
        let qty = +dish.parentNode.nextElementSibling.children[0].value;
        let sum = totals  

        
        if (dish.checked) {
            // report.innerHTML = '';
            
            report.innerHTML +='<tr><td>' +dishname+ '</td> <td>' +qty+'</td> <td>'+totals+'</td> </tr>'
        }
        return
    })
    
    
}