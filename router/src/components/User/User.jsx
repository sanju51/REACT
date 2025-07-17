import React from 'react'
import {useParams} from 'react-router-dom'

export function User() {
    const {userid} =useParams()

    return (
        <div className='bg-grey-700 text-white text-3xl p-4'>User:{userid}</div>
    )
}
