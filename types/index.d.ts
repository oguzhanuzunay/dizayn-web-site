export interface languageParams {
  [key: string]: {
    meta: {
      title: string;
      description: string;
    };

    menuList: {
      name: string;
      submenu?: {
        name: string;
        description: string;
        icons?: string;
        link: string;
      }[];
    }[];

    certificates: {
      title: string;
      buttonText: string;
    };

    pages: {
      dealers: {
        h1: string;
        text: string;
        imgLink: string;
        subPageLink: string;
        alt: string;
      };
      becomeDealer: {
        companyName: string;
        fullName: string;
        phone: string;
        eMail: string;
        city: string;
        annualRevenue: string;
        numberOfSubDealers: string;
        numberOfProjectsWorkedOn: string;
        subject: string;
        explanation: string;
        buttonText: string;
      };
    };

    footer: {
      imageContent: {
        title: string;
        image: string;
        alt: string;
      }[];
      footerContent: {
        companyInformation: {
          title: string;
          text: string;
          image: string;
          alt: string;
        }[];
        socialMedia: {
          name: string;
          link: string;
          image: string;
          alt: string;
        }[];
        links: [
          {
            title: string;
            image: string;
            alt: string;
            content: [
              {
                title: string;
                link: string;
                highlight?: boolean;
              },
            ];
          },
        ];
      };
    };
  };
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

export interface certificateListParam {
  id?: number;
  title: string;
  image: string;
}

export interface sliderParams {
  [key: string]: {
    title: string;
    image: string;
    description: string;
    link?: string;
    customCSS?: string;
  }[];
}

export interface miniSliderParams {
  [key: string]: {
    id?: number;
    title: string;
    image: string;
    description?: string;
    link?: string;
    customCSS?: string;
  }[];
}
interface CityData {
  cityName: string;
  plateNumber: number;
}

export type citiesDataParams = CityData[];

export interface certificateListParams extends Array<certificateListParam> {}

export interface contactInfoParams {
  id: number;
  position: {
    lat: number;
    lng: number;
  };
  contact: {
    title: string;
    address: string;
    phone: string;
    email: string;
    fax?: string;
  };
}

export interface productDetailParams {
  index?: number;
  title: string;
  productDetail: string;
  textColor?: string;
  image?: string;
  alt?: string;
}

export interface contactInfosParams {
  [key: string]: contactInfoParams[];
}

export interface matrixCardParams {
  [key: string]: {
    id: number;
    title: string;
    color: string;
    description: string;
    image: string;
    link: string;
    highlights: {
      title: string;
      icon: string;
    }[];
  }[];
}

export interface faqsParams {
  [key: string]: {
    question: string;
    answer: string;
    textColor?: string;
    bgColor?: string;
  }[];
}