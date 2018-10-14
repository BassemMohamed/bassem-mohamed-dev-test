import React from 'react';
import Image from 'react-image'
import styled from 'styled-components'

const CardWrapper = styled.div`
    display: flex;
    margin: 0 25px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.1);
    transition: all 0.5s;
    :hover {
        box-shadow: 0 2px 8px ${props => props.theme.Secondary};
    }
    img {
        width: 50%;
        height: 100%;
        display: block;
    }
`;
const Title = styled.p`
    margin: 0;
    font-size: 23px;
    text-decoration: none;
    color: ${props => props.theme.Secondary};
`;
const Desc = styled.p`
    margin: 20px 0 0 0;
    font-size: 15px;
`;
const TextWrapper = styled.div`
    width: 100%;
    padding: 10px;
    position: relative;
`;

export default class Card extends React.Component {
    render() {
        return (
            <CardWrapper>
                <Image src={this.props.icon} />
                <TextWrapper>
                    <Title>{this.props.name}</Title>
                    <Desc>{this.props.desc}</Desc>
                    <Desc>Price: {this.props.price}</Desc>
                    <Desc>Category: {this.props.category}</Desc>
                </TextWrapper>
            </CardWrapper>
        );
    }
}