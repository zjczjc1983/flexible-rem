(function() {
  // 设计稿宽度
  var psWidth = PS_WIDTH || 750
  // 屏幕宽度
  var screenWidth = document.documentElement.clientWidth * 2
  // 缩放比例
  document.documentElement.style.fontSize = screenWidth / psWidth * 100 + 'px'
})()