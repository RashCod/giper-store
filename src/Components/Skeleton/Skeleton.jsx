import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
    speed={2}
    width={200}
    height={400}
    viewBox="0 0 200 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="12" rx="0" ry="0" width="185" height="384" />
  </ContentLoader>
)

export default Skeleton