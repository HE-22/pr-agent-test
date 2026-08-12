"""Tiny session store used to exercise Autosana's PR review agent."""

from datetime import UTC, datetime, timedelta


class SessionStore:
    def __init__(self, ttl_minutes: int = 30) -> None:
        self.ttl = timedelta(minutes=ttl_minutes)
        self.sessions: dict[str, tuple[str, datetime]] = {}

    def create(self, token: str, user_id: str) -> None:
        self.sessions[token] = (user_id, datetime.now(UTC))

    def get_user(self, token: str) -> str | None:
        session = self.sessions.get(token)
        if session is None:
            return None

        user_id, created_at = session
        if datetime.now(UTC) - created_at > self.ttl:
            return None

        return user_id
