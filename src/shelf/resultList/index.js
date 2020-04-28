import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

class ResultList extends React.Component {
  render() {
    return (
      <>
        {this.props.view && (
          <>
            <div className="row desktpView">
              <div className="column">
                <img src={this.props.dt.image} className="img" alt="" />
              </div>
              <div className="column1">
                <div className="productTitle">{this.props.dt.productTitle}</div>
                <div>{this.props.dt.description}</div>
                <div>
                  {this.props.dt.startDate} - {this.props.dt.endDate}
                </div>
                <div>{this.props.dt.location}</div>
                <button className="addBag">Add to cart</button>
              </div>
            </div>
            <div className="mblView">
              <div className="mbGridView">
                <Link to="/pdp">
                  <div className="imgListView">
                    <img src={this.props.dt.image} className="img1" alt="" />
                    <span class="product__price-point">
                      <span class="product__price">
                        <span class="money">{this.props.dt.price}</span>
                      </span>
                    </span>
                  </div>
                </Link>
                <div className="productTitle">{this.props.dt.productTitle}</div>
                <span class="product__spec">
                  {this.props.dt.productSpec} |{" "}
                  <span itemprop="availability">
                    {this.props.dt.availability}
                  </span>{" "}
                  | {this.props.dt.productType}
                </span>
                <div className="product__desc">{this.props.dt.description}</div>
                <div class="btn--underlines-container">
                  <input
                    class="btn btn--underlines js-add-to-card"
                    type="submit"
                    value="Add to bag"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    width="61"
                    height="12"
                    viewBox="0 0 61 12"
                  >
                    <path
                      d="M60.217,1.433 C45.717,2.825 31.217,4.217 16.717,5.609 C13.227,5.944 8.806,6.200 6.390,5.310 C7.803,4.196 11.676,3.654 15.204,3.216 C28.324,1.587 42.033,-0.069 56.184,0.335 C58.234,0.394 60.964,0.830 60.217,1.433 ZM50.155,5.670 C52.205,5.728 54.936,6.165 54.188,6.767 C39.688,8.160 25.188,9.552 10.688,10.943 C7.198,11.278 2.778,11.535 0.362,10.645 C1.774,9.531 5.647,8.988 9.175,8.551 C22.295,6.922 36.005,5.265 50.155,5.670 Z"
                      class="cls-1"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </>
        )}
        {!this.props.view && (
          <div className="grdbtmMargin">
            <Link to="/pdp">
              <div className="gridView">
                <img src={this.props.dt.image} className="img1" alt="" />
                <span class="product__price-point">
                  <span class="product__price">
                    <span class="money">{this.props.dt.price}</span>
                  </span>
                </span>
                <button
                  className="btn btn--default btn--submit btn--circle  js-add-to-card"
                  type="submit"
                  title="Add to bag"
                >
                  <span>+</span>
                </button>
              </div>
            </Link>
            <div className="gridMbSpec">
              <div className="productTitle">{this.props.dt.productTitle}</div>
              <span class="product__spec">
                {this.props.dt.productSpec} |{" "}
                <span itemprop="availability">
                  {this.props.dt.availability}
                </span>{" "}
                | {this.props.dt.productType}
              </span>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default ResultList;
