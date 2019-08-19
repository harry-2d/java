


function factorial (){
    var num=parseInt(prompt("Enter a number:")) 
    fact=1;

    for(i=1;i<num;i++)
    {
        fact=fact*i;
    }
    alert("The Factorial of "+num+" is " +fact);
}

function multitable (){
    var num=parseInt(prompt("Enter a number:"))
  
    for(i=1;i<=10;i++)
    {
        mul=num*i;
        document.getElementById('multitable').innerHTML+=num + "X" + i+"="+ mul + "</br>"
    }

}