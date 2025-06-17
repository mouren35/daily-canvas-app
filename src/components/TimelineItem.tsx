
import React from 'react';

interface TimelineItemProps {
  time: string;
  title: string;
  description?: string;
  status: 'completed' | 'in-progress' | 'upcoming' | 'warning';
  icon?: React.ReactNode;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ 
  time, 
  title, 
  description, 
  status,
  icon 
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
    <div className="flex items-start px-4 py-4 active:bg-gray-50 transition-colors border-b border-gray-50 last:border-b-0">
      <div className="text-sm text-gray-500 w-12 flex-shrink-0 pt-0.5 font-medium">
        {time}
      </div>
      <div className="flex-shrink-0 mx-3 mt-0.5">
        <div className={`w-6 h-6 rounded-full ${getStatusColor()} flex items-center justify-center text-white text-xs font-bold shadow-sm`}>
          {getStatusIcon()}
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-gray-900 font-medium text-base leading-relaxed mb-1">
          {title}
        </div>
        {description && (
          <div className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
