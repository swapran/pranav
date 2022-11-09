function calcu(){
    var num1=parseInt(document.getElementById("num1").value);
    var num2=parseInt(document.getElementById("num2").value);
    var ops=document.getElementsByName("cal");
    //console.log(ops);
    //console.log(ops[0].checked);
    var res;
    var ops_val;
    for(let i = 0;i<ops.length;i++){
        //console.log(ops[i].checked);
        if(ops[i].checked){            
            console.log(ops[i].value);
            ops_val = ops[i].value;
        }
    }
    if(ops_val=="add")
    {
        res = num1 + num2;
    }
    if(ops_val=="sub")
    {
        res = num1 - num2;
    }
    if(ops_val=="mul")
    {
        res = num1 * num2;
    }
    if(ops_val=="div")
    {
        res = num1 / num2;
    }
    if(ops_val=="perc")
    {
        res = num1 * (num2/100);
    }
    if(ops_val=="rem")
    {
        res = num1 % num2;
    }
    if(ops_val=="pov")
    {
        res=1;
        for(let i=0;i<num2;i++){
            res = res * num1;
        }
    }
    document.getElementById("res").innerText="Result: "+res;
}