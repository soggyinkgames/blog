import React from "react"
import styles from "../utils/css/components/section.css"
import Container from "./container"

export default function Section({ children, className = "", ...rest }) {
  if (!children) {
    return null
  }
  return (
    <section className={`${styles.root} ${className}`} {...rest}>
      <Container>{children}</Container>
    </section>
  )
}
