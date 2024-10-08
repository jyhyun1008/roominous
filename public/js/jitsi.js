const domain = 'hello.pointless.chat';
const options = {
    roomName: `mooumzip-jitsi-room${location.pathname.split('/')[1]}`,
    parentNode: document.querySelector('#jitsi'),
    lang: 'ko',
    userInfo: {
        displayName: localStorage.getItem('signinName')
    }
};

function jitsiStart() {
    jitsiEnd()
    document.querySelector('#jitsibox').style.display='flex'
    const JITSIAPI = new JitsiMeetExternalAPI(domain, options)
    document.querySelector('#boardbox').style.display='none'
    document.querySelector('#feedbox').style.display='none'
}

function jitsiEnd() {
    document.querySelector('#jitsi').innerHTML = ''
    document.querySelector('#jitsibox').style.display='none'
    document.querySelector('#feedbox').style.display='block'
}