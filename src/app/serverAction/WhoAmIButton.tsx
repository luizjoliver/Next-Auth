"use client"


import { useState } from "react"



export default function WhoAmIButton({whoAmIActtion}:{
    whoAmIActtion: () => Promise<string>
}) {

    const [name,setName] = useState<string>()


  return (
    <div>
        <button onClick={async () =>{
            setName(await whoAmIActtion())
        }}>
            Who Am I?
        </button>
        {name && <div> You are {name}</div>}
    </div>
  )
}
