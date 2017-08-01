# Building

API Blueprint expects one API definition file.  
But for maintainability purposes, we splitted up the file in parts, located in the `src` directory.  
As a result these files need to be build to one single [apiary.apib](`./../apiary.apib`)-file.

We use [Hercule](https://github.com/jamesramsay/hercule) for combined the markdown files to one file.  
The generated fill still needs to be **committed**.

## Installing depencendies

Make sure all dependencies are installed properly.


## Building once

Run `gulp build` to build.  
The `apiary.api` file will be generated.  
Also an `apiary.html` file will be present, so you can preview.


## Watching changes

Run `gulp` when in development to automatically build when files change.


## Pre-commit hook

If you want to make sure you don't forget to build the docs before you commit, add the following pre-commit hook:

```bash
#!/bin/sh
git diff --cached --name-status | while read st file; do
	dir=$(dirname "$file")
	if [[ $dir == src* ]]
	then
		echo "Generating apiary.apib"
		gulp build
		git add apiary.apib
		break
	fi
done
```

The `pre-commit` hook file is placed in the `.git/hooks` folder.
