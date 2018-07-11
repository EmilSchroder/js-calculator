
var temp="";
var arr=[];
var output=0;

function Clickon(idButt, inTag){
    
    


    if (!isNaN(idButt) || idButt==='.'){
        temp += idButt;
        output = temp;
        document.getElementsByTagName(inTag)[0].value=output.substring(0,7);
    }
    else if (idButt==='AC'){
        temp="";
        arr=[];
        output=0;
        document.getElementsByTagName(inTag)[0].value="";
    }
    else if (idButt==='CE'){
        document.getElementsByTagName(inTag)[0].value="";
    }
    


  
}
