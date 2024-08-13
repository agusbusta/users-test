import React, { useState } from 'react';
import './Form.css';

const Form = () => {
    const [rut, setRut] = useState('');
    const [razonSocial, setRazonSocial] = useState('');
    const [serie, setSerie] = useState('');
    const [modelo, setModelo] = useState('');
    const [marca, setMarca] = useState('');
    const [categoria, setCategoria] = useState('');
    const [contador, setContador] = useState('');
    const [falla, setFalla] = useState('');
    const [inventario, setInventario] = useState(false);
    const [observacion, setObservacion] = useState('');
    const [monto, setMonto] = useState('15000');
    const [abono, setAbono] = useState('');
    const [formaPago, setFormaPago] = useState('');
    const [tipoDocumento, setTipoDocumento] = useState('boleta');
    const [documentoVenta, setDocumentoVenta] = useState('');
    const [comentario, setComentario] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            rut, razonSocial, serie, modelo, marca, categoria, contador,
            falla, inventario, observacion, monto, abono, formaPago,
            tipoDocumento, documentoVenta, comentario
        });
    };

    return (
        <form className="service-form" onSubmit={handleSubmit}>
            <h2>Ingresar Servicio</h2>

            <div className="form-row">
                <div className="form-group">
                    <label>RUT *</label>
                    <input type="text" value={rut} onChange={(e) => setRut(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Razón social *</label>
                    <input type="text" value={razonSocial} onChange={(e) => setRazonSocial(e.target.value)} />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Nº serie *</label>
                    <input type="text" value={serie} onChange={(e) => setSerie(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Modelo *</label>
                    <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Marca *</label>
                    <select value={marca} onChange={(e) => setMarca(e.target.value)}>
                        <option value="">Seleccione...</option>
                        <option value="marca1">Marca 1</option>
                        <option value="marca2">Marca 2</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Categoría *</label>
                    <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                        <option value="">Seleccione...</option>
                        <option value="categoria1">Categoría 1</option>
                        <option value="categoria2">Categoría 2</option>
                    </select>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Contador</label>
                    <input type="number" value={contador} onChange={(e) => setContador(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Descripción de Falla</label>
                    <textarea value={falla} onChange={(e) => setFalla(e.target.value)}></textarea>
                </div>
                <div className="form-group checkbox-group">
                    <label>
                        <input type="checkbox" checked={inventario} onChange={(e) => setInventario(e.target.checked)} />
                        Inventario
                    </label>
                    <input type="text" disabled={!inventario} placeholder="Agregue inventario" />
                </div>
                <div className="form-group">
                    <label>Observación</label>
                    <textarea value={observacion} onChange={(e) => setObservacion(e.target.value)}></textarea>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Monto</label>
                    <input type="text" value={monto} onChange={(e) => setMonto(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Abono</label>
                    <input type="text" value={abono} onChange={(e) => setAbono(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Forma pago</label>
                    <select value={formaPago} onChange={(e) => setFormaPago(e.target.value)}>
                        <option value="">Seleccione...</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta</option>
                    </select>
                </div>
                <div className="form-group radio-group">
                    <label>Tipo Documento</label>
                    <div>
                        <label>
                            <input type="radio" value="boleta" checked={tipoDocumento === 'boleta'} onChange={() => setTipoDocumento('boleta')} />
                            Boleta
                        </label>
                        <label>
                            <input type="radio" value="factura" checked={tipoDocumento === 'factura'} onChange={() => setTipoDocumento('factura')} />
                            Factura
                        </label>
                    </div>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Documento venta</label>
                    <input type="text" value={documentoVenta} onChange={(e) => setDocumentoVenta(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Comentario (Pre-aprobación ppto)</label>
                    <textarea value={comentario} onChange={(e) => setComentario(e.target.value)}></textarea>
                </div>
            </div>

            <button type="submit" className="btn-save">Guardar</button>
        </form>
    );
};

export default Form;
