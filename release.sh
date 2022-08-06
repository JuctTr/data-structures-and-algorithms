#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git status

git add -A
git commit -m 'feat(🤡): 调整prettier和eslint之间的问题'

git push
