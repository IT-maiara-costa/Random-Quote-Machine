const { useEffect, useState } = React;

const App = () => {
  const [author, setAuthor] = useState("");
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    let url =
    "https://api.quotable.io/random";

    fetch(url).
    then(res => res.json()).
    then(function (data) {
      let dados = data;
      setQuote(dados.content);
      setAuthor(dados.author);
    }).
    catch(function () {
      console.log("Erro ao se conectar a API");
    });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return /*#__PURE__*/(
    React.createElement("div", { className: "App" }, /*#__PURE__*/
    React.createElement("h1", null, " Random Quote Machine "), /*#__PURE__*/

    React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
    React.createElement("blockquote", null, /*#__PURE__*/
    React.createElement("i", { class: "fa fa-quote-left fa" }, " "), /*#__PURE__*/
    React.createElement("p", { id: "text" }, quote, " "), /*#__PURE__*/
    React.createElement("i", { class: "fa fa-quote-right fa" }), /*#__PURE__*/

    React.createElement("cite", { id: "author" }, " - ", author)), /*#__PURE__*/


    React.createElement("div", { className: "btns" }, /*#__PURE__*/
    React.createElement("button", { id: "new-quote", onClick: getQuote }, /*#__PURE__*/
    React.createElement("i", { class: "fas fa-random" }, " ")), /*#__PURE__*/

    React.createElement("a", {
      href: `https://twitter.com/intent/tweet?text= + ${quote}`,
      target: "_blank",
      id: "tweet-quote" }, /*#__PURE__*/

    React.createElement("i", { class: "fab fa-twitter" }, " "))))));





};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("root"));