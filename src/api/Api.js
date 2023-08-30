import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

export async function createRoom(user) {
  try {
      const response = await axios.get(`${API_BASE_URL}/create-room`, {
        params: { 
          owner: user,
         }
      });
      return response.data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
}

export async function joinRoom(user, room){
  try {
    const response = await axios.get(`${API_BASE_URL}/join-room`, {
      params: { 
        user: user,
        room: room,
       }
    });
    return response.data;
  } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
  }
}

export async function getRoom(room){
  try {
    const response = await axios.get(`${API_BASE_URL}/get-room`,{
      params: {
        room: room
      }
    });
    return response.data;
  } catch (error){
      console.error('Error fetching data:', error);
      throw error;
  }
}

export async function sendMessage(userId, room, text){
  try {
    await axios.post(`${API_BASE_URL}/send-message`,{
      params: {
        userId: userId,
        room: room,
        text: text,
      }
    });
  } catch (error){
      console.error('Error fetching data:', error);
      throw error;
  }
}
