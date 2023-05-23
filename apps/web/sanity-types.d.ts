declare namespace SanityTypes {
  interface SanityEntity {
    _createdAt: Date;
    _rev: string;
    _type: string;
    _id: string;
    _updatedAt: Date;
  }

  interface Block {
    _type: string;
    _key: string;
    style: string;
    markDefs: any[];
    children: [];
  }

  interface SanityImage {
    altText: string;
    hotspot: {
      width: number;
      x: number;
      y: number;
      height: number;
      _type: string;
    };
    _type: string;
    caption: string;
    asset: {
      _ref: string;
      _type: string;
    };
    crop: {
      _type: string;
      bottom: number;
      right: number;
      top: number;
      left: number;
    };
  }

  interface SanityReference {
    _ref: string;
    _type: string;
  }

  interface SanitySlug {
    current: string;
    _type: string;
  }

  interface Page extends SanityEntity {
    title: string;
    content: Block[];
    slug: SanitySlug;
  }

  interface BlogPost extends SanityEntity {
    title: string;
    content: Block[];
    image: SanityImage;
    author: SanityReference;
    slug: SanitySlug;
  }
}
