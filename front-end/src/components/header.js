import React from 'react';
import styled from 'styled-components'
import { connect } from "react-redux";
import { fetchAll,search } from "../actions/productAction"

const HeaderWrapper = styled.header`
    padding: 0 100px;
    background-color: ${props => props.theme.Secondary};
`;
const Wrapper = styled.div`
    text-align: ${props => (props.right ? "right" : "left")};
    margin: 15px 0;
    width: 50%;
    display: inline-block;
`;
const SiteName = styled.h3`
    margin: 0;
    font-size: 25px;
    font-weight: bold;
    color: ${props => props.theme.Primary};
    text-decoration: none;
    vertical-align: middle;
    :hover {
        color: ${props => props.theme.Primary};
    }
`;
const Search = styled.input`
    padding: 7px 10px;
    border-radius: 10px;
    appearance: none;
    -webkit-appearance: none;
    border-color: ${props => props.theme.Primary};
`;

class Header extends React.Component {
    searchChanged(key) {
        if(key) {
            this.props.search(key);
        } else {
            this.props.fetch();
        }
    }
    render() {
        return (
            <HeaderWrapper>
                <Wrapper>
                    <SiteName>ElPrices.com</SiteName>
                </Wrapper>
                <Wrapper right>
                    <Search placeholder="Search" onChange={(e) => this.searchChanged(e.target.value)}></Search>
                </Wrapper>
            </HeaderWrapper>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        fetch: () => dispatch(fetchAll()),
        search: (key) => dispatch(search(key))
    };
};
export default connect(null,mapDispatchToProps)(Header)