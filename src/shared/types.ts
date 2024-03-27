export enum SelectedPage {
    Home = 'home',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus',
    SignIn = 'signin',
  }

export interface IBenefitCard {
  icon: JSX.Element;
  title: string;
  description: string;
  link: IBenefitCardLink
}

interface IBenefitCardLink {
  text: string;
  href: SelectedPage;
}

export interface IClassType {
  image: string;
  name: string;
  description?: string;
}