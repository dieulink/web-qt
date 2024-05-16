let listlichsu =document.querySelector('.lichsu .listlichsu');
let item = document.querySelectorAll('.lichsu .listlichsu .item');
let dots = document.querySelectorAll('.lichsu .dots li');
let lui = document.getElementById('lui');
let toi = document.getElementById('toi');
let active = 0;
let lengthItem =item.length-1;
toi.onclick = function(){
    if (active+1>lengthItem){
        active=0;
    }
    else{
        active=active+1;
    }
    reloadSlider();

}
lui.onclick = function(){
   if (active-1 <0){
    active=lengthItem;
   } 
   else{
    active=active-1;
   }
   reloadSlider();
}
function reloadSlider(){
    let checkLeft = item[active].offsetLeft;
    listlichsu.style.left = -checkLeft +'px';
    let lastActiveDot =document.querySelector('.lichsu .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active')
}