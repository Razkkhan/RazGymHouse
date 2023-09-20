const addToStorage = (min) =>{
    

localStorage.setItem('time', JSON.stringify(timeBreak))
}
const localStorageHandle =() =>{
    let timeBreak = {};
    const storeTime = localStorage.getItem('time')
    if(storeTime){
        timeBreak = JSON.parse(storeTime)
    }
    return timeBreak
}
export {addToStorage ,localStorageHandle }
