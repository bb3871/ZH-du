// 初始化元素
const promptInput = document.getElementById('prompt-input');
const generateBtn = document.getElementById('generate-btn');
const downloadBtn = document.getElementById('download-btn');
const clearBtn = document.getElementById('clear-btn');
const imageResult = document.getElementById('image-result');

// 生成图像函数
async function generateImage() {
    const prompt = promptInput.value.trim();
    if (!prompt) {
        alert('请输入图像描述');
        return;
    }

    generateBtn.disabled = true;
    generateBtn.textContent = '生成中...';
    imageResult.innerHTML = '<p>正在生成图像...</p>';

    try {
        // 这里需要替换为实际的AI图像生成API调用
        // 示例代码 - 实际使用时需要替换为真实的API调用
        const response = await mockAIImageGeneration(prompt);
        
        // 显示生成的图像
        const img = document.createElement('img');
        img.src = response.imageUrl;
        img.alt = 'AI生成的图像: ' + prompt;
        img.style.maxWidth = '100%';
        img.style.maxHeight = '400px';
        imageResult.innerHTML = '';
        imageResult.appendChild(img);
        
        downloadBtn.disabled = false;
    } catch (error) {
        console.error('生成图像失败:', error);
        imageResult.innerHTML = '<p>生成失败，请重试</p>';
    } finally {
        generateBtn.disabled = false;
        generateBtn.textContent = '生成图像';
    }
}

// 模拟AI图像生成API
function mockAIImageGeneration(prompt) {
    return new Promise((resolve) => {
        setTimeout(() => {
            // 这只是模拟 - 实际应用中应该调用真实的API
            resolve({
                imageUrl: 'https://via.placeholder.com/512x512.png?text=' + 
                         encodeURIComponent('AI生成: ' + prompt.substring(0, 20))
            });
        }, 2000);
    });
}

// 下载图像
function downloadImage() {
    const img = imageResult.querySelector('img');
    if (!img) return;
    
    const link = document.createElement('a');
    link.href = img.src;
    link.download = 'ai-generated-image.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// 清除结果
function clearAll() {
    promptInput.value = '';
    imageResult.innerHTML = '<p>生成的图像将显示在这里</p>';
    downloadBtn.disabled = true;
}

// 事件监听
generateBtn.addEventListener('click', generateImage);
downloadBtn.addEventListener('click', downloadImage);
clearBtn.addEventListener('click', clearAll);