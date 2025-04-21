# ZH-du - 本地AI图像生成器

## 功能特性
- 基于Stable Diffusion的本地AI生图
- 无需API密钥，完全免费
- 支持中文提示词
- 可下载生成结果

## 使用前准备
1. 安装Python 3.10+
2. 安装Stable Diffusion WebUI
3. 启动WebUI服务(默认端口7860)

## 快速开始
1. 克隆本仓库
2. 打开index.html
3. 输入提示词并点击"生成图像"

## 技术说明
- 前端: HTML/CSS/JavaScript
- 后端: Stable Diffusion WebUI本地服务
- 通信: 通过fetch API调用本地7860端口

## 注意事项
1. 确保Stable Diffusion WebUI已启动
2. 首次生成可能需要较长时间
3. 显存建议4GB以上