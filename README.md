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
