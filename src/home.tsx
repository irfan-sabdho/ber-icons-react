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