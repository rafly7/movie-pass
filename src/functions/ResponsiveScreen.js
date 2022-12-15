import useWindowDimensions from "../hooks/useGetScreen"

export const verticalGridList = (width) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  if(between(width, 0, 340)) return {cols: 3, height: '190px'}
  else if(between(width, 340, 500)) return {cols: 3, height: '220px'}
  else if(between(width, 500, 700)) return {cols: 4, height: '220px'}
  else if(between(width, 700, 900)) return {cols: 5, height: '220px'}
  else if(between(width, 900, 1100)) return {cols: 6, height: '240px'}
  else if(between(width, 1100, 1200)) return {cols: 6, height: '270px'}
  else if(between(width, 1200, 1400)) return {cols: 7, height: '270px'}
  else if(between(width, 1400, 2000)) return {cols: 8, height: 'auto'}
}

const between = (width, min, max) => {
  return width >= min && width <= max
}