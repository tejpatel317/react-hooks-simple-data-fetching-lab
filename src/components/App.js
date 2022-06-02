import React, {useState, useEffect} from "react"


function App () {

    const [dogData, setDogData] = useState([])
    const [showData, setShowData] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((d) => {
            setDogData(d.message)
            setShowData(true)
        })
    }, [])


    console.log(dogData)
    if (showData) {
        return (
            <img src={dogData} alt={"A Random Dog"}/>
        )
    }
    else {
        return (
            <p>`Loading...`</p>
        )
    }
    
}

export default App