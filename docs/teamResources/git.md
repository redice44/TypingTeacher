# Basics
Here are some quick and dirty command line interface (CLI) commands that you should become familiar with. You'll use them all the time.

### Committing

> git add path/to/file

This will add or update the file(s) to the repo. Run a status check after you commit a file to see the change.

> git commit

This will commit all changes to the repo. It allows you to also add a message along with the commit. Message's first line should be a quick overview of what the commit does, and if needed the body of the message should contain more details. An empty line separates the first line from the body.

> git commit -m "Commit Message"

The -m argument allows you to type in a one line commit message.

> git commit -am "Commit Message"

The -a argument adds all updated files to the commit. Note: this does not add untracked files to the commit.

> git commit --amend

This is useful if you want to make a little update to the most recent commit you made. However, do not amend commits that have been pushed to the remote repo. This will cause a lot of problems for people that have pulled the repo and don't have the amend. So only do this to fix local commits. Once you push it, don't amend it. Create a new commit.

> git status

This will show you the status of the files in the project directory. It will show you what files are changed and any untracked files. This is useful to see what you will commit.

> git log
> git log --oneline
> git log -n 5 --oneline

This shows the commit history.

The -n argument allows you to specify how many commits to show.
The --oneline argument only shows the first line of a commit. This is a good reason for having a good first line commit message is important.


### Remote Repositories

> git pull [remote] [branch]

This will attempt to sync your local repo with the remote repo.

> git push [remote] [branch]

This will attempt to update the remote repo with your local repo.


### Branching

> git branch

This shows you a list of branches in your local repo. Branches are going to become more important moving forward. I'll write up a separate topic about how we'll handle branches for this project.

> git branch -d [branch name]

This deletes a branch.

> git checkout [branch name]

This switches to a branch. Note: You can only switch between branches when the directory is clean. So if you want to switch between branches but aren't at a point where you should/can commit your work, then you would want to stash your work for later.

> git stash

Kind of makes a soft commit where you were working and reverts your local directory to the previous commit.

> git stash apply

Applies the stash changes you made.

> git stash list

Shows the list of stashes you have.

> git stash clear

Clears the stashes.

> git checkout -b [branch name]

This creates a new branch and switches to it.

> git merge [branch name]

This merges the current branch and the target branch.
