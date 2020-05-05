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
    return (
      <div className="alignFlex">
        <div
          onClick={this.leftArrowClick}
          onKeyDown={() => {}}
          disabled={this.state.disableLeft}
          className="alignFlex"
        >
          <span className={this.state.disableLeft && "disabledPt"}>Left</span>
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
          <span className={this.state.disableRight && "disabledPt"}>right</span>
        </div>
      </div>
    );
  }
}

export default Thumbnail;
