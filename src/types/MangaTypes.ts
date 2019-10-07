export type Status = 'current' | 'finished' | 'tba' | 'unreleased' | 'upcoming'
export type MangaType = 'doujin' | 'manga' | 'manga' | 'manhwa' | 'novel' | 'oel' | 'oneshot'

export interface RelationShipRaw {
  links: {
    self: string;
    related: string;
  };
}

export interface ImageRaw {
  tiny: string;
  small: string;
  medium: string;
  large: string;
  original: string;
}

export interface MangaAttributesRaw {
  slug: string;
  synopsis: string;
  titles: {
    en?: string;
    en_jp?: string;
  };
  canonicalTitle: string;
  status: Status;
  posterImage: ImageRaw;
  coverImage?: ImageRaw;
  mangaType: MangaType;
  subtype: MangaType;
  chapterCount?: number;
  volumeCount?: number;
}

export interface MangaRaw {
  id: string;
  type: string;
  attributes: MangaAttributesRaw;
  relationships: {
    genres: RelationShipRaw;
    categories: RelationShipRaw;
    characters: RelationShipRaw;
    mangaCharacters: RelationShipRaw;
    chapters: RelationShipRaw;
  };
  links: {
    self: string;
  };
}