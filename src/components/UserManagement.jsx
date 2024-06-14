import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import Passengers from './users/Passengers';
import Drivers from './users/Drivers';


const UserManagement = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">User Management</h1>
      <div className="mt-4">
        <div className="bg-white shadow-md rounded p-4">
          <Tabs>
            <TabList>
              <Tab>Passengers Management</Tab>
              <Tab>Drivers Management</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Passengers />
              </TabPanel>
              <TabPanel>
                <Drivers />
              </TabPanel>
              
            </TabPanels>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
