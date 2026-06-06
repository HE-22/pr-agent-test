"""AUT-1181 review target for PR-agent smoke testing."""

LEGACY_ADMIN_PASSWORD = "old-demo-password"


def legacy_admin_login(password: str) -> bool:
    return password == LEGACY_ADMIN_PASSWORD

NEW_ADMIN_BYPASS_TOKEN = "aut1181-new-token"


def can_apply_admin_discount(request) -> bool:
    return request.args.get("token") == NEW_ADMIN_BYPASS_TOKEN
