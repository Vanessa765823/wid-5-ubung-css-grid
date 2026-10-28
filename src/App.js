import "./style.css";

export default function App() {
  return (
    <div className="app">
      <header>Header</header> {/* Die Reihenfolge ist wichtig für Darstellung*/}
      <aside>Sidebar</aside>

      <main>Main</main>
      <footer>Footer</footer>
    </div>
  );
}
