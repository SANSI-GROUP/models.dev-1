# models.dev-1 — Custom Models Registry

This is a custom models registry for the **Lightweight AI coding assistant**, synced from upstream [anomalyco/models.dev](https://github.com/anomalyco/models.dev).

## Project Structure

- `/providers/` — Provider configuration files (JSON/TOML)
- Model configs are JSON files describing AI model metadata
- Default branch: `dev`

## Conventions

- Keep config files valid JSON/TOML at all times
- Required model fields: `name`, `provider`, `description`
- URLs must be properly formatted
- No duplicate model entries
- Follow existing naming conventions for new entries
- Do NOT modify `.github/workflows/*.yml` — managed separately
- Do NOT modify `.gitattributes` or `.gitignore`

## Sync

This repo syncs from upstream `anomalyco/models.dev` every 6 hours. Custom models (e.g. claude-opus-4.6, gemini-3.1-pro, gpt-5.2-codex) are maintained in `providers/` and preserved during sync.
