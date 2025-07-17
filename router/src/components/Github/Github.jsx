import React from 'react'
import {useLoaderData} from 'react-router-dom'


export function Github() {
    const data=useLoaderData()
    // const[data,setData]= useState([])
    
    // useEffect(()=>{
    //             fetch('https://api.github.com/users/sanju51')
    //             .then(response=>response.json())
    //             .then(data=>{
    //                 setData(data)
    //             })
    //         },[])
    return (

       
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github follower : {data.followers}
        <img src={data.avatar_url}
        className="h-10 " alr="github"/>
        </div>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader=async()=>{
    const response=await fetch("https://api.github.com/users/sanju51")
    return response
}