---
title: "I Built Vissper Three Times Before Getting It Right"
---

Ever since generative AI came out and people started talking about agents, I kept thinking about what it would be like to have an AI meeting companion. Someone that listens to your meetings, gives input, creates summaries and action points, highlights the main ideas, and maybe takes screenshots when something important is on screen. A real companion that acts like an actual contributor. How great would that be?

So I started building one.

## The Journey

The first step was figuring out transcription. You need something that takes your speech and converts it into text. There are plenty of STT models out there, so I started experimenting with Whisper on my local machine. It worked, but it wasn't great. I tried different models, and some were better than others.

Then I decided to create an actual product. I built a transcription engine with Homebrew and TypeScript. I wanted it to work on both Windows and Mac. I'm on a Mac, and it worked great there. But then I started wondering: how can I bring this to everyday people who don't work in the terminal? The obvious solution was to build a real application.

I thought a menu bar app would be perfect for Mac. So I created the whole thing from scratch using Electron. It worked, but the application was half a gigabyte. I kept refactoring and adding features I didn't actually need.

So I started over. Again. This time in Rust.

## Vissper Today

The current version is built in Rust with Swift integration for Mac. In theory, I could port it to Windows, but I haven't done that yet.

So what does it actually do? You hit Control + Space to start recording. Vissper listens to your microphone and transcribes in real time, so you can see what's happening as you speak. When you're done, you have three options.

The first one is just stopping. The raw transcription gets copied to your clipboard, and you can paste it wherever you want.

The second option is **Polish**. This cleans up all the "ums" and weird speech patterns we all have, fixes the grammar, and makes it look great. I use this constantly for short text when I want to talk to my computer instead of typing.

The third option is **Meeting Notes**. This takes the raw transcription and creates a full summary with action points, main ideas, and a polished version of the transcript organized into readable paragraphs.

You can also take screenshots during meetings. Vissper merges them into the transcription at the exact moment they were captured. Everything gets saved as Markdown or PDF, and it's always copied to your clipboard too.

## Why I Built This

I always wanted a meeting companion, but there was another reason. I discovered SuperWhisper and loved being able to talk to my computer instead of typing everything. I used it for a while.

But at some point, I wanted more. I wanted a real meeting companion. And I wanted control over which models I used.

The open-source version lets you bring your own API keys for OpenAI or Azure OpenAI. It uses gpt-4o-transcribe for the transcription and GPT-5.1 for summaries and polishing. I'm also working on a version that includes ElevenLabs, which has really great speech-to-text models. That version won't require you to bring your own API keys.

## Try It Out

The [open-source version of Vissper](https://github.com/svenmalvik/vissper-oss) is now on GitHub. You bring your own API keys, and you're in full control.

I'm also working on a hosted version at [malvik.de/vissper](https://malvik.de/vissper) where you won't need to bring your own keys. That one's coming soon.

I'd love for you to try it and share your ideas. There's so much more we could add, like asking questions during meetings. I haven't built that yet, but I want to. Create issues, submit pull requests, or just let me know what you think.

The lesson: sometimes you have to build something three times to get it right. The Electron version taught me what I didn't want. The Rust version became what I actually needed.
