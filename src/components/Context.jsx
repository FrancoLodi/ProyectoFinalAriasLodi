import { createContext, useContext, useState } from "react";
import { initializeApp} from "firebase/app";
import { collection, getFirestore, getDocs, addDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const firebaseConfig = {
    apiKey: "AIzaSyBA7XPsHGCBuh8Zpu3BDYyH13q-ODkDGsU",
    authDomain: "react-flex-franco.firebaseapp.com",
    projectId: "react-flex-franco",
    storageBucket: "react-flex-franco.appspot.com",
    messagingSenderId: "1080438268844",
    appId: "1:1080438268844:web:821137bd9f273eecfad009"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, "productos");
const ordersCollection = collection(db, "ordenes");

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {
    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);

    function cargarData() {

        getDocs(productsCollection).then(snapshot => {
            let arrayProductos = snapshot.docs.map(el => el.data());
            setProductos(arrayProductos); 
        }).catch(err => console.error(err));

    };

    function agregarAlCarrito(id) {
        const producto = productos.find(p => p.id === id);
        if (producto) {
            setCarrito(carritoAuxiliar => {
                const existe = carritoAuxiliar.find(p => p.id === id);
                if (existe) {
                    const nuevoCarrito = carritoAuxiliar.map(p =>
                        p.id === id ? { ...p, cantidad: (p.cantidad || 1) + 1 } : p
                    );
                    toast.success("Producto agregado al carrito");
                    return nuevoCarrito;
                } else {
                    const nuevoCarrito = [...carritoAuxiliar, { ...producto, cantidad: 1 }];
                    toast.success("Producto agregado al carrito");
                    return nuevoCarrito;
                }
            });
        }
    };

    function restarAlCarrito(id) {
        setCarrito(carritoAuxiliar => {
            const productoExistente = carritoAuxiliar.find(p => p.id === id);
    
            if (productoExistente) {
                if (productoExistente.cantidad > 1) {
                    return carritoAuxiliar.map(p =>
                        p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p
                    );
                } else {
                    return carritoAuxiliar.filter(p => p.id !== id);
                }
            }
            return carritoAuxiliar;
        });
    }

    function quitarDelCarrito (id) {
        setCarrito(carritoAuxiliar => carritoAuxiliar.filter(p => p.id !== id));
    };
    
    function limpiarCarrito () {
        setCarrito([]);
    };

    function crearOrden(formData, setCompraConfirmada, setOrderId) {
        if (carrito.length > 0) {
            const nuevaOrden = {
                ...formData,
                productos: carrito,
                fecha: new Date().toISOString(),
                total: carrito.reduce((acc, item) => acc + item.price * (item.cantidad || 1), 0)
            };
    
            addDoc(ordersCollection, nuevaOrden)
                .then(response => {
                    console.log("Orden creada con el id:" + response.id);
                    setCarrito([]);
                    setOrderId(response.id);
                    setCompraConfirmada(true);
                    toast.success("Compra realizada con éxito");
                })
                .catch(err => console.error(err));
        } else {
            console.log("Carrito vacío");
        }
    }
    


    return (
        <AppContext.Provider value={{productos, carrito, setCarrito, cargarData, agregarAlCarrito, crearOrden, quitarDelCarrito, limpiarCarrito, restarAlCarrito}}>
            {props.children}
        </AppContext.Provider>
    );
};