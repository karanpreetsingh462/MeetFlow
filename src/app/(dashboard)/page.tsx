import { auth } from "@/lib/auth";
import { HomeView } from "@/modules/home/ui/views/home-view"
import { redirect } from "next/navigation";
import { headers } from "next/headers";

const Page =async() =>{
  const session=await auth.api.getSession({
    headers:await headers(),
  });

  if(!session){
    redirect("/sign-in")
  }

  return <HomeView/>
}

export default Page;





























// "use client";
// import { useState } from "react";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { authClient } from "@/lib/auth-client";
// import { session } from "@/db/schema";

// export default function Home(){
//   const { data:session} =authClient.useSession()

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const onSubmit = () => {
//     authClient.signUp.email({
//       email,
//       name,
//       password,
//     },{
//       onError: ()=>{
//         window.alert("something went wrong");
//       },
//       onSuccess:()=>{
//         window.alert("Success")
//       }
//     });
//   }
//   const onLogin = () => {
//     authClient.signIn.email({
//       email,
//       password,
//     },{
//       onError: ()=>{
//         window.alert("something went wrong");
//       },
//       onSuccess:()=>{
//         window.alert("Success")
//       }
//     });
//   }

//   if(session){
// return(
//   <div className="flex flex-col p-4 gap-y-4">
//     <p>Logged in as {session.user.name}</p>
//     <Button onClick={()=>authClient.signOut()}>
//       Sign Out
//     </Button>
//   </div>
// );
//   }

//   return(
//     <div className="flex flex-col gap-y-10">
//     <div className="p-4 flex flex-col gap-y-4">
//       <Input 
//       placeholder="name" 
//       value={name} 
//       onChange={(e)=> setName(e.target.value)}/>

//       <Input placeholder="email" 
//       value={email} 
//       onChange={(e)=> setEmail(e.target.value)}/>
      
//       <Input placeholder="password" 
//       type="password" 
//       value={password} onChange={(e)=> setPassword(e.target.value)}/>

//       <Button onClick={onSubmit}>
//         Create user
//       </Button>
//     </div>
//     <div className="p-4 flex flex-col gap-y-4">

//       <Input placeholder="email" 
//       value={email} 
//       onChange={(e)=> setEmail(e.target.value)}/>
      
//       <Input placeholder="password" 
//       type="password" 
//       value={password} onChange={(e)=> setPassword(e.target.value)}/>

//       <Button onClick={onLogin}>
//         Login
//       </Button>
//     </div>
//   </div>
  
//   );
// };