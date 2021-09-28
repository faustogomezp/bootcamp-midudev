import { useState } from 'react';

const ObjectStatus = () => {
    const [counters, setCounters] = useState({
        left: 0,
        rigth: 0,
	    clicks: 0,
	    message: 'Esto es un mensaje en el estado'
    });

    const [clicks, setClicks] = useState([]);

    const handleClickLeft = () => {
        setCounters({
		...counters,
            left: counters.left + 1,
            clicks: counters.clicks + 1
        });
	setClicks((prevClicks) => [...prevClicks, "L"]);
    };

    const handleClickRigth = () => {
        setCounters({
		...counters,	
            rigth: counters.rigth + 1,
            clicks: counters.clicks + 1
        });
	setClicks((prevClicks) => [...prevClicks, "R"]);
    };

    return (
        <div>
        {counters.left}
        <button onClick={handleClickLeft}>Left</button>
        <button onClick={handleClickRigth}>Rigth</button>
        {counters.rigth}
	<p>{counters.clicks}</p>
	<p>{counters.message}</p>
	<p>{clicks.join(", ")}</p>
        </div>
    )
}

export default ObjectStatus;
