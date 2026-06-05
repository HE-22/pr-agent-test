export default function AlertsPage() {
  return (
    <>
      <h1 className="page-title" data-testid="page-alerts-title">
        Alerts
      </h1>
      <p className="lead">Notifications and wins — placeholder list.</p>
      <div className="card" data-testid="alert-item-1">
        You unlocked: <span style={{ color: "var(--accent)" }}>Web preview</span>
      </div>
    </>
  );
}
