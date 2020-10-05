# CROSSCHECK Task 1. Caesar cipher CLI tool

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.

## Downloading

```
git clone {repository URL}
```

## Installing NPM modules

```
npm install
```

## Running application

```
git checkout master

cd caesar_cli

node caesar

node caesar --action encode --shift 7
```

# CLI tool accept 4 options (short alias and full name):

1.  **-s, --shift**: a shift
2.  **-i, --input**: an input file
3.  **-o, --output**: an output file
4.  **-a, --action**: an action encode/decode
5.  **Ctrl+C** press for exit with **stdin** as an input source

**Usage example:**

```bash
$ node caesar -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

```bash
$ node caesar --action encode --shift 7 --input plain.txt --output encoded.txt
```

```bash
$ node caesar --action decode --shift 7 --input decoded.txt --output plain.txt
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
