export default function IndexedCard(props){

    const {number, setStage, finished, setFinished, result}= props

    function handleClick(){
        setStage(2)
        setFinished(finished+1)
    }

    return(
        <>
        <div className={result}>
            <div className='Card-stage1'>
                <p className='Question-stage1'> Pergunta {number}</p>
                <ion-icon className="Arrow" name="play-outline" onClick={handleClick}></ion-icon>
            </div>
        </div>
        </>
        
    )   
}

