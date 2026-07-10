# COUNTER APP

---

This is a simple counter app. It has a number as its initial state value. We can increase or decrease the value of the state by clicking on the + or - buttons. It also has a reset button to reset the state value to its initial value.

## Key features

- All the "handleDecrement", "handleIncrement", and "handleReset" functions are meant to set the dispatch action (type of the action),
- The "reducer" function is the actual reducer that takes the current state and the dispatched action as its parameter and returns the new or updated state value which will be displayed as the text input field value.

## Tools used

- useReducer hook
