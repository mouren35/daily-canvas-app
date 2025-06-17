
import React, { useState } from 'react';
import DateNavigation from '../components/DateNavigation';
import StatsCard from '../components/StatsCard';
import TimelineItem from '../components/TimelineItem';
import BottomNavigation from '../components/BottomNavigation';

const Index = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState(0);

  // 示例数据
  const timelineData = [
    {
      time: '9:47',
      title: '洗衣香，换来香',
      description: '早晨清洗衣服并晾干，香一令菇鲜滑一会炒菜一这样可以让我的衣物保持清香的香味，在家徒上班十个小一',
      status: 'completed' as const,
    },
    {
      time: '10:52',
      title: 'Amazon写测评',
      description: '为最近的，天猫购买的商品，他们联系客服，从突然间两个便宜而且量，但是为了获得反过来等，这样住在以上等人购买和人，天猫客服拍照可是自己等等',
      status: 'in-progress' as const,
    },
    {
      time: '11:15',
      title: '视频封面字体模板',
      description: '改到为封面和缩略图以及名称工具，都属于需要重新装修等',
      status: 'upcoming' as const,
    },
    {
      time: '13:26',
      title: '洗脚机充电',
      description: '',
      status: 'completed' as const,
    },
    {
      time: '13:27',
      title: '背景教乐下载',
      description: '载导了关于的音乐，看着还是继续用来等使用上，',
      status: 'warning' as const,
    },
    {
      time: '15:10',
      title: '健身',
      description: '今天做腹肌训练和科，关于被运动和保获取进饮食和实际，',
      status: 'completed' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20 max-w-md mx-auto relative">
      {/* 日期导航 */}
      <DateNavigation currentDate={currentDate} onDateChange={setCurrentDate} />
      
      {/* 统计卡片 */}
      <div className="pt-4">
        <StatsCard schedule={181} steps={11382} completed={6} />
      </div>
      
      {/* 时间轴 */}
      <div className="bg-white mx-3 rounded-2xl shadow-sm overflow-hidden mb-4 p-4">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            time={item.time}
            title={item.title}
            description={item.description}
            status={item.status}
            isLast={index === timelineData.length - 1}
          />
        ))}
      </div>
      
      {/* 底部导航 */}
      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
