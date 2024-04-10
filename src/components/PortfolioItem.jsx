import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function PortfolioItem () {

    const params = useParams()
    // param passes an object with the key being the name of the param named in the main.jsx
    console.log(params)

    // Combine this with the GET request to be able to pull information from a database by using the id passed in via routing
    const [item, setItem] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3000/portfolios/${params.id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    return (
        <h1>{item.name}</h1>
    )
}

export default PortfolioItem