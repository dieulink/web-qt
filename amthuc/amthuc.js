document.getElementById('sau').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formamthuc').scrollLeft += widthItem;
    }
    document.getElementById('truoc').onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById('formamthuc').scrollLeft -= widthItem;
    }
    