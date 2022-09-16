export interface Tecnology {
  items: Item[];
  releases: string[];
}
export type Item =  {
  name?: string;
  ring?: string;
  quadrant?: string;
  title?: string;
  featured: boolean;
  body: string;
  info: string;
  flag: FlagType;
  revisions: Revision[];
  release?: string;
  fileName?: string
};

export type Revision =  {
  body: string;
  fileName: string;
  release: string;
  featured?: boolean;
  name?:string
  ring?: string;
  quadrant?: string;
  title?: string;

};
export type ItemAttributes = {
  name: string;
  ring: string;
  quadrant: string;
  title: string;
  featured?: boolean;
};

export enum FlagType {
  new = 'new',
  changed = 'changed',
  default = 'default'
}


