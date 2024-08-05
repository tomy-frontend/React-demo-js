// 使い回しがしやすいように一つの関数単位でコンポーネント化していく、ファイルを作成していく

import { ColorFullMessage } from "./components/ColorFullMessage";

//関数は大文字で始めるのがルール
export const App = () => {

  //JavaScript関数を記述することもできる
  const onClickButton = () => alert()

  //CSSのスタイルを定義することもできる！
  const contentStyle = {
    color: "#101010",
    fontSize: "2em",
    fontWeight: "bold",
    padding: "0.5em",
  };

  const contentStyleB = {
    color: "blue",
    fontSize: "1em",
    fontWeight: "bold",
  };

  return (
    //　返却するものはdiv等で囲わないといけないが、今はショートハンドで、空タグだけでいい！
    <>      
      <h1 style={contentStyle}>こんにちは！</h1>

      {/* ColorFullMessageでコンポーネント化できたものを表示できた！ */}
      <ColorFullMessage color="blue">お元気か！！！！！！！</ColorFullMessage>
      <ColorFullMessage color="green">超元気！！！</ColorFullMessage>
      <button onClick={onClickButton}>ボタン</button>       
    </>
  );
};
