//*1013movie.js*//

// 1. focus,Event로 글씨 쓰는 곳 생성.  (click event는 너무 어려울 가능성이 높다 ㅠ)
// 2. class가 힌트
//내 틀린 답
// var Movie_name = document.querySelector('#Movie_name');
// var result_1 = document.querySelector('#result_1');

// //포커스(클릭?) 될 시 이벤트 발생
// Movie_name.onfocus = function (e){
//     result_1.innerHTML = "영화 제목";
// };
// Movie_name.onblur = function (e){
//     if(Movie_name.value/length !=< 1){
//         ("영화 제목을 입력하시오");
//     }
//     result_1.innerHTML = "영화이름 입력 완료";
// };

//선생님 답!
window.onload = function(){
    var input = document.getElementsByClassName('movie');
    for(var i in input){
        input[i].addEventListener('focus',function(){
            this.classList.add('active');
        });
        input[i].addEventListener('blur',function(){
            this.classList.remove('active');
        });
    }
};