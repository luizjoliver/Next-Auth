"use client"
import { useEffect, useState } from "react";



export default  function APITestPage() {
    const [name,setName] = useState<string>()

    useEffect(() =>{
        fetch("/api/WhoAmI")
        .then((res) => res.json())
        .then((data) => setName(data.name))


    },[])
  return (
    <div>
        <div>
            Api Route From <span className="font-bold underline">Client</span>
        </div>
        <div>Name: {name}</div>
    </div>
  )
}
