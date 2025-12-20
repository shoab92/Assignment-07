# Assignment-07
JSX and why it’s used?
-Javascript XML is a syntax extensin for javascript that let me write html code inside m reac components. which is used because it makes ui structure clear and understandable.

Difference between state and props-
    Props: Read-only inputs passed from a parent to a child component. They’re immutable inside the child and describe how a component should render.
    State: Internal, mutable data managed by a component (or a hook). State changes trigger re-renders and reflect things that evolve about time like, form inputs, toggles, fetched data


useState hook and how it works ?
-useState lets a function component hold state. We call it with an initial value and get back a pair: the current state and a setter function. When we call the setter, React schedules a re-render with the new value.

Sharing state between components in React-
-Move the state to the closest common parent and pass values and callbacks down via props
- Use React Context to avoid prop drilling when many levels need the same data.
-capsulate reusable logic and share it across components while each component still owns its instance of state, etc

Event handling in React-
React uses synthetic events for cross-browser consistency. You attach handlers as camelCase props and pass functions but not in strings.
