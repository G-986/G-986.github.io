// 1. 加载核心模块
const express = require('express');
const path = require('path');

// 2. 创建 Express 实例
const app = express();

// 3. 设置静态资源托管（关键步骤）
app.use(express.static('Web && Assemblyimg')); 
/* 作用：
   - 自动托管 public 目录下的所有文件
   - 可通过 URL 直接访问（如 http://localhost:3000/style.css）
   - 如果HTML中有 <link href="style.css"> 将会自动找到该文件
*/

// 4. 定义主路由
app.get('/', (req, res) => {
  // 发送HTML文件给客户端
  res.sendFile(path.join(__dirname, 'your-file.html')); 
  /* 注意：
     - __dirname 表示当前文件所在目录的绝对路径
     - path.join() 用于兼容不同操作系统的路径格式
     - 必须替换 your-file.html 为实际文件名
  */
});

// 5. 处理404页面（可选增强功能）
app.use((req, res) => {
  res.status(404).send('<h1>页面不存在</h1>');
});

// 6. 设置端口并启动服务器
const PORT = process.env.PORT || 3000; // 支持环境变量指定端口
app.listen(PORT, () => {
  console.log(`✅ 服务已启动: http://localhost:${PORT}`);
});
