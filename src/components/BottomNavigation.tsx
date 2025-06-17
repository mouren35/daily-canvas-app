
import React from 'react';
import { Home, List, Calendar, Person } from '@mui/icons-material';

interface BottomNavigationProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { icon: Home, label: '动态' },
    { icon: List, label: '清单' },
    { icon: Calendar, label: '日历' },
    { icon: Person, label: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1">
      <div className="flex justify-around">
        {tabs.map((tab, index) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === index;
          
          return (
            <button
              key={index}
              onClick={() => onTabChange(index)}
              className={`flex flex-col items-center py-2 px-3 min-w-0 flex-1 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              <IconComponent 
                fontSize="small" 
                className={`mb-1 ${isActive ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <span className={`text-xs ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default BottomNavigation;
