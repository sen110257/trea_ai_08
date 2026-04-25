const generateFortune = () => {
  const levels = ['运势平平', '运势尚可', '运势良好', '运势极佳']
  const careerTexts = [
    '今天工作上可能会遇到一些小挑战，但保持冷静就能应对。建议提前规划好任务优先级。',
    '事业运势平稳，适合处理日常工作。与同事保持良好沟通，有助于工作顺利推进。',
    '事业运不错，可能会有新的机会出现。保持积极态度，勇于尝试新事物。',
    '事业运势极佳！今天可能会遇到贵人相助，项目进展顺利，适合做出重要决策。'
  ]
  const loveTexts = [
    '感情方面可能需要更多耐心。与伴侣保持沟通，避免因小事产生误会。',
    '感情运势平稳，适合享受平凡的幸福。单身者可以多参加社交活动。',
    '桃花运不错！单身者可能会遇到心仪的对象，有伴者适合安排浪漫约会。',
    '感情运势极佳！与伴侣关系升温，单身者表白成功率高，适合发展新恋情。'
  ]
  const wealthTexts = [
    '财运平平，不适合进行大额投资。建议保持理性消费，控制开支。',
    '财运稳定，日常收支平衡。可以适当关注一些稳健的理财方式。',
    '财运不错，可能会有意外收入或投资回报。适合进行合理的财务规划。',
    '财运极佳！可能会有大额收入或投资获利，适合做出重要的财务决策。'
  ]
  const healthTexts = [
    '健康方面需要注意休息，避免过度劳累。适当运动有助于保持精力。',
    '健康状况平稳，保持规律作息即可。注意饮食均衡。',
    '身体状态良好，适合进行运动锻炼。保持积极心态对健康有益。',
    '精力充沛，身心状态极佳！适合进行户外活动或开始新的健身计划。'
  ]

  const randomIndex = Math.floor(Math.random() * 4)
  
  return {
    overall: levels[randomIndex],
    score: 60 + randomIndex * 13 + Math.floor(Math.random() * 10),
    career: {
      score: 60 + randomIndex * 10 + Math.floor(Math.random() * 15),
      text: careerTexts[randomIndex]
    },
    love: {
      score: 60 + randomIndex * 10 + Math.floor(Math.random() * 15),
      text: loveTexts[randomIndex]
    },
    wealth: {
      score: 60 + randomIndex * 10 + Math.floor(Math.random() * 15),
      text: wealthTexts[randomIndex]
    },
    health: {
      score: 60 + randomIndex * 10 + Math.floor(Math.random() * 15),
      text: healthTexts[randomIndex]
    }
  }
}

export const getFortune = (constellationId, period = 'today') => {
  const periodNames = {
    today: '今日运势',
    tomorrow: '明日运势',
    week: '本周运势',
    month: '本月运势'
  }
  
  const baseFortune = generateFortune()
  
  const periodAddition = {
    today: 0,
    tomorrow: Math.floor(Math.random() * 5) - 2,
    week: Math.floor(Math.random() * 8) - 4,
    month: Math.floor(Math.random() * 10) - 5
  }
  
  const adjustScore = (score) => {
    const adjusted = score + periodAddition[period]
    return Math.max(30, Math.min(100, adjusted))
  }
  
  return {
    period: periodNames[period],
    periodKey: period,
    overall: baseFortune.overall,
    score: adjustScore(baseFortune.score),
    career: {
      score: adjustScore(baseFortune.career.score),
      text: baseFortune.career.text
    },
    love: {
      score: adjustScore(baseFortune.love.score),
      text: baseFortune.love.text
    },
    wealth: {
      score: adjustScore(baseFortune.wealth.score),
      text: baseFortune.wealth.text
    },
    health: {
      score: adjustScore(baseFortune.health.score),
      text: baseFortune.health.text
    },
    tips: generateTips()
  }
}

const generateTips = () => {
  const tips = [
    '今天适合佩戴蓝色系饰品，有助于提升运势。',
    '建议今日多倾听他人意见，会有意外收获。',
    '今日幸运数字可能带来好运，可以多加留意。',
    '保持微笑，好情绪会吸引好运降临。',
    '今天适合做一些平时不敢尝试的事情。',
    '中午时分是今日好运高峰，适合重要事务。',
    '与水相关的活动可能带来额外好运。',
    '今日宜出行，远方可能有惊喜等着你。'
  ]
  return tips[Math.floor(Math.random() * tips.length)]
}

export const fortuneTips = [
  { title: '事业小贴士', content: '保持专注，细节决定成败。今日适合处理重要文件。' },
  { title: '爱情小贴士', content: '多关心对方的感受，小小的关心会大大增进感情。' },
  { title: '财运小贴士', content: '理性消费，避免冲动购物。投资需谨慎。' },
  { title: '健康小贴士', content: '多喝水，适当运动。早睡早起精神好。' }
]
