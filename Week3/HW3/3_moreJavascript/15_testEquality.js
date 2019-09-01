// x == y it should be true since it is not strict equality.
// x === y  it should be false since it is strict equality.
// z == y  that is true since it is defined like that.
// z == x it should be true since it is not strict equality.


function same(a,b){
    var same = a.length === b.length,
        result,
        len;
    if(!same) { result = false }
    else {
        // so far, they're the same
        result = true;
        len = a.length;
        for(var i=0;result !== false && i < len; i++) {
            if(a[i] !== b[i]) {
                result = false;
            }
        }
    }
    
    return result;
};


let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

same(x,y); 
// prints: true
same(z,y)
// prints: true
same(z,x)
// prints: true