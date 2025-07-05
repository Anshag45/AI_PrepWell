import Image from "next/image"
import React, {ReactNode} from "react"
const RootLayout = ({children}: {children : ReactNode}) => {
    return (
        <div className="root-layout">
            <nav>
                <link href= "/" className="flex items-center gap-2"/>
                <Image src= "/logo.svg" alt="logo"  width={38} height={32}/>
                <h2 className="text-primary-100">Prep Well</h2>
            </nav>
            {children}
        </div>
    )
}
export default RootLayout
