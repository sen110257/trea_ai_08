import { constellations } from './constellations.js'

const compatibilityMatrix = {
  aries: {
    aries: { score: 70, type: '一般配对', text: '两个火象星座在一起，热情如火但也容易冲突。需要互相理解，学会包容对方的急躁。' },
    taurus: { score: 60, type: '需要努力', text: '火象与土象的组合，需要更多的沟通和理解。白羊的急躁与金牛的稳重形成对比。' },
    gemini: { score: 85, type: '默契十足', text: '白羊的热情与双子的灵活是很好的组合。充满活力，能够创造很多有趣的时光。' },
    cancer: { score: 65, type: '需要理解', text: '白羊的直接与巨蟹的敏感需要调和。学会用温柔的方式表达，避免伤害对方。' },
    leo: { score: 90, type: '天作之合', text: '两个火象星座的完美组合！热情、自信、活力四射，是令人羡慕的一对。' },
    virgo: { score: 60, type: '需要努力', text: '白羊的冲动与处女的细腻需要磨合。学会欣赏对方的优点，互补不足。' },
    libra: { score: 75, type: '良好配对', text: '白羊的直接与天秤的优雅可以互补。需要学会平衡热情与优雅。' },
    scorpio: { score: 70, type: '爱恨交织', text: '激情四射的组合，但也可能产生激烈冲突。需要学会控制情绪，避免伤害。' },
    sagittarius: { score: 92, type: '灵魂伴侣', text: '两个火象星座的自由灵魂！热爱冒险，追求自由，是理想的旅行伴侣。' },
    capricorn: { score: 60, type: '需要努力', text: '白羊的急躁与摩羯的稳重形成对比。需要学会互相尊重，找到平衡点。' },
    aquarius: { score: 80, type: '创意组合', text: '白羊的热情与水瓶的创新是有趣的组合。能够激发彼此的创造力。' },
    pisces: { score: 65, type: '需要理解', text: '白羊的直接与双鱼的敏感需要温柔对待。用爱的方式表达，保护对方的柔软。' }
  },
  taurus: {
    aries: { score: 60, type: '需要努力', text: '土象与火象的组合，金牛的稳重与白羊的急躁需要更多的理解和耐心。' },
    taurus: { score: 80, type: '稳定配对', text: '两个土象星座在一起，稳重可靠。虽然有时会显得沉闷，但感情基础稳固。' },
    gemini: { score: 60, type: '需要努力', text: '金牛的稳重与双子的灵活形成对比。需要学会欣赏对方的不同之处。' },
    cancer: { score: 90, type: '天作之合', text: '土象与水象的完美组合！稳定与温柔的结合，能够建立温馨的家庭。' },
    leo: { score: 70, type: '需要调和', text: '金牛的稳重与狮子的热情需要调和。学会欣赏对方的优点，互相尊重。' },
    virgo: { score: 85, type: '默契十足', text: '两个土象星座的完美组合！注重细节，追求完美，能够共同创造美好生活。' },
    libra: { score: 75, type: '良好配对', text: '金星守护的两个星座，对美感有共同追求。优雅与稳重的结合。' },
    scorpio: { score: 75, type: '深情组合', text: '土象的稳重与水象的深情可以互补。感情深厚，但需要沟通。' },
    sagittarius: { score: 60, type: '需要努力', text: '金牛的稳重与射手的自由形成对比。需要学会给彼此空间，找到平衡点。' },
    capricorn: { score: 88, type: '灵魂伴侣', text: '两个土象星座的事业组合！稳重、可靠、有共同目标，能够共同奋斗。' },
    aquarius: { score: 65, type: '需要理解', text: '金牛的传统与水瓶的创新需要调和。学会尊重彼此的差异。' },
    pisces: { score: 75, type: '温柔组合', text: '土象的稳定与水象的温柔可以互补。建立稳定而温馨的关系。' }
  },
  gemini: {
    aries: { score: 85, type: '默契十足', text: '双子的灵活与白羊的热情是很好的组合。充满活力，能够创造很多有趣的时光。' },
    taurus: { score: 60, type: '需要努力', text: '双子的灵活与金牛的稳重形成对比。需要学会欣赏对方的不同之处。' },
    gemini: { score: 70, type: '一般配对', text: '两个风象星座在一起，交流顺畅但可能缺乏深度。需要学会深入沟通。' },
    cancer: { score: 65, type: '需要理解', text: '双子的多变与巨蟹的敏感需要调和。学会用温柔的方式表达。' },
    leo: { score: 80, type: '创意组合', text: '双子的灵活与狮子的热情是有趣的组合。能够激发彼此的创造力。' },
    virgo: { score: 70, type: '一般配对', text: '水星守护的两个星座，思维敏捷但可能过于挑剔。学会包容对方的小缺点。' },
    libra: { score: 90, type: '天作之合', text: '两个风象星座的完美组合！善于沟通，追求和谐，是令人羡慕的一对。' },
    scorpio: { score: 60, type: '需要努力', text: '双子的多变与天蝎的深情需要调和。学会给对方安全感。' },
    sagittarius: { score: 85, type: '默契十足', text: '风象与火象的自由组合！热爱探索，追求新鲜，能够共同创造精彩生活。' },
    capricorn: { score: 60, type: '需要努力', text: '双子的灵活与摩羯的稳重形成对比。需要学会互相尊重，找到平衡点。' },
    aquarius: { score: 92, type: '灵魂伴侣', text: '两个风象星座的创新组合！思维活跃，追求独特，能够创造非凡的未来。' },
    pisces: { score: 65, type: '需要理解', text: '双子的多变与双鱼的敏感需要温柔对待。用爱和耐心建立连接。' }
  },
  cancer: {
    aries: { score: 65, type: '需要理解', text: '巨蟹的敏感与白羊的直接需要调和。学会用温柔的方式表达，避免伤害对方。' },
    taurus: { score: 90, type: '天作之合', text: '水象与土象的完美组合！温柔与稳重的结合，能够建立温馨的家庭。' },
    gemini: { score: 65, type: '需要理解', text: '巨蟹的敏感与双子的多变需要调和。学会用温柔的方式表达。' },
    cancer: { score: 80, type: '温馨配对', text: '两个水象星座在一起，温柔体贴。能够理解彼此的情绪，建立深厚的情感连接。' },
    leo: { score: 70, type: '需要调和', text: '巨蟹的温柔与狮子的热情需要调和。学会欣赏对方的优点，互相尊重。' },
    virgo: { score: 75, type: '良好配对', text: '水象的温柔与土象的细致可以互补。建立稳定而温馨的关系。' },
    libra: { score: 70, type: '需要调和', text: '巨蟹的敏感与天秤的优雅需要调和。学会平衡情感与理性。' },
    scorpio: { score: 92, type: '灵魂伴侣', text: '两个水象星座的深情组合！情感丰富，直觉敏锐，能够建立灵魂级别的连接。' },
    sagittarius: { score: 60, type: '需要努力', text: '巨蟹的依恋与射手的自由形成对比。需要学会给彼此空间，找到平衡点。' },
    capricorn: { score: 80, type: '稳定配对', text: '水象的温柔与土象的稳重可以互补。建立稳定而温馨的家庭。' },
    aquarius: { score: 60, type: '需要努力', text: '巨蟹的情感与水瓶的理性形成对比。需要学会理解彼此的差异。' },
    pisces: { score: 88, type: '默契十足', text: '两个水象星座的梦幻组合！情感丰富，富有想象力，能够创造浪漫的爱情故事。' }
  },
  leo: {
    aries: { score: 90, type: '天作之合', text: '两个火象星座的完美组合！热情、自信、活力四射，是令人羡慕的一对。' },
    taurus: { score: 70, type: '需要调和', text: '狮子的热情与金牛的稳重需要调和。学会欣赏对方的优点，互相尊重。' },
    gemini: { score: 80, type: '创意组合', text: '狮子的热情与双子的灵活是有趣的组合。能够激发彼此的创造力。' },
    cancer: { score: 70, type: '需要调和', text: '狮子的热情与巨蟹的温柔需要调和。学会欣赏对方的优点，互相尊重。' },
    leo: { score: 75, type: '良好配对', text: '两个火象星座在一起，热情如火但也容易争强好胜。需要学会互相欣赏。' },
    virgo: { score: 65, type: '需要理解', text: '狮子的张扬与处女的内敛需要调和。学会尊重彼此的不同表达方式。' },
    libra: { score: 85, type: '默契十足', text: '火象与风象的优雅组合！狮子的热情与天秤的优雅相得益彰。' },
    scorpio: { score: 65, type: '爱恨交织', text: '狮子的阳光与天蝎的深沉形成对比。需要学会理解彼此的差异。' },
    sagittarius: { score: 90, type: '天作之合', text: '两个火象星座的自由灵魂！热爱冒险，追求自由，是理想的旅行伴侣。' },
    capricorn: { score: 70, type: '需要调和', text: '狮子的张扬与摩羯的低调需要调和。学会尊重彼此的不同风格。' },
    aquarius: { score: 75, type: '良好配对', text: '狮子的热情与水瓶的独特是有趣的组合。能够创造独特的爱情故事。' },
    pisces: { score: 65, type: '需要理解', text: '狮子的强势与双鱼的柔弱需要温柔对待。用爱保护对方的柔软。' }
  },
  virgo: {
    aries: { score: 60, type: '需要努力', text: '处女的细腻与白羊的冲动需要磨合。学会欣赏对方的优点，互补不足。' },
    taurus: { score: 85, type: '默契十足', text: '两个土象星座的完美组合！注重细节，追求完美，能够共同创造美好生活。' },
    gemini: { score: 70, type: '一般配对', text: '水星守护的两个星座，思维敏捷但可能过于挑剔。学会包容对方的小缺点。' },
    cancer: { score: 75, type: '良好配对', text: '土象的细致与水象的温柔可以互补。建立稳定而温馨的关系。' },
    leo: { score: 65, type: '需要理解', text: '处女的内敛与狮子的张扬需要调和。学会尊重彼此的不同表达方式。' },
    virgo: { score: 70, type: '一般配对', text: '两个土象星座在一起，注重细节但可能过于挑剔。学会包容对方的不完美。' },
    libra: { score: 75, type: '良好配对', text: '土象的细致与风象的优雅可以互补。建立和谐的关系。' },
    scorpio: { score: 70, type: '一般配对', text: '处女的理性与天蝎的深情需要调和。学会平衡理性与情感。' },
    sagittarius: { score: 60, type: '需要努力', text: '处女的谨慎与射手的鲁莽形成对比。需要学会互相尊重，找到平衡点。' },
    capricorn: { score: 88, type: '灵魂伴侣', text: '两个土象星座的务实组合！稳重、可靠、有共同目标，能够共同奋斗。' },
    aquarius: { score: 65, type: '需要理解', text: '处女的传统与水瓶的创新需要调和。学会尊重彼此的差异。' },
    pisces: { score: 65, type: '需要理解', text: '处女的理性与双鱼的感性需要调和。学会理解彼此的不同世界。' }
  },
  libra: {
    aries: { score: 75, type: '良好配对', text: '天秤的优雅与白羊的直接可以互补。需要学会平衡热情与优雅。' },
    taurus: { score: 75, type: '良好配对', text: '金星守护的两个星座，对美感有共同追求。优雅与稳重的结合。' },
    gemini: { score: 90, type: '天作之合', text: '两个风象星座的完美组合！善于沟通，追求和谐，是令人羡慕的一对。' },
    cancer: { score: 70, type: '需要调和', text: '天秤的优雅与巨蟹的敏感需要调和。学会平衡情感与理性。' },
    leo: { score: 85, type: '默契十足', text: '风象的优雅与火象的热情相得益彰！天秤的优雅能够平衡狮子的热情。' },
    virgo: { score: 75, type: '良好配对', text: '风象的优雅与土象的细致可以互补。建立和谐的关系。' },
    libra: { score: 70, type: '一般配对', text: '两个风象星座在一起，追求和谐但可能过于犹豫。需要学会做出决定。' },
    scorpio: { score: 65, type: '需要理解', text: '天秤的优雅与天蝎的深沉需要调和。学会理解彼此的差异。' },
    sagittarius: { score: 80, type: '创意组合', text: '风象的优雅与火象的自由是有趣的组合。能够创造独特的爱情故事。' },
    capricorn: { score: 70, type: '需要调和', text: '天秤的优雅与摩羯的稳重需要调和。学会尊重彼此的不同风格。' },
    aquarius: { score: 88, type: '灵魂伴侣', text: '两个风象星座的独特组合！追求创新，思维活跃，能够创造非凡的未来。' },
    pisces: { score: 75, type: '良好配对', text: '风象的优雅与水象的温柔可以互补。建立和谐而温馨的关系。' }
  },
  scorpio: {
    aries: { score: 70, type: '爱恨交织', text: '天蝎的深情与白羊的热情是激情四射的组合，但也可能产生激烈冲突。需要学会控制情绪。' },
    taurus: { score: 75, type: '深情组合', text: '水象的深情与土象的稳重可以互补。感情深厚，但需要沟通。' },
    gemini: { score: 60, type: '需要努力', text: '天蝎的深情与双子的多变需要调和。学会给对方安全感。' },
    cancer: { score: 92, type: '灵魂伴侣', text: '两个水象星座的深情组合！情感丰富，直觉敏锐，能够建立灵魂级别的连接。' },
    leo: { score: 65, type: '爱恨交织', text: '天蝎的深沉与狮子的阳光形成对比。需要学会理解彼此的差异。' },
    virgo: { score: 70, type: '一般配对', text: '天蝎的深情与处女的理性需要调和。学会平衡理性与情感。' },
    libra: { score: 65, type: '需要理解', text: '天蝎的深沉与天秤的优雅需要调和。学会理解彼此的差异。' },
    scorpio: { score: 75, type: '深情配对', text: '两个水象星座在一起，情感深厚。但也可能过于强烈，需要学会给彼此空间。' },
    sagittarius: { score: 60, type: '需要努力', text: '天蝎的深情与射手的自由形成对比。需要学会给彼此空间，找到平衡点。' },
    capricorn: { score: 80, type: '稳定配对', text: '水象的深情与土象的稳重可以互补。建立稳定而深厚的关系。' },
    aquarius: { score: 60, type: '需要努力', text: '天蝎的情感与水瓶的理性形成对比。需要学会理解彼此的差异。' },
    pisces: { score: 85, type: '默契十足', text: '两个水象星座的梦幻组合！情感丰富，直觉敏锐，能够创造浪漫的爱情故事。' }
  },
  sagittarius: {
    aries: { score: 92, type: '灵魂伴侣', text: '两个火象星座的自由灵魂！热爱冒险，追求自由，是理想的旅行伴侣。' },
    taurus: { score: 60, type: '需要努力', text: '射手的自由与金牛的稳重形成对比。需要学会给彼此空间，找到平衡点。' },
    gemini: { score: 85, type: '默契十足', text: '火象的自由与风象的灵活是很好的组合！热爱探索，追求新鲜。' },
    cancer: { score: 60, type: '需要努力', text: '射手的自由与巨蟹的依恋形成对比。需要学会给彼此空间，找到平衡点。' },
    leo: { score: 90, type: '天作之合', text: '两个火象星座的自由灵魂！热爱冒险，追求自由，是理想的旅行伴侣。' },
    virgo: { score: 60, type: '需要努力', text: '射手的鲁莽与处女的谨慎形成对比。需要学会互相尊重，找到平衡点。' },
    libra: { score: 80, type: '创意组合', text: '火象的自由与风象的优雅是有趣的组合。能够创造独特的爱情故事。' },
    scorpio: { score: 60, type: '需要努力', text: '射手的自由与天蝎的深情形成对比。需要学会给彼此空间，找到平衡点。' },
    sagittarius: { score: 70, type: '一般配对', text: '两个火象星座在一起，热爱自由但可能缺乏稳定。需要学会给彼此承诺。' },
    capricorn: { score: 65, type: '需要理解', text: '射手的自由与摩羯的稳重形成对比。需要学会尊重彼此的不同追求。' },
    aquarius: { score: 85, type: '默契十足', text: '火象的自由与风象的创新是很好的组合！追求独特，热爱探索。' },
    pisces: { score: 65, type: '需要理解', text: '射手的直接与双鱼的敏感需要温柔对待。用爱和耐心建立连接。' }
  },
  capricorn: {
    aries: { score: 60, type: '需要努力', text: '摩羯的稳重与白羊的急躁形成对比。需要学会互相尊重，找到平衡点。' },
    taurus: { score: 88, type: '灵魂伴侣', text: '两个土象星座的事业组合！稳重、可靠、有共同目标，能够共同奋斗。' },
    gemini: { score: 60, type: '需要努力', text: '摩羯的稳重与双子的灵活形成对比。需要学会互相尊重，找到平衡点。' },
    cancer: { score: 80, type: '稳定配对', text: '土象的稳重与水象的温柔可以互补。建立稳定而温馨的家庭。' },
    leo: { score: 70, type: '需要调和', text: '摩羯的低调与狮子的张扬需要调和。学会尊重彼此的不同风格。' },
    virgo: { score: 88, type: '灵魂伴侣', text: '两个土象星座的务实组合！稳重、可靠、有共同目标，能够共同奋斗。' },
    libra: { score: 70, type: '需要调和', text: '摩羯的稳重与天秤的优雅需要调和。学会尊重彼此的不同风格。' },
    scorpio: { score: 80, type: '稳定配对', text: '土象的稳重与水象的深情可以互补。建立稳定而深厚的关系。' },
    sagittarius: { score: 65, type: '需要理解', text: '摩羯的稳重与射手的自由形成对比。需要学会尊重彼此的不同追求。' },
    capricorn: { score: 70, type: '一般配对', text: '两个土象星座在一起，稳重可靠但可能过于严肃。需要学会放松和享受生活。' },
    aquarius: { score: 70, type: '需要调和', text: '摩羯的传统与水瓶的创新需要调和。学会尊重彼此的差异。' },
    pisces: { score: 70, type: '需要调和', text: '摩羯的理性与双鱼的感性需要调和。学会理解彼此的不同世界。' }
  },
  aquarius: {
    aries: { score: 80, type: '创意组合', text: '水瓶的创新与白羊的热情是有趣的组合。能够激发彼此的创造力。' },
    taurus: { score: 65, type: '需要理解', text: '水瓶的创新与金牛的传统需要调和。学会尊重彼此的差异。' },
    gemini: { score: 92, type: '灵魂伴侣', text: '两个风象星座的创新组合！思维活跃，追求独特，能够创造非凡的未来。' },
    cancer: { score: 60, type: '需要努力', text: '水瓶的理性与巨蟹的情感形成对比。需要学会理解彼此的差异。' },
    leo: { score: 75, type: '良好配对', text: '水瓶的独特与狮子的热情是有趣的组合。能够创造独特的爱情故事。' },
    virgo: { score: 65, type: '需要理解', text: '水瓶的创新与处女的传统需要调和。学会尊重彼此的差异。' },
    libra: { score: 88, type: '灵魂伴侣', text: '两个风象星座的独特组合！追求创新，思维活跃，能够创造非凡的未来。' },
    scorpio: { score: 60, type: '需要努力', text: '水瓶的理性与天蝎的情感形成对比。需要学会理解彼此的差异。' },
    sagittarius: { score: 85, type: '默契十足', text: '风象的创新与火象的自由是很好的组合！追求独特，热爱探索。' },
    capricorn: { score: 70, type: '需要调和', text: '水瓶的创新与摩羯的传统需要调和。学会尊重彼此的差异。' },
    aquarius: { score: 70, type: '一般配对', text: '两个风象星座在一起，追求独特但可能过于疏离。需要学会表达情感。' },
    pisces: { score: 75, type: '良好配对', text: '风象的独特与水象的梦幻是有趣的组合。能够创造浪漫的爱情故事。' }
  },
  pisces: {
    aries: { score: 65, type: '需要理解', text: '双鱼的敏感与白羊的直接需要温柔对待。用爱的方式表达，保护对方的柔软。' },
    taurus: { score: 75, type: '温柔组合', text: '水象的温柔与土象的稳定可以互补。建立稳定而温馨的关系。' },
    gemini: { score: 65, type: '需要理解', text: '双鱼的敏感与双子的多变需要温柔对待。用爱和耐心建立连接。' },
    cancer: { score: 88, type: '默契十足', text: '两个水象星座的梦幻组合！情感丰富，富有想象力，能够创造浪漫的爱情故事。' },
    leo: { score: 65, type: '需要理解', text: '双鱼的柔弱与狮子的强势需要温柔对待。用爱保护对方的柔软。' },
    virgo: { score: 65, type: '需要理解', text: '双鱼的感性与处女的理性需要调和。学会理解彼此的不同世界。' },
    libra: { score: 75, type: '良好配对', text: '水象的温柔与风象的优雅可以互补。建立和谐而温馨的关系。' },
    scorpio: { score: 85, type: '默契十足', text: '两个水象星座的梦幻组合！情感丰富，直觉敏锐，能够创造浪漫的爱情故事。' },
    sagittarius: { score: 65, type: '需要理解', text: '双鱼的敏感与射手的直接需要温柔对待。用爱和耐心建立连接。' },
    capricorn: { score: 70, type: '需要调和', text: '双鱼的感性与摩羯的理性需要调和。学会理解彼此的不同世界。' },
    aquarius: { score: 75, type: '良好配对', text: '水象的梦幻与风象的独特是有趣的组合。能够创造浪漫的爱情故事。' },
    pisces: { score: 75, type: '梦幻配对', text: '两个水象星座在一起，情感丰富。但也可能过于梦幻，需要学会面对现实。' }
  }
}

export const getCompatibility = (sign1, sign2) => {
  if (!compatibilityMatrix[sign1] || !compatibilityMatrix[sign1][sign2]) {
    return {
      score: 70,
      type: '一般配对',
      text: '两个星座的组合需要更多的理解和沟通。学会欣赏对方的差异，互相包容。'
    }
  }
  return compatibilityMatrix[sign1][sign2]
}

export const getAllConstellations = () => constellations

export const getCompatibilityLevel = (score) => {
  if (score >= 90) return { level: '天作之合', color: '#ffd700', icon: '🌟' }
  if (score >= 80) return { level: '默契十足', color: '#ff6b6b', icon: '❤️' }
  if (score >= 70) return { level: '良好配对', color: '#4ecdc4', icon: '💚' }
  if (score >= 60) return { level: '需要努力', color: '#feca57', icon: '💛' }
  return { level: '多多沟通', color: '#ee5a6f', icon: '💔' }
}
