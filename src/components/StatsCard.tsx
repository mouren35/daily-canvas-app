
import React from 'react';

interface StatsCardProps {
  schedule: number;
  steps: number;
  completed: number;
}

const StatsCard: React.FC<StatsCardProps> = ({ schedule, steps, completed }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-4 mb-6 mx-4">
      <div className="flex justify-between items-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">{schedule}</div>
          <div className="text-sm text-gray-500">行程分钟</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">{steps.toLocaleString()}</div>
          <div className="text-sm text-gray-500">计划步</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-800">{completed}</div>
          <div className="text-sm text-gray-500">完成项</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
