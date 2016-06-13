$(function(){
        var headshou=$("#head-shou");
        var ewm=$(".ewm")[0];
        headshou.onmouseover=function(){
            ewm.style.display="block";
        }
        headshou.onmouseout=function(){
            ewm.style.display="none";
        }
    // 二维码区域完
        var login=$("#login");
        var loginway=$(".loginway")[0];
        var logina=$(".login-a")[0];
        login.onmouseover=function(){
            loginway.style.display="block";
            logina.style.color="#25B2fe";

        }
        login.onmouseout=function(){
            loginway.style.display="none";
        }
    // 登录方式完
        var taiyuan=$(".taiyuan")[0];
        var xuandi=$(".xuandi")[0];
        taiyuan.onclick=function(){
            xuandi.style.display="block";
        }
    //地址完

        var navlis=$(".nav-lis");
        var navax=$(".nav-a-x");
        for(var i=0;i<navlis.length;i++){
            navlis[i].index=i;
          navlis[i].onmouseover=function(){
            for(var i=0;i<navlis.length;i++){
                navax[i].style.display="none";
            }
          navax[this.index].style.display="block";
        }
          navlis[i].onmouseout=function(){
          navax[this.index].style.display="none";
        }
           
        }
        // 二级菜单完


        var banner=$(".banner")[0];
        var imgb=$(".imgb");
        var circle=$(".circle");
        var zuohua=$(".changfang")[0];
        var youhua=$(".changfang-two")[0];
        var n=0;
        var next=0;
        var t=setInterval(move,2000);
        function move(){
            next=n+1;
            if(next>=imgb.length){
                next=0;
            }
            for(var i=0;i<imgb.length;i++){
            circle[i].style.background="#ccc";
            imgb[i].style.opacity=0;
            }
            imgb[n].style.opacity=1;
            circle[n].style.background="#E82471";
            animate(imgb[n],{opacity:0},500);
            animate(imgb[next],{opacity:1},500);
            
            n=next;
        }
        function move1(){
            next=n-1;
            if(next<0){
                next=imgb.length-1;
            }
            for(var i=0;i<imgb.length;i++){
                circle[i].style.background="#ccc";
                imgb[i].style.opacity=0;
            }
            imgb[n].style.opacity=1;
            circle[n].style.background="#E82471";
            animate(imgb[n],{opacity:0},500);
            animate(imgb[next],{opacity:1},500);
            n=next;
        }
        banner.onmouseover=function(){
        clearInterval(t);
        zuohua.style.display="block";
        youhua.style.display="block";
        }
        banner.onmouseout=function(){
        t=setInterval(move,2000);
        zuohua.style.display="none";
        youhua.style.display="none";
        }
        zuohua.onclick=function(){
            move1();
        }
        youhua.onclick=function(){
            move();
        }
        for(var i=0;i<circle.length;i++){
            circle[i].index=i;
            circle[i].onmouseover=function(){
                for(i=0;i<circle.length;i++){
                    circle[i].style.background="#ccc";
                    imgb[i].style.opacity=0;
                }
                circle[this.index].style.background="#E82471";
                imgb[this.index].style.opacity=1;
           }
        }
        // banner图结束
    var window=$(".window")[0]; 
    var xiaolunbo=$(".xiaolunbo");
    var zuojian=$(".zuojian")[0];
    var youjian=$(".youjian")[0];
    var aa=0;
    var  bb=0;
    var cc=setInterval(dd,3000);
    var kuan=parseInt(getStyle(xiaolunbo[0],"width"));
    function ee(){
        bb=aa+1;
        if(bb>=xiaolunbo.length){
            bb=0;
        }
        xiaolunbo[bb].style.left=kuan+"px";
        animate(xiaolunbo[aa],{left:-kuan},300);
        animate(xiaolunbo[bb],{left:0},300);
        aa=bb;
    }
    function dd(){
        bb=aa-1;
        if(bb<0){
            bb=xiaolunbo.length-1;
        }
        xiaolunbo[bb].style.left=-kuan+"px";
        animate(xiaolunbo[aa],{left:kuan},300);
        animate(xiaolunbo[bb],{left:0},300);
        aa=bb;
    }
    window.onmouseover=function(){
        clearInterval(cc);
        zuojian.style.display="block";
        youjian.style.display="block";
    }
    window.onmouseout=function(){
        cc=setInterval(dd,3000);
        zuojian.style.display="none";
        youjian.style.display="none";
    }
    zuojian.onclick=function(){
        dd();
    }
    youjian.onclick=function(){
        ee();
    }
    // 轮播图完
})