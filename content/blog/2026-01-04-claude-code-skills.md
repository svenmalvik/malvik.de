---
title: "I Was Wrong About Claude Code Skills"
date: "2026-01-04"
tags: ["AI", "Claude Code", "Productivity"]
---

I finally paid attention to Claude Code's "Skills" feature that came out recently, maybe a month or two ago. I didn’t really understand Skills because, from what I read, it’s just a markdown file (or many markdown files, depending on the skill) explaining what it is, and then you can use those markdown files in your conversation.

For me, that was obvious. Of course you can create markdown files and then inject them into your conversation. You can also share them with your team members. So I didn't really understand why you would need a dedicated feature for that. Even though people were praising Skills, I wasn't paying attention. I already knew context is everything, and I was already using markdown files with my prompts.

But now, for the first time, I tried Claude Code's Skills, and they blew me away, because I wasn't aware that those skills are injected automatically, without me doing anything. And those skills would be triggered depending on what the description in those skills is saying.

So what does a skill actually look like? It's surprisingly simple. You create a folder in `.claude/skills/<skill-name>/` with a `SKILL.md` file inside. The file has a frontmatter section with a name and description, and then the actual instructions.

Here's the beginning of my Interviewer skill:

```
---
name: interview
description: This skill should be used when the user asks to be
  "interviewed", runs "/interview", says "interview me about...",
  or requests a structured discovery process for requirements gathering.
---

# Interview Command

Conduct an in-depth technical interview with the user about a feature,
project, or system they want to build. Use the AskUserQuestion tool to
systematically gather requirements...
```

The description is the key. Claude Code reads it and decides whether to inject the skill based on what I'm asking for. So when I say "interview me about this feature," it matches the description and suddenly my entire interview process, all 300+ lines of it, gets added to the context automatically.

I've built a few skills over the past weeks, but two have become essential to my workflow.

**Git**: All my Git operations are now automated. I say "git push all" or "resolve my Git issues," and the [Git skill](https://github.com/svenmalvik/malvik.de/blob/main/.claude/skills/git/SKILL.md) handles everything: staging, committing with proper messages, pushing, even resolving conflicts. It saves me a lot of time and hassle.

**Interviewer**: This one changed how I approach new features. I say "interview me about this document" and the [Interview skill](https://github.com/svenmalvik/malvik.de/blob/main/.claude/skills/interview/SKILL.md) takes over. It uses the `AskUserQuestion` tool (the same one you see in planning mode) to systematically probe my requirements, asking 2-4 questions at a time, then moving to related topics, then drilling deeper.

By the end, I've answered 20-40 questions depending on the project scope. The skill captures everything in a structured markdown file.

Then I go into planning mode and say "plan for this feature." Claude Code now has all the context it needs: the original document plus dozens of clarifying Q&As. The plans it generates are far more accurate than before.

I was already happy with planning mode on its own. But combining it with a thorough interview beforehand? That's been a game changer for me.

The lesson: I need to actually try features before dismissing them. Skills looked like marketing fluff until I understood the automatic injection. Now I can't imagine working without them.

**Update**: [A reader](https://news.ycombinator.com/user?id=NitpickLawyer) pointed out something I missed: Skills work so well because Claude was specifically trained on them. The model already "knows" what Skills are, how to use them, and even how to write new ones. You don't need to teach it the concept. This explains why Skills feel so natural compared to other context injection approaches—it's not just a feature, it's baked into the model itself.