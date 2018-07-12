
var temp="";
var arr=[];
var output=0;
var s=''



function Clickon(idButt, inTag){


    if (!isNaN(idButt)){
        isNumber(idButt);
    }
    else if (idButt==='.' && temp.includes('.')===false){
        isDecimal(idButt);
    }
    else if (idButt==='AC'){
        isAC();
    }
    else if (idButt==='CE'){
        isCE();
    }
    else if (idButt==='+'||idButt==='-'||idButt==='*'||idButt==='/'){
        isOperator(idButt);
    }
    else if(idButt==='?'){
        isRandom();
    }
    else if (idButt==='='){
        isEquals(idButt);
    }

    document.getElementsByTagName(inTag)[0].value = s;
}


    /////////////////////////Subfunctions///////////////////////////
    //If number
    function isNumber(idButt){
        temp += idButt;
        s=temp.substring(0,9);
    }
    
    //If decimal point then don't allow twice
    function isDecimal(idButt){
        temp += idButt;
        s.substring(0,9);
    }

    //AC clears everything
    function isAC(){
        temp='';
        arr=[];
        output=0;
        s="";
    }

    //CE clears visual and temp
    function isCE(){
        temp ='';
        s="";
    }

    //Operators
    function isOperator(idButt){
        arr.push(temp);
        arr.push(idButt);
        temp = '';
    }

    //Who knows? It's a mystery!
    function isRandom(){
        let a = String(Math.floor(Math.random()*100));

        if(a === 67){
            s = "# MYSTERY";
        }else{        
            s = a;
        }temp += a;
    }

    //Equals
    function isEquals(idButt){
        arr.push(temp);

        PerformCalc();
        //getting the visuals right for the negative outputs
        correctNegaSign();

        temp=''
        s = output;
    }
    
    //Start looping through all elements to perform operations
    function PerformCalc(){
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
        arr=[];
        arr.push(output);
    }

    function correctNegaSign(){
        if (output < 0) {
            output = Math.abs(output) + '-';
          } 
        }