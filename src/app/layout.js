export const metadata = {
    title: 'StayManager',
    description: 'Gestión hotelera',
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="es">
        <body>
          {children}
        </body>
      </html>
    );
  }