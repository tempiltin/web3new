import React, { useState } from "react";
import { Data } from "./Data";
import styled from "styled-components";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

const AcardionSection = styled.div``;
const Container = styled.div``;
const Wrap = styled.div`

`;
const Dropdown = styled.div`

`;

const Quest = () => {
  const [clicked, setClicked] = useState(false);

  const toogle = (index) => {
    // agar click bo'lganda savol ochiq bo'lsa uni yopish
    if (clicked === index) {
      return null;
    }
    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#00FFB9", size: "25px" }}>
      <AcardionSection className="FAQContnetSect">
        <Container className="FAQquestions">
          {Data.map((item, index) => {
            return (
              <div key={index}>
                <Wrap onClick={() => toogle(index)}>
                  <h2 className="accordion no-border active">
                    {item.question}
                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                  </h2>
                </Wrap>
                {clicked === index ? (
                  <Dropdown className="accordion-panel" style={{maxHeight:"164px",
                  transition:"900ms"}}>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </div>
            );
          })}
        </Container>
        <h6>Don’t get your answer ? <a href="#!">Ask Here !</a></h6>
      </AcardionSection>
    </IconContext.Provider>
  );
};

export default Quest;
