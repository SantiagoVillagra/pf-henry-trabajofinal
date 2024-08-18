import React from 'react';
import { DataTable, Column } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
// Asegúrate de tener una lista de pedidos en el lugar correcto
import mockOrders from '../../../mockDB/mockOrders';

const Orders = () => {
 
  const getStatusEnvioText = (status) => {
    switch (status) {
      case 1: return 'Pendiente';
      case 2: return 'En Proceso';
      case 3: return 'Enviado';
      default: return 'Desconocido';
    }
  };

  return (
    <div>
      <Tooltip target=".view-details-button" />
      <DataTable value={mockOrders} paginator rows={10} rowsPerPageOptions={[10, 20, 50]}>
        <Column field="fecha" header="Fecha" body={(rowData) => new Date(rowData.fecha).toLocaleDateString()} />
        <Column field="statuspago" header="Estado de Pago" />
        <Column field="statusenvio" header="Estado de Envío" body={(rowData) => getStatusEnvioText(rowData.statusenvio)} />
        <Column field="total" header="Total" body={(rowData) => `$${rowData.total.toLocaleString()}`} />
        <Column header="Detalles" body={(rowData) => (
          <Button 
            label="Ver Detalles" 
            className="view-details-button" 
            icon="pi pi-info-circle"
            onClick={() => alert(`Detalles de la orden:\n${JSON.stringify(rowData, null, 2)}`)} 
          />
        )} />
      </DataTable>
    </div>
  );
};

export default Orders;