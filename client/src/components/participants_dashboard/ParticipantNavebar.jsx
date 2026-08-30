import {
  LayoutDashboard,
  Search,
  CalendarDays,
  BadgeCheck,
  Award,
  Bell,
  User,
  LogOut,
} from "lucide-react";

import "./ParticipantNavbar.css";

const ParticipantNavbar = () => {
  return (
    <aside className="participant-sidebar">

      {/* Logo */}
      <div className="participant-logo">
        <div className="participant-logo-icon">✦</div>
        <span>
          Event<span>Lay</span>
        </span>
      </div>

      {/* Navigation */}
      <nav className="participant-nav">

        <a href="/participant/dashboard" className="participant-nav-item">
          <LayoutDashboard size={16} />
          <span>Dashboard</span>
        </a>

        <a
          href="/participant/events"
          className="participant-nav-item active"
        >
          <Search size={16} />
          <span>Explore Events</span>
        </a>

        <a href="/participant/my-events" className="participant-nav-item">
          <CalendarDays size={16} />
          <span>My Events</span>
        </a>

        <a href="/participant/badge" className="participant-nav-item">
          <BadgeCheck size={16} />
          <span>My Badge</span>
        </a>

        <a
          href="/participant/certificates"
          className="participant-nav-item"
        >
          <Award size={16} />
          <span>Certificates</span>
        </a>

        <a
          href="/participant/notifications"
          className="participant-nav-item"
        >
          <Bell size={16} />
          <span>Notifications</span>
        </a>

      </nav>

      {/* Bottom */}
      <div className="participant-nav-bottom">

        <a href="/participant/profile" className="participant-nav-item">
          <User size={16} />
          <span>Profile</span>
        </a>

        <button className="participant-nav-item logout-btn">
          <LogOut size={16} />
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
};

export default ParticipantNavbar;