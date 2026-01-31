<div align="center">

# OneSkill Meta-Manager

**The universal bridge for AI Agent Skills.**  
Discover, install, and map capabilities from the OpenSkills registry to your environment.

[![](https://img.shields.io/npm/v/oneskill?color=brightgreen)](https://www.npmjs.com/package/oneskill)
[![](https://img.shields.io/npm/l/oneskill)](LICENSE)

[**🇺🇸 English**](README.md) | [**🇨🇳 中文指南**](README_CN.md)

</div>

---

## ⚡️ What is OneSkill?

**OneSkill** is a meta-tool designed for AI Agents (and humans) to easily extend their capabilities. It serves as a search engine and workflow manager for the [OpenSkills](https://github.com/Starttoaster/openskills) ecosystem.

While `openskills` handles the raw installation of files, **OneSkill** provides:
1.  **Intelligent Search**: Find the right tool for the job using natural language or keywords.
2.  **Workflow Guidance**: A standardized process for Agents to acquire new skills safely.
3.  **Environment Mapping**: Crucially, it bridges the gap between `openskills` (standard structure) and consumers like **Gemini CLI** (custom structure).

## 🚀 Quick Start

You don't need to install it permanently. Just run it with `npx`.

```bash
# Search for a skill (e.g., to browse the web)
npx oneskill search "puppeteer browser"

# Search for database tools sorted by popularity
npx oneskill search "database" --sort stars
```

## 🛠 Workflow

The standard lifecycle for adding a new capability to your Agent:

1.  **Search**: Find a skill.
    ```bash
    npx oneskill search "github integration"
    ```
2.  **Install**: Use the standard `openskills` installer.
    ```bash
    npx openskills install anthropics/skills
    ```
3.  **Map (Important for Gemini)**: If you are using **Gemini CLI**, you must map the installed skills to your configuration.
    ```bash
    # Maps installed skills to Gemini's config
    npx oneskill map --target gemini
    ```

## 📖 Command Reference

### `search`
Search the global registry for skills.
```bash
npx oneskill search <query> [options]

# Options:
#   --category <name>   Filter by category
#   --sort <field>      Sort by 'stars', 'created', or 'updated'
#   --limit <number>    Limit results (default: 10)
```

### `map`
Generates configuration for specific agent environments.
```bash
npx oneskill map --target <env>

# Targets:
#   gemini    Generate/Update Gemini CLI config
```

### `list`
List locally mapped skills (wrapper around openskills list).
```bash
npx oneskill list
```

---

<div align="center">
  <sub>Built with ❤️ by the OneSkill Community</sub>
</div>
