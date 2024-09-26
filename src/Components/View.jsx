import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI, getCategoryAPI, updateCategoryAPI } from '../../services/altAPI'


function View({uploadVideoResponse,setDropVideoResponse}) {

  const [allVideos,setAllVideos] = useState([]);

  const [deleteVideoResponse,setdeleteVideoResponse] = useState(false);

  // Calling getUploadedVideos() while loading the page
  useEffect(()=>{
    getUploadedVideos();
    setdeleteVideoResponse(false);
  },[uploadVideoResponse,deleteVideoResponse])


  // Function to get all videos from the server
  const getUploadedVideos = async () =>{
    const result = await getAllVideosAPI();
    console.log(result);
    if(result.status==200){
      setAllVideos(result.data);
    }

    else{
      setAllVideos([]);
      console.log("API Failed");
    }
  }

  // console.log(allVideos);
  

  
  //Dropping video from category

  const videoDaggedOver = (e) => {
    e.preventDefault();
  }

  const videoDropped = async(e) => {

      const { videoID, categoryID } = JSON.parse(e.dataTransfer.getData("data"));
      // console.log(videoID,categoryID);

      const {data} = await getCategoryAPI()
      const selectedFromCategory = data.find(item=>item.id == categoryID)
      // console.log(selectedFromCategory);

      let result = selectedFromCategory.allVideos.filter(video=>video.id!==videoID)
      // console.log(result);

      let {id,categoryName} = selectedFromCategory;
      let newCategory = {id,categoryName,allVideos:result}
      // console.log(newCategory);

      const res = await updateCategoryAPI(categoryID,newCategory);
      setDropVideoResponse(res);
      
  }

  return (
    <>
      <Row droppable="true" onDragOver={e=>videoDaggedOver(e)} onDrop={e => videoDropped(e)}>
        {
          allVideos?.length>0?allVideos.map(video => (
            <Col sm={12} md={4} lg={4} xl={3}>
            <VideoCard video={video} setdeleteVideoResponse={setdeleteVideoResponse}/>
            </Col>
          )):<p>Nothing to display</p>
        }
      </Row>
    </>
  )
}

export default View
