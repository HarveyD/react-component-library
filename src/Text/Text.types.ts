import {  MouseEventHandler } from "react"


export interface TextProps {
    primary?:boolean,
    disabled?: boolean,
    size?: "small" | "medium" | "large",
    // onClick?: MouseEventHandler<HTMLButtonElement>,
    theme?:any
}