import { Check } from "lucide-react";

export default function RadioInput({
  name,
  label,
  value,
  selected,
  setSelected,
}: {
  name: string;
  label: string;
  value: number;
  selected: boolean;
  setSelected: (val: number) => void;
}) {
  return (
    <div
      className={`border-alt-50 hover:border-alt-200 ${selected ? "border-primary! py-3" : ""} flex cursor-pointer items-center gap-3 rounded border px-3 py-1 transition-all not-last:mb-1`}
      role="radio"
      onClick={() => setSelected(value)}
    >
      <span
        className={`border-alt-400 flex h-4 w-4 items-center justify-center rounded-full border transition-all ${selected ? "bg-primary border-primary-300 h-6 w-6" : ""}`}
      >
        {selected && (
          <Check className="text-primary-off-800" size={16} strokeWidth={3} />
        )}
      </span>
      <label className="cursor-pointer" htmlFor={name + label}>
        {label}
      </label>
      <input
        type="radio"
        name={name}
        id={name + label}
        value={value}
        hidden
        aria-hidden
      />
    </div>
  );
}
