import React from 'react';
import PropTypes from 'prop-types';

export const ListWithInput = (props) => {
  return (
    <ul
      id={props.id}
      className="list-group"
      style={{ border: '1rem solid powderblue' }}
    >
      {props.listItem}

      {props.valueIWantToSee && props.valueIWantToSee.length > 0 && (
        <li className="list-group-item list-group-item-success">
          OK there is your content: {props.valueIWantToSee}
        </li>
      )}
    </ul>
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
