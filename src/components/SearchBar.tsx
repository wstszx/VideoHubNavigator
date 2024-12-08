import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-xl w-full mx-auto">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4 transition-colors duration-300" />
      <Input
        type="text"
        placeholder="Search media sites..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-11 h-12 rounded-full transition-all duration-300 hover:shadow-md focus:shadow-lg"
      />
    </div>
  );
}