import React from 'react';

import './header.styles.scss';

const Header  = () => {

    return (
      <div className="header">
        <div className="search">
          <input
            type="text"
            placeholder="Search Templates"
            style={{
              width: "100%",
              padding: "15px",
              borderRadius: "5px",
              border: "3px solid #ccc",
            }}
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
          <span>Sorted By:</span>
          <div>
            <fieldset
              style={{
                width: "115%",
                border: "3px light #dad4d4",
        
              }}
            >
              <legend style={{ color: "#8F8B8B" }}>Category</legend>
              <select style={{ border: "none", width: "100%" }}>
                <option value="All">All</option>
                <option value="Health">Health</option>
                <option value="Ecommerce">Ecommerce</option>
                <option value="Agriculture">Agriculture</option>
              </select>
            </fieldset>
          </div>
          <div>
            <fieldset style={{ width: "120%", border: "2px light #8F8B8B" }}>
              <legend style={{ color: "#8F8B8B" }}>Order</legend>
              <select style={{ border: "none", width: "100%" }}>
                <option value="default">Default</option>
              </select>
            </fieldset>
          </div>
          <div>
            <fieldset style={{ width: "120%", border: "2px light #8F8B8B" }}>
              <legend style={{ color: "#8F8B8B" }}>Date</legend>
              <select style={{ border: "none", width: "100%" }}>
                <option value="All">Default</option>
              </select>
            </fieldset>
          </div>
        </div>
      </div>
    );
}

export default Header;