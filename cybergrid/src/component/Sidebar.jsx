import React from 'react';
import { Icon } from '@iconify/react';

const Sidebar = ({ active, setActive, collapsed, toggleCollapse }) => {
  return (
    <div className="w-1/6 bg-gray-800 text-white">
      <div className="flex flex-row h-16">
        <div
          className={`flex flex-col items-start justify-between p-2 shadow-sm w-1/2 ${
            active === 'Webmin' ? 'bg-gray-900' : 'bg-gray-700'
          }`}
          onClick={() => setActive('Webmin')}
        >
          <span className="font-bold text-lg p-2">Webmin</span>
        </div>
        <div
          className={`flex flex-col items-start justify-between p-2 shadow-sm w-1/2 ${
            active === 'Virtualmin' ? 'bg-gray-900' : 'bg-gray-700'
          }`}
          onClick={() => setActive('Virtualmin')}
        >
          <span className="font-bold text-lg p-2">Virtualmin</span>
        </div>
      </div>

      <div className="flex items-center border-b-2 border-white mt-3 mx-2 px-2">
        <input
          type="text"
          placeholder="Search"
          className="px-1 py-1 bg-gray-800 focus:outline-none"
        />
        <Icon icon="mdi:search" color="white" width="15" height="30" />
      </div>
      <nav>
        <ul className="mt-4">
          {active === 'Webmin' && (
            <>
              <li className="flex flex-col items-start mb-2">
                <div
                  className="flex items-center w-full cursor-pointer"
                  onClick={() => toggleCollapse('Webmin')}
                >
                  <Icon icon="mdi:server" className="w-5 h-5 mr-2" />
                  <span>Webmin</span>
                  <Icon
                    icon="mdi:chevron-down"
                    className={`w-6 h-6 ml-auto transform transition-transform ${
                      collapsed.Webmin ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {collapsed.Webmin && (
                  <div className="pl-7">
                    <p className="text-sm mt-2">User Management</p>
                    <p className="text-sm mt-2">Configuration Files</p>
                    <p className="text-sm mt-2">Security Settings</p>
                  </div>
                )}
              </li>
            </>
          )}
          {active === 'Virtualmin' && (
            <>
              <li className="flex flex-col items-start mb-2">
                <div
                  className="flex items-center w-full cursor-pointer"
                  onClick={() => toggleCollapse('Virtualmin')}
                >
                  <Icon icon="mdi:server" className="w-5 h-5 mr-2" />
                  <span>Virtualmin</span>
                  <Icon
                    icon="mdi:chevron-down"
                    className={`w-6 h-6 ml-auto transform transition-transform ${
                      collapsed.Virtualmin ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {collapsed.Virtualmin && (
                  <div className="pl-7">
                    <p className="text-sm mt-2">Domain Management</p>
                    <p className="text-sm mt-2">Server Configuration</p>
                    <p className="text-sm mt-2">Backup & Restore</p>
                  </div>
                )}
              </li>
            </>
          )}
          <li className="flex flex-col items-start mb-2">
            <div
              className="flex items-center w-full cursor-pointer"
              onClick={() => toggleCollapse('System')}
            >
              <Icon icon="mdi:cog" className="w-5 h-5 mr-2" />
              <span>System</span>
              <Icon
                icon="mdi:chevron-down"
                className={`w-6 h-6 ml-auto transform transition-transform ${
                  collapsed.System ? 'rotate-180' : ''
                }`}
              />
            </div>
            {collapsed.System && (
              <div className="pl-7">
                <p className="text-sm mt-2">System Logs</p>
                <p className="text-sm mt-2">Resource Monitoring</p>
                <p className="text-sm mt-2">Patch Management</p>
              </div>
            )}
          </li>
          <li className="flex flex-col items-start mb-2">
            <div
              className="flex items-center w-full cursor-pointer"
              onClick={() => toggleCollapse('Servers')}
            >
              <Icon icon="mdi:database" className="w-5 h-5 mr-2" />
              <span>Servers</span>
              <Icon
                icon="mdi:chevron-down"
                className={`w-6 h-6 ml-auto transform transition-transform ${
                  collapsed.Servers ? 'rotate-180' : ''
                }`}
              />
            </div>
            {collapsed.Servers && (
              <div className="pl-7">
                <p className="text-sm mt-2">Database Security</p>
                <p className="text-sm mt-2">Web Server Settings</p>
                <p className="text-sm mt-2">Backup & Restore</p>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;