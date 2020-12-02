 

 window.onload=function(){

    show(0);

 }



 let questions =[

{
id:1,
question:"What is the full form of RAM",
answer:"Random Acess Memory",

options:[

"Random Acess Memory",
"Ram Aces Memory",
"R A M",
"None Of The Above"
]
},



{
    id:2,
    question:"What is the full form of E-Mail",
    answer:"Electronics Mail",
    
    options:[
    
    "Electronics Mail",
    "MLAlals",
    "Emmnce",
    "None Of The Above"
    ]
    }


 ];




function submitForm(e) {
    e.preventDefault();
    let name =document.forms["welcome_form"]["name"].value;
sessionStorage.setItem("name",name);
location.href="quiz.html"
 


}

let question_count =0;
let points=0;

function next(){

    if(question_count==questions.length-1){

location.href="endpage.html";
return;

    }

    let user_option=document.querySelector("li.option.active").innerHTML;
    console.log(user_option);
    if(user_option==questions[question_count].answer){
       points +=10;
       sessionStorage.setItem("points", points);
           console.log(points);


    }
     
    question_count++;
    show(question_count);



}



function show(count){

let question=document.getElementById("questions");
// question.innerHTML= "<h2>"+ questions[count].question+"</h2>";

question.innerHTML=`<h2>${questions[count].question}</h2>


<ul class="option_group">
        <li class="option active"> ${questions[count].options[0]}</li>
      <li class="option"> ${questions[count].options[1]}</li>
       <li class="option"> ${questions[count].options[2]}</li>
       <li class="option"> ${questions[count].options[3]}</li>
    </ul>  


`;
toggleActive();


}


function toggleActive(){

let option=document.querySelectorAll("li.option");
for(let i=0; i<option.length;i++){

option[i].onclick=function(){
    for(let i=0;i<option.length;i++){

        if(option[i].classList.contains("active")){
         option[i].classList.remove("active");

        }
    }
    
    option[i].classList.add("active");

};
}
}
 