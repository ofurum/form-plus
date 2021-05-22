import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  currentResult,
  listOfDataResults,
} from "../../redux/fetchedData/fetched.selector";
import { setData } from "../../redux/fetchedData/fetched.action";
import Card from "../../components/card/card.component";
import "./cardList.styles.scss";

const CardList = ({ setData, results, listResults }) => {
  console.log({ results });
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
    if (listResults !== null) {
      return listOfDataResults.length;
    }
  };
  //   const resultNull = () => {
  //     if (results !== null) {
  //       return results;
  //     }
  //   };

  const ren = resultsLength();
  return (
    <div className="cardList">
      <div className="cardlist-header">
        <span
          style={{
            minWidth: "10%",
            display: "flex",
            justifyContent: "center",
            fontWeight: "500",
            marginBottom: "30px",
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
          {listResults?.length} Templates
        </span>
      </div>
      <div className="upper">
        <div className="card-display">
          {results &&
            results
              .filter((result, index) => index < 30)
              .map((result, index) => (
                <Card
                  key={index}
                  name={result.name}
                  description={result.description}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  results: currentResult,
  listResults: listOfDataResults,
});
const mapDispatchToProps = (dispatch) => ({
  setData: (data) => dispatch(setData(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(CardList);
