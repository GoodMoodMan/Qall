'use client';

import React, {useEffect, useState} from 'react';

export default function ClientWrap({children}) {
    const [isClient , setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, [])
    return (
    <>
    {isClient ? <div>{children}</div> : null}
    </>
    )

}