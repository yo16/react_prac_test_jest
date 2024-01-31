import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from 'react-dom/test-utils';
import MyButton from "@/src/MyButton";

describe("myButtonのテスト", () => {
    test("ボタンをクリックするとON/OFFが切り替わる", async () => {
        // まず描画
        act(() => {
            render(<MyButton />);
        });

        // ユーザーを想定
        const user = userEvent.setup();

        // 初期状態をテスト
        //const myButton = screen.getByRole("button", {id:1});  // 指定したい場合
        const myButton = screen.getByRole("button");
        expect(myButton).toHaveTextContent("OFF");

        // クリック
        await act(async () => {
            await user.click(myButton);
        });

        // 今度はONになる
        expect(myButton).toHaveTextContent("ON");

    });

    it("itでもいいっていうだけのテスト", async () => {
        // 描画
        render(<MyButton />);

        // 初期状態をテスト
        const myButton = screen.getByRole("button");
        expect(myButton).toHaveTextContent("OFF");
    });

    test("描画されてすぐはOFFと表示されている", () => {
        // 描画
        const view = render(<MyButton />);

        // スナップショットを取る
        expect(view.container).toMatchSnapshot();
    });
});
