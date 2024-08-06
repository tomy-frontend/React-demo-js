//propsの受け取りを省略して引数で直接分割代入で受け取っている
export const ColorFullMessage = ({ color, children }) => {

    //分割代入で下記記述をすると省略できる！
    // const { color, children } = props;

    console.log("--message--");

    const contentStyleA = {

        //名前が同じなら省略できる！
        // color: color,
        color,
        fontSize: "1em",
        fontWeight: "bold",
    }; 

    return (
        <p style={contentStyleA}>{children}</p>
    );
};
