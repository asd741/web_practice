var aSwitch=document.getElementsByClassName("switch");
var aDropdowns=document.getElementsByClassName("dropdowns");
var aList=document.getElementsByClassName("list");
var aImg;
aImg=document.querySelectorAll(".list img");
var aTitle;
aTitle=document.querySelectorAll(".list .content .title");
var aDescription;
aDescription=document.querySelectorAll(".list .content .description");
var aResultTitle=document.querySelectorAll("main header .title");
var oSearch=document.getElementById("search");
var headerSearch=document.getElementById("headerSearch");
var oListWrap=document.getElementById("listWrap");
var aContent=document.querySelectorAll(".list .content");
window.onload=function(){
    ajax({
        data:{
            q:""
        },
        url:'https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97',
        type:'get',
        callback:function(){
            aResultTitle[0].style.background="#fff";
            for(i=0;i<aList.length;i++){
                aImg[i].style.background="#fff";
                aContent[i].style.background="#fff";
            }
        }
    });
}
for(i=-1;aSwitch[++i];){
    aSwitch[i].i=i;
    aSwitch[i].onclick=function(){
        this.classList.toggle("cked");
        var hasCked=this.classList.contains("cked");
        if(hasCked){
            if(this.i===0){
                aDropdowns[this.i].style.height="90px";
            }
            if(this.i===1){
                aDropdowns[this.i].style.height="150px";
            }
            this.innerHTML="-";
        }else{
            aDropdowns[this.i].style.height="0px";
            this.innerHTML="+";
        }
    }
}
function markSearch(value){
    var ev=ev||window.event;
    if(ev.key==="Enter"){
        if(value===""){
            oListWrap.innerHTML=oListWrap.innerHTML.split("<mark>").join("");
        }else{
            oListWrap.innerHTML=oListWrap.innerHTML.split("<mark>").join("").split(value).join("<mark>"+value+"</mark>");
        }
        aImg=document.querySelectorAll(".list img");
        aTitle=document.querySelectorAll(".list .content .title");
        aDescription=document.querySelectorAll(".list .content .description");
    }
}
function dateSearch(ev){
    ev=ev||window.event;
    if(ev.key==="Enter" && aList[0].classList.contains("displayNone")){
        alert("高雄open data沒這區域的資料");
        return;
    }
}
function ajax(json){
    var xhr=new XMLHttpRequest();
    var type=json.type;
    var url=json.url;
    if(type==="get" || type==="GET"){
        if(json.data){
            var array=[];
            for(attr in json.data){
                array.push(attr+"="+json.data[attr]);
            }
            var parameter="&"+array.join("&");
            if(parameter==="&q=高雄"){
                parameter="";
            }
        }else{
            parameter="";
        }
        xhr.open(type,url+parameter,true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
    }
    if(type==="post" || type==="POST"){
        xhr.open(type,url,true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        var str=JSON.stringify(json.data);
        var parameter=str.split(":").join("=").split(",").join("&");
        xhr.send(parameter);
    }
    
    xhr.onreadystatechange=function(){
        if(this.readyState===4){
            var data=JSON.parse(this.response);
            append(data);
            if(json.callback){
                json.callback();
            }
        }
    }
}
function append(data){
    data=data.result.records;
    for(i=0;i<data.length;i++){
        if(aList[i]){
            aImg[i].src=data[i].Picture1;
            aTitle[i].innerHTML=data[i].Name;
            aDescription[i].innerHTML=data[i].Description;  
        }
    }
    if(oSearch.value===""){
        aResultTitle[0].innerHTML="Show&nbsp;<strong class='mark'>"+data.length+"</strong>&nbsp;results&nbsp;by&nbsp;高雄";
    }else{
        aResultTitle[0].innerHTML="Show&nbsp;<strong class='mark'>"+data.length+"</strong>&nbsp;results&nbsp;by&nbsp;"+oSearch.value;
    }
    for(i=0;i<aList.length;i++){
        aList[i].classList.add("displayNone");
    }
    for(i=0;i<data.length;i++){
        if(aList[i]){
            aList[i].classList.remove("displayNone");
        }
    }
}
function getCss(obj,attr){
    return window.getComputedStyle(obj)[attr] || obj.currentStyle[attr]; 
}
