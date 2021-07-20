import "./styles.css";

const onClickAddTodo = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  // 関数getElementById：htmlのidと紐づけて情報を取得する
  document.getElementById("add-text").value = "";

  // 関数createElement:タグ生成
  // divに<div></div>を設定している
  const div = document.createElement("div");
  // className:タグ内にclass名を付与する
  // <div class="list-row"></div>となる
  div.className = "list-row";

  // 関数createElement:タグ生成
  // liに<li></li>を設定している
  const li = document.createElement("li");

  // 関数innnertext:開始タグと終了タグの間に表示したいテキストを設定する
  li.innerText = inputText;

  // 関数appendChild：タグに子要素を追加する
  // これによりdivには<div><li></li></div>が設定される
  div.appendChild(li);

  // TODOリストの最後に追加する
  //　document.getElementById("incomplete-list")で<ul>～</ul>までの全てのhtmlを取得する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  // html上で付与したidを持つものに対して
  .getElementById("add-button")
  // clickイベントを付与する
  .addEventListener("click", () => onClickAddTodo());
