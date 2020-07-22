function createTable()
{
    var b,i,x;
    var a=document.getElementById('a').value;
    if(a<0 || a==0) alert('Enter a valid number.');
    else
    {
        for(i=1;i<21;i++) {
            /*{x=a;}
            else
            {*/
                b= parseInt(a)*i;
                console.log(b);
                if(i===1) {
                    x=a+ ' *'+ i +' =' + a+" <br>";
                } else {
                    x=a+ ' *'+ i +' =' + x+b+" <br>";    
                }
                
           // }
        }
        document.getElementById("result").innerHTML = x;
    }
}