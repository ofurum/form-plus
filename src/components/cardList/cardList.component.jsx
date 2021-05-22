import React, { useEffect } from "react";
import axios from "axios";
import {connect} from "react-redux";
import { createStructuredSelector } from "reselect";
import {listOfDataResults} from '../../redux/fetchedData/fetched.selector';
import {setData} from '../../redux/fetchedData/fetched.action'
import "./cardList.styles.scss";

const CardList = ({setData, results}) => {
    console.log({results})
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("isFectching.....");
        const result = await axios.get(
          "https://front-end-task-dot-fpls-dev.uc.r.appspot.com/api/v1/public/task_templates"
        );
        console.log("fetched");
        console.log(">>>>>", result.data);
        setData(result.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [setData]);
  
  const resultsLength = () => {
      if(results !== null){
          return results.length
      }
  }
  const ren = resultsLength()
  return (
    <div className="cardList">
      <div className="cardlist-header">
        <span
          style={{
            minWidth: "10%",
            display: "flex",
            justifyContent: "center",
            fontWeight: "500",
          }}
        >
          All Templates
        </span>
        <span
          style={{
            minWidth: "50%",
            display: "flex",
            justifyContent: "flex-end",
            color: "#989898",
          }}
        >
          {ren} Templates
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  results: listOfDataResults,
});
const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
