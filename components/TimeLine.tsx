"use client";
import { Experience } from "@/lib/schemas";
import { Card, CardContent } from "./ui/card";
import TimeLineItem from "./TimeLineItem";

interface Props {
  experience: Experience[];
}

export default function TimeLine({ experience }: Props) {
  return (
    <>
      <Card>
        <CardContent className="p-0">
          < ul className="ml-10 border-l">
            {experience.map((exp, id) => (
              <TimeLineItem key={id} experience={exp} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
