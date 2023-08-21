# "Google Labs Breadboard" Useful nodes by Paul Kinlan Kit 

This is a collection of [Breadboard](https://github.com/google/labs-prototypes/tree/main/seeds/breadboard) nodes that are helpful for building LLM-based (Generative AI) applications.

## Installing

This Kit requires Node version >=v19.0.0. To install:

```sh
npm install @paulkinlan/breadboard-utils-kit
```

## Node Types

Here are all node handlers that are included in the OpenAI Breadboard Kit

### The `undefinedGuard` node

Takes an `input` and if the value is `defined` (!undefined) then outputs the `input` on the false. If the value is `undefined` outputs `true` on "true" 

#### Inputs:

- `input` optional. The value to be checked if undefined.

#### Outputs:

- `true` - "true" if the input is `undefined`.
- `false` - value of the input if the input is not `undefined`.


### The `headTail` node

Takes a list as `input` and returns the first item as the head, and the rest of the list as tail.

#### Inputs:

- `input` required, must contain the OpenAI API key.

#### Outputs:

- `head` - the first item in the list
- `tail` - the rest of the input list (`slice(1)`)

## Example graph

```mermaid
%%{init: 'themeVariables': { 'fontFamily': 'Fira Code, monospace' }}%%
graph TD;
inputprompt[/"input
id='input-prompt'"/]:::input -- "input->input" --> headTail1["headTail
id='headTail-1'"]
headTail1["headTail
id='headTail-1'"] -- "tail->input" --> undefinedGuard1["undefinedGuard
id='undefinedGuard-1'"]
headTail1["headTail
id='headTail-1'"] -- "head->text" --> output{{"output
id='output'"}}:::output
undefinedGuard1["undefinedGuard
id='undefinedGuard-1'"] -- "false->input" --> headTail1["headTail
id='headTail-1'"]
messageinputprompt[message]:::config -- "message->message" --o inputprompt
classDef default stroke:#ffab40,fill:#fff2ccff,color:#000
classDef input stroke:#3c78d8,fill:#c9daf8ff,color:#000
classDef output stroke:#38761d,fill:#b6d7a8ff,color:#000
classDef passthrough stroke:#a64d79,fill:#ead1dcff,color:#000
classDef slot stroke:#a64d79,fill:#ead1dcff,color:#000
classDef config stroke:#a64d79,fill:#ead1dcff,color:#000
classDef secrets stroke:#db4437,fill:#f4cccc,color:#000
classDef slotted stroke:#a64d79
```