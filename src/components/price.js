import { useSpring, animated } from "react-spring"
import React from "react"

const Price = props => {
  const animatedPrice = useSpring({
    number: props.price,
    from: { number: 0 },
    stiffness: 200,
    damping: 40,
    mass: 1,
  })

  return (
    <animated.span>
      {animatedPrice.number.interpolate(n => n.toFixed(2))}
    </animated.span>
  )
}

export default Price
