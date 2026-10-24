
# ber-icons-react

A lightweight and customizable SVG icon library for React.

## Installation

```bash
npm install ber-icons-react
```

## Usage

```tsx
import {
  HomeCustom,
  HeartCustom,
  SearchCustom,
} from "ber-icons-react";

export default function App() {
  return (
    <div style={{ display: "flex", gap: 16 }}>
      <HomeCustom size={32} color="blue" />
      <HeartCustom size={32} color="red" variant="alternate" />
      <SearchCustom size={32} color="green" />
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
