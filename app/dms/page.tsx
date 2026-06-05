export default function DmsPage() {
  return (
    <>
      <h1 className="page-title" data-testid="page-dms-title">
        DMs
      </h1>
      <p className="lead">Direct messages — inbox stub for local testing.</p>
      <ul style={{ paddingLeft: "1.25rem", color: "var(--muted)" }} data-testid="dms-list">
        <li>Sample conversation A</li>
        <li>Sample conversation B</li>
      </ul>
    </>
  );
}
