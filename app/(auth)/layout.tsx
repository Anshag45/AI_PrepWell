import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();

    // Prevent logged-in users from accessing any auth page
    if (isUserAuthenticated) {
        redirect("/"); // or "/dashboard"
    }

    return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
