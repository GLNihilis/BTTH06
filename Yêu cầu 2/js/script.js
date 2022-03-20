function AddArray()
{
    arr=[]
    for (let i = 0; i < Math.floor(Math.random() * (20 - 10)) + 10; i++)
    {
        arr.push(Math.floor(Math.random() * (100 - 10)) + 10);    
    }
    document.getElementById('Array-Numbers').innerHTML = arr.join(" , ");
}

function Arrange()
{
    arr = document.getElementById('Array-Numbers').innerHTML.split(',')
    if(document.getElementById('form-increase').checked == true)
    {
        arr.sort(function(a, b)
        {
            return a - b
        });
        document.getElementById('Array-Numbers-Changed').innerHTML = arr;
    }
    if(document.getElementById('form-decrease').checked == true)
    {
        arr.sort(function(a, b)
        {
            return b - a
        });
        document.getElementById('Array-Numbers-Changed').innerHTML = arr;
    }
} 

function AddLocation()
{
    c = document.getElementById('numbers-2').value
    d = document.getElementById('numbers-1').value
    arr = document.getElementById('Array-Numbers-Changed').innerHTML.split(' , ')
    arr.splice(c, 0, d)
    document.getElementById('Array-Numbers-Changed').innerHTML = arr.join(" , ");
}