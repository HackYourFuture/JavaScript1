> If you are following the HackYourFuture curriculum we recommend you to start with module 1: [HTML/CSS/GIT](https://github.com/HackYourFuture/HTML-CSS). To get a complete overview of the HackYourFuture curriculum first, click [here](https://github.com/HackYourFuture/curriculum).

> Please help us improve and share your feedback! If you find better tutorials
> or links, please share them by [opening a pull request](https://github.com/HackYourFuture/JavaScript1/pulls).

# Module #2 - JavaScript 1: Programming Basics (Frontend)

![JavaScript1](./assets/javascript1.png)

In this module you'll make a start into wonderful world of programming. We will be using the programming language `JavaScript` to do so. You'll learn about the basic building blocks of programming: `loops`, `functions`, `control flow` and more. Consider these as the ABC's of programming, without them it's impossible to write working software!

You'll be learning two main things:

1. **Fundamental concepts in programming**. While we're using JavaScript to illustrate these concepts, it's important to keep in mind that what you will learn is applicable to **any** programming language. They might differ in syntax (a fancy term for the arrangement of words in a language in order for it to make sense), but the functionality will be the same: a loop will always be a loop.

This should be your mindset when you're learning concepts: **I'm learning how to become a software developer that can adjust to any language used, because I know what the underlying principles and concepts are**.

2. **How to think like a programmer**. In one sentence this means: knowing how to solve problems using a computer. Let's split that up in two parts: `how to solve problems` refers to the ability to identify issues and find effective solutions. `computationally` refers to the ability to think in logical steps that the computer can understand and execute.

This should be your mindset when you're learning how to think : **I'm learning how to think in logical steps, identifying cause and effect, and always looking for solutions**.

## Before you start!

### 1. Install some new software!

In order to test your JavaScript code, you'll be using software that will execute your files from the command line. This software is called [Node.js](https://nodejs.org/en/download/). Download the Long-Term Support (LTS) version for your specific operating system.

- For Windows, click [here](https://nodejs.org/dist/v12.16.1/node-v12.16.1-x86.msi)
- For Mac, click [here](https://nodejs.org/dist/v12.16.1/node-v12.16.1.pkg)
- For Linux, click [here](https://nodejs.org/dist/v12.16.1/node-v12.16.1-linux-x64.tar.xz)

After you've installed it, go to your command line interface. Type in the following command:

```
node --version
```

It should show you version `v12.16.1` or higher.

### 2. A new way of submitting homework!

Starting from this module you'll submit homework in a different way. You will be only using GIT and GitHub and work **like a real developer would**: pushing code from your computer to GitHub and making pull requests!

Before you start with the homework, make a `fork` of the following repository: [HackYourHomework/JavaScript1](https://www.github.com/hackyourhomework/javascript1). You'll always use the **HackYourHomework** version of the module repository whenever you have to submit your homework.

Here are the steps to get started:

1. `fork` the HackYourHomework repository to your personal account.
2. `clone` your forked repository to your computer.
3. Make `GIT` branches for each week. Start at the `master` branch and execute the following (note that they're 3 different commands):

```console
foo@bar:~$ git branch week1-YOURNAME
foo@bar:~$ git branch week2-YOURNAME
foo@bar:~$ git branch week3-YOURNAME
```

4. `checkout` to `week1-YOURNAME`
5. Get started with making your homework!

Here's a video in order that shows you how it's done: [How to Submit Your Homework](https://www.youtube.com/watch?v=CpYARPYGQU8)

### 3. Presentation module
Besides learing a lot of technical concepts you'll be focussing on the softskills as well. Please have a look at [this](https://github.com/HackYourFuture/presentation-module) RePo for more details.

## Learning goals

In order to successfully complete this module you will need to master the following:

- Have an idea of what `computer programming` is
- Know the basic building blocks of `JavaScript`
- Correctly write and use `variables`, `functions` and `loops`
- Understand the `control flow`

## How to use this repository

### Repository content

This repository consists of 3 essential parts:

1. `README`: this document contains all the required theory you need to understand **while** working on the homework. It contains not only the right resources to learn about the concepts, but also lectures done by HackYourFuture teachers. This is the **first thing** you should start with every week
2. `MAKEME`: this document contains the instructions for each week's homework. Start with the exercises rather quickly, so that you can ground the concepts you read about earlier.
3. `LESSONPLAN`: this document is meant for teachers as a reference. However, as a student don't be shy to take a look at it as well!

### How to study

Let's say you are just starting out with the JavaScript1 module. This is what you do...

1. The week always starts on **Wednesday**. First thing you'll do is open the `README.md` for that week. For the first week of `JavaScript1`, that would be [Week1 Reading](/Week1/README.md)
2. You spend **Wednesday** and **Thursday** going over the resources and try to get a basic understanding of the concepts. In the meanwhile, you'll also implement any feedback you got on last week's homework (from the HTML-CSS module)
3. On **Friday** you start with the homework, found in the `MAKEME.md`. For the first week of `JavaScript1`, that would be [Week1 Homework](/Week1/MAKEME.md)
4. You spend **Friday** and **Saturday** playing around with the exercises and write down any questions you might have
5. **DEADLINE 1**: You'll submit any questions you might have before **Saturday 23.59**, in the class channel
6. On **Sunday** you'll attend class. It'll be of the Q&A format, meaning that there will be no new material. Instead your questions shall be discussed and you can learn from others
7. You spend **Monday** and **Tuesday** finalizing your homework
8. **DEADLINE 2**: You submit your homework to the right channels (GitHub) before **Tuesday 23.59**. If you can't make it on time, please communicate it with your mentor
9. Start the new week by going back to point 1!

In summary:

![Weekflow](assets/weekflow.png)

To have a more detailed overview of the guidelines, please read [this document](https://docs.google.com/document/d/1JUaEbxMQTyljAPFsWIbbLwwvvIXZ0VCHmCCN8RaeVIc/edit?usp=sharing) or ask your mentor/class on Slack!

### Video lectures

For each module HackYourFuture provides you with video lectures. These are made by experienced software developers who know what they're talking about. The main teacher for this module will be [Uday Khaki](https://hackyourfuture.slack.com/team/U3T5HDP0W): former HackYourFuture student and now successful web developer for several years!

You can find out more about him here:

- [@Uday on Slack](https://hackyourfuture.slack.com/team/U3T5HDP0W)

Learn from Uday in the following playlist of videos he has made for you! (Click on the image to open the link)

<a href="https://www.youtube.com/playlist?list=PLVYDhqbgYpYUiqH8IxLJ5qomkEGMzes1q" target="_blank"><img src="./assets/week1-uday.png" width="600" height="350" alt="HYF Video" /></a>

## Planning

| Week | Topic | Reading Materials     | Homework      | Lesson Plan  |Presentation module |
| ---- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |-----------|
| 1.   | What is JavaScript?, Variables, Data Structures & Naming Conventions              | [Reading W1](https://github.com/HackYourFuture/JavaScript1/tree/master/Week1/README.md) | [Homework W1](https://github.com/HackYourFuture/JavaScript1/tree/master/Week1/MAKEME.md) | [Lesson Plan W1](https://github.com/HackYourFuture/JavaScript1/tree/master/Week1/LESSONPLAN.md) |[W1 presentations](https://github.com/HackYourFuture/presentation-module/blob/main/week1.md) |
| 2.   | Statements vs. Expressions, Control flow, Loops, Operators, Conditional statement | [Reading W2](https://github.com/HackYourFuture/JavaScript1/tree/master/Week2/README.md) | [Homework W2](https://github.com/HackYourFuture/JavaScript1/tree/master/Week2/MAKEME.md) | [Lesson Plan W2](https://github.com/HackYourFuture/JavaScript1/tree/master/Week2/LESSONPLAN.md) |[W2 presentation](https://github.com/HackYourFuture/presentation-module/blob/main/week2.md) |
| 3.   | Functions, Thinking like a programmer I, How JavaScript relates to HTML/CSS       | [Reading W3](https://github.com/HackYourFuture/JavaScript1/tree/master/Week3/README.md) | [Homework W3](https://github.com/HackYourFuture/JavaScript1/tree/master/Week3/MAKEME.md) | [Lesson Plan W3](https://github.com/HackYourFuture/JavaScript1/tree/master/Week3/LESSONPLAN.md) |

## Finished?

Did you finish the module? Good job! You're doing great!

If you feel ready for the next challenge, click [here](https://www.github.com/HackYourFuture/JavaScript2) to go to JavaScript2!

_The HackYourFuture curriculum is subject to CC BY copyright. This means you can freely use our materials, but just make sure to give us credit for it :)_

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
