for(let x = 1; x < 8; x++)
{
    console.log('the value of x is : ' + x);
    if(x == 7)
    {
        x = (x % 3);
        console.log('When the value of x is : 7, the value of x changed to : ' + x);
        break;
    }
}

console.log('\n\n');