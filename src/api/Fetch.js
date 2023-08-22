import axios from 'axios';

export default async function CreateRoom(user){

    try {
    //     const response = await axios.get(`http://localhost:8080/create-room?owner=${user}`);
    //     console.log(response.data)
    //     return response.data;
        axios.get(`http://localhost:8080/create-room?owner=${user}`)
            .then((res) => {
                // console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    } catch (error){
        console.log(error)
    }
}
