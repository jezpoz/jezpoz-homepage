import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * components — `pageComponents`
   *
   *
   */
  components?: PageComponents;
}

/**
 * Person
 *
 *
 */
export interface Person extends SanityDocument {
  _type: "person";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;

    /**
     * Alt text — `string`
     *
     *
     */
    altText?: string;
  };

  /**
   * About person — `content`
   *
   *
   */
  content?: Content;
}

/**
 * Blog post
 *
 *
 */
export interface BlogPost extends SanityDocument {
  _type: "blog-post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Author — `reference`
   *
   *
   */
  author?: SanityReference<Person>;

  /**
   * Poster — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;

    /**
     * Alt text — `string`
     *
     *
     */
    altText?: string;
  };

  /**
   * Content — `content`
   *
   *
   */
  content?: Content;
}

export type Content = Array<SanityKeyed<SanityBlock>>;

export type HeroComponent = {
  _type: "heroComponent";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Sub title — `string`
   *
   *
   */
  subtitle?: string;

  /**
   * Image — `image`
   *
   *
   */
  image?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Caption — `string`
     *
     *
     */
    caption?: string;

    /**
     * Alt text — `string`
     *
     *
     */
    altText?: string;
  };

  /**
   * Links (internal) — `array`
   *
   *
   */
  links?: Array<SanityKeyedReference<Page | BlogPost>>;
};

export type TextComponent = {
  _type: "textComponent";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * content — `content`
   *
   *
   */
  content?: Content;
};

export type PageComponents = Array<
  SanityKeyed<HeroComponent> | SanityKeyed<TextComponent>
>;

export type Documents = Page | Person | BlogPost;
