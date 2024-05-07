import { authMiddleware } from "@clerk/nextjs";
import { clerkClient } from "@clerk/nextjs/server";
import { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export default authMiddleware({
    
    publicRoutes: (req: NextRequest) => {
        const excludedRoutes = ["/books/new"];
        return !excludedRoutes.some(route => req.url.includes(route));
    },

    async afterAuth(auth, req) {
        const url = new URL(req.url)
        if (url.pathname === "/books/new") {
            if (!auth.userId) {
                const loginRedirect = new URL("/sign-in", req.url);
                return NextResponse.redirect(loginRedirect);
            }
        }
        
        const user = auth.userId ? await clerkClient.users.getUser(auth.userId) : null;
        const role = user?.publicMetadata?.role;
        
        if (req.nextUrl.pathname === "/admin") {
            if (role !== 'admin') {
                const unauthorizedAccess = new URL("/unauthorized", req.url);
                return NextResponse.redirect(unauthorizedAccess);
            }
        }
    }
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
