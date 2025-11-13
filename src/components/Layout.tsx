export default function Layout ({ children } : { children: React.ReactNode}) {
    return (
        <div className="sm:px-3 md:px-40 2xl:px-[470]">
            {children}
        </div>
    )
}