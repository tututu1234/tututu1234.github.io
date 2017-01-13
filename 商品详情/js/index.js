var box;//盒子
var lunbo;//图片容器
var lunbo_dot;//小圆点集合
var startX,startY,endX,endY;//开始坐标,结束坐标。
var curr;//记录当前位置
var index=0;//当前轮播位置
var flag=false;//是否在轮播
var times = null;//自动轮播定时器
var time = null,s=0;//停留时间

window.onload = function(){
     //初始话dom节点
    initDom();
    //添加事件
    addEvent();
    //记录当前位置
    curr = -box.offsetWidth;
    //开始自动轮播
    starLunBo();

}
//初始化
function initDom(){
    box = document.getElementById('lunbo_img')
    lunbo = document.getElementById('lunbo');
    lunbo_dot = document.getElementById('lunbo_dot').getElementsByTagName('div');
}
 //添加事件
function addEvent(){

    //box绑定事件
    box.addEventListener("touchstart", touchStart, false);
    box.addEventListener("touchmove", touchmove, false);
    box.addEventListener("touchend", touchend, false);

    //绑定小圆点事件
    for(var i = 0;i<lunbo_dot.length;i++){

        (function(i){

            lunbo_dot[i].ontouchstart=function(){
                starAnim(lunbo,-(i+1)*box.offsetWidth);//开始运动
                lunbo_dot[index].className="";//取消之前元素选中
                lunbo_dot[i].className="dotone";//添加当前元素为选中状态
                index = i;//记录当前指针
                curr=-(i+1)*box.offsetWidth;//记录当前运动位置
            }

        })(i);

    }

}
//开始自动轮播
function starLunBo(){
    times = setInterval(function(){
        starMove(-box.offsetWidth);
    },3000);
}


//手指触摸
function touchStart(e){
    s=0;
    //停止自动轮播
    clearInterval(times);
    e = e ||window.event;
    var touch = e.touches[0];
    startX =  touch.clientX;
    startY =  touch.clientY;
    // e.preventDefault();
    time =  setTimeout(function(){
        s++;
    },1000);
}
//手指移动
function touchmove(e){
    e = e ||window.event;
    var touch = e.touches[0];
    endX =  touch.clientX;
    endY =  touch.clientY;
    lunbo.style.left = (curr+endX)-startX+'px';//用户拖动
    // e.preventDefault();
    console.log(endX-startX-Math.abs(curr));
}

//手指抬起
function touchend(){
    clearTimeout(time);//清除计时器
    var flag;//识别用户手势
    if(endX==null){//判断用户手指是否移动
        return;
    }
    if(s==0){//手指停留时间小于一秒时
        if(startX-endX>box.offsetWidth/4){
            flag = "left";
        }else if(startX-endX<-box.offsetWidth/4){
            flag = "right";
        }
    }else{//手指大于或等于一秒时
        if(startX-endX>box.offsetWidth*3/4){
            flag = "left";
        }else if(startX-endX<-box.offsetWidth*3/4){
            flag = "right";
        }
    }
    //数据清除
    endX=null;
    //判断轮播方向
    switch(flag){
        case 'left':
            starMove(-box.offsetWidth);
            break;
        case 'right':
            starMove(box.offsetWidth);
            break;
        default :
            starAnim(lunbo,curr);
            break;
    }
    //开启自动轮播
    starLunBo();

}
//移动准备
function starMove(speed){
    if(flag){//如果运动未结束就不执行
        return;
    }
    speed>0?index--:index++;//判断运动方向
    curr =curr+speed;//计算位移距离
    starAnim(lunbo,curr);//开始动画
    //小圆点匹配
    var len = speed>0?index+1:index-1;//判断运动方向
    //临界点控制
    lunbo_dot[len].className="";//清除选中状态
    if(index==-1){
        lunbo_dot[4].className="dotone";//添加为选中状态
    }else if(index==5){
        lunbo_dot[0].className="dotone";//添加为选中状态

    }else{
        lunbo_dot[index].className="dotone";//添加为选中状态
    }


}
//开始移动
function starAnim(obj,target){
    flag = true;//为动画状态
    //清除动画定时器
    clearInterval(obj.times);
    //开启动画
    obj.times = setInterval(function(){
        var c= lunbo.offsetLeft;//当前位置
        //速度处理
        var speed = (target-c)/5;
        speed =  speed>0?Math.ceil(speed):Math.floor(speed);
        //达到目标值处理
        if(target==c){
            clearInterval(obj.times);//清除定时器
            if(index==-1){//当index值为第一张图时
                index = 4;
                curr = -box.offsetWidth*5;
                lunbo.style.left = curr+'px';
            }else if(index==5){//当index值为最后一张图时
                index = 0;
                curr = -box.offsetWidth;
                lunbo.style.left =  curr+'px';
            }
            flag = false;//动画结束
        }else{
            lunbo.style.left =  c+speed+'px';//动画继续
        }
    },10);
}

