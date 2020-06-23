import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { List, Avatar, Spin } from 'antd';

const SpinWrapper = styled.div`
  text-align: center;
  background: rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 30px 50px;
  margin: 20px 0;
`;

function UserList({ users, loading, error }) {
  if (loading) {
    return (
      <SpinWrapper>
        <Spin tip="Loading..." />
      </SpinWrapper>
    );
  }

  if (error) {
    return <div className="error">Error</div>;
  }

  if (users) {
    return (
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://tiki.vn">{item.name}</a>}
              description={item.email}
            />
          </List.Item>
        )}
      />
    );
  }

  return null;
}

UserList.propTypes = {
  users: PropTypes.any,
  loading: PropTypes.bool,
  error: PropTypes.bool,
};

export default UserList;
