import { ImageList, ImageListItem, ImageListItemBar } from "@mui/material"
import { useNavigate } from "react-router-dom"
import {verticalGridList} from '../../functions/ResponsiveScreen'
import useWindowDimensions from "../../hooks/useGetScreen"

const CardList = ({ datas }) => {
  const { width } = useWindowDimensions()
  const navigate = useNavigate()
  const { cols, height } = verticalGridList(width)
  // console.log(data)
  // const { cols } = { ...verticalGridList }
  // console.log(3)
  const onClickDetail = (nameSlug) => {
    navigate(`/${nameSlug}`)
  }

  return (
    <ImageList
      cols={cols}
      gap={4}
      sx={{height: 'calc(100vh - 60px)'}}
    >
      {datas.map((val, i) => {
        return (
          <ImageListItem key={i} style={{height: `${height}px`}} onClick={() => onClickDetail(val.slug)}>
            <img
              src={`http://${val.image_src}`}
              alt={val.slug}
            />
            <ImageListItemBar
              sx={{wordWrap: 'break-word', whiteSpace: 'revert'}}
              title={val.title}
              subtitle={val.genres.join(',')}
            />
          </ImageListItem>
        )
      })}
    </ImageList>
  )
}

export default CardList