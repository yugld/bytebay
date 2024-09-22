import { cookies } from "next/headers";
import { getServerSideUser } from "@/lib/payload-utils";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
    const nextCookies = cookies();
    const { user } = await getServerSideUser(nextCookies);

    return <NavbarClient user={user} />;
};

export default Navbar;
