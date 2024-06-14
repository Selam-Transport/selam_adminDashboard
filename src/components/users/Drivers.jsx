import React, { useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Input,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';

const mockDriverData = [
  {
    driverId: 'DRIVER001',
    name: 'Abebe',
    licenseNumber: 'DL123456789',
    contactNumber: '+251987654321',
    vehicleNumber: 'ET2341',
  },
  {
    driverId: 'DRIVER002',
    name: 'Kebede',
    licenseNumber: 'DL987654321',
    contactNumber: '+251976543210',
    vehicleNumber: 'ET2342',
  },
  {
    driverId: 'DRIVER003',
    name: 'Ayele',
    licenseNumber: 'DL456789123',
    contactNumber: '+251965432109',
    vehicleNumber: 'ET2343',
  },
  {
    driverId: 'DRIVER004',
    name: 'Meles',
    licenseNumber: 'DL321654987',
    contactNumber: '+251954321098',
    vehicleNumber: 'ET2344',
  },
];

const Drivers = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = mockDriverData.filter(
    (data) =>
      data.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.licenseNumber.includes(searchTerm) ||
      data.contactNumber.includes(searchTerm) ||
      data.vehicleNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Driver Management</h1>
      <div className="mt-4">
        <div className="bg-white shadow-md rounded p-4">
          <InputGroup mb={4}>
            <Input
              placeholder="Search driver by name, license number, contact number, or vehicle number"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <InputRightElement>
              <CiSearch color="gray" />
            </InputRightElement>
          </InputGroup>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>Driver Management Information</TableCaption>
              <Thead>
                <Tr>
                  <Th>Driver ID</Th>
                  <Th>Name</Th>
                  <Th>License Number</Th>
                  <Th>Contact Number</Th>
                  <Th>Vehicle Number</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredData.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.driverId}</Td>
                    <Td>{data.name}</Td>
                    <Td>{data.licenseNumber}</Td>
                    <Td>{data.contactNumber}</Td>
                    <Td>{data.vehicleNumber}</Td>
                  </Tr>
                ))}
              </Tbody>
              {/* Optional footer with an example */}
              <Tfoot>
                <Tr>
                  <Td>DRIVER005</Td>
                  <Td>Example Name</Td>
                  <Td>DL000000000</Td>
                  <Td>+251000000000</Td>
                  <Td>ET2345</Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Drivers;
