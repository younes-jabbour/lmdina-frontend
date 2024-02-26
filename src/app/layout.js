import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative h-screen bg-gray-100">
        <div className="m-2">{children}</div>
      </body>
    </html>
  );
}
