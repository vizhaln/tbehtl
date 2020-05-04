import React, { PureComponent } from "react";
import "./thumbnail.css";

type Props = {
  thumbnailsArr: Array<Object>,
  showExpandedImage: any,
};

class Thumbnail extends PureComponent<Props, State> {
  constructor(props: any) {
    super(props);
    const len = this.props.thumbnailsArr.length;
    let indexLen = 0;
    const indexArr = [];
    const thumbArr = [];

    if (len > 5) {
      indexLen = 5;
    } else {
      indexLen = len;
    }

    for (let i = 0; i < indexLen; i += 1) {
      indexArr.push(i);
      thumbArr.push(this.props.thumbnailsArr[i]);
    }

    this.state = {
      indexLength: indexLen,
      indexes: indexArr,
      disableLeft: true,
      disableRight: !(len > 5),
      thumbnails: thumbArr,
    };
  }

  showExpandedImg = (index: any) => {
    if (this.props.showExpandedImage) {
      this.props.showExpandedImage(index);
    }
  };

  leftArrowClick = () => {
    const { indexes } = this.state;
    const thumbnails = this.props.thumbnailsArr;
    const tempArr = [];
    let disableLeft = true;
    let disableRight = true;

    if (indexes[0] !== 0) {
      disableLeft = false;

      for (let i = 0; i < indexes.length; i += 1) {
        indexes[i] -= 1;
      }
    }

    indexes.forEach((val) => {
      tempArr.push(thumbnails[val]);
    });

    if (indexes[0] !== 0) {
      disableLeft = false;
    }

    if (indexes[this.state.indexLength - 1] !== thumbnails.length - 1) {
      disableRight = false;
    }

    this.setState({
      thumbnails: tempArr,
      indexes,
      disableLeft,
      disableRight,
    });
  };

  rightArrowClick() {
    const { indexes } = this.state;
    const thumbnails = this.props.thumbnailsArr;
    const tempArr = [];
    let disableRight = true;
    let disableLeft = false;

    if (indexes[this.state.indexLength - 1] !== thumbnails.length - 1) {
      disableRight = false;

      for (let i = 0; i < indexes.length; i += 1) {
        indexes[i] += 1;
      }
    }

    indexes.forEach((val) => {
      tempArr.push(thumbnails[val]);
    });

    if (indexes[this.state.indexLength - 1] !== thumbnails.length - 1) {
      disableRight = false;
    }

    if (indexes[0] === 0) {
      disableLeft = true;
    }

    this.setState({
      thumbnails: tempArr,
      indexes,
      disableRight,
      disableLeft,
    });
  }

  render() {
    const thumbNails = this.props.thumbnailsArr.length <= 5;
    let hideArrowStyle = "";
    const disableLeft = this.state.disableLeft;
    const disableRight = this.state.disableRight;
    let disabledArrow = "";

    if (thumbNails) {
      hideArrowStyle = "";
    }

    if (disableLeft || disableRight) {
      disabledArrow = "";
    }

    return (
      <div className="alignFlex">
        <div
          onClick={this.leftArrowClick}
          onKeyDown={() => {}}
          disabled={this.state.disableLeft}
          className="alignFlex"
        >
          {/* <img
            src={imageConstant.leftArrowCarousel.src}
            alt={imageConstant.leftArrowCarousel.alt}
            title={imageConstant.leftArrowCarousel.alt}
            className={disabledArrow}
          /> */}
          <span>left</span>
        </div>

        <div className="alignFlex">
          {this.state.thumbnails.map((thumbnailItem, thumbIndex) => (
            <div key={thumbIndex}>
              <img
                className="thumbImg"
                src={thumbnailItem.enlargedImg}
                onKeyDown={() => {}}
                onClick={() =>
                  this.showExpandedImg(this.state.indexes[thumbIndex])
                }
                key={this.state.indexes[thumbIndex]}
                alt=""
              />
            </div>
          ))}
        </div>

        <div
          onClick={() => this.rightArrowClick()}
          onKeyDown={() => {}}
          disabled={this.state.disableRight}
          className="alignFlex"
        >
          {/* <img
            src={imageConstant.rightArrow.src}
            alt={imageConstant.rightArrow.alt}
            title={imageConstant.rightArrow.alt}
            
          /> */}
          <span>Right</span>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
