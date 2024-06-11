"use client";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import GenreFilter from "@saba-idea/components/genre-filter";
import RateFilter from "@saba-idea/components/rete-filter";

export default function MoviesPage() {
  return (
    <div>
      <div className="flex items-center gap-4 justify-center">
        <GenreFilter />
        <RateFilter />
      </div>
      <span className="text-gray-200 text-xs font-bold">
        لیست تمامی فیلم و سریال‌ها
      </span>
      <Card shadow="sm" isPressable>
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            radius="lg"
            width="100%"
            alt="عکس فیلم"
            className="w-full object-cover h-36"
            src="https://static.cdn.asset.filimo.com/flmt/mov_133615_56186-s.jpg"
          />
        </CardBody>
        <CardFooter className="text-[10px] justify-between gap-8">
          <span className="text-gray-900">عنوان فیلم</span>
          <span className="text-gray-700">امتیاز ۹.۹</span>
        </CardFooter>
      </Card>
    </div>
  );
}