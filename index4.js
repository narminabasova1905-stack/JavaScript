// ## To Practice

// 1. `['cup', 'plate', 'spoon', 'knife', 'fork']` array’inin bütün elementlərini while ilə konsolda göstərin

let arr=['cup','plate','spoon','knife','fork']
let i=0
while(i<arr.length){
    console.log(arr[i]);
    i++
}
// 2. `['xiyar', 'pomidor', 'sogan', 'yerkoku', 'Sarimsaq', 'semeni']` bu array içərisində “s” hərfiylə başlayan elementləri dinamik şəkildə konsolda göstərin
let arr2=['xiyar', 'pomidor', 'sogan', 'yerkoku', 'Sarimsaq', 'semeni']
let a=0
while(a<arr2.length){
    if(arr2[a][0]==="s"){
        console.log(arr2[a])
    }
    
}
// 3. 1-dən 100-ə kimi olan bütün ədədlərin toplamını tapın (1+2+3+...+99+100)
let number=1
let sum=0
while(1<=number && number<=100){
    sum+=number
    console.log(sum);
    number++
  
}
// 4. `['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']` arrayinin 5-hərfli elementləri arasında 5 hərfli olanların son hərfini while ilə göstərin. 5 hərfli olmayanları `continue` deyərək keçin.
let arr3=['kitab', 'defter', 'qelem', 'karandas', 'jurnal', 'pozan', 'vereq']
let b=0
while(b<arr3.length){
    if(arr3[b].length===5){
        console.log(arr3[b][arr3[b].length-1]);


    }
    else{
        b++
        continue;
    }
    
}
// 5. 100000-dən aşağı doğru gedərək 9999-a bölünən ilk ədədi konsolda göstərin.
let number2=10000
while(number2>0){
    if(number2%9999===0){
        console.log(number2);
        break;
    }
    else{
        number--
    }

}
// 6. `'Men her gun Javascript oyrenirem'` bu stringin saitlər çıxarılmış vəziyyətini konsolda göstərin.?
let arr4=['a','i','o','u','o','e']
let state='Men her gun Javascript oyrenirem'
let c=0
let result=''
while(c<state.length){
    if(!state[c].toLowerCase().includes(arr4[c])){
        result+=state[c].split(arr4)
        console.log(result)
    }
}
