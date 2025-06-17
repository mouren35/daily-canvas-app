
import React from 'react';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

interface DateNavigationProps {
  currentDate: Date;
  onDateChange: (date: Date) => void;
}

const DateNavigation: React.FC<DateNavigationProps> = ({ currentDate, onDateChange }) => {
  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
    const weekday = weekdays[date.getDay()];
    
    return `${year}年${month}月${day}日 ${weekday}`;
  };

  const goToPreviousDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate);
  };

  const goToNextDay = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + 1);
    onDateChange(newDate);
  };

  const goToToday = () => {
    onDateChange(new Date());
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
      {/* 顶部导航栏 */}
      <div className="flex items-center justify-between px-4 py-2 safe-area-top">
        <button
          onClick={goToPreviousDay}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition-colors active:bg-white/30"
        >
          <ChevronLeft fontSize="medium" />
        </button>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={goToToday}
            className="text-sm px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors active:bg-white/30 font-medium"
          >
            每日
          </button>
          <button className="text-sm px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors active:bg-white/30">
            +日
          </button>
          <button className="text-sm px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors active:bg-white/30">
            日日
          </button>
        </div>
        
        <button
          onClick={goToNextDay}
          className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/20 transition-colors active:bg-white/30"
        >
          <ChevronRight fontSize="medium" />
        </button>
      </div>
      
      {/* 日期显示 */}
      <div className="text-center pb-3 px-4">
        <div className="text-lg font-medium">
          {formatDate(currentDate)}
        </div>
      </div>
    </div>
  );
};

export default DateNavigation;
