document.getElementById('recommendBtn').addEventListener('click', function() {  
    const input = document.getElementById('emojiInput').value;  
    const resultsDiv = document.getElementById('emojiResults');  
    resultsDiv.innerHTML = '';  
    // 模拟表情包推荐逻辑  
    const emojis = [  
        { text: '笑', url: 'path/to/laugh.png' },  
        { text: '哭', url: 'path/to/cry.png' },  
        { text: '爱心', url: 'path/to/love.png' }  
    ];  
    const filteredEmojis = emojis.filter(emoji => emoji.text.includes(input));  
    filteredEmojis.forEach(emoji => {  
        const img = document.createElement('img');  
        img.src = emoji.url;  
        img.alt = emoji.text;  
        resultsDiv.appendChild(img);  
    });  
});
