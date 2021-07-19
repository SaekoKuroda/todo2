import "./styles.css";

const onClickAddTodo = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // divタグ生成
  const div = document.createElement("div");
  alert(div);
};

document
  // html上で付与したidを持つものに対して
  .getElementById("add-button")
  // clickイベントを付与する
  .addEventListener("click", () => onClickAddTodo());
