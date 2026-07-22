import type React from "react";


export function PreviewCardContainer({children}: {children: React.ReactNode}){

    return <div>
        <h1>Pretend this is a nice styled container</h1>
        {children}
    </div>
}