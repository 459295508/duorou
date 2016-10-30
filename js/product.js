/**
 * Created by Administrator on 2016/9/17.
 */
window.onload=function(){
    var oUl=document.getElementById('tab');
    var aLi=oUl.getElementsByTagName('li');
    var oDiv=document.getElementById('tab_content');
    var aDiv=oDiv.getElementsByTagName('div');
    //alert(aDiv.length);
    for(var i=0;i<aLi.length;i++){
        aLi[i].index=i;
        aLi[i].onclick=function(){
            for(var i=0;i<aLi.length;i++){
                aLi[i].className='';
                aDiv[i].style.opacity='0';
            }
            this.className+=' active';
            aDiv[this.index].style.opacity='1';
        }
    }
};
