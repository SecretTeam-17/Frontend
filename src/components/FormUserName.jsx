//Метод для вставки имени, откуда мы его берем я пока не знаю))
function checkName() {
  return "Имя";
}

function FormUserName() {
  return <p className="wrapper__form-username">{checkName()}</p>;
}

export { FormUserName };
