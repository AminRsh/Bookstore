import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: (req) => {
        const excludedRoutes = ["/admin", "/books/new"];

        const isWebhookRoute = req.url.startsWith("/routes");

        return isWebhookRoute || !excludedRoutes.some(route => req.url.includes(route));
    },
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};