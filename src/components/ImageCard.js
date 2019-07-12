import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 }
        this.imageRef = React.createRef();
    }

    // Using the load event listener so we get the real 
    // height of the image after it loads
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        // Simplified ES6 syntax if the property and variable
        // have the same name
        this.setState({ spans });


    }
    
    render() {

        const { description, urls } = this.props.image;

        return(
          <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
              <img ref={this.imageRef}
                src={urls.regular}
                alt={description}
              />
          </div>
        );
    }
}

export default ImageCard;