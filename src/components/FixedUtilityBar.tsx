import UtilityControls from "./UtilityControls";

interface Props {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export default function FixedUtilityBar({ theme, toggleTheme }: Props) {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <UtilityControls theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}
