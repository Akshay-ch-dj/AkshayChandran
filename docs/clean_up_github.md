# cleaning up the .git folder to reduce the large repo size

---

From this [gist](https://github.com/18F/C2/issues/439)

Git compresses the previous commits in a *.pack* file in the .git folder, ie essentially all the history of the project, and the whole point of using git itself,

But some time you don't need some items like, gifs, images etc.. that you are updated to a new, or compressed to smaller sizes, you never gonna get back to them, but they are all in the pack..

To clean this size consuming things and make the repo smaller, the way is to filter the branches.
using `git filter-branch`.

1. Get the biggest files,

   ```bash
   git verify-pack -v .git/objects/pack/pack-7b03cc896f31b2441f3a791ef760bd28495697e6.idx \
   | sort -k 3 -n \
   | tail -10
   ```

2. To see what each file is run,

   `git rev-list --objects --all | grep [first few chars of the sha1 from previous output]`

   There is a one liner

      ```bash
      git rev-list --objects --all | grep -f <(git verify-pack -v .git/objects/pack/*.idx| sort -k 3 -n | cut -f 1 -d " " | tail -10)
      ```

3. Most of the files will be .png, .mov, .gif, .pdf, .csv etc. The next step would be to clean up your git by removing all of those unnecessary files.
4. One automated option is to use [BFG Repo-Cleaner](https://rtyley.github.io/bfg-repo-cleaner/),
5. But can do it manually following [this](http://git-scm.com/book/en/v2/Git-Internals-Maintenance-and-Data-Recovery)

   ```bash
   git filter-branch --index-filter 'git rm --cached --ignore-unmatch *.mov' -- --all
   ```

    Or

    `git filter-branch --index-filter "git rm --cached --ignore-unmatch *.mov" --tag-name-filter cat -- --all`

   ***Warning***: this operation will make you lost all previous commit

    ```bash
    rm -Rf .git/refs/original
    rm -Rf .git/logs/
    git gc --aggressive --prune=now
    ```

    If you want to clean all previous commit and thin up your repo.

    ```bash
    ## This script is used to clean all git commit
    if [[ "$1" = 'all' ]];then
        echo "Clean all git commit"
        git checkout --orphan latest_branch
        git add -A
        git commit -am "Delete all previous commit"
        git branch -D master
        git branch -m master
    fi

    echo "Cleanup refs and logs"
    rm -Rf .git/refs/original
    rm -Rf .git/logs/

    echo "Cleanup unnecessary files"
    git gc --aggressive --prune=now

    echo "Prune all unreachable objects"
    git prune --expire now

    #git push -f origin master
    ```


6. Then verify with `git count-objects -v`
7. Check [this too](https://github.com/ahuigo/a/blob/master/tool/gitclean.sh).

USING THE [git-filter-repo](https://github.com/newren/git-filter-repo)

---

* As of 2020, the best practice is to use the new tool git filter-repo which replaces BFG and git filter-branch.