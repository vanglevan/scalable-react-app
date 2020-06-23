import React from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import { Layout } from 'antd';

import LocaleToggle from 'containers/LocaleToggle';
import messages from './messages';

const FooterWrapper = styled(Layout.Footer)`
  display: flex;
  justify-content: center;
  padding: 3em 0;
  border-top: 1px solid #666;
  min-height: 50px;
`;

function Footer() {
  return (
    <FooterWrapper>
      <section>Footer here</section>
    </FooterWrapper>
  );
}

export default Footer;
