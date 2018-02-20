Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _applyLayout=require('../../modules/applyLayout');var _applyLayout2=_interopRequireDefault(_applyLayout);var _applyNativeMethods=require('../../modules/applyNativeMethods');var _applyNativeMethods2=_interopRequireDefault(_applyNativeMethods);var _propTypes=require('prop-types');var _react=require('react');var _createElement=require('../../modules/createElement');var _createElement2=_interopRequireDefault(_createElement);var _StyleSheet=require('../../apis/StyleSheet');var _StyleSheet2=_interopRequireDefault(_StyleSheet);var _TextPropTypes=require('./TextPropTypes');var _TextPropTypes2=_interopRequireDefault(_TextPropTypes);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Text=function(_Component){_inherits(Text,_Component);function Text(){_classCallCheck(this,Text);return _possibleConstructorReturn(this,(Text.__proto__||Object.getPrototypeOf(Text)).apply(this,arguments));}_createClass(Text,[{key:'getChildContext',value:function getChildContext(){return{isInAParentText:true};}},{key:'render',value:function render(){var _props=this.props,dir=_props.dir,numberOfLines=_props.numberOfLines,onPress=_props.onPress,selectable=_props.selectable,style=_props.style,adjustsFontSizeToFit=_props.adjustsFontSizeToFit,allowFontScaling=_props.allowFontScaling,ellipsizeMode=_props.ellipsizeMode,lineBreakMode=_props.lineBreakMode,minimumFontScale=_props.minimumFontScale,onLayout=_props.onLayout,suppressHighlighting=_props.suppressHighlighting,otherProps=_objectWithoutProperties(_props,['dir','numberOfLines','onPress','selectable','style','adjustsFontSizeToFit','allowFontScaling','ellipsizeMode','lineBreakMode','minimumFontScale','onLayout','suppressHighlighting']);var isInAParentText=this.context.isInAParentText;if(onPress){otherProps.accessible=true;otherProps.onClick=onPress;otherProps.onKeyDown=this._createEnterHandler(onPress);}otherProps.dir=dir!==undefined?dir:'auto';otherProps.style=[styles.initial,this.context.isInAParentText===true&&styles.isInAParentText,style,selectable===false&&styles.notSelectable,numberOfLines===1&&styles.singleLineStyle,onPress&&styles.pressable];var component=isInAParentText?'span':'div';return(0,_createElement2.default)(component,otherProps);}},{key:'_createEnterHandler',value:function _createEnterHandler(fn){return function(e){if(e.keyCode===13){fn&&fn(e);}};}}]);return Text;}(_react.Component);Text.displayName='Text';Text.childContextTypes={isInAParentText:_propTypes.bool};Text.contextTypes={isInAParentText:_propTypes.bool};Text.propTypes=process.env.NODE_ENV!=="production"?_TextPropTypes2.default:{};var styles=_StyleSheet2.default.create({initial:{borderWidth:0,boxSizing:'border-box',color:'inherit',display:'inline',font:'inherit',fontFamily:'System',fontSize:14,margin:0,padding:0,textDecorationLine:'none',whiteSpace:'pre-wrap',wordWrap:'break-word'},isInAParentText:{fontFamily:'inherit',fontSize:'inherit',whiteSpace:'inherit'},notSelectable:{userSelect:'none'},pressable:{cursor:'pointer'},singleLineStyle:{maxWidth:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}});exports.default=(0,_applyLayout2.default)((0,_applyNativeMethods2.default)(Text));