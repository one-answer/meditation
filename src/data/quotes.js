// 冥想语录库
// 每个语录都有中文和英文版本

const quotes = [
  {
    zh: "吸入平静，呼出紧张。",
    en: "Breathe in peace, breathe out tension."
  },
  {
    zh: "当下即是，此刻即是。",
    en: "Be here now, this moment is all there is."
  },
  {
    zh: "心如止水，宁静致远。",
    en: "A calm mind brings inner strength and self-confidence."
  },
  {
    zh: "呼吸是通往内心平静的桥梁。",
    en: "Breath is the bridge which connects life to consciousness."
  },
  {
    zh: "冥想不是逃避，而是与自己相遇。",
    en: "Meditation is not an escape but a serene encounter with reality."
  },
  {
    zh: "静坐常思己过，闲谈莫论人非。",
    en: "In meditation, reflect on your own faults; in conversation, refrain from discussing others' wrongs."
  },
  {
    zh: "心若不动，风又奈何。",
    en: "If the mind is not disturbed, no wind can shake it."
  },
  {
    zh: "万物皆有裂痕，那是光照进来的地方。",
    en: "There is a crack in everything, that's how the light gets in."
  },
  {
    zh: "不以物喜，不以己悲。",
    en: "Neither be elated by success nor dejected by failure."
  },
  {
    zh: "心静自然凉。",
    en: "A calm mind brings its own coolness."
  },
  {
    zh: "观呼吸，知自我。",
    en: "Watch your breath, know yourself."
  },
  {
    zh: "放下所有，回归本心。",
    en: "Let go of everything and return to your true self."
  },
  {
    zh: "一念放下，万般自在。",
    en: "Release one thought, find infinite freedom."
  },
  {
    zh: "心安即是归处。",
    en: "Where the mind is at peace, there is home."
  },
  {
    zh: "活在当下，珍惜呼吸。",
    en: "Live in the present, cherish each breath."
  },
  {
    zh: "内心的宁静是最大的力量。",
    en: "Inner peace is the greatest strength."
  },
  {
    zh: "冥想不是改变自己，而是认识自己。",
    en: "Meditation is not about becoming someone else, but recognizing who you are."
  },
  {
    zh: "呼吸是最简单的冥想。",
    en: "Breathing is the simplest form of meditation."
  },
  {
    zh: "静坐无言，胜读十年书。",
    en: "Sitting quietly in meditation surpasses ten years of reading."
  },
  {
    zh: "心若平静，天地宽广。",
    en: "With a calm mind, the world becomes vast."
  },
  {
    zh: "每一次呼吸都是新的开始。",
    en: "Each breath is a new beginning."
  },
  {
    zh: "冥想不是为了变得完美，而是为了接纳不完美。",
    en: "Meditation is not about becoming perfect, but accepting imperfection."
  },
  {
    zh: "专注于呼吸，回归于本心。",
    en: "Focus on your breath, return to your true nature."
  },
  {
    zh: "心如明镜，映照万物而不留痕。",
    en: "The mind is like a clear mirror, reflecting everything without holding onto anything."
  },
  {
    zh: "宁静致远，淡泊明志。",
    en: "Tranquility leads to clarity, simplicity reveals purpose."
  },
  {
    zh: "身在尘世，心在天外。",
    en: "Body in the world, mind beyond it."
  },
  {
    zh: "呼吸之间，找到自己。",
    en: "Between breaths, find yourself."
  },
  {
    zh: "冥想是与自己的对话。",
    en: "Meditation is a conversation with yourself."
  },
  {
    zh: "心若无尘，自然明净。",
    en: "When the mind is free from dust, clarity naturally emerges."
  },
  {
    zh: "一花一世界，一叶一菩提。",
    en: "A flower contains a world, a leaf holds enlightenment."
  }
];

// 获取随机语录
export const getRandomQuote = (language = 'zh') => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex][language];
};

// 获取指定索引的语录
export const getQuoteByIndex = (index, language = 'zh') => {
  if (index >= 0 && index < quotes.length) {
    return quotes[index][language];
  }
  return quotes[0][language]; // 默认返回第一条
};

// 获取所有语录
export const getAllQuotes = (language = 'zh') => {
  return quotes.map(quote => quote[language]);
};

export default quotes;
