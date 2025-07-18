"use client";
import data from "@/data/socials.json";
import { socialSchema } from "@/lib/schemas";
import Icon from "./Icon";

export default function Socials() {
  const socials = socialSchema.parse(data).socials;
  return (
    <>
      <section className="flex gap-6">
        {socials.map((item) => (
          <a href={item.href} key={item.name} target="_blank" title={item.name}>
            <span className="sr-only">{item.name}</span>
            <Icon name={item.icons} />
          </a>
        ))}
      </section>
    </>
  );
}
