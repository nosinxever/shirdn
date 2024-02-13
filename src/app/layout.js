import "./globals.css";

export const metadata = {
  title: "Happy valentine's day",
  description: "Happy valentine's day",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  );
}
