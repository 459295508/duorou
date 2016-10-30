
window.onload=function()
{
    toMove('move');
};
function toMove(o)
{
    var obj=document.getElementById(o);
    if(!obj)return;
    var aDiv=obj.getElementsByTagName('div');
    var oUp=getClass('top');
    var oDown=getClass('bottom');
    var oWrap=getClass('wrap');
    var oUl=document.getElementById('ul');
    var oLi=oUl.getElementsByTagName('li');
    var oTime=null;
    var iMs=30;
    var i=0;
    var iNum=5;
    var toggle=-1;

    oUl.innerHTML+=oUl.innerHTML;

    oUp.onclick=function(){ toggle=-1; autoPlay(toggle); };
    oDown.onclick=function(){ toggle=1; autoPlay(toggle); };

    oUp.onmouseover=oDown.onmouseover=function(){ this.style.filter='alpha(opacity:100)'; this.style.opacity=1; };
    oUp.onmouseout=oDown.onmouseout=function(){ this.style.filter='alpha(opacity:60)'; this.style.opacity=0.6; };

    function autoPlay(toggle)
    {
        if(oTime)
        {
            clearInterval(oTime);
        }
        oTime=setInterval(function(){

            iNum+=2*toggle;

            if(iNum>0)
            {
                iNum=-oLi.length*oLi[0].offsetHeight/2;
            }
            if(Math.abs(iNum)>oLi.length*oLi[0].offsetHeight/2)
            {
                iNum=0;
            }
            oUl.style.top=iNum+'px';

        }, iMs);
    }
    autoPlay(toggle);

    function getClass(sName)
    {
        for(i=0; i<aDiv.length; i++)
        {
            if(aDiv[i].className==sName)
            {
                return aDiv[i];
            }
        }
    }
}