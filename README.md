# teamleader/api documentation

#### IMPORTANT: Do not edit `/apiary.apib`

The `apiary.apib` file in the root of this repository should only be generated using [Hercule](https://github.com/jamesramsay/hercule). If you wish to update the docs, edit the files in `src/`.

The root `apiary.apib` is still committed in this repository so apiary.io can read it.

## Building the docs

Install Hercule

```bash
$ npm install -g hercule
```

After making the necessary changes, build the docs.

```bash
hercule src/apiary.apic -o apiary.apib
```

### Automatically building the docs

If you don't want to execute the above command manually every time you change the docs, add the following pre-commit hook:

```bash
#!/bin/sh
git diff --cached --name-status | while read st file; do
	dir=$(dirname "$file")
	if [ $dir = "src" ]
	then
		echo "Generating apiary.apib"
		hercule src/apiary.apib -o apiary.apib
		git add apiary.apib
		break
	fi
done
```

The `pre-commit` hook file is placed in the `.git/hooks` folder. 

**Note:** If you exclusively use this documentation from the api-proxy as a git submodule, the hooks folder is in `../.git/modules/docs/hooks`. 

## Verifying docs

You can lint the apib file to make sure it's valid. 

First install `apib-lint` 

```bash
$ npm install -g apib-lint 
```

Then lint the file

```bash
$ apib-lint apiary.apib
```
