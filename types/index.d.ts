export interface languageParams {
  [key: string]: {
    meta: {
      title: string;
      description: string;
    };

    menuList: string[];
  };
}

export interface sliderParams {
  [key: string]: {
    title: string;
    alt: string;
    image: string;
  }[];
}

export interface sliderParam {
  title: string;
  alt: string;
  image: string;
}
