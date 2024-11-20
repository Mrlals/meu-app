import React from 'react';
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
        <div>
        <section>
            <h2>1. Gallery Component</h2>
            <Gallery />
        </section>

        <section>
            <h2>2. Profile Component</h2>
            <Profile />
        </section>

        <section>
            <h2>3. PackingList Component</h2>
            <PackingList />
        </section>

        <section>
            <h2>4. Chemists List Component</h2>
            <Chemists />
        </section>

        <section>
            <h2>5. Double Component</h2>
            <Double number={2} />
            <Double number={4} />
        </section>
        </div>

        <Link to="/">Voltar</Link>
    </>
  );
}

export default Atv04;