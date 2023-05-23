import Link from "next/link";
import Image from "next/image";

import ImageUrlBuilder from "@/resources/sanity-image-helper";

import type { HeroComponent } from "sanity-types";

interface HeroComponentProps {
  component: HeroComponent;
}

export default function HeroComponent({ component }: HeroComponentProps) {
  return (
    <div className="py-4 flex flex-col gap-2 max-w-[900px] mx-auto">
      <h1 className="py-6 font-black text-2xl lg:text-5xl">
        {component.title}
      </h1>
      <p className="font-base text-md lg:text-lg">{component.subtitle}</p>
      {component.image && (
        <div className="flex flex-row">
          <Image
            src={ImageUrlBuilder(component.image.asset).url()}
            sizes={"(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
            height={900}
            width={1600}
            alt={component.image.altText ? component.image.altText : ""}
          />
        </div>
      )}
      <div className="flex flex-row gap-2">
        {component.links &&
          component.links.map((link: any) => (
            <Link key={link._key} href={`${link.slug.current}`}>
              {link.title}
            </Link>
          ))}
      </div>
    </div>
  );
}
