declare interface IImageWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  ImageHeader: string;
  UrlHeader: string;
  Link: string;
  LinkTitle: string;
  Width : string;
  Height: string;

}

declare module 'imageWebPartStrings' {
  const strings: IImageWebPartStrings;
  export = strings;
}
