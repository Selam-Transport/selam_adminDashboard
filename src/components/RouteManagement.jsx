import React from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import ModifyRouteForm from './routing/ModifyRouteForm';
import AddDriverForm from './routing/AddDriverForm';
import RouteList from './routing/RouteList';
import AddRoute from './routing/AddRoute';


const RouteManagement = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Route Management</h1>
      <div className="mt-4">
        <div className="bg-white shadow-md rounded p-4">
          <Tabs>
            <TabList>
               <Tab>Add Route</Tab>
              <Tab>Modify Route Information</Tab>
              <Tab>Add Driver Information</Tab>
              <Tab>Available Routes</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <AddRoute />
              </TabPanel>
              <TabPanel>
                <ModifyRouteForm />
              </TabPanel>
              <TabPanel>
                <AddDriverForm />
              </TabPanel>
              <TabPanel>
                <RouteList />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        </div>
      </div>
  );
};

export default RouteManagement;
