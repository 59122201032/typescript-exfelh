// ตัวอย่างโจทย์ 1
const example1 = {name:'ex1',status:1};
// เฉลย
const result1:{name:string,status:number}= {name:'ex1',status:1};

// ตัวอย่างโจทย์ 2
const example2 = {xn:10,yn:{hp:10,status:'1'}};
// เฉลย
const result2 :{xn:number,yn:{hp:number,status:string}} = {xn:10,yn:{hp:10,status:'1'}};

//โจทย์ 1
const pokemon = {hitpoint:10,name:'Suparai'};
//คำตอบ
const result3:{hitpoint:Number,name:String} = {hitpoint:10,name:'Suparai'};

//โจทย์ 2
const akito = {nameWa:'Akito',secretNo:20,security:{key:100,code:'ASS10'},register:new Date()};
// คำตอบ
const result4:{nameWa:String,secretNo:Number,security:{key:Number,code:String},register:Date} = {nameWa:'Akito',secretNo:20,security:{key:100,code:'ASS10'},register:new Date()};

const findArea = (x,y) => (x*y);
const findArea2:(x:number,y:number)=>Number = (x,y) => (x*y);

const findArea3 = (x,y,z) => {
  console.log('Hello');
  return x*y+2-10;
}

const findArea4:(x:number,y:number,z:number)=>Number = (x,y,z) => {
  console.log('Hello');
  return x*y+2-10;
}

const optimize = () => 'xxx';
const optimize2:()=>String = () => 'xxx';

const opopo = (x,y) => `${x} and ${y} is same`;
const opopo5:(x:string,y:string)=>String = (x,y) => `${x} and ${y} is same`;


const suruzu = (man) => {
  console.log('test man');
  return {x:10,y:20};
}
const suruzu2:(man:any)=>{x:number,y:number}= (man) => {
  console.log('test man');
  return {x:10,y:20};
}

const convertDateToTime = (date:Date)=>date.getTime();
const convertDateToTime2:(date:Date)=>Number = (date:Date) => date.getTime();

const getMyDatailModule = () => {
  return {app:'module',detail:{operation:true}}
}
const getMyDatailModule2: () =>{app:string,detail:{operation:boolean}} = () =>({app:'module',detail:{operation:true}})
console.log(getMyDatailModule2);