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
            //拼接html显示图片
            var htmlImgs='',rotate=360/picsPath.length;
            for(var i=0;i<picsPath.length;i++){
                htmlImgs+='<img src=\"'+picsPath[i]+'\">';
            }
            var stage=document.getElementById('stage');
            stage.innerHTML=htmlImgs;
            //让图片成为旋转木马布局
            var transZ=(stage.offsetWidth/2)/
                    Math.tan((rotate/2/180)*Math.PI);
            var imgs=Array.prototype.slice.call(
                stage.getElementsByTagName('img'),0);
            for(var i=0;i<imgs.length;i++){
                imgs[i].style.transform=
                'rotateY('+i*rotate+'deg) translateZ('+(transZ+20)+'px)';
            }
            //给container绑定点击事件
            stage.onclick=function(){
                this.style.transform=
                    'rotateY('+(-1*rotate*++index)+'deg)';
            };
        }
        window.onload=function(){
            //动态显示所有图片
            showImg();
        };


