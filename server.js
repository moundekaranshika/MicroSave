const express=require('express');const bodyParser=require('body-parser');const cors=require('cors');const fs=require('fs');
const path=require('path');const DATA_PATH=path.join(__dirname,'data.json');
function readData(){try{return JSON.parse(fs.readFileSync(DATA_PATH,'utf8'));}catch(e){return{users:[]};}}
function writeData(data){fs.writeFileSync(DATA_PATH,JSON.stringify(data,null,2));}
const app=express();app.use(cors());app.use(bodyParser.json());
app.get('/api/transactions',(req,res)=>{const data=readData();const user=data.users.find(u=>u.id==='demo-user');
res.json(user||{transactions:[]});});
app.post('/api/transactions',(req,res)=>{const{amount,note}=req.body;if(typeof amount!=='number'||isNaN(amount)||amount<=0)
{return res.status(400).json({error:'Invalid amount'});}const rounded=Math.ceil(amount/10)*10;
const saved=parseFloat((rounded-amount).toFixed(2));const timestamp=new Date().toISOString();
const data=readData();let user=data.users.find(u=>u.id==='demo-user');if(!user){user={id:'demo-user',email:'demo@example.com',transactions:[]};
data.users.push(user);}const txn={id:'t'+Date.now(),amount,rounded,saved,note:note||'',timestamp};
user.transactions.unshift(txn);writeData(data);res.json({success:true,txn});});
app.get('/api/summary',(req,res)=>{const data=readData();const user=data.users.find(u=>u.id==='demo-user');
const txns=(user&&user.transactions)||[];const totalSaved=txns.reduce((s,t)=>s+(t.saved||0),0);
res.json({totalSaved,count:txns.length,last5:txns.slice(0,5)});});
const PORT=process.env.PORT||5000;app.listen(PORT,()=>console.log(`MicroSave backend running on ${PORT}`));