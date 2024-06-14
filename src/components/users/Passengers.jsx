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

const mockData = [
  {
    email: 'user2@gmail.com',
    phone: '+251964378356',
    bookingStatus: 'unpaid',
    ticketStatus: 'Upcoming',
    route: 'AA - Adama',
    paymentStatus: 'paid',
    seatNumber: '25A',
    bookingDate: '2023-12-21',
  },
  {
    email: 'user3@gmail.com',
    phone: '+251984977216',
    bookingStatus: 'paid',
    ticketStatus: 'Cancelled',
    route: 'AA - Adama',
    paymentStatus: 'completed',
    seatNumber: '12B',
    bookingDate: '2023-12-22',
  },
  {
    email: 'user4@gmail.com',
    phone: '+251964377216',
    bookingStatus: 'unpaid',
    ticketStatus: 'Upcoming',
    route: 'AA - Shone',
    paymentStatus: 'paid',
    seatNumber: '30C',
    bookingDate: '2023-12-23',
  },
  {
    email: 'user1@gmail.com',
    phone: '+251964377216',
    bookingStatus: 'paid',
    ticketStatus: 'Completed',
    route: 'AA - Adama',
    paymentStatus: 'pending',
    seatNumber: '15D',
    bookingDate: '2023-12-20',
  },
];

function Passengers() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = mockData.filter(
    (data) =>
      data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.phone.includes(searchTerm)
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Passengers</h1>
      <div className="mt-4">
        <div className="bg-white shadow-md rounded p-4">
          <InputGroup mb={4}>
            <Input
              placeholder="Search passenger by phone number or email"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <InputRightElement>
              <CiSearch color="gray" />
            </InputRightElement>
          </InputGroup>
          <TableContainer>
            <Table variant="simple">
              <TableCaption>User Management Information</TableCaption>
              <Thead>
                <Tr>
                  <Th>Email</Th>
                  <Th>Phone number</Th>
                  <Th>Booking Status</Th>
                  <Th>Ticket Status</Th>
                  <Th>Route</Th>
                  <Th>Payment Status</Th>
                  <Th>Seat Number</Th>
                  <Th>Booking Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                {filteredData.map((data, index) => (
                  <Tr key={index}>
                    <Td>{data.email}</Td>
                    <Td>{data.phone}</Td>
                    <Td>{data.bookingStatus}</Td>
                    <Td>{data.ticketStatus}</Td>
                    <Td>{data.route}</Td>
                    <Td>{data.paymentStatus}</Td>
                    <Td>{data.seatNumber}</Td>
                    <Td>{data.bookingDate}</Td>
                  </Tr>
                ))}
              </Tbody>
              {/* Optional footer with an example */}
              <Tfoot>
                <Tr>
                  <Td>footer@example.com</Td>
                  <Td>+251000000000</Td>
                  <Td>paid</Td>
                  <Td>Completed</Td>
                  <Td>AA - Example</Td>
                  <Td>pending</Td>
                  <Td>Example</Td>
                  <Td>2023-12-24</Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
}

export default Passengers;
