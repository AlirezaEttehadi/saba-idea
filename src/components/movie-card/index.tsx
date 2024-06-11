"use client";

import { FC } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

type Props = {
  movieName: string;
  movieImage: string;
  movieRate: number;
};

const MovieCard: FC<Props> = (props) => {
  return (
    <Card shadow="sm" isPressable>
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={`عکس فیلم ${props.movieName}`}
          className="w-full object-cover h-36"
          src={props.movieImage}
        />
      </CardBody>
      <CardFooter className="text-[10px] justify-between gap-8">
        <span className="text-gray-900">{props.movieName}</span>
        <span className="text-gray-700">امتیاز {props.movieRate}</span>
      </CardFooter>
    </Card>
  );
};
export default MovieCard;
