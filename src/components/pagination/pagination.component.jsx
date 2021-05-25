import React from 'react';
import { paginateData } from "../../redux/fetchedData/fetched.action";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {currentPageCounter} from '../../redux/fetchedData/fetched.selector'
import './pagination.styles.scss';


export const Pagination = ({ onPrevious, paginateData, currentPage }) => {
    console.log({currentPage})
  return (
    <div className="pagination">
      <button
        onClick={() => paginateData({ newPage: currentPage - 1, offset: 49 })}
        className="previous"
        data-test-id="previous"
        disabled={currentPage <= 1}
      >
        <span>Previous</span>
      </button>
      <div className="counter">
        <span>
          {" "}
          &nbsp;&nbsp;&nbsp;&nbsp;{currentPage}&nbsp;&nbsp;&nbsp;&nbsp;of 14
        </span>
        <span
          style={{
            position: "relative",
            left: "-72px",
            zIndex: "-1",
            marginTop: "5px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="31"
              height="31"
              rx="3.5"
              fill="white"
              stroke="#3F3F3F"
            />
          </svg>
        </span>
      </div>
      <button
        data-test-id="next"
        id="next"
        onClick={() => paginateData({ newPage: currentPage + 1, offset: 49 })}
        className="next"
        disabled={currentPage >= 14}
      >
        <span>Next</span>
      </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentPage: currentPageCounter,
});
const mapDispatchToProps = (dispatch) => ({
  paginateData: (data) => dispatch(paginateData(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
