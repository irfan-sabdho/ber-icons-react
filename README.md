
# ber-icons-react

A lightweight and customizable SVG icon library for React.

## Installation

```bash
npm install ber-icons-react
```

## Usage

```tsx
import { Home, Search, User } from "ber-icons-react";

export default function App() {
  return (
    <div>
      <Home size={24} color="#2563eb" />
      <Search size={32} strokeWidth={1.5} />
      <User size={24} className="my-icon" />
    </div>
  );
}
```

## Props

All icons support standard SVG props.

| Prop | Type | Default |
|---|---|---|
| size | number \| string | 24 |
| color | string | currentColor |
| strokeWidth | number | 2 |
| className | string | - |
| aria-label | string | - |

## Available Icons

- Home
- Search
- User

## License

MIT
