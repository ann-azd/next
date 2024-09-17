import './ui/global.css';
import {montserrat} from './ui/fonts'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {" "}
        {/*añadimos una fuente de google de manera local */}
        {children}
      </body>
      <footer className='py-10 flex justify-center items-center text-4xl font-semibold text-slate-300'>
        Hecho por alguien más 😒👌
      </footer>
    </html>
  );
}
