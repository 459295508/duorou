/**
 * Created by Administrator on 2016/9/20.
 */
var picsPath=[
    'images/t-show1.png',
    'images/t-show3.png',
    'images/t-show4.png',
    'images/t-show6.png',
    'images/t-show7.png',
    'images/t-show9.png'
];
var index=0;
function showImg(){
            //ƴ��html��ʾͼƬ
            var htmlImgs='',rotate=360/picsPath.length;
            for(var i=0;i<picsPath.length;i++){
                htmlImgs+='<img src=\"'+picsPath[i]+'\">';
            }
            var stage=document.getElementById('stage');
            stage.innerHTML=htmlImgs;
            //��ͼƬ��Ϊ��תľ����
            var transZ=(stage.offsetWidth/2)/
                    Math.tan((rotate/2/180)*Math.PI);
            var imgs=Array.prototype.slice.call(
                stage.getElementsByTagName('img'),0);
            for(var i=0;i<imgs.length;i++){
                imgs[i].style.transform=
                'rotateY('+i*rotate+'deg) translateZ('+(transZ+20)+'px)';
            }
            //��container�󶨵���¼�
            stage.onclick=function(){
                this.style.transform=
                    'rotateY('+(-1*rotate*++index)+'deg)';
            };
        }
        window.onload=function(){
            //��̬��ʾ����ͼƬ
            showImg();
        };


