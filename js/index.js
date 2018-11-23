
var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("No se puede llamar a la funciond e la clase");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("No se ha inicializado - super() no ha sido llamada");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Expresion super deberia ser null o una funcion, no " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass, enumerable: false, writable: true, configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}
var data = [{
  'name': 'Laboratorio #2',
  'img': 'https://i.imgur.com/eLk7bOS.png',
  'link': 'http://34.210.35.174/jo14343/random/l2/index.html',
  'techno': 'Pure HTML: Una historia contada unicamente con elementos de HTML.' },

{
  'name': 'Laboratorio #3',
  'img': 'https://i.imgur.com/mh4qJQ3.png',
  'link': 'https://codepen.io/josejo911/pen/vVNqgX',
  'techno': 'Pure CSS: Un dibujo realizado unicamente en CSS, "May the force be with you"' },

{
  'name': 'Laboratorio #4',
  'img': 'https://i.imgur.com/tP9H54q.png',
  'link': 'http://34.210.35.174/jo14343/l4/index.html',
  'techno': 'Practicar conceptos basicos de JavaScript al rededor de fetch. Tambien la modificacion del DOM.' },

{
  'name': 'Laboratorio #5',
  'img': 'https://i.imgur.com/6R5A6du.png',
  'link': 'https://github.com/josejo911/Lab5-NodeJs',
  'techno': 'Uso de nodejs para utilizar websockets y asi generar un chat consumiendo los datos del server.' },

{
  'name': 'Laboratorio #7',
  'img': 'https://i.imgur.com/0C3t330.png',
  'link': 'https://github.com/josejo911/Laberinto-Web',
  'techno': 'Generador de laberintos hecho en ReactJS' },

{
  'name': 'Laboratorio #8',
  'img': 'https://i.imgur.com/xMRiBJs.png',
  'link': 'https://github.com/josejo911/Lab8-Calculadora',
  'techno': 'HTML5 / CSS3 / JavaScript / React -- Calculadora Simple' },

{
  'name': 'Proyecto #1 ',
  'img': 'https://unsplash.it/500/400?image=998',
  'link': 'https://github.com/josejo911/P1-React-Boilerplate',
  'techno': 'Generacion de un BoilerPlate para React, utilizando todos los conocimientos de stack para JavaScript.' },

{
  'name': 'Proyecto #2 ',
  'img': 'https://unsplash.it/500/400?image=983',
  'link': 'https://github.com/josejo911/Proyecto2_Portafolio',
  'techno': 'Portafolio que muestra todos los laboratorios vistos en la clase de Sistemas y Tecnologias Web' }];var



Index = function (_React$Component) {_inherits(Index, _React$Component);function Index() {_classCallCheck(this, Index);return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));}_createClass(Index, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', null, React.createElement(Header, null), React.createElement(App, null), React.createElement(Footer, null)));


    } }]);return Index;}(React.Component);
    
    var App = function (_React$Component2) {_inherits(App, _React$Component2);
  function App() {_classCallCheck(this, App);var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));


    _this2.state = {
      works: [] };return _this2;

  }_createClass(App, [{ key: 'componentWillMount', value: function componentWillMount()

    {
      this.loadWork();
    } }, { key: 'loadWork', value: function loadWork()

    {var _this3 = this;
      var works = [];
      data.map(function (item) {return works.push(item);});
      this.setState({ works: works });
      setTimeout(function () {
        console.log(_this3.state);
      }, 2000);
    } }, { key: 'render', value: function render()

    {
      var cards = this.state.works.map(function (card, index) {return React.createElement('div', { className: 'card' }, React.createElement(Works, {
            cardName: card.name, cardImg: card.img,  cardTechno: card.techno, cardLink: card.link,  key: index }));});

      return (
        React.createElement('div', null,
          React.createElement('div', { className: 'cardHolder' },
            React.createElement('h3', { className: 'myWorks' }, 'Mis ', React.createElement('mark', { className: 'markRed' }, 'Trabajos')),
            cards),

          React.createElement('div', { className: 'skillHolder' },
            React.createElement('i', { 'class': 'icon-alpinelinux' }))));



    } }]);return App;}(React.Component);var


Header = function (_React$Component3) {_inherits(Header, _React$Component3);
  function Header() {_classCallCheck(this, Header);var _this4 = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));


    _this4.state = {
      text: "Hola, mi nombre es Javier. Este es mi portafolio para 1Sistemas y Tecnologias Web2.",
      print: '' };
      return _this4;

  }_createClass(Header, [{ key: 'componentWillMount', value: function componentWillMount()

    {
      this.writeText();
    } }, { key: 'writeText', value: function writeText()

    {var _this5 = this;
      var formatedText = this.state.text.split('');
      var print = '';

      var loop = setInterval(function () {
        if (formatedText.length >= 1) {
          if (formatedText[0] === '1') {
            print += '<mark>';
            formatedText.shift();
          } else if (formatedText[0] === '2') {
            print += '</mark>';
            formatedText.shift();
          } else {
            print += formatedText.shift();
            _this5.setState({ print: print });
          }
        } else {clearInterval(loop);}
      }, 90);
    } }, { key: 'render', value: function render()

    {
      return (
        React.createElement('div', null,
          React.createElement('div', { className: 'container-header' },
            React.createElement('div', { className: 'typing-text' },
              React.createElement('h2', { dangerouslySetInnerHTML: { __html: this.state.print } })),

            React.createElement('p', null, 'Bienvenido a mi Portafolio')),

          React.createElement('div', { className: 'about' },
            React.createElement('div', { className: 'photo' },
              React.createElement('img', { src: 'https://img15.hostingpics.net/pics/196206setup.jpg', alt: 'picture about me' })),

            React.createElement('div', { className: 'text' },
              React.createElement('h3', null, 'Un poco acerca de ', React.createElement('mark', null, 'mí.')), React.createElement('br', null), React.createElement('br', null),
              React.createElement('p', null, 'Parte de la razon de realizar el portafolio es para dar a conocer los temas vistos en clase como HTML, CSS, React, Babel, Redux, entre otros mas que solo se lograron ver superficialmente.'),
              React.createElement('p', null, 'La recompilacion generada en este portafolio es de todos los laboratorios y proyectos visto en la clase de Sistemas y Tecnologias Web impartida en la Universidad del Valle de Guatemala.'),
              React.createElement('br', null),
              React.createElement('p', null, 'Espero sea de su agrado el portafolio.'),
              React.createElement('br', null)))));




    } }]);return Header;}(React.Component);var


Footer = function (_React$Component4) {_inherits(Footer, _React$Component4);function Footer() {_classCallCheck(this, Footer);return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));}_createClass(Footer, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', { className: 'container-footer' },
          React.createElement('p', null, 'Gracias!'),
          React.createElement('p', null, 'EMAIL: jo14343@uvg.edu.gt')));


    } }]);return Footer;}(React.Component);var


Works = function (_React$Component5) {_inherits(Works, _React$Component5);function Works() {_classCallCheck(this, Works);return _possibleConstructorReturn(this, (Works.__proto__ || Object.getPrototypeOf(Works)).apply(this, arguments));}_createClass(Works, [{ key: 'render', value: function render()
    {
      return (
        React.createElement('div', null,
          React.createElement('a', { href: this.props.cardLink, target: '_blank' },
            React.createElement('img', { src: this.props.cardImg, alt: this.props.cardName }),
            React.createElement('div', { className: 'info' },
              React.createElement('h4', null, ' ', this.props.cardName, ' '),
              React.createElement('br', null),
              React.createElement('br', null),
              React.createElement('p', null, ' ', this.props.cardTechno, ' ')))));




    } }]);
    return Works;
  }(React.Component);


ReactDOM.render(
React.createElement(Index, null),
document.getElementById('root'));