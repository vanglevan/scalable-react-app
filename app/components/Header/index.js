import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Layout, Input } from 'antd';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';
import messages from './messages';

const HeaderWrapper = styled(Layout.Header)`
  width: 100%;
  height: 100%;
  background: #f0f2f5;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #666;
  min-height: 50px;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Container>
        Header here
      </Container>
    </HeaderWrapper>
  );
}

export default Header;
