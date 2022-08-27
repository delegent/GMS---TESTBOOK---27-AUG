const express = require('express');

const app = express();

// middleware -> 

app.use(express.json()) // middleware -> post reqest , PUT Patch ke tareeke se ye json data ko parse kr deta hai
// mtlb server ko bta deta hai.

// frontend - login
// cookie - token id
// 24days 11 days
// function next(){
// 	auth checking
// }
// app.route('/login',next,
//  ()=>{

// })


// backend -> route handling/  auth handling/ login / token / send as a reponse

const PORT = 9000;
// npm init -y -> default boiler plate for package .json
// npm i express
// cmd -> type nul > index.js
// bash -> touch index.js

let users = [ // local database.
	{
		id:1, 
		name:'Nitesh'
	},
	{
		id:2,  
		name:'Anubhav'
	}
]
// Get -> data get krna
// post - data db pe post krna
// MERN

// MOUNTING -> Safai Krna
// manager -> /users -> /users -> /users/:name

const userRouter = express.Router();
app.use('/users',userRouter);

userRouter
.route('/')
.get(getUsers)
.post(postUser)


// userRouter.route('/:name')
// http://localhost:9000/users 
//   /users/:id
// http://localhost:9000/users/2 = {
// 	id:2, 
// 	name:"Anubhav"
// }



// app.get('/users',function(req,res){
// 	res.status(200).send(users);
// })

// app.post('/users',function(req,res){
// 	const data = req.body;
// 	console.log(data);

// 	try{
// 		users = [...users,data];
// 		res.status(200).json({
// 			message:"Data Updated Successfully"
// 		})
// 	}catch(err){
// 		res.status(500).json({
// 			message:err.message
// 		})
// 	}
	
// 	// let arr = [1,2,3,4,5];
// 	// ...arr = 1,2,3,4,5
// 	// arr = [...arr,6]
// })


function getUsers(req,res){
	res.status(200).send(users);
}
function postUser(req,res){
	const data = req.body;
	console.log(data);

	try{
		users = [...users,data];
		res.status(200).json({
			message:"Data Updated Successfully"
		})
	}catch(err){
		res.status(500).json({
			message:err.message
		})
	}
}

// app.patch('/users')
// app.delete('/users') 

// function updateUser(req,res){
	
// 	/ Update it by your own.


//
// 	}
// }

// node

app.listen(PORT,() => console.log(`Server started at ${PORT}`))
// Random Discussion 
// FrontENd -> Backend
// let data = []
// fetch('http://localhost:9000/users').then((res)=>{
//   return res.json()
// }).then((data)=>{
// 	data = data
// })
// fetch('https://random-data-api.com/api/v2/users'),{
// 	method:"POST",

// 	,body:data
// }
// data








