# Convert numbers into words

Converts a given number argument into English words. E.g. when passed the argument “123”, will return the output “one hundred and twenty three”.

### Installation

-   Install the npm packages:

```
  npm install
```

-   Install chalk:

```
  npm install chalk
```

-   Configure execution command:

```
  npm install -g .
```

### Usage

-   To execute the program run the following command from the command line:

```
  numbers-to-words "number argument"
```

### Run tests

```
  npm test
```

<br />

## Kat's notes

I understand you wanted to execute the program using the shell command `./bin/numbers-to-words <number argument>` - however, I just ran out of time... instead I set it up to execute with the custom command `numbers-to-words <number argument>` . Went down a rabbit hole looking into symlinks, alias' and shebangs but didn't discover correct configuration. It would be awesome to understand how I should have achieved this correctly, and this is something i'd have discussed with a peer in the real world for some guidance.

[√] Write a cli tool that takes an integer from 0 to 100,000 and coverts to grammatically correct English words
<br />
[√] README.md to understand how to run it
<br />
[X] Command adhered to
<br />
[√] Rejects numbers outside of the expected range
<br />
[√] Solution is tested
<br />
[√] Solution uses standard streams & exit codes
<br />
[√] Solution is easily extendable & easy to understand
<br />
