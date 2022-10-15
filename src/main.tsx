import './main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';

const images = ['/pic1.jpg', '/pic2.jpg', '/pic3.jpg'];
function App() {
    return (
        <Carousel images={images} timing={4000} className="h-screen w-screen">
            <div className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <h1
                    className="text-white font-bold font-mono uppercase text-5xl"
                    style={{ textShadow: '0px 0px 1px rgb(0 0 0 / 20%), 0px 0px 1px rgb(1 0 5 / 10%)' }}>
                    I love simplicity
                </h1>
            </div>
        </Carousel>
    );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
