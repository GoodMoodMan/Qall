'use client';

import React, { useEffect, useState } from 'react';

export default function TextInput(props) {

    return (
        <>
        <input
        placeholder={props.placeholder}
        type={props.inputType}
        value={props.string || ''}
        onChange={(event) => props.onUpdate(event.target.value)}
        autoComplete='off'
        className='block w-full bg-[#F1F1F2] text-gray-700 border border-gray-300 rounded-md py-2.5 px-3 focus:outline-none'>
        </input>
        <div className='text-red-500 text-md font-semibold'>
            {props.error ? props.error : null}
        </div>

        </>
    )

}