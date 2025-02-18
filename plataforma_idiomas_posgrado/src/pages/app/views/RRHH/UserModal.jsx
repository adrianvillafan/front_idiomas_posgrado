//src/pages/app/views/RRHH/UserModal.jsx

import React from 'react';
import { Modal, Input, SpaceBetween, Box, Button } from '@cloudscape-design/components';

const UserModal = ({ visible, onDismiss, onSave, user, onChange, isEdit }) => {
    //console.log("UserModal.jsx - user: ", user);

    return (
        <Modal
        visible={visible}
        onDismiss={onDismiss}
        header={isEdit ? "Editar Usuario" : "Agregar Usuario"}
        footer={
            <SpaceBetween direction="horizontal" size="xs">
            <Button variant="link" onClick={onDismiss}>Cancelar</Button>
            <Button variant="primary" onClick={onSave}>{isEdit ? "Guardar" : "Agregar"}</Button>
            </SpaceBetween>
        }
        >
        <Box>
            <Input name="dni" placeholder="DNI" value={user.dni} onChange={onChange} />
            <Input name="apellidopaterno" placeholder="A. Paterno" value={user.apellidopaterno} onChange={onChange} />
            <Input name="apellidomaterno" placeholder="A. Materno" value={user.apellidomaterno} onChange={onChange} />
            <Input name="nombre" placeholder="Nombres" value={user.nombre} onChange={onChange} />
            <Input name="correo" placeholder="Correo" value={user.correo} onChange={onChange} />
            <Input name="teléfono" placeholder="Teléfono" value={user.teléfono} onChange={onChange} />
            <Input name="contraseña" placeholder="Contraseña" value={user.contraseña} onChange={onChange} />
        </Box>
        </Modal>
    );
};

export default UserModal;