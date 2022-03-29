import { useState, useEffect} from 'react'
import useAuth from '../Auth/useAuth'
import { Container, Form } from 'react-bootstrap'
import SpotifyWebApi from 'spotify-web-api-node'

const spotifyApi = new SpotifyWebApi({
    client_id:"d120388710c6420bbeae6b287f495818",
})

export default function Dashboard({ code }) {
    const accesToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])


    useEffect(() => {
        if (!accesToken) return 
        spotifyApi.setAccessToken(accesToken)
    }, [accesToken])

    useEffect(() => {
        if (!search) return setSearchResult([])
        if (!accesToken) return 
        
        spotifyApi.searchTracks(search).then(res => {
            res.body.tracks.items.map(tracks => {
                return {
                    
                }
            })
        })
    },[search, accesToken])

    return <Container className="d-flex flex-column py-2" style={{ height: "100vh" }}>
        <Form.Control
            type="search"
            placeholder='Search Song/artist'
            value={search}
            onChange={e => setSearch(e.target.value)} />
        <div className="flex-grow-1 my-2" style={{ overflowY: "auto" }}>Songs</div>
        <div>Bottom</div>
  </Container>
  
}
