## Syntax parsers

A program that reads your code & determines what it does & if it's grammar is valid

## Lexical environments

Where something sits physically in the code you write. Where it's written & what surrounds it.

## Single threaded

One command is being executed at a time.

## Synchronous

One at a time and in order. 

## Asynchronous callbacks

More than one at a time.

### Event Queue

- periodically checked & run when execution stack is empty
- click, http request, etc
- browser asynchronously puts things into event queue, but the js code is still running line by line (synchronously)

## Execution context

A wrapper to help manage the code that is running. Can also contain things beyond what you've written in your code.

- Base execution context: *Global execution context*
- JS engine creates Global Object and variable `this`
- If running in a browser, global object (not inside a function) `window` = `this`
- Each tab/window is it's own global execution context
- Variables & functions when not lexically sitting inside a function attach to the global object `window` (`this`)
- Outer environment at global level is null (there's nothing outside)

### Creation phase

- execution context is created
- global object `this`
- setup memory space for variables & functions (hoisting)
- before your code is executed line by line, js engine has already set up memory space for variables & functions, they already exist
- functions in their entirety are placed in memory, but variables are seperate from their assignments, the value is placed on code execution

### Execution phase

- code is run

## Function invocation & the execution stack

Running a function. In JS, by using parentheses ()

- New execution context is created everytime a function is called
- Execution context is added to the top of the execution stack
- Goes through creation & execution phase, and then the execution context is popped off the stack

## Variable environments

Where the variables live, and how they relate to each other in memory.

- Each execution context has it's own variable environment (scope)

## The scope chain

- Every execution context has a reference to it's outer environment
- Depends on the lexical environment, not the execution stack 

### Scope

Where a variable is available in your code, and if it's truly the same variable, or a new copy.

- `let` allows js engine to use block scoping
- during execution phase, still placed in memory, but can't be used until the declaration occurs in the execution phase
- when declared inside a block, only available inside that block.




