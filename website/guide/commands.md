# Command Reference

Generally, you should use natural language in AI tools; no manual execution required.

## 1. Discovery (`search`)
Don't know what to install? Let OneSkill help you find it.
```bash
npx oneskill search "web browser"        # Search for web browsing related skills
npx oneskill search "database" --sort stars  # Search for the most popular database skills
```

## 2. Installation (`openskills install`)
Use the standard OpenSkills command for downloads.
```bash
npx openskills install <repository-name>
# Example: npx openskills install anthropics/skills
```

## 3. Environment Mapping (`map`)
**Required for Gemini & Qwen users ONLY**
```bash
npx oneskill map --target gemini
# Or for Qwen Code:
npx oneskill map --target qwen

# If the skill was installed globally, remember to add --global
# npx oneskill map --target gemini --global
```

## 4. View Installed (`list`)
```bash
npx openskill list
```
