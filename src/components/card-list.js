import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { connect } from "react-redux"
import { addToCart } from "../actions/cartActions"
import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"
import arrow from "../images/chevron-circle-right-solid.svg"
import { motion } from "framer-motion"

const Card = styled.div`
  width: 150px;
  height: 180px;
  background-color: white;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  margin-top: 11px;
`

const StyledName = styled.h6`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 55px;
  padding: 0 0.5rem;
  font-size: 16px;
`

const ImageWrapper = styled.div`
  height: 125px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-flow: column;

  > img {
    object-fit: contain;
    height: 120px;
  }

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

const StyledArrow = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  ${props => (props.isRight ? "right" : "left")}: 15%;
  top: 50%;
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
                  publicURL
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
                  as={motion.div}
                  whileTap={{ scale: 0.9 }}
                >
                  <ImageWrapper>
                    <img
                      src={`${dish.node.image.publicURL}`}
                      alt={dish.node.name}
                      draggable={false}
                    />
                  </ImageWrapper>

                  <StyledName>{dish.node.name}</StyledName>
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
