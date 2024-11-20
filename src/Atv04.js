import Gallery from './Gallery';
import Profile from './Profile';
import PackingList from './PackingList';
import Chemists from './Chemists';
import Double from './Double';
import { Link } from "react-router-dom";

function Atv04() {
    return (
    <>
        <h2>Atividade 04</h2>
        <>
            <h3>1. Gallery Component</h3>
            <Gallery />

            <h3>2. Profile Component</h3>
            <Profile />

            <h3>3. PackingList Component</h3>
            <PackingList />

            <h3>4. Chemists List Component</h3>
            <Chemists />

            <h3>5. Double Component</h3>
            <Double number={2} />
            <Double number={4} />
        </>

        <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv04;