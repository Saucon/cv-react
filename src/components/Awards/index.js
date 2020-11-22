import React from "react";

import { ListGroup } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward } from '@fortawesome/free-solid-svg-icons'

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;

const Awards = () => {
  return <section id="awards">
    <div className="container">
    <Title>Awards</Title>
    <ListGroup variant="flush">
    <ListGroup.Item>  <FontAwesomeIcon icon={faAward} /> 1st Winner - Developer Competition FTif ITS</ListGroup.Item>
    <ListGroup.Item>  <FontAwesomeIcon icon={faAward} /> Top 20 - In.CoDe 2016</ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Awards;