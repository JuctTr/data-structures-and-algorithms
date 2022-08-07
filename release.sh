#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git status

git add -A
git commit -m 'feat(🤡): 完善循环列表，调整代码的模块化引用'

git push
