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
        links: {
          [x: string]: string | StaticImport;
          title: string;
          content: {
            title: string;
            link: string;
            highlight?: boolean;
          }[];
        }[];
      };
    };
  };
}