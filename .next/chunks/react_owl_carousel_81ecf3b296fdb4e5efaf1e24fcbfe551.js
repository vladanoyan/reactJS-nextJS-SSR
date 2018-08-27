
        __NEXT_REGISTER_CHUNK('react_owl_carousel_81ecf3b296fdb4e5efaf1e24fcbfe551', function() {
      webpackJsonp([5],{

/***/ "./node_modules/create-react-class/factory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__("./node_modules/object-assign/index.js");

var emptyObject = __webpack_require__("./node_modules/fbjs/lib/emptyObject.js");
var _invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

if (true) {
  var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
}

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (true) {
        validateTypeDef(Constructor, childContextTypes, 'childContext');
      }
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (true) {
        validateTypeDef(Constructor, contextTypes, 'context');
      }
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (true) {
        validateTypeDef(Constructor, propTypes, 'prop');
      }
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (true) {
          warning(
            typeof typeDef[propName] === 'function',
            '%s: %s type `%s` is invalid; it must be a function, usually from ' +
              'React.PropTypes.',
            Constructor.displayName || 'ReactClass',
            ReactPropTypeLocationNames[location],
            propName
          );
        }
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (true) {
        var typeofSpec = typeof spec;
        var isMixinValid = typeofSpec === 'object' && spec !== null;

        if (true) {
          warning(
            isMixinValid,
            "%s: You're attempting to include a mixin that is either null " +
              'or not an object. Check the mixins included by the component, ' +
              'as well as any mixins they include themselves. ' +
              'Expected object but got %s.',
            Constructor.displayName || 'ReactClass',
            spec === null ? null : typeofSpec
          );
        }
      }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (true) {
              // Add verbose displayName to the function, which helps when looking
              // at profiling tools.
              if (typeof property === 'function' && spec.displayName) {
                proto[name].displayName = spec.displayName + '_' + name;
              }
            }
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (true) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis) {
        for (
          var _len = arguments.length,
            args = Array(_len > 1 ? _len - 1 : 0),
            _key = 1;
          _key < _len;
          _key++
        ) {
          args[_key - 1] = arguments[_key];
        }

        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          if (true) {
            warning(
              false,
              'bind(): React component methods may only be bound to the ' +
                'component instance. See %s',
              componentName
            );
          }
        } else if (!args.length) {
          if (true) {
            warning(
              false,
              'bind(): You are binding a component method to the component. ' +
                'React does this for you automatically in a high-performance ' +
                'way, so you can safely remove this call. See %s',
              componentName
            );
          }
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (true) {
        warning(
          this.__didWarnIsMounted,
          '%s: isMounted is deprecated. Instead, make sure to clean up ' +
            'subscriptions and pending requests in componentWillUnmount to ' +
            'prevent memory leaks.',
          (this.constructor && this.constructor.displayName) ||
            this.name ||
            'Component'
        );
        this.__didWarnIsMounted = true;
      }
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (true) {
        warning(
          this instanceof Constructor,
          'Something is calling a React component directly. Use a factory or ' +
            'JSX instead. See: https://fb.me/react-legacyfactory'
        );
      }

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (true) {
        // We allow auto-mocks to proceed as if they're returning null.
        if (
          initialState === undefined &&
          this.getInitialState._isMockFunction
        ) {
          // This is probably bad practice. Consider warning here and
          // deprecating this convenience.
          initialState = null;
        }
      }
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (true) {
      // This is a tag to indicate that the use of these method names is ok,
      // since it's used with createClass. If it's not, then it's likely a
      // mistake so we'll warn you to use the static property, property
      // initializer or constructor respectively.
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps.isReactClassApproved = {};
      }
      if (Constructor.prototype.getInitialState) {
        Constructor.prototype.getInitialState.isReactClassApproved = {};
      }
    }

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (true) {
      warning(
        !Constructor.prototype.componentShouldUpdate,
        '%s has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.componentWillRecieveProps,
        '%s has a method called ' +
          'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
      warning(
        !Constructor.prototype.UNSAFE_componentWillRecieveProps,
        '%s has a method called UNSAFE_componentWillRecieveProps(). ' +
          'Did you mean UNSAFE_componentWillReceiveProps()?',
        spec.displayName || 'A component'
      );
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),

/***/ "./node_modules/next/node_modules/prop-types/factory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



// React 15.5 references this module, and assumes PropTypes are still callable in production.
// Therefore we re-export development-only version with all the PropTypes checks here.
// However if one is migrating to the `prop-types` npm library, they will go through the
// `index.js` entry point, and it will branch depending on the environment.
var factory = __webpack_require__("./node_modules/next/node_modules/prop-types/factoryWithTypeCheckers.js");
module.exports = function(isValidElement) {
  // It is still allowed in 15.5.
  var throwOnDirectAccess = false;
  return factory(isValidElement, throwOnDirectAccess);
};


/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/KeyEscapeUtils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */

function escape(key) {
  var escapeRegex = /[=:]/g;
  var escaperLookup = {
    '=': '=0',
    ':': '=2'
  };
  var escapedString = ('' + key).replace(escapeRegex, function (match) {
    return escaperLookup[match];
  });

  return '$' + escapedString;
}

/**
 * Unescape and unwrap key for human-readable display
 *
 * @param {string} key to unescape.
 * @return {string} the unescaped key.
 */
function unescape(key) {
  var unescapeRegex = /(=0|=2)/g;
  var unescaperLookup = {
    '=0': '=',
    '=2': ':'
  };
  var keySubstring = key[0] === '.' && key[1] === '$' ? key.substring(2) : key.substring(1);

  return ('' + keySubstring).replace(unescapeRegex, function (match) {
    return unescaperLookup[match];
  });
}

var KeyEscapeUtils = {
  escape: escape,
  unescape: unescape
};

module.exports = KeyEscapeUtils;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/PooledClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var _prodInvariant = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/reactProdInvariant.js");

var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function (copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function (a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function (a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fourArgumentPooler = function (a1, a2, a3, a4) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4);
  }
};

var standardReleaser = function (instance) {
  var Klass = this;
  !(instance instanceof Klass) ?  true ? invariant(false, 'Trying to release an instance into a pool of a different type.') : _prodInvariant('25') : void 0;
  instance.destructor();
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances.
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function (CopyConstructor, pooler) {
  // Casting as any so that flow ignores the actual implementation and trusts
  // it to match the type we declared
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fourArgumentPooler: fourArgumentPooler
};

module.exports = PooledClass;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/React.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactBaseClasses = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactBaseClasses.js");
var ReactChildren = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactChildren.js");
var ReactDOMFactories = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactDOMFactories.js");
var ReactElement = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElement.js");
var ReactPropTypes = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactPropTypes.js");
var ReactVersion = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactVersion.js");

var createReactClass = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/createClass.js");
var onlyChild = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/onlyChild.js");

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;
var cloneElement = ReactElement.cloneElement;

if (true) {
  var lowPriorityWarning = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/lowPriorityWarning.js");
  var canDefineProperty = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/canDefineProperty.js");
  var ReactElementValidator = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElementValidator.js");
  var didWarnPropTypesDeprecated = false;
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
  cloneElement = ReactElementValidator.cloneElement;
}

var __spread = _assign;
var createMixin = function (mixin) {
  return mixin;
};

if (true) {
  var warnedForSpread = false;
  var warnedForCreateMixin = false;
  __spread = function () {
    lowPriorityWarning(warnedForSpread, 'React.__spread is deprecated and should not be used. Use ' + 'Object.assign directly or another helper function with similar ' + 'semantics. You may be seeing this warning due to your compiler. ' + 'See https://fb.me/react-spread-deprecation for more details.');
    warnedForSpread = true;
    return _assign.apply(null, arguments);
  };

  createMixin = function (mixin) {
    lowPriorityWarning(warnedForCreateMixin, 'React.createMixin is deprecated and should not be used. ' + 'In React v16.0, it will be removed. ' + 'You can use this mixin directly instead. ' + 'See https://fb.me/createmixin-was-never-implemented for more info.');
    warnedForCreateMixin = true;
    return mixin;
  };
}

var React = {
  // Modern

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    toArray: ReactChildren.toArray,
    only: onlyChild
  },

  Component: ReactBaseClasses.Component,
  PureComponent: ReactBaseClasses.PureComponent,

  createElement: createElement,
  cloneElement: cloneElement,
  isValidElement: ReactElement.isValidElement,

  // Classic

  PropTypes: ReactPropTypes,
  createClass: createReactClass,
  createFactory: createFactory,
  createMixin: createMixin,

  // This looks DOM specific but these are actually isomorphic helpers
  // since they are just generating DOM strings.
  DOM: ReactDOMFactories,

  version: ReactVersion,

  // Deprecated hook for JSX spread, don't use this for anything.
  __spread: __spread
};

if (true) {
  var warnedForCreateClass = false;
  if (canDefineProperty) {
    Object.defineProperty(React, 'PropTypes', {
      get: function () {
        lowPriorityWarning(didWarnPropTypesDeprecated, 'Accessing PropTypes via the main React package is deprecated,' + ' and will be removed in  React v16.0.' + ' Use the latest available v15.* prop-types package from npm instead.' + ' For info on usage, compatibility, migration and more, see ' + 'https://fb.me/prop-types-docs');
        didWarnPropTypesDeprecated = true;
        return ReactPropTypes;
      }
    });

    Object.defineProperty(React, 'createClass', {
      get: function () {
        lowPriorityWarning(warnedForCreateClass, 'Accessing createClass via the main React package is deprecated,' + ' and will be removed in React v16.0.' + " Use a plain JavaScript class instead. If you're not yet " + 'ready to migrate, create-react-class v15.* is available ' + 'on npm as a temporary, drop-in replacement. ' + 'For more info see https://fb.me/react-create-class');
        warnedForCreateClass = true;
        return createReactClass;
      }
    });
  }

  // React.DOM factories are deprecated. Wrap these methods so that
  // invocations of the React.DOM namespace and alert users to switch
  // to the `react-dom-factories` package.
  React.DOM = {};
  var warnedForFactories = false;
  Object.keys(ReactDOMFactories).forEach(function (factory) {
    React.DOM[factory] = function () {
      if (!warnedForFactories) {
        lowPriorityWarning(false, 'Accessing factories like React.DOM.%s has been deprecated ' + 'and will be removed in v16.0+. Use the ' + 'react-dom-factories package instead. ' + ' Version 1.0 provides a drop-in replacement.' + ' For more info, see https://fb.me/react-dom-factories', factory);
        warnedForFactories = true;
      }
      return ReactDOMFactories[factory].apply(ReactDOMFactories, arguments);
    };
  });
}

module.exports = React;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactBaseClasses.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _prodInvariant = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/reactProdInvariant.js"),
    _assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactNoopUpdateQueue = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactNoopUpdateQueue.js");

var canDefineProperty = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/canDefineProperty.js");
var emptyObject = __webpack_require__("./node_modules/fbjs/lib/emptyObject.js");
var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
var lowPriorityWarning = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/lowPriorityWarning.js");

/**
 * Base class helpers for the updating state of a component.
 */
function ReactComponent(props, context, updater) {
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

ReactComponent.prototype.isReactComponent = {};

/**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */
ReactComponent.prototype.setState = function (partialState, callback) {
  !(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null) ?  true ? invariant(false, 'setState(...): takes an object of state variables to update or a function which returns an object of state variables.') : _prodInvariant('85') : void 0;
  this.updater.enqueueSetState(this, partialState);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'setState');
  }
};

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
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */
ReactComponent.prototype.forceUpdate = function (callback) {
  this.updater.enqueueForceUpdate(this);
  if (callback) {
    this.updater.enqueueCallback(this, callback, 'forceUpdate');
  }
};

/**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */
if (true) {
  var deprecatedAPIs = {
    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
  };
  var defineDeprecationWarning = function (methodName, info) {
    if (canDefineProperty) {
      Object.defineProperty(ReactComponent.prototype, methodName, {
        get: function () {
          lowPriorityWarning(false, '%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
          return undefined;
        }
      });
    }
  };
  for (var fnName in deprecatedAPIs) {
    if (deprecatedAPIs.hasOwnProperty(fnName)) {
      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    }
  }
}

/**
 * Base class helpers for the updating state of a component.
 */
function ReactPureComponent(props, context, updater) {
  // Duplicated from ReactComponent.
  this.props = props;
  this.context = context;
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

function ComponentDummy() {}
ComponentDummy.prototype = ReactComponent.prototype;
ReactPureComponent.prototype = new ComponentDummy();
ReactPureComponent.prototype.constructor = ReactPureComponent;
// Avoid an extra prototype jump for these methods.
_assign(ReactPureComponent.prototype, ReactComponent.prototype);
ReactPureComponent.prototype.isPureReactComponent = true;

module.exports = {
  Component: ReactComponent,
  PureComponent: ReactPureComponent
};

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactChildren.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var PooledClass = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/PooledClass.js");
var ReactElement = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElement.js");

var emptyFunction = __webpack_require__("./node_modules/fbjs/lib/emptyFunction.js");
var traverseAllChildren = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/traverseAllChildren.js");

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var fourArgumentPooler = PooledClass.fourArgumentPooler;

var userProvidedKeyEscapeRegex = /\/+/g;
function escapeUserProvidedKey(text) {
  return ('' + text).replace(userProvidedKeyEscapeRegex, '$&/');
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.func = forEachFunction;
  this.context = forEachContext;
  this.count = 0;
}
ForEachBookKeeping.prototype.destructor = function () {
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(bookKeeping, child, name) {
  var func = bookKeeping.func,
      context = bookKeeping.context;

  func.call(context, child, bookKeeping.count++);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.foreach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }
  var traverseContext = ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, keyPrefix, mapFunction, mapContext) {
  this.result = mapResult;
  this.keyPrefix = keyPrefix;
  this.func = mapFunction;
  this.context = mapContext;
  this.count = 0;
}
MapBookKeeping.prototype.destructor = function () {
  this.result = null;
  this.keyPrefix = null;
  this.func = null;
  this.context = null;
  this.count = 0;
};
PooledClass.addPoolingTo(MapBookKeeping, fourArgumentPooler);

function mapSingleChildIntoContext(bookKeeping, child, childKey) {
  var result = bookKeeping.result,
      keyPrefix = bookKeeping.keyPrefix,
      func = bookKeeping.func,
      context = bookKeeping.context;


  var mappedChild = func.call(context, child, bookKeeping.count++);
  if (Array.isArray(mappedChild)) {
    mapIntoWithKeyPrefixInternal(mappedChild, result, childKey, emptyFunction.thatReturnsArgument);
  } else if (mappedChild != null) {
    if (ReactElement.isValidElement(mappedChild)) {
      mappedChild = ReactElement.cloneAndReplaceKey(mappedChild,
      // Keep both the (mapped) and old keys if they differ, just as
      // traverseAllChildren used to do for objects as children
      keyPrefix + (mappedChild.key && (!child || child.key !== mappedChild.key) ? escapeUserProvidedKey(mappedChild.key) + '/' : '') + childKey);
    }
    result.push(mappedChild);
  }
}

function mapIntoWithKeyPrefixInternal(children, array, prefix, func, context) {
  var escapedPrefix = '';
  if (prefix != null) {
    escapedPrefix = escapeUserProvidedKey(prefix) + '/';
  }
  var traverseContext = MapBookKeeping.getPooled(array, escapedPrefix, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.map
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, func, context);
  return result;
}

function forEachSingleChildDummy(traverseContext, child, name) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.count
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.toarray
 */
function toArray(children) {
  var result = [];
  mapIntoWithKeyPrefixInternal(children, result, null, emptyFunction.thatReturnsArgument);
  return result;
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  mapIntoWithKeyPrefixInternal: mapIntoWithKeyPrefixInternal,
  count: countChildren,
  toArray: toArray
};

module.exports = ReactChildren;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactComponentTreeHook.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2016-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var _prodInvariant = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/reactProdInvariant.js");

var ReactCurrentOwner = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactCurrentOwner.js");

var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

function isNative(fn) {
  // Based on isNative() from Lodash
  var funcToString = Function.prototype.toString;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString
  // Take an example native function source for comparison
  .call(hasOwnProperty
  // Strip regex characters so we can use it for regex
  ).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&'
  // Remove hasOwnProperty from the template to make it generic
  ).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
  try {
    var source = funcToString.call(fn);
    return reIsNative.test(source);
  } catch (err) {
    return false;
  }
}

var canUseCollections =
// Array.from
typeof Array.from === 'function' &&
// Map
typeof Map === 'function' && isNative(Map) &&
// Map.prototype.keys
Map.prototype != null && typeof Map.prototype.keys === 'function' && isNative(Map.prototype.keys) &&
// Set
typeof Set === 'function' && isNative(Set) &&
// Set.prototype.keys
Set.prototype != null && typeof Set.prototype.keys === 'function' && isNative(Set.prototype.keys);

var setItem;
var getItem;
var removeItem;
var getItemIDs;
var addRoot;
var removeRoot;
var getRootIDs;

if (canUseCollections) {
  var itemMap = new Map();
  var rootIDSet = new Set();

  setItem = function (id, item) {
    itemMap.set(id, item);
  };
  getItem = function (id) {
    return itemMap.get(id);
  };
  removeItem = function (id) {
    itemMap['delete'](id);
  };
  getItemIDs = function () {
    return Array.from(itemMap.keys());
  };

  addRoot = function (id) {
    rootIDSet.add(id);
  };
  removeRoot = function (id) {
    rootIDSet['delete'](id);
  };
  getRootIDs = function () {
    return Array.from(rootIDSet.keys());
  };
} else {
  var itemByKey = {};
  var rootByKey = {};

  // Use non-numeric keys to prevent V8 performance issues:
  // https://github.com/facebook/react/pull/7232
  var getKeyFromID = function (id) {
    return '.' + id;
  };
  var getIDFromKey = function (key) {
    return parseInt(key.substr(1), 10);
  };

  setItem = function (id, item) {
    var key = getKeyFromID(id);
    itemByKey[key] = item;
  };
  getItem = function (id) {
    var key = getKeyFromID(id);
    return itemByKey[key];
  };
  removeItem = function (id) {
    var key = getKeyFromID(id);
    delete itemByKey[key];
  };
  getItemIDs = function () {
    return Object.keys(itemByKey).map(getIDFromKey);
  };

  addRoot = function (id) {
    var key = getKeyFromID(id);
    rootByKey[key] = true;
  };
  removeRoot = function (id) {
    var key = getKeyFromID(id);
    delete rootByKey[key];
  };
  getRootIDs = function () {
    return Object.keys(rootByKey).map(getIDFromKey);
  };
}

var unmountedIDs = [];

function purgeDeep(id) {
  var item = getItem(id);
  if (item) {
    var childIDs = item.childIDs;

    removeItem(id);
    childIDs.forEach(purgeDeep);
  }
}

function describeComponentFrame(name, source, ownerName) {
  return '\n    in ' + (name || 'Unknown') + (source ? ' (at ' + source.fileName.replace(/^.*[\\\/]/, '') + ':' + source.lineNumber + ')' : ownerName ? ' (created by ' + ownerName + ')' : '');
}

function getDisplayName(element) {
  if (element == null) {
    return '#empty';
  } else if (typeof element === 'string' || typeof element === 'number') {
    return '#text';
  } else if (typeof element.type === 'string') {
    return element.type;
  } else {
    return element.type.displayName || element.type.name || 'Unknown';
  }
}

function describeID(id) {
  var name = ReactComponentTreeHook.getDisplayName(id);
  var element = ReactComponentTreeHook.getElement(id);
  var ownerID = ReactComponentTreeHook.getOwnerID(id);
  var ownerName;
  if (ownerID) {
    ownerName = ReactComponentTreeHook.getDisplayName(ownerID);
  }
   true ? warning(element, 'ReactComponentTreeHook: Missing React element for debugID %s when ' + 'building stack', id) : void 0;
  return describeComponentFrame(name, element && element._source, ownerName);
}

var ReactComponentTreeHook = {
  onSetChildren: function (id, nextChildIDs) {
    var item = getItem(id);
    !item ?  true ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.childIDs = nextChildIDs;

    for (var i = 0; i < nextChildIDs.length; i++) {
      var nextChildID = nextChildIDs[i];
      var nextChild = getItem(nextChildID);
      !nextChild ?  true ? invariant(false, 'Expected hook events to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('140') : void 0;
      !(nextChild.childIDs != null || typeof nextChild.element !== 'object' || nextChild.element == null) ?  true ? invariant(false, 'Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().') : _prodInvariant('141') : void 0;
      !nextChild.isMounted ?  true ? invariant(false, 'Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().') : _prodInvariant('71') : void 0;
      if (nextChild.parentID == null) {
        nextChild.parentID = id;
        // TODO: This shouldn't be necessary but mounting a new root during in
        // componentWillMount currently causes not-yet-mounted components to
        // be purged from our tree data so their parent id is missing.
      }
      !(nextChild.parentID === id) ?  true ? invariant(false, 'Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).', nextChildID, nextChild.parentID, id) : _prodInvariant('142', nextChildID, nextChild.parentID, id) : void 0;
    }
  },
  onBeforeMountComponent: function (id, element, parentID) {
    var item = {
      element: element,
      parentID: parentID,
      text: null,
      childIDs: [],
      isMounted: false,
      updateCount: 0
    };
    setItem(id, item);
  },
  onBeforeUpdateComponent: function (id, element) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.element = element;
  },
  onMountComponent: function (id) {
    var item = getItem(id);
    !item ?  true ? invariant(false, 'Item must have been set') : _prodInvariant('144') : void 0;
    item.isMounted = true;
    var isRoot = item.parentID === 0;
    if (isRoot) {
      addRoot(id);
    }
  },
  onUpdateComponent: function (id) {
    var item = getItem(id);
    if (!item || !item.isMounted) {
      // We may end up here as a result of setState() in componentWillUnmount().
      // In this case, ignore the element.
      return;
    }
    item.updateCount++;
  },
  onUnmountComponent: function (id) {
    var item = getItem(id);
    if (item) {
      // We need to check if it exists.
      // `item` might not exist if it is inside an error boundary, and a sibling
      // error boundary child threw while mounting. Then this instance never
      // got a chance to mount, but it still gets an unmounting event during
      // the error boundary cleanup.
      item.isMounted = false;
      var isRoot = item.parentID === 0;
      if (isRoot) {
        removeRoot(id);
      }
    }
    unmountedIDs.push(id);
  },
  purgeUnmountedComponents: function () {
    if (ReactComponentTreeHook._preventPurging) {
      // Should only be used for testing.
      return;
    }

    for (var i = 0; i < unmountedIDs.length; i++) {
      var id = unmountedIDs[i];
      purgeDeep(id);
    }
    unmountedIDs.length = 0;
  },
  isMounted: function (id) {
    var item = getItem(id);
    return item ? item.isMounted : false;
  },
  getCurrentStackAddendum: function (topElement) {
    var info = '';
    if (topElement) {
      var name = getDisplayName(topElement);
      var owner = topElement._owner;
      info += describeComponentFrame(name, topElement._source, owner && owner.getName());
    }

    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    info += ReactComponentTreeHook.getStackAddendumByID(id);
    return info;
  },
  getStackAddendumByID: function (id) {
    var info = '';
    while (id) {
      info += describeID(id);
      id = ReactComponentTreeHook.getParentID(id);
    }
    return info;
  },
  getChildIDs: function (id) {
    var item = getItem(id);
    return item ? item.childIDs : [];
  },
  getDisplayName: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element) {
      return null;
    }
    return getDisplayName(element);
  },
  getElement: function (id) {
    var item = getItem(id);
    return item ? item.element : null;
  },
  getOwnerID: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (!element || !element._owner) {
      return null;
    }
    return element._owner._debugID;
  },
  getParentID: function (id) {
    var item = getItem(id);
    return item ? item.parentID : null;
  },
  getSource: function (id) {
    var item = getItem(id);
    var element = item ? item.element : null;
    var source = element != null ? element._source : null;
    return source;
  },
  getText: function (id) {
    var element = ReactComponentTreeHook.getElement(id);
    if (typeof element === 'string') {
      return element;
    } else if (typeof element === 'number') {
      return '' + element;
    } else {
      return null;
    }
  },
  getUpdateCount: function (id) {
    var item = getItem(id);
    return item ? item.updateCount : 0;
  },


  getRootIDs: getRootIDs,
  getRegisteredIDs: getItemIDs,

  pushNonStandardWarningStack: function (isCreatingElement, currentSource) {
    if (typeof console.reactStack !== 'function') {
      return;
    }

    var stack = [];
    var currentOwner = ReactCurrentOwner.current;
    var id = currentOwner && currentOwner._debugID;

    try {
      if (isCreatingElement) {
        stack.push({
          name: id ? ReactComponentTreeHook.getDisplayName(id) : null,
          fileName: currentSource ? currentSource.fileName : null,
          lineNumber: currentSource ? currentSource.lineNumber : null
        });
      }

      while (id) {
        var element = ReactComponentTreeHook.getElement(id);
        var parentID = ReactComponentTreeHook.getParentID(id);
        var ownerID = ReactComponentTreeHook.getOwnerID(id);
        var ownerName = ownerID ? ReactComponentTreeHook.getDisplayName(ownerID) : null;
        var source = element && element._source;
        stack.push({
          name: ownerName,
          fileName: source ? source.fileName : null,
          lineNumber: source ? source.lineNumber : null
        });
        id = parentID;
      }
    } catch (err) {
      // Internal state is messed up.
      // Stop building the stack (it's just a nice to have).
    }

    console.reactStack(stack);
  },
  popNonStandardWarningStack: function () {
    if (typeof console.reactStackEnd !== 'function') {
      return;
    }
    console.reactStackEnd();
  }
};

module.exports = ReactComponentTreeHook;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactCurrentOwner.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */
var ReactCurrentOwner = {
  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null
};

module.exports = ReactCurrentOwner;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactDOMFactories.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var ReactElement = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElement.js");

/**
 * Create a factory that creates HTML tag elements.
 *
 * @private
 */
var createDOMFactory = ReactElement.createFactory;
if (true) {
  var ReactElementValidator = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElementValidator.js");
  createDOMFactory = ReactElementValidator.createFactory;
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 *
 * @public
 */
var ReactDOMFactories = {
  a: createDOMFactory('a'),
  abbr: createDOMFactory('abbr'),
  address: createDOMFactory('address'),
  area: createDOMFactory('area'),
  article: createDOMFactory('article'),
  aside: createDOMFactory('aside'),
  audio: createDOMFactory('audio'),
  b: createDOMFactory('b'),
  base: createDOMFactory('base'),
  bdi: createDOMFactory('bdi'),
  bdo: createDOMFactory('bdo'),
  big: createDOMFactory('big'),
  blockquote: createDOMFactory('blockquote'),
  body: createDOMFactory('body'),
  br: createDOMFactory('br'),
  button: createDOMFactory('button'),
  canvas: createDOMFactory('canvas'),
  caption: createDOMFactory('caption'),
  cite: createDOMFactory('cite'),
  code: createDOMFactory('code'),
  col: createDOMFactory('col'),
  colgroup: createDOMFactory('colgroup'),
  data: createDOMFactory('data'),
  datalist: createDOMFactory('datalist'),
  dd: createDOMFactory('dd'),
  del: createDOMFactory('del'),
  details: createDOMFactory('details'),
  dfn: createDOMFactory('dfn'),
  dialog: createDOMFactory('dialog'),
  div: createDOMFactory('div'),
  dl: createDOMFactory('dl'),
  dt: createDOMFactory('dt'),
  em: createDOMFactory('em'),
  embed: createDOMFactory('embed'),
  fieldset: createDOMFactory('fieldset'),
  figcaption: createDOMFactory('figcaption'),
  figure: createDOMFactory('figure'),
  footer: createDOMFactory('footer'),
  form: createDOMFactory('form'),
  h1: createDOMFactory('h1'),
  h2: createDOMFactory('h2'),
  h3: createDOMFactory('h3'),
  h4: createDOMFactory('h4'),
  h5: createDOMFactory('h5'),
  h6: createDOMFactory('h6'),
  head: createDOMFactory('head'),
  header: createDOMFactory('header'),
  hgroup: createDOMFactory('hgroup'),
  hr: createDOMFactory('hr'),
  html: createDOMFactory('html'),
  i: createDOMFactory('i'),
  iframe: createDOMFactory('iframe'),
  img: createDOMFactory('img'),
  input: createDOMFactory('input'),
  ins: createDOMFactory('ins'),
  kbd: createDOMFactory('kbd'),
  keygen: createDOMFactory('keygen'),
  label: createDOMFactory('label'),
  legend: createDOMFactory('legend'),
  li: createDOMFactory('li'),
  link: createDOMFactory('link'),
  main: createDOMFactory('main'),
  map: createDOMFactory('map'),
  mark: createDOMFactory('mark'),
  menu: createDOMFactory('menu'),
  menuitem: createDOMFactory('menuitem'),
  meta: createDOMFactory('meta'),
  meter: createDOMFactory('meter'),
  nav: createDOMFactory('nav'),
  noscript: createDOMFactory('noscript'),
  object: createDOMFactory('object'),
  ol: createDOMFactory('ol'),
  optgroup: createDOMFactory('optgroup'),
  option: createDOMFactory('option'),
  output: createDOMFactory('output'),
  p: createDOMFactory('p'),
  param: createDOMFactory('param'),
  picture: createDOMFactory('picture'),
  pre: createDOMFactory('pre'),
  progress: createDOMFactory('progress'),
  q: createDOMFactory('q'),
  rp: createDOMFactory('rp'),
  rt: createDOMFactory('rt'),
  ruby: createDOMFactory('ruby'),
  s: createDOMFactory('s'),
  samp: createDOMFactory('samp'),
  script: createDOMFactory('script'),
  section: createDOMFactory('section'),
  select: createDOMFactory('select'),
  small: createDOMFactory('small'),
  source: createDOMFactory('source'),
  span: createDOMFactory('span'),
  strong: createDOMFactory('strong'),
  style: createDOMFactory('style'),
  sub: createDOMFactory('sub'),
  summary: createDOMFactory('summary'),
  sup: createDOMFactory('sup'),
  table: createDOMFactory('table'),
  tbody: createDOMFactory('tbody'),
  td: createDOMFactory('td'),
  textarea: createDOMFactory('textarea'),
  tfoot: createDOMFactory('tfoot'),
  th: createDOMFactory('th'),
  thead: createDOMFactory('thead'),
  time: createDOMFactory('time'),
  title: createDOMFactory('title'),
  tr: createDOMFactory('tr'),
  track: createDOMFactory('track'),
  u: createDOMFactory('u'),
  ul: createDOMFactory('ul'),
  'var': createDOMFactory('var'),
  video: createDOMFactory('video'),
  wbr: createDOMFactory('wbr'),

  // SVG
  circle: createDOMFactory('circle'),
  clipPath: createDOMFactory('clipPath'),
  defs: createDOMFactory('defs'),
  ellipse: createDOMFactory('ellipse'),
  g: createDOMFactory('g'),
  image: createDOMFactory('image'),
  line: createDOMFactory('line'),
  linearGradient: createDOMFactory('linearGradient'),
  mask: createDOMFactory('mask'),
  path: createDOMFactory('path'),
  pattern: createDOMFactory('pattern'),
  polygon: createDOMFactory('polygon'),
  polyline: createDOMFactory('polyline'),
  radialGradient: createDOMFactory('radialGradient'),
  rect: createDOMFactory('rect'),
  stop: createDOMFactory('stop'),
  svg: createDOMFactory('svg'),
  text: createDOMFactory('text'),
  tspan: createDOMFactory('tspan')
};

module.exports = ReactDOMFactories;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactElement.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__("./node_modules/object-assign/index.js");

var ReactCurrentOwner = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactCurrentOwner.js");

var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
var canDefineProperty = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/canDefineProperty.js");
var hasOwnProperty = Object.prototype.hasOwnProperty;

var REACT_ELEMENT_TYPE = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElementSymbol.js");

var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};

var specialPropKeyWarningShown, specialPropRefWarningShown;

function hasValidRef(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.ref !== undefined;
}

function hasValidKey(config) {
  if (true) {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }
  return config.key !== undefined;
}

function defineKeyPropWarningGetter(props, displayName) {
  var warnAboutAccessingKey = function () {
    if (!specialPropKeyWarningShown) {
      specialPropKeyWarningShown = true;
       true ? warning(false, '%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingKey.isReactWarning = true;
  Object.defineProperty(props, 'key', {
    get: warnAboutAccessingKey,
    configurable: true
  });
}

function defineRefPropWarningGetter(props, displayName) {
  var warnAboutAccessingRef = function () {
    if (!specialPropRefWarningShown) {
      specialPropRefWarningShown = true;
       true ? warning(false, '%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://fb.me/react-special-props)', displayName) : void 0;
    }
  };
  warnAboutAccessingRef.isReactWarning = true;
  Object.defineProperty(props, 'ref', {
    get: warnAboutAccessingRef,
    configurable: true
  });
}

/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */
var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allow us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,

    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,

    // Record the component responsible for creating this element.
    _owner: owner
  };

  if (true) {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {};

    // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.
    if (canDefineProperty) {
      Object.defineProperty(element._store, 'validated', {
        configurable: false,
        enumerable: false,
        writable: true,
        value: false
      });
      // self and source are DEV only properties.
      Object.defineProperty(element, '_self', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: self
      });
      // Two elements created in two different places should be considered
      // equal for testing purposes and therefore we hide it from enumeration.
      Object.defineProperty(element, '_source', {
        configurable: false,
        enumerable: false,
        writable: false,
        value: source
      });
    } else {
      element._store.validated = false;
      element._self = self;
      element._source = source;
    }
    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};

/**
 * Create and return a new ReactElement of the given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createelement
 */
ReactElement.createElement = function (type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (true) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (true) {
    if (key || ref) {
      if (typeof props.$$typeof === 'undefined' || props.$$typeof !== REACT_ELEMENT_TYPE) {
        var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
        if (key) {
          defineKeyPropWarningGetter(props, displayName);
        }
        if (ref) {
          defineRefPropWarningGetter(props, displayName);
        }
      }
    }
  }
  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
};

/**
 * Return a function that produces ReactElements of a given type.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.createfactory
 */
ReactElement.createFactory = function (type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. `<Foo />.type === Foo`.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  // Legacy hook TODO: Warn if this is accessed
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceKey = function (oldElement, newKey) {
  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);

  return newElement;
};

/**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.cloneelement
 */
ReactElement.cloneElement = function (element, config, children) {
  var propName;

  // Original props are copied
  var props = _assign({}, element.props);

  // Reserved names are extracted
  var key = element.key;
  var ref = element.ref;
  // Self is preserved since the owner is preserved.
  var self = element._self;
  // Source is preserved since cloneElement is unlikely to be targeted by a
  // transpiler, and the original source is probably a better indicator of the
  // true owner.
  var source = element._source;

  // Owner will be preserved, unless ref is overridden
  var owner = element._owner;

  if (config != null) {
    if (hasValidRef(config)) {
      // Silently steal the ref from the parent.
      ref = config.ref;
      owner = ReactCurrentOwner.current;
    }
    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    // Remaining properties override existing props
    var defaultProps;
    if (element.type && element.type.defaultProps) {
      defaultProps = element.type.defaultProps;
    }
    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        if (config[propName] === undefined && defaultProps !== undefined) {
          // Resolve default props
          props[propName] = defaultProps[propName];
        } else {
          props[propName] = config[propName];
        }
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
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

  return ReactElement(element.type, key, ref, self, source, owner, props);
};

/**
 * Verifies the object is a ReactElement.
 * See https://facebook.github.io/react/docs/top-level-api.html#react.isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function (object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
};

module.exports = ReactElement;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactElementSymbol.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



// The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.

var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol['for'] && Symbol['for']('react.element') || 0xeac7;

module.exports = REACT_ELEMENT_TYPE;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactElementValidator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */



var ReactCurrentOwner = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactCurrentOwner.js");
var ReactComponentTreeHook = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactComponentTreeHook.js");
var ReactElement = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElement.js");

var checkReactTypeSpec = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/checkReactTypeSpec.js");

var canDefineProperty = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/canDefineProperty.js");
var getIteratorFn = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/getIteratorFn.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");
var lowPriorityWarning = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/lowPriorityWarning.js");

function getDeclarationErrorAddendum() {
  if (ReactCurrentOwner.current) {
    var name = ReactCurrentOwner.current.getName();
    if (name) {
      return ' Check the render method of `' + name + '`.';
    }
  }
  return '';
}

function getSourceInfoErrorAddendum(elementProps) {
  if (elementProps !== null && elementProps !== undefined && elementProps.__source !== undefined) {
    var source = elementProps.__source;
    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
    var lineNumber = source.lineNumber;
    return ' Check your code at ' + fileName + ':' + lineNumber + '.';
  }
  return '';
}

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  var info = getDeclarationErrorAddendum();

  if (!info) {
    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
    if (parentName) {
      info = ' Check the top-level render call using <' + parentName + '>.';
    }
  }
  return info;
}

/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */
function validateExplicitKey(element, parentType) {
  if (!element._store || element._store.validated || element.key != null) {
    return;
  }
  element._store.validated = true;

  var memoizer = ownerHasKeyUseWarning.uniqueKey || (ownerHasKeyUseWarning.uniqueKey = {});

  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
  if (memoizer[currentComponentErrorInfo]) {
    return;
  }
  memoizer[currentComponentErrorInfo] = true;

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwner = '';
  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
    // Give the component that originally created this child.
    childOwner = ' It was passed a child from ' + element._owner.getName() + '.';
  }

   true ? warning(false, 'Each child in an array or iterator should have a unique "key" prop.' + '%s%s See https://fb.me/react-warning-keys for more information.%s', currentComponentErrorInfo, childOwner, ReactComponentTreeHook.getCurrentStackAddendum(element)) : void 0;
}

/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */
function validateChildKeys(node, parentType) {
  if (typeof node !== 'object') {
    return;
  }
  if (Array.isArray(node)) {
    for (var i = 0; i < node.length; i++) {
      var child = node[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(node)) {
    // This element was passed in a valid location.
    if (node._store) {
      node._store.validated = true;
    }
  } else if (node) {
    var iteratorFn = getIteratorFn(node);
    // Entry iterators provide implicit keys.
    if (iteratorFn) {
      if (iteratorFn !== node.entries) {
        var iterator = iteratorFn.call(node);
        var step;
        while (!(step = iterator.next()).done) {
          if (ReactElement.isValidElement(step.value)) {
            validateExplicitKey(step.value, parentType);
          }
        }
      }
    }
  }
}

/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */
function validatePropTypes(element) {
  var componentClass = element.type;
  if (typeof componentClass !== 'function') {
    return;
  }
  var name = componentClass.displayName || componentClass.name;
  if (componentClass.propTypes) {
    checkReactTypeSpec(componentClass.propTypes, element.props, 'prop', name, element, null);
  }
  if (typeof componentClass.getDefaultProps === 'function') {
     true ? warning(componentClass.getDefaultProps.isReactClassApproved, 'getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.') : void 0;
  }
}

var ReactElementValidator = {
  createElement: function (type, props, children) {
    var validType = typeof type === 'string' || typeof type === 'function';
    // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.
    if (!validType) {
      if (typeof type !== 'function' && typeof type !== 'string') {
        var info = '';
        if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
          info += ' You likely forgot to export your component from the file ' + "it's defined in.";
        }

        var sourceInfo = getSourceInfoErrorAddendum(props);
        if (sourceInfo) {
          info += sourceInfo;
        } else {
          info += getDeclarationErrorAddendum();
        }

        info += ReactComponentTreeHook.getCurrentStackAddendum();

        var currentSource = props !== null && props !== undefined && props.__source !== undefined ? props.__source : null;
        ReactComponentTreeHook.pushNonStandardWarningStack(true, currentSource);
         true ? warning(false, 'React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', type == null ? type : typeof type, info) : void 0;
        ReactComponentTreeHook.popNonStandardWarningStack();
      }
    }

    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)
    if (validType) {
      for (var i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    validatePropTypes(element);

    return element;
  },

  createFactory: function (type) {
    var validatedFactory = ReactElementValidator.createElement.bind(null, type);
    // Legacy hook TODO: Warn if this is accessed
    validatedFactory.type = type;

    if (true) {
      if (canDefineProperty) {
        Object.defineProperty(validatedFactory, 'type', {
          enumerable: false,
          get: function () {
            lowPriorityWarning(false, 'Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
            Object.defineProperty(this, 'type', {
              value: type
            });
            return type;
          }
        });
      }
    }

    return validatedFactory;
  },

  cloneElement: function (element, props, children) {
    var newElement = ReactElement.cloneElement.apply(this, arguments);
    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], newElement.type);
    }
    validatePropTypes(newElement);
    return newElement;
  }
};

module.exports = ReactElementValidator;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactNoopUpdateQueue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

function warnNoop(publicInstance, callerName) {
  if (true) {
    var constructor = publicInstance.constructor;
     true ? warning(false, '%s(...): Can only update a mounted or mounting component. ' + 'This usually means you called %s() on an unmounted component. ' + 'This is a no-op. Please check the code for the %s component.', callerName, callerName, constructor && (constructor.displayName || constructor.name) || 'ReactClass') : void 0;
  }
}

/**
 * This is the abstract API for an update queue.
 */
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
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */
  enqueueCallback: function (publicInstance, callback) {},

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
   * @internal
   */
  enqueueForceUpdate: function (publicInstance) {
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
   * @internal
   */
  enqueueReplaceState: function (publicInstance, completeState) {
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
   * @internal
   */
  enqueueSetState: function (publicInstance, partialState) {
    warnNoop(publicInstance, 'setState');
  }
};

module.exports = ReactNoopUpdateQueue;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactPropTypeLocationNames.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var ReactPropTypeLocationNames = {};

if (true) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactPropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _require = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElement.js"),
    isValidElement = _require.isValidElement;

var factory = __webpack_require__("./node_modules/next/node_modules/prop-types/factory.js");

module.exports = factory(isValidElement);

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactPropTypesSecret.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/ReactVersion.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



module.exports = '15.6.2';

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/canDefineProperty.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



var canDefineProperty = false;
if (true) {
  try {
    // $FlowFixMe https://github.com/facebook/flow/issues/285
    Object.defineProperty({}, 'x', { get: function () {} });
    canDefineProperty = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

module.exports = canDefineProperty;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/checkReactTypeSpec.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _prodInvariant = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/reactProdInvariant.js");

var ReactPropTypeLocationNames = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactPropTypeLocationNames.js");
var ReactPropTypesSecret = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactPropTypesSecret.js");

var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

var ReactComponentTreeHook;

if (typeof process !== 'undefined' && process.env && "development" === 'test') {
  // Temporary hack.
  // Inline requires don't work well with Jest:
  // https://github.com/facebook/react/issues/7240
  // Remove the inline requires when we don't need them anymore:
  // https://github.com/facebook/react/pull/7178
  ReactComponentTreeHook = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactComponentTreeHook.js");
}

var loggedTypeFailures = {};

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?object} element The React element that is being type-checked
 * @param {?number} debugID The React component instance that is being type-checked
 * @private
 */
function checkReactTypeSpec(typeSpecs, values, location, componentName, element, debugID) {
  for (var typeSpecName in typeSpecs) {
    if (typeSpecs.hasOwnProperty(typeSpecName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        // This is intentionally an invariant that gets caught. It's the same
        // behavior as without this statement except with a better message.
        !(typeof typeSpecs[typeSpecName] === 'function') ?  true ? invariant(false, '%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : _prodInvariant('84', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName) : void 0;
        error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
      } catch (ex) {
        error = ex;
      }
       true ? warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', ReactPropTypeLocationNames[location], typeSpecName, typeof error) : void 0;
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;

        var componentStackInfo = '';

        if (true) {
          if (!ReactComponentTreeHook) {
            ReactComponentTreeHook = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactComponentTreeHook.js");
          }
          if (debugID !== null) {
            componentStackInfo = ReactComponentTreeHook.getStackAddendumByID(debugID);
          } else if (element !== null) {
            componentStackInfo = ReactComponentTreeHook.getCurrentStackAddendum(element);
          }
        }

         true ? warning(false, 'Failed %s type: %s%s', location, error.message, componentStackInfo) : void 0;
      }
    }
  }
}

module.exports = checkReactTypeSpec;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/createClass.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _require = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactBaseClasses.js"),
    Component = _require.Component;

var _require2 = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElement.js"),
    isValidElement = _require2.isValidElement;

var ReactNoopUpdateQueue = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactNoopUpdateQueue.js");
var factory = __webpack_require__("./node_modules/create-react-class/factory.js");

module.exports = factory(Component, isValidElement, ReactNoopUpdateQueue);

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/getIteratorFn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */



/* global Symbol */

var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */
function getIteratorFn(maybeIterable) {
  var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
  if (typeof iteratorFn === 'function') {
    return iteratorFn;
  }
}

module.exports = getIteratorFn;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/lowPriorityWarning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

if (true) {
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = lowPriorityWarning;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/onlyChild.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


var _prodInvariant = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/reactProdInvariant.js");

var ReactElement = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElement.js");

var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://facebook.github.io/react/docs/top-level-api.html#react.children.only
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */
function onlyChild(children) {
  !ReactElement.isValidElement(children) ?  true ? invariant(false, 'React.Children.only expected to receive a single React element child.') : _prodInvariant('143') : void 0;
  return children;
}

module.exports = onlyChild;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/reactProdInvariant.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */


/**
 * WARNING: DO NOT manually require this module.
 * This is a replacement for `invariant(...)` used by the error code system
 * and will _only_ be required by the corresponding babel pass.
 * It always throws.
 */

function reactProdInvariant(code) {
  var argCount = arguments.length - 1;

  var message = 'Minified React error #' + code + '; visit ' + 'http://facebook.github.io/react/docs/error-decoder.html?invariant=' + code;

  for (var argIdx = 0; argIdx < argCount; argIdx++) {
    message += '&args[]=' + encodeURIComponent(arguments[argIdx + 1]);
  }

  message += ' for the full message or use the non-minified dev environment' + ' for full errors and additional helpful warnings.';

  var error = new Error(message);
  error.name = 'Invariant Violation';
  error.framesToPop = 1; // we don't care about reactProdInvariant's own frame

  throw error;
}

module.exports = reactProdInvariant;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/lib/traverseAllChildren.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _prodInvariant = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/reactProdInvariant.js");

var ReactCurrentOwner = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactCurrentOwner.js");
var REACT_ELEMENT_TYPE = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/ReactElementSymbol.js");

var getIteratorFn = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/getIteratorFn.js");
var invariant = __webpack_require__("./node_modules/fbjs/lib/invariant.js");
var KeyEscapeUtils = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/KeyEscapeUtils.js");
var warning = __webpack_require__("./node_modules/fbjs/lib/warning.js");

var SEPARATOR = '.';
var SUBSEPARATOR = ':';

/**
 * This is inlined from ReactElement since this file is shared between
 * isomorphic and renderers. We could extract this to a
 *
 */

/**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */

var didWarnAboutMaps = false;

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  // Do some typechecking here since we call this blindly. We want to ensure
  // that we don't block potential future ES APIs.
  if (component && typeof component === 'object' && component.key != null) {
    // Explicit key
    return KeyEscapeUtils.escape(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildrenImpl(children, nameSoFar, callback, traverseContext) {
  var type = typeof children;

  if (type === 'undefined' || type === 'boolean') {
    // All of the above are perceived as null.
    children = null;
  }

  if (children === null || type === 'string' || type === 'number' ||
  // The following is inlined from ReactElement. This means we can optimize
  // some checks. React Fiber also inlines this logic for similar purposes.
  type === 'object' && children.$$typeof === REACT_ELEMENT_TYPE) {
    callback(traverseContext, children,
    // If it's the only child, treat the name as if it was wrapped in an array
    // so that it's consistent if the number of children grows.
    nameSoFar === '' ? SEPARATOR + getComponentKey(children, 0) : nameSoFar);
    return 1;
  }

  var child;
  var nextName;
  var subtreeCount = 0; // Count of children found in the current subtree.
  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      nextName = nextNamePrefix + getComponentKey(child, i);
      subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
    }
  } else {
    var iteratorFn = getIteratorFn(children);
    if (iteratorFn) {
      var iterator = iteratorFn.call(children);
      var step;
      if (iteratorFn !== children.entries) {
        var ii = 0;
        while (!(step = iterator.next()).done) {
          child = step.value;
          nextName = nextNamePrefix + getComponentKey(child, ii++);
          subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
        }
      } else {
        if (true) {
          var mapsAsChildrenAddendum = '';
          if (ReactCurrentOwner.current) {
            var mapsAsChildrenOwnerName = ReactCurrentOwner.current.getName();
            if (mapsAsChildrenOwnerName) {
              mapsAsChildrenAddendum = ' Check the render method of `' + mapsAsChildrenOwnerName + '`.';
            }
          }
           true ? warning(didWarnAboutMaps, 'Using Maps as children is not yet fully supported. It is an ' + 'experimental feature that might be removed. Convert it to a ' + 'sequence / iterable of keyed ReactElements instead.%s', mapsAsChildrenAddendum) : void 0;
          didWarnAboutMaps = true;
        }
        // Iterator will provide entry [k,v] tuples rather than values.
        while (!(step = iterator.next()).done) {
          var entry = step.value;
          if (entry) {
            child = entry[1];
            nextName = nextNamePrefix + KeyEscapeUtils.escape(entry[0]) + SUBSEPARATOR + getComponentKey(child, 0);
            subtreeCount += traverseAllChildrenImpl(child, nextName, callback, traverseContext);
          }
        }
      }
    } else if (type === 'object') {
      var addendum = '';
      if (true) {
        addendum = ' If you meant to render a collection of children, use an array ' + 'instead or wrap the object using createFragment(object) from the ' + 'React add-ons.';
        if (children._isReactElement) {
          addendum = " It looks like you're using an element created by a different " + 'version of React. Make sure to use only one copy of React.';
        }
        if (ReactCurrentOwner.current) {
          var name = ReactCurrentOwner.current.getName();
          if (name) {
            addendum += ' Check the render method of `' + name + '`.';
          }
        }
      }
      var childrenString = String(children);
       true ?  true ? invariant(false, 'Objects are not valid as a React child (found: %s).%s', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : _prodInvariant('31', childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString, addendum) : void 0;
    }
  }

  return subtreeCount;
}

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', callback, traverseContext);
}

module.exports = traverseAllChildren;

/***/ }),

/***/ "./node_modules/react-owl-carousel/node_modules/react/react.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__("./node_modules/react-owl-carousel/node_modules/react/lib/React.js");


/***/ }),

/***/ "./node_modules/react-owl-carousel/umd/OwlCarousel.js":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
     true ? module.exports = factory(__webpack_require__("./node_modules/react-owl-carousel/node_modules/react/react.js")) :
    typeof define === 'function' && define.amd ? define(['react'], factory) :
    (global.ReactOwlCarousel = factory(global.React));
}(this, (function (React) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    /**
     * Owl Carousel v2.3.4
     * Copyright 2013-2018 David Deutsch
     * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
     */
    (function($, window, document, undefined) {

    	/**
    	 * Creates a carousel.
    	 * @class The Owl Carousel.
    	 * @public
    	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
    	 * @param {Object} [options] - The options
    	 */
    	function Owl(element, options) {

    		/**
    		 * Current settings for the carousel.
    		 * @public
    		 */
    		this.settings = null;

    		/**
    		 * Current options set by the caller including defaults.
    		 * @public
    		 */
    		this.options = $.extend({}, Owl.Defaults, options);

    		/**
    		 * Plugin element.
    		 * @public
    		 */
    		this.$element = $(element);

    		/**
    		 * Proxied event handlers.
    		 * @protected
    		 */
    		this._handlers = {};

    		/**
    		 * References to the running plugins of this carousel.
    		 * @protected
    		 */
    		this._plugins = {};

    		/**
    		 * Currently suppressed events to prevent them from being retriggered.
    		 * @protected
    		 */
    		this._supress = {};

    		/**
    		 * Absolute current position.
    		 * @protected
    		 */
    		this._current = null;

    		/**
    		 * Animation speed in milliseconds.
    		 * @protected
    		 */
    		this._speed = null;

    		/**
    		 * Coordinates of all items in pixel.
    		 * @todo The name of this member is missleading.
    		 * @protected
    		 */
    		this._coordinates = [];

    		/**
    		 * Current breakpoint.
    		 * @todo Real media queries would be nice.
    		 * @protected
    		 */
    		this._breakpoint = null;

    		/**
    		 * Current width of the plugin element.
    		 */
    		this._width = null;

    		/**
    		 * All real items.
    		 * @protected
    		 */
    		this._items = [];

    		/**
    		 * All cloned items.
    		 * @protected
    		 */
    		this._clones = [];

    		/**
    		 * Merge values of all items.
    		 * @todo Maybe this could be part of a plugin.
    		 * @protected
    		 */
    		this._mergers = [];

    		/**
    		 * Widths of all items.
    		 */
    		this._widths = [];

    		/**
    		 * Invalidated parts within the update process.
    		 * @protected
    		 */
    		this._invalidated = {};

    		/**
    		 * Ordered list of workers for the update process.
    		 * @protected
    		 */
    		this._pipe = [];

    		/**
    		 * Current state information for the drag operation.
    		 * @todo #261
    		 * @protected
    		 */
    		this._drag = {
    			time: null,
    			target: null,
    			pointer: null,
    			stage: {
    				start: null,
    				current: null
    			},
    			direction: null
    		};

    		/**
    		 * Current state information and their tags.
    		 * @type {Object}
    		 * @protected
    		 */
    		this._states = {
    			current: {},
    			tags: {
    				'initializing': [ 'busy' ],
    				'animating': [ 'busy' ],
    				'dragging': [ 'interacting' ]
    			}
    		};

    		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
    			this._handlers[handler] = $.proxy(this[handler], this);
    		}, this));

    		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
    			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
    				= new plugin(this);
    		}, this));

    		$.each(Owl.Workers, $.proxy(function(priority, worker) {
    			this._pipe.push({
    				'filter': worker.filter,
    				'run': $.proxy(worker.run, this)
    			});
    		}, this));

    		this.setup();
    		this.initialize();
    	}

    	/**
    	 * Default options for the carousel.
    	 * @public
    	 */
    	Owl.Defaults = {
    		items: 3,
    		loop: false,
    		center: false,
    		rewind: false,
    		checkVisibility: true,

    		mouseDrag: true,
    		touchDrag: true,
    		pullDrag: true,
    		freeDrag: false,

    		margin: 0,
    		stagePadding: 0,

    		merge: false,
    		mergeFit: true,
    		autoWidth: false,

    		startPosition: 0,
    		rtl: false,

    		smartSpeed: 250,
    		fluidSpeed: false,
    		dragEndSpeed: false,

    		responsive: {},
    		responsiveRefreshRate: 200,
    		responsiveBaseElement: window,

    		fallbackEasing: 'swing',
    		slideTransition: '',

    		info: false,

    		nestedItemSelector: false,
    		itemElement: 'div',
    		stageElement: 'div',

    		refreshClass: 'owl-refresh',
    		loadedClass: 'owl-loaded',
    		loadingClass: 'owl-loading',
    		rtlClass: 'owl-rtl',
    		responsiveClass: 'owl-responsive',
    		dragClass: 'owl-drag',
    		itemClass: 'owl-item',
    		stageClass: 'owl-stage',
    		stageOuterClass: 'owl-stage-outer',
    		grabClass: 'owl-grab'
    	};

    	/**
    	 * Enumeration for width.
    	 * @public
    	 * @readonly
    	 * @enum {String}
    	 */
    	Owl.Width = {
    		Default: 'default',
    		Inner: 'inner',
    		Outer: 'outer'
    	};

    	/**
    	 * Enumeration for types.
    	 * @public
    	 * @readonly
    	 * @enum {String}
    	 */
    	Owl.Type = {
    		Event: 'event',
    		State: 'state'
    	};

    	/**
    	 * Contains all registered plugins.
    	 * @public
    	 */
    	Owl.Plugins = {};

    	/**
    	 * List of workers involved in the update process.
    	 */
    	Owl.Workers = [ {
    		filter: [ 'width', 'settings' ],
    		run: function() {
    			this._width = this.$element.width();
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			cache.current = this._items && this._items[this.relative(this._current)];
    		}
    	}, {
    		filter: [ 'items', 'settings' ],
    		run: function() {
    			this.$stage.children('.cloned').remove();
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			var margin = this.settings.margin || '',
    				grid = !this.settings.autoWidth,
    				rtl = this.settings.rtl,
    				css = {
    					'width': 'auto',
    					'margin-left': rtl ? margin : '',
    					'margin-right': rtl ? '' : margin
    				};

    			!grid && this.$stage.children().css(css);

    			cache.css = css;
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
    				merge = null,
    				iterator = this._items.length,
    				grid = !this.settings.autoWidth,
    				widths = [];

    			cache.items = {
    				merge: false,
    				width: width
    			};

    			while (iterator--) {
    				merge = this._mergers[iterator];
    				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

    				cache.items.merge = merge > 1 || cache.items.merge;

    				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
    			}

    			this._widths = widths;
    		}
    	}, {
    		filter: [ 'items', 'settings' ],
    		run: function() {
    			var clones = [],
    				items = this._items,
    				settings = this.settings,
    				// TODO: Should be computed from number of min width items in stage
    				view = Math.max(settings.items * 2, 4),
    				size = Math.ceil(items.length / 2) * 2,
    				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
    				append = '',
    				prepend = '';

    			repeat /= 2;

    			while (repeat > 0) {
    				// Switch to only using appended clones
    				clones.push(this.normalize(clones.length / 2, true));
    				append = append + items[clones[clones.length - 1]][0].outerHTML;
    				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
    				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
    				repeat -= 1;
    			}

    			this._clones = clones;

    			$(append).addClass('cloned').appendTo(this.$stage);
    			$(prepend).addClass('cloned').prependTo(this.$stage);
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function() {
    			var rtl = this.settings.rtl ? 1 : -1,
    				size = this._clones.length + this._items.length,
    				iterator = -1,
    				previous = 0,
    				current = 0,
    				coordinates = [];

    			while (++iterator < size) {
    				previous = coordinates[iterator - 1] || 0;
    				current = this._widths[this.relative(iterator)] + this.settings.margin;
    				coordinates.push(previous + current * rtl);
    			}

    			this._coordinates = coordinates;
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function() {
    			var padding = this.settings.stagePadding,
    				coordinates = this._coordinates,
    				css = {
    					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
    					'padding-left': padding || '',
    					'padding-right': padding || ''
    				};

    			this.$stage.css(css);
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			var iterator = this._coordinates.length,
    				grid = !this.settings.autoWidth,
    				items = this.$stage.children();

    			if (grid && cache.items.merge) {
    				while (iterator--) {
    					cache.css.width = this._widths[this.relative(iterator)];
    					items.eq(iterator).css(cache.css);
    				}
    			} else if (grid) {
    				cache.css.width = cache.items.width;
    				items.css(cache.css);
    			}
    		}
    	}, {
    		filter: [ 'items' ],
    		run: function() {
    			this._coordinates.length < 1 && this.$stage.removeAttr('style');
    		}
    	}, {
    		filter: [ 'width', 'items', 'settings' ],
    		run: function(cache) {
    			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
    			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
    			this.reset(cache.current);
    		}
    	}, {
    		filter: [ 'position' ],
    		run: function() {
    			this.animate(this.coordinates(this._current));
    		}
    	}, {
    		filter: [ 'width', 'position', 'items', 'settings' ],
    		run: function() {
    			var rtl = this.settings.rtl ? 1 : -1,
    				padding = this.settings.stagePadding * 2,
    				begin = this.coordinates(this.current()) + padding,
    				end = begin + this.width() * rtl,
    				inner, outer, matches = [], i, n;

    			for (i = 0, n = this._coordinates.length; i < n; i++) {
    				inner = this._coordinates[i - 1] || 0;
    				outer = Math.abs(this._coordinates[i]) + padding * rtl;

    				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
    					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
    					matches.push(i);
    				}
    			}

    			this.$stage.children('.active').removeClass('active');
    			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

    			this.$stage.children('.center').removeClass('center');
    			if (this.settings.center) {
    				this.$stage.children().eq(this.current()).addClass('center');
    			}
    		}
    	} ];

    	/**
    	 * Create the stage DOM element
    	 */
    	Owl.prototype.initializeStage = function() {
    		this.$stage = this.$element.find('.' + this.settings.stageClass);

    		// if the stage is already in the DOM, grab it and skip stage initialization
    		if (this.$stage.length) {
    			return;
    		}

    		this.$element.addClass(this.options.loadingClass);

    		// create stage
    		this.$stage = $('<' + this.settings.stageElement + '>', {
    			"class": this.settings.stageClass
    		}).wrap( $( '<div/>', {
    			"class": this.settings.stageOuterClass
    		}));

    		// append stage
    		this.$element.append(this.$stage.parent());
    	};

    	/**
    	 * Create item DOM elements
    	 */
    	Owl.prototype.initializeItems = function() {
    		var $items = this.$element.find('.owl-item');

    		// if the items are already in the DOM, grab them and skip item initialization
    		if ($items.length) {
    			this._items = $items.get().map(function(item) {
    				return $(item);
    			});

    			this._mergers = this._items.map(function() {
    				return 1;
    			});

    			this.refresh();

    			return;
    		}

    		// append content
    		this.replace(this.$element.children().not(this.$stage.parent()));

    		// check visibility
    		if (this.isVisible()) {
    			// update view
    			this.refresh();
    		} else {
    			// invalidate width
    			this.invalidate('width');
    		}

    		this.$element
    			.removeClass(this.options.loadingClass)
    			.addClass(this.options.loadedClass);
    	};

    	/**
    	 * Initializes the carousel.
    	 * @protected
    	 */
    	Owl.prototype.initialize = function() {
    		this.enter('initializing');
    		this.trigger('initialize');

    		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

    		if (this.settings.autoWidth && !this.is('pre-loading')) {
    			var imgs, nestedSelector, width;
    			imgs = this.$element.find('img');
    			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
    			width = this.$element.children(nestedSelector).width();

    			if (imgs.length && width <= 0) {
    				this.preloadAutoWidthImages(imgs);
    			}
    		}

    		this.initializeStage();
    		this.initializeItems();

    		// register event handlers
    		this.registerEventHandlers();

    		this.leave('initializing');
    		this.trigger('initialized');
    	};

    	/**
    	 * @returns {Boolean} visibility of $element
    	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
    	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
    	 */
    	Owl.prototype.isVisible = function() {
    		return this.settings.checkVisibility
    			? this.$element.is(':visible')
    			: true;
    	};

    	/**
    	 * Setups the current settings.
    	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
    	 * @todo Support for media queries by using `matchMedia` would be nice.
    	 * @public
    	 */
    	Owl.prototype.setup = function() {
    		var viewport = this.viewport(),
    			overwrites = this.options.responsive,
    			match = -1,
    			settings = null;

    		if (!overwrites) {
    			settings = $.extend({}, this.options);
    		} else {
    			$.each(overwrites, function(breakpoint) {
    				if (breakpoint <= viewport && breakpoint > match) {
    					match = Number(breakpoint);
    				}
    			});

    			settings = $.extend({}, this.options, overwrites[match]);
    			if (typeof settings.stagePadding === 'function') {
    				settings.stagePadding = settings.stagePadding();
    			}
    			delete settings.responsive;

    			// responsive class
    			if (settings.responsiveClass) {
    				this.$element.attr('class',
    					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
    				);
    			}
    		}

    		this.trigger('change', { property: { name: 'settings', value: settings } });
    		this._breakpoint = match;
    		this.settings = settings;
    		this.invalidate('settings');
    		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    	};

    	/**
    	 * Updates option logic if necessery.
    	 * @protected
    	 */
    	Owl.prototype.optionsLogic = function() {
    		if (this.settings.autoWidth) {
    			this.settings.stagePadding = false;
    			this.settings.merge = false;
    		}
    	};

    	/**
    	 * Prepares an item before add.
    	 * @todo Rename event parameter `content` to `item`.
    	 * @protected
    	 * @returns {jQuery|HTMLElement} - The item container.
    	 */
    	Owl.prototype.prepare = function(item) {
    		var event = this.trigger('prepare', { content: item });

    		if (!event.data) {
    			event.data = $('<' + this.settings.itemElement + '/>')
    				.addClass(this.options.itemClass).append(item);
    		}

    		this.trigger('prepared', { content: event.data });

    		return event.data;
    	};

    	/**
    	 * Updates the view.
    	 * @public
    	 */
    	Owl.prototype.update = function() {
    		var i = 0,
    			n = this._pipe.length,
    			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
    			cache = {};

    		while (i < n) {
    			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
    				this._pipe[i].run(cache);
    			}
    			i++;
    		}

    		this._invalidated = {};

    		!this.is('valid') && this.enter('valid');
    	};

    	/**
    	 * Gets the width of the view.
    	 * @public
    	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
    	 * @returns {Number} - The width of the view in pixel.
    	 */
    	Owl.prototype.width = function(dimension) {
    		dimension = dimension || Owl.Width.Default;
    		switch (dimension) {
    			case Owl.Width.Inner:
    			case Owl.Width.Outer:
    				return this._width;
    			default:
    				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
    		}
    	};

    	/**
    	 * Refreshes the carousel primarily for adaptive purposes.
    	 * @public
    	 */
    	Owl.prototype.refresh = function() {
    		this.enter('refreshing');
    		this.trigger('refresh');

    		this.setup();

    		this.optionsLogic();

    		this.$element.addClass(this.options.refreshClass);

    		this.update();

    		this.$element.removeClass(this.options.refreshClass);

    		this.leave('refreshing');
    		this.trigger('refreshed');
    	};

    	/**
    	 * Checks window `resize` event.
    	 * @protected
    	 */
    	Owl.prototype.onThrottledResize = function() {
    		window.clearTimeout(this.resizeTimer);
    		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    	};

    	/**
    	 * Checks window `resize` event.
    	 * @protected
    	 */
    	Owl.prototype.onResize = function() {
    		if (!this._items.length) {
    			return false;
    		}

    		if (this._width === this.$element.width()) {
    			return false;
    		}

    		if (!this.isVisible()) {
    			return false;
    		}

    		this.enter('resizing');

    		if (this.trigger('resize').isDefaultPrevented()) {
    			this.leave('resizing');
    			return false;
    		}

    		this.invalidate('width');

    		this.refresh();

    		this.leave('resizing');
    		this.trigger('resized');
    	};

    	/**
    	 * Registers event handlers.
    	 * @todo Check `msPointerEnabled`
    	 * @todo #261
    	 * @protected
    	 */
    	Owl.prototype.registerEventHandlers = function() {
    		if ($.support.transition) {
    			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
    		}

    		if (this.settings.responsive !== false) {
    			this.on(window, 'resize', this._handlers.onThrottledResize);
    		}

    		if (this.settings.mouseDrag) {
    			this.$element.addClass(this.options.dragClass);
    			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
    			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
    		}

    		if (this.settings.touchDrag){
    			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
    			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
    		}
    	};

    	/**
    	 * Handles `touchstart` and `mousedown` events.
    	 * @todo Horizontal swipe threshold as option
    	 * @todo #261
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onDragStart = function(event) {
    		var stage = null;

    		if (event.which === 3) {
    			return;
    		}

    		if ($.support.transform) {
    			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
    			stage = {
    				x: stage[stage.length === 16 ? 12 : 4],
    				y: stage[stage.length === 16 ? 13 : 5]
    			};
    		} else {
    			stage = this.$stage.position();
    			stage = {
    				x: this.settings.rtl ?
    					stage.left + this.$stage.width() - this.width() + this.settings.margin :
    					stage.left,
    				y: stage.top
    			};
    		}

    		if (this.is('animating')) {
    			$.support.transform ? this.animate(stage.x) : this.$stage.stop();
    			this.invalidate('position');
    		}

    		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

    		this.speed(0);

    		this._drag.time = new Date().getTime();
    		this._drag.target = $(event.target);
    		this._drag.stage.start = stage;
    		this._drag.stage.current = stage;
    		this._drag.pointer = this.pointer(event);

    		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

    		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
    			var delta = this.difference(this._drag.pointer, this.pointer(event));

    			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

    			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
    				return;
    			}

    			event.preventDefault();

    			this.enter('dragging');
    			this.trigger('drag');
    		}, this));
    	};

    	/**
    	 * Handles the `touchmove` and `mousemove` events.
    	 * @todo #261
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onDragMove = function(event) {
    		var minimum = null,
    			maximum = null,
    			pull = null,
    			delta = this.difference(this._drag.pointer, this.pointer(event)),
    			stage = this.difference(this._drag.stage.start, delta);

    		if (!this.is('dragging')) {
    			return;
    		}

    		event.preventDefault();

    		if (this.settings.loop) {
    			minimum = this.coordinates(this.minimum());
    			maximum = this.coordinates(this.maximum() + 1) - minimum;
    			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
    		} else {
    			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
    			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
    			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
    			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
    		}

    		this._drag.stage.current = stage;

    		this.animate(stage.x);
    	};

    	/**
    	 * Handles the `touchend` and `mouseup` events.
    	 * @todo #261
    	 * @todo Threshold for click event
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onDragEnd = function(event) {
    		var delta = this.difference(this._drag.pointer, this.pointer(event)),
    			stage = this._drag.stage.current,
    			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

    		$(document).off('.owl.core');

    		this.$element.removeClass(this.options.grabClass);

    		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
    			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
    			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
    			this.invalidate('position');
    			this.update();

    			this._drag.direction = direction;

    			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
    				this._drag.target.one('click.owl.core', function() { return false; });
    			}
    		}

    		if (!this.is('dragging')) {
    			return;
    		}

    		this.leave('dragging');
    		this.trigger('dragged');
    	};

    	/**
    	 * Gets absolute position of the closest item for a coordinate.
    	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
    	 * @protected
    	 * @param {Number} coordinate - The coordinate in pixel.
    	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
    	 * @return {Number} - The absolute position of the closest item.
    	 */
    	Owl.prototype.closest = function(coordinate, direction) {
    		var position = -1,
    			pull = 30,
    			width = this.width(),
    			coordinates = this.coordinates();

    		if (!this.settings.freeDrag) {
    			// check closest item
    			$.each(coordinates, $.proxy(function(index, value) {
    				// on a left pull, check on current index
    				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
    					position = index;
    				// on a right pull, check on previous index
    				// to do so, subtract width from value and set position = index + 1
    				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
    					position = index + 1;
    				} else if (this.op(coordinate, '<', value)
    					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
    					position = direction === 'left' ? index + 1 : index;
    				}
    				return position === -1;
    			}, this));
    		}

    		if (!this.settings.loop) {
    			// non loop boundries
    			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
    				position = coordinate = this.minimum();
    			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
    				position = coordinate = this.maximum();
    			}
    		}

    		return position;
    	};

    	/**
    	 * Animates the stage.
    	 * @todo #270
    	 * @public
    	 * @param {Number} coordinate - The coordinate in pixels.
    	 */
    	Owl.prototype.animate = function(coordinate) {
    		var animate = this.speed() > 0;

    		this.is('animating') && this.onTransitionEnd();

    		if (animate) {
    			this.enter('animating');
    			this.trigger('translate');
    		}

    		if ($.support.transform3d && $.support.transition) {
    			this.$stage.css({
    				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
    				transition: (this.speed() / 1000) + 's' + (
    					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
    				)
    			});
    		} else if (animate) {
    			this.$stage.animate({
    				left: coordinate + 'px'
    			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
    		} else {
    			this.$stage.css({
    				left: coordinate + 'px'
    			});
    		}
    	};

    	/**
    	 * Checks whether the carousel is in a specific state or not.
    	 * @param {String} state - The state to check.
    	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
    	 */
    	Owl.prototype.is = function(state) {
    		return this._states.current[state] && this._states.current[state] > 0;
    	};

    	/**
    	 * Sets the absolute position of the current item.
    	 * @public
    	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
    	 * @returns {Number} - The absolute position of the current item.
    	 */
    	Owl.prototype.current = function(position) {
    		if (position === undefined) {
    			return this._current;
    		}

    		if (this._items.length === 0) {
    			return undefined;
    		}

    		position = this.normalize(position);

    		if (this._current !== position) {
    			var event = this.trigger('change', { property: { name: 'position', value: position } });

    			if (event.data !== undefined) {
    				position = this.normalize(event.data);
    			}

    			this._current = position;

    			this.invalidate('position');

    			this.trigger('changed', { property: { name: 'position', value: this._current } });
    		}

    		return this._current;
    	};

    	/**
    	 * Invalidates the given part of the update routine.
    	 * @param {String} [part] - The part to invalidate.
    	 * @returns {Array.<String>} - The invalidated parts.
    	 */
    	Owl.prototype.invalidate = function(part) {
    		if ($.type(part) === 'string') {
    			this._invalidated[part] = true;
    			this.is('valid') && this.leave('valid');
    		}
    		return $.map(this._invalidated, function(v, i) { return i });
    	};

    	/**
    	 * Resets the absolute position of the current item.
    	 * @public
    	 * @param {Number} position - The absolute position of the new item.
    	 */
    	Owl.prototype.reset = function(position) {
    		position = this.normalize(position);

    		if (position === undefined) {
    			return;
    		}

    		this._speed = 0;
    		this._current = position;

    		this.suppress([ 'translate', 'translated' ]);

    		this.animate(this.coordinates(position));

    		this.release([ 'translate', 'translated' ]);
    	};

    	/**
    	 * Normalizes an absolute or a relative position of an item.
    	 * @public
    	 * @param {Number} position - The absolute or relative position to normalize.
    	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
    	 * @returns {Number} - The normalized position.
    	 */
    	Owl.prototype.normalize = function(position, relative) {
    		var n = this._items.length,
    			m = relative ? 0 : this._clones.length;

    		if (!this.isNumeric(position) || n < 1) {
    			position = undefined;
    		} else if (position < 0 || position >= n + m) {
    			position = ((position - m / 2) % n + n) % n + m / 2;
    		}

    		return position;
    	};

    	/**
    	 * Converts an absolute position of an item into a relative one.
    	 * @public
    	 * @param {Number} position - The absolute position to convert.
    	 * @returns {Number} - The converted position.
    	 */
    	Owl.prototype.relative = function(position) {
    		position -= this._clones.length / 2;
    		return this.normalize(position, true);
    	};

    	/**
    	 * Gets the maximum position for the current item.
    	 * @public
    	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
    	 * @returns {Number}
    	 */
    	Owl.prototype.maximum = function(relative) {
    		var settings = this.settings,
    			maximum = this._coordinates.length,
    			iterator,
    			reciprocalItemsWidth,
    			elementWidth;

    		if (settings.loop) {
    			maximum = this._clones.length / 2 + this._items.length - 1;
    		} else if (settings.autoWidth || settings.merge) {
    			iterator = this._items.length;
    			if (iterator) {
    				reciprocalItemsWidth = this._items[--iterator].width();
    				elementWidth = this.$element.width();
    				while (iterator--) {
    					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
    					if (reciprocalItemsWidth > elementWidth) {
    						break;
    					}
    				}
    			}
    			maximum = iterator + 1;
    		} else if (settings.center) {
    			maximum = this._items.length - 1;
    		} else {
    			maximum = this._items.length - settings.items;
    		}

    		if (relative) {
    			maximum -= this._clones.length / 2;
    		}

    		return Math.max(maximum, 0);
    	};

    	/**
    	 * Gets the minimum position for the current item.
    	 * @public
    	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
    	 * @returns {Number}
    	 */
    	Owl.prototype.minimum = function(relative) {
    		return relative ? 0 : this._clones.length / 2;
    	};

    	/**
    	 * Gets an item at the specified relative position.
    	 * @public
    	 * @param {Number} [position] - The relative position of the item.
    	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
    	 */
    	Owl.prototype.items = function(position) {
    		if (position === undefined) {
    			return this._items.slice();
    		}

    		position = this.normalize(position, true);
    		return this._items[position];
    	};

    	/**
    	 * Gets an item at the specified relative position.
    	 * @public
    	 * @param {Number} [position] - The relative position of the item.
    	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
    	 */
    	Owl.prototype.mergers = function(position) {
    		if (position === undefined) {
    			return this._mergers.slice();
    		}

    		position = this.normalize(position, true);
    		return this._mergers[position];
    	};

    	/**
    	 * Gets the absolute positions of clones for an item.
    	 * @public
    	 * @param {Number} [position] - The relative position of the item.
    	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
    	 */
    	Owl.prototype.clones = function(position) {
    		var odd = this._clones.length / 2,
    			even = odd + this._items.length,
    			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

    		if (position === undefined) {
    			return $.map(this._clones, function(v, i) { return map(i) });
    		}

    		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
    	};

    	/**
    	 * Sets the current animation speed.
    	 * @public
    	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
    	 * @returns {Number} - The current animation speed in milliseconds.
    	 */
    	Owl.prototype.speed = function(speed) {
    		if (speed !== undefined) {
    			this._speed = speed;
    		}

    		return this._speed;
    	};

    	/**
    	 * Gets the coordinate of an item.
    	 * @todo The name of this method is missleanding.
    	 * @public
    	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
    	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
    	 */
    	Owl.prototype.coordinates = function(position) {
    		var multiplier = 1,
    			newPosition = position - 1,
    			coordinate;

    		if (position === undefined) {
    			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
    				return this.coordinates(index);
    			}, this));
    		}

    		if (this.settings.center) {
    			if (this.settings.rtl) {
    				multiplier = -1;
    				newPosition = position + 1;
    			}

    			coordinate = this._coordinates[position];
    			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
    		} else {
    			coordinate = this._coordinates[newPosition] || 0;
    		}

    		coordinate = Math.ceil(coordinate);

    		return coordinate;
    	};

    	/**
    	 * Calculates the speed for a translation.
    	 * @protected
    	 * @param {Number} from - The absolute position of the start item.
    	 * @param {Number} to - The absolute position of the target item.
    	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
    	 * @returns {Number} - The time in milliseconds for the translation.
    	 */
    	Owl.prototype.duration = function(from, to, factor) {
    		if (factor === 0) {
    			return 0;
    		}

    		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    	};

    	/**
    	 * Slides to the specified item.
    	 * @public
    	 * @param {Number} position - The position of the item.
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 */
    	Owl.prototype.to = function(position, speed) {
    		var current = this.current(),
    			revert = null,
    			distance = position - this.relative(current),
    			direction = (distance > 0) - (distance < 0),
    			items = this._items.length,
    			minimum = this.minimum(),
    			maximum = this.maximum();

    		if (this.settings.loop) {
    			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
    				distance += direction * -1 * items;
    			}

    			position = current + distance;
    			revert = ((position - minimum) % items + items) % items + minimum;

    			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
    				current = revert - distance;
    				position = revert;
    				this.reset(current);
    			}
    		} else if (this.settings.rewind) {
    			maximum += 1;
    			position = (position % maximum + maximum) % maximum;
    		} else {
    			position = Math.max(minimum, Math.min(maximum, position));
    		}

    		this.speed(this.duration(current, position, speed));
    		this.current(position);

    		if (this.isVisible()) {
    			this.update();
    		}
    	};

    	/**
    	 * Slides to the next item.
    	 * @public
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 */
    	Owl.prototype.next = function(speed) {
    		speed = speed || false;
    		this.to(this.relative(this.current()) + 1, speed);
    	};

    	/**
    	 * Slides to the previous item.
    	 * @public
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 */
    	Owl.prototype.prev = function(speed) {
    		speed = speed || false;
    		this.to(this.relative(this.current()) - 1, speed);
    	};

    	/**
    	 * Handles the end of an animation.
    	 * @protected
    	 * @param {Event} event - The event arguments.
    	 */
    	Owl.prototype.onTransitionEnd = function(event) {

    		// if css2 animation then event object is undefined
    		if (event !== undefined) {
    			event.stopPropagation();

    			// Catch only owl-stage transitionEnd event
    			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
    				return false;
    			}
    		}

    		this.leave('animating');
    		this.trigger('translated');
    	};

    	/**
    	 * Gets viewport width.
    	 * @protected
    	 * @return {Number} - The width in pixel.
    	 */
    	Owl.prototype.viewport = function() {
    		var width;
    		if (this.options.responsiveBaseElement !== window) {
    			width = $(this.options.responsiveBaseElement).width();
    		} else if (window.innerWidth) {
    			width = window.innerWidth;
    		} else if (document.documentElement && document.documentElement.clientWidth) {
    			width = document.documentElement.clientWidth;
    		} else {
    			console.warn('Can not detect viewport width.');
    		}
    		return width;
    	};

    	/**
    	 * Replaces the current content.
    	 * @public
    	 * @param {HTMLElement|jQuery|String} content - The new content.
    	 */
    	Owl.prototype.replace = function(content) {
    		this.$stage.empty();
    		this._items = [];

    		if (content) {
    			content = (content instanceof jQuery) ? content : $(content);
    		}

    		if (this.settings.nestedItemSelector) {
    			content = content.find('.' + this.settings.nestedItemSelector);
    		}

    		content.filter(function() {
    			return this.nodeType === 1;
    		}).each($.proxy(function(index, item) {
    			item = this.prepare(item);
    			this.$stage.append(item);
    			this._items.push(item);
    			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    		}, this));

    		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

    		this.invalidate('items');
    	};

    	/**
    	 * Adds an item.
    	 * @todo Use `item` instead of `content` for the event arguments.
    	 * @public
    	 * @param {HTMLElement|jQuery|String} content - The item content to add.
    	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
    	 */
    	Owl.prototype.add = function(content, position) {
    		var current = this.relative(this._current);

    		position = position === undefined ? this._items.length : this.normalize(position, true);
    		content = content instanceof jQuery ? content : $(content);

    		this.trigger('add', { content: content, position: position });

    		content = this.prepare(content);

    		if (this._items.length === 0 || position === this._items.length) {
    			this._items.length === 0 && this.$stage.append(content);
    			this._items.length !== 0 && this._items[position - 1].after(content);
    			this._items.push(content);
    			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    		} else {
    			this._items[position].before(content);
    			this._items.splice(position, 0, content);
    			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
    		}

    		this._items[current] && this.reset(this._items[current].index());

    		this.invalidate('items');

    		this.trigger('added', { content: content, position: position });
    	};

    	/**
    	 * Removes an item by its position.
    	 * @todo Use `item` instead of `content` for the event arguments.
    	 * @public
    	 * @param {Number} position - The relative position of the item to remove.
    	 */
    	Owl.prototype.remove = function(position) {
    		position = this.normalize(position, true);

    		if (position === undefined) {
    			return;
    		}

    		this.trigger('remove', { content: this._items[position], position: position });

    		this._items[position].remove();
    		this._items.splice(position, 1);
    		this._mergers.splice(position, 1);

    		this.invalidate('items');

    		this.trigger('removed', { content: null, position: position });
    	};

    	/**
    	 * Preloads images with auto width.
    	 * @todo Replace by a more generic approach
    	 * @protected
    	 */
    	Owl.prototype.preloadAutoWidthImages = function(images) {
    		images.each($.proxy(function(i, element) {
    			this.enter('pre-loading');
    			element = $(element);
    			$(new Image()).one('load', $.proxy(function(e) {
    				element.attr('src', e.target.src);
    				element.css('opacity', 1);
    				this.leave('pre-loading');
    				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
    			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
    		}, this));
    	};

    	/**
    	 * Destroys the carousel.
    	 * @public
    	 */
    	Owl.prototype.destroy = function() {

    		this.$element.off('.owl.core');
    		this.$stage.off('.owl.core');
    		$(document).off('.owl.core');

    		if (this.settings.responsive !== false) {
    			window.clearTimeout(this.resizeTimer);
    			this.off(window, 'resize', this._handlers.onThrottledResize);
    		}

    		for (var i in this._plugins) {
    			this._plugins[i].destroy();
    		}

    		this.$stage.children('.cloned').remove();

    		this.$stage.unwrap();
    		this.$stage.children().contents().unwrap();
    		this.$stage.children().unwrap();
    		this.$stage.remove();
    		this.$element
    			.removeClass(this.options.refreshClass)
    			.removeClass(this.options.loadingClass)
    			.removeClass(this.options.loadedClass)
    			.removeClass(this.options.rtlClass)
    			.removeClass(this.options.dragClass)
    			.removeClass(this.options.grabClass)
    			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
    			.removeData('owl.carousel');
    	};

    	/**
    	 * Operators to calculate right-to-left and left-to-right.
    	 * @protected
    	 * @param {Number} [a] - The left side operand.
    	 * @param {String} [o] - The operator.
    	 * @param {Number} [b] - The right side operand.
    	 */
    	Owl.prototype.op = function(a, o, b) {
    		var rtl = this.settings.rtl;
    		switch (o) {
    			case '<':
    				return rtl ? a > b : a < b;
    			case '>':
    				return rtl ? a < b : a > b;
    			case '>=':
    				return rtl ? a <= b : a >= b;
    			case '<=':
    				return rtl ? a >= b : a <= b;
    			default:
    				break;
    		}
    	};

    	/**
    	 * Attaches to an internal event.
    	 * @protected
    	 * @param {HTMLElement} element - The event source.
    	 * @param {String} event - The event name.
    	 * @param {Function} listener - The event handler to attach.
    	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
    	 */
    	Owl.prototype.on = function(element, event, listener, capture) {
    		if (element.addEventListener) {
    			element.addEventListener(event, listener, capture);
    		} else if (element.attachEvent) {
    			element.attachEvent('on' + event, listener);
    		}
    	};

    	/**
    	 * Detaches from an internal event.
    	 * @protected
    	 * @param {HTMLElement} element - The event source.
    	 * @param {String} event - The event name.
    	 * @param {Function} listener - The attached event handler to detach.
    	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
    	 */
    	Owl.prototype.off = function(element, event, listener, capture) {
    		if (element.removeEventListener) {
    			element.removeEventListener(event, listener, capture);
    		} else if (element.detachEvent) {
    			element.detachEvent('on' + event, listener);
    		}
    	};

    	/**
    	 * Triggers a public event.
    	 * @todo Remove `status`, `relatedTarget` should be used instead.
    	 * @protected
    	 * @param {String} name - The event name.
    	 * @param {*} [data=null] - The event data.
    	 * @param {String} [namespace=carousel] - The event namespace.
    	 * @param {String} [state] - The state which is associated with the event.
    	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
    	 * @returns {Event} - The event arguments.
    	 */
    	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
    		var status = {
    			item: { count: this._items.length, index: this.current() }
    		}, handler = $.camelCase(
    			$.grep([ 'on', name, namespace ], function(v) { return v })
    				.join('-').toLowerCase()
    		), event = $.Event(
    			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
    			$.extend({ relatedTarget: this }, status, data)
    		);

    		if (!this._supress[name]) {
    			$.each(this._plugins, function(name, plugin) {
    				if (plugin.onTrigger) {
    					plugin.onTrigger(event);
    				}
    			});

    			this.register({ type: Owl.Type.Event, name: name });
    			this.$element.trigger(event);

    			if (this.settings && typeof this.settings[handler] === 'function') {
    				this.settings[handler].call(this, event);
    			}
    		}

    		return event;
    	};

    	/**
    	 * Enters a state.
    	 * @param name - The state name.
    	 */
    	Owl.prototype.enter = function(name) {
    		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
    			if (this._states.current[name] === undefined) {
    				this._states.current[name] = 0;
    			}

    			this._states.current[name]++;
    		}, this));
    	};

    	/**
    	 * Leaves a state.
    	 * @param name - The state name.
    	 */
    	Owl.prototype.leave = function(name) {
    		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
    			this._states.current[name]--;
    		}, this));
    	};

    	/**
    	 * Registers an event or state.
    	 * @public
    	 * @param {Object} object - The event or state to register.
    	 */
    	Owl.prototype.register = function(object) {
    		if (object.type === Owl.Type.Event) {
    			if (!$.event.special[object.name]) {
    				$.event.special[object.name] = {};
    			}

    			if (!$.event.special[object.name].owl) {
    				var _default = $.event.special[object.name]._default;
    				$.event.special[object.name]._default = function(e) {
    					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
    						return _default.apply(this, arguments);
    					}
    					return e.namespace && e.namespace.indexOf('owl') > -1;
    				};
    				$.event.special[object.name].owl = true;
    			}
    		} else if (object.type === Owl.Type.State) {
    			if (!this._states.tags[object.name]) {
    				this._states.tags[object.name] = object.tags;
    			} else {
    				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
    			}

    			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
    				return $.inArray(tag, this._states.tags[object.name]) === i;
    			}, this));
    		}
    	};

    	/**
    	 * Suppresses events.
    	 * @protected
    	 * @param {Array.<String>} events - The events to suppress.
    	 */
    	Owl.prototype.suppress = function(events) {
    		$.each(events, $.proxy(function(index, event) {
    			this._supress[event] = true;
    		}, this));
    	};

    	/**
    	 * Releases suppressed events.
    	 * @protected
    	 * @param {Array.<String>} events - The events to release.
    	 */
    	Owl.prototype.release = function(events) {
    		$.each(events, $.proxy(function(index, event) {
    			delete this._supress[event];
    		}, this));
    	};

    	/**
    	 * Gets unified pointer coordinates from event.
    	 * @todo #261
    	 * @protected
    	 * @param {Event} - The `mousedown` or `touchstart` event.
    	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
    	 */
    	Owl.prototype.pointer = function(event) {
    		var result = { x: null, y: null };

    		event = event.originalEvent || event || window.event;

    		event = event.touches && event.touches.length ?
    			event.touches[0] : event.changedTouches && event.changedTouches.length ?
    				event.changedTouches[0] : event;

    		if (event.pageX) {
    			result.x = event.pageX;
    			result.y = event.pageY;
    		} else {
    			result.x = event.clientX;
    			result.y = event.clientY;
    		}

    		return result;
    	};

    	/**
    	 * Determines if the input is a Number or something that can be coerced to a Number
    	 * @protected
    	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
    	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
    	 */
    	Owl.prototype.isNumeric = function(number) {
    		return !isNaN(parseFloat(number));
    	};

    	/**
    	 * Gets the difference of two vectors.
    	 * @todo #261
    	 * @protected
    	 * @param {Object} - The first vector.
    	 * @param {Object} - The second vector.
    	 * @returns {Object} - The difference.
    	 */
    	Owl.prototype.difference = function(first, second) {
    		return {
    			x: first.x - second.x,
    			y: first.y - second.y
    		};
    	};

    	/**
    	 * The jQuery Plugin for the Owl Carousel
    	 * @todo Navigation plugin `next` and `prev`
    	 * @public
    	 */
    	$.fn.owlCarousel = function(option) {
    		var args = Array.prototype.slice.call(arguments, 1);

    		return this.each(function() {
    			var $this = $(this),
    				data = $this.data('owl.carousel');

    			if (!data) {
    				data = new Owl(this, typeof option == 'object' && option);
    				$this.data('owl.carousel', data);

    				$.each([
    					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
    				], function(i, event) {
    					data.register({ type: Owl.Type.Event, name: event });
    					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
    						if (e.namespace && e.relatedTarget !== this) {
    							this.suppress([ event ]);
    							data[event].apply(this, [].slice.call(arguments, 1));
    							this.release([ event ]);
    						}
    					}, data));
    				});
    			}

    			if (typeof option == 'string' && option.charAt(0) !== '_') {
    				data[option].apply(data, args);
    			}
    		});
    	};

    	/**
    	 * The constructor for the jQuery Plugin
    	 * @public
    	 */
    	$.fn.owlCarousel.Constructor = Owl;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the auto refresh plugin.
    	 * @class The Auto Refresh Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var AutoRefresh = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Refresh interval.
    		 * @protected
    		 * @type {number}
    		 */
    		this._interval = null;

    		/**
    		 * Whether the element is currently visible or not.
    		 * @protected
    		 * @type {Boolean}
    		 */
    		this._visible = null;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoRefresh) {
    					this.watch();
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

    		// register event handlers
    		this._core.$element.on(this._handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	AutoRefresh.Defaults = {
    		autoRefresh: true,
    		autoRefreshInterval: 500
    	};

    	/**
    	 * Watches the element.
    	 */
    	AutoRefresh.prototype.watch = function() {
    		if (this._interval) {
    			return;
    		}

    		this._visible = this._core.isVisible();
    		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    	};

    	/**
    	 * Refreshes the element.
    	 */
    	AutoRefresh.prototype.refresh = function() {
    		if (this._core.isVisible() === this._visible) {
    			return;
    		}

    		this._visible = !this._visible;

    		this._core.$element.toggleClass('owl-hidden', !this._visible);

    		this._visible && (this._core.invalidate('width') && this._core.refresh());
    	};

    	/**
    	 * Destroys the plugin.
    	 */
    	AutoRefresh.prototype.destroy = function() {
    		var handler, property;

    		window.clearInterval(this._interval);

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the lazy plugin.
    	 * @class The Lazy Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var Lazy = function(carousel) {

    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Already loaded items.
    		 * @protected
    		 * @type {Array.<jQuery>}
    		 */
    		this._loaded = [];

    		/**
    		 * Event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
    				if (!e.namespace) {
    					return;
    				}

    				if (!this._core.settings || !this._core.settings.lazyLoad) {
    					return;
    				}

    				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
    					var settings = this._core.settings,
    						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
    						i = ((settings.center && n * -1) || 0),
    						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
    						clones = this._core.clones().length,
    						load = $.proxy(function(i, v) { this.load(v); }, this);
    					//TODO: Need documentation for this new option
    					if (settings.lazyLoadEager > 0) {
    						n += settings.lazyLoadEager;
    						// If the carousel is looping also preload images that are to the "left"
    						if (settings.loop) {
                  position -= settings.lazyLoadEager;
                  n++;
                }
    					}

    					while (i++ < n) {
    						this.load(clones / 2 + this._core.relative(position));
    						clones && $.each(this._core.clones(this._core.relative(position)), load);
    						position++;
    					}
    				}
    			}, this)
    		};

    		// set the default options
    		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

    		// register event handler
    		this._core.$element.on(this._handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Lazy.Defaults = {
    		lazyLoad: false,
    		lazyLoadEager: 0
    	};

    	/**
    	 * Loads all resources of an item at the specified position.
    	 * @param {Number} position - The absolute position of the item.
    	 * @protected
    	 */
    	Lazy.prototype.load = function(position) {
    		var $item = this._core.$stage.children().eq(position),
    			$elements = $item && $item.find('.owl-lazy');

    		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
    			return;
    		}

    		$elements.each($.proxy(function(index, element) {
    			var $element = $(element), image,
                    url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

    			this._core.trigger('load', { element: $element, url: url }, 'lazy');

    			if ($element.is('img')) {
    				$element.one('load.owl.lazy', $.proxy(function() {
    					$element.css('opacity', 1);
    					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
    				}, this)).attr('src', url);
                } else if ($element.is('source')) {
                    $element.one('load.owl.lazy', $.proxy(function() {
                        this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                    }, this)).attr('srcset', url);
    			} else {
    				image = new Image();
    				image.onload = $.proxy(function() {
    					$element.css({
    						'background-image': 'url("' + url + '")',
    						'opacity': '1'
    					});
    					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
    				}, this);
    				image.src = url;
    			}
    		}, this));

    		this._loaded.push($item.get(0));
    	};

    	/**
    	 * Destroys the plugin.
    	 * @public
    	 */
    	Lazy.prototype.destroy = function() {
    		var handler, property;

    		for (handler in this.handlers) {
    			this._core.$element.off(handler, this.handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the auto height plugin.
    	 * @class The Auto Height Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var AutoHeight = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		this._previousHeight = null;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoHeight) {
    					this.update();
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
    					this.update();
    				}
    			}, this),
    			'loaded.owl.lazy': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoHeight
    					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
    					this.update();
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

    		// register event handlers
    		this._core.$element.on(this._handlers);
    		this._intervalId = null;
    		var refThis = this;

    		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
    		// and have been made compatible with the latest jQuery version
    		$(window).on('load', function() {
    			if (refThis._core.settings.autoHeight) {
    				refThis.update();
    			}
    		});

    		// Autoresize the height of the carousel when window is resized
    		// When carousel has images, the height is dependent on the width
    		// and should also change on resize
    		$(window).resize(function() {
    			if (refThis._core.settings.autoHeight) {
    				if (refThis._intervalId != null) {
    					clearTimeout(refThis._intervalId);
    				}

    				refThis._intervalId = setTimeout(function() {
    					refThis.update();
    				}, 250);
    			}
    		});

    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	AutoHeight.Defaults = {
    		autoHeight: false,
    		autoHeightClass: 'owl-height'
    	};

    	/**
    	 * Updates the view.
    	 */
    	AutoHeight.prototype.update = function() {
    		var start = this._core._current,
    			end = start + this._core.settings.items,
    			lazyLoadEnabled = this._core.settings.lazyLoad,
    			visible = this._core.$stage.children().toArray().slice(start, end),
    			heights = [],
    			maxheight = 0;

    		$.each(visible, function(index, item) {
    			heights.push($(item).height());
    		});

    		maxheight = Math.max.apply(null, heights);

    		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
    			maxheight = this._previousHeight;
    		}

    		this._previousHeight = maxheight;

    		this._core.$stage.parent()
    			.height(maxheight)
    			.addClass(this._core.settings.autoHeightClass);
    	};

    	AutoHeight.prototype.destroy = function() {
    		var handler, property;

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] !== 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the video plugin.
    	 * @class The Video Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var Video = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Cache all video URLs.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._videos = {};

    		/**
    		 * Current playing item.
    		 * @protected
    		 * @type {jQuery}
    		 */
    		this._playing = null;

    		/**
    		 * All event handlers.
    		 * @todo The cloned content removale is too late
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace) {
    					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
    				}
    			}, this),
    			'resize.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
    					e.preventDefault();
    				}
    			}, this),
    			'refreshed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.is('resizing')) {
    					this._core.$stage.find('.cloned .owl-video-frame').remove();
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name === 'position' && this._playing) {
    					this.stop();
    				}
    			}, this),
    			'prepared.owl.carousel': $.proxy(function(e) {
    				if (!e.namespace) {
    					return;
    				}

    				var $element = $(e.content).find('.owl-video');

    				if ($element.length) {
    					$element.css('display', 'none');
    					this.fetch($element, $(e.content));
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, Video.Defaults, this._core.options);

    		// register event handlers
    		this._core.$element.on(this._handlers);

    		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
    			this.play(e);
    		}, this));
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Video.Defaults = {
    		video: false,
    		videoHeight: false,
    		videoWidth: false
    	};

    	/**
    	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
    	 * @protected
    	 * @param {jQuery} target - The target containing the video data.
    	 * @param {jQuery} item - The item containing the video.
    	 */
    	Video.prototype.fetch = function(target, item) {
    			var type = (function() {
    					if (target.attr('data-vimeo-id')) {
    						return 'vimeo';
    					} else if (target.attr('data-vzaar-id')) {
    						return 'vzaar'
    					} else {
    						return 'youtube';
    					}
    				})(),
    				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
    				width = target.attr('data-width') || this._core.settings.videoWidth,
    				height = target.attr('data-height') || this._core.settings.videoHeight,
    				url = target.attr('href');

    		if (url) {

    			/*
    					Parses the id's out of the following urls (and probably more):
    					https://www.youtube.com/watch?v=:id
    					https://youtu.be/:id
    					https://vimeo.com/:id
    					https://vimeo.com/channels/:channel/:id
    					https://vimeo.com/groups/:group/videos/:id
    					https://app.vzaar.com/videos/:id

    					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
    			*/

    			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

    			if (id[3].indexOf('youtu') > -1) {
    				type = 'youtube';
    			} else if (id[3].indexOf('vimeo') > -1) {
    				type = 'vimeo';
    			} else if (id[3].indexOf('vzaar') > -1) {
    				type = 'vzaar';
    			} else {
    				throw new Error('Video URL not supported.');
    			}
    			id = id[6];
    		} else {
    			throw new Error('Missing video URL.');
    		}

    		this._videos[url] = {
    			type: type,
    			id: id,
    			width: width,
    			height: height
    		};

    		item.attr('data-video', url);

    		this.thumbnail(target, this._videos[url]);
    	};

    	/**
    	 * Creates video thumbnail.
    	 * @protected
    	 * @param {jQuery} target - The target containing the video data.
    	 * @param {Object} info - The video info object.
    	 * @see `fetch`
    	 */
    	Video.prototype.thumbnail = function(target, video) {
    		var tnLink,
    			icon,
    			path,
    			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
    			customTn = target.find('img'),
    			srcType = 'src',
    			lazyClass = '',
    			settings = this._core.settings,
    			create = function(path) {
    				icon = '<div class="owl-video-play-icon"></div>';

    				if (settings.lazyLoad) {
    					tnLink = $('<div/>',{
    						"class": 'owl-video-tn ' + lazyClass,
    						"srcType": path
    					});
    				} else {
    					tnLink = $( '<div/>', {
    						"class": "owl-video-tn",
    						"style": 'opacity:1;background-image:url(' + path + ')'
    					});
    				}
    				target.after(tnLink);
    				target.after(icon);
    			};

    		// wrap video content into owl-video-wrapper div
    		target.wrap( $( '<div/>', {
    			"class": "owl-video-wrapper",
    			"style": dimensions
    		}));

    		if (this._core.settings.lazyLoad) {
    			srcType = 'data-src';
    			lazyClass = 'owl-lazy';
    		}

    		// custom thumbnail
    		if (customTn.length) {
    			create(customTn.attr(srcType));
    			customTn.remove();
    			return false;
    		}

    		if (video.type === 'youtube') {
    			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
    			create(path);
    		} else if (video.type === 'vimeo') {
    			$.ajax({
    				type: 'GET',
    				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
    				jsonp: 'callback',
    				dataType: 'jsonp',
    				success: function(data) {
    					path = data[0].thumbnail_large;
    					create(path);
    				}
    			});
    		} else if (video.type === 'vzaar') {
    			$.ajax({
    				type: 'GET',
    				url: '//vzaar.com/api/videos/' + video.id + '.json',
    				jsonp: 'callback',
    				dataType: 'jsonp',
    				success: function(data) {
    					path = data.framegrab_url;
    					create(path);
    				}
    			});
    		}
    	};

    	/**
    	 * Stops the current video.
    	 * @public
    	 */
    	Video.prototype.stop = function() {
    		this._core.trigger('stop', null, 'video');
    		this._playing.find('.owl-video-frame').remove();
    		this._playing.removeClass('owl-video-playing');
    		this._playing = null;
    		this._core.leave('playing');
    		this._core.trigger('stopped', null, 'video');
    	};

    	/**
    	 * Starts the current video.
    	 * @public
    	 * @param {Event} event - The event arguments.
    	 */
    	Video.prototype.play = function(event) {
    		var target = $(event.target),
    			item = target.closest('.' + this._core.settings.itemClass),
    			video = this._videos[item.attr('data-video')],
    			width = video.width || '100%',
    			height = video.height || this._core.$stage.height(),
    			html,
    			iframe;

    		if (this._playing) {
    			return;
    		}

    		this._core.enter('playing');
    		this._core.trigger('play', null, 'video');

    		item = this._core.items(this._core.relative(item.index()));

    		this._core.reset(item.index());

    		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
    		html.attr( 'height', height );
    		html.attr( 'width', width );
    		if (video.type === 'youtube') {
    			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
    		} else if (video.type === 'vimeo') {
    			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
    		} else if (video.type === 'vzaar') {
    			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
    		}

    		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

    		this._playing = item.addClass('owl-video-playing');
    	};

    	/**
    	 * Checks whether an video is currently in full screen mode or not.
    	 * @todo Bad style because looks like a readonly method but changes members.
    	 * @protected
    	 * @returns {Boolean}
    	 */
    	Video.prototype.isInFullScreen = function() {
    		var element = document.fullscreenElement || document.mozFullScreenElement ||
    				document.webkitFullscreenElement;

    		return element && $(element).parent().hasClass('owl-video-frame');
    	};

    	/**
    	 * Destroys the plugin.
    	 */
    	Video.prototype.destroy = function() {
    		var handler, property;

    		this._core.$element.off('click.owl.video');

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the animate plugin.
    	 * @class The Navigation Plugin
    	 * @param {Owl} scope - The Owl Carousel
    	 */
    	var Animate = function(scope) {
    		this.core = scope;
    		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
    		this.swapping = true;
    		this.previous = undefined;
    		this.next = undefined;

    		this.handlers = {
    			'change.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name == 'position') {
    					this.previous = this.core.current();
    					this.next = e.property.value;
    				}
    			}, this),
    			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
    				if (e.namespace) {
    					this.swapping = e.type == 'translated';
    				}
    			}, this),
    			'translate.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
    					this.swap();
    				}
    			}, this)
    		};

    		this.core.$element.on(this.handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Animate.Defaults = {
    		animateOut: false,
    		animateIn: false
    	};

    	/**
    	 * Toggles the animation classes whenever an translations starts.
    	 * @protected
    	 * @returns {Boolean|undefined}
    	 */
    	Animate.prototype.swap = function() {

    		if (this.core.settings.items !== 1) {
    			return;
    		}

    		if (!$.support.animation || !$.support.transition) {
    			return;
    		}

    		this.core.speed(0);

    		var left,
    			clear = $.proxy(this.clear, this),
    			previous = this.core.$stage.children().eq(this.previous),
    			next = this.core.$stage.children().eq(this.next),
    			incoming = this.core.settings.animateIn,
    			outgoing = this.core.settings.animateOut;

    		if (this.core.current() === this.previous) {
    			return;
    		}

    		if (outgoing) {
    			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
    			previous.one($.support.animation.end, clear)
    				.css( { 'left': left + 'px' } )
    				.addClass('animated owl-animated-out')
    				.addClass(outgoing);
    		}

    		if (incoming) {
    			next.one($.support.animation.end, clear)
    				.addClass('animated owl-animated-in')
    				.addClass(incoming);
    		}
    	};

    	Animate.prototype.clear = function(e) {
    		$(e.target).css( { 'left': '' } )
    			.removeClass('animated owl-animated-out owl-animated-in')
    			.removeClass(this.core.settings.animateIn)
    			.removeClass(this.core.settings.animateOut);
    		this.core.onTransitionEnd();
    	};

    	/**
    	 * Destroys the plugin.
    	 * @public
    	 */
    	Animate.prototype.destroy = function() {
    		var handler, property;

    		for (handler in this.handlers) {
    			this.core.$element.off(handler, this.handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the autoplay plugin.
    	 * @class The Autoplay Plugin
    	 * @param {Owl} scope - The Owl Carousel
    	 */
    	var Autoplay = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * The autoplay timeout id.
    		 * @type {Number}
    		 */
    		this._call = null;

    		/**
    		 * Depending on the state of the plugin, this variable contains either
    		 * the start time of the timer or the current timer value if it's
    		 * paused. Since we start in a paused state we initialize the timer
    		 * value.
    		 * @type {Number}
    		 */
    		this._time = 0;

    		/**
    		 * Stores the timeout currently used.
    		 * @type {Number}
    		 */
    		this._timeout = 0;

    		/**
    		 * Indicates whenever the autoplay is paused.
    		 * @type {Boolean}
    		 */
    		this._paused = true;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name === 'settings') {
    					if (this._core.settings.autoplay) {
    						this.play();
    					} else {
    						this.stop();
    					}
    				} else if (e.namespace && e.property.name === 'position' && this._paused) {
    					// Reset the timer. This code is triggered when the position
    					// of the carousel was changed through user interaction.
    					this._time = 0;
    				}
    			}, this),
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.autoplay) {
    					this.play();
    				}
    			}, this),
    			'play.owl.autoplay': $.proxy(function(e, t, s) {
    				if (e.namespace) {
    					this.play(t, s);
    				}
    			}, this),
    			'stop.owl.autoplay': $.proxy(function(e) {
    				if (e.namespace) {
    					this.stop();
    				}
    			}, this),
    			'mouseover.owl.autoplay': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
    					this.pause();
    				}
    			}, this),
    			'mouseleave.owl.autoplay': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
    					this.play();
    				}
    			}, this),
    			'touchstart.owl.core': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
    					this.pause();
    				}
    			}, this),
    			'touchend.owl.core': $.proxy(function() {
    				if (this._core.settings.autoplayHoverPause) {
    					this.play();
    				}
    			}, this)
    		};

    		// register event handlers
    		this._core.$element.on(this._handlers);

    		// set default options
    		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Autoplay.Defaults = {
    		autoplay: false,
    		autoplayTimeout: 5000,
    		autoplayHoverPause: false,
    		autoplaySpeed: false
    	};

    	/**
    	 * Transition to the next slide and set a timeout for the next transition.
    	 * @private
    	 * @param {Number} [speed] - The animation speed for the animations.
    	 */
    	Autoplay.prototype._next = function(speed) {
    		this._call = window.setTimeout(
    			$.proxy(this._next, this, speed),
    			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
    		);

    		if (this._core.is('interacting') || document.hidden) {
    			return;
    		}
    		this._core.next(speed || this._core.settings.autoplaySpeed);
    	};

    	/**
    	 * Reads the current timer value when the timer is playing.
    	 * @public
    	 */
    	Autoplay.prototype.read = function() {
    		return new Date().getTime() - this._time;
    	};

    	/**
    	 * Starts the autoplay.
    	 * @public
    	 * @param {Number} [timeout] - The interval before the next animation starts.
    	 * @param {Number} [speed] - The animation speed for the animations.
    	 */
    	Autoplay.prototype.play = function(timeout, speed) {
    		var elapsed;

    		if (!this._core.is('rotating')) {
    			this._core.enter('rotating');
    		}

    		timeout = timeout || this._core.settings.autoplayTimeout;

    		// Calculate the elapsed time since the last transition. If the carousel
    		// wasn't playing this calculation will yield zero.
    		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

    		if (this._paused) {
    			// Start the clock.
    			this._time = this.read();
    			this._paused = false;
    		} else {
    			// Clear the active timeout to allow replacement.
    			window.clearTimeout(this._call);
    		}

    		// Adjust the origin of the timer to match the new timeout value.
    		this._time += this.read() % timeout - elapsed;

    		this._timeout = timeout;
    		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
    	};

    	/**
    	 * Stops the autoplay.
    	 * @public
    	 */
    	Autoplay.prototype.stop = function() {
    		if (this._core.is('rotating')) {
    			// Reset the clock.
    			this._time = 0;
    			this._paused = true;

    			window.clearTimeout(this._call);
    			this._core.leave('rotating');
    		}
    	};

    	/**
    	 * Pauses the autoplay.
    	 * @public
    	 */
    	Autoplay.prototype.pause = function() {
    		if (this._core.is('rotating') && !this._paused) {
    			// Pause the clock.
    			this._time = this.read();
    			this._paused = true;

    			window.clearTimeout(this._call);
    		}
    	};

    	/**
    	 * Destroys the plugin.
    	 */
    	Autoplay.prototype.destroy = function() {
    		var handler, property;

    		this.stop();

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the navigation plugin.
    	 * @class The Navigation Plugin
    	 * @param {Owl} carousel - The Owl Carousel.
    	 */
    	var Navigation = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Indicates whether the plugin is initialized or not.
    		 * @protected
    		 * @type {Boolean}
    		 */
    		this._initialized = false;

    		/**
    		 * The current paging indexes.
    		 * @protected
    		 * @type {Array}
    		 */
    		this._pages = [];

    		/**
    		 * All DOM elements of the user interface.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._controls = {};

    		/**
    		 * Markup for an indicator.
    		 * @protected
    		 * @type {Array.<String>}
    		 */
    		this._templates = [];

    		/**
    		 * The carousel element.
    		 * @type {jQuery}
    		 */
    		this.$element = this._core.$element;

    		/**
    		 * Overridden methods of the carousel.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._overrides = {
    			next: this._core.next,
    			prev: this._core.prev,
    			to: this._core.to
    		};

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'prepared.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.dotsData) {
    					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
    						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
    				}
    			}, this),
    			'added.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.dotsData) {
    					this._templates.splice(e.position, 0, this._templates.pop());
    				}
    			}, this),
    			'remove.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.dotsData) {
    					this._templates.splice(e.position, 1);
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name == 'position') {
    					this.draw();
    				}
    			}, this),
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && !this._initialized) {
    					this._core.trigger('initialize', null, 'navigation');
    					this.initialize();
    					this.update();
    					this.draw();
    					this._initialized = true;
    					this._core.trigger('initialized', null, 'navigation');
    				}
    			}, this),
    			'refreshed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._initialized) {
    					this._core.trigger('refresh', null, 'navigation');
    					this.update();
    					this.draw();
    					this._core.trigger('refreshed', null, 'navigation');
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

    		// register event handlers
    		this.$element.on(this._handlers);
    	};

    	/**
    	 * Default options.
    	 * @public
    	 * @todo Rename `slideBy` to `navBy`
    	 */
    	Navigation.Defaults = {
    		nav: false,
    		navText: [
    			'<span aria-label="' + 'Previous' + '">&#x2039;</span>',
    			'<span aria-label="' + 'Next' + '">&#x203a;</span>'
    		],
    		navSpeed: false,
    		navElement: 'button type="button" role="presentation"',
    		navContainer: false,
    		navContainerClass: 'owl-nav',
    		navClass: [
    			'owl-prev',
    			'owl-next'
    		],
    		slideBy: 1,
    		dotClass: 'owl-dot',
    		dotsClass: 'owl-dots',
    		dots: true,
    		dotsEach: false,
    		dotsData: false,
    		dotsSpeed: false,
    		dotsContainer: false
    	};

    	/**
    	 * Initializes the layout of the plugin and extends the carousel.
    	 * @protected
    	 */
    	Navigation.prototype.initialize = function() {
    		var override,
    			settings = this._core.settings;

    		// create DOM structure for relative navigation
    		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
    			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

    		this._controls.$previous = $('<' + settings.navElement + '>')
    			.addClass(settings.navClass[0])
    			.html(settings.navText[0])
    			.prependTo(this._controls.$relative)
    			.on('click', $.proxy(function(e) {
    				this.prev(settings.navSpeed);
    			}, this));
    		this._controls.$next = $('<' + settings.navElement + '>')
    			.addClass(settings.navClass[1])
    			.html(settings.navText[1])
    			.appendTo(this._controls.$relative)
    			.on('click', $.proxy(function(e) {
    				this.next(settings.navSpeed);
    			}, this));

    		// create DOM structure for absolute navigation
    		if (!settings.dotsData) {
    			this._templates = [ $('<button role="button">')
    				.addClass(settings.dotClass)
    				.append($('<span>'))
    				.prop('outerHTML') ];
    		}

    		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
    			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

    		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
    			var index = $(e.target).parent().is(this._controls.$absolute)
    				? $(e.target).index() : $(e.target).parent().index();

    			e.preventDefault();

    			this.to(index, settings.dotsSpeed);
    		}, this));

    		/*$el.on('focusin', function() {
    			$(document).off(".carousel");

    			$(document).on('keydown.carousel', function(e) {
    				if(e.keyCode == 37) {
    					$el.trigger('prev.owl')
    				}
    				if(e.keyCode == 39) {
    					$el.trigger('next.owl')
    				}
    			});
    		});*/

    		// override public methods of the carousel
    		for (override in this._overrides) {
    			this._core[override] = $.proxy(this[override], this);
    		}
    	};

    	/**
    	 * Destroys the plugin.
    	 * @protected
    	 */
    	Navigation.prototype.destroy = function() {
    		var handler, control, property, override, settings;
    		settings = this._core.settings;

    		for (handler in this._handlers) {
    			this.$element.off(handler, this._handlers[handler]);
    		}
    		for (control in this._controls) {
    			if (control === '$relative' && settings.navContainer) {
    				this._controls[control].html('');
    			} else {
    				this._controls[control].remove();
    			}
    		}
    		for (override in this.overides) {
    			this._core[override] = this._overrides[override];
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	/**
    	 * Updates the internal state.
    	 * @protected
    	 */
    	Navigation.prototype.update = function() {
    		var i, j, k,
    			lower = this._core.clones().length / 2,
    			upper = lower + this._core.items().length,
    			maximum = this._core.maximum(true),
    			settings = this._core.settings,
    			size = settings.center || settings.autoWidth || settings.dotsData
    				? 1 : settings.dotsEach || settings.items;

    		if (settings.slideBy !== 'page') {
    			settings.slideBy = Math.min(settings.slideBy, settings.items);
    		}

    		if (settings.dots || settings.slideBy == 'page') {
    			this._pages = [];

    			for (i = lower, j = 0, k = 0; i < upper; i++) {
    				if (j >= size || j === 0) {
    					this._pages.push({
    						start: Math.min(maximum, i - lower),
    						end: i - lower + size - 1
    					});
    					if (Math.min(maximum, i - lower) === maximum) {
    						break;
    					}
    					j = 0, ++k;
    				}
    				j += this._core.mergers(this._core.relative(i));
    			}
    		}
    	};

    	/**
    	 * Draws the user interface.
    	 * @todo The option `dotsData` wont work.
    	 * @protected
    	 */
    	Navigation.prototype.draw = function() {
    		var difference,
    			settings = this._core.settings,
    			disabled = this._core.items().length <= settings.items,
    			index = this._core.relative(this._core.current()),
    			loop = settings.loop || settings.rewind;

    		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

    		if (settings.nav) {
    			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
    			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
    		}

    		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

    		if (settings.dots) {
    			difference = this._pages.length - this._controls.$absolute.children().length;

    			if (settings.dotsData && difference !== 0) {
    				this._controls.$absolute.html(this._templates.join(''));
    			} else if (difference > 0) {
    				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
    			} else if (difference < 0) {
    				this._controls.$absolute.children().slice(difference).remove();
    			}

    			this._controls.$absolute.find('.active').removeClass('active');
    			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
    		}
    	};

    	/**
    	 * Extends event data.
    	 * @protected
    	 * @param {Event} event - The event object which gets thrown.
    	 */
    	Navigation.prototype.onTrigger = function(event) {
    		var settings = this._core.settings;

    		event.page = {
    			index: $.inArray(this.current(), this._pages),
    			count: this._pages.length,
    			size: settings && (settings.center || settings.autoWidth || settings.dotsData
    				? 1 : settings.dotsEach || settings.items)
    		};
    	};

    	/**
    	 * Gets the current page position of the carousel.
    	 * @protected
    	 * @returns {Number}
    	 */
    	Navigation.prototype.current = function() {
    		var current = this._core.relative(this._core.current());
    		return $.grep(this._pages, $.proxy(function(page, index) {
    			return page.start <= current && page.end >= current;
    		}, this)).pop();
    	};

    	/**
    	 * Gets the current succesor/predecessor position.
    	 * @protected
    	 * @returns {Number}
    	 */
    	Navigation.prototype.getPosition = function(successor) {
    		var position, length,
    			settings = this._core.settings;

    		if (settings.slideBy == 'page') {
    			position = $.inArray(this.current(), this._pages);
    			length = this._pages.length;
    			successor ? ++position : --position;
    			position = this._pages[((position % length) + length) % length].start;
    		} else {
    			position = this._core.relative(this._core.current());
    			length = this._core.items().length;
    			successor ? position += settings.slideBy : position -= settings.slideBy;
    		}

    		return position;
    	};

    	/**
    	 * Slides to the next item or page.
    	 * @public
    	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
    	 */
    	Navigation.prototype.next = function(speed) {
    		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    	};

    	/**
    	 * Slides to the previous item or page.
    	 * @public
    	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
    	 */
    	Navigation.prototype.prev = function(speed) {
    		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    	};

    	/**
    	 * Slides to the specified item or page.
    	 * @public
    	 * @param {Number} position - The position of the item or page.
    	 * @param {Number} [speed] - The time in milliseconds for the transition.
    	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
    	 */
    	Navigation.prototype.to = function(position, speed, standard) {
    		var length;

    		if (!standard && this._pages.length) {
    			length = this._pages.length;
    			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
    		} else {
    			$.proxy(this._overrides.to, this._core)(position, speed);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	/**
    	 * Creates the hash plugin.
    	 * @class The Hash Plugin
    	 * @param {Owl} carousel - The Owl Carousel
    	 */
    	var Hash = function(carousel) {
    		/**
    		 * Reference to the core.
    		 * @protected
    		 * @type {Owl}
    		 */
    		this._core = carousel;

    		/**
    		 * Hash index for the items.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._hashes = {};

    		/**
    		 * The carousel element.
    		 * @type {jQuery}
    		 */
    		this.$element = this._core.$element;

    		/**
    		 * All event handlers.
    		 * @protected
    		 * @type {Object}
    		 */
    		this._handlers = {
    			'initialized.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
    					$(window).trigger('hashchange.owl.navigation');
    				}
    			}, this),
    			'prepared.owl.carousel': $.proxy(function(e) {
    				if (e.namespace) {
    					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

    					if (!hash) {
    						return;
    					}

    					this._hashes[hash] = e.content;
    				}
    			}, this),
    			'changed.owl.carousel': $.proxy(function(e) {
    				if (e.namespace && e.property.name === 'position') {
    					var current = this._core.items(this._core.relative(this._core.current())),
    						hash = $.map(this._hashes, function(item, hash) {
    							return item === current ? hash : null;
    						}).join();

    					if (!hash || window.location.hash.slice(1) === hash) {
    						return;
    					}

    					window.location.hash = hash;
    				}
    			}, this)
    		};

    		// set default options
    		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

    		// register the event handlers
    		this.$element.on(this._handlers);

    		// register event listener for hash navigation
    		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
    			var hash = window.location.hash.substring(1),
    				items = this._core.$stage.children(),
    				position = this._hashes[hash] && items.index(this._hashes[hash]);

    			if (position === undefined || position === this._core.current()) {
    				return;
    			}

    			this._core.to(this._core.relative(position), false, true);
    		}, this));
    	};

    	/**
    	 * Default options.
    	 * @public
    	 */
    	Hash.Defaults = {
    		URLhashListener: false
    	};

    	/**
    	 * Destroys the plugin.
    	 * @public
    	 */
    	Hash.prototype.destroy = function() {
    		var handler, property;

    		$(window).off('hashchange.owl.navigation');

    		for (handler in this._handlers) {
    			this._core.$element.off(handler, this._handlers[handler]);
    		}
    		for (property in Object.getOwnPropertyNames(this)) {
    			typeof this[property] != 'function' && (this[property] = null);
    		}
    	};

    	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

    })(window.Zepto || window.jQuery, window, document);
    (function($, window, document, undefined) {

    	var style = $('<support>').get(0).style,
    		prefixes = 'Webkit Moz O ms'.split(' '),
    		events = {
    			transition: {
    				end: {
    					WebkitTransition: 'webkitTransitionEnd',
    					MozTransition: 'transitionend',
    					OTransition: 'oTransitionEnd',
    					transition: 'transitionend'
    				}
    			},
    			animation: {
    				end: {
    					WebkitAnimation: 'webkitAnimationEnd',
    					MozAnimation: 'animationend',
    					OAnimation: 'oAnimationEnd',
    					animation: 'animationend'
    				}
    			}
    		},
    		tests = {
    			csstransforms: function() {
    				return !!test('transform');
    			},
    			csstransforms3d: function() {
    				return !!test('perspective');
    			},
    			csstransitions: function() {
    				return !!test('transition');
    			},
    			cssanimations: function() {
    				return !!test('animation');
    			}
    		};

    	function test(property, prefixed) {
    		var result = false,
    			upper = property.charAt(0).toUpperCase() + property.slice(1);

    		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
    			if (style[property] !== undefined) {
    				result = prefixed ? property : true;
    				return false;
    			}
    		});

    		return result;
    	}

    	function prefixed(property) {
    		return test(property, true);
    	}

    	if (tests.csstransitions()) {
    		/* jshint -W053 */
    		$.support.transition = new String(prefixed('transition'));
    		$.support.transition.end = events.transition.end[ $.support.transition ];
    	}

    	if (tests.cssanimations()) {
    		/* jshint -W053 */
    		$.support.animation = new String(prefixed('animation'));
    		$.support.animation.end = events.animation.end[ $.support.animation ];
    	}

    	if (tests.csstransforms()) {
    		/* jshint -W053 */
    		$.support.transform = new String(prefixed('transform'));
    		$.support.transform3d = tests.csstransforms3d();
    	}

    })(window.Zepto || window.jQuery, window, document);

    var $ = window.jQuery;
    var ReactOwlCarousel = /** @class */ (function (_super) {
        __extends(ReactOwlCarousel, _super);
        function ReactOwlCarousel(props) {
            var _this = _super.call(this, props) || this;
            _this.containerRef = function (inst) {
                _this.container = inst;
            };
            var _a = filterOptions(_this.props), options = _a[0], propsWithoutOptions = _a[1];
            _this.options = options;
            _this.propsWithoutOptions = propsWithoutOptions;
            return _this;
        }
        ReactOwlCarousel.prototype.componentDidMount = function () {
            this.$ele = $(this.container);
            this.create();
        };
        ReactOwlCarousel.prototype.componentWillReceiveProps = function () {
            this.destory();
        };
        ReactOwlCarousel.prototype.componentDidUpdate = function () {
            var _a = filterOptions(this.props), options = _a[0], propsWithoutOptions = _a[1];
            this.options = options;
            this.propsWithoutOptions = propsWithoutOptions;
            this.create();
        };
        ReactOwlCarousel.prototype.next = function (speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof speed === 'number') {
                this.$ele.trigger('next.owl.carousel', [speed]);
            }
            else {
                this.$ele.trigger('next.owl.carousel', speed);
            }
        };
        ReactOwlCarousel.prototype.prev = function (speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof speed === 'number') {
                this.$ele.trigger('prev.owl.carousel', [speed]);
            }
            else {
                this.$ele.trigger('prev.owl.carousel', speed);
            }
        };
        ReactOwlCarousel.prototype.to = function (position, speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof position === 'number' && typeof speed === 'number') {
                this.$ele.trigger('to.owl.carousel', [position, speed]);
            }
            else {
                this.$ele.trigger('to.owl.carousel');
            }
        };
        ReactOwlCarousel.prototype.create = function (options) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            this.$ele.owlCarousel(options || this.options);
        };
        ReactOwlCarousel.prototype.destory = function () {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            this.$ele.trigger('destroy.owl.carousel');
        };
        ReactOwlCarousel.prototype.play = function (timeout, speed) {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            if (typeof timeout === 'number' && typeof speed === 'number') {
                this.$ele.trigger('play.owl.autoplay', [timeout, speed]);
            }
            else {
                this.$ele.trigger('play.owl.autoplay');
            }
        };
        ReactOwlCarousel.prototype.stop = function () {
            if (!this.$ele)
                throw new Error('OwlCarousel is not created');
            this.$ele.trigger('stop.owl.autoplay');
        };
        ReactOwlCarousel.prototype.render = function () {
            var _a = this.propsWithoutOptions, className = _a.className, props = __rest(_a, ["className"]);
            return (React__default.createElement("div", __assign({ className: "owl-carousel " + className, ref: this.containerRef }, props)));
        };
        return ReactOwlCarousel;
    }(React.Component));
    var OPTIONS = new Set([
        'items',
        'margin',
        'loop',
        'center',
        'mouseDrag',
        'touchDrag',
        'pullDrag',
        'freeDrag',
        'stagePadding',
        'merge',
        'mergeFit',
        'autoWidth',
        'startPosition',
        'URLhashListener',
        'nav',
        'rewind',
        'navText',
        'navElement',
        'slideBy',
        'dots',
        'dotsEach',
        'dotData',
        'lazyLoad',
        'lazyContent',
        'autoplay',
        'autoplayTimeout',
        'autoplayHoverPause',
        'smartSpeed',
        'fluidSpeed',
        'autoplaySpeed',
        'navSpeed',
        'dotsSpeed',
        'dragEndSpeed',
        'callbacks',
        'responsive',
        'responsiveRefreshRate',
        'responsiveBaseElement',
        'video',
        'videoHeight',
        'videoWidth',
        'animateOut',
        'animateIn',
        'fallbackEasing',
        'info',
        'nestedItemSelector',
        'itemElement',
        'stageElement',
        'navContainer',
        'dotsContainer',
        // 'CLASSES'
        'refreshClass',
        'loadingClass',
        'loadedClass',
        'rtlClass',
        'dragClass',
        'grabClass',
        'stageClass',
        'stageOuterClass',
        'navContainerClass',
        'navClass',
        'controlsClass',
        'dotClass',
        'dotsClass',
        'autoHeightClass',
        'responsiveClass',
        // 'EVENTS'
        'onInitialize',
        'onInitialized',
        'onResize',
        'onResized',
        'onRefresh',
        'onRefreshed',
        'onDrag',
        'onDragged',
        'onTranslate',
        'onTranslated',
        'onChange',
        'onChanged',
        'onLoadLazy',
        'onLoadedLazy',
        'onStopVideo',
        'onPlayVideo',
    ]);
    function filterOptions(item) {
        var options = {};
        var propsWithoutOptions = {};
        Object.keys(item).forEach(function (key) {
            if (OPTIONS.has(key)) {
                options[key] = item[key];
            }
            else {
                propsWithoutOptions[key] = item[key];
            }
        });
        return [options, propsWithoutOptions];
    }

    return ReactOwlCarousel;

})));


/***/ })

})
        })
      ;
//# sourceMappingURL=react_owl_carousel_81ecf3b296fdb4e5efaf1e24fcbfe551.js.map