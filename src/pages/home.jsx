import { useEffect, useState } from "react"
import { LK21Provider,useLK21Dispatch, useLK21State, getPopular, getSearchByTitle } from '../context/lk21'
import SearchAppBar from "../components/AppBar"
import { Container, ImageList, Typography } from "@mui/material"
import styles from '../styles/Home.module.css'
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { useSearchParams } from "react-router-dom"
import LK21TypeAction from "../context/lk21/lk21_type_action"
import CardList from "../components/CardList"

const Component = () => {
  const dispatch = useLK21Dispatch()
  const [popular, setPopular] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()

  const searchTerm = searchParams.get('find') || ''


  const {data, loading, err, type} = useLK21State()
  useEffect(() => {

    // const popular = async () => {
    //   await Axios.get('http://202.157.187.199/api/v1/lk21/popular')
    //     .then(res => {
    //       console.log(res)
    //     })
    //     .catch(err => {

    //     })
    // }
    // popular()
  },[])

  useEffect(() => {
    // if (data !== null && type) {
    //   setPopular(data.results)
    //   // setPopular
    // }
    dispatch(getPopular())
  },[])

  useEffect(() => {
    if (searchTerm !== '') {
      dispatch(getSearchByTitle(searchTerm))
    }
  },[searchTerm])

  // console.log(type)

  return (
    <Container maxWidth='lg'>
      {searchTerm !== '' && type === LK21TypeAction.GetSearchByTitleSuccess
      ? <CardList datas={data.results}/>
      : <div className={styles['heading-container']}>
          <Typography variant='h6' className={styles['heading-popular']}>
            Popular
          </Typography>
        </div>
      }
      
    </Container>
  )
}

const Home = () => {
  return (
      <Component/>
  )
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
    cols: 2,
  },
];

export default Home