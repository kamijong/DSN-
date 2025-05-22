// src/components/dashboard/DNSMonitor.jsx
import React, { useEffect, useState } from 'react';
import { fetchDNSStats } from '../../services/dnsService';

const DNSMonitor = () => {
  const [stats, setStats] = useState(null);
  const [activeRequests, setActiveRequests] = useState([]);

  useEffect(() => {
    // 实时统计信息获取
    const getStats = async () => {
      const data = await fetchDNSStats();
      setStats(data);
    };

    // 建立WebSocket连接获取实时DNS请求
    const ws = new WebSocket('wss://api.example.com/ws/dns');
    
    ws.onmessage = (event) => {
      const request = JSON.parse(event.data);
      setActiveRequests(prev => [...prev.slice(-50), request]);
    };

    return () => ws.close();
  }, []);

  return (
    <div className="dns-monitor">
      {/* 统计信息展示 */}
      {stats && <DNSStatsCard stats={stats} />}
      
      {/* 实时请求列表 */}
      <RealtimeRequestsTable requests={activeRequests} />
      
      {/* 数据可视化图表 */}
      <DNSChart data={activeRequests} />
    </div>
  );
};