# :construction_worker: Contributing to Ultimate Money Control

Thank you for considering contributing to the Ultimate Money Control! Welcome to our Contribution Guide.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Reporting an Issue](#reporting-an-issue)
3. [Cloning the repository](#cloning-the-repository)

## Getting Started

If you don't want contribute with code, but want to help us Reporting Issues, just skip to [Reporting an Issue](#reporting-an-issue) section.

However, if you prefer to work with code, simply go to [Cloning the repository](#cloning-the-repository) section and continue to the end of this document.

We follow (or try to) this code architecture principles:

* [OOP](https://en.wikipedia.org/wiki/Object-oriented_programming)
* [SOLID](https://en.wikipedia.org/wiki/SOLID)
* [Design Patterns](https://en.wikipedia.org/wiki/Software_design_pattern)
* [DRY - Don't Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
* [KISS - Keep It Simple, Stupid](https://en.wikipedia.org/wiki/KISS_principle)
* [YAGNI - You Aren't Gonna Need It](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it)

## Reporting an Issue

1. Describe what you expected to happen and what actually happens.

2. If possible, include a minimal but complete example to help us reproduce the issue.

3. We'll try to fix it as soon as possible but be in mind that CoreZipCode is open source and you can probably submit a pull request to fix it even faster.

4. Just [open you issue](https://github.com/danilolutz/UltimateMoneyControl/issues/new).

## Cloning the repository

The pre requisites to work on this project are [Git](https://git-scm.com/), [NodeJs](https://nodejs.org), **npm** or **yarn** and [Visual Studio Code](https://code.visualstudio.com/) (or any other code editor).

You can clone by https:

```bash
git clone https://github.com/danilolutz/UltimateMoneyControl.git
```

Or by SSH:

```bash
git clone git@github.com:danilolutz/UltimateMoneyControl.git
```

Whatever you prefer. Clone the repo and start your work following this steps (aka [gitflow](https://danielkummer.github.io/git-flow-cheatsheet/index.html)):

1. :wrench: Create a new branch based on **develop**
2. :white_check_mark: Name you branch how you prefer BUT **develop** or **master**
3. :art: Do the best of your art
4. :pencil: Make commit with a clear message
5. :ok_hand: Open a pull request from your new branch to **develop**

We usually use [TDD](https://pt.wikipedia.org/wiki/Test_Driven_Development) as development workflow, just a suggestion.

Maybe you ask yourself: _How can I contribute?_ or _What i can do?_

We'll help you:

* You can implement new resources as a proposal;
* You can find and fix bugs;
* Implement openned issues;
* Improve the Ultimate Money Control programming.

**Only thing will be required by us to approve the pull requests are the unit tests (with correct code coverage) for the new implementations**.

### Install

* After clone **Ultimate Money Control** repository, use `npm install` or `yarn` command to install all dependecies.
* Since we're using *Visual Studio Code* in our development process, when you open the editor it will show a message to install some recommended extensions. Click install if you want.

### Running

Just type or configure a task in *Visual Studio Code* (or your code editor) to run the follow command: `yarn start`.

> **Note:** We have some other pre defined scripts in [package.json](../package.json).