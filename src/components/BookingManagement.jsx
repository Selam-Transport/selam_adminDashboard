import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ModifyTicket from './booking/ModifyTicket';
import CancelTicket from './booking/CancelTicket';
import WaitListVerification from './booking/WaitListVerification';

const BookingManagement = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Booking Management</h1>
      <div className="mt-4">
        <div className="bg-white shadow-md rounded p-4">
          <Tabs>
            <TabList>
              <Tab>Modify Ticket</Tab>
              <Tab>Cancel Ticket</Tab>
              <Tab>Verify Waitlist</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <ModifyTicket />
              </TabPanel>
              <TabPanel>
                <CancelTicket />
              </TabPanel>
              <TabPanel>
                <WaitListVerification />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default BookingManagement;
