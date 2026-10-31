#!/usr/bin/env python3
"""Batch rename markdown files and ensure FR/NFR sections.

This script walks through all *.md files under the `_chapters` directory,
creates a short, deterministic filename based on the leading numeric prefix
and a slugified title, and inserts placeholder FR/NFR sections if they are
missing.

It is safe to run multiple times – it will skip already‑processed files.
"""

import os
import re
import sys
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]  # repository root (MyBook)
CHAPTERS_DIR = ROOT / "_chapters"

SLUG_RE = re.compile(r"[^a-z0-9]+")

def slugify(text: str) -> str:
    """Create a URL‑friendly slug from a title string."""
    text = text.lower()
    text = SLUG_RE.sub("-", text).strip("-")
    return text

def extract_title(content: str) -> str:
    """Extract the YAML title field from a markdown file.
    Expected format:
    ---
    title: "Some Title"
    ...
    """
    m = re.search(r"^title:\s*\"?([^\"\n]+)\"?", content, re.MULTILINE)
    if m:
        return m.group(1).strip()
    return ""

def has_section(content: str, header: str) -> bool:
    """Check if a markdown header (e.g., '## Functional requirements (FR)') exists."""
    pattern = rf"^##\s+{re.escape(header)}"  # exact header without extra spaces
    return re.search(pattern, content, re.MULTILINE) is not None

def ensure_sections(content: str) -> str:
    """Insert FR/NFR placeholders if missing.
    The placeholders are inserted after the first top‑level heading (--- front‑matter).
    """
    lines = content.splitlines()
    # Find insertion point: after the second '---' (end of front‑matter) or after first non‑empty line
    insert_idx = None
    dash_count = 0
    for i, line in enumerate(lines):
        if line.strip() == "---":
            dash_count += 1
            if dash_count == 2:
                insert_idx = i + 1
                break
    if insert_idx is None:
        # fallback: after the first line
        insert_idx = 1
    # Build placeholders
    placeholders = []
    if not has_section(content, "Functional requirements (FR)"):
        placeholders.append("## Functional requirements (FR)\n\n- _Add functional requirements here._\n")
    if not has_section(content, "Non-functional requirements (NFR)"):
        placeholders.append("## Non-functional requirements (NFR)\n\n- _Add non‑functional requirements here._\n")
    if placeholders:
        # Insert placeholders preserving surrounding blank lines
        new_lines = lines[:insert_idx] + [""] + placeholders + lines[insert_idx:]
        return "\n".join(new_lines) + "\n"
    return content

def generate_new_name(path: Path) -> Path:
    """Create a short filename.
    Preserve the leading numeric prefix (if any) and use a slug of the title.
    Example: '001-design-subscription-based-sports-website-which-can-display-score.md'
    -> '001-sports-website.md'
    """
    content = path.read_text(encoding="utf-8")
    title = extract_title(content)
    # Extract leading number from original filename
    stem = path.stem
    prefix_match = re.match(r"^(\d{3})", stem)
    prefix = prefix_match.group(1) if prefix_match else ""
    slug = slugify(title)
    # Keep slug reasonably short (max 30 chars)
    if len(slug) > 30:
        slug = slug[:30].rstrip('-')
    new_stem = f"{prefix}-{slug}" if prefix else slug
    return path.with_name(new_stem + path.suffix)

def process_file(path: Path):
    original = path
    content = original.read_text(encoding="utf-8")
    # Ensure FR/NFR sections
    updated = ensure_sections(content)
    # Write back (might be unchanged)
    if updated != content:
        original.write_text(updated, encoding="utf-8")
        print(f"Updated sections in {original.relative_to(ROOT)}")
    # Rename if needed
    new_path = generate_new_name(original)
    if new_path != original:
        # Avoid overwriting existing file
        if new_path.exists():
            # If content identical, just remove duplicate
            if new_path.read_text(encoding="utf-8") == updated:
                original.unlink()
                print(f"Removed duplicate {original.relative_to(ROOT)}")
                return
            # Otherwise, append a suffix to make unique
            counter = 1
            while True:
                candidate = new_path.with_name(new_path.stem + f"-{counter}" + new_path.suffix)
                if not candidate.exists():
                    new_path = candidate
                    break
                counter += 1
        shutil.move(str(original), str(new_path))
        print(f"Renamed {original.relative_to(ROOT)} -> {new_path.relative_to(ROOT)}")

def main():
    if not CHAPTERS_DIR.is_dir():
        sys.exit("Chapters directory not found.")
    md_files = list(CHAPTERS_DIR.rglob("*.md"))
    print(f"Found {len(md_files)} markdown files.")
    for md in md_files:
        try:
            process_file(md)
        except Exception as e:
            print(f"Error processing {md}: {e}")

if __name__ == "__main__":
    main()
