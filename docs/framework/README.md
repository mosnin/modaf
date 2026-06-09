# SaaS Framework Repository

This repository is a reusable framework pack for starting SaaS website and application projects with Claude.

## Purpose

This repo provides a two layer system:

1. Framework layer  
   Reusable operating system files for website structure, internal app structure, design systems, routing, build rules, and initialization prompts.

2. Project layer  
   Generated inside each actual app repository from the templates in this repo. The project layer contains app specific documents such as the app idea, feature spec, user flows, edge cases, tech stack, permissions matrix, and acceptance criteria.

## Recommended Usage

Inside a new project repository:

1. Import the framework pack into `docs/framework`:

   ```bash
   npx degit mosnin/modaf/docs/framework docs/framework
   ```

2. Activate it by referencing it from your project's root `CLAUDE.md`:

   ```bash
   echo "@docs/framework/CLAUDE.md" >> CLAUDE.md
   ```

3. Start a Claude Code session and describe your app idea. The framework works in phases: it interviews you, generates `docs/project/*` from the template files, plans the architecture, and only then begins implementation.
4. Treat:
   - `docs/framework/*` as reusable defaults
   - `docs/project/*` as app specific source of truth

## Repository Structure

```text
docs/
  framework/
    CLAUDE.md      # Phase-by-phase operating instructions for the agent
    MANIFEST.md    # One-line description of every file
    website/
    internal/
    templates/
    prompts/
    phases/
```

## Framework Philosophy

- Website docs govern the external acquisition layer
- Internal docs govern the product application layer
- Template docs define the shape of project specific documents
- Prompt docs define the initialization and execution sequence

## Notes

This repository should remain static and reusable. App specific filled out documents should be created in the target project repository, not committed here as live product docs.
