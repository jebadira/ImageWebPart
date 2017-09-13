import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneCheckbox,
  PropertyPaneLabel,
  PropertyPaneLink,
  PropertyPaneSlider,
  PropertyPaneToggle,
  PropertyPaneDropdown
} from '@microsoft/sp-webpart-base';

import * as strings from 'imageWebPartStrings';
import * as ImageContainer from './dist/scripts/efd8089542d747eb9678fc7785dceaa0.js';
import { IImageWebPartWebPartProps } from './IImageWebPartWebPartProps';

export default class ImageWebPartWebPart extends BaseClientSideWebPart<IImageWebPartWebPartProps> {

  public render(): void {
    const element = React.createElement(ImageContainer.default, 
    {
      header: this.properties.header,
      url : this.properties.url,
      link : this.properties.link,
      linkTitle : this.properties.linkTitle,
    });
    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('header', {
                  label: strings.ImageHeader
                }),
                PropertyPaneTextField('url', {
                  label : strings.UrlHeader
                }),
                PropertyPaneTextField('width', {
                  label : strings.Width
                }),
                PropertyPaneTextField("height", 
                {label : strings.Height}),
                PropertyPaneTextField('link', {
                  label : strings.Link
                }),
                PropertyPaneTextField('linkTitle', {
                  label : strings.LinkTitle
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
