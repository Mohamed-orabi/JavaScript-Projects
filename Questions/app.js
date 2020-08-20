//using selectors inside the element

const questions = document.querySelectorAll(".question");

questions.forEach(function(qustion){
    const btn = qustion.querySelector(".question-btn");
    btn.addEventListener("click",function(){

        questions.forEach(function(item){
            if(item !== qustion){
                item.classList.remove("show-text");
            }
        });
        qustion.classList.toggle("show-text");
    });
  
});



// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(e){
//         const questions = e.currentTarget.parentElement.parentElement;
//         questions.classList.toggle("show-text");
//     });
// });