#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git status

git add -A
git commit -m 'feat(🤡): 无修改，只调整目录'

git push
