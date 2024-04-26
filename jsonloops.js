// create my own resume

const resume ={
    myname :"Dharani S",
    Age:22,
    Sex :"male",
    DOB :"14/10/2001",
    Birthplace :"ariyalur",
    Fathername :"Sankar V",
    Mothername :"Jaya sudha S",
    CivilStatus :"Single",
    nationality :"Indian",
    Religion :"Hindu",
    Educationalbackground :{
        college :"Sri Venkateshvara Collge Engineering",
        School :"C.S.I higher secondary school"},
    hobbies : ["play cricket" , "bodybuliding"],
    WorkExprince :"Fresher"

}
// console.log(resume)
// using for of
for(let len of Object.keys(resume)){
    console.log(len,":",resume[len])
}
// using for in
for(let keys in resume){
    console.log(keys,":",resume[keys])
}
// using for
let arr =Object.keys(resume).length
let array =Object.keys(resume)
for(let i=0;i<arr;i++){
    console.log(array[i],":",resume[array[i]])
}
// using foreach
let forr = Object.keys(resume)
forr.forEach((value)=>{
    console.log(value,":",resume[value])
})