import React from 'react';
import Card from '../components/card'
import { connect } from "react-redux";
import { fetchAll } from "../actions/productAction"
import Header from '../components/header'
import styled from 'styled-components';

const ContentWrapper = styled.div`
    padding: 0 75px;
    margin: 50px 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
    grid-gap: 25px;
    overflow: 'scroll';
`;

class Home extends React.Component {
  componentWillMount() {
    this.props.fetch();
  }
  render() {
    return (
      <div className="main">
        <Header />
        <ContentWrapper>{ 
          this.props.products.map((product,i) => <Card 
            key={i} 
            icon={product.image} 
            name={product.brand} 
            price={product.price} 
            category={product.category} 
            desc={product.name}/>
          )
        }</ContentWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchText: state.searchText,
    products: state.products,
  };
};
const mapDispatchToProps = (dispatch) => {
  return { 
    fetch: () => dispatch(fetchAll()),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(Home)