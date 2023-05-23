// MultiChatSocket, web socket lets user connect to all chats that the user has
// MultiChatWindow, UI that unfolds and lets user type messages, see new messages, etc
// useMultiChatLogic, state management that makes the app work
import { PrettyChatWindow } from 'react-chat-engine-pretty'
// import { PrettyChatWindow } from 'react-chat-engine-pretty';

// props have the username and secret
const ChatsPage = (props) => {
    return(
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='bb62deb6-64e1-4431-8882-122bd503af39'
                username={props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage;
