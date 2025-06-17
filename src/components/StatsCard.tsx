
import React from 'react';

interface StatsCardProps {
  schedule: number;
  steps: number;
  completed: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ schedule, steps, completed }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 mb-4 mx-3">
      <div className="flex justify-between items-center">
        <div className="text-center flex-1">
          <div className="text-xl font-bold text-gray-800 mb-1">{schedule}</div>
          <div className="text-xs text-gray-500">行程分钟</div>
        </div>
        <div className="w-px h-8 bg-gray-200 mx-2"></div>
        <div className="text-center flex-1">
          <div className="text-xl font-bold text-gray-800 mb-1">{steps.toLocaleString()}</div>
          <div className="text-xs text-gray-500">计划步</div>
        </div>
        <div className="w-px h-8 bg-gray-200 mx-2"></div>
        <div className="text-center flex-1">
          <div className="text-xl font-bold text-gray-800 mb-1">{completed}</div>
          <div className="text-xs text-gray-500">完成项</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
