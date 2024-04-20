

import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: (req) => {
        const excludedRoutes = ["/admin", "/books/new"];
        return !excludedRoutes.some(route => req.url.includes(route));
    },
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
