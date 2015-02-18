define("bookclipper/adapters/application", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.RESTAdapter.extend({
        coalesceFindRequests: true,
        namespace: 'api'
    });
  });
define("bookclipper/app", 
  ["ember","ember/resolver","ember/load-initializers","bookclipper/config/environment","rails-csrf/config","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Resolver = __dependency2__["default"];
    var loadInitializers = __dependency3__["default"];
    var config = __dependency4__["default"];
    var setCsrfUrl = __dependency5__.setCsrfUrl;

    Ember.MODEL_FACTORY_INJECTIONS = true;

    var App = Ember.Application.extend({
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix,
      Resolver: Resolver
    });

    setCsrfUrl('/csrf');

    loadInitializers(App, config.modulePrefix);
    loadInitializers(App, 'rails-csrf');


    __exports__["default"] = App;
  });
define("bookclipper/components/f-accordion-panel", 
  ["ember-foundation/components/f-accordion-panel","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FAccordionPanel = __dependency1__["default"];

    __exports__["default"] = FAccordionPanel;
  });
define("bookclipper/components/f-accordion", 
  ["ember-foundation/components/f-accordion","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FAccordion = __dependency1__["default"];

    __exports__["default"] = FAccordion;
  });
define("bookclipper/components/f-alert", 
  ["ember-foundation/components/f-alert","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FAlert = __dependency1__["default"];

    __exports__["default"] = FAlert;
  });
define("bookclipper/components/f-arrival", 
  ["ember-foundation/components/f-arrival","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FArrival = __dependency1__["default"];

    __exports__["default"] = FArrival;
  });
define("bookclipper/components/f-breadcrumbs", 
  ["ember-foundation/components/f-breadcrumbs","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FBreadcrumbs = __dependency1__["default"];

    __exports__["default"] = FBreadcrumbs;
  });
define("bookclipper/components/f-button", 
  ["ember-foundation/components/f-button","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FButton = __dependency1__["default"];

    __exports__["default"] = FButton;
  });
define("bookclipper/components/f-clearing-image", 
  ["ember-foundation/components/f-clearing-image","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FClearingImage = __dependency1__["default"];

    __exports__["default"] = FClearingImage;
  });
define("bookclipper/components/f-clearing", 
  ["ember-foundation/components/f-clearing","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FClearing = __dependency1__["default"];

    __exports__["default"] = FClearing;
  });
define("bookclipper/components/f-dropdown", 
  ["ember-foundation/components/f-dropdown","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FDropdown = __dependency1__["default"];

    __exports__["default"] = FDropdown;
  });
define("bookclipper/components/f-joyride", 
  ["ember-foundation/components/f-joyride","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FJoyride = __dependency1__["default"];

    __exports__["default"] = FJoyride;
  });
define("bookclipper/components/f-magellan", 
  ["ember-foundation/components/f-magellan","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FMagellan = __dependency1__["default"];

    __exports__["default"] = FMagellan;
  });
define("bookclipper/components/f-orbit", 
  ["ember-foundation/components/f-orbit","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FOrbit = __dependency1__["default"];

    __exports__["default"] = FOrbit;
  });
define("bookclipper/components/f-pagination", 
  ["ember-foundation/components/f-pagination","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FPagination = __dependency1__["default"];

    __exports__["default"] = FPagination;
  });
define("bookclipper/components/f-progress-bar", 
  ["ember-foundation/components/f-progress-bar","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FProgressBar = __dependency1__["default"];

    __exports__["default"] = FProgressBar;
  });
define("bookclipper/components/f-reveal-modal", 
  ["ember-foundation/components/f-reveal-modal","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FRevealModal = __dependency1__["default"];

    __exports__["default"] = FRevealModal;
  });
define("bookclipper/components/f-slider", 
  ["ember-foundation/components/f-slider","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FSlider = __dependency1__["default"];

    __exports__["default"] = FSlider;
  });
define("bookclipper/components/f-stop", 
  ["ember-foundation/components/f-stop","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FStop = __dependency1__["default"];

    __exports__["default"] = FStop;
  });
define("bookclipper/components/f-switch", 
  ["ember-foundation/components/f-switch","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FSwitch = __dependency1__["default"];

    __exports__["default"] = FSwitch;
  });
define("bookclipper/components/f-switches", 
  ["ember-foundation/components/f-switches","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FSwitches = __dependency1__["default"];

    __exports__["default"] = FSwitches;
  });
define("bookclipper/components/f-tab-pane", 
  ["ember-foundation/components/f-tab-pane","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FTabPane = __dependency1__["default"];

    __exports__["default"] = FTabPane;
  });
define("bookclipper/components/f-tab-panel", 
  ["ember-foundation/components/f-tab-panel","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FTabPanel = __dependency1__["default"];

    __exports__["default"] = FTabPanel;
  });
define("bookclipper/components/f-tooltip", 
  ["ember-foundation/components/f-tooltip","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var FTooltip = __dependency1__["default"];

    __exports__["default"] = FTooltip;
  });
define("bookclipper/controllers/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectController.extend({
      menuVisible: false,
      actions: {
        toggleMenu: function() {
          console.log("menu");
          this.toggleProperty('menuVisible');
        }
      }
    });
  });
define("bookclipper/controllers/bookmarks/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.ArrayController.extend({
      actions: {
        clipIt: function(id) {
          var _this = this;
          Ember.$.ajax({
          url : 'api/favorites',
          type: 'POST',
          dataType : "json",
          data: {"bookmark_id": id},
          success:function() {
            Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Added to your clips!</h3></div></div>");
            setTimeout(function(){
              Ember.$("#flash-wrapper").fadeOut("slow", function () {
              Ember.$("#flash-wrapper").remove();
              }); }, 2000);
            return _this.store.find('bookmark');
          },
          error: function() { alert('something bad happened'); }
          });
        },
        remove: function(id) {
          var _this = this;
          Ember.$.ajax({
          url : 'api/favorites/'+id,
          type: 'DELETE',
          dataType : "json",
          data: {"bookmark_id": id},
          success:function() {
            Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Removed from your clips!</h3></div></div>");
            setTimeout(function(){
              Ember.$("#flash-wrapper").fadeOut("slow", function () {
              Ember.$("#flash-wrapper").remove();
              }); }, 2000);
            _this.store.unloadAll('bookmark');
            _this.store.unloadAll('user');
            _this.store.unloadAll('hashtag');
            _this.store.find('bookmark');
          },
          error: function() { alert('something bad happened'); }
          });
        }
      }
    });
  });
define("bookclipper/controllers/bookmarks/new", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.ObjectController.extend({
      queryParams: ['url'],
      url: null,
      actions: {
        save: function() {
          var _this = this;
          var newBookmark = this.store.createRecord('bookmark', {
            url: this.get('url'),
            tags: this.get('tags'),
          });
          newBookmark.save().then(function(bookmark) {
            _this.set('url', '');
            _this.set('tags', '');
            _this.transitionToRoute('bookmarks.show', bookmark);
          });
          }
        }
      });
  });
define("bookclipper/controllers/bookmarks/show", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectController.extend({
    actions: {
        clipIt: function(id) {
          var _this = this;
          Ember.$.ajax({
          url : 'api/favorites',
          type: 'POST',
          dataType : "json",
          data: {"bookmark_id": id},
          success:function() {
            Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Added to your clips!</h3></div></div>");
            setTimeout(function(){
              Ember.$("#flash-wrapper").fadeOut("slow", function () {
              Ember.$("#flash-wrapper").remove();
              }); }, 2000);
            return _this.store.find('bookmark');
          },
          error: function() { alert('something bad happened'); }
          });
        },
        remove: function(id) {
          var _this = this;
          Ember.$.ajax({
          url : 'api/favorites/'+id,
          type: 'DELETE',
          dataType : "json",
          data: {"bookmark_id": id},      
          success:function() {
            Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Removed from your clips!</h3></div></div>");
            setTimeout(function(){
              Ember.$("#flash-wrapper").fadeOut("slow", function () {
              Ember.$("#flash-wrapper").remove();
              }); }, 2000);
            _this.store.unloadAll('bookmark');
            _this.store.unloadAll('user');
            _this.store.unloadAll('hashtag');
            _this.transitionToRoute('bookmarks');
          },
          error: function() { alert('something bad happened'); }
          });
        }
      }
    });
  });
define("bookclipper/controllers/bookmarks/update", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.ObjectController.extend({
      queryParams: ['url'],
      url: null,
      actions: {
        update: function() {
          var _this = this;
          var bookmark = this.get('model');
          var title = this.get('title');
          var description = this.get('description');
          var tags = this.get('tags');
          bookmark.set('title', title);
          bookmark.set('description', description);
          bookmark.set('tags', tags);
          bookmark.save().then(function(bookmark) {
            _this.store.find('bookmark');
            _this.transitionToRoute('bookmarks.show', bookmark);
          });
          }
        }
      });
  });
define("bookclipper/controllers/hashtags/show", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectController.extend({
    actions: {
        clipIt: function(id) {
          var _this = this;
          Ember.$.ajax({
          url : 'api/favorites',
          type: 'POST',
          dataType : "json",
          data: {"bookmark_id": id},
          success:function() {
            Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Added to your clips!</h3></div></div>");
            setTimeout(function(){
              Ember.$("#flash-wrapper").fadeOut("slow", function () {
              Ember.$("#flash-wrapper").remove();
              }); }, 2000);
            return _this.store.find('bookmark');
          },
          error: function() { alert('something bad happened'); }
          });
        },
        remove: function(id) {
          var _this = this;
          Ember.$.ajax({
          url : 'api/favorites/'+id,
          type: 'DELETE',
          dataType : "json",
          data: {"bookmark_id": id},      
          success:function() {
            Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Removed from your clips!</h3></div></div>");
            setTimeout(function(){
              Ember.$("#flash-wrapper").fadeOut("slow", function () {
              Ember.$("#flash-wrapper").remove();
              }); }, 2000);
            _this.store.find('bookmark');
            _this.transitionToRoute('hashtags');
          },
          error: function() { alert('something bad happened'); }
          });
        }
      }
    });
  });
define("bookclipper/controllers/users/account", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectController.extend({
      actions: {
        signout: function() {
          Ember.$.ajax({
            url: 'api/users/sign_out',
            type: 'DELETE',
            success: function(result) {
              console.log(result);
              location.reload();
            }
          });
        }
      }
    });
  });
define("bookclipper/controllers/users/login", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.ObjectController.extend({
      actions: {
        logIn: function() {
          var email = this.get('email');
          var password = this.get('password');
          Ember.$.ajax({
          url : 'api/users/sign_in',
          type: 'POST',
          dataType : "json",
          data: {"user":{"email": email, "password": password}},
          success:function(data) {
            console.log(data);
            window.location.href = '/';
          },
          error: function() { alert('something bad happened'); }
          });
        }
      }
    });
  });
define("bookclipper/controllers/users/new", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Controller.extend({
      actions: {
        save: function() {
          var newUser = this.store.createRecord('user', {
            email: this.get('email'),
            name: this.get('name'),
            password: this.get('password'),
            password_confirmation: this.get('password_confirmation'),
          success:function(data) {
            console.log(data);
          },
          error: function() { alert('something bad happened'); }
          });
          newUser.save().then(function (){
          window.location.href = '/';
      });


        }
      }
    });
  });
define("bookclipper/controllers/users/show", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.ObjectController.extend({
       actions: {
        clipIt: function(id) {
          var _this = this;
          Ember.$.ajax({
          url : 'api/favorites',
          type: 'POST',
          dataType : "json",
          data: {"bookmark_id": id},
          success:function() {
            Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Added to your clips!</h3></div></div>");
            setTimeout(function(){
              Ember.$("#flash-wrapper").fadeOut("slow", function () {
              Ember.$("#flash-wrapper").remove();
              }); }, 2000);
            return _this.store.find('bookmark');
          },
          error: function() { alert('something bad happened'); }
          });
        },
        remove: function(id) {
          var _this = this;
          Ember.$.ajax({
          url : 'api/favorites/'+id,
          type: 'DELETE',
          dataType : "json",
          data: {"bookmark_id": id},
          success:function() {
            Ember.$('body').prepend("<div id='flash-wrapper'><div class='flash-message'> <h3 class='flash-text'>Removed from your clips!</h3></div></div>");
            setTimeout(function(){
              Ember.$("#flash-wrapper").fadeOut("slow", function () {
              Ember.$("#flash-wrapper").remove();
              }); }, 2000);
            _this.store.find('bookmark');
          },
          error: function() { alert('something bad happened'); }
          });
        }
      }
    });
  });
define("bookclipper/helpers/fa-icon", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    var FA_PREFIX = /^fa\-.+/;

    var warn = Ember.Logger.warn;

    /**
     * Handlebars helper for generating HTML that renders a FontAwesome icon.
     *
     * @param  {String} name    The icon name. Note that the `fa-` prefix is optional.
     *                          For example, you can pass in either `fa-camera` or just `camera`.
     * @param  {Object} options Options passed to helper.
     * @return {Ember.Handlebars.SafeString} The HTML markup.
     */
    var faIcon = function(name, options) {
      if (Ember.typeOf(name) !== 'string') {
        var message = "fa-icon: no icon specified";
        warn(message);
        return Ember.String.htmlSafe(message);
      }

      var params = options.hash,
        classNames = [],
        html = "";

      classNames.push("fa");
      if (!name.match(FA_PREFIX)) {
        name = "fa-" + name;
      }
      classNames.push(name);
      if (params.spin) {
        classNames.push("fa-spin");
      }
      if (params.flip) {
        classNames.push("fa-flip-" + params.flip);
      }
      if (params.rotate) {
        classNames.push("fa-rotate-" + params.rotate);
      }
      if (params.lg) {
        warn("fa-icon: the 'lg' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\"lg\"}}");
        classNames.push("fa-lg");
      }
      if (params.x) {
        warn("fa-icon: the 'x' parameter is deprecated. Use 'size' instead. I.e. {{fa-icon size=\"" + params.x + "\"}}");
        classNames.push("fa-" + params.x + "x");
      }
      if (params.size) {
        if (Ember.typeOf(params.size) === "string" && params.size.match(/\d+/)) {
          params.size = Number(params.size);
        }
        if (Ember.typeOf(params.size) === "number") {
          classNames.push("fa-" + params.size + "x");
        } else {
          classNames.push("fa-" + params.size);
        }
      }
      if (params.fixedWidth) {
        classNames.push("fa-fw");
      }
      if (params.listItem) {
        classNames.push("fa-li");
      }
      if (params.pull) {
        classNames.push("pull-" + params.pull);
      }
      if (params.border) {
        classNames.push("fa-border");
      }
      if (params.classNames && !Ember.isArray(params.classNames)) {
        params.classNames = [ params.classNames ];
      }
      if (!Ember.isEmpty(params.classNames)) {
        Array.prototype.push.apply(classNames, params.classNames);
      }


      html += "<";
      var tagName = params.tagName || 'i';
      html += tagName;
      html += " class='" + classNames.join(" ") + "'";
      if (params.title) {
        html += " title='" + params.title + "'";
      }
      if (params.ariaHidden === undefined || params.ariaHidden) {
        html += " aria-hidden=\"true\"";
      }
      html += "></" + tagName + ">";
      return Ember.String.htmlSafe(html);
    };

    __exports__.faIcon = faIcon;

    __exports__["default"] = Ember.Handlebars.makeBoundHelper(faIcon);
  });
define("bookclipper/initializers/ember-foundation", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = {
      name: 'ember-foundation',

      initialize: function(container, app) {
        app.inject('component:f-breadcrumbs', 'router', 'router:main');
      }
    };
  });
define("bookclipper/initializers/export-application-global", 
  ["ember","bookclipper/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    function initialize(container, application) {
      var classifiedName = Ember.String.classify(config.modulePrefix);

      if (config.exportApplicationGlobal) {
        window[classifiedName] = application;
      }
    };
    __exports__.initialize = initialize;

    __exports__["default"] = {
      name: 'export-application-global',

      initialize: initialize
    };
  });
define("bookclipper/models/bookmark", 
  ["ember-data","ember","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];
    var Ember = __dependency2__["default"];

    __exports__["default"] = DS.Model.extend({
      url: DS.attr('string'),
      title: DS.attr('string'),
      description: DS.attr('string'),
      tags: DS.attr('string'),
      hashtags: DS.hasMany('hashtag', { async: true }),
      users: DS.hasMany('user', { async: true }),
      authenticated: DS.attr('boolean'),
      editable: DS.attr('boolean'),
      bookmark_img: Ember.computed( "url", function() {
        return "http://img.bitpixels.com/getthumbnail?code=21000&size=200&url=" + this.get("url");
      }),
    });
  });
define("bookclipper/models/hashtag", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      topic: DS.attr('string'),
      bookmarks: DS.hasMany('bookmark', { async: true })
    });
  });
define("bookclipper/models/session", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      user_name: DS.attr('string'),
      user_email: DS.attr('string'),
      authenticated: DS.attr('string')
    });
  });
define("bookclipper/models/user", 
  ["ember-data","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];

    __exports__["default"] = DS.Model.extend({
      email: DS.attr('string'),
      password: DS.attr('string'),
      password_confirmation: DS.attr('string'),
      name: DS.attr('string'),
      bookmarks: DS.hasMany('bookmark', { async: true })
    });
  });
define("bookclipper/router", 
  ["ember","bookclipper/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var config = __dependency2__["default"];

    var Router = Ember.Router.extend({
      location: config.locationType
    });

    Router.map(function() {
      this.resource('bookmarks', { path: '/'}, function() {
        this.route('show', {path: ':bookmark_id'});
        this.route('new');
        this.route('update', {path: 'update/:bookmark_id'});
      });
      this.resource('hashtags', function() {
        this.route('show', {path: ':hashtag_id'});
      });
      this.resource('sessions', function() {
        this.route('current');
      });
      this.resource('users', function() {
        this.route('login');
        this.route('show', {path: ':user_id'});
        this.route('new');
        this.route('account');
      });
    });

    __exports__["default"] = Router;
  });
define("bookclipper/routes/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];


    __exports__["default"] = Ember.Route.extend({
      beforeModel: function() {
        return this.csrf.fetchToken();
      },
      model: function() {
        return this.store.find('session', 'current');
      },
    });
  });
define("bookclipper/routes/bookmarks/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
      model: function() {
        return this.store.find('bookmark');
      },

    // beforeModel: function() {
    //   Ember.$.ajax({
    //   url : '/sessions/current',
    //   type: 'GET',
    //   dataType : "json",
    //   success:function(data) {
    //     console.log(data);
    //   },
    //   error: function() { alert('something bad happened'); }
    //   });
    // }

    });
  });
define("bookclipper/routes/hashtags/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
      model: function() {
        return this.store.find('hashtag');
      }
    });
  });
define("bookclipper/routes/sessions/current", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
      beforeModel: function() {
      this.get('store').find('session', 'current');
      }
    });
  });
define("bookclipper/routes/users/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];

    __exports__["default"] = Ember.Route.extend({
      model: function() {
        return this.store.find('user');
      }
    });
  });
define("bookclipper/serializers/bookmark", 
  ["ember-data","ember","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var DS = __dependency1__["default"];
    var Ember = __dependency2__["default"];
    __exports__["default"] = DS.RESTSerializer.extend( {
      serializeIntoHash: function(hash, type, record, options) {
      Ember.merge(hash, this.serialize(record, options));
      }
    });
  });
define("bookclipper/templates/application", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("<span class='logo-clip'>");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-bookmark", options) : helperMissing.call(depth0, "fa-icon", "fa-bookmark", options))));
      data.buffer.push("</span>Bookclipper");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-bookmark-o", options) : helperMissing.call(depth0, "fa-icon", "fa-bookmark-o", options))));
      data.buffer.push(" All Bookmarks");
      return buffer;
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n            <li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "users.show", "bookmarks", options) : helperMissing.call(depth0, "link-to", "users.show", "bookmarks", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n          ");
      return buffer;
      }
    function program6(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-bookmark", options) : helperMissing.call(depth0, "fa-icon", "fa-bookmark", options))));
      data.buffer.push(" My Bookclips");
      return buffer;
      }

    function program8(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-tags", options) : helperMissing.call(depth0, "fa-icon", "fa-tags", options))));
      data.buffer.push(" Hashtags");
      return buffer;
      }

    function program10(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-users", options) : helperMissing.call(depth0, "fa-icon", "fa-users", options))));
      data.buffer.push(" Users");
      return buffer;
      }

    function program12(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    <p class='user-name'>");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-sign-in", options) : helperMissing.call(depth0, "fa-icon", "fa-sign-in", options))));
      data.buffer.push(" signed in as ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users.account", options) : helperMissing.call(depth0, "link-to", "users.account", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n    ");
      return buffer;
      }
    function program13(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push(" ");
      stack1 = helpers._triageMustache.call(depth0, "user_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" ");
      return buffer;
      }

    function program15(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n    <p class='user-login'>\n      ");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-sign-in", options) : helperMissing.call(depth0, "fa-icon", "fa-sign-in", options))));
      data.buffer.push("\n      ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Sign Up", "users.new", options) : helperMissing.call(depth0, "link-to", "Sign Up", "users.new", options))));
      data.buffer.push(" or\n      ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Log In", "users.login", options) : helperMissing.call(depth0, "link-to", "Log In", "users.login", options))));
      data.buffer.push("\n    </p>\n    ");
      return buffer;
      }

    function program17(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n<div class=\"nav-mobile\">\n  <ul ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMenu", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n    <li>");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-bookmark-o", options) : helperMissing.call(depth0, "fa-icon", "fa-bookmark-o", options))));
      data.buffer.push(" ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "All Bookclips", "bookmarks", options) : helperMissing.call(depth0, "link-to", "All Bookclips", "bookmarks", options))));
      data.buffer.push("</li>\n\n    ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(18, program18, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n    <li>");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-tags", options) : helperMissing.call(depth0, "fa-icon", "fa-tags", options))));
      data.buffer.push(" ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Hashtags", "hashtags", options) : helperMissing.call(depth0, "link-to", "Hashtags", "hashtags", options))));
      data.buffer.push("</li>\n    <li>");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-users", options) : helperMissing.call(depth0, "fa-icon", "fa-users", options))));
      data.buffer.push(" ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Users", "users", options) : helperMissing.call(depth0, "link-to", "Users", "users", options))));
      data.buffer.push("</li>\n  </ul>\n</div>\n");
      return buffer;
      }
    function program18(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n    <li>");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-bookmark", options) : helperMissing.call(depth0, "fa-icon", "fa-bookmark", options))));
      data.buffer.push(" ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["STRING","STRING","STRING"],data:data},helper ? helper.call(depth0, "My Bookclips", "users.show", "bookmarks", options) : helperMissing.call(depth0, "link-to", "My Bookclips", "users.show", "bookmarks", options))));
      data.buffer.push("</li>\n    ");
      return buffer;
      }

      data.buffer.push("<div class=\"fixed\">\n  <div class=\"contain-to-grid\">\n    <nav class=\"top-bar\" data-topbar role=\"navigation\">\n      <ul class=\"title-area\">\n        <li class=\"name\">\n          <h1>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bookmarks", options) : helperMissing.call(depth0, "link-to", "bookmarks", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h1>\n        </li>\n        <li class=\"toggle-topbar menu-icon\"><a href=\"#\" ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "toggleMenu", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push("><span>Menu</span></a></li>\n      </ul>\n\n      <section class=\"top-bar-section\">\n        <ul class=\"right\">\n          <li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bookmarks", options) : helperMissing.call(depth0, "link-to", "bookmarks", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n\n          ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n          <li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(8, program8, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "hashtags", options) : helperMissing.call(depth0, "link-to", "hashtags", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n          <li>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "users", options) : helperMissing.call(depth0, "link-to", "users", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</li>\n        </ul>\n      </section>\n    </nav>\n  </div>\n</div>\n\n<div class='user-bar'>\n  <div class='row'>\n    ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(15, program15, data),fn:self.program(12, program12, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n</div>\n\n");
      stack1 = helpers['if'].call(depth0, "menuVisible", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(17, program17, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n<div class='application'>\n  ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/bookmarks", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("tiny round button alert")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bookmarks.new", options) : helperMissing.call(depth0, "link-to", "bookmarks.new", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  ");
      return buffer;
      }
    function program2(depth0,data) {
      
      
      data.buffer.push("Create New");
      }

      data.buffer.push("<div class=\"row\">\n  <div class=\"columns\">\n  ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n</div>\n\n<div class='row'>\n  ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>\n\n<hr>\n<div class=\"row\">\n  <small>\n    Website thumbnails by <a href=\"http://www.bitpixels.com/\">BitPixels</a>\n  </small>\n</div>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/bookmarks/-form", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


      data.buffer.push("<form ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{
        'on': ("submit")
      },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n  <label>URL:\n    ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("url"),
        'placeholder': ("A valid URL")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n  </label>\n  <label>Tags:\n    ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("tags"),
        'placeholder': ("Seperated by comma or space")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n  </label>\n  <br>\n  <input type=\"submit\" value=\"save\" class=\"button tiny\" />\n</form>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/bookmarks/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n<div class=\"row\">\n  <div class='columns medium-3'>\n    ");
      stack1 = helpers.each.call(depth0, "hashtags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <br>\n    ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "bookmarks.show", "", options) : helperMissing.call(depth0, "link-to", "bookmarks.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <h6 class=\"inline-bold visit\"><a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("url")
      },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">Visit link</a></h6>\n    ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <br>\n    <small>Clipped by</small>\n    ");
      stack1 = helpers.each.call(depth0, "users", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n  <br>\n  <div class=\"columns medium-8\">\n    <h5>");
      stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h5>\n    <p>");
      stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n    <p class='small'>");
      stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n  </div>\n</div>\n<br>\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <small>\n        ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "hashtags.show", "", options) : helperMissing.call(depth0, "link-to", "hashtags.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        &nbsp;\n      </small>\n    ");
      return buffer;
      }
    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("#");
      stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      }

    function program5(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n    <img ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("bookmark_img")
      },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" alt='' class='bookmark-img'>\n    ");
      return buffer;
      }

    function program7(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n      ");
      stack1 = helpers['if'].call(depth0, "editable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program8(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        <a href='' ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"action\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-chain-broken", options) : helperMissing.call(depth0, "fa-icon", "fa-chain-broken", options))));
      data.buffer.push(" Unclip</a>\n        &nbsp;");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("action")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "bookmarks.update", "", options) : helperMissing.call(depth0, "link-to", "bookmarks.update", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      ");
      return buffer;
      }
    function program9(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-pencil-square-o", options) : helperMissing.call(depth0, "fa-icon", "fa-pencil-square-o", options))));
      data.buffer.push(" Edit");
      return buffer;
      }

    function program11(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n        <a href='' ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "clipIt", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"action\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-bookmark-o", options) : helperMissing.call(depth0, "fa-icon", "fa-bookmark-o", options))));
      data.buffer.push(" Clip it!</a>\n      ");
      return buffer;
      }

    function program13(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <small class='small grey'>\n        ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "users.show", "", options) : helperMissing.call(depth0, "link-to", "users.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </small>\n    ");
      return buffer;
      }
    function program14(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("&nbsp;");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("&nbsp;");
      return buffer;
      }

      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/bookmarks/new", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n      ");
      data.buffer.push(escapeExpression((helper = helpers.partial || (depth0 && depth0.partial),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bookmarks/form", options) : helperMissing.call(depth0, "partial", "bookmarks/form", options))));
      data.buffer.push("\n    ");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n      <p>You're currently no logged in</p>\n      ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Sign Up", "users.new", options) : helperMissing.call(depth0, "link-to", "Sign Up", "users.new", options))));
      data.buffer.push(" or\n      ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "Log In", "users.login", options) : helperMissing.call(depth0, "link-to", "Log In", "users.login", options))));
      data.buffer.push("\n    ");
      return buffer;
      }

      data.buffer.push("<h3>New Bookclip</h3>\n<div class=\"row\">\n  <div class=\"columns medium-7\">\n    ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n  <div class=\"columns medium-5\">\n    <div class=\"panel\">\n      <h3>Try the bookmarklet!</h3>\n      <p>Drag the 'Clip it!' button to your browser's bookmark bar. Click it whenever you find yourself on a site you want to save to your bookmarks.</p>\n      <a href=\"javascript:(function(){\n    location.href='http://bookclipper.herokuapp.com/new?url='+encodeURIComponent(location.href)\n  })();\" class=\"button round alert\">Clip it!</a><small class=\"small\">  ");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{
        'size': ("lg")
      },hashTypes:{'size': "STRING"},hashContexts:{'size': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-long-arrow-left", options) : helperMissing.call(depth0, "fa-icon", "fa-long-arrow-left", options))));
      data.buffer.push(" Drag to bookmarks bar</small>\n  </div>\n  </div>\n</div>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/bookmarks/show", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    <small>");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "hashtags.show", "", options) : helperMissing.call(depth0, "link-to", "hashtags.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n          &nbsp;</small>\n  ");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("#");
      stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      }

    function program4(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    ");
      stack1 = helpers['if'].call(depth0, "editable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(8, program8, data),fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  ");
      return buffer;
      }
    function program5(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <a href='' ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"action\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-chain-broken", options) : helperMissing.call(depth0, "fa-icon", "fa-chain-broken", options))));
      data.buffer.push(" Unclip</a>\n      &nbsp;");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("action")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(6, program6, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "bookmarks.update", "", options) : helperMissing.call(depth0, "link-to", "bookmarks.update", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program6(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-pencil-square-o", options) : helperMissing.call(depth0, "fa-icon", "fa-pencil-square-o", options))));
      data.buffer.push(" Edit");
      return buffer;
      }

    function program8(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n      <a href='' ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "clipIt", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"action\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-bookmark-o", options) : helperMissing.call(depth0, "fa-icon", "fa-bookmark-o", options))));
      data.buffer.push(" Clip it!</a>\n    ");
      return buffer;
      }

    function program10(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    <small class='small grey'>\n      ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "users.show", "", options) : helperMissing.call(depth0, "link-to", "users.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    </small>\n  ");
      return buffer;
      }
    function program11(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("&nbsp;");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      }

      data.buffer.push("<div class=\"columns medium-3\">\n  ");
      stack1 = helpers.each.call(depth0, "hashtags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  <br>\n  <img ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("bookmark_img")
      },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" alt='' class='bookmark-img'>\n  <h6 class=\"inline-bold\"><a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("url")
      },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">Visit link</a></h6>\n  ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(4, program4, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  <br>\n  <small>Clipped by:</small>\n  ");
      stack1 = helpers.each.call(depth0, "users", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(10, program10, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>\n<div class=\"columns medium-8\">\n  <br>\n  <h5>");
      stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h5>\n  <p>");
      stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n  <p class='small'>");
      stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n</div>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/bookmarks/update", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


      data.buffer.push("<form ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "update", {hash:{
        'on': ("submit")
      },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n  <label>Title:\n    ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("title"),
        'placeholder': ("Title")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n  </label>\n  <label>Description:\n    ");
      data.buffer.push(escapeExpression((helper = helpers.textarea || (depth0 && depth0.textarea),options={hash:{
        'value': ("description"),
        'cols': ("80"),
        'rows': ("4"),
        'placeholder': ("Description")
      },hashTypes:{'value': "ID",'cols': "STRING",'rows': "STRING",'placeholder': "STRING"},hashContexts:{'value': depth0,'cols': depth0,'rows': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "textarea", options))));
      data.buffer.push("\n  </label>\n  <label>Tags:\n    ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("tags"),
        'placeholder': ("seperated by comma or space")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n  </label>\n  <br>\n  <input type=\"submit\" value=\"update\" class=\"button tiny\" />\n</form>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-accordion-panel", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression;


      data.buffer.push("<a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("href")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</a>\n<div ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'id': ("panelId")
      },hashTypes:{'id': "ID"},hashContexts:{'id': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" class=\"content\">\n  ");
      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-accordion", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-alert", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n<a href=\"#\" class=\"close\">&times;</a>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-arrival", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression;


      data.buffer.push("<a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("href")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</a>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-breadcrumbs", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n  <li ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("crumb.isCurrent:current:")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n    ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data},helper ? helper.call(depth0, "crumb.path", options) : helperMissing.call(depth0, "link-to", "crumb.path", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </li>\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n      ");
      stack1 = helpers._triageMustache.call(depth0, "crumb.name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }

      stack1 = helpers.each.call(depth0, "crumb", "in", "breadCrumbs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-button", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n  <span ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'data-dropdown': ("dropdown")
      },hashTypes:{'data-dropdown': "ID"},hashContexts:{'data-dropdown': depth0},contexts:[],types:[],data:data})));
      data.buffer.push("></span>\n");
      return buffer;
      }

      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n");
      stack1 = helpers['if'].call(depth0, "isSplit", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-clearing-image", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push("<a class=\"th\" ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("url")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n  <img ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'alt': ("alt"),
        'data-caption': ("caption"),
        'src': ("thumbnail")
      },hashTypes:{'alt': "ID",'data-caption': "ID",'src': "ID"},hashContexts:{'alt': depth0,'data-caption': depth0,'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n</a>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-clearing", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-dropdown", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-joyride", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-magellan", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      data.buffer.push("<dl class=\"sub-nav\">\n  ");
      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</dl>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-orbit", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <li>\n    <img ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'alt': ("slide.imageAlt"),
        'src': ("slide.imageUrl")
      },hashTypes:{'alt': "ID",'src': "ID"},hashContexts:{'alt': depth0,'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n    <div class=\"orbit-caption\">");
      stack1 = helpers._triageMustache.call(depth0, "slide.caption", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</div>\n  </li>\n");
      return buffer;
      }

      stack1 = helpers.each.call(depth0, "slide", "in", "slides", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-pagination", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <li ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'class': ("page.current:current")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n    <a ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "changePage", "page.number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "page.number", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</a>\n  </li>\n");
      return buffer;
      }

      data.buffer.push("<li ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'aria-disabled': ("onFirstPage"),
        'class': ("arrow onFirstPage:unavailable")
      },hashTypes:{'aria-disabled': "ID",'class': "STRING"},hashContexts:{'aria-disabled': depth0,'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n  <a ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "previousPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">&laquo;</a>\n</li>\n\n");
      stack1 = helpers.each.call(depth0, "page", "in", "pages", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n<li ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'aria-disabled': ("onLastPage"),
        'class': ("arrow onLastPage:unavailable")
      },hashTypes:{'aria-disabled': "ID",'class': "STRING"},hashContexts:{'aria-disabled': depth0,'class': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">\n  <a ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "nextPage", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">&raquo;</a>\n</li>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-progress-bar", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', escapeExpression=this.escapeExpression;


      data.buffer.push("<span ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'style': ("meterStyle")
      },hashTypes:{'style': "ID"},hashContexts:{'style': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" class=\"meter\"></span>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-reveal-modal", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n<a class=\"close-reveal-modal\">&#215;</a>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-slider", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      


      data.buffer.push("<span class=\"range-slider-handle\"></span>\n<span class=\"range-slider-active-segment\"></span>\n<input type=\"hidden\">\n");
      
    });
  });
define("bookclipper/templates/components/f-stop", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-switch", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'checked': ("checked"),
        'id': ("inputId"),
        'name': ("name"),
        'type': ("type")
      },hashTypes:{'checked': "ID",'id': "ID",'name': "ID",'type': "ID"},hashContexts:{'checked': depth0,'id': depth0,'name': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n<label ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'for': ("inputId")
      },hashTypes:{'for': "ID"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</label>\n\n<span></span>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-switches", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <input ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'disabled': ("option.disabled"),
        'id': ("option.id"),
        'name': ("view.name"),
        'readonly': ("option.readonly"),
        'type': ("view.type"),
        'value': ("option.value")
      },hashTypes:{'disabled': "ID",'id': "ID",'name': "ID",'readonly': "ID",'type': "ID",'value': "ID"},hashContexts:{'disabled': depth0,'id': depth0,'name': depth0,'readonly': depth0,'type': depth0,'value': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" />\n  <label ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'for': ("option.id")
      },hashTypes:{'for': "ID"},hashContexts:{'for': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "option.label", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</label>\n");
      return buffer;
      }

      stack1 = helpers.each.call(depth0, "option", "in", "options", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n<span></span>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-tab-pane", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-tab-panel", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n    <dd><a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("tab.href")
      },hashTypes:{'href': "ID"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">");
      stack1 = helpers._triageMustache.call(depth0, "tab.title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</a></dd>\n  ");
      return buffer;
      }

      data.buffer.push("<dl class=\"tabs\" data-tab>\n  ");
      stack1 = helpers.each.call(depth0, "tab", "in", "tabs", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0,depth0,depth0],types:["ID","ID","ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</dl>\n\n<div class=\"tabs-content\">\n  ");
      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/components/f-tooltip", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      stack1 = helpers._triageMustache.call(depth0, "yield", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/hashtags", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      data.buffer.push("<div class='row'>\n  ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>");
      return buffer;
      
    });
  });
define("bookclipper/templates/hashtags/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n    <p>\n      ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0,depth0],types:["ID","STRING","ID"],data:data},helper ? helper.call(depth0, "topic", "hashtags.show", "", options) : helperMissing.call(depth0, "link-to", "topic", "hashtags.show", "", options))));
      data.buffer.push("\n      <small>");
      stack1 = helpers._triageMustache.call(depth0, "bookmarks.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" bookmarks</small>\n    </p>\n  ");
      return buffer;
      }

      data.buffer.push("  ");
      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/hashtags/show", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n<div class=\"row\">\n  <div class='columns medium-3'>\n    ");
      stack1 = helpers.each.call(depth0, "hashtags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <br>\n    <img ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("bookmark_img")
      },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" alt='' class='bookmark-img'>\n    <h6 class=\"inline-bold\"><a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("url")
      },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">Visit link</a></h6>\n    ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <br>\n    <small>Clipped by</small>\n    ");
      stack1 = helpers.each.call(depth0, "users", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(11, program11, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n  <br>\n  <div class=\"columns medium-8\">\n    <h5>");
      stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h5>\n    <p>");
      stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n    <p class='small'>");
      stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n  </div>\n</div>\n<br><br>\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <small>\n        ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "hashtags.show", "", options) : helperMissing.call(depth0, "link-to", "hashtags.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        &nbsp;\n      </small>\n    ");
      return buffer;
      }
    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("#");
      stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      }

    function program5(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n      ");
      stack1 = helpers['if'].call(depth0, "editable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(9, program9, data),fn:self.program(6, program6, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program6(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        <a href='' ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"action\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-chain-broken", options) : helperMissing.call(depth0, "fa-icon", "fa-chain-broken", options))));
      data.buffer.push(" Unclip</a>\n        &nbsp;");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("action")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "bookmarks.update", "", options) : helperMissing.call(depth0, "link-to", "bookmarks.update", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      ");
      return buffer;
      }
    function program7(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-pencil-square-o", options) : helperMissing.call(depth0, "fa-icon", "fa-pencil-square-o", options))));
      data.buffer.push(" Edit");
      return buffer;
      }

    function program9(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n        <a href='' ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "clipIt", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"action\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-bookmark-o", options) : helperMissing.call(depth0, "fa-icon", "fa-bookmark-o", options))));
      data.buffer.push(" Clip it!</a>\n      ");
      return buffer;
      }

    function program11(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <small class='small grey'>\n        ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(12, program12, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "users.show", "", options) : helperMissing.call(depth0, "link-to", "users.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </small>\n    ");
      return buffer;
      }
    function program12(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("&nbsp;");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("&nbsp;");
      return buffer;
      }

      data.buffer.push("<p>");
      stack1 = helpers._triageMustache.call(depth0, "bookmarks.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" bookmarks clipped under #");
      stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n");
      stack1 = helpers.each.call(depth0, "bookmarks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n\n\n\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      data.buffer.push("<div class='row panel'>\n  <h3>LOREM IPSUM</h3>\n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit consequuntur debitis odit saepe quae dolorum sint accusamus, eligendi magni praesentium tenetur ipsum placeat mollitia dolore vitae, quasi ratione, reprehenderit dignissimos.</p>\n</div>\n");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n");
      return buffer;
      
    });
  });
define("bookclipper/templates/sessions/current", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this;

    function program1(depth0,data) {
      
      
      data.buffer.push("\n  <p>Yes you are.</p>\n");
      }

    function program3(depth0,data) {
      
      
      data.buffer.push("\n  <p>No, you are not signed in.</p>\n");
      }

      data.buffer.push("<h2>Currently signed in?</h2>\n");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      
    });
  });
define("bookclipper/templates/users", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1;


      data.buffer.push("<div class='row'>\n  ");
      stack1 = helpers._triageMustache.call(depth0, "outlet", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n</div>");
      return buffer;
      
    });
  });
define("bookclipper/templates/users/account", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

    function program1(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n  <h2>Account details:</h2>\n  <p>");
      stack1 = helpers._triageMustache.call(depth0, "user_name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n  <p>");
      stack1 = helpers._triageMustache.call(depth0, "user_email", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n  <button ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "signout", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(" class='button tiny round alert'>Log out</button>\n");
      return buffer;
      }

    function program3(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n  <p>You've been logged out. But hey, feel free to keep ");
      data.buffer.push(escapeExpression((helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","STRING"],data:data},helper ? helper.call(depth0, "browsing", "bookmarks", options) : helperMissing.call(depth0, "link-to", "browsing", "bookmarks", options))));
      data.buffer.push(".</p>\n");
      return buffer;
      }

      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("bookclipper/templates/users/index", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var stack1, self=this, helperMissing=helpers.helperMissing;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n  <p>\n  ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "users.show", "", options) : helperMissing.call(depth0, "link-to", "users.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  <small>");
      stack1 = helpers._triageMustache.call(depth0, "bookmarks.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" bookclips</small>\n  </p>\n\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var stack1;
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      }

      stack1 = helpers.each.call(depth0, {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[],types:[],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      else { data.buffer.push(''); }
      
    });
  });
define("bookclipper/templates/users/login", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <p>You're logged in now. Create a new Bookclip:</p>\n      ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("tiny round button alert")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "bookmarks.new", options) : helperMissing.call(depth0, "link-to", "bookmarks.new", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program2(depth0,data) {
      
      
      data.buffer.push("Create New");
      }

    function program4(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n      <h3>Log in</h3>\n      <form ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "logIn", {hash:{
        'on': ("submit")
      },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n        <label>Log in</label>\n        ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("email"),
        'placeholder': ("Enter Login")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        <label>Password</label>\n        ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("password"),
        'placeholder': ("Enter Password"),
        'type': ("password")
      },hashTypes:{'value': "ID",'placeholder': "STRING",'type': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n        <button type=\"submit\" class=\"tiny round button alert\">Login</button>\n      </form>\n      <a href=\"http://bookclipper.herokuapp.com/api/users/auth/twitter\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{
        'size': ("lg")
      },hashTypes:{'size': "STRING"},hashContexts:{'size': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-twitter", options) : helperMissing.call(depth0, "fa-icon", "fa-twitter", options))));
      data.buffer.push(" <small>Log in with Twitter</small></a>\n    ");
      return buffer;
      }

      data.buffer.push("<div class=\"row\">\n  <div class=\"columns medium-5\">\n    ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(4, program4, data),fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n</div>");
      return buffer;
      
    });
  });
define("bookclipper/templates/users/new", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', helper, options, escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


      data.buffer.push("<div class=\"columns medium-6\">\n  <h3>Sign up</h3>\n  <form ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "save", {hash:{
        'on': ("submit")
      },hashTypes:{'on': "STRING"},hashContexts:{'on': depth0},contexts:[depth0],types:["STRING"],data:data})));
      data.buffer.push(">\n    <label>Email\n      ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("email"),
        'placeholder': ("A valid email")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n    </label>\n    <label>Name\n      ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("name"),
        'placeholder': ("Your name")
      },hashTypes:{'value': "ID",'placeholder': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n    </label>\n    <label>Password\n      ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("password"),
        'placeholder': ("Enter Password"),
        'type': ("password")
      },hashTypes:{'value': "ID",'placeholder': "STRING",'type': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n    </label>\n    <label>Confirm password\n      ");
      data.buffer.push(escapeExpression((helper = helpers.input || (depth0 && depth0.input),options={hash:{
        'value': ("password_confirmation"),
        'placeholder': ("Confirm Password"),
        'type': ("password")
      },hashTypes:{'value': "ID",'placeholder': "STRING",'type': "STRING"},hashContexts:{'value': depth0,'placeholder': depth0,'type': depth0},contexts:[],types:[],data:data},helper ? helper.call(depth0, options) : helperMissing.call(depth0, "input", options))));
      data.buffer.push("\n    </label>\n    <input type=\"submit\" value=\"save\" class=\"button tiny round alert\" />\n  </form>\n  <a href=\"http://bookclipper.herokuapp.com/api/users/auth/twitter\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{
        'size': ("lg")
      },hashTypes:{'size': "STRING"},hashContexts:{'size': depth0},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-twitter", options) : helperMissing.call(depth0, "fa-icon", "fa-twitter", options))));
      data.buffer.push(" <small>Log in with Twitter</small></a>\n</div>");
      return buffer;
      
    });
  });
define("bookclipper/templates/users/show", 
  ["ember","exports"],
  function(__dependency1__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    __exports__["default"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
    this.compilerInfo = [4,'>= 1.0.0'];
    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
      var buffer = '', stack1, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

    function program1(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n<div class=\"row\">\n  <div class='columns medium-3'>\n    ");
      stack1 = helpers.each.call(depth0, "hashtags", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(2, program2, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <br>\n    ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "bookmarks.show", "", options) : helperMissing.call(depth0, "link-to", "bookmarks.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <h6 class=\"inline-bold\"><a ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'href': ("url")
      },hashTypes:{'href': "STRING"},hashContexts:{'href': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(">Visit link</a></h6>\n    ");
      stack1 = helpers['if'].call(depth0, "authenticated", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <br>\n    <small>Clipped by</small>\n    ");
      stack1 = helpers.each.call(depth0, "users", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(13, program13, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n  </div>\n  <br>\n  <div class=\"columns medium-8\">\n    <h5>");
      stack1 = helpers._triageMustache.call(depth0, "title", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</h5>\n    <p>");
      stack1 = helpers._triageMustache.call(depth0, "description", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n    <p class='small'>");
      stack1 = helpers._triageMustache.call(depth0, "url", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("</p>\n  </div>\n</div>\n<br>\n");
      return buffer;
      }
    function program2(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <small>\n        ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "hashtags.show", "", options) : helperMissing.call(depth0, "link-to", "hashtags.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n        &nbsp;\n      </small>\n    ");
      return buffer;
      }
    function program3(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("#");
      stack1 = helpers._triageMustache.call(depth0, "topic", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      }

    function program5(depth0,data) {
      
      var buffer = '';
      data.buffer.push("\n    <img ");
      data.buffer.push(escapeExpression(helpers['bind-attr'].call(depth0, {hash:{
        'src': ("bookmark_img")
      },hashTypes:{'src': "STRING"},hashContexts:{'src': depth0},contexts:[],types:[],data:data})));
      data.buffer.push(" alt='' class='bookmark-img'>\n    ");
      return buffer;
      }

    function program7(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("\n      ");
      stack1 = helpers['if'].call(depth0, "editable", {hash:{},hashTypes:{},hashContexts:{},inverse:self.program(11, program11, data),fn:self.program(8, program8, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    ");
      return buffer;
      }
    function program8(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n        <a href='' ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "remove", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"action\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-chain-broken", options) : helperMissing.call(depth0, "fa-icon", "fa-chain-broken", options))));
      data.buffer.push(" Unclip</a>\n        &nbsp;");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{
        'class': ("action")
      },hashTypes:{'class': "STRING"},hashContexts:{'class': depth0},inverse:self.noop,fn:self.program(9, program9, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "bookmarks.update", "", options) : helperMissing.call(depth0, "link-to", "bookmarks.update", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      ");
      return buffer;
      }
    function program9(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-pencil-square-o", options) : helperMissing.call(depth0, "fa-icon", "fa-pencil-square-o", options))));
      data.buffer.push(" Edit");
      return buffer;
      }

    function program11(depth0,data) {
      
      var buffer = '', helper, options;
      data.buffer.push("\n        <a href='' ");
      data.buffer.push(escapeExpression(helpers.action.call(depth0, "clipIt", "id", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0,depth0],types:["STRING","ID"],data:data})));
      data.buffer.push(" class=\"action\">");
      data.buffer.push(escapeExpression((helper = helpers['fa-icon'] || (depth0 && depth0['fa-icon']),options={hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["STRING"],data:data},helper ? helper.call(depth0, "fa-bookmark-o", options) : helperMissing.call(depth0, "fa-icon", "fa-bookmark-o", options))));
      data.buffer.push(" Clip it!</a>\n      ");
      return buffer;
      }

    function program13(depth0,data) {
      
      var buffer = '', stack1, helper, options;
      data.buffer.push("\n      <small class='small grey'>\n        ");
      stack1 = (helper = helpers['link-to'] || (depth0 && depth0['link-to']),options={hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(14, program14, data),contexts:[depth0,depth0],types:["STRING","ID"],data:data},helper ? helper.call(depth0, "users.show", "", options) : helperMissing.call(depth0, "link-to", "users.show", "", options));
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n      </small>\n    ");
      return buffer;
      }
    function program14(depth0,data) {
      
      var buffer = '', stack1;
      data.buffer.push("&nbsp;");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("&nbsp;");
      return buffer;
      }

      data.buffer.push("  <h5>\n    ");
      stack1 = helpers._triageMustache.call(depth0, "name", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push("\n    <small>\n      ");
      stack1 = helpers._triageMustache.call(depth0, "bookmarks.length", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      data.buffer.push(" bookmarks\n    </small>\n  </h5>\n");
      stack1 = helpers.each.call(depth0, "bookmarks", {hash:{},hashTypes:{},hashContexts:{},inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["ID"],data:data});
      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }
      return buffer;
      
    });
  });
define("bookclipper/tests/adapters/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - adapters');
    test('adapters/application.js should pass jshint', function() { 
      ok(true, 'adapters/application.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('app.js should pass jshint', function() { 
      ok(true, 'app.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/helpers/resolver.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/helpers');
    test('bookclipper/tests/helpers/resolver.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/helpers/resolver.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/helpers/start-app.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/helpers');
    test('bookclipper/tests/helpers/start-app.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/helpers/start-app.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/integration/bookmarks-page-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/integration');
    test('bookclipper/tests/integration/bookmarks-page-test.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/integration/bookmarks-page-test.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/integration/hashtags-page-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/integration');
    test('bookclipper/tests/integration/hashtags-page-test.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/integration/hashtags-page-test.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/integration/landing-page-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/integration');
    test('bookclipper/tests/integration/landing-page-test.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/integration/landing-page-test.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/test-helper.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests');
    test('bookclipper/tests/test-helper.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/test-helper.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/unit/controllers/application-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/unit/controllers');
    test('bookclipper/tests/unit/controllers/application-test.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/unit/controllers/application-test.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/unit/controllers/bookmarks/new-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/unit/controllers/bookmarks');
    test('bookclipper/tests/unit/controllers/bookmarks/new-test.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/unit/controllers/bookmarks/new-test.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/unit/controllers/hashtags-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/unit/controllers');
    test('bookclipper/tests/unit/controllers/hashtags-test.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/unit/controllers/hashtags-test.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/unit/controllers/users-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/unit/controllers');
    test('bookclipper/tests/unit/controllers/users-test.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/unit/controllers/users-test.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/unit/models/user-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/unit/models');
    test('bookclipper/tests/unit/models/user-test.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/unit/models/user-test.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/bookclipper/tests/unit/serializers/bookmark-test.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - bookclipper/tests/unit/serializers');
    test('bookclipper/tests/unit/serializers/bookmark-test.js should pass jshint', function() { 
      ok(true, 'bookclipper/tests/unit/serializers/bookmark-test.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers');
    test('controllers/application.js should pass jshint', function() { 
      ok(true, 'controllers/application.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/bookmarks/index.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/bookmarks');
    test('controllers/bookmarks/index.js should pass jshint', function() { 
      ok(true, 'controllers/bookmarks/index.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/bookmarks/new.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/bookmarks');
    test('controllers/bookmarks/new.js should pass jshint', function() { 
      ok(true, 'controllers/bookmarks/new.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/bookmarks/show.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/bookmarks');
    test('controllers/bookmarks/show.js should pass jshint', function() { 
      ok(true, 'controllers/bookmarks/show.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/bookmarks/update.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/bookmarks');
    test('controllers/bookmarks/update.js should pass jshint', function() { 
      ok(true, 'controllers/bookmarks/update.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/hashtags/show.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/hashtags');
    test('controllers/hashtags/show.js should pass jshint', function() { 
      ok(true, 'controllers/hashtags/show.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/users/account.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/users');
    test('controllers/users/account.js should pass jshint', function() { 
      ok(true, 'controllers/users/account.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/users/login.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/users');
    test('controllers/users/login.js should pass jshint', function() { 
      ok(true, 'controllers/users/login.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/users/new.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/users');
    test('controllers/users/new.js should pass jshint', function() { 
      ok(true, 'controllers/users/new.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/controllers/users/show.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - controllers/users');
    test('controllers/users/show.js should pass jshint', function() { 
      ok(true, 'controllers/users/show.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/helpers/resolver", 
  ["ember/resolver","bookclipper/config/environment","exports"],
  function(__dependency1__, __dependency2__, __exports__) {
    "use strict";
    var Resolver = __dependency1__["default"];
    var config = __dependency2__["default"];

    var resolver = Resolver.create();

    resolver.namespace = {
      modulePrefix: config.modulePrefix,
      podModulePrefix: config.podModulePrefix
    };

    __exports__["default"] = resolver;
  });
define("bookclipper/tests/helpers/start-app", 
  ["ember","bookclipper/app","bookclipper/router","bookclipper/config/environment","exports"],
  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var Application = __dependency2__["default"];
    var Router = __dependency3__["default"];
    var config = __dependency4__["default"];

    __exports__["default"] = function startApp(attrs) {
      var App;

      var attributes = Ember.merge({}, config.APP);
      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

      Ember.run(function() {
        App = Application.create(attributes);
        App.setupForTesting();
        App.injectTestHelpers();
      });

      return App;
    }
  });
define("bookclipper/tests/integration/bookmarks-page-test", 
  ["ember","bookclipper/tests/helpers/start-app"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var startApp = __dependency2__["default"];

    var App, server;

    module('integration - Bookmarks page', {
      setup: function() {
        App = startApp();
        var bookmarks = [
          {
            id: 1,
            url: 'http://www.ember.js',
            hashtag_topic: "Javascript"
          },
          {
            id: 2,
            url: 'http://www.benjidalton.com',
            hashtag_topic: "developers"
          },
          {
            id: 3,
            url: 'http://angular.js',
            hashtag_topic: "TheDarkSide"
          }
        ];

        server = new Pretender(function() {
          this.get('/bookmarks', function(request) {
            return [200, {"Content-Type": "application/json"}, JSON.stringify({bookmarks: bookmarks})];
          });

          this.get('/bookmarks/:id', function(request) {
            var bookmark = bookmarks.find(function(bookmark) {
              if (bookmark.id === parseInt(request.params.id, 10)) {
                return bookmark;
              }
            });

            return [200, {"Content-Type": "application/json"}, JSON.stringify({bookmark: bookmark})];
          });
        });

      },
      teardown: function() {
        Ember.run(App, 'destroy');
        server.shutdown();
      }
    });

    test('Should be able to navigate to a create form for bookmarks', function() {
      visit('/bookmarks').then(function() {
        click("a:contains('Create New')").then(function() {
          equal(find('h3').text(), 'New Bookclip');
        });
      });
    });
  });
define("bookclipper/tests/integration/hashtags-page-test", 
  ["ember","bookclipper/tests/helpers/start-app"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var startApp = __dependency2__["default"];

    var App, server;

    module('integration - Hashtags page', {
      setup: function() {
        App = startApp();
        var hashtags = [
          {
            id: 1,
            topic: "Javascript",
            bookmark_count: 2
          },
          {
            id: 2,
            topic: "developers",
            bookmark_count: 11
          },
          {
            id: 3,
            topic: "TheDarkSide",
            bookmark_count: 5
          }
        ];

        server = new Pretender(function() {
          this.get('/hashtags', function(request) {
            return [200, {"Content-Type": "application/json"}, JSON.stringify({hashtags: hashtags})];
          });

          this.get('/hashtags/:id', function(request) {
            var hashtag = hashtags.find(function(hashtag) {
              if (hashtag.id === parseInt(request.params.id, 10)) {
                return hashtag;
              }
            });

            return [200, {"Content-Type": "application/json"}, JSON.stringify({hashtag: hashtag})];
          });
        });

      },
      teardown: function() {
        Ember.run(App, 'destroy');
        server.shutdown();
      }
    });

    test('Should be able to navigate to a Hashtag page', function() {
      visit('/hashtags').then(function() {
        click("a:contains('Javascript')").then(function() {
          equal(find('h3').text(), "Javascript");
        });
      });
    });
  });
define("bookclipper/tests/integration/landing-page-test", 
  ["ember","bookclipper/tests/helpers/start-app"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var Ember = __dependency1__["default"];
    var startApp = __dependency2__["default"];

    var App;

    module('Integration - Landing Page', {
      setup: function() {
        App = startApp();
      },
      teardown: function() {
        Ember.run(App, 'destroy');
      }
    });

    test('Should welcome me to Bookclipper', function() {
      visit('/').then(function() {
        equal(find('h2#title').text(), 'Welcome to Bookclipper');
      });
    });
  });
define("bookclipper/tests/models/bookmark.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/bookmark.js should pass jshint', function() { 
      ok(true, 'models/bookmark.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/models/hashtag.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/hashtag.js should pass jshint', function() { 
      ok(true, 'models/hashtag.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/models/session.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/session.js should pass jshint', function() { 
      ok(true, 'models/session.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/models/user.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - models');
    test('models/user.js should pass jshint', function() { 
      ok(true, 'models/user.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/router.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - .');
    test('router.js should pass jshint', function() { 
      ok(true, 'router.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/routes/application.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes');
    test('routes/application.js should pass jshint', function() { 
      ok(true, 'routes/application.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/routes/bookmarks/index.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes/bookmarks');
    test('routes/bookmarks/index.js should pass jshint', function() { 
      ok(true, 'routes/bookmarks/index.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/routes/hashtags/index.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes/hashtags');
    test('routes/hashtags/index.js should pass jshint', function() { 
      ok(true, 'routes/hashtags/index.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/routes/sessions/current.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes/sessions');
    test('routes/sessions/current.js should pass jshint', function() { 
      ok(true, 'routes/sessions/current.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/routes/users/index.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - routes/users');
    test('routes/users/index.js should pass jshint', function() { 
      ok(true, 'routes/users/index.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/serializers/bookmark.jshint", 
  [],
  function() {
    "use strict";
    module('JSHint - serializers');
    test('serializers/bookmark.js should pass jshint', function() { 
      ok(true, 'serializers/bookmark.js should pass jshint.'); 
    });
  });
define("bookclipper/tests/test-helper", 
  ["bookclipper/tests/helpers/resolver","ember-qunit"],
  function(__dependency1__, __dependency2__) {
    "use strict";
    var resolver = __dependency1__["default"];
    var setResolver = __dependency2__.setResolver;

    setResolver(resolver);

    document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

    QUnit.config.urlConfig.push({ id: 'nocontainer', label: 'Hide container'});
    var containerVisibility = QUnit.urlParams.nocontainer ? 'hidden' : 'visible';
    document.getElementById('ember-testing-container').style.visibility = containerVisibility;
  });
define("bookclipper/tests/unit/controllers/application-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor('controller:application', 'ApplicationController', {
      // Specify the other units that are required for this test.
      // needs: ['controller:foo']
    });

    // Replace this with your real tests.
    test('it exists', function() {
      var controller = this.subject();
      ok(controller);
    });
  });
define("bookclipper/tests/unit/controllers/bookmarks/new-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor('controller:bookmarks/new', 'BookmarksNewController', {
      // Specify the other units that are required for this test.
      // needs: ['controller:foo']
    });

    // Replace this with your real tests.
    test('it exists', function() {
      var controller = this.subject();
      ok(controller);
    });
  });
define("bookclipper/tests/unit/controllers/hashtags-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor('controller:hashtags', 'HashtagsController', {
      // Specify the other units that are required for this test.
      // needs: ['controller:foo']
    });

    // Replace this with your real tests.
    test('it exists', function() {
      var controller = this.subject();
      ok(controller);
    });
  });
define("bookclipper/tests/unit/controllers/users-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor('controller:users', 'UsersController', {
      // Specify the other units that are required for this test.
      // needs: ['controller:foo']
    });

    // Replace this with your real tests.
    test('it exists', function() {
      var controller = this.subject();
      ok(controller);
    });
  });
define("bookclipper/tests/unit/models/user-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleForModel = __dependency1__.moduleForModel;
    var test = __dependency1__.test;

    moduleForModel('user', 'User', {
      // Specify the other units that are required for this test.
      needs: []
    });

    test('it exists', function() {
      var model = this.subject();
      // var store = this.store();
      ok(!!model);
    });
  });
define("bookclipper/tests/unit/serializers/bookmark-test", 
  ["ember-qunit"],
  function(__dependency1__) {
    "use strict";
    var moduleFor = __dependency1__.moduleFor;
    var test = __dependency1__.test;

    moduleFor('serializer:bookmark', 'BookmarkSerializer', {
      // Specify the other units that are required for this test.
      // needs: ['serializer:foo']
    });

    // Replace this with your real tests.
    test('it exists', function() {
      var serializer = this.subject();
      ok(serializer);
    });
  });
/* jshint ignore:start */

define('bookclipper/config/environment', ['ember'], function(Ember) {
  var prefix = 'bookclipper';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("bookclipper/tests/test-helper");
} else {
  require("bookclipper/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}

/* jshint ignore:end */
//# sourceMappingURL=bookclipper.map