var oLineChart=document.getElementsByClassName("lineChart")[0],
    oBottomScale=document.getElementsByClassName("bottomScale")[0],
    aBottomScaleLi=document.querySelectorAll(".bottomScale li"),
    aleftScaleLi=document.querySelectorAll(".leftScale li"),
    lineDoms=document.createDocumentFragment(),
    allXCoordinate=[],
    allYCoordinate=[];
for ( i = 0; i < aBottomScaleLi.length; i++) {
    allXCoordinate.push(aBottomScaleLi[i].offsetLeft);//這是svg的座標
}
for ( i = 0; i < aleftScaleLi.length; i++) {
    allYCoordinate.push(aleftScaleLi[i].offsetTop);//這是svg的座標
}
//讓摺線圖的中繼點保持在比例尺文字的中間(開始)
var BottomScaleLiWidth=parseInt(getCss(aBottomScaleLi[0],"width")),
    BottomScaleLeft=parseInt(getCss(oBottomScale,"left")),
    leftScaleLiHeight=parseInt(getCss(aleftScaleLi[0],"height"));
oLineChart.style.left=BottomScaleLeft+(BottomScaleLiWidth/2)+"px";
oLineChart.style.top=(leftScaleLiHeight/2)+"px";
//讓摺線圖的中繼點保持在比例尺文字的中間(結束)

// window.onload=function(){
//     function svgAnimation(){

//     }
//     svgAnimation();

// }


~(function makeLineChart(json){
    var topLineY=allYCoordinate[0];//最高的svg座標
    var bottomLineY=allYCoordinate[allYCoordinate.length-1];//最低的svg座標
    //Y軸最高值的8000在svg屬性裡位置是topLineY,而最低值0在svg裡則是bottomLineY(y1="topLineY" y2="bottomLineY"則是最高劃到最低的一條線)
    var topScale=8000;//最高的比例尺數字
    var bottomScale=0;//最低的比例尺數字
    var proportion=(topLineY-bottomLineY)/(topScale-bottomScale);//算出比例尺裡的1對應幾svg座標
    //最低的svg座標+(我要的數值*proportion)=我要的svg座標。
    //每條線有8個中繼點，8個X座標是固定的(allXCoordinate)
    var str="";
    var greenLineYCoordinate=[7600,7400,5600,7700,5500,6100,7800,7500];//這是想要的數值，需依比例轉換成svg座標
    var blueLineYCoordinate=[6000,5700,2000,4000,3500,5000,6000,4300];
    var redLineYCoordinate=[800,800,2500,3200,2200,500,1000,1700];
    var relayPoint=7;
    for(i=0;i<relayPoint;i++){
        str+=`<line stroke-width="2" stroke="#7ed321" x1=${allXCoordinate[i]} y1=${bottomLineY+greenLineYCoordinate[i]*proportion} x2=${allXCoordinate[i+1]} y2=${bottomLineY+greenLineYCoordinate[i+1]*proportion}></line>`;
    }
    for(i=0;i<relayPoint;i++){
        str+=`<line stroke-width="2" stroke="#4a90e2" x1=${allXCoordinate[i]} y1=${bottomLineY+blueLineYCoordinate[i]*proportion} x2=${allXCoordinate[i+1]} y2=${bottomLineY+blueLineYCoordinate[i+1]*proportion}></line>`;
    }
    for(i=0;i<relayPoint;i++){
        str+=`<line stroke-width="2" stroke="#d0021b" x1=${allXCoordinate[i]} y1=${bottomLineY+redLineYCoordinate[i]*proportion} x2=${allXCoordinate[i+1]} y2=${bottomLineY+redLineYCoordinate[i+1]*proportion}></line>`;
    }
    oLineChart.innerHTML=str;
})();

function getCss(obj,attr){
    return getComputedStyle(obj)[attr] || obj.currentStyle[attr];
}