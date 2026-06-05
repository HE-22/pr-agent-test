export default function TrackerPage() {
  return (
    <>
      <h1 className="page-title" data-testid="page-tracker-title">
        Tracker
      </h1>
      <p className="lead">Progress and habits — matches the mobile Tracker tab.</p>
      <div className="card" data-testid="tracker-stub">
        <p style={{ margin: 0 }}>Chart or checklist UI can plug in here later.</p>
      </div>
    </>
  );
}
