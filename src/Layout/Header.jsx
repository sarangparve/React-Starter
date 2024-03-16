import React from 'react'

export default function Header() {
    return (
        <>
            {/* normal header */}
            {/* <h6 className='bg-danger' >one</h6> */}
            {/* Fixed header */}
            <h6 className='bg-primary position-fixed py-2' style={{ left: "0", right: "0" }}>Header</h6>
        </>
    )
}
