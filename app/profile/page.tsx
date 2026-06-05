export default function ProfilePage() {
  return (
    <>
      <h1 className="page-title" data-testid="page-profile-title">
        Profile
      </h1>
      <p className="lead">Account and settings stub.</p>
      <div className="card" data-testid="profile-summary">
        <p style={{ margin: 0 }}>
          <strong>@you</strong>
          <br />
          <span style={{ color: "var(--muted)" }}>Bio and stats go here.</span>
        </p>
      </div>
    </>
  );
}
