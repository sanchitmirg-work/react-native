import { useState, useEffect } from 'react';

export default () => {
    const [results, setResults] = useState([])
    const [error, setError] = useState('')

    const searchApi = async(searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'San jose'
                }
            })
    
            setResults(response.data.businesses)
        }catch(e) {
            setError('Something went wrong')
        }
    }

    useEffect(() => searchApi('pasta'), [])

    return [results, searchApi, error];
}