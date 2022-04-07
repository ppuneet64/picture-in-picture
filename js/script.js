const actionBtn = document.getElementById('button')
const videoEl = document.getElementById('video')

const selectMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoEl.srcObject = mediaStream
        videoEl.onloadedmetadata = () => {
            videoEl.play()
        }
    } catch (error) {
        console.log(error);
    }
}
actionBtn.addEventListener("click", async () => {
    actionBtn.disable = true
    await videoEl.requestPictureInPicture()
    actionBtn.disable = false
})
selectMediaStream()