var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.messageRepository=void 0;var _api=_interopRequireDefault(require("./api"));var _MessageRepository=_interopRequireDefault(require("./MessageRepository"));var messageRepository=new _MessageRepository.default(_api.default);exports.messageRepository=messageRepository;