
import React from 'react';

interface TimelineItemProps {
  time: string;
  title: string;
  description?: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'warning';
  icon?: React.ReactNode;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  time, 
  title, 
  description, 
  status,
  icon,
  isLast = false
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-blue-500';
      case 'upcoming':
        return 'bg-gray-400';
      case 'warning':
        return 'bg-red-500';
      default:
        return 'bg-gray-400';
    }
  };

  const getStatusIcon = () => {
    if (icon) return icon;
    
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '○';
      case 'upcoming':
        return '◯';
      case 'warning':
        return '!';
      default:
        return '○';
    }
  };

  return (
    <div className="relative flex">
      {/* Time column */}
      <div className="w-12 flex-shrink-0 text-right pr-4">
        <div className="text-sm text-gray-500 font-medium pt-1">
          {time}
        </div>
      </div>
      
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full ${getStatusColor()} flex items-center justify-center text-white text-xs font-bold z-10 flex-shrink-0 mt-1`}>
          <span className="text-[8px]">{getStatusIcon()}</span>
        </div>
        {!isLast && (
          <div className="w-px h-full bg-gray-200 absolute top-3 left-1/2 transform -translate-x-1/2"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="flex-1 ml-4 pb-6">
        <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
          <div className="text-gray-900 font-medium text-sm mb-1">
            {title}
          </div>
          {description && (
            <div className="text-gray-600 text-xs leading-relaxed">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
