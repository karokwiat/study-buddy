import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average.js';
import { Wrapper, StyledInfo } from './UsersListItem.styles.js';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { average, name, attendance = '0%' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <Average average={average}></Average>
      <StyledInfo>
        <p>
          {name}
          <DeleteButton onClick={() => deleteUser(name)}></DeleteButton>
        </p>
        <p>attendance: {attendance}</p>
      </StyledInfo>
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
  }),
};

export default UsersListItem;
