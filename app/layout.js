
import './globals.css'
import LoginOverlay from './components/LoginOverlay'


export const metadata = {
    title: 'Qall App',
    description: 'Qall App',
}
export default function RootLayout({ children }) {
   

    return (
        <html lang="en">
            <body>
                <LoginOverlay />
                {children}
            </body>
        </html>
    )
}
