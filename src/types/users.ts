type Id = number

export interface User {
  id: Id;
  name?: string;
  email: string;
  picture?: string;
  owned: Serie[];
  collections: Collection[];
}

export interface Collection {
  id: Id;
  name: string;
  series: Serie[];
  private: boolean;
}

export interface Serie {
  id: Id;
  name: string;
  picture: string;
  availableIssues: Id[];
  ownedIssues: Id[];
}