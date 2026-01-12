---
title: "I Gave Up on No-Code Workflow Engines"
date: "2026-01-11"
tags: ["AI", "Productivity", "Claude Code", "Automation"]
---

AI workflow engines like n8n, OpenAI Agent Builder, Make, or Zapier are all supposed to be no-code. And while this is technically true, I've found they're still very complex. You can't just sit down, create your workflows, and have something useful 20 minutes later.

What they're really good at is basic, simple workflows. Two or three nodes without any conditions, just a straight line. That works quite well. But once you have workflows with conditions, you also need to handle errors. Any kind of error. If you want a stable workflow, you need to set up your nodes accordingly. Doing this requires expertise, and that expertise doesn't come overnight. It's not just clicking a few buttons and getting what you want. It's way more complex than that.

Of course, those different workflow engines differ. Some are easier to handle than others. But in the end, you need to teach them what to do in what scenario. That means learning the tool, whatever tool you're using.

## Building My Second Brain

So I tried this out. I wanted to build my second brain based on a YouTube video that I really liked: [Why 2026 Is the Year to Build a Second Brain](https://www.youtube.com/watch?v=0TpON5T-Sw4). The idea is simple: use Slack as your interface. The message that comes in gets processed with AI. The result is then stored somewhere in a Notion document. Based on what category the AI assigns, or what the next reminder is for this note, you get feedback. You also get feedback if it didn't work, or if no category was found where this message would fit best. Lots of scenarios where you need conditions.

I spent two or three hours on this, and I was far from finished. I got the best case working in some of the tools I mentioned, but not all of them.

## Where It Fell Apart

We use Slack Enterprise at work, so I wanted to use Microsoft Power Automate since it's compliant. But there's no straightforward connection between the two. We spent time investigating permissions and configurations, and it still didn't work reliably. Other connectors had similar issues. Even when I got the basic flow working, I couldn't figure out how to send feedback back to the user without diving deep into the tool.

That's when I thought, "You're a developer. Just write a Slack app with Claude Code and solve this properly."

## Maybe Code Is Actually Easier

You might say, "Yes, but then you have to be a programmer. Non-programmers can't do that." I think we're wrong here. Yes, workflow engines are called no-code tools. But I would argue that Claude Code and Cursor and all those other AI coding assistants are easier to use. You just have a chat, and you have endless help out there in the community as well.

So I tried the same setup with Claude Code. I described my project. I triggered my interview skill in Claude Code, and it asked me a couple of questions that made my specification even better. Then it went into planning mode, and I went from there to implement my solution. It worked. It worked well, very well. I'm super happy.

Currently I'm going from Slack, deploying on Vercel, using the Claude SDK, and storing everything in Notion. I get all the feedback I need. I even have a scheduler that walks through all my notes every day, looks at next actions, and reminds me about them.

## Should Organizations Invest in Workflow Engines?

I'm hesitant to introduce a workflow engine into the organization. I've talked to other companies that use workflow engines such as n8n. You need to onboard people. You need to teach them how those tools work. And even after you've done that, you won't get the AI adoption you'd like to have. I'm really in doubt if this is a good investment.

What are your thoughts on AI workflow engines? What experiences have you made in your organization? I'd love to hear if I'm missing something here.
