# Git exercice

This exercise is designed to provide a safe playground to practice Git commands.

The code itself is non-functional—you’ll only focus on commit architecture. Minimal code changes are expected.

You’ll follow the instructions and aim to complete them as effectively as possible.

All changes must happen on the dev branch, and your goal is to finish with 6 commits on 3 different branches.

## Instructions

:warning: Please fork the repo first :warning:

You're working on a project with coworkers, and pushing all your changes into a `dev` branch.
The goal is to prepare a PR to merge `dev` into `main` but you noticed the commit list is kinda messy.
Aiming for a nice commit list can help the review process, as there is many changes performed and you could focus on them piece by piece.

Here you'll checkout into `dev` and aim to preform multiple actions in order to make it "cleaner", so it could be merged it into `main` branch.
A clean commit history also helps a lot during review process ;)

1. Typo

Rename `misc: rmove unused css class` into `misc: remove unused css class`

2. Remove

An util method have been removed in the past but a test have been added into your branch.
You can simply drop the commit that adds the test: `misc: add toSnakeCase test scenario`.

3. Adjust

The last commit on the branch has an enexpected change. You noticed an `if (true)` that could be removed.
Edit `bug: remove getFCP check leading to blank page` to remove this condition.

4. Adjust 2

Two commits seeems to update the same file, but the 2nd only adds a minor update.
They can be "merged" into the same commit:

-> `feat: add border to Card component` INTO `feat: add new Card component`

The result should be to have one commit named `feat: add new Card component`

5. Oupsi

Some commits have bad wording, and mostly edit the previous commit each time.

You can "merge" the two `fix test` commits into `chore: add test for getFirstChar`

The result should be to have one commit named `chore: add test for getFirstChar`

6. Adjust 3

All translation edit seems to be centralized into one commit. However, another commit also edit translations and could be "merged" into the main one.

Merge `chore: add missing translation` AND `chore: centralize all missing translation addition`

The result should be to have one commit named `chore: centralize all missing translation addition`

7. Change order

There is something weird about a component creation, being commit after it's invocation in code.

Change the order of those two commit -> `misc: Use Card component in home page` AND `feat: add new Card component`

8. New branch

Reworking this commit list, you noticed some changes are kinda substantial and important to have their own branch and PR review process.

Create a new branch branch with the 2 ordered commits you just re-ordered above: `misc: Use Card component in home page` AND `feat: add new Card component`.

The commits have to be moved away from `dev` branch and only be present on the new branch.

This branch have to take origin from `main`.

## To go further
You can challenge yourself and try to execute all 1 to 7 actions within a single git command.
