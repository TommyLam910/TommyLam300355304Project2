var pagesize = 10;
var pageIndex = 1;
var page = 1;
var students = document.getElementsByClassName("contact-item");
var pagination = document.getElementsByClassName('pagination')[0];
var currPage;
var currIndex;

for(let i = 0; i < students.length; i++){
    if(pageIndex <= pagesize)   
       pageIndex++;
    else{
        page++;
        pageIndex = 2;
    }
    students[i].setAttribute('class',"contact-item cf "+page);
    students[i].style.display = 'none';
}

for(let i = 1 ; i <= page; i++){
    var item = document.createElement('li');
    var num = document.createElement('a');
    num.innerHTML = i;

    if(currIndex == null){
        currIndex = num;
        currIndex.setAttribute('class','active');
    }
    if(currPage==null){
        currPage = document.getElementsByClassName(1);
        for(let i = 0; i < currPage.length; i++)
           currPage[i].style.display = '';
    }

    num.href = "javascript:void(0)";
    num.onclick = (e)=>{
      for(let i = 0; i < currPage.length; i++)
        currPage[i].style.display = 'none';

      currIndex.setAttribute('class','');
      currIndex = e.srcElement;
      currIndex.setAttribute('class', 'active');
      var show = document.getElementsByClassName(i);
      for(let i=0; i<show.length;i++){
          show[i].style.display = '';
      }
      currPage = show;
    };
    item.appendChild(num);
    pagination.appendChild(item);
}