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
    description: string;
    link: string;
    customCSS?: string;
  }[];
}

export interface sliderParam {
  title: string;
  alt: string;
  image: string;
  description: string;
  link: string;
  customCSS?: string;
}

export interface countUpParams {
  [key: string]: {
    counterName: string;
    counterNumber: number;
    imageLink: string;
    alt: string;
    link: string;
  }[];
}

export interface dealerListParam {
  id: number;
  cityId: number;
  name: string;
  phone: string;
  address: string;
  email: string;
  mapsLink?: string;
}

export interface dealerListParams extends Array<dealerListParam> {}
