import React from 'react';

const Contacto = () => {
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', padding: '20px', fontFamily: 'Arial, sans-serif'}}>
            <h1 style={{fontSize:'36px', marginBottom:'20px'}}>Quiénes Somos</h1>
            <p style={{fontSize:'18px', textAlign:'center', maxWidth:'600px'}}>
                Bienvenido a Pixi Tienda, tu destino favorito para ropa usada en San Salvador de Jujuy. 
                En Pixi Tienda, nos dedicamos a ofrecerte una selección única de prendas de alta calidad, 
                cuidadosamente elegidas para ti. Creemos en la moda sostenible y en dar una segunda vida 
                a las prendas, manteniendo al mismo tiempo un estilo fresco y moderno.
            </p>
            <h2 style={{fontSize:'28px', marginTop:'40px'}}>Dónde Encontrarnos</h2>
            <p style={{fontSize:'18px', textAlign:'center', maxWidth:'600px'}}>
                Puedes encontrarnos en las redes sociales para conocer nuestras últimas novedades y ofertas:
                <br />
                <a href="https://www.facebook.com/PixiTienda" target="_blank" rel="noopener noreferrer" style={{color: '#007bff', textDecoration: 'none'}}>Facebook: Pixi Tienda</a>
                <br />
                <a href="https://www.instagram.com/Pixi_feria" target="_blank" rel="noopener noreferrer" style={{color: '#007bff', textDecoration: 'none'}}>Instagram: @pixi_feria</a>
            </p>

            <img src="./src/assets/logo-negro.png" alt="Logo pixi negro" style={{width:'250px', marginTop:'20px'}}/>

        </div>
    );
};

export default Contacto;
