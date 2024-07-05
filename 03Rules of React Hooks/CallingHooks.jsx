// Only call Hooks from React functions 
// Don’t call Hooks from regular JavaScript functions. Instead, you can:

// ✅ Call Hooks from React function components.
// ✅ Call Hooks from custom Hooks.



function FriendList() {
    const [onlineStatus, setOnlineStatus] = useOnlineStatus(); // ✅
  }
  
  function setOnlineStatus() { // ❌ Not a component or custom Hook!
    const [onlineStatus, setOnlineStatus] = useOnlineStatus();
  }
  