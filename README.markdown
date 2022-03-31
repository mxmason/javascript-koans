# JavaScript Kōans (WIP)

A series of tests (kōans) to help developers explore their understanding of JavaScript.

## What are the kōans?
[Kōans](https://en.wikipedia.org/wiki/K%C5%8Dan) (公案) originate from Zen Buddhism, and are paradoxical riddles or stories used to test "students" on their path to enlightenment. The kōans in this repository are small unit tests designed to help you deepen your understanding of JavaScript. The tests themselves are written in the Jasmine testing framework.

If you're familiar with testing, proceed to the ["Getting started"](#getting-started) section to learn how to use this repo.

If you're new to testing, you might want to read the ["What are tests?"](#what-are-tests) section.

## What are tests?
In software development, *tests* are programs that descibe how software should behave. They run key parts of the software in a variety of situations to verify that the software is working correctly. If the software doesn't work as the test expects, the test will fail. These failures help developers catch bugs before they end up in production software. On larger teams especially, testing helps developers feel confident about the stability of their software – they do not have to understand every part of a large code base to feel some confidence that their software is working correctly.

**No amount of testing can guarantee bug-free software**, but good tests are an essential part of any large-scale project.

Going forward, we'll be talking about tests written in JavaScript – specifically *unit tests*, which test an individual unit of work in a piece of software. These tests are written in the Jasmine testing framework, but their format and principles hold true accross much of the JavaScript testing ecosystem.

[TBA: brief mention of other kinds of tests, some links?]

### What's in a test?
Tests describe how software should behave. You may have done something similar while writing pseudocode for your own software. If you were writing an `addTwo` function, your pseudocode might read like this:

```js
/**
 * Given numbers `a` and `b`, return their sum
 */
function addTwo(a, b) {}
```

Tests are a lot like this, except they are programs that can enforce the correct behavior of your software. We can convert our pseudocode into tests like this:

```js
describe('addTwo', function() {
  it('should return the sum of two numbers', function() {});
});
```


The `describe` function indicates the beginning of a **suite of tests**. It accepts a string naming the function we are describing, and a callback function in which the test will run.

The `it` function inside `describe` indicates an **individuial tests** inside the `addTwo` suite; it reflects to how we think `addTwo` should behave. `it` accepts a string describing a behavior, and a callback function in which the tests for that behavior will run.

Let's look at some code that could go inside this callback function. Don't worry about understanding it right away.

```js
it('should return the sum of two numbers', function() {
  const sum = addTwo(2, 5);
  expect(sum).toEqual(7);
});
```

`expect` takes our **actual value**, `sum`, and compares it to our **expected value**, `7`. The part in the middle, `.toEqual()`, is called **a matcher**, and it describes how these two values should be compared. In this case, if `sum` is equal to `7`, the test will pass.

Tests use matchers to compare the actual result of a program to the result we expect the program to produce. That is:

```js
expect(ACTUAL_VALUE).someMatcher(EXPECTED_VALUE);
```

There are many matchers other than `.toEqual()`. The tests in this repository will explain new matchers as they are introduced.

## Getting started
To run these tests, clone this repository to your computer, then open the `index.html` file in your browser. You'll be presented with some information about failing tests, and you must edit those tests to make them pass.

Begin your journey in `00-about-expects.js`. The test files are numbered sequentially, and the tests themselves get progressively more complex. Each test will prompt you to examine your knowledge of JavaScript. Remember: it's okay if you don't know something! Take these tests as far as you can go, and from there, you can look up information to deepen your understanding.

## Acknowledgements
This repository was originally forked from [David Laing's JavaScript Koans](https://github.com/mrdavidlaing/javascript-koans) and takes some addiitonal inspiration from [IronLab's JavaScript Kōans](https://github.com/ironhack-labs/lab-javascript-koans).
