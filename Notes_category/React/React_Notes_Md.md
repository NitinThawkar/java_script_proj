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

 Here's a **real-world example** that demonstrates how `React.memo` and `useMemo` can be used **together** to optimize performance in a React app.

---

### 🧩 Scenario:
You have a list of users, and you want to display each user in a component. You also want to compute a filtered list based on a search term. The filtering is expensive, so you want to avoid recalculating it unnecessarily. Also, each user component should only re-render if its props change.

---

### ✅ Code Example:

```jsx
import React, { useState, useMemo } from 'react';

// 👇 Memoized User component
const User = React.memo(({ user }) => {
  console.log('Rendering:', user.name);
  return <li>{user.name}</li>;
});

// 👇 Main component
function UserList({ users }) {
  const [search, setSearch] = useState('');

  // 👇 Memoize filtered users to avoid expensive recalculation
  const filteredUsers = useMemo(() => {
    console.log('Filtering users...');
    return users.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map(user => (
          <User key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}
```

---

### 🔍 What’s Happening Here?

- **`useMemo`** is used to **memoize the filtered list** of users so that the filtering logic only runs when `users` or `search` changes.
- **`React.memo`** wraps the `User` component so that **each user item only re-renders if its props (`user`) change**.

---

### 🧠 Benefits:

- Reduces unnecessary re-renders of `User` components.
- Avoids expensive filtering logic unless needed.
- Improves performance especially with large lists or complex UI.

---

Would you like me to show how this behaves with console logs or simulate performance impact?