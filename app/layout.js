import "./globals.css";

export const metadata = {
  title: "Jose Martínez Flat 101",
  description: "Prueba Técnica Flat 101",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout">
          <header
            style={{ padding: "1rem", background: "#222", color: "#fff" }}
          >
            <h1>Rick and Morty App</h1>
            <nav>
              <a href="/episodes">Episodios</a>
              <a href="/locations">Localizaciones</a>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
