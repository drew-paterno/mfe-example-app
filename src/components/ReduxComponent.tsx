import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/store';
import { decrement, increment } from '../store/counterSlice';
import { useDispatch } from 'react-redux';

function ReduxComponent() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const counterVal = useAppSelector(state => state.counter.value);

    return (
        <>
            <div onClick={() => navigate('/')}>redux</div>
            <div>{counterVal}</div>
            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </>
    )

}

export default ReduxComponent;