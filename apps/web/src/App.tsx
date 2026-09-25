function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>CRM</h1>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Contacts</a>
          <a href="#">Deals</a>
          <a href="#">Tasks</a>
          <a href="#">Reports</a>
        </nav>
      </aside>

      <main className="content">
        <header className="topbar">
          <h2>Sales Dashboard</h2>
          <button>+ New Deal</button>
        </header>

        <section className="stats-grid">
          <div className="card">
            <span>Total customers</span>
            <strong>1,240</strong>
          </div>
          <div className="card">
            <span>Open deals</span>
            <strong>328</strong>
          </div>
          <div className="card">
            <span>Revenue</span>
            <strong>$128.4K</strong>
          </div>
          <div className="card">
            <span>Pipeline</span>
            <strong>$48.2K</strong>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
