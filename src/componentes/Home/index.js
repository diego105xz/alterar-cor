import './style.css';
import { useState } from 'react';


function Home(){

    const [ novaCor, setNovaCor ] = useState('red');

    function Alterar(){
        if(novaCor === 'red'){
            setNovaCor('blue');
        }else{
            setNovaCor('red')
        }

    }

    return(
        <div className='home'>
            <h1>Alterando Cor do Elemento</h1>
            <div className={novaCor}></div>
            <p>Clique no botão para alterar o estilo  do Elemento acima.</p>
            <button onClick={Alterar}>Alterar Cor</button>
        </div>
    );
}

export default Home;