data=[];
let cardId;
function addcard(){
    const popup1= document.querySelector(".addlist");
    const con=document.querySelector(".info")
    popup1.style.display ="block";
    con.style.display="none";
}

function addcardsInFlex(){
const pop=document.querySelector(".addlist");
pop.style.display="none";
const inputdata= document.getElementById("input1").value;
console.log(inputdata);
const item={
    id:new Date().getTime().toString(),
    title:inputdata,
    content:[]
}
if(inputdata){
    data.push(item);
    displaycard();
}
else{
    alert("enter the title")
}


document.getElementById("input1").value = ""; 
const cardHeading = document.querySelector('.cardHeading');
cardHeading.innerHTML = "";

    const navBar = document.querySelector('.head')
    navBar.style.display = 'block'

    const backButton = document.querySelector('.back')
    backButton.style.display = 'none'
}

function displaycard(){
    const container1= document.querySelector(".cardcontainer");
    let child = "";
  for (let i = 0; i < data.length; i++) {
    console.log("data[i]:", data[i]);
    console.log(data[i].title)
    child += `<div id="${data[i].id}" class="card">
    
    <div value="${data[i].title}" onclick ="displayMyCard(${data[i].id}, this.getAttribute('value'))" class="text1">${data[i].title}</div> 
        <hr>
        <ul id="content_list_${data[i].id}">

        </ul>
        <div class="container2">
        <Button onclick="deleteCard(${data[i].id})" class="delete">D</Button>
        <Button onclick="additemstocardpopup(${data[i].id})" class="add">+</Button>
        </div>
        </div>`;
  }
  container1.innerHTML=child;
  renderContents();
  console.log(data)

}
function closecard(){
    const pop=document.querySelector(".addlist");
    pop.style.display="none";
}
function additemstocardpopup(id){
 let popup2 = document.querySelector(".addlist2");
 popup2.style.display="block";
 cardId=id;
}

function deleteCard(id){
    console.log(id)
    let cardId=`${id}`;
    let  card=document.getElementById(cardId);
    card.parentNode.removeChild(card);
    data=data.filter((item)=>item.id!=id)
    console.log(id)

    if(data.length ===0){
         cardContainer= document.querySelector(".info");
        cardContainer.innerHTML="NO ITEM IN TODO LIST";
        console.log(cardContainer)
        cardContainer.style.display="block"
    }
}
function addContentToCard(){
    const contentListId= `content_list_${cardId}`;
    console.log(contentListId)
    const Ul= document.getElementById(contentListId)
const inputtext = document.getElementById("cardinput").value;
console.log(inputtext);
if(!inputtext){
    alert("please add tasks to be added");
} else {
    document.getElementById("cardinput").value="";
    const list = document.createElement("li");
     listid = new Date().getTime().toString();
    list.innerHTML = inputtext;
    
    list.className= "content";
    
    Ul.appendChild(list);  
    removepopup2()
          for(let i=0; i< data.length;i++){
            if(data[i].id==cardId){
                let content = {
                    id : new Date().getTime().toString(),
                    contentText: inputtext,
                    done: false,
                }
                data[i].content.push(content);
                console.log(content)
                
            }
          }
         renderContents();
        }
       
      }

  function removepopup2(){
    let name =document.querySelector(".addlist2");
    name.style.display="none";

  }    
  function renderContents(){
    for (let i = 0; i < data.length; i++) {
       let ulelement = document.getElementById(`content_list_${data[i].id}`);
       let child=""
       for(let j=0;j<data[i].content.length;j++){
           let content = data[i].content[j];
           child += `<li class = "content ${content.done ? "checked":""}" id="content_${content.id}" onclick ="doneTask(${content.id}, ${data[i].id})">${content.contentText}</li>`
           console.log(data[i])        
       }
       ulelement.innerHTML = child;
    }  
 }


 function doneTask(taskid, cardId){
  console.log(taskid,cardId)  
    const contentId= `content_${taskid}`;
    const liElement =document.getElementById(contentId);
    liElement.classList.toggle("checked");
     for(let i=0;i<data.length;i++){
      if(data[i].id ==cardId){
        for(let j=0;j<data[i].content.length;j++){
          const content = data[i].content[j];
          if(content.id == taskid){
            data[i].content[j].done =!data[i].content[j].done;
  
          }
        }
      } 
     }
  }


  function displayMyCard(id, value){
    const addbtn1 = document.querySelector('.button1'); 
    addbtn1.style.display = "block";
  
    const cardHeading = document.querySelector('.cardHeading');
    cardHeading.innerHTML = value;

    const cards = document.querySelectorAll('.card')
    cards.forEach(allcards => {
        allcards.style.display ='none';
    });
    const cardToShow = document.getElementById(id);
    cardToShow.style.display = 'block'

    const navBar = document.querySelector('.head')
    navBar.style.display = 'none'

    const backButton = document.querySelector('.back')
    backButton.style.display = 'block'
}


function openPage1(){
  
    const cards = document.querySelectorAll('.card');
    const cardHeading = document.querySelector('.cardHeading');
   cardHeading.innerHTML = "";
    cards.forEach(allcards => {
        allcards.style.display ='block';
    });
    const navBar = document.querySelector('.head')
    navBar.style.display = 'block'

    const backButton = document.querySelector('.back')
    backButton.style.display = 'none'

}


  



  