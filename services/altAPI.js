import { commonAPI } from "./commonAPI";
import { server_url } from "./server_url";


// upload(add) video API

export const uploadVideoAPI = async(video) => {
    return await commonAPI ("POST",`${server_url}/allVideos`,video)
}

// getAllUploaded videos API

export const getAllVideosAPI = async () => {
    return await commonAPI ("GET",`${server_url}/allVideos`,"")
}

// getSingle Video API

export const getSingleVideoAPI = async (id) => {
    return await commonAPI ("GET",`${server_url}/allVideos/${id}`,"")
}

// delete Video API

export const deleteVideoAPI = async (id) => {
    return await commonAPI ("DELETE",`${server_url}/allVideos/${id}`,{})
}


// add Video History

export const addVideoHistoryAPI = async (video) => {
    return await commonAPI ("POST",`${server_url}/history`,video)
}

// get Video History

export const getVideoHistoryAPI = async () => {
    return await commonAPI("GET",`${server_url}/history`,"")
}

// delete Video History

export const deleteVideoHistoryAPI = async (id) => {
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}


// update Category 

export const updateCategoryAPI = async (id,categoryDetails) => {
    return await commonAPI("PUT",`${server_url}/category/${id}`,categoryDetails)
}





// add category API

export const addCategoryAPI = async (category) => {
    return await commonAPI ("POST",`${server_url}/category`,category)
}


// get category API

export const getCategoryAPI = async () => {
    return await commonAPI ("GET",`${server_url}/category`,"")
}


// delete category API

export const deleteCategoryAPI = async (id) => {
    return await commonAPI ("DELETE",`${server_url}/category/${id}`,{})
}