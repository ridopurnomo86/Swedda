import { NextResponse } from "next/server";
import routes from "routes";

export default function middleware(req) {
    const token = req.cookies[process.env.COOKIE_USER];
    const routeData = routes.find((item) => item.path === req.page.name);
    if (!token && routeData?.isProtected) return NextResponse?.redirect("/signin");
    if (token && routeData?.isProtected === false) return NextResponse?.redirect("/");
    NextResponse.next();
}
