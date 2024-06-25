import { HTMLAttributes } from "react";

export default function Container({children, ...props}: Readonly<{children: React.ReactNode}> & HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            {...props}
            className={`border border-primary rounded-lg p-5 w-full bg-gzp-main ${props.className}`}
        >
            {children}
        </section>
    )
}