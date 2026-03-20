import { cn } from "../../utils/cn"
import type { ReactNode, ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "cva"

const buttonVariants = cva(
    "rounded-full px-24 py-1 w-full flex justify-center items-center text-center cursor-pointer",
    {
        variants: {
            intent: {
                primary: " bg-primary text-primary-foreground hover:bg-primary-hover",
                secondary: "bg-background border-border-default border hover:bg-secondary-hover",
            },
        },
        defaultVariants: {
            intent: "primary",
        },
    })


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    children: ReactNode;
}


export default function Button({ children, className, intent, ...props }: ButtonProps) {
    return (
        <button className={cn(buttonVariants({ intent }), className)} {...props}>
            {children}
        </button>
    )
}