import axios from "axios";
import MovieCard from "components/moviecards";
//import MovieScore from "components/moviescore";
//import MovieStars from "components/moviestars";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";

function Listing() {
  
    const [pagenumber,setPageNumber] = useState(0);
    const[page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 0,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pagenumber}`)
    .then(response =>{
       const data = response.data as MoviePage;
    //   console.log(data);
    //   setPageNumber(data.number);
    setPage(data);
      });
    }, [pagenumber]);

    
  
    return (
     <>
        <Pagination />
            <div className="container">
                <div className="row">
                    {page.content.map(movie => (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard movie={movie} />
                    </div> 
                    ))}     
                </div>
            </div>
     </>
    );
}

export default Listing;