// import useCount from "../../store/useCount";
import { Link } from 'react-router-dom';
import UseCount from "../store/UseCount";

const Count = () => {
    const { count, increment, decrement, resetCount } = UseCount();
    return (
        <>
            {/* <button onClick={() => setCount(count + 1)}>Count is {count}</button> */}
            <Link to="/"><button>Back</button></Link><br />
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
            <button onClick={() => resetCount()}>Reset Count</button>
            <br />
            {count}
        </>
    )
}

export default Count;