import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { addToCart } from "../actions/cartActions"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const Card = styled.div`
  width: 130px;
  height: 180px;
  background-color: white;
  border-radius: 1rem;
  padding-right: 8px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  margin-top: 11px;
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
  font-size: 14px;
`

const StyledArrow = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  /* right: ${props => (props.isRight ? "15%" : "unset")};
  left: ${props => (props.isRight ? "unset" : "15%")}; */
  ${props => (props.isRight ? "right" : "left")}: 15%;
  top: 50%;
  background-color: red;
`

const CardList = props => {
  const handleOnDragStart = e => e.preventDefault()
  const responsive = {
    0: { items: 6 },
  }
  let Carousel = null

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
        <>
          <AliceCarousel
            mouseTrackingEnabled
            responsive={responsive}
            fadeOutAnimation={true}
            dotsDisabled
            buttonsDisabled={true}
            infinite={false}
            preservePosition={true}
            ref={el => (Carousel = el)}
          >
            {edges
              .filter(query =>
                query.node.name.toLowerCase().includes(props.search)
              )
              .map(dish => (
                <Card
                  key={dish.node.id}
                  onDragStart={handleOnDragStart}
                  onDoubleClick={() => {
                    props.addToCart(dish.node)
                  }}
                  onClick={() => {
                    props.onFocus(dish.node)
                  }}
                >
                  <ImageContainer>
                    <img
                      src={`http://localhost:1337${dish.node.image[0].url}`}
                      alt={dish.node.name}
                      draggable={false}
                    />
                  </ImageContainer>

                  <StyledName>{dish.node.name}</StyledName>
                  <StyledPrice>{dish.node.price.toFixed(2)}zł</StyledPrice>
                </Card>
              ))}
          </AliceCarousel>
          <StyledArrow isRight onClick={() => Carousel.slideNext()} />
          <StyledArrow onClick={() => Carousel.slidePrev()} />
        </>
      )}
    />
  )
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
