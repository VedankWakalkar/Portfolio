import { Experience } from "@/lib/schemas";
import { Card, CardContent } from "./ui/card";

interface Props {
  experience: Experience[];
}

export default function TimeLine({ experience }: Props) {
  return (
    <>
      <Card>
        <CardContent>
          <ul>
            {experience.map((exp, id) => (
              <TimeLineItem key={id} experience={exp} />
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
}
