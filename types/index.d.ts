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

export interface sliderParams {
  [key: string]: {
    title: string;
    image: string;
    description: string;
    link: string;
    customCSS?: string;
  }[];
}

export interface sliderParam {
  title: string;
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

export interface certificateListParam {
  id?: number;
  title: string;
  image: string;
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

export interface calculationCardParams {
  title: string;
  description: string;
  img: string;
}

export interface calculationsCardDataParams {
  [key: string]: calculationCardParams[];
}

export type citiesDataParams = CityData[];

export interface certificateListParams extends Array<certificateListParam> {}

export interface countryListParams {
  [key: string]: {
    name: string;
    code: string;
    title: string;
    allPDFs: {
      name: string;
      image: string;
      link: string;
    }[];
  }[];
}
