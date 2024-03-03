// 欢迎信息
console.log("Take control of your health and wellness journey with our comprehensive health tracker!");

// 导入健康跟踪器模块
const healthTracker = require("./healthTracker");

// 监控健身目标
healthTracker.setFitnessGoal("lose_weight", {
  targetWeight: 70, // 目标体重：70公斤
  targetDate: "2024-12-31" // 目标达成日期：2024年12月31日
});

// 跟踪营养摄入
healthTracker.trackNutrition({
  calories: 2000, // 每日摄入卡路里
  protein: 100,   // 每日摄入蛋白质（克）
  carbs: 300,     // 每日摄入碳水化合物（克）
  fat: 60         // 每日摄入脂肪（克）
});

// 检查健康状况
const healthStatus = healthTracker.checkHealth();
console.log("Health status:", healthStatus);

// 保持健康动力
healthTracker.stayMotivated();

// 执行其他操作
console.log("Stay motivated to live a healthier lifestyle with our health tracker!");
