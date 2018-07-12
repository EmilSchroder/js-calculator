
var temp="";
var arr=[];
var output=0;

function Clickon(idButt, inTag){
    
    

    //If number
    if (!isNaN(idButt)){
        temp += idButt;
        document.getElementsByTagName(inTag)[0].value=temp.substring(0,9);
    }//If decimal point then don't allow twice
    else if (idButt==='.' && temp.includes('.')===false){
        temp += idButt;
        document.getElementsByTagName(inTag)[0].value=temp.substring(0,9);
    }//AC clears everything
    else if (idButt==='AC'){
        temp='';
        arr=[];
        output=0;
        document.getElementsByTagName(inTag)[0].value="";
    }//CE clears visual and temp
    else if (idButt==='CE'){
        temp ='';
        document.getElementsByTagName(inTag)[0].value="";
    }//Operators
    else if (idButt==='+'||idButt==='-'||idButt==='*'||idButt==='/'){
        arr.push(temp);
        arr.push(idButt);
        temp = '';
    }
    else if(idButt==='?'){
        let a = String(Math.floor(Math.random()*100));

        if(a === 67){
            document.getElementsByTagName(inTag)[0].value = "# MYSTERY";
        }else{        
            document.getElementsByTagName(inTag)[0].value = a;
        }temp += a;
        
    }
    //Equals
    else if (idButt==='='){
        arr.push(temp);
        //Start looping through all elements to perform operations
        output = Number(arr[0]);
        for (let i=1; i<arr.length; i++){
            let plusOne = arr[i];
            let plusTwo = arr[i+1];

            switch(plusOne){
                case '+':
                    output += Number(plusTwo);
                    break;
                case '-':
                    output -= Number(plusTwo);
                    break;
                case '*':
                    output *= Number(plusTwo);
                    break;
                case '/':
                    output /= Number(plusTwo);
                    break;
                default:
                    break;
            }
        } 
        //
        if (output < 0) {
            output = Math.abs(output) + '-';
          } 
        temp = output;
        document.getElementsByTagName(inTag)[0].value = output;     
    }


  
}
