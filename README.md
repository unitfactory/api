# teamleader/api documentation

#### IMPORTANT: Do not edit `/apiary.apib`

The `apiary.apib` file in the root of this repository should only be generated using [Hercule](https://github.com/jamesramsay/hercule). If you wish to update the docs, edit the files in `src/`.

The root `apiary.apib` is still committed in this repository so apiary.io can read it.

## Branch structure and contributing

See [CONTRIBUTING](CONTRIBUTING.md)


## Building the docs

Install dependencies:

```bash
docker pull apiaryio/client
npm install -g gulp-cli
npm install
```

Run `gulp build` to build. Once you built the docs, you can open `apiary.html` in your browser to preview.

Run `gulp` when in development to automatically build when files change.


### Automatically building the docs before commit

If you want to make sure you don't forget to build the docs before you commit, add the following pre-commit hook:

```bash
#!/bin/sh
git diff --cached --name-status | while read st file; do
	dir=$(dirname "$file")
	if [[ $dir == src* ]]
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

You can lint the apib file to make sure it's valid:

```shell
npm run lint
```

## FAQ/rules

- Use application/json for both requests and responses
- Use `number` type wherever it's *logical* to use a `number` (id's, prices, amounts, ...)
