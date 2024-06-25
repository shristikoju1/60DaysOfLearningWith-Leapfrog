// Only call Hooks at the top level 
// Functions whose names start with use are called Hooks in React.

// Don’t call Hooks inside loops, conditions, nested functions, or try/catch/finally blocks. Instead, always use Hooks at the top level of your React function, before any early returns. You can only call Hooks while React is rendering a function component:

// ✅ Call them at the top level in the body of a function component.
// ✅ Call them at the top level in the body of a custom Hook.



function Counter() {
    // ✅ Good: top-level in a function component
    const [count, setCount] = useState(0);
    // ...
  }
  
  function useWindowWidth() {
    // ✅ Good: top-level in a custom Hook
    const [width, setWidth] = useState(window.innerWidth);
    // ...
  }