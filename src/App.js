import './App.css';
import React, { useState, useEffect } from 'react';
import comentarios from './comentarios.json';
import { motion } from 'framer-motion';

function App() {
    const [commentIndex, setCommentIndex] = useState(0);
    const currentComment = comentarios[commentIndex];

    useEffect(() => {
        const commentInterval = setInterval(() => {
            setCommentIndex((prevIndex) => (prevIndex + 1) % comentarios.length);
        }, 2500);

        return () => {
            clearInterval(commentInterval);
        };
    }, []);

    return (
        <div className="App">
            <h1 id="textoPrincipal">Discapacidad auditiva en espacios laborales costarricenses</h1>
            <div className="App-main">
                <motion.div
                    key={currentComment.name} // Utiliza el nombre del comentario como clave
                    className="comment-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2>{currentComment.name}</h2>
                    <p>{currentComment.comment}</p>
                </motion.div>
            </div>
        </div>
    );
}

export default App;
