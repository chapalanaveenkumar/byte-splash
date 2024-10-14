// const fetdata=()=>{
//     return new Promise((resolve)=>
//     {setTimeout(()=>{
//         resolve("Data fetched");
//     },1000);

//     });
// };
// fetdata()
// .then((result)=>{
//     console.log(result);
//     return fetdata();
// })
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.error(error);
// });

// const fetdat=async()=>{
//     const data=await fetdata();
//     console.log(data);
//     console.log("Naveen");
// };
// fetdat();



// // try {
// //     a = 2 / 0;
// //     console.log(a)
// // } catch (error) {
// //     console.log(error)
// // }
// // const fetchDataPromise = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         const success =  false;// Simulate success or failure          
// //         if (success) {
// //             resolve({ user: "Bob" }); // Call resolve on success   
// //         } else {
// //             reject("Error fetching data!"); // Call reject on error   
// //         }
// //     }, 1000);
// // });
// // fetchDataPromise.then((data) => {
// //     console.log("Fetched data:", data);
// // })
// //     .catch((error) => {
// //         console.error("Error:", error);
// //     });   
// // const fdp=new Promise((resolve,reject)=>{
// //     setTimeout(()=>
// //     {
// //         const data=true;
// //         if(data) resolve({user:'Naveen'});
// //         else reject("Error fecting data");
// //     },2000);
// // });
// // fdp.then((data)=>{
// //     console.log("Data:",data);
// // })
// // .catch((data)=>{
// //     console.log("Error:",error);
// // })
// const loadPosts = async () => {     
//       try {           
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');    
//            if (!response.ok) {            
//                throw new Error("Network response was not ok");   
//             }           
// const posts = await response.json();  
//          posts.forEach(post => {      
//              console.log(`${post.title}: ${post.body}`);   
//         });   
//         }
//  catch (error) {        
//        console.error("Fetch error:", error);   
// } 
// };  

// loadPosts();
// const response = fetch('https://jsonplaceholder.typicode.com/posts');    
// const posts=response.json();
// posts.forEach(post => {      
//     console.log(`${post.title}: ${post.body}`);   
// }); 
    // .then((response) => {
    //      // Parse JSON data   
    // })
    // .then((data) => {
    //     // Outputs the fetched data   
    // })
    // .catch((error) => {
    //     console.error("Fetch error:", error);
    // });  
    
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    // .then((response)=>
    // {
    //     if(!response){
    //         throw new Error("network response");
    //     }
    //     else{
    //         return response.json();
    //     }
    // })
    // .then((data)=>{
    //     console.log(data);
    // })
    // .catch((error)=>{
    //     console.error("Fetch error",error);
    // });
async function fetchPosts() {
    let response =await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data=await response.json();
    console.log(data);
}
fetchPosts();