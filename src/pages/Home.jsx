import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import Category from '../Components/Category'
import { Link } from 'react-router-dom'


function Home() {

  const [uploadVideoResponse,setUploadVideoResponse] = useState({});
  
  const [dropVideoResponse,setDropVideoResponse] = useState({});

  return (
    <>

    {/* << space for upload video button(add component) and watch history button(watchHistory page) */}
    <div className="container mt-5 mb-5 d-flex justify-content-between">
      
      <div className="add-videos">
        <Add setUploadVideoResponse={setUploadVideoResponse}/>
      </div>

      <Link to={'/watch-history'} style={{textDecoration:'none',color:'blueviolet',fontSize:'30px'}} className='mt-2'>
      Watch-History<i class="fa-regular fa-file fa-beat ms-1"></i>
      </Link>
    
    </div>
    {/*  space for upload video button and watch history button >> */}


    {/* << space for view component and category component */}
    <div className="container-fluid d-flex w-100 mt-5 mb-5">

      <div className="all-videos col-lg-9">
        <h2 className='mt-4 ms-2'>All Videos</h2>
        <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse}/>
      </div>


      <div className="all-videos col-lg-9 mt-5">
        <Category dropVideoResponse={dropVideoResponse}/>
      </div>

    </div>
    {/* space for view component and category component >> */}

    </>
  )
}

export default Home