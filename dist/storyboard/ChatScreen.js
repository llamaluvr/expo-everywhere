var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard=require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _regenerator=_interopRequireDefault(require("@babel/runtime/regenerator"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _chat=_interopRequireDefault(require("../components/chat"));var _common=require("../components/common");var _instances=require("../stores/instances");var _jsxFileName="/Users/keith/Documents/GitHub/expo-everywhere/app/storyboard/ChatScreen.js";function ChatScreen(_ref){var navigation=_ref.navigation,route=_ref.route;var _useState=(0,_react.useState)(false),_useState2=(0,_slicedToArray2.default)(_useState,2),isLoading=_useState2[0],setIsLoading=_useState2[1];var _useState3=(0,_react.useState)([]),_useState4=(0,_slicedToArray2.default)(_useState3,2),messages=_useState4[0],setMessages=_useState4[1];var onRefresh=(0,_react.useCallback)(function(){function onRefreshAsync(){var messages;return _regenerator.default.async(function onRefreshAsync$(_context){while(1){switch(_context.prev=_context.next){case 0:setIsLoading(true);_context.next=3;return _regenerator.default.awrap(_instances.messageRepository.getMessages(route.params.messageId));case 3:messages=_context.sent;setMessages(messages);setIsLoading(false);case 6:case"end":return _context.stop();}}},null,null,null,Promise);}onRefreshAsync();},[]);(0,_react.useEffect)(onRefresh,[]);return _react.default.createElement(_reactNative.View,{style:{flex:1},__source:{fileName:_jsxFileName,lineNumber:34,columnNumber:5}},_react.default.createElement(_common.LoadingWrapper,{isLoading:isLoading,__source:{fileName:_jsxFileName,lineNumber:35,columnNumber:7}},_react.default.createElement(_chat.default,{messages:messages,onSendMessage:function onSendMessage(message){var newMessages=messages.slice();newMessages.push({id:messages.length,userType:'you',text:message,date:new Date(),user:'Your Name'});setMessages(newMessages);},__source:{fileName:_jsxFileName,lineNumber:36,columnNumber:9}})));}var _default=ChatScreen;exports.default=_default;