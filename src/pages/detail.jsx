import { Container, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useLK21Dispatch, useLK21State, getLinkDownload } from '../context/lk21'
import LK21TypeAction from "../context/lk21/lk21_type_action"

const Detail = () => {
  const {data, err, loading, type} = useLK21State()
  const dispatch = useLK21Dispatch()

  const [links, setLinks] = useState([])
  
  const { slug } = useParams()
  
  useEffect(() => {
    dispatch(getLinkDownload(slug))
  },[slug])

  useEffect(() => {
    if (data !== null && type === LK21TypeAction.GetLinkDownloadSuccess) {
      setLinks(data.results)
      console.log(data)
    }
  },[data, type])

  // console.log(data)
  return (
    <Container maxWidth='lg'>
      <ul>

      {links.map((val, i) => {
        return (
            <li>
              <Typography variant='body1'>{val.type}</Typography>
              <Typography variant='body2'>{val.link}</Typography>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default Detail