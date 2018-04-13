'use strict'

import { Toast } from 'mint-ui'

/**
 * 从localStorage获取对象.
 * @param  {String}  key
 * @return {Object}
 */
export const getLocalObject = key => {
  let v = localStorage.getItem(key)
  try {
    v = JSON.parse(v)
  } catch (err) {
    v = null
  }
  return v
}

/**
 * 保存对象到localStorage.
 * @param  {String}  key
 * @param  {Object}  obj
 */
export const setLocalObject = (key, obj) => {
  let v = JSON.stringify(obj)
  localStorage.setItem(key, v)
}

/**
 * 链接单击事件统计.
 * @param  {Object}         vm        Vue组件
 * @param  {String}         category  类型: 图标/文章/广告/链接...
 * @param  {String}         name      名称
 * @param  {String/Object}  location  链接
 */
export const clickAnalytics = (vm, category, name, location) => {
  const action = 'click'
  const link = typeof (location) === 'object' ? location.name : location
  try {
    // 事件统计
    window._hmt.push([
      '_trackEvent',
      category,
      action,
      name,
      link
    ])
    vm.$ga.event({
      eventCategory: category,
      eventAction: action,
      eventLabel: name,
      eventValue: link
    })
  } finally {
    // 跳转
    if (link === '[empty]') {
      Toast({
        message: '新功能很快跟大家见面啦~',
        duration: 3000
      })
    } else if (link) {
      vm.$router.push(location)
    }
  }
}

/**
 * 标准算法(5分制) - 广大, 华师等.
 * @param  {String} score 成绩
 * @return {Float}        绩点
 */
export const standardGP = score => {
  let GP = 0
  if (score === '优') {
    GP = 4.5
  } else if (score === '良') {
    GP = 3.5
  } else if (score === '中') {
    GP = 2.5
  } else if (score === '及格') {
    GP = 1.5
  } else if (score === '不及格') {
    GP = 0
  } else if (score < 60) {
    GP = 0
  } else {
    GP = (score - 50) * 0.1
  }
  return GP
}

/**
 * 广外算法 - 学生手册
 * @param  {String} score 成绩
 * @return {Float}        绩点
 */
export const gdufsGP = score => {
  let GP = 0
  if (score === 'A+') {
    GP = 4.0
  } else if (score === 'A') {
    GP = 4.0
  } else if (score === 'A-') {
    GP = 3.7
  } else if (score === 'B+') {
    GP = 3.3
  } else if (score === 'B') {
    GP = 3.0
  } else if (score === 'B-') {
    GP = 2.7
  } else if (score === 'C+') {
    GP = 2.3
  } else if (score === 'C') {
    GP = 2.0
  } else if (score === 'C-') {
    GP = 1.7
  } else if (score === 'D') {
    GP = 1.3
  } else if (score === 'D-') {
    GP = 1.0
  } else if (score === '优') {
    GP = (4.0 + 3.7) * 0.5
  } else if (score === '良') {
    GP = (3.3 + 3.0 + 2.7) / 3
  } else if (score === '中') {
    GP = (2.3 + 2.0) * 0.5
  } else if (score === '及格') {
    GP = (1.7 + 1.3 + 1.0) / 3
  } else if (score === '不及格') {
    GP = 0
  } else if (score >= 90) {
    GP = 4.0
  } else if (score >= 85 && score < 90) {
    GP = 3.7
  } else if (score >= 82 && score < 85) {
    GP = 3.3
  } else if (score >= 78 && score < 82) {
    GP = 3.0
  } else if (score >= 75 && score < 78) {
    GP = 2.7
  } else if (score >= 71 && score < 75) {
    GP = 2.3
  } else if (score >= 66 && score < 71) {
    GP = 2.0
  } else if (score >= 62 && score < 66) {
    GP = 1.7
  } else if (parseInt(score) === 61) {
    GP = 1.3
  } else if (parseInt(score) === 60) {
    GP = 1.0
  } else {
    GP = 0
  }
  return GP
}

/**
 * 华工算法
 * @link   https://www.zhihu.com/question/36307085
 * @param  {String} score 成绩
 * @return {Float}        绩点
 */
export const scutGP = score => {
  score = score.replace('%', '')
  let GP = 0
  if (score === '通过' || score === 'P') {
    GP = 3.0
  } else if (score === '不通过' || score === 'F') {
    GP = 0
  } else if (score === '优秀') {
    GP = 4.0
  } else if (score === '良好') {
    GP = 3.7
  } else if (score === '中等') {
    GP = 2.7
  } else if (score === '及格') {
    GP = 1.7
  } else if (score === '不及格') {
    GP = 0
  } else if (score <= 20 || score === 'A') {
    GP = 4.0
  } else if ((score > 20 && score <= 35) || score === 'B+') {
    GP = 3.7
  } else if ((score > 35 && score <= 50) || score === 'B') {
    GP = 3.3
  } else if ((score > 50 && score <= 60) || score === 'B-') {
    GP = 3.0
  } else if ((score > 60 && score <= 70) || score === 'C+') {
    GP = 2.7
  } else if ((score > 70 && score <= 80) || score === 'C') {
    GP = 2.3
  } else if ((score > 80 && score <= 90) || score === 'C-') {
    GP = 2.0
  } else if (score > 90 || score === 'D') {
    GP = 1.7
  }
  return GP
}

/**
 * 计算平均学分绩点
 * @param  {Array}   items      成绩列表
 * @param  {String}  scoreRules 成绩绩点转换规则
 * @return {String}             绩点
 */
export const calcGPA = (items, scoreRules) => {
  if (items.length <= 0) {
    return '?'
  }
  if (scoreRules === 'standardGP') {
    scoreRules = standardGP
  } else if (scoreRules === 'gdufsGP') {
    scoreRules = gdufsGP
  } else if (scoreRules === 'scutGP') {
    scoreRules = scutGP
  } else {
    scoreRules = standardGP
  }
  let points = 0
  let credits = 0
  items.forEach(item => {
    if (!item.point) {
      item.point = scoreRules(item.score)
    }
    points += parseFloat(item.point * item.credit)
    credits += parseFloat(item.credit)
  })
  let gpa = (points / credits).toFixed(2)
  return isNaN(gpa) ? '?' : gpa
}

/**
 * 有趣地显示GPA
 * @param  {String/Number}  value  GPA
 * @return {String}
 */
export const GPAtext = (value) => {
  let text = ''
  if (value === '?') {
    text = '-'
  } else if (parseFloat(value) < 1) {
    text = '试卷的打开方式不对吗？'
  } else if (value < 1.5) {
    text = '这都不是事儿~！'
  } else if (value < 2) {
    text = '绝地反击的节奏！'
  } else if (value < 2.5) {
    text = '一定是试题太难了！'
  } else if (value < 3) {
    text = '加把劲儿啊骚年!'
  } else if (value < 3.5) {
    text = '下一次拿个超神！'
  } else if (value < 4) {
    text = '哎哟，溜得很嘛！'
  } else if (value < 4.5) {
    text = '真学霸不解释！'
  } else if (value < 5) {
    text = '学神你秒杀众生了！'
  } else {
    text = '完美！'
  }
  return text
}
