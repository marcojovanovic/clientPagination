import React, { useState, useEffect } from 'react';
import Follower from './Follower';
import './page.css';
import useFetch from './useFetch'



function PaginationFollowersApp() {
  
  const { followers, page, loading, setPage }=useFetch()

  function paginateLogic() {
    const itemsPerPage = 8;
    const pages = Math.ceil(followers.length / itemsPerPage);

    const newFollowers = Array.from({ length: pages }, (_, index) => {
      const start = index * itemsPerPage;

      return followers.slice(start, start + itemsPerPage);
    });

    return newFollowers;
  }

  let res = paginateLogic();

  const handlePagination = (index) => {
    setPage(index);
  };

  const handleNext = () => {
    setPage((prev) => {
      if (prev === res.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  const handlePrev = () => {
    setPage((prev) => {
      if (prev === 0) {
        return res.length - 1
      } else {
        return prev - 1;
      }
    });
  };

  return (
    <div className="container">
      {loading ? (
        <h2 className="loading"> LOADING ...</h2>
      ) : (
        <div>
          <h1 className="title">Pagination </h1>
          <span></span>
          <div className="pages-container">
            {res[page]?.map((item) => {
              return <Follower key={item.id} {...item} />;
            })}
          </div>
          <div className="btn-container">
            <button onClick={handlePrev} className="btn-move">
              Prev
            </button>
            {res?.map((item, index) => {
              return (
                <button
                  onClick={() => handlePagination(index)}
                  className={`basic-btn ${index === page ? 'active' : ''}`}
                >
                  {index + 1}
                </button>
              );
            })}

            <button onClick={handleNext} className="btn-move">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PaginationFollowersApp;
