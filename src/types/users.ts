type Id = string

export interface User {
  id: Id;
  name?: string;
  email: string;
  picture?: string;
  owned: Id[]; // Serie.id
  collections: Id[]; // Collection.id
}

export interface Collection {
  id: Id;
  userId: Id;
  name: string;
  series: Id[]; // Serie.id
  isPrivate: boolean;
}

export interface Serie {
  id: Id;
  name: string;
  picture: string;
  availableIssues: Id[];
}