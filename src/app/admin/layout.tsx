
import { Metadata } from 'next';
import AdimnNavbar from './AdminNavbar';

export const metadata: Metadata = {
    title: "Admin"
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <AdimnNavbar />
            {children}
        </>

    )
}