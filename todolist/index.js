var aBody=document.getElementsByTagName("body");
var aStar=document.getElementsByClassName("star");
var aPencil=document.getElementsByClassName("pencil");
var aTitleBlock=document.getElementsByClassName("titleBlock");
var aTitle=document.getElementsByClassName("title");
var aDropdowns=document.getElementsByClassName("dropdowns");
var aCancel=document.getElementsByClassName("cancel");
var aSave=document.getElementsByClassName("save");
var aAddFileInput=document.getElementsByClassName("addFileInput");
var ainputDate=document.getElementsByClassName("inputDate");
var aTitleDateText=document.getElementsByClassName("titleDateText");
var aFiles=document.getElementsByClassName("files");
var aCommentBlock=document.getElementsByClassName("commentBlock");
var aMsgRecord=document.getElementsByClassName("msgRecord");
var aFileRecord=document.getElementsByClassName("fileRecord");
var oAdd=document.getElementById("add");
var data=[
    {

    },
];
function add(){
    for(i=-1;aStar[++i];){
        aStar[i].index=i;
        aPencil[i].index=i;
        aTitle[i].index=i;
        aCancel[i].index=i;
        aSave[i].index=i;
        aStar[i].onclick=function(){
            this.classList.toggle("starCk");
            aTitleBlock[this.index].classList.toggle("titleCk");
        }
        aPencil[i].onclick=function(){
            this.classList.add("pencilCk");
            aDropdowns[this.index].classList.remove("displayNone");
            aTitle[this.index].removeAttribute("disabled");
        }
        aCancel[i].onclick=function(){
            close(this.index);
            cancel(this.index);
        }
        aSave[i].onclick=function(){
            close(this.index);
            save(this.index);
        }
    }
}
add();
function close(index){
    aPencil[index].classList.remove("pencilCk");
    aDropdowns[index].classList.add("displayNone");
    aTitle[index].setAttribute("disabled","");
}
function cancel(index){
    aTitleDateText[index].innerHTML=ainputDate[index].value=aFiles[index].innerHTML=aCommentBlock[index].value="";
}
function save(index){
    aTitleDateText[index].innerHTML=ainputDate[index].value;
    aMsgRecord[index].innerHTML=aCommentBlock[index].value;
    aFileRecord[index].innerHTML=aAddFileInput[index].value;
}
function readFile(obj,obj2){
    var src=window.URL.createObjectURL(obj);
    var name=obj.name;
    var dom=document.createElement("section");
    dom.className="fileDemo";
    dom.innerHTML=`
        <img src="${src}" alt="${name}">
        <span>${name}</span>
    `;
    obj2.appendChild(dom);
}
oAdd.onclick=function(){
    var dom=document.createElement("section");
    dom.className="list";
    var str=`
    <section class="titleBlock">
        <section class="titleList">
            <input class="checkbox" type="checkbox" name="" id="">
            <input type="text" class="title" placeholder="Type Something Here..." disabled>
            <span class="pencil right clearfix">
                <i class="fas fa-pencil-alt"></i>
            </span>
            <span class="star right clearfix">
                <i class="far fa-star"></i>
            </span>    
        </section>
        <section class="infoList">
            <span class="dateIcon left clearfix">
                <i class="fas fa-calendar-alt"></i>
            </span>
            <span class="dateSpan left clearfix">
                <i class="titleDateText">5/14</i>
            </span>
            <span class="pageIcon left clearfix">
                <i class="far fa-file"></i>
            </span>
            <span class="chatIcon left clearfix">
                <i class="far fa-comment"></i>
            </span>  
        </section>
    </section>
    <section class="dropdowns displayNone">
        <section class="contentBlock">
            <section class="deadLine1">
                <span class="dateIcon">
                    <i class="fas fa-calendar-alt"></i>
                </span>
                <span class="dateTitle">Deadline</span>
            </section>
            <section class="deadLine2">
                <input type="date" class="inputDate" placeholder="2014-09-18">
            </section>
            <section class="file1">
                <span class="fileIcon">
                    <i class="far fa-file"></i>
                </span>
                <span class="fileTitle">File</span>
            </section>
            <section class="file2">
                <span class="addFile">
                    +<input type="file" class="addFileInput"onchange=readFile(this.files[0],this.parentNode.nextElementSibling)>
                </span>
                <section class="files">
                </section>
            </section>
            <section class="comment1">
                <span class="commentIcon">
                    <i class="far fa-comment"></i>
                </span>
                <span class="commentTitle">Comment</span>
            </section>
            <section class="comment2">
                <textarea placeholder="Type your memo here" class="commentBlock"></textarea>
            </section>
        </section>
        <section class="saveBlock">
            <section class="cancel">
                <span class="close">
                    <i class="far fa-times-circle"></i>
                </span>
                <span>Cancel</span>
            </section>
            <section class="save">
                <span class="add">
                    <i class="fas fa-check"></i>
                </span>
                <span>Save</span>
            </section>
        </section>
    </section>
    `;
    dom.innerHTML=str;
    aBody[0].appendChild(dom);
    add();
}