import LoadingBar from "./components/loading/Loading";
import NavBar from "./components/navBar/NavBar";
import { AppProvider } from "./context/appContext";
import "./globals.css";

export const metadata = {
  title: "Jose Martínez Flat 101",
  description: "Prueba Técnica Flat 101",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <LoadingBar />
          <div className="layout">
            <header
              style={{ padding: "1rem", background: "#222", color: "#fff" }}
            >
              <NavBar />
            </header>
            <main>{children}</main>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
