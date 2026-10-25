import Link from "next/link";
// import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
    return (
        <nav className="w-full bg-blue-200 px-5 flex items-center justify-between">
            <div className="flex items-center gap-8">
                <Link href="/">
                    <h1 className="text-3xl font-bold text-blue-500">MS</h1>
                </Link>
            </div>
            <div className="flex items-center gap-2">
                <Link className={buttonVariants({ variant: "ghost" })} href="/">Home</Link>
                <Link className={buttonVariants({ variant: "ghost" })} href="/blog">Blog</Link>
                <Link className={buttonVariants({ variant: "ghost" })} href="/create">Create</Link>
            </div>
            <div className="flex items-center gap-2">
                <Link className={buttonVariants()} href="/auth/sign-up">Sign-up</Link>
                <Link className={buttonVariants({ variant: "secondary", size: "sm" })} href= "/auth/login">Login</Link>
                
            </div>
        </nav>
    )
}
