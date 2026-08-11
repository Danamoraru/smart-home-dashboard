function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        🏠 Smart Home
      </div>

      <nav className="sidebar-nav">
        <a href="#">🏠 Dashboard</a>
        <a href="#">💡 Devices</a>
        <a href="#">⚡ Energy</a>
        <a href="#">🔒 Security</a>
        <a href="#">👤 Profile</a>
      </nav>
    </aside>
  )
}

export default Sidebar