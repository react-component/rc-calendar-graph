(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) =>
    function __require() {
      return (
        mod ||
          (0, cb[__getOwnPropNames(cb)[0]])(
            (mod = { exports: {} }).exports,
            mod
          ),
        mod.exports
      );
    };
  var __copyProps = (to, from, except, desc) => {
    if ((from && typeof from === 'object') || typeof from === 'function') {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
            get: () => from[key],
            enumerable:
              !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
          });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (
    (target = mod != null ? __create(__getProtoOf(mod)) : {}),
    __copyProps(
      // If the importer is in node compatibility mode or this is not an ESM
      // file that has been converted to a CommonJS file using a Babel-
      // compatible transform (i.e. "__esModule" has not been set), then set
      // "default" to the CommonJS "module.exports" for node compatibility.
      isNodeMode || !mod || !mod.__esModule
        ? __defProp(target, 'default', { value: mod, enumerable: true })
        : target,
      mod
    )
  );

  // node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js
  var require_react_development = __commonJS({
    'node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js'(
      exports,
      module
    ) {
      'use strict';
      if (true) {
        (function () {
          'use strict';
          if (
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
              'function'
          ) {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(
              new Error()
            );
          }
          var ReactVersion = '18.2.0';
          var REACT_ELEMENT_TYPE = Symbol.for('react.element');
          var REACT_PORTAL_TYPE = Symbol.for('react.portal');
          var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
          var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
          var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
          var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
          var REACT_CONTEXT_TYPE = Symbol.for('react.context');
          var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
          var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
          var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
          var REACT_MEMO_TYPE = Symbol.for('react.memo');
          var REACT_LAZY_TYPE = Symbol.for('react.lazy');
          var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
          var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
          var FAUX_ITERATOR_SYMBOL = '@@iterator';
          function getIteratorFn(maybeIterable) {
            if (maybeIterable === null || typeof maybeIterable !== 'object') {
              return null;
            }
            var maybeIterator =
              (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
              maybeIterable[FAUX_ITERATOR_SYMBOL];
            if (typeof maybeIterator === 'function') {
              return maybeIterator;
            }
            return null;
          }
          var ReactCurrentDispatcher = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null,
          };
          var ReactCurrentBatchConfig = {
            transition: null,
          };
          var ReactCurrentActQueue = {
            current: null,
            // Used to reproduce behavior of `batchedUpdates` in legacy mode.
            isBatchingLegacy: false,
            didScheduleLegacyUpdate: false,
          };
          var ReactCurrentOwner = {
            /**
             * @internal
             * @type {ReactComponent}
             */
            current: null,
          };
          var ReactDebugCurrentFrame = {};
          var currentExtraStackFrame = null;
          function setExtraStackFrame(stack) {
            {
              currentExtraStackFrame = stack;
            }
          }
          {
            ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
              {
                currentExtraStackFrame = stack;
              }
            };
            ReactDebugCurrentFrame.getCurrentStack = null;
            ReactDebugCurrentFrame.getStackAddendum = function () {
              var stack = '';
              if (currentExtraStackFrame) {
                stack += currentExtraStackFrame;
              }
              var impl = ReactDebugCurrentFrame.getCurrentStack;
              if (impl) {
                stack += impl() || '';
              }
              return stack;
            };
          }
          var enableScopeAPI = false;
          var enableCacheElement = false;
          var enableTransitionTracing = false;
          var enableLegacyHidden = false;
          var enableDebugTracing = false;
          var ReactSharedInternals = {
            ReactCurrentDispatcher,
            ReactCurrentBatchConfig,
            ReactCurrentOwner,
          };
          {
            ReactSharedInternals.ReactDebugCurrentFrame =
              ReactDebugCurrentFrame;
            ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
          }
          function warn(format) {
            {
              {
                for (
                  var _len = arguments.length,
                    args = new Array(_len > 1 ? _len - 1 : 0),
                    _key = 1;
                  _key < _len;
                  _key++
                ) {
                  args[_key - 1] = arguments[_key];
                }
                printWarning('warn', format, args);
              }
            }
          }
          function error(format) {
            {
              {
                for (
                  var _len2 = arguments.length,
                    args = new Array(_len2 > 1 ? _len2 - 1 : 0),
                    _key2 = 1;
                  _key2 < _len2;
                  _key2++
                ) {
                  args[_key2 - 1] = arguments[_key2];
                }
                printWarning('error', format, args);
              }
            }
          }
          function printWarning(level, format, args) {
            {
              var ReactDebugCurrentFrame2 =
                ReactSharedInternals.ReactDebugCurrentFrame;
              var stack = ReactDebugCurrentFrame2.getStackAddendum();
              if (stack !== '') {
                format += '%s';
                args = args.concat([stack]);
              }
              var argsWithFormat = args.map(function (item) {
                return String(item);
              });
              argsWithFormat.unshift('Warning: ' + format);
              Function.prototype.apply.call(
                console[level],
                console,
                argsWithFormat
              );
            }
          }
          var didWarnStateUpdateForUnmountedComponent = {};
          function warnNoop(publicInstance, callerName) {
            {
              var _constructor = publicInstance.constructor;
              var componentName =
                (_constructor &&
                  (_constructor.displayName || _constructor.name)) ||
                'ReactClass';
              var warningKey = componentName + '.' + callerName;
              if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
                return;
              }
              error(
                "Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",
                callerName,
                componentName
              );
              didWarnStateUpdateForUnmountedComponent[warningKey] = true;
            }
          }
          var ReactNoopUpdateQueue = {
            /**
             * Checks whether or not this composite component is mounted.
             * @param {ReactClass} publicInstance The instance we want to test.
             * @return {boolean} True if mounted, false otherwise.
             * @protected
             * @final
             */
            isMounted: function (publicInstance) {
              return false;
            },
            /**
             * Forces an update. This should only be invoked when it is known with
             * certainty that we are **not** in a DOM transaction.
             *
             * You may want to call this when you know that some deeper aspect of the
             * component's state has changed but `setState` was not called.
             *
             * This will not invoke `shouldComponentUpdate`, but it will invoke
             * `componentWillUpdate` and `componentDidUpdate`.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueForceUpdate: function (
              publicInstance,
              callback,
              callerName
            ) {
              warnNoop(publicInstance, 'forceUpdate');
            },
            /**
             * Replaces all of the state. Always use this or `setState` to mutate state.
             * You should treat `this.state` as immutable.
             *
             * There is no guarantee that `this.state` will be immediately updated, so
             * accessing `this.state` after calling this method may return the old value.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} completeState Next state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} callerName name of the calling function in the public API.
             * @internal
             */
            enqueueReplaceState: function (
              publicInstance,
              completeState,
              callback,
              callerName
            ) {
              warnNoop(publicInstance, 'replaceState');
            },
            /**
             * Sets a subset of the state. This only exists because _pendingState is
             * internal. This provides a merging strategy that is not available to deep
             * properties which is confusing. TODO: Expose pendingState or don't use it
             * during the merge.
             *
             * @param {ReactClass} publicInstance The instance that should rerender.
             * @param {object} partialState Next partial state to be merged with state.
             * @param {?function} callback Called after component is updated.
             * @param {?string} Name of the calling function in the public API.
             * @internal
             */
            enqueueSetState: function (
              publicInstance,
              partialState,
              callback,
              callerName
            ) {
              warnNoop(publicInstance, 'setState');
            },
          };
          var assign = Object.assign;
          var emptyObject = {};
          {
            Object.freeze(emptyObject);
          }
          function Component(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          Component.prototype.isReactComponent = {};
          Component.prototype.setState = function (partialState, callback) {
            if (
              typeof partialState !== 'object' &&
              typeof partialState !== 'function' &&
              partialState != null
            ) {
              throw new Error(
                'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
              );
            }
            this.updater.enqueueSetState(
              this,
              partialState,
              callback,
              'setState'
            );
          };
          Component.prototype.forceUpdate = function (callback) {
            this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
          };
          {
            var deprecatedAPIs = {
              isMounted: [
                'isMounted',
                'Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks.',
              ],
              replaceState: [
                'replaceState',
                'Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236).',
              ],
            };
            var defineDeprecationWarning = function (methodName, info) {
              Object.defineProperty(Component.prototype, methodName, {
                get: function () {
                  warn(
                    '%s(...) is deprecated in plain JavaScript React classes. %s',
                    info[0],
                    info[1]
                  );
                  return void 0;
                },
              });
            };
            for (var fnName in deprecatedAPIs) {
              if (deprecatedAPIs.hasOwnProperty(fnName)) {
                defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
              }
            }
          }
          function ComponentDummy() {}
          ComponentDummy.prototype = Component.prototype;
          function PureComponent(props, context, updater) {
            this.props = props;
            this.context = context;
            this.refs = emptyObject;
            this.updater = updater || ReactNoopUpdateQueue;
          }
          var pureComponentPrototype = (PureComponent.prototype =
            new ComponentDummy());
          pureComponentPrototype.constructor = PureComponent;
          assign(pureComponentPrototype, Component.prototype);
          pureComponentPrototype.isPureReactComponent = true;
          function createRef() {
            var refObject = {
              current: null,
            };
            {
              Object.seal(refObject);
            }
            return refObject;
          }
          var isArrayImpl = Array.isArray;
          function isArray(a) {
            return isArrayImpl(a);
          }
          function typeName(value) {
            {
              var hasToStringTag =
                typeof Symbol === 'function' && Symbol.toStringTag;
              var type =
                (hasToStringTag && value[Symbol.toStringTag]) ||
                value.constructor.name ||
                'Object';
              return type;
            }
          }
          function willCoercionThrow(value) {
            {
              try {
                testStringCoercion(value);
                return false;
              } catch (e) {
                return true;
              }
            }
          }
          function testStringCoercion(value) {
            return '' + value;
          }
          function checkKeyStringCoercion(value) {
            {
              if (willCoercionThrow(value)) {
                error(
                  'The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.',
                  typeName(value)
                );
                return testStringCoercion(value);
              }
            }
          }
          function getWrappedName(outerType, innerType, wrapperName) {
            var displayName = outerType.displayName;
            if (displayName) {
              return displayName;
            }
            var functionName = innerType.displayName || innerType.name || '';
            return functionName !== ''
              ? wrapperName + '(' + functionName + ')'
              : wrapperName;
          }
          function getContextName(type) {
            return type.displayName || 'Context';
          }
          function getComponentNameFromType(type) {
            if (type == null) {
              return null;
            }
            {
              if (typeof type.tag === 'number') {
                error(
                  'Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.'
                );
              }
            }
            if (typeof type === 'function') {
              return type.displayName || type.name || null;
            }
            if (typeof type === 'string') {
              return type;
            }
            switch (type) {
              case REACT_FRAGMENT_TYPE:
                return 'Fragment';
              case REACT_PORTAL_TYPE:
                return 'Portal';
              case REACT_PROFILER_TYPE:
                return 'Profiler';
              case REACT_STRICT_MODE_TYPE:
                return 'StrictMode';
              case REACT_SUSPENSE_TYPE:
                return 'Suspense';
              case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
            }
            if (typeof type === 'object') {
              switch (type.$$typeof) {
                case REACT_CONTEXT_TYPE:
                  var context = type;
                  return getContextName(context) + '.Consumer';
                case REACT_PROVIDER_TYPE:
                  var provider = type;
                  return getContextName(provider._context) + '.Provider';
                case REACT_FORWARD_REF_TYPE:
                  return getWrappedName(type, type.render, 'ForwardRef');
                case REACT_MEMO_TYPE:
                  var outerName = type.displayName || null;
                  if (outerName !== null) {
                    return outerName;
                  }
                  return getComponentNameFromType(type.type) || 'Memo';
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return getComponentNameFromType(init(payload));
                  } catch (x) {
                    return null;
                  }
                }
              }
            }
            return null;
          }
          var hasOwnProperty = Object.prototype.hasOwnProperty;
          var RESERVED_PROPS = {
            key: true,
            ref: true,
            __self: true,
            __source: true,
          };
          var specialPropKeyWarningShown,
            specialPropRefWarningShown,
            didWarnAboutStringRefs;
          {
            didWarnAboutStringRefs = {};
          }
          function hasValidRef(config) {
            {
              if (hasOwnProperty.call(config, 'ref')) {
                var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.ref !== void 0;
          }
          function hasValidKey(config) {
            {
              if (hasOwnProperty.call(config, 'key')) {
                var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
                if (getter && getter.isReactWarning) {
                  return false;
                }
              }
            }
            return config.key !== void 0;
          }
          function defineKeyPropWarningGetter(props, displayName) {
            var warnAboutAccessingKey = function () {
              {
                if (!specialPropKeyWarningShown) {
                  specialPropKeyWarningShown = true;
                  error(
                    '%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    displayName
                  );
                }
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, 'key', {
              get: warnAboutAccessingKey,
              configurable: true,
            });
          }
          function defineRefPropWarningGetter(props, displayName) {
            var warnAboutAccessingRef = function () {
              {
                if (!specialPropRefWarningShown) {
                  specialPropRefWarningShown = true;
                  error(
                    '%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)',
                    displayName
                  );
                }
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, 'ref', {
              get: warnAboutAccessingRef,
              configurable: true,
            });
          }
          function warnIfStringRefCannotBeAutoConverted(config) {
            {
              if (
                typeof config.ref === 'string' &&
                ReactCurrentOwner.current &&
                config.__self &&
                ReactCurrentOwner.current.stateNode !== config.__self
              ) {
                var componentName = getComponentNameFromType(
                  ReactCurrentOwner.current.type
                );
                if (!didWarnAboutStringRefs[componentName]) {
                  error(
                    'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                    componentName,
                    config.ref
                  );
                  didWarnAboutStringRefs[componentName] = true;
                }
              }
            }
          }
          var ReactElement = function (
            type,
            key,
            ref,
            self2,
            source,
            owner,
            props
          ) {
            var element = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: REACT_ELEMENT_TYPE,
              // Built-in properties that belong on the element
              type,
              key,
              ref,
              props,
              // Record the component responsible for creating this element.
              _owner: owner,
            };
            {
              element._store = {};
              Object.defineProperty(element._store, 'validated', {
                configurable: false,
                enumerable: false,
                writable: true,
                value: false,
              });
              Object.defineProperty(element, '_self', {
                configurable: false,
                enumerable: false,
                writable: false,
                value: self2,
              });
              Object.defineProperty(element, '_source', {
                configurable: false,
                enumerable: false,
                writable: false,
                value: source,
              });
              if (Object.freeze) {
                Object.freeze(element.props);
                Object.freeze(element);
              }
            }
            return element;
          };
          function createElement(type, config, children) {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            var self2 = null;
            var source = null;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                {
                  warnIfStringRefCannotBeAutoConverted(config);
                }
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = '' + config.key;
              }
              self2 = config.__self === void 0 ? null : config.__self;
              source = config.__source === void 0 ? null : config.__source;
              for (propName in config) {
                if (
                  hasOwnProperty.call(config, propName) &&
                  !RESERVED_PROPS.hasOwnProperty(propName)
                ) {
                  props[propName] = config[propName];
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              {
                if (Object.freeze) {
                  Object.freeze(childArray);
                }
              }
              props.children = childArray;
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            {
              if (key || ref) {
                var displayName =
                  typeof type === 'function'
                    ? type.displayName || type.name || 'Unknown'
                    : type;
                if (key) {
                  defineKeyPropWarningGetter(props, displayName);
                }
                if (ref) {
                  defineRefPropWarningGetter(props, displayName);
                }
              }
            }
            return ReactElement(
              type,
              key,
              ref,
              self2,
              source,
              ReactCurrentOwner.current,
              props
            );
          }
          function cloneAndReplaceKey(oldElement, newKey) {
            var newElement = ReactElement(
              oldElement.type,
              newKey,
              oldElement.ref,
              oldElement._self,
              oldElement._source,
              oldElement._owner,
              oldElement.props
            );
            return newElement;
          }
          function cloneElement(element, config, children) {
            if (element === null || element === void 0) {
              throw new Error(
                'React.cloneElement(...): The argument must be a React element, but you passed ' +
                  element +
                  '.'
              );
            }
            var propName;
            var props = assign({}, element.props);
            var key = element.key;
            var ref = element.ref;
            var self2 = element._self;
            var source = element._source;
            var owner = element._owner;
            if (config != null) {
              if (hasValidRef(config)) {
                ref = config.ref;
                owner = ReactCurrentOwner.current;
              }
              if (hasValidKey(config)) {
                {
                  checkKeyStringCoercion(config.key);
                }
                key = '' + config.key;
              }
              var defaultProps;
              if (element.type && element.type.defaultProps) {
                defaultProps = element.type.defaultProps;
              }
              for (propName in config) {
                if (
                  hasOwnProperty.call(config, propName) &&
                  !RESERVED_PROPS.hasOwnProperty(propName)
                ) {
                  if (config[propName] === void 0 && defaultProps !== void 0) {
                    props[propName] = defaultProps[propName];
                  } else {
                    props[propName] = config[propName];
                  }
                }
              }
            }
            var childrenLength = arguments.length - 2;
            if (childrenLength === 1) {
              props.children = children;
            } else if (childrenLength > 1) {
              var childArray = Array(childrenLength);
              for (var i = 0; i < childrenLength; i++) {
                childArray[i] = arguments[i + 2];
              }
              props.children = childArray;
            }
            return ReactElement(
              element.type,
              key,
              ref,
              self2,
              source,
              owner,
              props
            );
          }
          function isValidElement(object) {
            return (
              typeof object === 'object' &&
              object !== null &&
              object.$$typeof === REACT_ELEMENT_TYPE
            );
          }
          var SEPARATOR = '.';
          var SUBSEPARATOR = ':';
          function escape(key) {
            var escapeRegex = /[=:]/g;
            var escaperLookup = {
              '=': '=0',
              ':': '=2',
            };
            var escapedString = key.replace(escapeRegex, function (match) {
              return escaperLookup[match];
            });
            return '$' + escapedString;
          }
          var didWarnAboutMaps = false;
          var userProvidedKeyEscapeRegex = /\/+/g;
          function escapeUserProvidedKey(text) {
            return text.replace(userProvidedKeyEscapeRegex, '$&/');
          }
          function getElementKey(element, index) {
            if (
              typeof element === 'object' &&
              element !== null &&
              element.key != null
            ) {
              {
                checkKeyStringCoercion(element.key);
              }
              return escape('' + element.key);
            }
            return index.toString(36);
          }
          function mapIntoArray(
            children,
            array,
            escapedPrefix,
            nameSoFar,
            callback
          ) {
            var type = typeof children;
            if (type === 'undefined' || type === 'boolean') {
              children = null;
            }
            var invokeCallback = false;
            if (children === null) {
              invokeCallback = true;
            } else {
              switch (type) {
                case 'string':
                case 'number':
                  invokeCallback = true;
                  break;
                case 'object':
                  switch (children.$$typeof) {
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                      invokeCallback = true;
                  }
              }
            }
            if (invokeCallback) {
              var _child = children;
              var mappedChild = callback(_child);
              var childKey =
                nameSoFar === ''
                  ? SEPARATOR + getElementKey(_child, 0)
                  : nameSoFar;
              if (isArray(mappedChild)) {
                var escapedChildKey = '';
                if (childKey != null) {
                  escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                }
                mapIntoArray(
                  mappedChild,
                  array,
                  escapedChildKey,
                  '',
                  function (c) {
                    return c;
                  }
                );
              } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                  {
                    if (
                      mappedChild.key &&
                      (!_child || _child.key !== mappedChild.key)
                    ) {
                      checkKeyStringCoercion(mappedChild.key);
                    }
                  }
                  mappedChild = cloneAndReplaceKey(
                    mappedChild,
                    // Keep both the (mapped) and old keys if they differ, just as
                    // traverseAllChildren used to do for objects as children
                    escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                      (mappedChild.key &&
                      (!_child || _child.key !== mappedChild.key)
                        ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                          // eslint-disable-next-line react-internal/safe-string-coercion
                          escapeUserProvidedKey('' + mappedChild.key) + '/'
                        : '') +
                      childKey
                  );
                }
                array.push(mappedChild);
              }
              return 1;
            }
            var child;
            var nextName;
            var subtreeCount = 0;
            var nextNamePrefix =
              nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
            if (isArray(children)) {
              for (var i = 0; i < children.length; i++) {
                child = children[i];
                nextName = nextNamePrefix + getElementKey(child, i);
                subtreeCount += mapIntoArray(
                  child,
                  array,
                  escapedPrefix,
                  nextName,
                  callback
                );
              }
            } else {
              var iteratorFn = getIteratorFn(children);
              if (typeof iteratorFn === 'function') {
                var iterableChildren = children;
                {
                  if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) {
                      warn(
                        'Using Maps as children is not supported. Use an array of keyed ReactElements instead.'
                      );
                    }
                    didWarnAboutMaps = true;
                  }
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while (!(step = iterator.next()).done) {
                  child = step.value;
                  nextName = nextNamePrefix + getElementKey(child, ii++);
                  subtreeCount += mapIntoArray(
                    child,
                    array,
                    escapedPrefix,
                    nextName,
                    callback
                  );
                }
              } else if (type === 'object') {
                var childrenString = String(children);
                throw new Error(
                  'Objects are not valid as a React child (found: ' +
                    (childrenString === '[object Object]'
                      ? 'object with keys {' +
                        Object.keys(children).join(', ') +
                        '}'
                      : childrenString) +
                    '). If you meant to render a collection of children, use an array instead.'
                );
              }
            }
            return subtreeCount;
          }
          function mapChildren(children, func, context) {
            if (children == null) {
              return children;
            }
            var result = [];
            var count = 0;
            mapIntoArray(children, result, '', '', function (child) {
              return func.call(context, child, count++);
            });
            return result;
          }
          function countChildren(children) {
            var n = 0;
            mapChildren(children, function () {
              n++;
            });
            return n;
          }
          function forEachChildren(children, forEachFunc, forEachContext) {
            mapChildren(
              children,
              function () {
                forEachFunc.apply(this, arguments);
              },
              forEachContext
            );
          }
          function toArray(children) {
            return (
              mapChildren(children, function (child) {
                return child;
              }) || []
            );
          }
          function onlyChild(children) {
            if (!isValidElement(children)) {
              throw new Error(
                'React.Children.only expected to receive a single React element child.'
              );
            }
            return children;
          }
          function createContext(defaultValue) {
            var context = {
              $$typeof: REACT_CONTEXT_TYPE,
              // As a workaround to support multiple concurrent renderers, we categorize
              // some renderers as primary and others as secondary. We only expect
              // there to be two concurrent renderers at most: React Native (primary) and
              // Fabric (secondary); React DOM (primary) and React ART (secondary).
              // Secondary renderers store their context values on separate fields.
              _currentValue: defaultValue,
              _currentValue2: defaultValue,
              // Used to track how many concurrent renderers this context currently
              // supports within in a single renderer. Such as parallel server rendering.
              _threadCount: 0,
              // These are circular
              Provider: null,
              Consumer: null,
              // Add these to use same hidden class in VM as ServerContext
              _defaultValue: null,
              _globalName: null,
            };
            context.Provider = {
              $$typeof: REACT_PROVIDER_TYPE,
              _context: context,
            };
            var hasWarnedAboutUsingNestedContextConsumers = false;
            var hasWarnedAboutUsingConsumerProvider = false;
            var hasWarnedAboutDisplayNameOnConsumer = false;
            {
              var Consumer = {
                $$typeof: REACT_CONTEXT_TYPE,
                _context: context,
              };
              Object.defineProperties(Consumer, {
                Provider: {
                  get: function () {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                      hasWarnedAboutUsingConsumerProvider = true;
                      error(
                        'Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?'
                      );
                    }
                    return context.Provider;
                  },
                  set: function (_Provider) {
                    context.Provider = _Provider;
                  },
                },
                _currentValue: {
                  get: function () {
                    return context._currentValue;
                  },
                  set: function (_currentValue) {
                    context._currentValue = _currentValue;
                  },
                },
                _currentValue2: {
                  get: function () {
                    return context._currentValue2;
                  },
                  set: function (_currentValue2) {
                    context._currentValue2 = _currentValue2;
                  },
                },
                _threadCount: {
                  get: function () {
                    return context._threadCount;
                  },
                  set: function (_threadCount) {
                    context._threadCount = _threadCount;
                  },
                },
                Consumer: {
                  get: function () {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                      hasWarnedAboutUsingNestedContextConsumers = true;
                      error(
                        'Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?'
                      );
                    }
                    return context.Consumer;
                  },
                },
                displayName: {
                  get: function () {
                    return context.displayName;
                  },
                  set: function (displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                      warn(
                        "Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",
                        displayName
                      );
                      hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                  },
                },
              });
              context.Consumer = Consumer;
            }
            {
              context._currentRenderer = null;
              context._currentRenderer2 = null;
            }
            return context;
          }
          var Uninitialized = -1;
          var Pending = 0;
          var Resolved = 1;
          var Rejected = 2;
          function lazyInitializer(payload) {
            if (payload._status === Uninitialized) {
              var ctor = payload._result;
              var thenable = ctor();
              thenable.then(
                function (moduleObject2) {
                  if (
                    payload._status === Pending ||
                    payload._status === Uninitialized
                  ) {
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = moduleObject2;
                  }
                },
                function (error2) {
                  if (
                    payload._status === Pending ||
                    payload._status === Uninitialized
                  ) {
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error2;
                  }
                }
              );
              if (payload._status === Uninitialized) {
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
              }
            }
            if (payload._status === Resolved) {
              var moduleObject = payload._result;
              {
                if (moduleObject === void 0) {
                  error(
                    "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",
                    moduleObject
                  );
                }
              }
              {
                if (!('default' in moduleObject)) {
                  error(
                    "lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",
                    moduleObject
                  );
                }
              }
              return moduleObject.default;
            } else {
              throw payload._result;
            }
          }
          function lazy(ctor) {
            var payload = {
              // We use these fields to store the result.
              _status: Uninitialized,
              _result: ctor,
            };
            var lazyType = {
              $$typeof: REACT_LAZY_TYPE,
              _payload: payload,
              _init: lazyInitializer,
            };
            {
              var defaultProps;
              var propTypes;
              Object.defineProperties(lazyType, {
                defaultProps: {
                  configurable: true,
                  get: function () {
                    return defaultProps;
                  },
                  set: function (newDefaultProps) {
                    error(
                      'React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                    );
                    defaultProps = newDefaultProps;
                    Object.defineProperty(lazyType, 'defaultProps', {
                      enumerable: true,
                    });
                  },
                },
                propTypes: {
                  configurable: true,
                  get: function () {
                    return propTypes;
                  },
                  set: function (newPropTypes) {
                    error(
                      'React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.'
                    );
                    propTypes = newPropTypes;
                    Object.defineProperty(lazyType, 'propTypes', {
                      enumerable: true,
                    });
                  },
                },
              });
            }
            return lazyType;
          }
          function forwardRef(render) {
            {
              if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
                error(
                  'forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).'
                );
              } else if (typeof render !== 'function') {
                error(
                  'forwardRef requires a render function but was given %s.',
                  render === null ? 'null' : typeof render
                );
              } else {
                if (render.length !== 0 && render.length !== 2) {
                  error(
                    'forwardRef render functions accept exactly two parameters: props and ref. %s',
                    render.length === 1
                      ? 'Did you forget to use the ref parameter?'
                      : 'Any additional parameter will be undefined.'
                  );
                }
              }
              if (render != null) {
                if (render.defaultProps != null || render.propTypes != null) {
                  error(
                    'forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?'
                  );
                }
              }
            }
            var elementType = {
              $$typeof: REACT_FORWARD_REF_TYPE,
              render,
            };
            {
              var ownName;
              Object.defineProperty(elementType, 'displayName', {
                enumerable: false,
                configurable: true,
                get: function () {
                  return ownName;
                },
                set: function (name) {
                  ownName = name;
                  if (!render.name && !render.displayName) {
                    render.displayName = name;
                  }
                },
              });
            }
            return elementType;
          }
          var REACT_MODULE_REFERENCE;
          {
            REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
          }
          function isValidElementType(type) {
            if (typeof type === 'string' || typeof type === 'function') {
              return true;
            }
            if (
              type === REACT_FRAGMENT_TYPE ||
              type === REACT_PROFILER_TYPE ||
              enableDebugTracing ||
              type === REACT_STRICT_MODE_TYPE ||
              type === REACT_SUSPENSE_TYPE ||
              type === REACT_SUSPENSE_LIST_TYPE ||
              enableLegacyHidden ||
              type === REACT_OFFSCREEN_TYPE ||
              enableScopeAPI ||
              enableCacheElement ||
              enableTransitionTracing
            ) {
              return true;
            }
            if (typeof type === 'object' && type !== null) {
              if (
                type.$$typeof === REACT_LAZY_TYPE ||
                type.$$typeof === REACT_MEMO_TYPE ||
                type.$$typeof === REACT_PROVIDER_TYPE ||
                type.$$typeof === REACT_CONTEXT_TYPE ||
                type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
                // types supported by any Flight configuration anywhere since
                // we don't know which Flight build this will end up being used
                // with.
                type.$$typeof === REACT_MODULE_REFERENCE ||
                type.getModuleId !== void 0
              ) {
                return true;
              }
            }
            return false;
          }
          function memo(type, compare) {
            {
              if (!isValidElementType(type)) {
                error(
                  'memo: The first argument must be a component. Instead received: %s',
                  type === null ? 'null' : typeof type
                );
              }
            }
            var elementType = {
              $$typeof: REACT_MEMO_TYPE,
              type,
              compare: compare === void 0 ? null : compare,
            };
            {
              var ownName;
              Object.defineProperty(elementType, 'displayName', {
                enumerable: false,
                configurable: true,
                get: function () {
                  return ownName;
                },
                set: function (name) {
                  ownName = name;
                  if (!type.name && !type.displayName) {
                    type.displayName = name;
                  }
                },
              });
            }
            return elementType;
          }
          function resolveDispatcher() {
            var dispatcher = ReactCurrentDispatcher.current;
            {
              if (dispatcher === null) {
                error(
                  'Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.'
                );
              }
            }
            return dispatcher;
          }
          function useContext(Context) {
            var dispatcher = resolveDispatcher();
            {
              if (Context._context !== void 0) {
                var realContext = Context._context;
                if (realContext.Consumer === Context) {
                  error(
                    'Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?'
                  );
                } else if (realContext.Provider === Context) {
                  error(
                    'Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?'
                  );
                }
              }
            }
            return dispatcher.useContext(Context);
          }
          function useState(initialState) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useState(initialState);
          }
          function useReducer(reducer, initialArg, init) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useReducer(reducer, initialArg, init);
          }
          function useRef(initialValue) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useRef(initialValue);
          }
          function useEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useEffect(create, deps);
          }
          function useInsertionEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useInsertionEffect(create, deps);
          }
          function useLayoutEffect(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useLayoutEffect(create, deps);
          }
          function useCallback(callback, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useCallback(callback, deps);
          }
          function useMemo(create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useMemo(create, deps);
          }
          function useImperativeHandle(ref, create, deps) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useImperativeHandle(ref, create, deps);
          }
          function useDebugValue(value, formatterFn) {
            {
              var dispatcher = resolveDispatcher();
              return dispatcher.useDebugValue(value, formatterFn);
            }
          }
          function useTransition() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useTransition();
          }
          function useDeferredValue(value) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDeferredValue(value);
          }
          function useId() {
            var dispatcher = resolveDispatcher();
            return dispatcher.useId();
          }
          function useSyncExternalStore(
            subscribe,
            getSnapshot,
            getServerSnapshot
          ) {
            var dispatcher = resolveDispatcher();
            return dispatcher.useSyncExternalStore(
              subscribe,
              getSnapshot,
              getServerSnapshot
            );
          }
          var disabledDepth = 0;
          var prevLog;
          var prevInfo;
          var prevWarn;
          var prevError;
          var prevGroup;
          var prevGroupCollapsed;
          var prevGroupEnd;
          function disabledLog() {}
          disabledLog.__reactDisabledLog = true;
          function disableLogs() {
            {
              if (disabledDepth === 0) {
                prevLog = console.log;
                prevInfo = console.info;
                prevWarn = console.warn;
                prevError = console.error;
                prevGroup = console.group;
                prevGroupCollapsed = console.groupCollapsed;
                prevGroupEnd = console.groupEnd;
                var props = {
                  configurable: true,
                  enumerable: true,
                  value: disabledLog,
                  writable: true,
                };
                Object.defineProperties(console, {
                  info: props,
                  log: props,
                  warn: props,
                  error: props,
                  group: props,
                  groupCollapsed: props,
                  groupEnd: props,
                });
              }
              disabledDepth++;
            }
          }
          function reenableLogs() {
            {
              disabledDepth--;
              if (disabledDepth === 0) {
                var props = {
                  configurable: true,
                  enumerable: true,
                  writable: true,
                };
                Object.defineProperties(console, {
                  log: assign({}, props, {
                    value: prevLog,
                  }),
                  info: assign({}, props, {
                    value: prevInfo,
                  }),
                  warn: assign({}, props, {
                    value: prevWarn,
                  }),
                  error: assign({}, props, {
                    value: prevError,
                  }),
                  group: assign({}, props, {
                    value: prevGroup,
                  }),
                  groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed,
                  }),
                  groupEnd: assign({}, props, {
                    value: prevGroupEnd,
                  }),
                });
              }
              if (disabledDepth < 0) {
                error(
                  'disabledDepth fell below zero. This is a bug in React. Please file an issue.'
                );
              }
            }
          }
          var ReactCurrentDispatcher$1 =
            ReactSharedInternals.ReactCurrentDispatcher;
          var prefix;
          function describeBuiltInComponentFrame(name, source, ownerFn) {
            {
              if (prefix === void 0) {
                try {
                  throw Error();
                } catch (x) {
                  var match = x.stack.trim().match(/\n( *(at )?)/);
                  prefix = (match && match[1]) || '';
                }
              }
              return '\n' + prefix + name;
            }
          }
          var reentry = false;
          var componentFrameCache;
          {
            var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
            componentFrameCache = new PossiblyWeakMap();
          }
          function describeNativeComponentFrame(fn, construct) {
            if (!fn || reentry) {
              return '';
            }
            {
              var frame = componentFrameCache.get(fn);
              if (frame !== void 0) {
                return frame;
              }
            }
            var control;
            reentry = true;
            var previousPrepareStackTrace = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var previousDispatcher;
            {
              previousDispatcher = ReactCurrentDispatcher$1.current;
              ReactCurrentDispatcher$1.current = null;
              disableLogs();
            }
            try {
              if (construct) {
                var Fake = function () {
                  throw Error();
                };
                Object.defineProperty(Fake.prototype, 'props', {
                  set: function () {
                    throw Error();
                  },
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                  try {
                    Reflect.construct(Fake, []);
                  } catch (x) {
                    control = x;
                  }
                  Reflect.construct(fn, [], Fake);
                } else {
                  try {
                    Fake.call();
                  } catch (x) {
                    control = x;
                  }
                  fn.call(Fake.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (x) {
                  control = x;
                }
                fn();
              }
            } catch (sample) {
              if (sample && control && typeof sample.stack === 'string') {
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                  c--;
                }
                for (; s >= 1 && c >= 0; s--, c--) {
                  if (sampleLines[s] !== controlLines[c]) {
                    if (s !== 1 || c !== 1) {
                      do {
                        s--;
                        c--;
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                          var _frame =
                            '\n' + sampleLines[s].replace(' at new ', ' at ');
                          if (
                            fn.displayName &&
                            _frame.includes('<anonymous>')
                          ) {
                            _frame = _frame.replace(
                              '<anonymous>',
                              fn.displayName
                            );
                          }
                          {
                            if (typeof fn === 'function') {
                              componentFrameCache.set(fn, _frame);
                            }
                          }
                          return _frame;
                        }
                      } while (s >= 1 && c >= 0);
                    }
                    break;
                  }
                }
              }
            } finally {
              reentry = false;
              {
                ReactCurrentDispatcher$1.current = previousDispatcher;
                reenableLogs();
              }
              Error.prepareStackTrace = previousPrepareStackTrace;
            }
            var name = fn ? fn.displayName || fn.name : '';
            var syntheticFrame = name
              ? describeBuiltInComponentFrame(name)
              : '';
            {
              if (typeof fn === 'function') {
                componentFrameCache.set(fn, syntheticFrame);
              }
            }
            return syntheticFrame;
          }
          function describeFunctionComponentFrame(fn, source, ownerFn) {
            {
              return describeNativeComponentFrame(fn, false);
            }
          }
          function shouldConstruct(Component2) {
            var prototype = Component2.prototype;
            return !!(prototype && prototype.isReactComponent);
          }
          function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
            if (type == null) {
              return '';
            }
            if (typeof type === 'function') {
              {
                return describeNativeComponentFrame(
                  type,
                  shouldConstruct(type)
                );
              }
            }
            if (typeof type === 'string') {
              return describeBuiltInComponentFrame(type);
            }
            switch (type) {
              case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame('Suspense');
              case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
            }
            if (typeof type === 'object') {
              switch (type.$$typeof) {
                case REACT_FORWARD_REF_TYPE:
                  return describeFunctionComponentFrame(type.render);
                case REACT_MEMO_TYPE:
                  return describeUnknownElementTypeFrameInDEV(
                    type.type,
                    source,
                    ownerFn
                  );
                case REACT_LAZY_TYPE: {
                  var lazyComponent = type;
                  var payload = lazyComponent._payload;
                  var init = lazyComponent._init;
                  try {
                    return describeUnknownElementTypeFrameInDEV(
                      init(payload),
                      source,
                      ownerFn
                    );
                  } catch (x) {}
                }
              }
            }
            return '';
          }
          var loggedTypeFailures = {};
          var ReactDebugCurrentFrame$1 =
            ReactSharedInternals.ReactDebugCurrentFrame;
          function setCurrentlyValidatingElement(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(
                  element.type,
                  element._source,
                  owner ? owner.type : null
                );
                ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
              } else {
                ReactDebugCurrentFrame$1.setExtraStackFrame(null);
              }
            }
          }
          function checkPropTypes(
            typeSpecs,
            values,
            location,
            componentName,
            element
          ) {
            {
              var has = Function.call.bind(hasOwnProperty);
              for (var typeSpecName in typeSpecs) {
                if (has(typeSpecs, typeSpecName)) {
                  var error$1 = void 0;
                  try {
                    if (typeof typeSpecs[typeSpecName] !== 'function') {
                      var err = Error(
                        (componentName || 'React class') +
                          ': ' +
                          location +
                          ' type `' +
                          typeSpecName +
                          '` is invalid; it must be a function, usually from the `prop-types` package, but received `' +
                          typeof typeSpecs[typeSpecName] +
                          '`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
                      );
                      err.name = 'Invariant Violation';
                      throw err;
                    }
                    error$1 = typeSpecs[typeSpecName](
                      values,
                      typeSpecName,
                      componentName,
                      location,
                      null,
                      'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
                    );
                  } catch (ex) {
                    error$1 = ex;
                  }
                  if (error$1 && !(error$1 instanceof Error)) {
                    setCurrentlyValidatingElement(element);
                    error(
                      '%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).',
                      componentName || 'React class',
                      location,
                      typeSpecName,
                      typeof error$1
                    );
                    setCurrentlyValidatingElement(null);
                  }
                  if (
                    error$1 instanceof Error &&
                    !(error$1.message in loggedTypeFailures)
                  ) {
                    loggedTypeFailures[error$1.message] = true;
                    setCurrentlyValidatingElement(element);
                    error('Failed %s type: %s', location, error$1.message);
                    setCurrentlyValidatingElement(null);
                  }
                }
              }
            }
          }
          function setCurrentlyValidatingElement$1(element) {
            {
              if (element) {
                var owner = element._owner;
                var stack = describeUnknownElementTypeFrameInDEV(
                  element.type,
                  element._source,
                  owner ? owner.type : null
                );
                setExtraStackFrame(stack);
              } else {
                setExtraStackFrame(null);
              }
            }
          }
          var propTypesMisspellWarningShown;
          {
            propTypesMisspellWarningShown = false;
          }
          function getDeclarationErrorAddendum() {
            if (ReactCurrentOwner.current) {
              var name = getComponentNameFromType(
                ReactCurrentOwner.current.type
              );
              if (name) {
                return '\n\nCheck the render method of `' + name + '`.';
              }
            }
            return '';
          }
          function getSourceInfoErrorAddendum(source) {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, '');
              var lineNumber = source.lineNumber;
              return (
                '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.'
              );
            }
            return '';
          }
          function getSourceInfoErrorAddendumForProps(elementProps) {
            if (elementProps !== null && elementProps !== void 0) {
              return getSourceInfoErrorAddendum(elementProps.__source);
            }
            return '';
          }
          var ownerHasKeyUseWarning = {};
          function getCurrentComponentErrorInfo(parentType) {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName =
                typeof parentType === 'string'
                  ? parentType
                  : parentType.displayName || parentType.name;
              if (parentName) {
                info =
                  '\n\nCheck the top-level render call using <' +
                  parentName +
                  '>.';
              }
            }
            return info;
          }
          function validateExplicitKey(element, parentType) {
            if (
              !element._store ||
              element._store.validated ||
              element.key != null
            ) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo =
              getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = '';
            if (
              element &&
              element._owner &&
              element._owner !== ReactCurrentOwner.current
            ) {
              childOwner =
                ' It was passed a child from ' +
                getComponentNameFromType(element._owner.type) +
                '.';
            }
            {
              setCurrentlyValidatingElement$1(element);
              error(
                'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                currentComponentErrorInfo,
                childOwner
              );
              setCurrentlyValidatingElement$1(null);
            }
          }
          function validateChildKeys(node, parentType) {
            if (typeof node !== 'object') {
              return;
            }
            if (isArray(node)) {
              for (var i = 0; i < node.length; i++) {
                var child = node[i];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === 'function') {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
          function validatePropTypes(element) {
            {
              var type = element.type;
              if (
                type === null ||
                type === void 0 ||
                typeof type === 'string'
              ) {
                return;
              }
              var propTypes;
              if (typeof type === 'function') {
                propTypes = type.propTypes;
              } else if (
                typeof type === 'object' &&
                (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
                  // Inner props are checked in the reconciler.
                  type.$$typeof === REACT_MEMO_TYPE)
              ) {
                propTypes = type.propTypes;
              } else {
                return;
              }
              if (propTypes) {
                var name = getComponentNameFromType(type);
                checkPropTypes(propTypes, element.props, 'prop', name, element);
              } else if (
                type.PropTypes !== void 0 &&
                !propTypesMisspellWarningShown
              ) {
                propTypesMisspellWarningShown = true;
                var _name = getComponentNameFromType(type);
                error(
                  'Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?',
                  _name || 'Unknown'
                );
              }
              if (
                typeof type.getDefaultProps === 'function' &&
                !type.getDefaultProps.isReactClassApproved
              ) {
                error(
                  'getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.'
                );
              }
            }
          }
          function validateFragmentProps(fragment) {
            {
              var keys = Object.keys(fragment.props);
              for (var i = 0; i < keys.length; i++) {
                var key = keys[i];
                if (key !== 'children' && key !== 'key') {
                  setCurrentlyValidatingElement$1(fragment);
                  error(
                    'Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.',
                    key
                  );
                  setCurrentlyValidatingElement$1(null);
                  break;
                }
              }
              if (fragment.ref !== null) {
                setCurrentlyValidatingElement$1(fragment);
                error('Invalid attribute `ref` supplied to `React.Fragment`.');
                setCurrentlyValidatingElement$1(null);
              }
            }
          }
          function createElementWithValidation(type, props, children) {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = '';
              if (
                type === void 0 ||
                (typeof type === 'object' &&
                  type !== null &&
                  Object.keys(type).length === 0)
              ) {
                info +=
                  " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendumForProps(props);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = 'null';
              } else if (isArray(type)) {
                typeString = 'array';
              } else if (
                type !== void 0 &&
                type.$$typeof === REACT_ELEMENT_TYPE
              ) {
                typeString =
                  '<' +
                  (getComponentNameFromType(type.type) || 'Unknown') +
                  ' />';
                info =
                  ' Did you accidentally export a JSX literal instead of a component?';
              } else {
                typeString = typeof type;
              }
              {
                error(
                  'React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s',
                  typeString,
                  info
                );
              }
            }
            var element = createElement.apply(this, arguments);
            if (element == null) {
              return element;
            }
            if (validType) {
              for (var i = 2; i < arguments.length; i++) {
                validateChildKeys(arguments[i], type);
              }
            }
            if (type === REACT_FRAGMENT_TYPE) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
          var didWarnAboutDeprecatedCreateFactory = false;
          function createFactoryWithValidation(type) {
            var validatedFactory = createElementWithValidation.bind(null, type);
            validatedFactory.type = type;
            {
              if (!didWarnAboutDeprecatedCreateFactory) {
                didWarnAboutDeprecatedCreateFactory = true;
                warn(
                  'React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.'
                );
              }
              Object.defineProperty(validatedFactory, 'type', {
                enumerable: false,
                get: function () {
                  warn(
                    'Factory.type is deprecated. Access the class directly before passing it to createFactory.'
                  );
                  Object.defineProperty(this, 'type', {
                    value: type,
                  });
                  return type;
                },
              });
            }
            return validatedFactory;
          }
          function cloneElementWithValidation(element, props, children) {
            var newElement = cloneElement.apply(this, arguments);
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], newElement.type);
            }
            validatePropTypes(newElement);
            return newElement;
          }
          function startTransition(scope, options) {
            var prevTransition = ReactCurrentBatchConfig.transition;
            ReactCurrentBatchConfig.transition = {};
            var currentTransition = ReactCurrentBatchConfig.transition;
            {
              ReactCurrentBatchConfig.transition._updatedFibers =
                /* @__PURE__ */ new Set();
            }
            try {
              scope();
            } finally {
              ReactCurrentBatchConfig.transition = prevTransition;
              {
                if (
                  prevTransition === null &&
                  currentTransition._updatedFibers
                ) {
                  var updatedFibersCount =
                    currentTransition._updatedFibers.size;
                  if (updatedFibersCount > 10) {
                    warn(
                      'Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.'
                    );
                  }
                  currentTransition._updatedFibers.clear();
                }
              }
            }
          }
          var didWarnAboutMessageChannel = false;
          var enqueueTaskImpl = null;
          function enqueueTask(task) {
            if (enqueueTaskImpl === null) {
              try {
                var requireString = ('require' + Math.random()).slice(0, 7);
                var nodeRequire = module && module[requireString];
                enqueueTaskImpl = nodeRequire.call(
                  module,
                  'timers'
                ).setImmediate;
              } catch (_err) {
                enqueueTaskImpl = function (callback) {
                  {
                    if (didWarnAboutMessageChannel === false) {
                      didWarnAboutMessageChannel = true;
                      if (typeof MessageChannel === 'undefined') {
                        error(
                          'This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.'
                        );
                      }
                    }
                  }
                  var channel = new MessageChannel();
                  channel.port1.onmessage = callback;
                  channel.port2.postMessage(void 0);
                };
              }
            }
            return enqueueTaskImpl(task);
          }
          var actScopeDepth = 0;
          var didWarnNoAwaitAct = false;
          function act(callback) {
            {
              var prevActScopeDepth = actScopeDepth;
              actScopeDepth++;
              if (ReactCurrentActQueue.current === null) {
                ReactCurrentActQueue.current = [];
              }
              var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
              var result;
              try {
                ReactCurrentActQueue.isBatchingLegacy = true;
                result = callback();
                if (
                  !prevIsBatchingLegacy &&
                  ReactCurrentActQueue.didScheduleLegacyUpdate
                ) {
                  var queue = ReactCurrentActQueue.current;
                  if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                  }
                }
              } catch (error2) {
                popActScope(prevActScopeDepth);
                throw error2;
              } finally {
                ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
              }
              if (
                result !== null &&
                typeof result === 'object' &&
                typeof result.then === 'function'
              ) {
                var thenableResult = result;
                var wasAwaited = false;
                var thenable = {
                  then: function (resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(
                      function (returnValue2) {
                        popActScope(prevActScopeDepth);
                        if (actScopeDepth === 0) {
                          recursivelyFlushAsyncActWork(
                            returnValue2,
                            resolve,
                            reject
                          );
                        } else {
                          resolve(returnValue2);
                        }
                      },
                      function (error2) {
                        popActScope(prevActScopeDepth);
                        reject(error2);
                      }
                    );
                  },
                };
                {
                  if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
                    Promise.resolve()
                      .then(function () {})
                      .then(function () {
                        if (!wasAwaited) {
                          didWarnNoAwaitAct = true;
                          error(
                            'You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);'
                          );
                        }
                      });
                  }
                }
                return thenable;
              } else {
                var returnValue = result;
                popActScope(prevActScopeDepth);
                if (actScopeDepth === 0) {
                  var _queue = ReactCurrentActQueue.current;
                  if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                  }
                  var _thenable = {
                    then: function (resolve, reject) {
                      if (ReactCurrentActQueue.current === null) {
                        ReactCurrentActQueue.current = [];
                        recursivelyFlushAsyncActWork(
                          returnValue,
                          resolve,
                          reject
                        );
                      } else {
                        resolve(returnValue);
                      }
                    },
                  };
                  return _thenable;
                } else {
                  var _thenable2 = {
                    then: function (resolve, reject) {
                      resolve(returnValue);
                    },
                  };
                  return _thenable2;
                }
              }
            }
          }
          function popActScope(prevActScopeDepth) {
            {
              if (prevActScopeDepth !== actScopeDepth - 1) {
                error(
                  'You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. '
                );
              }
              actScopeDepth = prevActScopeDepth;
            }
          }
          function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
            {
              var queue = ReactCurrentActQueue.current;
              if (queue !== null) {
                try {
                  flushActQueue(queue);
                  enqueueTask(function () {
                    if (queue.length === 0) {
                      ReactCurrentActQueue.current = null;
                      resolve(returnValue);
                    } else {
                      recursivelyFlushAsyncActWork(
                        returnValue,
                        resolve,
                        reject
                      );
                    }
                  });
                } catch (error2) {
                  reject(error2);
                }
              } else {
                resolve(returnValue);
              }
            }
          }
          var isFlushing = false;
          function flushActQueue(queue) {
            {
              if (!isFlushing) {
                isFlushing = true;
                var i = 0;
                try {
                  for (; i < queue.length; i++) {
                    var callback = queue[i];
                    do {
                      callback = callback(true);
                    } while (callback !== null);
                  }
                  queue.length = 0;
                } catch (error2) {
                  queue = queue.slice(i + 1);
                  throw error2;
                } finally {
                  isFlushing = false;
                }
              }
            }
          }
          var createElement$1 = createElementWithValidation;
          var cloneElement$1 = cloneElementWithValidation;
          var createFactory = createFactoryWithValidation;
          var Children = {
            map: mapChildren,
            forEach: forEachChildren,
            count: countChildren,
            toArray,
            only: onlyChild,
          };
          exports.Children = Children;
          exports.Component = Component;
          exports.Fragment = REACT_FRAGMENT_TYPE;
          exports.Profiler = REACT_PROFILER_TYPE;
          exports.PureComponent = PureComponent;
          exports.StrictMode = REACT_STRICT_MODE_TYPE;
          exports.Suspense = REACT_SUSPENSE_TYPE;
          exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED =
            ReactSharedInternals;
          exports.cloneElement = cloneElement$1;
          exports.createContext = createContext;
          exports.createElement = createElement$1;
          exports.createFactory = createFactory;
          exports.createRef = createRef;
          exports.forwardRef = forwardRef;
          exports.isValidElement = isValidElement;
          exports.lazy = lazy;
          exports.memo = memo;
          exports.startTransition = startTransition;
          exports.unstable_act = act;
          exports.useCallback = useCallback;
          exports.useContext = useContext;
          exports.useDebugValue = useDebugValue;
          exports.useDeferredValue = useDeferredValue;
          exports.useEffect = useEffect;
          exports.useId = useId;
          exports.useImperativeHandle = useImperativeHandle;
          exports.useInsertionEffect = useInsertionEffect;
          exports.useLayoutEffect = useLayoutEffect;
          exports.useMemo = useMemo;
          exports.useReducer = useReducer;
          exports.useRef = useRef;
          exports.useState = useState;
          exports.useSyncExternalStore = useSyncExternalStore;
          exports.useTransition = useTransition;
          exports.version = ReactVersion;
          if (
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
              'function'
          ) {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(
              new Error()
            );
          }
        })();
      }
    },
  });

  // node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
  var require_react = __commonJS({
    'node_modules/.pnpm/react@18.2.0/node_modules/react/index.js'(
      exports,
      module
    ) {
      'use strict';
      if (false) {
        module.exports = null;
      } else {
        module.exports = require_react_development();
      }
    },
  });

  // node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js
  var require_interopRequireDefault = __commonJS({
    'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/interopRequireDefault.js'(
      exports,
      module
    ) {
      function _interopRequireDefault(obj) {
        return obj && obj.__esModule
          ? obj
          : {
              default: obj,
            };
      }
      (module.exports = _interopRequireDefault),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
    },
  });

  // node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/arrayWithHoles.js
  var require_arrayWithHoles = __commonJS({
    'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/arrayWithHoles.js'(
      exports,
      module
    ) {
      function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
      }
      (module.exports = _arrayWithHoles),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
    },
  });

  // node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js
  var require_iterableToArrayLimit = __commonJS({
    'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js'(
      exports,
      module
    ) {
      function _iterableToArrayLimit(arr, i) {
        var _i =
          null == arr
            ? null
            : ('undefined' != typeof Symbol && arr[Symbol.iterator]) ||
              arr['@@iterator'];
        if (null != _i) {
          var _s,
            _e,
            _x,
            _r,
            _arr = [],
            _n = true,
            _d = false;
          try {
            if (((_x = (_i = _i.call(arr)).next), 0 === i)) {
              if (Object(_i) !== _i) return;
              _n = false;
            } else
              for (
                ;
                !(_n = (_s = _x.call(_i)).done) &&
                (_arr.push(_s.value), _arr.length !== i);
                _n = true
              );
          } catch (err) {
            (_d = true), (_e = err);
          } finally {
            try {
              if (
                !_n &&
                null != _i['return'] &&
                ((_r = _i['return']()), Object(_r) !== _r)
              )
                return;
            } finally {
              if (_d) throw _e;
            }
          }
          return _arr;
        }
      }
      (module.exports = _iterableToArrayLimit),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
    },
  });

  // node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/arrayLikeToArray.js
  var require_arrayLikeToArray = __commonJS({
    'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/arrayLikeToArray.js'(
      exports,
      module
    ) {
      function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
        return arr2;
      }
      (module.exports = _arrayLikeToArray),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
    },
  });

  // node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js
  var require_unsupportedIterableToArray = __commonJS({
    'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js'(
      exports,
      module
    ) {
      var arrayLikeToArray = require_arrayLikeToArray();
      function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === 'string') return arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === 'Object' && o.constructor) n = o.constructor.name;
        if (n === 'Map' || n === 'Set') return Array.from(o);
        if (
          n === 'Arguments' ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return arrayLikeToArray(o, minLen);
      }
      (module.exports = _unsupportedIterableToArray),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
    },
  });

  // node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/nonIterableRest.js
  var require_nonIterableRest = __commonJS({
    'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/nonIterableRest.js'(
      exports,
      module
    ) {
      function _nonIterableRest() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      }
      (module.exports = _nonIterableRest),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
    },
  });

  // node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/slicedToArray.js
  var require_slicedToArray = __commonJS({
    'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/slicedToArray.js'(
      exports,
      module
    ) {
      var arrayWithHoles = require_arrayWithHoles();
      var iterableToArrayLimit = require_iterableToArrayLimit();
      var unsupportedIterableToArray = require_unsupportedIterableToArray();
      var nonIterableRest = require_nonIterableRest();
      function _slicedToArray(arr, i) {
        return (
          arrayWithHoles(arr) ||
          iterableToArrayLimit(arr, i) ||
          unsupportedIterableToArray(arr, i) ||
          nonIterableRest()
        );
      }
      (module.exports = _slicedToArray),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
    },
  });

  // node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js
  var require_typeof = __commonJS({
    'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/typeof.js'(
      exports,
      module
    ) {
      function _typeof(obj) {
        '@babel/helpers - typeof';
        return (
          (module.exports = _typeof =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (obj2) {
                  return typeof obj2;
                }
              : function (obj2) {
                  return obj2 &&
                    'function' == typeof Symbol &&
                    obj2.constructor === Symbol &&
                    obj2 !== Symbol.prototype
                    ? 'symbol'
                    : typeof obj2;
                }),
          (module.exports.__esModule = true),
          (module.exports['default'] = module.exports),
          _typeof(obj)
        );
      }
      (module.exports = _typeof),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
    },
  });

  // node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/interopRequireWildcard.js
  var require_interopRequireWildcard = __commonJS({
    'node_modules/.pnpm/@babel+runtime@7.22.6/node_modules/@babel/runtime/helpers/interopRequireWildcard.js'(
      exports,
      module
    ) {
      var _typeof = require_typeof()['default'];
      function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== 'function') return null;
        var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
        var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
        return (_getRequireWildcardCache = function _getRequireWildcardCache2(
          nodeInterop2
        ) {
          return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
      }
      function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
          return obj;
        }
        if (
          obj === null ||
          (_typeof(obj) !== 'object' && typeof obj !== 'function')
        ) {
          return {
            default: obj,
          };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
          return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor =
          Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var key in obj) {
          if (
            key !== 'default' &&
            Object.prototype.hasOwnProperty.call(obj, key)
          ) {
            var desc = hasPropertyDescriptor
              ? Object.getOwnPropertyDescriptor(obj, key)
              : null;
            if (desc && (desc.get || desc.set)) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
        newObj['default'] = obj;
        if (cache) {
          cache.set(obj, newObj);
        }
        return newObj;
      }
      (module.exports = _interopRequireWildcard),
        (module.exports.__esModule = true),
        (module.exports['default'] = module.exports);
    },
  });

  // node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/hooks/useEvent.js
  var require_useEvent = __commonJS({
    'node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/hooks/useEvent.js'(
      exports
    ) {
      'use strict';
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = useEvent;
      var React2 = _interopRequireWildcard(require_react());
      function useEvent(callback) {
        var fnRef = React2.useRef();
        fnRef.current = callback;
        var memoFn = React2.useCallback(function () {
          var _fnRef$current;
          for (
            var _len = arguments.length, args = new Array(_len), _key = 0;
            _key < _len;
            _key++
          ) {
            args[_key] = arguments[_key];
          }
          return (_fnRef$current = fnRef.current) === null ||
            _fnRef$current === void 0
            ? void 0
            : _fnRef$current.call.apply(_fnRef$current, [fnRef].concat(args));
        }, []);
        return memoFn;
      }
    },
  });

  // node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/Dom/canUseDom.js
  var require_canUseDom = __commonJS({
    'node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/Dom/canUseDom.js'(
      exports
    ) {
      'use strict';
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = canUseDom;
      function canUseDom() {
        return !!(
          typeof window !== 'undefined' &&
          window.document &&
          window.document.createElement
        );
      }
    },
  });

  // node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/hooks/useLayoutEffect.js
  var require_useLayoutEffect = __commonJS({
    'node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/hooks/useLayoutEffect.js'(
      exports
    ) {
      'use strict';
      var _interopRequireDefault = require_interopRequireDefault().default;
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.useLayoutUpdateEffect = exports.default = void 0;
      var React2 = _interopRequireWildcard(require_react());
      var _canUseDom = _interopRequireDefault(require_canUseDom());
      var useInternalLayoutEffect = (0, _canUseDom.default)()
        ? React2.useLayoutEffect
        : React2.useEffect;
      var useLayoutEffect = function useLayoutEffect2(callback, deps) {
        var firstMountRef = React2.useRef(true);
        useInternalLayoutEffect(function () {
          return callback(firstMountRef.current);
        }, deps);
        useInternalLayoutEffect(function () {
          firstMountRef.current = false;
          return function () {
            firstMountRef.current = true;
          };
        }, []);
      };
      var useLayoutUpdateEffect = function useLayoutUpdateEffect2(
        callback,
        deps
      ) {
        useLayoutEffect(function (firstMount) {
          if (!firstMount) {
            return callback();
          }
        }, deps);
      };
      exports.useLayoutUpdateEffect = useLayoutUpdateEffect;
      var _default = useLayoutEffect;
      exports.default = _default;
    },
  });

  // node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/hooks/useState.js
  var require_useState = __commonJS({
    'node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/hooks/useState.js'(
      exports
    ) {
      'use strict';
      var _interopRequireWildcard = require_interopRequireWildcard().default;
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = useSafeState;
      var _slicedToArray2 = _interopRequireDefault(require_slicedToArray());
      var React2 = _interopRequireWildcard(require_react());
      function useSafeState(defaultValue) {
        var destroyRef = React2.useRef(false);
        var _React$useState = React2.useState(defaultValue),
          _React$useState2 = (0, _slicedToArray2.default)(_React$useState, 2),
          value = _React$useState2[0],
          setValue = _React$useState2[1];
        React2.useEffect(function () {
          destroyRef.current = false;
          return function () {
            destroyRef.current = true;
          };
        }, []);
        function safeSetState(updater, ignoreDestroy) {
          if (ignoreDestroy && destroyRef.current) {
            return;
          }
          setValue(updater);
        }
        return [value, safeSetState];
      }
    },
  });

  // node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/hooks/useMergedState.js
  var require_useMergedState = __commonJS({
    'node_modules/.pnpm/rc-util@5.34.1_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/lib/hooks/useMergedState.js'(
      exports
    ) {
      'use strict';
      var _interopRequireDefault = require_interopRequireDefault().default;
      Object.defineProperty(exports, '__esModule', {
        value: true,
      });
      exports.default = useMergedState2;
      var _slicedToArray2 = _interopRequireDefault(require_slicedToArray());
      var _useEvent = _interopRequireDefault(require_useEvent());
      var _useLayoutEffect = require_useLayoutEffect();
      var _useState5 = _interopRequireDefault(require_useState());
      function hasValue(value) {
        return value !== void 0;
      }
      function useMergedState2(defaultStateValue, option) {
        var _ref = option || {},
          defaultValue = _ref.defaultValue,
          value = _ref.value,
          onChange = _ref.onChange,
          postState = _ref.postState;
        var _useState = (0, _useState5.default)(function () {
            if (hasValue(value)) {
              return value;
            } else if (hasValue(defaultValue)) {
              return typeof defaultValue === 'function'
                ? defaultValue()
                : defaultValue;
            } else {
              return typeof defaultStateValue === 'function'
                ? defaultStateValue()
                : defaultStateValue;
            }
          }),
          _useState2 = (0, _slicedToArray2.default)(_useState, 2),
          innerValue = _useState2[0],
          setInnerValue = _useState2[1];
        var mergedValue = value !== void 0 ? value : innerValue;
        var postMergedValue = postState ? postState(mergedValue) : mergedValue;
        var onChangeFn = (0, _useEvent.default)(onChange);
        var _useState3 = (0, _useState5.default)([mergedValue]),
          _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
          prevValue = _useState4[0],
          setPrevValue = _useState4[1];
        (0, _useLayoutEffect.useLayoutUpdateEffect)(
          function () {
            var prev = prevValue[0];
            if (innerValue !== prev) {
              onChangeFn(innerValue, prev);
            }
          },
          [prevValue]
        );
        (0, _useLayoutEffect.useLayoutUpdateEffect)(
          function () {
            if (!hasValue(value)) {
              setInnerValue(value);
            }
          },
          [value]
        );
        var triggerChange = (0, _useEvent.default)(function (
          updater,
          ignoreDestroy
        ) {
          setInnerValue(updater, ignoreDestroy);
          setPrevValue([mergedValue], ignoreDestroy);
        });
        return [postMergedValue, triggerChange];
      }
    },
  });

  // node_modules/.pnpm/dayjs@1.11.9/node_modules/dayjs/plugin/isSameOrAfter.js
  var require_isSameOrAfter = __commonJS({
    'node_modules/.pnpm/dayjs@1.11.9/node_modules/dayjs/plugin/isSameOrAfter.js'(
      exports,
      module
    ) {
      !(function (e, t) {
        'object' == typeof exports && 'undefined' != typeof module
          ? (module.exports = t())
          : 'function' == typeof define && define.amd
          ? define(t)
          : ((e =
              'undefined' != typeof globalThis
                ? globalThis
                : e || self).dayjs_plugin_isSameOrAfter = t());
      })(exports, function () {
        'use strict';
        return function (e, t) {
          t.prototype.isSameOrAfter = function (e2, t2) {
            return this.isSame(e2, t2) || this.isAfter(e2, t2);
          };
        };
      });
    },
  });

  // node_modules/.pnpm/dayjs@1.11.9/node_modules/dayjs/dayjs.min.js
  var require_dayjs_min = __commonJS({
    'node_modules/.pnpm/dayjs@1.11.9/node_modules/dayjs/dayjs.min.js'(
      exports,
      module
    ) {
      !(function (t, e) {
        'object' == typeof exports && 'undefined' != typeof module
          ? (module.exports = e())
          : 'function' == typeof define && define.amd
          ? define(e)
          : ((t =
              'undefined' != typeof globalThis ? globalThis : t || self).dayjs =
              e());
      })(exports, function () {
        'use strict';
        var t = 1e3,
          e = 6e4,
          n = 36e5,
          r = 'millisecond',
          i = 'second',
          s = 'minute',
          u = 'hour',
          a = 'day',
          o = 'week',
          c = 'month',
          f = 'quarter',
          h = 'year',
          d = 'date',
          l = 'Invalid Date',
          $ =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          y =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          M = {
            name: 'en',
            weekdays:
              'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                '_'
              ),
            months:
              'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_'
              ),
            ordinal: function (t2) {
              var e2 = ['th', 'st', 'nd', 'rd'],
                n2 = t2 % 100;
              return '[' + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + ']';
            },
          },
          m = function (t2, e2, n2) {
            var r2 = String(t2);
            return !r2 || r2.length >= e2
              ? t2
              : '' + Array(e2 + 1 - r2.length).join(n2) + t2;
          },
          v = {
            s: m,
            z: function (t2) {
              var e2 = -t2.utcOffset(),
                n2 = Math.abs(e2),
                r2 = Math.floor(n2 / 60),
                i2 = n2 % 60;
              return (
                (e2 <= 0 ? '+' : '-') + m(r2, 2, '0') + ':' + m(i2, 2, '0')
              );
            },
            m: function t2(e2, n2) {
              if (e2.date() < n2.date()) return -t2(n2, e2);
              var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()),
                i2 = e2.clone().add(r2, c),
                s2 = n2 - i2 < 0,
                u2 = e2.clone().add(r2 + (s2 ? -1 : 1), c);
              return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
            },
            a: function (t2) {
              return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
            },
            p: function (t2) {
              return (
                { M: c, y: h, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: f }[
                  t2
                ] ||
                String(t2 || '')
                  .toLowerCase()
                  .replace(/s$/, '')
              );
            },
            u: function (t2) {
              return void 0 === t2;
            },
          },
          g = 'en',
          D = {};
        D[g] = M;
        var p = function (t2) {
            return t2 instanceof b;
          },
          S = function t2(e2, n2, r2) {
            var i2;
            if (!e2) return g;
            if ('string' == typeof e2) {
              var s2 = e2.toLowerCase();
              D[s2] && (i2 = s2), n2 && ((D[s2] = n2), (i2 = s2));
              var u2 = e2.split('-');
              if (!i2 && u2.length > 1) return t2(u2[0]);
            } else {
              var a2 = e2.name;
              (D[a2] = e2), (i2 = a2);
            }
            return !r2 && i2 && (g = i2), i2 || (!r2 && g);
          },
          w = function (t2, e2) {
            if (p(t2)) return t2.clone();
            var n2 = 'object' == typeof e2 ? e2 : {};
            return (n2.date = t2), (n2.args = arguments), new b(n2);
          },
          O = v;
        (O.l = S),
          (O.i = p),
          (O.w = function (t2, e2) {
            return w(t2, {
              locale: e2.$L,
              utc: e2.$u,
              x: e2.$x,
              $offset: e2.$offset,
            });
          });
        var b = (function () {
            function M2(t2) {
              (this.$L = S(t2.locale, null, true)), this.parse(t2);
            }
            var m2 = M2.prototype;
            return (
              (m2.parse = function (t2) {
                (this.$d = (function (t3) {
                  var e2 = t3.date,
                    n2 = t3.utc;
                  if (null === e2) return /* @__PURE__ */ new Date(NaN);
                  if (O.u(e2)) return /* @__PURE__ */ new Date();
                  if (e2 instanceof Date) return new Date(e2);
                  if ('string' == typeof e2 && !/Z$/i.test(e2)) {
                    var r2 = e2.match($);
                    if (r2) {
                      var i2 = r2[2] - 1 || 0,
                        s2 = (r2[7] || '0').substring(0, 3);
                      return n2
                        ? new Date(
                            Date.UTC(
                              r2[1],
                              i2,
                              r2[3] || 1,
                              r2[4] || 0,
                              r2[5] || 0,
                              r2[6] || 0,
                              s2
                            )
                          )
                        : new Date(
                            r2[1],
                            i2,
                            r2[3] || 1,
                            r2[4] || 0,
                            r2[5] || 0,
                            r2[6] || 0,
                            s2
                          );
                    }
                  }
                  return new Date(e2);
                })(t2)),
                  (this.$x = t2.x || {}),
                  this.init();
              }),
              (m2.init = function () {
                var t2 = this.$d;
                (this.$y = t2.getFullYear()),
                  (this.$M = t2.getMonth()),
                  (this.$D = t2.getDate()),
                  (this.$W = t2.getDay()),
                  (this.$H = t2.getHours()),
                  (this.$m = t2.getMinutes()),
                  (this.$s = t2.getSeconds()),
                  (this.$ms = t2.getMilliseconds());
              }),
              (m2.$utils = function () {
                return O;
              }),
              (m2.isValid = function () {
                return !(this.$d.toString() === l);
              }),
              (m2.isSame = function (t2, e2) {
                var n2 = w(t2);
                return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
              }),
              (m2.isAfter = function (t2, e2) {
                return w(t2) < this.startOf(e2);
              }),
              (m2.isBefore = function (t2, e2) {
                return this.endOf(e2) < w(t2);
              }),
              (m2.$g = function (t2, e2, n2) {
                return O.u(t2) ? this[e2] : this.set(n2, t2);
              }),
              (m2.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (m2.valueOf = function () {
                return this.$d.getTime();
              }),
              (m2.startOf = function (t2, e2) {
                var n2 = this,
                  r2 = !!O.u(e2) || e2,
                  f2 = O.p(t2),
                  l2 = function (t3, e3) {
                    var i2 = O.w(
                      n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3),
                      n2
                    );
                    return r2 ? i2 : i2.endOf(a);
                  },
                  $2 = function (t3, e3) {
                    return O.w(
                      n2
                        .toDate()
                        [t3].apply(
                          n2.toDate('s'),
                          (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)
                        ),
                      n2
                    );
                  },
                  y2 = this.$W,
                  M3 = this.$M,
                  m3 = this.$D,
                  v2 = 'set' + (this.$u ? 'UTC' : '');
                switch (f2) {
                  case h:
                    return r2 ? l2(1, 0) : l2(31, 11);
                  case c:
                    return r2 ? l2(1, M3) : l2(0, M3 + 1);
                  case o:
                    var g2 = this.$locale().weekStart || 0,
                      D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
                    return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
                  case a:
                  case d:
                    return $2(v2 + 'Hours', 0);
                  case u:
                    return $2(v2 + 'Minutes', 1);
                  case s:
                    return $2(v2 + 'Seconds', 2);
                  case i:
                    return $2(v2 + 'Milliseconds', 3);
                  default:
                    return this.clone();
                }
              }),
              (m2.endOf = function (t2) {
                return this.startOf(t2, false);
              }),
              (m2.$set = function (t2, e2) {
                var n2,
                  o2 = O.p(t2),
                  f2 = 'set' + (this.$u ? 'UTC' : ''),
                  l2 = ((n2 = {}),
                  (n2[a] = f2 + 'Date'),
                  (n2[d] = f2 + 'Date'),
                  (n2[c] = f2 + 'Month'),
                  (n2[h] = f2 + 'FullYear'),
                  (n2[u] = f2 + 'Hours'),
                  (n2[s] = f2 + 'Minutes'),
                  (n2[i] = f2 + 'Seconds'),
                  (n2[r] = f2 + 'Milliseconds'),
                  n2)[o2],
                  $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
                if (o2 === c || o2 === h) {
                  var y2 = this.clone().set(d, 1);
                  y2.$d[l2]($2),
                    y2.init(),
                    (this.$d = y2.set(
                      d,
                      Math.min(this.$D, y2.daysInMonth())
                    ).$d);
                } else l2 && this.$d[l2]($2);
                return this.init(), this;
              }),
              (m2.set = function (t2, e2) {
                return this.clone().$set(t2, e2);
              }),
              (m2.get = function (t2) {
                return this[O.p(t2)]();
              }),
              (m2.add = function (r2, f2) {
                var d2,
                  l2 = this;
                r2 = Number(r2);
                var $2 = O.p(f2),
                  y2 = function (t2) {
                    var e2 = w(l2);
                    return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
                  };
                if ($2 === c) return this.set(c, this.$M + r2);
                if ($2 === h) return this.set(h, this.$y + r2);
                if ($2 === a) return y2(1);
                if ($2 === o) return y2(7);
                var M3 =
                    ((d2 = {}), (d2[s] = e), (d2[u] = n), (d2[i] = t), d2)[
                      $2
                    ] || 1,
                  m3 = this.$d.getTime() + r2 * M3;
                return O.w(m3, this);
              }),
              (m2.subtract = function (t2, e2) {
                return this.add(-1 * t2, e2);
              }),
              (m2.format = function (t2) {
                var e2 = this,
                  n2 = this.$locale();
                if (!this.isValid()) return n2.invalidDate || l;
                var r2 = t2 || 'YYYY-MM-DDTHH:mm:ssZ',
                  i2 = O.z(this),
                  s2 = this.$H,
                  u2 = this.$m,
                  a2 = this.$M,
                  o2 = n2.weekdays,
                  c2 = n2.months,
                  f2 = n2.meridiem,
                  h2 = function (t3, n3, i3, s3) {
                    return (
                      (t3 && (t3[n3] || t3(e2, r2))) || i3[n3].slice(0, s3)
                    );
                  },
                  d2 = function (t3) {
                    return O.s(s2 % 12 || 12, t3, '0');
                  },
                  $2 =
                    f2 ||
                    function (t3, e3, n3) {
                      var r3 = t3 < 12 ? 'AM' : 'PM';
                      return n3 ? r3.toLowerCase() : r3;
                    };
                return r2.replace(y, function (t3, r3) {
                  return (
                    r3 ||
                    (function (t4) {
                      switch (t4) {
                        case 'YY':
                          return String(e2.$y).slice(-2);
                        case 'YYYY':
                          return O.s(e2.$y, 4, '0');
                        case 'M':
                          return a2 + 1;
                        case 'MM':
                          return O.s(a2 + 1, 2, '0');
                        case 'MMM':
                          return h2(n2.monthsShort, a2, c2, 3);
                        case 'MMMM':
                          return h2(c2, a2);
                        case 'D':
                          return e2.$D;
                        case 'DD':
                          return O.s(e2.$D, 2, '0');
                        case 'd':
                          return String(e2.$W);
                        case 'dd':
                          return h2(n2.weekdaysMin, e2.$W, o2, 2);
                        case 'ddd':
                          return h2(n2.weekdaysShort, e2.$W, o2, 3);
                        case 'dddd':
                          return o2[e2.$W];
                        case 'H':
                          return String(s2);
                        case 'HH':
                          return O.s(s2, 2, '0');
                        case 'h':
                          return d2(1);
                        case 'hh':
                          return d2(2);
                        case 'a':
                          return $2(s2, u2, true);
                        case 'A':
                          return $2(s2, u2, false);
                        case 'm':
                          return String(u2);
                        case 'mm':
                          return O.s(u2, 2, '0');
                        case 's':
                          return String(e2.$s);
                        case 'ss':
                          return O.s(e2.$s, 2, '0');
                        case 'SSS':
                          return O.s(e2.$ms, 3, '0');
                        case 'Z':
                          return i2;
                      }
                      return null;
                    })(t3) ||
                    i2.replace(':', '')
                  );
                });
              }),
              (m2.utcOffset = function () {
                return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
              }),
              (m2.diff = function (r2, d2, l2) {
                var $2,
                  y2 = this,
                  M3 = O.p(d2),
                  m3 = w(r2),
                  v2 = (m3.utcOffset() - this.utcOffset()) * e,
                  g2 = this - m3,
                  D2 = function () {
                    return O.m(y2, m3);
                  };
                switch (M3) {
                  case h:
                    $2 = D2() / 12;
                    break;
                  case c:
                    $2 = D2();
                    break;
                  case f:
                    $2 = D2() / 3;
                    break;
                  case o:
                    $2 = (g2 - v2) / 6048e5;
                    break;
                  case a:
                    $2 = (g2 - v2) / 864e5;
                    break;
                  case u:
                    $2 = g2 / n;
                    break;
                  case s:
                    $2 = g2 / e;
                    break;
                  case i:
                    $2 = g2 / t;
                    break;
                  default:
                    $2 = g2;
                }
                return l2 ? $2 : O.a($2);
              }),
              (m2.daysInMonth = function () {
                return this.endOf(c).$D;
              }),
              (m2.$locale = function () {
                return D[this.$L];
              }),
              (m2.locale = function (t2, e2) {
                if (!t2) return this.$L;
                var n2 = this.clone(),
                  r2 = S(t2, e2, true);
                return r2 && (n2.$L = r2), n2;
              }),
              (m2.clone = function () {
                return O.w(this.$d, this);
              }),
              (m2.toDate = function () {
                return new Date(this.valueOf());
              }),
              (m2.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (m2.toISOString = function () {
                return this.$d.toISOString();
              }),
              (m2.toString = function () {
                return this.$d.toUTCString();
              }),
              M2
            );
          })(),
          _ = b.prototype;
        return (
          (w.prototype = _),
          [
            ['$ms', r],
            ['$s', i],
            ['$m', s],
            ['$H', u],
            ['$W', a],
            ['$M', c],
            ['$y', h],
            ['$D', d],
          ].forEach(function (t2) {
            _[t2[1]] = function (e2) {
              return this.$g(e2, t2[0], t2[1]);
            };
          }),
          (w.extend = function (t2, e2) {
            return t2.$i || (t2(e2, b, w), (t2.$i = true)), w;
          }),
          (w.locale = S),
          (w.isDayjs = p),
          (w.unix = function (t2) {
            return w(1e3 * t2);
          }),
          (w.en = D[g]),
          (w.Ls = D),
          (w.p = {}),
          w
        );
      });
    },
  });

  // app/components/CalendarGraph.tsx
  var import_react = __toESM(require_react());
  var import_useMergedState = __toESM(require_useMergedState());
  var import_isSameOrAfter = __toESM(require_isSameOrAfter());
  var import_dayjs = __toESM(require_dayjs_min());
  import_dayjs.default.extend(import_isSameOrAfter.default);
  import_dayjs.default.locale('zh-cn');
  var defaultColorLevel = [
    { start: -10, end: 1, color: 'rgba(24, 144, 255, 0.1)' },
    { start: 1, end: 10, color: 'rgba(24, 144, 255, 0.3)' },
    { start: 10, end: 20, color: 'rgba(24, 144, 255, 0.5)' },
    { start: 20, end: 30, color: 'rgba(24, 144, 255, 0.7)' },
    { start: 30, end: Infinity, color: 'rgba(24, 144, 255, 0.9)' },
  ];
  var WEEKDAYS = 7;
  var weekCNameMap = {
    Monday: '\u661F\u671F\u4E00',
    Tuesday: '\u661F\u671F\u4E8C',
    Wednesday: '\u661F\u671F\u4E09',
    Thursday: '\u661F\u671F\u56DB',
    Friday: '\u661F\u671F\u4E94',
    Saturday: '\u661F\u671F\u516D',
    Sunday: '\u661F\u671F\u65E5',
  };
  var defaultWeekLabelList = [
    { label: '\u5468\u65E5', col: 0 },
    { label: '\u5468\u4E8C', col: 2 },
    { label: '\u5468\u56DB', col: 4 },
    { label: '\u5468\u516D', col: 6 },
  ];
  function CalendarGraph(props) {
    const calendarGraphList = props.calendarGraphList || [];
    const prefixCls = props.prefixCls || 'rc-calendar-graph';
    const colorLevel = props.colorLevel || defaultColorLevel;
    const weekLabelList = props.weekLabelList || defaultWeekLabelList;
    function getColor(item, isActive) {
      if (props.getBoxColor) return props.getBoxColor(item, isActive);
      if (isActive) return 'red';
      if (!item) return 'rgba(0, 10, 26, 0.04)';
      const value = item.count;
      return colorLevel.find(({ start, end }) => value >= start && value < end)
        ?.color;
    }
    const tipsList = [
      { label: props.lowText ?? '\u4F4E' },
      ...colorLevel,
      { label: props.highText ?? '\u9AD8' },
    ];
    const { boxSize = 12, boxPadding = 4 } = props;
    const [selectedDay, setSelectedDay] = (0, import_useMergedState.default)(
      props.selectedDay,
      {
        value: props.selectedDay,
        onChange: props.onSelectedDay,
      }
    );
    const svgHorzPadding = 10;
    const monthLabelHeight = 20;
    const weekLabelWidth = 26;
    const tipHeight = 40;
    const tipWidth = 140;
    const sizeWithPadding = boxSize + boxPadding;
    const width =
      calendarGraphList.length * sizeWithPadding +
      svgHorzPadding * 2 +
      weekLabelWidth;
    const height = WEEKDAYS * sizeWithPadding - boxPadding + monthLabelHeight;
    const renderMonthLabel = () => {
      let currentMonth = -1;
      const monthCols = [];
      calendarGraphList.forEach((column, col) => {
        const { date } = column.days[column.days.length - 1];
        if (!date) {
          return;
        }
        const dateDayjs = (0, import_dayjs.default)(date);
        const month = dateDayjs.get('months') + 1;
        if (month !== currentMonth && dateDayjs.get('date') <= 10) {
          currentMonth = month;
          monthCols.push({ col, month: `${dateDayjs.month() + 1} \u6708` });
        }
      });
      return /* @__PURE__ */ import_react.default.createElement(
        'g',
        {
          transform: `translate(${weekLabelWidth + svgHorzPadding}, 0)`,
          height: monthLabelHeight,
        },
        monthCols.map((item) =>
          /* @__PURE__ */ import_react.default.createElement(
            'text',
            {
              style: {
                dominantBaseline: 'text-before-edge',
                fontSize: 12,
              },
              key: `month-${item.month}`,
              className: `${prefixCls}-month-label`,
              x: item.col * sizeWithPadding,
            },
            item.month
          )
        )
      );
    };
    const renderBox = (date, record, box) => {
      if (props.boxRender) {
        return props.boxRender(box, record);
      }
      if (date.isSameOrAfter(Date.now(), 'day')) {
        return box;
      }
      return box;
    };
    const renderBoxContent = (
      isFurtherDays,
      { color, date, isActive, isOpacity },
      row
    ) => {
      const boxCls = [
        `${prefixCls}-day-box`,
        isOpacity ? `${prefixCls}-opacity` : '',
      ]
        .join(' ')
        .trim();
      if (isFurtherDays) {
        return /* @__PURE__ */ import_react.default.createElement(
          import_react.default.Fragment,
          { key: date?.toString() || color },
          /* @__PURE__ */ import_react.default.createElement('rect', {
            className: `${boxCls} ${isActive ? `${prefixCls}-active` : ''}`,
            height: boxSize,
            rx: 4,
            ry: 4,
            x: 0,
            y: row * sizeWithPadding,
            fill: '#f5f5f5',
            style: {
              cursor: 'pointer',
              outlineOffset: '-1px',
              pointerEvents: 'all',
              transition: 'all 0.3s',
              shapeRendering: 'geometricPrecision',
            },
          }),
          /* @__PURE__ */ import_react.default.createElement('rect', {
            className: `${boxCls} ${isActive ? `${prefixCls}-active` : ''}`,
            width: boxSize - 2,
            height: boxSize - 2,
            rx: 4,
            style: {
              cursor: 'pointer',
              outlineOffset: '-1px',
              pointerEvents: 'all',
              shapeRendering: 'geometricPrecision',
              transition: 'all 0.3s',
            },
            ry: 4,
            x: 1,
            y: row * sizeWithPadding + 1,
            fill: 'white',
          })
        );
      }
      return /* @__PURE__ */ import_react.default.createElement('rect', {
        key: date?.toString() || color,
        className: `${boxCls} ${isActive ? `${prefixCls}-active` : ''}`,
        width: boxSize,
        onClick: () => {
          if (!date) return;
          if (
            selectedDay ===
            (0, import_dayjs.default)(date)?.format('YYYY-MM-DD')
          ) {
            setSelectedDay('');
            return;
          }
          setSelectedDay((0, import_dayjs.default)(date)?.format('YYYY-MM-DD'));
        },
        height: boxSize,
        rx: 4,
        ry: 4,
        x: 0,
        style: {
          cursor: 'pointer',
          outlineOffset: '-1px',
          pointerEvents: 'all',
          shapeRendering: 'geometricPrecision',
          transition: 'all 0.3s',
        },
        y: row * sizeWithPadding,
        fill: color || '#f5f5f5',
      });
    };
    const renderWeekLabel = () => {
      return /* @__PURE__ */ import_react.default.createElement(
        'g',
        { transform: `translate(0, ${monthLabelHeight + 5})` },
        weekLabelList.map((item) =>
          /* @__PURE__ */ import_react.default.createElement(
            'text',
            {
              style: {
                dominantBaseline: 'text-before-edge',
                fontSize: 12,
              },
              key: `week${item.col}`,
              className: `${prefixCls}-week-label`,
              x: 0,
              fontSize: '12px',
              y: item.col * sizeWithPadding,
            },
            item.label
          )
        )
      );
    };
    const renderTips = () =>
      /* @__PURE__ */ import_react.default.createElement(
        'g',
        { transform: `translate(${width - tipWidth}, ${height + 25})` },
        tipsList.map(({ label, color }, index) =>
          /* @__PURE__ */ import_react.default.createElement(
            'g',
            {
              key: `tips-${label}-${color}`,
              transform: `translate(${index * sizeWithPadding}, 0)`,
            },
            label
              ? /* @__PURE__ */ import_react.default.createElement(
                  'text',
                  {
                    y: -1,
                    style: {
                      dominantBaseline: 'text-before-edge',
                      lineHeight: '12px',
                      margin: '0 5px',
                      transition: 'all 0.3s',
                    },
                    x: 0,
                    fontSize: '12px',
                    className: `${prefixCls}-tips-label ${prefixCls}-tips-label-label`,
                  },
                  label
                )
              : renderBoxContent(false, { color }, 0)
          )
        )
      );
    return /* @__PURE__ */ import_react.default.createElement(
      'svg',
      { width, height: height + boxSize + tipHeight },
      renderMonthLabel(),
      renderWeekLabel(),
      renderTips(),
      calendarGraphList.map((column, col) =>
        /* @__PURE__ */ import_react.default.createElement(
          'g',
          {
            key: `column-${col}`,
            transform: `translate(${
              col * sizeWithPadding + svgHorzPadding + weekLabelWidth
            }, ${monthLabelHeight + 8})`,
          },
          column.days.map((item, row) => {
            const { date } = item;
            const isActive =
              (0, import_dayjs.default)(date).format('YYYY-MM-DD') ===
              selectedDay;
            const color = getColor(item, isActive);
            const isFurtherDays = (0, import_dayjs.default)(date).isSameOrAfter(
              Date.now(),
              'day'
            );
            const isOpacity =
              !!selectedDay &&
              selectedDay !== 'no' &&
              (0, import_dayjs.default)(date).format('YYYY-MM-DD') !==
                selectedDay;
            return renderBox(
              (0, import_dayjs.default)(date),
              item,
              renderBoxContent(
                isFurtherDays,
                {
                  date: (0, import_dayjs.default)(date),
                  color,
                  isOpacity,
                  isActive,
                },
                row
              )
            );
          })
        )
      )
    );
  }
})();
/*! Bundled license information:

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
