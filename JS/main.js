/*
//String
let fname = 'Aom'
console.log('Name',fname)
const idcard = '123'
var credit = '35'

console.log('Credit', credit)

//Number
let age = 30
let height = 175.5
const pi = 3.14


fname = 'John'
fname = 'Monday'


//idcard = '456'
console.log('Idcard',idcard)


console.log('Name',fname,'Age',age,'Height',height)
//console.log('age',age)
*/


/** opereter 
 condition  statment (if,else,switch) 

 + บวก
 - ลบ
 * คูณ
 / หาร
 % mod หารเอาเศษ 

== เท่ากับ
!= ไม่เท่ากับ
> มากกว่า
>=  มากกว่าหรือเท่ากับ
< น้อยกว่า
<= น้อยกว่าหรือเท่ากับ
 */
/*

let number1 = 'Thada'
let number2 = 'Jindawong'
let number3 = number1 +''+ number2 

console.log('number3  = ',number3)



let number1 = 5
let number2 = 3
let condition1 = number1 >= number2 
//Boolean (true , false) 

console.log('Condition is  = ',condition1)
*/


/*
//if - else condition
let Number1 = 3
let Number2 = 5

if (Number1 >= Number2) {
    console.log('condition true')
}else if (Number1 == Number2) {
    console.log('this else if')
} else{
    console.log('This else')
}
*/

/*
Grede
>= 80 A
>= 70 B
>= 60 C
>= 50 D
*/ 
/*

//ใช้ prompt ในการกรอกตัวเเปร

//let score = 65 
let score = prompt('ใส่ตัวเลข : ')

if(score >= 80) {
    console.log('Grade = A')
}else if (score >= 70){
    console.log('Grade = B')
}else if (score >= 60){
    console.log('Grade = C')
}else if (score >= 50){
    console.log('Grade = D')
}else{
    console.log('Grade = F')
}


/*
&& และ
|| หรือ 
! not ไม่
*/
/*    


let number1 = 5
let number2 = 10

//T && T = T  , T && F = F , F && F = F 
//T || F = F  
let condition = !(number1 >= 3 || number2 >= 11)
console.log('Result of Condition ',condition)


let number = 20
if ( !(number % 2 == 0)) {
    console.log('You are event.')
}


/*
for 
*/

/*
let counter = 0

while (counter < 10){
    console.log('Hi')
    counter = counter + 1
   //2 counter += 1 
   //3 counter ++
}

for (let counter = 0; counter < 10; counter++){
    console.log('Hi')
}
      

/*
array
*/

/*
let age1 = 20
let age2 = 25
let age3 = 30

let ages = [20,25,30]

//แทนที่
ages =[200,100,50]

console.log('age1 age2 age3 ' ,age1+' '+ age2 +' '+ age3)
console.log(`age1 age2 age3 ${age1} ${age2} ${age3}`)
console.log('array ',ages)

console.log('index' ,ages[0])

//ต่อ array 
ages.push(25)
console.log('push array',ages)

//ลบ array ตัวสุดท้าย
ages.pop()
console.log('pop array' ,ages)



let ages = [50,20,25,30,35,40]

if (ages.includes(30)){
    console.log('มีเลข 30 อยู่ใน array')
}
    
ages.sort()
console.log(ages)

let Name_list = ['a','b','c']
Name_list.push('dd')
console.log(Name_list)


Name_list.pop()
console.log('pop Name_list ' ,Name_list)
console.log('name_list',Name_list.length)

console.log('Name_list ' ,Name_list[0])
console.log('Name_list ' ,Name_list[1])
console.log('Name_list ' ,Name_list[2])

//console.log('Name_list ' ,Name_list[3])

for (let index = 0; index < Name_list.length; index++){
    console.log('name_list ',Name_list[index])
}


/*
object
*/

/*
let student = [{
    age: 30,
    name: 'aa',
    grade: 'A'
},{
     age: 30,
    name: 'bb',
    grade: 'B'
    
}]
student.push({
    age: 40,
    name: ' CC',
    grade: 'C'
})
student.pop()

for (let index = 0; index < student.length; index++){
    console.log('Student Number' ,(index + 1 ))
    console.log('age',student[index].age)
    console.log('name',student[index].name)
    console.log('grade',student[index].grade)
}
    

/*
console.log(student)
console.log(student.age)
console.log(student.name)
console.log(student.grade)

/*
let age1 = 30
let name1 = 'aa'
let grade1 = 'AA'
*/

/*
funtion
*/

/*
let score1 = 55
let score = 65
//การประกาศ Funtion

function calculalat_grade(score){

if(score>= 80){
    grade = 'A'
} else if (score >=70){
   grade = 'B'
} else if (score >=60){
   grade = 'C'
} else if (score >=50){
   grade = 'D'
} else{
    grade= 'F'
}
return grade

}
//เรียกใช้ funtion
let  grade1 = calculalat_grade(score1)
  console.log('Grade ' ,grade1)

  */

  /*
let score = [20,30,40,50]

for (let index = 0; index < score.length; index++) {
    console.log('score',score[index])
}
let newScore = score.filter((s) =>{
   return s >=30
        
})   

/*
score = score.map((s) => {
 return s *2
})
/*
score[0] = score[0]*2
score[1] = score[1]*2
score[2] = score[2]*2
score[3] = score[3]*2

newScore.forEach((ns) => {
    console.log('new Score',ns)


})

*/

/*
object function
*/

let students = [
    {
        name :'AA',
        score: 50,
        grade: 'A'
    
    },{
        name :'BB',
        score: 80,
        grade: 'A'

    }
]

let student = students.find((s) => {
     if (s.name == 'AA'){
        return true
     }
})

let double_score = students.map((s) => {
    s.score = s.score * 2 
    return s 
})

let hightScore = students.filter((s) => {
    if (s.score >= 120){
        return true
    }
})



console.log(student)
console.log('double_score',double_score)
console.log('HightScore',hightScore)