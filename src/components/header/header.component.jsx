import React, { useState } from "react";
import { connect } from "react-redux";
import { sortByAlphabet } from "../../redux/fetchedData/fetched.action";
import {
  filterTemplates,
  setCurrentCategory,
} from "../../redux/fetchedData/fetched.action";
import "./header.styles.scss";

const Header = ({ sortByAlphabet, filterTemplate, setCurrentCategory }) => {
  const [isClicked, setIsCliked] = useState(false);
  const sortByInput = (e) => {
    localStorage.clear();
    let value = e.target.value;
    let direction = value.endsWith("asc") ? "asc" : "dsc";
    console.log("dir>>>>>>", direction);

    return sortByAlphabet({ direction });
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setCurrentCategory(value);
  };

  const refresh = () => {
    return localStorage.clear();
  };
const handleClick = () => {
  setIsCliked(!isClicked)
}
  return (
    <div className="header">
      <div className="mobile-view" onClick={handleClick}>
        {isClicked ? <i class="fas fa-times"></i> : <i class="fas fa-bars"></i>}
      </div>
      <div className={isClicked ? "header-section" : "header-part"}>
        <div className="search">
          <input
            type="search"
            placeholder="Search Templates"
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "5px",
              border: "3px solid #ccc",
            }}
            onChange={(e) => filterTemplate(e.target.value)}
          />
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fas fa-search"
          >
            <path
              d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
              stroke="#8F8B8B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M18.9999 19L14.6499 14.65"
              stroke="#8F8B8B"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          {/* <i className="fas fa-search"></i> */}
        </div>

        <div className="sorted">
          <span className="sort-title" style={{ color: "#8F8B8B" }}>
            Sorted By:
          </span>
          <div className="section">
            <fieldset
              style={{
                width: "115%",
                border: "3px light #dad4d4",
              }}
            >
              <legend style={{ color: "#8F8B8B" }}>Category</legend>
              <select
                style={{ border: "none", width: "100%" }}
                onChange={handleChange}
              >
                <option value="All">All</option>
                <option value="Health">Health</option>
                <option value="E-commerce">E-commerce</option>
                <option value="Education">Education</option>
              </select>
            </fieldset>
          </div>
          <div className="section">
            <fieldset style={{ width: "120%", border: "2px light #8F8B8B" }}>
              <legend style={{ color: "#8F8B8B" }}>Order</legend>
              <select
                style={{ border: "none", width: "100%" }}
                onChange={sortByInput}
              >
                <option value="default">Default</option>
                <option value="alphabet_asc">ASCENDING</option>
                <option value="alphabet_dsc">DESCENDING </option>
              </select>
            </fieldset>
          </div>
          <div className="section">
            <fieldset style={{ width: "120%", border: "2px light #8F8B8B" }}>
              <legend style={{ color: "#8F8B8B" }}>Date</legend>
              <select style={{ border: "none", width: "100%" }}>
                <option value="All">Default</option>
                <option value="date_ascending">ASCENDING</option>
                <option value="alphabet_descending">DESCENDING </option>
              </select>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  sortByAlphabet: (alphabet) => dispatch(sortByAlphabet(alphabet)),
  filterTemplate: (template) => dispatch(filterTemplates(template)),
  setCurrentCategory: (category) => dispatch(setCurrentCategory(category)),
});

export default connect(null, mapDispatchToProps)(Header);
