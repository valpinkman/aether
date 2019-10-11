export interface ComicVineResponse {
  error: 'OK' | 'KO';
  limit: number;
  number_of_page_results: number;
  number_of_total_results: number;
  offset: number;
  status_code: number;
  version: '1.0';
}

export interface ComicVineSearchResponse extends ComicVineResponse {
  results: ComicVineResult[];
}

export interface ComicVineResourceResponse extends ComicVineResponse {
  results: ComicVineResult;
}

export interface ComicVineSubResource {
  api_detail_url: string;
  id: number;
  issue_number?: string;
  name: string;
  site_detail_url?: string;
}

export interface ComicVineResult {
  aliases?: string;
  api_detail_url: string;
  characters?: ComicVineSubResource[];
  concepts?: ComicVineSubResource[];
  count_of_issues: number;
  date_added: string;
  date_last_updated: string;
  description: string;
  first_issue?: ComicVineSubResource;
  id: number;
  image: ComicVineImage;
  issues?: ComicVineSubResource[];
  last_issue?: ComicVineSubResource;
  locations?: ComicVineSubResource[];
  name: string;
  people?: ComicVineSubResource[];
  publisher?: ComicVineSubResource;
  site_detail_url: string;
  start_year: string;
  resource_type?: string;
}

export interface ComicVineImage {
  icon_url: string;
  image_tags: string;
  medium_url: string;
  original_url: string;
  screen_large_url: string;
  screen_url: string;
  small_url: string;
  super_url: string;
  thumb_url: string;
  tiny_url: string;
}