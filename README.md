# Build a Typewriter effect component

From: https://reactpractice.dev/exercise/build-a-typewriter-effect-component/

## Requirement

Given a sentence, display it with half a second delay between each character. Start showing nothing and then display characters one by one until the full sentence is displayed. No style is required.

## Todo

1. useState to store text from input box
2. useState to store `typewrite'd sentence` in order to compare later wheter the effect is to keep going or terminate
3. useRef to store "type next letter" callback function
4. useRef to store interval id for typewritting effect
5. create "type next letter" callback function, if the `typewrite'd sentence` 's length equals `input` then "stop" typing and return, otherwise make `typewrite'd sentence` 's length to be the index of the next letter to type for `input` (said input is `text` state from 1.)
6. useEffect to assign "type next letter" function to ref in no.3, having `typewrite'd sentence` as dependencis array
7. create "handle change" function to listening to input change event
8. create "start typing" function to first clear all the `typewrite'd sentence`, then assign the interval of 500s which will trigger callback's ref (no 3.) to start operating on `text` as the input
9. create "stop typing" to be used when we ran out of `typewrite'd sentence`
10. use 7. in input's DOM on onChange
11. use 8. in button that will initiate typewritting effect with `text` as input
