import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function AuthLayout({ children }) {
    return (
        <div className="p-0">
            <Navbar />
            <div style={{ minHeight: "90vh" }} className="mt-[60px]">

                {children}
            </div>
            <Footer />
        </div>
    );
}
