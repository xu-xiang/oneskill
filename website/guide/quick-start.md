# Quick Start

## Step 1: Install OneSkill (Once only)

```bash
# Install the core tool
npx openskills install xu-xiang/oneskill --global

# (Only required for Gemini/Qwen users) Map OneSkill itself to .gemini or .qwen
npx oneskill map --target gemini --global
# Or for Qwen Code:
npx oneskill map --target qwen --global
```

## Step 2: Unlock Infinite Possibilities

Once installed, simply ask your Agent (Claude Code, Codex, Gemini-cli, etc.) to find and recommend suitable skills or use natural language to have it check for a skill to solve the problem at hand. OneSkill will handle the rest.

### Scenario: Autonomous Evolution in Chat

You don't even need to leave the chat window. Just tell your Agent what you need, and let OneSkill do the heavy lifting.

The following real chat record shows how an Agent instantly gains **FastAPI development capabilities** via OneSkill:

```text
> Find me a production-ready template for FastAPI. I want to build a project quickly.

✦ Sure, I'll use oneskill to search for relevant Skills.

  ╭── Shell: npx oneskill search "fastapi template" ───────────────────────────╮
  │                                                                            │
  │ {                                                                          │
  │   "items": [
  │     {                                                                      │
  │       "slug": "wshobson-fastapi-templates",                                │
  │       "description": "Production-ready FastAPI project structures...",     │
  │       "repository": "wshobson/agents",                                     │
  │       "stars": 23027                                                       │
  │     }
  │   ]
  │ }
  ╰────────────────────────────────────────────────────────────────────────────╯

✦ Found `wshobson-fastapi-templates` in the `wshobson/agents` repository.
  This is a very popular Skill (23k+ stars) that provides a production-grade project structure. Would you like me to install it for you?

> Yes, install it.

✦ Installing and configuring for Gemini...

  ╭── Shell: npx openskills install wshobson/agents && npx oneskill map ───────╮
  │                                                                            │
  │ ✔ Repository cloned                                                        │
  │ Found 140 skill(s)                                                         │
  │                                                                            │
  │ ? Select skills to install: (Press <space> to select, <i> to invert)       │
  │ ❯ ◉ fastapi-templates                                                      │
  │   ◯ architecture-patterns                                                  │
  │   ◯ api-design-principles                                                  │
  │   ↓ Scroll down for more...                                                │
  │                                                                            │
  │ [Agent Action]: Selected 'fastapi-templates' and confirmed                 │
  │                                                                            │
  │ ✅ Installed: fastapi-templates                                            │
  │                                                                            │
  │ [Auto-trigger mapping]                                                     │
  │ ✔ Mapped 1 skills to Gemini CLI configuration.                             │
  ╰────────────────────────────────────────────────────────────────────────────╯

✦ Installation complete! I have learned `fastapi-templates`.
  Now you can ask me: "How do I use this template to create a new project with async mode?"
```

**💥 Result**: The Agent automatically completed the search, download, filtering, and environment configuration without you having to type a single command.
