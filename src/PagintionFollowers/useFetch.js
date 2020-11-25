import React,{useState, useEffect} from 'react'

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

function useFetch() {
  
  const [followers, setFollowers] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getFollowers();
  }, [page]);

  const getFollowers = async () => {
    setLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();

      setFollowers(data);
      setLoading(false);
    } catch (err) {
      setLoading(true);
      console.log(err);
    }

    
  };

  return {followers, page, loading, setPage}

}

export default useFetch
