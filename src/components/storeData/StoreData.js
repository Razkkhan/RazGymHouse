const addToStorage = (props) =>{
    const information = {id: props, quantity: 1}
    const getLocalStorage = JSON.parse(localStorage.getItem('times'))
    if(getLocalStorage){
        const isExists = getLocalStorage.find(store => store.id === props.id)
        if(isExists){
            isExists.quantity = isExists.quantity + 1;
            localStorage.setItem('times',JSON.stringify(getLocalStorage))
        } else{
            localStorage.setItem('times', JSON.stringify([...getLocalStorage, information]))
        }
    }else{
        localStorage.setItem('times', JSON.stringify([information]))
    }

    
}
export {addToStorage}
