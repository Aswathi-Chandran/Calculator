 function insert(n1)
 {
    calcform.txt1.value=calcform.txt1.value+n1;
 };
function C(){
     calcform.txt1.value="";
 };
            
function back(){
    var exp = calcform.txt1.value;
    calcform.txt1.value = exp.substring(0,exp.length-1);
};

        