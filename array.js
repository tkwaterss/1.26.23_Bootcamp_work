let backpack = [];
 backpack.push('sword');
 backpack.push('shield');
 backpack.push('food');

 console.log(backpack);

 backpack.splice(0,1);

 console.log(backpack);

 backpack.unshift('coat');

 console.log(backpack);

 backpack.shift();

 console.log(backpack);
 
 backpack.pop();

 console.log(backpack);

 backpack.push('flint', 'blanket', 'knife', 'food');

 console.log(backpack);

 console.log(backpack.length);

 let satchel = backpack.splice(3,2);

 console.log(backpack + ' and ' + satchel);
 console.log('backpack', backpack, 'satchel', satchel);

//  for(i = 0; i < backpack.length; i++) {
//     console.log(backpack[i]);
//  }

//  for(i = 0; i < satchel.length; i++) {
//     console.log(satchel[i]);
//  }

if(backpack.length >= 2) {
    for (let i = 0; i < 2; i++) {
        console.log(backpack[i]);
    }
} else {
    for(let i = 0; i < backpack.length; i++) {
        console.log(backpack[i]);
    }
}

backpack.push(...satchel)
//is same as
backpack.push('knife', 'food');

let backpack2 = [...backpack];
//copying an array into a new variable

