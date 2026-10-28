// 1. Istifadəçi bir ədəd girməlidir ancaq bu ədəd 1000 - 100.000 arasında 3-ə bölünən bir ədəd olmalıdır. Həmin şərtlərə uyğun olaraq istifadəçiyə məlumat verin.
let number=Number(prompt("Enter your number:"))
if(number>=1000 && number<=100000){
    if(number%3==0){
        console.log("True");
    }
    else{
        console.log("Try again!")
    }

}
else{
    console.log("Pay attention to the given requirments!")
}



// 2. Aşağıdakı kodda
//     1. İstifadəçinin boyunu auto increment yoluyla bir artırın
//     2. telefonun markasını dəyişərək Samsung edin
//     3. Telefonun galaxy s22 model olduğunu bildirən məlumat girin
//     4. İstifadəçinin adını silin
//     5. İstifadəçin ilk sifarişini silin
//     6. İstifadəçinin son sifarişini silin
//     7. İstifadəçinin sifarişlərinin başına ball əlavə edin
//     8. İstifadəçinin sifarişlərinin sonuna headphones əlavə edin
//     9. Bunları konsolda göstərin
    
//     ```jsx
//     const user = {
//         name: 'Elnur',
//         height: 179,
//         phone: {
//             marka: 'Iphone',
//         },
//         orders: ['book', 'mouse', 'mousepad']
//     }
//     ```

const user={
    name:"Narmin",
    height:160,
    phone:{
        model:"Iphone",

    },
    orders:["book","mouse","mousepad"]
}

user.height++
user.phone.brand="Samsung"
user.phone.model="Galaxy S22"
delete user.name
user.orders.shift()
user.orders.pop()
user.orders.unshift("ball")
user.orders.push("headphones")
console.log(user);
    
// 3. `const info = ["Resul", "Serifov", 35]`
//     1. Yuxarıdakı arrayı dinamik olaraq `["Resul Serifov", 25]` vəziyyətinə gətirin
const info=["Rasul","Sharifov",35]
info[0]=info[0]+" "+info[1]
info.splice(1,1)
info[1]=25
console.log(info);

