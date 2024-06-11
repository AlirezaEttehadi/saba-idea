"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

const rateOptions = [
  { key: "asc", label: "بالاترین امتیاز" },
  { key: "desc", label: "پایین‌ترین امتیاز" },
];

const RateFilter: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedRateMode = searchParams.get("order_dir") ?? "";

  return (
    <Select
      label="امتیاز فیلم"
      selectedKeys={[selectedRateMode]}
      className="max-w-xs"
      variant="bordered"
      onChange={(event) => {
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("order_dir", event.target.value);
        router.push(`?${newSearchParams.toString()}`);
      }}
    >
      {rateOptions.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};
export default RateFilter;
