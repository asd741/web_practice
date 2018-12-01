let oCanvas = document.getElementById("canvas"),
    oAudio = document.getElementById("audio"),
    oAudio2 = document.getElementById("audio2"),
    oTime = document.getElementById("time"),
    context = new AudioContext(),//創立音樂物件
    analyser = context.createAnalyser(),//創立分析儀
    analyser2 = context.createAnalyser(),//創立分析儀
    source = context.createMediaElementSource(oAudio),//指定音樂
    source2 = context.createMediaElementSource(oAudio2),//指定音樂
    bar_width = 1,//音樂的寬
    bar_height,//音樂的高
    rotateGap = 3,//旋轉間距
    dateLength = 360 / rotateGap * 2,//獲取兩圈數據所需數量，每圈需要(360度/旋轉間隔)的數據量
    fbc_array = new Uint8Array(analyser.frequencyBinCount),//創立放置數據所需的陣列空間
    fbc_array2 = new Uint8Array(analyser2.frequencyBinCount),//創立放置數據所需的陣列空間
   
    
    ctx = oCanvas.getContext('2d'),
    circleR = 200;//圓形的半徑設定
// window.addEventListener("load", init, false);
setTimeout(init,3000);
function init() {//初始化
    oAudio.play();
    oAudio2.play();
    source.connect(analyser);//分析儀開始分析音樂
    source2.connect(analyser2);//分析儀開始分析音樂
    analyser.connect(context.destination);//連接到喇叭
    analyser2.connect(context.destination);//連接到喇叭
    window.onresize = resizeCanvas;//螢幕大小變動時重新設定canvas大小
    resizeCanvas();
    drawMusic();
}
function resizeCanvas() {
    oCanvas.width = window.innerWidth;
    oCanvas.height = window.innerHeight;
    // oTime.style.cssText = `
    //         border-radius:50%;
    //         width:${circleR * 2}px;
    //         height:${circleR * 2}px;
    //         position:absolute;
    //         top:${oCanvas.height / 2 - circleR}px;
    //         left:${oCanvas.width / 2 - circleR}px;
    //         background-image: url("ummm.jpg");
    //         background-position: left -60px;
    //         background-repeat: no-repeat;
    //         opacity: .7;
    //     `;
}
// setInterval(resizeCanvas,10000);
let count1=0,count2=0;
function drawMusic() {
    ctx.clearRect(0, 0, oCanvas.width, oCanvas.height);//清空上次畫的
    analyser.getByteFrequencyData(fbc_array);//渲染陣列空間內的數據
    analyser2.getByteFrequencyData(fbc_array2);
    for (let i = 0; i < fbc_array.length ; i++) {
        bar_height = fbc_array[i];
        ctx.fillStyle = 'red';
        count1+=bar_height;
        ctx.fillRect(bar_width*i*1.5,600, bar_width,-bar_height );
    }
    for (let i = 0; i < fbc_array2.length ; i++) {
        bar_height2 = fbc_array2[i];
        ctx.fillStyle = 'blue';
        count2+=bar_height2;
        ctx.fillRect(bar_width*i*1.5,300, bar_width,-bar_height2 );
        // if((i%100)===0){
        //     console.log("第"+i+"條數據是"+bar_height2);
        // }
    }
    text1.innerHTML="低音質(下圖)總數據量是"+count1;
    text2.innerHTML="高音質(上圖)總數據量是"+count2;
    text3.innerHTML="高音質減低音質是"+(count2-count1+"("+count2/count1+")%");
    // for (let i = 1600; i < 3000 ; i++) {
    //     bar_height = fbc_array[i];
    //     ctx.fillStyle = 'blue';
    //     ctx.fillRect(0,'50%', bar_height, bar_width);
    // }


    // function rotateCanvas() {
    //     ctx.translate(oCanvas.width / 2, oCanvas.height / 2);
    //     ctx.rotate(rotateGap * Math.PI / 180);
    //     ctx.translate(-oCanvas.width / 2, -oCanvas.height / 2);
    // }
    // function drawfixedCircle() {
        // Math.floor(oAudio.currentTime);//當前秒數
        // oAudio.duration;//總秒數
        // var minute = oAudio.duration / 60;
        // var sec = oAudio.duration % 60;

        // ctx.beginPath();
        // ctx.arc(oCanvas.width / 2, oCanvas.height / 2, circleR, 0, Math.PI * 2, true);
        // ctx.lineWidth = 2;
        // ctx.strokeStyle = "rgba(255,255,255,1)";
        // ctx.stroke();
    // }
    // function drawOutsideMusic() {
    //     for (let i = 0,colorStart=0,colorGap=30,color; i < dateLength / 2; i++) {
    //         colorStart + i >= 360 ? color = colorStart - 360 + i / (dateLength / 2) * colorGap : color = colorStart + i / (dateLength / 2) * colorGap;
    //         bar_height = fbc_array[i];
    //         ctx.fillStyle = `hsl(${color},70%,60%)`;//顏色，灰階，亮度
    //         rotateCanvas();
    //         ctx.fillRect(oCanvas.width / 2 + circleR, oCanvas.height / 2, bar_height, bar_width);
    //     }
    // }
    // function drawInsideMusic() {
    //     for (let i = dateLength / 2,colorStart=0,colorGap=360,color; i < dateLength; i++) {
    //         colorStart + i >= 360 ? color = colorStart - 360 + i / (dateLength / 2) * colorGap : color = colorStart + i / (dateLength / 2) * colorGap;
    //         bar_height = fbc_array[i] / 2;
    //         ctx.fillStyle = `hsl(${color},30%,60%)`;
    //         rotateCanvas();
    //         ctx.fillRect(oCanvas.width / 2 + circleR, oCanvas.height / 2, bar_height, bar_width);
    //     }
    // }
    // drawfixedCircle();
    // drawOutsideMusic();
    // drawInsideMusic();
    requestAnimationFrame(drawMusic);
}

