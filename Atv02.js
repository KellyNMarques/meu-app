import React, { useState } from "react";
import { Link } from "react-router-dom";
import homemImg from './imagem/homem.jpeg'; 
import mulherImg from './imagem/muher.jpeg'; 

function Atv02() {
    // Definindo os estados para contagem
    const [homens, setHomens] = useState(0);
    const [mulheres, setMulheres] = useState(0);
    const total = homens + mulheres;

    // Funções para incrementar e decrementar
    const incrementarHomens = () => setHomens(homens + 1);
    const decrementarHomens = () => homens > 0 && setHomens(homens - 1);
    
    const incrementarMulheres = () => setMulheres(mulheres + 1);
    const decrementarMulheres = () => mulheres > 0 && setMulheres(mulheres - 1);

    // Função de reset
    const resetarContagem = () => {
        setHomens(0);
        setMulheres(0);
    };

    return (
        <>
            <h1>Atividade 02</h1>
            
            {/* Contador de Pessoas */}
            <div style={styles.container}>
                <h2>Total: {total}</h2>
                <button onClick={resetarContagem} style={styles.resetButton}>Resetar</button>

                <div style={styles.row}>
                    <div style={styles.section}>
                        <img src={homemImg} alt="Homem" style={styles.image} />
                        <h3>Homens: {homens}</h3>
                        <button onClick={incrementarHomens} style={styles.button}>+</button>
                        <button onClick={decrementarHomens} style={styles.button}>-</button>
                    </div>

                    <div style={styles.section}>
                        <img src={mulherImg} alt="Mulher" style={styles.image} />
                        <h3>Mulheres: {mulheres}</h3>
                        <button onClick={incrementarMulheres} style={styles.button}>+</button>
                        <button onClick={decrementarMulheres} style={styles.button}>-</button>
                    </div>
                </div>
            </div>

            <Link to="/">Voltar</Link>
        </>
    );
}

// Estilos simples em objeto para usar inline no JSX
const styles = {
    container: {
        textAlign: 'center',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '2px 2px 12px rgba(0,0,0,0.1)'
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px', // Espaçamento entre as imagens
    },
    section: {
        textAlign: 'center'
    },
    button: {
        margin: '0 5px',
        padding: '5px 10px',
        fontSize: '16px'
    },
    resetButton: {
        marginBottom: '15px',
        padding: '5px 10px',
        fontSize: '16px',
        backgroundColor: '#f44336',
        color: '#fff',
        border: 'none',
        borderRadius: '5px'
    },
    image: {
        width: '100px', // Ajuste o tamanho da imagem conforme necessário
        height: '100px',
    }
};

export default Atv02;

