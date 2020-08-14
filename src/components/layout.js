import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components';
import ContextProvider from '../utils/ContextProvider';

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
`;


const Layout = ({ children }) => {
  return (
      <ContextProvider>
        <Wrapper>
          {children}
        </Wrapper>
      </ContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
