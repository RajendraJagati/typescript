import { type } from "os"

let firstName:string ="fruit"
let count:number = 0
let isLoding:boolean = true
let numbers:undefined=undefined
let age:null|string=null

const user:{name:string,age:number,id?:number} ={
    name:"raj",
    age:24,
    
}

//array

const fruits=["banana","apple","orange"]
const num:number[]=[1,2,3,4,5]


const users:{id:number,name:string}[]=[{id:1,name:""},{id:2,name:""}]

//functions

const sum=(a:number,b:number)=>{
    return a+b
}


sum(1,2)
// ==============

const hamdleApiResponse=(payload:{userId:number},callback:(a:number,b:number)=>number)=>{

}

hamdleApiResponse({userId:1},sum)



// interface


interface User extends Person{
    name:string
    id:number
}
interface Person {
    department:string
}

let data:User[]=[{
    name:"fruits",
    id:1,
    department:""

    
}]

type employee={
    id:number
    name:string
}
type manager={
  department:string
}&employee

let employeewithmanager:manager={
    department:"A",
    id:2,
    name:"sasd"
}

