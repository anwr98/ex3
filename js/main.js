(function Boxes() {
    var fname="anwr"
    var lname="sied"
    var num=NumOfLetters(fname,lname);
    var changebox=document.getElementsByTagName("button")[0];
    var restbox=document.getElementsByTagName("button")[1];
    
    function NumOfLetters(fname,lname) {
        var num1=0;
        var num2=0;
        var sum=0;
        for (n in fname) {
            num1++;
        }
        for (n in lname) {
            num2++;    
        }
        sum+=num2*num1;
        return(sum);

    }
    AddBoxes(num);
    function AddBoxes(num) {
    
        var articles="";
        for(i=0;i<num;i++){
             articles+="<article></article>"
        }
        var main=document.getElementsByTagName("main")[0];
        main.innerHTML=articles; 
    }
    
    changebox.onclick=function () {
        ChangeColorOfBox(fname);
    }
    function ChangeColorOfBox(fname) {
        var num=0;
        for(n in fname){
            num++;

        }
        var box=document.getElementsByTagName("article");
        for(i=0;i<num;i++){
           box[i].style.backgroundColor="black";

        }  
    }
    restbox.onclick=function(){
        FirstColorBox(fname);
    }
    function FirstColorBox(fnum) {
        var num=0;
        for(n in fname){
            num++;
        }
        var box=document.getElementsByTagName("article");
        for(i=0;i<num;i++){
            box[i].style.backgroundColor="white";
        }
        
    }
    var box1=document.getElementsByTagName("article")[0];
    box1.onmouseover=function () {
        box1.style.backgroundImage="url(./images/a.png)";
    }
    box1.onmouseout=function () {
        box1.style.backgroundImage="";
        
    }


   
})();


  


