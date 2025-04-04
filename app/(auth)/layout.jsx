import React from "react";

export default function AuthLayout({ children }){
    return(
        <div className="flex justify-center p-40">
            {children}
        </div>
    )
}