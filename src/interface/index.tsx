export type comicProps = {
  id: number;
  digitalId?: string | number;
  title: string;
  issueNumber?: string | number;
  variantDescription?: string;
  description?: string;
  modified?: Date;
  isbn?: string;
  upc?: string;
  diamondCode?: string;
  ean?: string;
  issn?: string;
  format?: string;
  pageCount?: number;
  textObjects?: string[];
  resourceURI?: string;
  urls?: [
    {
      type?: string;
      url?: string;
    }
  ];
  series?: { name?: string };
  variants?: string[];
  collections?: string[];
  dates?: [
    {
      type?: string;
      date?: string;
    }
  ];
  prices?: [
    {
      type?: string;
      price?: number;
    }
  ];
  thumbnail: { path: string; extension: string };
  creators?: {
    items?: [
      {
        name?: string;
        role?: string;
      }
    ];
  };
  characters?: {
    collectionURI: string;
    items?: [
      {
        name?: string;
      }
    ];
  };
  stories?: string[];
  events?: string[];
};

export type valuesProps = {
  values: {
    name: string;
    email: string;
    selectedOptions: any[];
  };
};
