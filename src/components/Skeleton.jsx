import React from "react"
import "../scss/app.scss";
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={235}
    height={250}
    viewBox="-30 -20 200 250"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="5" y="148" rx="2" ry="2" width="46" height="10" /> 
    <rect x="6" y="166" rx="2" ry="2" width="69" height="9" /> 
    <rect x="0" y="0" rx="2" ry="2" width="154" height="130" /> 
    <rect x="6" y="193" rx="0" ry="0" width="64" height="14" /> 
    <rect x="92" y="188" rx="10" ry="10" width="55" height="21" />
  </ContentLoader>
)

export default Skeleton

