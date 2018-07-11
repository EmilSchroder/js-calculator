
var temp="";
var arr=[];
var output=0;

function Clickon(idButt, inTag){
    
    


    if (!isNaN(idButt)){
        temp += idButt;
        document.getElementsByTagName(inTag)[0].value=temp.substring(0,7);
    }
    else if (idButt==='.' && temp.includes('.')===false){
        temp += idButt;
        document.getElementsByTagName(inTag)[0].value=temp.substring(0,7);
    }
    else if (idButt==='AC'){
        temp='';
        arr=[];
        output=0;
        document.getElementsByTagName(inTag)[0].value="";
    }
    else if (idButt==='CE'){
        temp ='';
        document.getElementsByTagName(inTag)[0].value="";
    }
    else if (idButt==='+'||idButt==='-'||idButt==='*'||idButt==='/'){
        arr.push(temp);
        arr.push(idButt);
        temp = '';
    }
    else if (idButt==='='){
        
    }


  
}
