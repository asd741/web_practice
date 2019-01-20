var xhr = new XMLHttpRequest();
//獲取要渲染的節點
var alink = document.getElementsByClassName("link");
var avideopic = document.getElementsByClassName("videopic");
var auserpic = document.getElementsByClassName("userpic");
var ainfotitle = document.getElementsByClassName("infotitle");
var ainfoname = document.getElementsByClassName("infoname");
//節點獲取完畢
var data;       //用來儲存獲得的數據
var amount = 9  //每次獲取的數據條數
var length;   //紀錄總共有幾筆數據
var offset = 0;   //記錄當前頁面渲染到第幾筆數據
var omask = document.getElementById("mask");  //頁面捲動時需要改變遮罩
var owarp = document.getElementById("warp");  //給warp加遮罩時使用
var screenheight = parseInt(getCss(document.documentElement, "height")); //取得文檔高度，用來判斷頁面使否捲到下面
window.onload = getData();
var first = true;//判斷是否第一次加載
var dataover = false;  //判斷是否還有資料
var maskchanged = false; //是否加過遮罩
function getData() {
    var clientID = "wobd3mv5vukff8f1v50pb2dx1lo8c5";
    var url = "https://api.twitch.tv/kraken/streams/";
    var method = "get";
    var game = "League of Legends";
    var language = "zh-tw";
    xhr.open(method, url + "?client_id=" + clientID + "&game=" + game + "&limit=" + amount + "&offset=" + offset + "&language=" + language, true);
    xhr.send();
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {    //獲取完資料就執行渲染函數  
            console.log(this.responseText);//string格式
            data = JSON.parse(this.responseText);
            console.log(data);//json格式
            if (data.streams.length < amount) {    //資料不夠時，請求的數據條數即為最後的資料筆數。
                amount = data.streams.length;
                dataover = true;                  //沒資料了，通知滾動事件停止獲取資料
            }
            length += data.streams.length;
            first ? appendData() : newcontent();
            first = false;
        }
    }
};
function maskchange() {
    if (!maskchanged) {
        omask.classList.remove("mask");
        owarp.classList.add("mask");
        maskchanged = true;
    }
}
function newcontent() {
    var osection = document.createElement("section");
    osection.className = "demobox";
    var str = `<section class="demo">
                            <a href="#" class="link">
                                <section class="video">
                                    <img src="img/1.jpg" class="videopic" alt="" width="320" height="180">
                                </section>
                                <figure class="content">
                                    <section class="userpicbox">
                                        <img src="img/2.png" class="userpic" alt="" width="300" height="300">
                                    </section>
                                    <section class="info">
                                        <p class="infotitle">頻道名稱</p>
                                        <p class="infoname">實況主名字</p>
                                    </section>        
                                </figure> 
                            </a>     
                        </section>`;
    for (i = 0; i < amount; i++) {      //假設amount為1，代表請求一條數據，所以迴圈跑一次，twitch表格就是新增一格。
        osection.innerHTML += str;
    }
    owarp.appendChild(osection);
    var maskheight = parseInt(getCss(omask, "height"));
    screenheight = parseInt(getCss(owarp, "height"));   //因為新增內容的關係，重新獲取文檔高度  
    if (screenheight >= maskheight) {
        maskchange();
    }
    appendData(); //添加完html內容就請求新數據
}
function appendData() {
    for (i = 0; i < amount; i++) {
        avideopic[offset].src = data.streams[i].preview.medium;
        auserpic[offset].src = data.streams[i].channel.logo;
        ainfoname[offset].innerHTML = data.streams[i].channel.name;
        ainfotitle[offset].innerHTML = data.streams[i].channel.status;
        offset++;
    }
};
document.onscroll = function (ev) {
    if (!dataover) {
        if (screenheight - (document.documentElement.scrollTop + document.documentElement.clientHeight) <= 600) {
            getData();
        }
    }
}
function getCss(obj, attr) {
    return window.getComputedStyle ? window.getComputedStyle(obj)[attr] : obj.currentStyle[attr];
}