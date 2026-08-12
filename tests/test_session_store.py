from datetime import UTC, datetime, timedelta

from src.session_store import SessionStore


def test_unknown_token_is_rejected() -> None:
    assert SessionStore().get_user("missing") is None


def test_active_session_returns_user() -> None:
    store = SessionStore()
    store.create("token", "user-123")

    assert store.get_user("token") == "user-123"


def test_expired_session_is_rejected() -> None:
    store = SessionStore(ttl_minutes=30)
    store.sessions["expired"] = (
        "user-123",
        datetime.now(UTC) - timedelta(minutes=31),
    )

    assert store.get_user("expired") is None
