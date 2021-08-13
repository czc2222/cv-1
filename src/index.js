let html = document.querySelector("#html");/* 通过css选择器找到这个html */
let style =document.querySelector("#style")
let string =`
/* 你好，我是一名前端新人
 *接下来我要弄一个阴阳图
 *先画一个圆
**/
#circle {
    width:300px;
    height:300px;
    box-shadow:0 0 3px rgba(0,0,0,.5);
    border-radius:50%;
    
}
/*接下来我让让圆变成阴阳两色
 *然后让这个圆变成阴阳交汇
 *最后在里面绘制阴阳眼
**/
#circle {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#circle::before {
    content:'';
    display:block;
    width:150px;
    height:150px;
    background:black;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#circle::after {
    content:'';
    display:block;
    width:150px;
    height:150px;
    background:white;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/*接下来我这个太极动起来
**/
#circle {
    animation:10s ultimate infinite linear;
}`//加上注释让文字不会影响到body的样式
let string2=''//让string2等于一个空字符串
let n = 0 //初始化n的值，下标为0

let word = ()=>{
    
    
    if(string[n]==='\n'){//如果string字符串等于回车
        
          string2=string2+"<br>"//那就变成css中的br，让html显示回车效果
          
    } else if(string[n]===' '){
        string2+="&nbsp;"
        }else
        {
        string2=string2+string[n]//否则就让string2等于string

    } /*简化版 string2+=string[n] ==='\n' ? '<br>':string[n] */
    setTimeout(()=>{
        n=n+1 ;//让n递增
        html.innerHTML = string2;//html显示string2字符串
        style.innerHTML = string.substring(0,n)
        window.scrollTo(0,999999);//控制滚动条
        html.scrollTo(0,999999)
        if(n <string.length){
            word() ;//循环执行
        }
        
    },10)
    
}
word()
