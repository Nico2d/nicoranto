import React, { Component } from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { addToCart } from "../actions/cartActions"

const Card = styled.div`
  width: 130px;
  height: 180px;
  background-color: white;
  border-radius: 1rem;
  margin-right: 8px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
`

const CardListWrapper = styled.div`
  height: 200px;
  display: inline-flex;
  align-items: center;
  overflow: scroll;
`

const StyledName = styled.h6`
  text-align: center;
  margin: 0 5px 1px 5px;
`

const ImageContainer = styled.div`
  height: 100px;
  overflow: hidden;
  margin: 10px 0;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 2rem;
    height: 1px;
    left: 50%;
    transform: translateX(-50%);
    background: gray;
  }
`

const StyledPrice = styled.p`
  text-align: center;
  font-size: 16px;
`

class CardList extends Component {
  handleDoubleClick = product => {
    this.props.addToCart(product)
  }

  handleClick = product => {
    this.props.onFocus(product)
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allStrapiMenu {
              edges {
                node {
                  id
                  name
                  price
                  strapiId
                  description
                  image {
                    url
                  }
                }
              }
            }
          }
        `}
        render={({ allStrapiMenu: { edges } }) => (
          <CardListWrapper>
            {edges.map(dish => (
              <Card
                key={dish.node.id}
                onDoubleClick={() => {
                  this.handleDoubleClick(dish.node)
                }}
                onClick={() => {
                  this.handleClick(dish.node)
                }}
              >
                <ImageContainer>
                  <img
                    src={`http://localhost:1337${dish.node.image[0].url}`}
                    alt={dish.node.name}
                  />
                </ImageContainer>

                <StyledName>{dish.node.name}</StyledName>
                <StyledPrice>{dish.node.price}zł</StyledPrice>
              </Card>
            ))}
          </CardListWrapper>
        )}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => {
      dispatch(addToCart(product))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList)
