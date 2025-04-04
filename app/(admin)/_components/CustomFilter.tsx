import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const CustomFilter = ({
  placeholder,
  options,
}: {
  placeholder: string;
  options: string[];
}) => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-[120px] bg-[#f8fafb] border border-[#e5e7eb]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="bg-[#f8fafb] border border-[#d2d2d5]">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CustomFilter;
