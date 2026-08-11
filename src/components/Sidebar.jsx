import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        🏠 Smart Home
      </div>

      <nav className="sidebar-nav">
        <Link to="/">
          🏠 Dashboard
        </Link>

        <Link to="/devices">
          💡 Devices
        </Link>
          <Link to="/energy">
          ⚡ Energy
        </Link>
        <Link to="/security">
          🔒 Security
        </Link>
      </nav>
    </aside>
  )
}

export default Sidebar