import Navbar from "@/components/home/navbar";

export default function HomeLayout({children}: {children: React.ReactNode}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}