//using selectors inside the element
const questions = document.querySelectorAll(".question")
questions.forEach(function(item){
  const btn = item.querySelector(".question-btn")
  btn.addEventListener("click",function(){

    questions.forEach(function(question){
      if(question != item){
        question.classList.remove("show-text")
      }
    })
    item.classList.toggle("show-text")
  })

})


// traversing the dom

// const btns = document.querySelectorAll(".question-btn")

// btns.forEach(function(btn){
//   btn.addEventListener("click",function(e){
//     const question = e.currentTarget.parentElement.parentElement
//     question.classList.toggle("show-text")
//   })
// })
