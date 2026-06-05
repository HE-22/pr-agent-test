import Link from "next/link";

const links = [
  { href: "/", label: "Feed" },
  { href: "/discover", label: "Discover" },
  { href: "/dms", label: "DMs" },
  { href: "/tracker", label: "Tracker" },
  { href: "/alerts", label: "Alerts" },
  { href: "/profile", label: "Profile" },
] as const;

export function SiteNav() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "rgba(13, 13, 20, 0.92)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(8px)",
      }}
      data-testid="site-nav"
    >
      <nav
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.5rem 1rem",
          alignItems: "center",
          maxWidth: 900,
          margin: "0 auto",
          padding: "0.75rem 1rem",
        }}
        aria-label="Main"
      >
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            style={{
              color: "var(--text)",
              fontWeight: 700,
              fontSize: "0.875rem",
              textDecoration: "none",
            }}
            data-testid={`nav-link-${item.label.toLowerCase()}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
