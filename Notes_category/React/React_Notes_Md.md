Great question! Both `React.memo` and `useMemo` are performance optimization tools in React, but they serve **different purposes** and are used in **different contexts**. Here's a clear breakdown:

---

### 🔹 `React.memo`

**Purpose:**  
`React.memo` is a **higher-order component** used to **memoize entire functional components**, preventing unnecessary re-renders when props haven't changed.

**Usage Example:**
```jsx
const MyComponent = React.memo(function MyComponent(props) {
  // Component logic
});
```

**When to use:**  
Use `React.memo` when:
- You have a **pure functional component**.
- The component re-renders often with the **same props**.
- You want to **skip re-rendering** unless props change.

**Optional comparison function:**
```jsx
React.memo(Component, (prevProps, nextProps) => {
  return prevProps.value === nextProps.value;
});
```

---

### 🔹 `useMemo`

**Purpose:**  
`useMemo` is a **React Hook** used to **memoize the result of a computation** (like a derived value or expensive calculation) **within a component**.

**Usage Example:**
```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

**When to use:**  
Use `useMemo` when:
- You have an **expensive calculation**.
- You want to **avoid recalculating** unless dependencies change.
- You want to **memoize a value**, not a component.

---

### 🔸 Summary Table

| Feature            | `React.memo`                          | `useMemo`                             |
|--------------------|----------------------------------------|----------------------------------------|
| Type               | Higher-order component                 | React Hook                             |
| Memoizes           | Entire component                       | Computed value                         |
| Used for           | Preventing re-renders                  | Avoiding expensive recalculations      |
| Dependencies       | Props                                  | Custom dependency array                |
| Scope              | Outside component (wraps component)    | Inside component                       |

---

Would you like a real-world example showing both used together?