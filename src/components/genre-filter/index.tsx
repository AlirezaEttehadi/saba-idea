"use client";

import { Select, SelectItem } from "@nextui-org/react";
import { useRouter, useSearchParams } from "next/navigation";
import { FC } from "react";

const rateOptions = [
  { key: "drama", label: "درام" },
  { key: "comedy", label: "کمدی" },
  { key: "science_fiction", label: "علمی تخیلی" },
  { key: "action", label: "اکشن" },
];

const GenreFilter: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedGenre = searchParams.get("genre") ?? "";

  return (
    <Select
      label="ژانر فیلم"
      selectedKeys={new Set(selectedGenre.split(","))}
      selectionMode="multiple"
      className="max-w-xs"
      variant="bordered"
      onChange={(event) => {
        const keys = new Set(event.target.value.split(","));
        const keysList = Array.from(keys).filter((item) => item.length > 0);
        const genreString = keysList.join(",");
        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set("genre", genreString);
        router.push(`?${newSearchParams.toString()}`);
      }}
    >
      {rateOptions.map((option) => (
        <SelectItem key={option.key}>{option.label}</SelectItem>
      ))}
    </Select>
  );
};
export default GenreFilter;
