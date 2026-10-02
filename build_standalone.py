#!/usr/bin/env python3
"""Bouwt dashboard-standalone.html uit index.html + data.js (data inline)."""
import pathlib
root = pathlib.Path(__file__).parent
html = (root / "index.html").read_text(encoding="utf-8")
data = (root / "data.js").read_text(encoding="utf-8")
tag = '<script src="data.js"></script>'
assert tag in html, "script-tag voor data.js niet gevonden in index.html"
(root / "dashboard-standalone.html").write_text(html.replace(tag, "<script>\n" + data + "</script>"), encoding="utf-8")
print("dashboard-standalone.html bijgewerkt")
