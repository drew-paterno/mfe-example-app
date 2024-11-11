import { useNavigate } from 'react-router-dom';

function Page2() {

    const navigate = useNavigate();

    return (
        <>
            <div>page 2</div>
            <button onClick={() => navigate('/aco')}>nav to default page</button>
        </>
    )

}

export default Page2;