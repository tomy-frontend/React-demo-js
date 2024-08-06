// 使い回しがしやすいように一つの関数単位でコンポーネント化していく、ファイルを作成していく
import { useEffect, useState } from "react";
import { ColorFullMessage } from "./components/ColorFullMessage";

//再レンダリングを制するものがReact開発を制する


//関数は大文字で始めるのがルール
export const App = () => {
  console.log("--App--");

  const [num, setNum] = useState(0);
  const [isShowFace, setIsShowFace] = useState(false); //初期値はtrue
  
  //JavaScript関数を記述することもできる
  const onClickCountUp = () => {
    setNum((prev) => prev + 1); //現在のsetNumの値(prev)※変数名 の値を取得して、1づつカウントアップしていく　
    // setNum(num + 1); //１づつカウントアップされていくが、直接的な記述のため現在の値に+1では無くなってしまう可能性がある。
  };

  //isShowFaceの表示の切り替え
  const onClickToggle = () => {
    setIsShowFace(!isShowFace); //true,falseの値を反転させる
  };

  useEffect(() => {
      if(num > 0) {
        // numの値が3の倍数の時、setIsShowFaceの値をtrueにして表示させる
        if(num % 3 === 0) {
          isShowFace || setIsShowFace(true); 
        } else {
          isShowFace && setIsShowFace(false); 
        }
      }
  }, [num]);
  
  //CSSのスタイルを定義することもできる！
  const contentStyle = {
    color: "#101010",
    fontSize: "2em",
    fontWeight: "bold",
    padding: "0.5em",
  };

  return (
    //　返却するものはdiv等で囲わないといけないが、今はショートハンドで、空タグだけでいい！
    <>      
      <h1 style={contentStyle}>こんにちは！</h1>

      {/* ColorFullMessageでコンポーネント化できたものを表示できた！ */}
      <ColorFullMessage color="blue">お元気か！！！！！！！</ColorFullMessage>
      <ColorFullMessage color="green">超元気！！！</ColorFullMessage>
      <ColorFullMessage color="#030303">今日は何をするんですか？</ColorFullMessage>
      <ColorFullMessage color="#666666">お買い物をします！</ColorFullMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShowFace && <p>🥰</p>} {/* falsyなら左側が返却されて即終了、truesyなら右側まで評価されて出力される！ */}
    </>
  );
};
