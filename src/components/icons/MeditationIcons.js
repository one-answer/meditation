import React from 'react';

// 冥想姿势图标 - 用于应用标志
export const MeditationLogo = ({ width = 40, height = 40, color = '#2d3748' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 头部 */}
      <circle cx="50" cy="30" r="15" fill={color} />
      
      {/* 身体 */}
      <path 
        d="M50 45 L50 65 Q50 75, 40 80 L35 82" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M50 45 L50 65 Q50 75, 60 80 L65 82" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none" 
      />
      
      {/* 腿部 - 盘坐姿势 */}
      <path 
        d="M35 82 Q25 85, 20 75 Q15 65, 25 60 Q35 55, 50 65" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none" 
      />
      <path 
        d="M65 82 Q75 85, 80 75 Q85 65, 75 60 Q65 55, 50 65" 
        stroke={color} 
        strokeWidth="4" 
        strokeLinecap="round" 
        fill="none" 
      />
      
      {/* 冥想光环 */}
      <circle 
        cx="50" 
        cy="50" 
        r="40" 
        stroke={color} 
        strokeWidth="2" 
        strokeDasharray="4 4" 
        fill="none" 
      />
    </svg>
  );
};

// 呼吸图标 - 用于呼吸动画
export const BreathingIcon = ({ width = 40, height = 40, phase = 'inhale', progress = 0 }) => {
  // 根据呼吸阶段设置颜色
  const colors = {
    inhale: '#a8edea',
    hold: '#fed6e3',
    exhale: '#a8edea'
  };
  
  // 根据进度计算波浪高度
  const waveHeight = phase === 'inhale' 
    ? 20 - progress * 15 
    : phase === 'exhale' 
      ? 5 + progress * 15 
      : 5;
  
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 外圆 */}
      <circle cx="50" cy="50" r="45" stroke={colors[phase]} strokeWidth="2" fill="none" />
      
      {/* 呼吸波浪 */}
      <path 
        d={`M10 ${50 + waveHeight} 
            C20 ${50 - waveHeight}, 30 ${50 - waveHeight}, 40 ${50 + waveHeight} 
            C50 ${50 + waveHeight * 1.5}, 60 ${50 - waveHeight}, 70 ${50 - waveHeight} 
            C80 ${50 + waveHeight}, 90 ${50 + waveHeight}, 90 ${50 - waveHeight}`}
        stroke={colors[phase]} 
        strokeWidth="3" 
        fill="none" 
      />
      
      {/* 中心点 */}
      <circle cx="50" cy="50" r="5" fill={colors[phase]} />
    </svg>
  );
};

// 音乐/声音图标 - 用于音频控制
export const SoundIcon = ({ width = 40, height = 40, playing = false, color = '#4a5568' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 扬声器 */}
      <path 
        d="M30 40 H40 L55 25 V75 L40 60 H30 Z" 
        fill={color} 
      />
      
      {/* 声波 - 仅在播放时显示 */}
      {playing && (
        <>
          <path 
            d="M65 35 Q80 50, 65 65" 
            stroke={color} 
            strokeWidth="3" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M75 25 Q95 50, 75 75" 
            stroke={color} 
            strokeWidth="3" 
            strokeLinecap="round" 
            fill="none" 
          />
        </>
      )}
    </svg>
  );
};

// 计时器图标 - 用于时长选择
export const TimerIcon = ({ width = 40, height = 40, color = '#4a5568' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 计时器外壳 */}
      <circle cx="50" cy="55" r="35" stroke={color} strokeWidth="4" fill="none" />
      
      {/* 计时器顶部 */}
      <rect x="40" y="10" width="20" height="10" rx="2" fill={color} />
      <path d="M40 15 L35 25 Q40 30, 50 30 Q60 30, 65 25 L60 15" stroke={color} strokeWidth="4" fill="none" />
      
      {/* 时针 */}
      <line x1="50" y1="55" x2="50" y2="35" stroke={color} strokeWidth="4" strokeLinecap="round" />
      
      {/* 分针 */}
      <line x1="50" y1="55" x2="65" y2="65" stroke={color} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
};

// 模式图标 - 用于呼吸模式选择
export const PatternIcon = ({ width = 40, height = 40, color = '#4a5568' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 三个不同大小的圆形，代表不同的呼吸模式 */}
      <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="2" strokeDasharray="4 4" fill="none" />
      <circle cx="50" cy="50" r="30" stroke={color} strokeWidth="2" strokeDasharray="8 2" fill="none" />
      <circle cx="50" cy="50" r="20" stroke={color} strokeWidth="2" fill="none" />
      
      {/* 中心点 */}
      <circle cx="50" cy="50" r="5" fill={color} />
      
      {/* 连接线 */}
      <path 
        d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50" 
        stroke={color} 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeDasharray="2 4" 
      />
    </svg>
  );
};

// 语言切换图标
export const LanguageIcon = ({ width = 40, height = 40, color = '#4a5568' }) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 地球 */}
      <circle cx="50" cy="50" r="40" stroke={color} strokeWidth="3" fill="none" />
      
      {/* 经线 */}
      <ellipse cx="50" cy="50" rx="20" ry="40" stroke={color} strokeWidth="2" fill="none" />
      <ellipse cx="50" cy="50" rx="40" ry="20" stroke={color} strokeWidth="2" fill="none" />
      
      {/* 文字符号 */}
      <text x="35" y="45" fontSize="16" fill={color}>文</text>
      <text x="55" y="65" fontSize="16" fill={color}>A</text>
    </svg>
  );
};
