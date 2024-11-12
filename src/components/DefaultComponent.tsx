import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import { useNavigate } from 'react-router-dom';

function DefaultComponent() {

    const [count, setCount] = useState(0)

    const navigate = useNavigate();

    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => navigate('/mfe-1/redux')}>nav to page 2 absolute</button>
                <button onClick={() => navigate('./redux')}>nav to page 2 relative</button>
                <button onClick={() => navigate('/')}>nav to home</button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default DefaultComponent;