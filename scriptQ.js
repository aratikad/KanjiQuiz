const quizDB=[
 {
 	question:"1.物事",
 	a:"ぶつじ",
 	b:"ぶつごと",
 	c:"ものじ",
 	d:"ものごと",
 	ans:"ans4"
 },
{
 	question:"2.がいこう",
 	a:"外父",
 	b:"外交",
 	c:"外効",
 	d:"外較",
 	ans:"ans2"
},
{
	question:"3.実行",
 	a:"じっこ",
 	b:"じっこう",
 	c:"じつぎょ",
 	d:"じつぎょう",
 	ans:"ans2"
},
{
 	question:"4.輸出",
 	a:"ゆしゅつ",
 	b:"しゅしゅつ",
 	c:"ゆうしゅつ",
 	d:"しゅうしゅつ",
 	ans:"ans1"
}

]



const question=document.querySelector('.question');
const option1=document.querySelector('#option1');
const option2=document.querySelector('#option2');
const option3=document.querySelector('#option3');
const option4=document.querySelector('#option4');
const submit=document.querySelector('#submit');
const answers=document.querySelectorAll('.answer');
// const showScore=document.querySelectorAll('#showScore');
 const scoreArea=document.querySelectorAll('.scoreArea');
let showScore=document.getElementById('showScore');

let questionCount=0;
let score=0;

const loadQuestion =()=>
{


	// question.innerText=quizDB[questionCount].question;


	const questionlist=quizDB[questionCount];

      question.innerText=questionlist.question;
      option1.innerText=questionlist.a;
      option2.innerText=questionlist.b;
      option3.innerText=questionlist.c;
      option4.innerText=questionlist.d;
}



 loadQuestion();


const getcheckAnswer=()=>
{
	let answer;

	answers.forEach((curAnsElem)=>
	{
		if(curAnsElem.checked)
		  {	
		  	answer=curAnsElem.id;
		  }
	});
		return answer;
};


const deselectAll=()=>
{
	answers.forEach((curAnsElem)=>curAnsElem.checked=false);

}

// submit.addEventListener('click',()=>{})

submit.addEventListener('click',()=>
	  {
	  		const checkedAnswer=getcheckAnswer();
	  		
	  		if(checkedAnswer===quizDB[questionCount].ans)
	  			{
	  				score++;
	  				console.log("You Scored"+score);
	  		
	  			};


	  					questionCount++;

	  					deselectAll();
				
			    if(questionCount<quizDB.length)
	  			{
	  				loadQuestion();
	  			}
	  			 else
	  			 {
			showScore.innerHTML=`<h3>    You Scored   ${score}/${quizDB.length} !!!.. </h3> <button class="btn" onclick="location.reload()"> Play Again</button>`;
	  			
	  		 	  showScore.classList.remove('scoreArea');
	  			}




	  });  

  
    
  
 