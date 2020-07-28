import React, { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import Inbox from "../components/inbox";
import { messageRepository } from "../stores/instances";
import ChatScreen from "./ChatScreen";

function WidescreenInbox({ navigation }) {
  // setup state - list of inbox items and
  const [isLoading, setIsLoading] = useState(false);
  const [inboxItems, setInboxItems] = useState([]);
  const [messageId, setMessageId] = useState(null);

  // refresh - called on first load and whenever you pull down on the list
  const onRefresh = useCallback(() => {
    async function onRefreshAsync() {
      setIsLoading(true);
      const newInboxItems = await messageRepository.getInboxItems();
      setInboxItems(newInboxItems);
      setIsLoading(false);
    }
    onRefreshAsync();
  }, []);

  useEffect(onRefresh, []);

  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Inbox
          messages={inboxItems}
          isLoading={isLoading}
          onRefresh={onRefresh}
          onPressMessage={(id) => setMessageId(id)}
        />
      </View>
      <View style={{ flex: 2 }}>
        {messageId && <ChatScreen route={{ params: { messageId } }} />}
      </View>
    </View>
  );
}

export default WidescreenInbox;
