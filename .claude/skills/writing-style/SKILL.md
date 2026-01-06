---
name: writing-style
description: This skill should be used when the user asks to write blog posts, articles, or any content for their website. Also use when editing or reviewing written content for tone consistency. Ensures all written content matches Sven's personal voice and style.
---

# Sven's Writing Style Guide

When writing or editing content for Sven, follow this style guide to maintain his authentic voice.

## Titles

### Style
- Use first-person perspective: "I Was Wrong About...", "Why I Finally...", "What I Learned..."
- Keep them humble and honest, not clickbait
- Avoid colons and subtitles. Simple, direct statements work better
- Make the title a genuine admission or observation, not a claim of expertise

### Good Examples
- "I Was Wrong About Claude Code Skills"
- "The Feature I Almost Ignored"
- "What I Misunderstood About Planning Mode"

### Avoid
- "The Ultimate Guide to..." (too authoritative)
- "X: A Complete Overview" (too formal, uses colon)
- "How to Master..." (implies expertise over discovery)

## Core Tone

### Personal and Conversational
- Write as if talking to a friend or colleague, not lecturing
- Use first person ("I", "for me", "my experience") extensively
- Share the personal journey, not just the conclusion
- Include real examples from actual workflow and experiences

### Humble and Self-Reflective
- Openly admit mistakes and changed opinions
- Share initial skepticism before revelations
- Use phrases like "I wasn't aware", "I didn't really understand", "Sorry for that"
- Be transparent about learning process

### Genuinely Enthusiastic
- Express real excitement when something impresses: "absolutely fantastic", "blew me away", "game changer"
- Keep enthusiasm authentic, not performative or over-the-top
- Balance excitement with substance

## Sentence Structure

### Flow and Connection
- Use longer sentences connected with "and", "so", "because"
- Let thoughts flow naturally as if speaking
- Include parenthetical asides and reflections
- Transition naturally: "So today...", "But now...", "And the other skill..."

### Short Paragraphs
- Keep paragraphs to 2-4 sentences maximum
- One idea per paragraph
- Let white space create breathing room
- Dense walls of text feel academic, not conversational

### Rhetorical Questions
- Ask questions and answer them immediately
- "So what does a skill actually look like? It's surprisingly simple."
- Creates natural pacing and anticipation
- Mimics how we explain things in conversation

### Specific Numbers
- Use concrete numbers when relevant: "300+ lines", "20-40 questions", "2-4 questions at a time"
- Specificity adds credibility and helps readers visualize
- Avoid vague quantifiers like "many" or "several" when you know the actual number

### Numbering and Lists
- Use natural verbal numbering: "The first one is...", "And the other skill..."
- Use **bold** for key terms being introduced or emphasized
- Avoid rigid bullet points in flowing narrative sections
- When lists are needed, keep them conversational

## Voice Characteristics

### Transparency
- Show how opinions evolved, not just final conclusions
- Include the "before and after" of understanding
- Share why you initially missed or dismissed something
- Make the reader feel part of your discovery

### Directness
- Be clear and direct without being blunt
- Explain technical concepts through personal workflow
- Use specific, concrete examples over abstractions
- Say what you mean without hedging excessively

## What to Avoid

- Em dashes (—). Use periods or commas instead
- Academic or formal tone
- Passive voice when active is more natural
- Generic advice without personal experience
- Over-explaining or being condescending
- Excessive hedging or qualifications
- Marketing-speak or buzzwords
- Unnecessary jargon when simple words work

## Example Patterns

### Good: Personal Journey
"I didn't really understand Skills because, from what I read, it's just a markdown file. But now, for the first time, I tried Claude Code's Skills, and they blew me away."

### Good: Humble Admission
"And what I learned is that I need to pay attention. I shouldn't just assume features are nonsense. Sorry for that."

### Good: Enthusiastic but Grounded
"It saves me a lot of time and hassle. And that's absolutely fantastic."

### Good: Specific Examples
"I just say 'git push all,' or 'resolve my Git issues,' or whatever I want to do with Git, and my Git skill would then be invoked and it would do its job."

### Good: Rhetorical Question
"So what does a skill actually look like? It's surprisingly simple."

### Good: Clear Ending
"The lesson: I need to actually try features before dismissing them. Skills looked like marketing fluff until I understood the automatic injection."

## Structure

### Opening
- Start with a personal hook or immediate context
- Jump right into the story. No preamble or "In this post, I will..."
- First sentence should set the scene: "I finally paid attention to..."

### Ending
- Close with a clear, direct lesson or takeaway
- Use "The lesson:" or similar framing to signal the conclusion
- Keep it to 1-2 sentences
- Example: "The lesson: I need to actually try features before dismissing them."

## Blog Post Frontmatter

Every blog post requires proper YAML frontmatter. Missing fields will break the blog page.

```yaml
---
title: "I Built Vissper Three Times Before Getting It Right"
date: "2026-01-06"
tags: ["AI", "Vissper", "Open Source"]
---
```

Required fields:
- **title**: The post title in quotes
- **date**: Publication date in "YYYY-MM-DD" format (must match filename date)
- **tags**: Array of relevant tags like "AI", "Claude Code", "Productivity", "Open Source"

## Application

When writing new content:
1. Start with a personal hook or observation
2. Share the journey, including initial doubts or confusion
3. Use specific examples from real experience
4. Express genuine reactions to discoveries
5. End with a clear takeaway prefixed by "The lesson:" or similar
6. Keep the conversational flow throughout

When editing existing content:
1. **Search for all em dashes (—) first** - use grep or search to find every instance. Do not miss any. Replace with commas, periods, or colons depending on context
2. Check for authentic voice vs generic tone
3. Ensure first-person perspective is maintained
4. Add specific examples where content feels abstract
5. Soften any lecturing or preachy passages
6. Verify enthusiasm feels genuine, not forced
