const pcode = document.getElementById('pid');
const pname = document.getElementById('pname');
const pqty = document.getElementById('pqantity');
const prs = document.getElementById('pprice');
const addbtn = document.getElementById('add');
const rightBox = document.getElementById('box');
let selectedRow =null;
let i=0;
addbtn.addEventListener('click',()=>{
    if(pcode.value!='' && pname.value!='' && pqty.value!='' && prs.value!='' ){
    if(selectedRow==null){
        newRow();
        i++;
        console.log(i);
    }
    else if(selectedRow!=null){
          updaterow();
    } 
}
else{
    alert("Fill the mandatory fields")
} 
})
if(i>=6){
    rightBox.style.overflow ="scroll";

}

rightBox.addEventListener('click',(e)=>{
    //for delete btn
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    //for reset btn
    else if(e.target.classList.contains('reset')){
         selectedRow = e.target.closest('.product')
        let nodeList = selectedRow.querySelectorAll('span');
        let arr = Array.from(nodeList);
        // arr.forEach((x)=>{
        //   console.log(x.textContent)
        // })
        //getting value from record into input feilds
        pcode.value=arr[0].textContent;
        pname.value=arr[1].textContent;
        pqty.value=arr[2].textContent;
        prs.value=arr[3].textContent;   
    }
})

function newRow(){
    let prod = document.createElement('div');
    prod.classList.add('product')
    //input 1
    let procode = document.createElement('span')
    procode.id='prodcode';
    procode.innerHTML =pcode.value;
    prod.appendChild(procode);
    //input 2
    let proname = document.createElement('span')
    proname.id='prodname'
    proname.innerHTML =pname.value;
    prod.appendChild(proname);
    //input 3
    let proqty = document.createElement('span')
    proqty.id="prodqty"
    proqty.innerHTML =pqty.value;
    prod.appendChild(proqty);
    //input 4
    let prors = document.createElement('span')
    prors.id='prodrs'
    prors.innerHTML =prs.value;
    prod.appendChild(prors);
    
    //btn
    let rset =document.createElement('button');
    rset.textContent= "Reset";
    rset.classList.add("reset");
    prod.appendChild(rset);
    // rset.id ="reset"; 

    let del =document.createElement('button');
    del.textContent ="Delete";
    del.classList.add("delete");
    prod.appendChild(del);
    // del.id ="delete" // to add id
    // to add event listener
    // del.addEventListener('click',()=>{
    //     alert("btn clicked")
    // });
    rightBox.appendChild(prod);
    resetField();
}
function updaterow(){
    let nodeList = selectedRow.querySelectorAll('span');
    let arr = Array.from(nodeList);
    arr[0].innerHTML=pcode.value;
    arr[1].innerHTML=pname.value;
    arr[2].innerHTML=pqty.value;
    arr[3].innerHTML=prs.value; 
    resetField();  
}
function resetField(){
     //reset input filed
     pcode.value='';
     pname.value='';
     pqty.value='';
     prs.value='';

}
