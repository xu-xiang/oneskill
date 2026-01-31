# 命令手册

一般情况应该是在AI工具中直接自然语言交互接口，无需手动执行命令。

## 1. 发现能力 (`search`)
不知道具体要安什么？让 OneSkill 帮你找。
```bash
npx oneskill search "web browser"        # 搜索网页浏览相关技能
npx oneskill search "database" --sort stars  # 搜索最热门的数据库技能
```

## 2. 安装能力 (`openskills install`)
使用 OpenSkills 标准命令下载。
```bash
npx openskills install <仓库名>
# 例如: npx openskills install anthropics/skills
```

## 3. 接入环境 (`map`)
**仅 Gemini 用户需执行**
```bash
npx oneskill map --target gemini
# 如果是全局安装的 skill，记得加 --global
# npx oneskill map --target gemini --global
```

## 4. 查看已装 (`list`)
```bash
npx oneskill list
```
