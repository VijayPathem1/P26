var a=new Array(2)
for (var i = 0; i < 2; i++) {
    a[i] = new Array(3);
}
for (var i=0;i<2;i++)
{
    for(var j=0;j<2;j++)
    {
        a[i][j]=prompt("Enter th values: ")
    }
}
for (var i=0;i<2;i++)
{
    for(var j=0;j<2;j++)
    {
        document.write(a[i][j]+" ")
    }
    document.write("<br>")
}
