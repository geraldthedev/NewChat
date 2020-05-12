const socket = io('http://localhost:5000'),
        chatForm = document.getElementById('message'),
        chatBox= document.getElementById('chatBox'),
        storyWindow = document.getElementById('story'),
        packet = document.getElementById('mess');


socket.on('new islander', (data)=>{
    showStory(data)
});

socket.on('chat-message', (data)=>{
showMessage(data)    

});

chatForm.addEventListener('submit', e=>{
    e.preventDefault()
    const formData = packet.value
    socket.emit('chat-message', formData)
})

showMessage=(formData)=>{
    const bubble = document.createElement('div')
    bubble.innerHTML= formData
    chatBox.append(bubble)


}

showStory=(data)=>{
    const plot = document.createElement('div')
    plot.innerHTML = data
    storyWindow.append(plot)

}