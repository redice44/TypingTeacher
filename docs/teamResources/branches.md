# Branches

There are different ways projects can handle branching, but for this one we'll use a pretty organized method for our branches.

But what is a branch? A branch is essentially a copy of the repo at a point in time where changes can be made without affecting the original repo. You should have noticed by now that there is this "master" branch where everything is being committed to. This is going to change. I'll outline the new branch structure that we'll be using from here on out. The main purpose of this is to always have a stable product while we're developing.

### Master Branch

The master branch will be our stable "release" branch. The only commits to master will be ones that update the version. (eg 0.0.1 to 0.0.2 or 1.2.4 to 2.0.0) If you don't know what these numbers mean look up semantic versioning. But for our project we'll be working towards 1.0.0 for our project deadline.

So generally speaking, do not push to the master branch. I'll be getting actual code up, hopefully this week and we'll be transitioning to this branch structure.

### Release Branch

Now you're probably thinking, "Isn't master the release branch?". Yes it is, but we need a branch where we prepare the upcoming release to be pushed to master. This is where it is tested (mainly for feature compatibility. You should be unit testing everything!) and bug fixes happen. No new features are added.

This branch eventually merges into master.

### Development Branch

This is the primary branch in which development is taking place. Note: You usually don't code in this branch as odd as that seems. This is where new features for the upcoming release are implemented and updated.

This branch eventually merges into release.

### Feature Branch

Here is where the coding happens. Finally. These branches are not kept on the remote repo, but are worked on locally. You do all your coding, unit testing, etc on this branch for whatever feature you're working on.

The feature branch is branched off from the development branch, and eventually merged back to it.

### Typical Workflow

Now you may be thinking, well that's great and all, but what does it look like to go through this process?

The remote repo will contain generally three branches, master, release, and development. When you're working on a new feature, you'll want to pull down the development branch. Make sure you're up to date.

> git pull [remote] [development]

Then you'll want to create a new feature branch for you to work on.

> git checkout -b [feature] [development]

This creates a new branch called feature from the development branch and switches you to it.

> git branch

To see that you're in your new feature branch.

Now you'll do all your feature coding with great commits.

Once you're done write awesome, well tested code. You'll want to merge your code back to the development branch. However remember that there are other people working on the project as well. You'll want to make sure you have the most up to date development branch.

> git pull [remote] [development]

> git checkout [development]

> git merge [feature]

This will update your development branch, switch to it, and attempt to merge it. Ideally you won't have any merge conflicts because you didn't alter any libraries we are using and your code is self contained, but if there are conflicts resolve them if you can or talk with the developer that wrote the code that conflicts with yours.

Once conflicts are resolved, push the development branch back to the remote repo and remove your old feature branch.

> git push [remote] [development]

> git branch -d [feature]

Remember, don't commit to master anymore. This is the last master commit until 0.0.1! Our docs will be on its own branch that will occasionally be merged back into development or release as needed. 
