export default function Container({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <section className="flex border border-primary rounded-lg p-5 w-full bg-gzp-main">
            {children}
        </section>
    )
}