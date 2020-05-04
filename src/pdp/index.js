import React from "react";
import ReactImageMagnify from "react-image-magnify";
import Carousel from "nuka-carousel";
import Thumbnail from "./thumbnail";
import img from "./image.json";
import "./index.css";

class Pdp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgIndex: 0 };
  }

  showExpandedImage = (index) => this.setState({ imgIndex: index });

  render() {
    return (
      <>
        <div className="dskViewCn">
          <div className="rowPdp">
            <div className="columnPdp">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: false,
                    width: 300,
                    height: 300,
                    src: img.img[this.state.imgIndex].enlargedImg,
                  },
                  largeImage: {
                    src: img.img[this.state.imgIndex].enlargedImg,
                    width: 600,
                    height: 600,
                    className: "imgPdp",
                  },
                }}
              />
              <div className="thumbnailCss">
                <Thumbnail
                  thumbnailsArr={img.img}
                  showExpandedImage={this.showExpandedImage}
                />
              </div>
            </div>
            <div className="columnPdp">
              <div className="pdpTitle">Curry leafs</div>
              <span className="pdp_price">$100</span>
              <span className="pdp__spec">1% off</span>
              <div className="pdp__desc">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s.
              </div>
              <div className="pdp__desc">Ingredients</div>
              <div className="pdp__desc">Nutritional info</div>
            </div>
          </div>
          <hr />
          <div className="expandPanel">
            <div className="pdpExpandPanel">
              <span>Description</span>
            </div>
            <div className="pdpDescDetail">
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters. On the other hand, we denounce
                with righteous indignation and dislike men who are so beguiled
                and demoralized by the charms of pleasure of the moment, so
                blinded by desire.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                demo-elessipublishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="expandPanel">
            <div className="pdpExpandPanel">
              <span>Shipping</span>
            </div>
            <div className="pdpDescDetail">
              <p>No detail</p>
            </div>
          </div>
        </div>
        <div className="mblViewCn">
          <Carousel
            renderCenterLeftControls={null}
            renderCenterRightControls={null}
          >
            <img
              src="https://www.pngitem.com/pimgs/m/125-1259439_transparent-curry-leaves-png-png-download.png"
              alt=""
            />
            <img
              src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2"
              alt=""
            />
          </Carousel>
          <div className="mbPdpView">
            <div className="pdpTitle">Curry leafs</div>
            <span className="pdp_price">$100</span>
            <span className="pdp__spec">1% off</span>
            <div className="pdp__desc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </div>
            <div className="pdp__desc">Ingredients</div>
            <div className="pdp__desc">Nutritional info</div>
          </div>
          <hr />
          <div className="expandPanel">
            <div className="pdpExpandPanel">
              <span>Description</span>
            </div>
            <div className="pdpDescDetail">
              <p>
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters. On the other hand, we denounce
                with righteous indignation and dislike men who are so beguiled
                and demoralized by the charms of pleasure of the moment, so
                blinded by desire.
              </p>
              <p>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                demo-elessipublishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
              </p>
            </div>
          </div>
          <div className="expandPanel">
            <div className="pdpExpandPanel">
              <span>Shipping</span>
            </div>
            <div className="pdpDescDetail">
              <p>No detail</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Pdp;
