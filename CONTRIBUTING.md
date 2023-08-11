# Contributing to CONTRIBUTING.md

First off, thank you for taking the time to contribute!.

We are happy to welcome all the contributions from anyone willing to improve/add new ideas to this project.All types of contributions are encouraged and valued.
 Below are guidelines to help you make contributions to this project.


## Getting Started

### Prerequisites

- Git or any equivalent Version Control System
- Code Editor (e.g VsCode, Sublime Text, Atom)
- Basic knowledge of the Command Line Interface (CLI) or the code editor terminal
### Steps

Before installation, please make sure you have this installed in your local machine

- [NodeJs](https://nodejs.org/en/download/)
- [Git](https://git-scm.com/downloads)


Then, follow the guidelines below for a successful contribution

**1.**  Fork [this](https://github.com/FrancescoXX/contentbox.git) repository.

**2.**  Clone your forked copy of the project.

```BASH
git clone  https://github.com/<your-username>/contentbox.git
```

**3.** Go to the project directory.

```BASH
cd contentbox
```

**4.** Add a reference(remote) to the original repository.

```BASH
git remote add upstream https://github.com/<upstream-owner>/contentbox
```

**5.** Confirm the remote for this repository.

```BASH
git remote -v
```

**6.** To setup the environment in your system run the following commands

```BASH
npm install
#OR
yarn install
```

**7.** Check if your cloned repo syncs with the upstream repository.

```BASH
git pull upstream main
```

**8.** Create a new branch.

```BASH
git checkout -b <your_branch_name>
```


**9.** Add your changes.

```BASH
git add . 
```

**10.** Commit your changes with a message.

```BASH
git commit -m "Relevant message"
```

**11.** Push the committed changes in your branch.

```BASH
git push origin <your_branch_name>
```

**12.** Go to repository on Github, Click `Compare & Pull Request`

**13.** Compare your feature branch to the desired branch of the repo you are supposed to make a PR to.

**14.** Add an appropriate title and description to your pull request explaining your changes and efforts done and click on make a PR. 

**15.** Wait for your submission to be reviewed, approved and your PR to be merged.


- Hurray! You successfully made a contribution!
