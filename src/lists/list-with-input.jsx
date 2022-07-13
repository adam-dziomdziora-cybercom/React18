import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Col, ListGroupItem } from 'react-bootstrap';

const MyUL = styled.ul`
  background: palevioletred;
  border-radius: 3rem;
  border: 1rem solid powderblue;
  margin: 0 1rem;
  padding: 0.25rem 1rem;
  display: flex;
`;

export const ListWithInput = (props) => {
  return (
    <MyUL id={props.id}>
      {props.listItem}

      {props.valueIWantToSee && props.valueIWantToSee.length > 0 && (
        <ListGroupItem variant="primary" as={Col}>
          OK there is your content: {props.valueIWantToSee}
        </ListGroupItem>
      )}
    </MyUL>
  );
};

ListWithInput.propTypes = {
  id: PropTypes.string.isRequired,
  valueIWantToSee: PropTypes.string,
  listItem: PropTypes.object.isRequired,
};

ListWithInput.defaultProps = {
  valueIWantToSee: '',
};
