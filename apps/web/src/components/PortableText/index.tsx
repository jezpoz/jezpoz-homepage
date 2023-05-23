"use client";

import { PortableText } from "@portabletext/react";
import type {
  PortableTextProps,
  PortableTextComponents,
} from "@portabletext/react";

import ImageComponent from "./image";

const components: PortableTextComponents = {
  types: {
    image: ImageComponent,
  },
  block: {
    normal: ({ children }) => (
      <p className="font-base text-md lg:text-lg">{children}</p>
    ),
    blockquote: ({ children }) => (
      <q className="font-base text-md lg:text-lg">{children}</q>
    ),
    h1: ({ children }) => (
      <h1 className="py-6 font-black text-2xl lg:text-5xl">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="py-4 font-black text-xl lg:text-3xl">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="py-2 font-black text-md lg:text-2xl">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-black text-md lg:text-xl">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="font-extrabold text-md lg:text-xl">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="font-bold text-md lg:text-xl">{children}</h6>
    ),
  },
};

export default function PortableContent({ value }: Partial<PortableTextProps>) {
  if (!value) {
    return null;
  }
  return (
    <div className="py-4 flex flex-col gap-2 max-w-[900px] mx-auto">
      <PortableText value={value} components={components} />
    </div>
  );
}
