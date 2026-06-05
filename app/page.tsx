import { siteConfig } from "@/config/site";

export default function FeedPage() {
  return (
    <>
      <h1 className="page-title" data-testid="page-feed-title">
        Feed
      </h1>
      <p className="lead">Home stream placeholder — mirrors the mobile Feed tab.</p>
      <div className="card" data-testid="feed-card-1">
        <strong>{siteConfig.name}</strong>
        <p style={{ color: "var(--muted)", margin: "0.5rem 0 0" }}>
          Static sample post. Hook this page to your API when you are ready.
        </p>
      </div>
      <div className="card" data-testid="feed-card-2">
        <strong>Another card</strong>
        <p style={{ color: "var(--muted)", margin: "0.5rem 0 0" }}>
          Use this layout to sanity-check navigation and styles.
        </p>
      </div>
    </>
  );
}
