import data from '../data/data'

export default function getLocationById(){
    let url = document.location.href;
    let id_url = url.substring (url.lastIndexOf( "/" )+1 );
    const foundLocationById = data.find(el => el.id === id_url)
    return foundLocationById
}