import React, { useState, useEffect } from 'react';
import { Table, Button, SpaceBetween, Box, Container, Header, Select, Spinner, Alert } from '@cloudscape-design/components';
import { getUsersByRole, createUser, changeUserPassword, changeUserSecret, getUserEncryptedPassword } from '../../../../apis/services/rrhhService';
import { getUserData } from '../../hooks/session';
import UserModal from './UserModal';
import PasswordModal from './PasswordModal';

const RRHHTable = () => {
  const loggedInUser = getUserData();
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState({ label: 'Coordinador', value: 1 });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [newUser, setNewUser] = useState({
    dni: '',
    apellidopaterno: '',
    apellidomaterno: '',
    nombre: '',
    correo: '',
    teléfono: '',
    contraseña: ''
  });

  const roles = [
    { label: 'Coordinador', value: 1 },
    { label: 'Docente', value: 2 },
    { label: 'Secretaria', value: 3 },
    { label: 'Programador', value: 4 },
    { label: 'Asesor', value: 5 },
    { label: 'Asistente', value: 6 },
    { label: 'Estudiante', value: 7 }
  ];

  useEffect(() => {
    fetchUsers(selectedRole.value);
  }, [selectedRole]);

  const fetchUsers = async (roleId) => {
    setLoading(true);
    setError('');
    try {
      const data = await getUsersByRole(roleId);
      setUsers(data);
    } catch (error) {
      setError(error.response?.data?.message || error.message || 'Error fetching users.');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async () => {
    try {
      await createUser(newUser);
      fetchUsers(selectedRole.value);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleEditUser = async () => {
    try {
      await changeUserPassword(selectedUser.id, selectedUser.contraseña);
      await changeUserSecret(selectedUser.id);
      fetchUsers(selectedRole.value);
      setIsEditModalOpen(false);
    } catch (error) {
      console.error('Error editing user:', error);
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleOpenEditModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleOpenPasswordModal = (user) => {
    setSelectedUser(user);
    setIsPasswordModalOpen(true);
  };

  const handleClosePasswordModal = () => {
    setIsPasswordModalOpen(false);
  };

  const handleFetchPassword = async (userCode) => {
    try {
      const data = await getUserEncryptedPassword(selectedUser.id, userCode);
      return data.password;
    } catch (error) {
      console.error('Error fetching password:', error);
      throw error;
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  const handleRoleChange = ({ detail }) => {
    setSelectedRole(detail.selectedOption);
  };

  const filteredRoles = roles.filter(role => role.value >= loggedInUser.role_id);

  return (
    <Container header={<Header variant="h1">Gestión de RR. HH.</Header>}>
      <SpaceBetween direction="vertical" size="l">
        <Select
          selectedOption={selectedRole}
          onChange={handleRoleChange}
          options={filteredRoles}
          placeholder="Seleccione un rol"
        />
        <Button variant="primary" onClick={handleOpenModal}>Agregar Usuario</Button>
        <Table
          variant="embedded"
          columnDefinitions={[
            { id: 'id', header: 'ID', cell: e => e.id },
            { id: 'dni', header: 'DNI', cell: e => e.dni },
            { id: 'apellidopaterno', header: 'A. Paterno', cell: e => e.apellidopaterno },
            { id: 'apellidomaterno', header: 'A. Materno', cell: e => e.apellidomaterno },
            { id: 'nombre', header: 'Nombres', cell: e => e.nombre },
            { id: 'correo', header: 'Correo', cell: e => e.correo },
            { id: 'teléfono', header: 'Teléfono', cell: e => e.teléfono },
            {
              id: 'actions',
              header: 'Acciones',
              cell: e => (
                <>
                  <Button variant="link" onClick={() => handleOpenEditModal(e)}>Editar</Button>
                  <Button variant="link" onClick={() => handleOpenPasswordModal(e)}>Mostrar Contraseña</Button>
                </>
              )
            }
          ]}
          items={users}
          loading={loading}
          loadingText="Cargando recursos"
          empty={
            <Box
              margin={{ vertical: "xs" }}
              textAlign="center"
              color="inherit"
            >
              <SpaceBetween size="m">
                <b>{error || 'Ocurrió un error'}</b>
              </SpaceBetween>
            </Box>
          }
        />

        <UserModal
          visible={isModalOpen}
          onDismiss={handleCloseModal}
          onSave={handleAddUser}
          user={newUser}
          onChange={handleInputChange}
          isEdit={false}
        />

        <UserModal
          visible={isEditModalOpen}
          onDismiss={handleCloseEditModal}
          onSave={handleEditUser}
          user={selectedUser}
          onChange={handleEditInputChange}
          isEdit={true}
        />

        <PasswordModal
          visible={isPasswordModalOpen}
          onDismiss={handleClosePasswordModal}
          onFetchPassword={handleFetchPassword}
        />
      </SpaceBetween>
    </Container>
  );
};

export default RRHHTable;