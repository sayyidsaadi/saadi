import Provider from "./Provider";
import "./globals.css";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata = {
  title: "Hammad Sadi",
  description: "Mern Stack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#222222]">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
