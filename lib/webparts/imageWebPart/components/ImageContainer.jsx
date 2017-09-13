import React from 'react';
export default class ImageContainer extends React.PureComponent{
    constructor(props){
        super(props);
    }
    render(){
        var image = "";
        /*if(this.props.width && this.props.height){
           image =  <img width={this.props.width + "px"} height={this.props.height + "px"} src={this.props.url} />
        }
        else if (this.props.width){
            image = <img width={this.props.width + "px"}  src={this.props.url}  />
        }
        else if (this.props.height){
            image = <img height={this.props.height + "px"} src={this.props.url}  />
        }else{
            image = <img src={this.props.url} />
        }*/
        image = <img src={this.props.url} />
        return(
        <div className="ImageContainer">
            <div>
                <h3>{this.props.header}</h3>
            </div>
            <div style={{textAlign : "center" }}>
                {image}
            </div>
            <div>
                <a href={this.props.link}>{this.props.linkTitle}</a>
            </div>
        </div>);
    }


}