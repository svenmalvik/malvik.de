---
title: "I Gave GitHub Copilot an Hour and Left Disappointed"
date: "2026-01-19"
tags: ["AI", "Claude Code", "GitHub Copilot", "Developer Tools"]
---

Today I tried GitHub Copilot. I wanted to know how it compares to Claude Code, so I had a project in mind: a bionic reading web app to measure how fast I can read and maybe help me read faster. I saw this idea in a LinkedIn post a couple of days ago, and it seemed like a good test case.

I downloaded the terminal app, installed it, and used the `/models` command to choose Claude Opus 4.5. Exactly the same model I would be using with Claude Code, so I could compare the AI coding assistance, not the underlying models.

**The specification problem**

I described the idea and asked it to write a specification to a Markdown file. That worked fine. But when I described the project briefly, as I'm used to doing with Claude Code, what I got was more detail but not really a specification. This was disappointing. I expected something extensive and detailed, with all the edge cases I hadn't thought about.

Now, you could argue that Claude Code also doesn't always write exactly what you want. True. But I at least know about those edge cases and can correct them. What I usually do in Claude Code is use an **interview skill** to ask me lots of questions about the specification so it becomes very detailed and very accurate.

Copilot has this concept of skills too. However, when I asked it to interview me, it didn't really interview me. It asked questions and then I had to type. There was no multiple choice or anything to help me navigate. It was basically like a traditional AI chat, nothing more. I did it anyway, and the specification got a little better, but it was far from what I'm used to in Claude Code.

**Where's planning mode?**

What I usually do in Claude Code is go into **planning mode** and tell it to plan the implementation based on the specification. Copilot's documentation mentions a plan mode, but I couldn't find it in Copilot itself. There's no slash command for it.

What is there is a slash command for **agents**. So I researched a bit and found out that the agent command also covers planning. I tried using that, but then it said I hadn't configured any agents yet and that I should visit a certain website for more info. So I read all about it, of course. And I wasn't any smarter after that. I spent maybe 15 minutes reading documentation and still didn't have the plan mode I'm used to.

Also, when I want to do something else, I'm used to exiting Claude Code, coming back later, and resuming a previous conversation. I wasn't able to do that in Copilot either.

**The result**

In one hour, I was able to create a tiny specification that basically doesn't contain anything. No technical details, nothing. In Claude Code, I would have been finished with the complete setup of the project.

I'm pretty sure, based on the documentation, that all these nice features will come. They're just not there yet. And that's fine from Microsoft's perspective, maybe not fine for me.

I'm very biased because I really enjoy Claude Code. When I hear people praise GitHub Copilot, that's fine. But when I then see that all the features are not there, I'm disappointed. I guess it will take six more months before I revisit and re-evaluate.

I was really hoping to finish a complete project with GitHub Copilot. Instead, I spent a lot of time for basically nothing. I would have loved to go more in depth, but I'm mentally not able to when the coding assistant can't even do the small things.

The lesson: features on paper and features in practice are two different things. I'll check back in six months.
