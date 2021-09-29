import { useState } from 'react';

const ObjectStatus = () => {
    const [counters, setCounters] = useState({
        left: 0,
        rigth: 0,
	    message: 'Esto es un mensaje en el estado'
    });
    
    const WarningNoUsed = () => {
	return <h1>No se ha iniciado el contador</h1>
    }

    const ListOfClicks = ({clicks}) => {
	return <p>{clicks.join(', ')}</p>
    }

    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        setCounters({
		...counters,
            left: counters.left + 1
        });
	setClicks((prevClicks) => [...prevClicks, "L"]);
    };

    const handleClickRigth = () => {
        setCounters({
		...counters,	
            rigth: counters.rigth + 1
        });
	setClicks((prevClicks) => [...prevClicks, "R"]);
    };

    return (
        <div>
        {counters.left}
        <button onClick={handleClickLeft}>Left</button>
        <button onClick={handleClickRigth}>Rigth</button>
        {counters.rigth}
	<p>{clicks.length}</p>
	<p>{counters.message}</p>
	{clicks.length === 0 ? (
	    <WarningNoUsed />
	) : (
	    <ListOfClicks clicks={clicks} />
	)
	}
        </div>
    )
}

export default ObjectStatus;
