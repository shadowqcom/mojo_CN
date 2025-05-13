import React, { useState, useEffect } from 'react';

const ClientInfo = () => {
  const [ipAddress, setIpAddress] = useState('Loading...');
  const [loadTime, setLoadTime] = useState(0);
  const [pingTime, setPingTime] = useState('Pending...');

  useEffect(() => {
    // 页面加载时间
    const startTime = performance.now();
    const onLoad = () => {
      const loadTime = performance.now() - startTime;
      setLoadTime(loadTime.toFixed(2));
    };
    window.addEventListener('load', onLoad);

    // Ping Cloudflare
    const pingCloudflare = async () => {
      try {
        const pingStartTime = performance.now();
        const response = await fetch('https://www.cloudflare.com/cdn-cgi/trace');
        const responseData = await response.text();
        const pingEndTime = performance.now();
        const pingDuration = pingEndTime - pingStartTime;
        setPingTime(pingDuration.toFixed(2));
      } catch (error) {
        console.error('Error pinging Cloudflare:', error);
        setPingTime('Error');
      }
    };

    pingCloudflare();

    // 清理事件监听器
    return () => {
      window.removeEventListener('load', onLoad);
    };
  }, []);

  return (
    <div>
      <p>CDN time：{pingTime} ms</p>
      <p>Loading time：{loadTime} ms</p>
    </div>
  );
};

export default ClientInfo;
