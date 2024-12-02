// Import the Axios library for making HTTP requests
import axios from 'axios'

// Define the base URL for the backend API
const backEnd = 'https://comp1842-server.onrender.com/vocabs/'

// Define functions to interact with the backend API using CRUD operations

// Retrieve all vocabulary records from the API
export const ViewAllVocabs = async () => {
   try {
      // Send a GET request to the backend
      let response = await axios.get(backEnd)
      // Return the response data
      return response.data
   } catch (err) {
      // Log an error if the request fails
      console.error(err)
   }
}

// Delete a specific vocabulary record by its ID
export const DeleteVocab = async (id) => {
   try {
      // Send a DELETE request to the backend with the given ID
      let response = await axios.delete(backEnd + id)
      // Return the response data
      return response.data
   } catch (err) {
      // Log an error if the request fails
      console.error(err)
   }
}

// Delete all vocabulary records from the database
export const DeleteAllVocabs = async () => {
   try {
      // Send a DELETE request to the base URL
      let response = await axios.delete(backEnd)
      // Return the response data
      return response.data
   } catch (err) {
      // Log an error if the request fails
      console.error(err)
   }
}

// Retrieve a specific vocabulary record by its ID
export const ViewVocab = async (id) => {
   try {
      // Send a GET request to the backend with the given ID
      let response = await axios.get(backEnd + id)
      // Return the response data
      return response.data
   } catch (err) {
      // Log an error if the request fails
      console.error(err)
   }
}

// Add a new vocabulary record to the database
export const AddVocab = async (word) => {
   try {
      // Send a POST request to the backend with the word data
      let response = await axios.post(backEnd, word)
      // Return the response data
      return response.data
   } catch (err) {
      // Log an error if the request fails
      console.error(err)
   }
}

// Edit an existing vocabulary record by its ID
export const EditVocab = async (id, word) => {
   try {
      // Send a PUT request to the backend with the ID and updated word data
      let response = await axios.put(backEnd + id, word)
      // Return the response data
      return response.data
   } catch (err) {
      // Log an error if the request fails
      console.error(err)
   }
}
