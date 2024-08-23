import io from 'socket.io-client';

const socket = io('https://pf-henry-trabajofinal.vercel.app/', {
  withCredentials: true, // Esto permite el uso de cookies de sesión si es necesario
});;


export default socket;