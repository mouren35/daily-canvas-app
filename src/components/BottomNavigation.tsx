
import React from 'react';
import { Home, List, CalendarToday, Person } from '@mui/icons-material';

interface BottomNavigationProps {
  activeTab: number;
  onTabChange: (index: number) => void;
}

const BottomNavigation: React.FC<BottomNavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { icon: Home, label: '动态' },
    { icon: List, label: '清单' },
    { icon: CalendarToday, label: '日历' },
    { icon: Person, label: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom">
      <div className="flex justify-around px-2 py-1">
        {tabs.map((tab, index) => {
          const IconComponent = tab.icon;
          const isActive = activeTab === index;
          
          return (
            <button
              key={index}
              onClick={() => onTabChange(index)}
              className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1 transition-all duration-200 active:scale-95 ${
                isActive ? 'text-blue-600' : 'text-gray-500'
              }`}
            >
              <IconComponent 
                fontSize="small" 
                className={`mb-1 transition-colors ${isActive ? 'text-blue-600' : 'text-gray-500'}`}
              />
              <span className={`text-xs font-medium transition-colors ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>
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
