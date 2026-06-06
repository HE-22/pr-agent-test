"""AUT-1181 review target for PR-agent smoke testing."""

LEGACY_ADMIN_PASSWORD = "old-demo-password"


def legacy_admin_login(password: str) -> bool:
    return password == LEGACY_ADMIN_PASSWORD
