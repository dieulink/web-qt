function nextSlide() {
  const formlist = document.getElementById('formlist');
  const itemWidth = document.querySelector('.item').offsetWidth;
  formlist.scrollLeft += itemWidth;
  const totalWidth = formlist.scrollWidth;
  const visibleWidth = formlist.offsetWidth;
  const isAtEnd = formlist.scrollLeft + visibleWidth >= totalWidth;
  if (isAtEnd) {
    formlist.scrollLeft = 0; 
  }
}
setInterval(nextSlide, 4000);
document.getElementById('next').onclick = nextSlide;
document.getElementById('prev').onclick = function() {
  const formlist = document.getElementById('formlist');
  const itemWidth = document.querySelector('.item').offsetWidth;
  formlist.scrollLeft -= itemWidth;
  const isAtStart = formlist.scrollLeft === 0;
  if (isAtStart) {
    formlist.scrollLeft = formlist.scrollWidth - visibleWidth; 
  }
};
