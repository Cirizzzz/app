import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const DivesCont=styled.div`
font-size: 15px;
background-color: plum;
color: indigo;
width: 254px;
border: 1px solid darkcyan;
`;
const Names=styled.b`
  font-size: 20px;
  color: blue;
  `;

function SwapiHero({ name, onClick }) { 
  return (
    <DivesCont onClick={onClick}>
      <div>
        Name: <Names>{name}</Names>
      </div>
    </DivesCont>
  );
}

SwapiHero.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

SwapiHero.defaultProps = {
  onClick: () => {},
  name: "goida",
};

export default SwapiHero;
