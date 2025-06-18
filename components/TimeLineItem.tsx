import { Experience } from "@/lib/schemas";
import { Avatar } from "@radix-ui/react-avatar";
import Link from "next/link";
import { AvatarFallback, AvatarImage } from "./ui/avatar";

interface Props {
  experience: Experience[];
}

export default function TimeLineItem({ experience }: Props) {
  const { name, href, title, description, logo, start, end } = experience;
  return (
    <>
      <li>
        <Link href={href} target="_blank">
          <Avatar>
            <AvatarImage>
              <AvatarFallback>{name[0]}</AvatarFallback>
            </AvatarImage>
          </Avatar>
        </Link>
        <div></div>
      </li>
    </>
  );
}
