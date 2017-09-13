"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var ReactDom = require("react-dom");
var sp_core_library_1 = require("@microsoft/sp-core-library");
var sp_webpart_base_1 = require("@microsoft/sp-webpart-base");
var strings = require("imageWebPartStrings");
var ImageContainer = require("./dist/scripts/efd8089542d747eb9678fc7785dceaa0.js");
var ImageWebPartWebPart = (function (_super) {
    __extends(ImageWebPartWebPart, _super);
    function ImageWebPartWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageWebPartWebPart.prototype.render = function () {
        var element = React.createElement(ImageContainer.default, {
            header: this.properties.header,
            url: this.properties.url,
            link: this.properties.link,
            linkTitle: this.properties.linkTitle,
        });
        ReactDom.render(element, this.domElement);
    };
    Object.defineProperty(ImageWebPartWebPart.prototype, "dataVersion", {
        get: function () {
            return sp_core_library_1.Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    ImageWebPartWebPart.prototype.getPropertyPaneConfiguration = function () {
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
                                sp_webpart_base_1.PropertyPaneTextField('header', {
                                    label: strings.ImageHeader
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('url', {
                                    label: strings.UrlHeader
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('width', {
                                    label: strings.Width
                                }),
                                sp_webpart_base_1.PropertyPaneTextField("height", { label: strings.Height }),
                                sp_webpart_base_1.PropertyPaneTextField('link', {
                                    label: strings.Link
                                }),
                                sp_webpart_base_1.PropertyPaneTextField('linkTitle', {
                                    label: strings.LinkTitle
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return ImageWebPartWebPart;
}(sp_webpart_base_1.BaseClientSideWebPart));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ImageWebPartWebPart;

//# sourceMappingURL=ImageWebPartWebPart.js.map
