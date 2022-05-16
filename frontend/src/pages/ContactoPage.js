import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props)=> {

    const intialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }
    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(intialForm);
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]:value
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(intialForm)
        }
    }

    return(
        <main className='main'>
            <div className="flex-form">
                <form className="form" method='post' action='/contacto' onSubmit={handleSubmit}>
                    <h3 className='form__title'>Contacto</h3>
                    <div className="form__section">
                        <input type="text" className="form__input" placeholder="Nombre" name='nombre' value={formData.nombre} onChange={handleChange}/>
                    </div>
                    <div className="form__section">
                        <input type="email" className="form__input" placeholder="Email" name='email' value={formData.email} onChange={handleChange}/>
                    </div>
                    <div className="form__section">
                        <input type="text" className="form__input" placeholder="Numero de Telefono" name='telefono' value={formData.telefono} onChange={handleChange}/>
                    </div>
                    <div className="form__section">
                        <textarea className="form__input" placeholder="Comentario" name='mensaje' value={formData.mensaje} onChange={handleChange}></textarea>
                    </div>
                    <input type="submit" className="forn__input forn__botton"/>
                </form>
                { sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p>: null}
            </div>
        </main>
    );
}

export default ContactoPage;