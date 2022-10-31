import React, { FC } from "react"
import ContentLoader from "react-content-loader"

interface PizzaCardSkeletonProps {
  className?: string;
}

const PizzaCardSkeleton: FC<PizzaCardSkeletonProps> = ({className}) => (
  <ContentLoader
    className={className}
    speed={2}
    width={'100%'}
    height={'100%'}
    viewBox="0 0 309 489"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="293" rx="8" ry="8" width="309" height="25" /> 
    <rect x="0" y="334" rx="8" ry="8" width="309" height="93" /> 
    <circle cx="155" cy="130" r="130" /> 
    <rect x="0" y="450" rx="8" ry="8" width="90" height="35" /> 
    <rect x="147" y="445" rx="25" ry="25" width="160" height="42" />
  </ContentLoader>
)

export default PizzaCardSkeleton
