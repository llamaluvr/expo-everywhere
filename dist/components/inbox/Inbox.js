var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _lodash=require("lodash");var _InboxItem=_interopRequireDefault(require("./InboxItem"));var _common=require("../common");var _commonStyles=require("../../config/common-styles");var _jsxFileName="/Users/keith/Documents/GitHub/expo-everywhere/app/components/inbox/Inbox.js";var Inbox=function Inbox(_ref){var messages=_ref.messages,onPressMessage=_ref.onPressMessage,isLoading=_ref.isLoading,onRefresh=_ref.onRefresh;var sections=[];console.log(messages);if(messages.length!==0){var newItems=(0,_lodash.sortBy)(messages.filter(function(i){return i.isNew;}),function(m){return m.date;}).reverse();var oldItems=(0,_lodash.sortBy)(messages.filter(function(i){return!i.isNew;}),function(m){return m.date;}).reverse();sections=[{title:'New Items',data:newItems},{title:'Not-so-new Items',data:oldItems}];}return _react.default.createElement(_reactNative.SectionList,{style:{backgroundColor:_commonStyles.colors.background},renderSectionHeader:function renderSectionHeader(_ref2){var title=_ref2.section.title;return _react.default.createElement(_common.SectionHeader,{title:title,__source:{fileName:_jsxFileName,lineNumber:26,columnNumber:56}});},sections:sections,keyExtractor:function keyExtractor(message){return message.id;},renderItem:function renderItem(_ref3){var item=_ref3.item;return _react.default.createElement(_InboxItem.default,{message:item,onPress:onPressMessage,__source:{fileName:_jsxFileName,lineNumber:29,columnNumber:33}});},ItemSeparatorComponent:_common.ItemSeparator,onRefresh:onRefresh,refreshing:isLoading,__source:{fileName:_jsxFileName,lineNumber:24,columnNumber:5}});};var _default=Inbox;exports.default=_default;